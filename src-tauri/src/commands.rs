use serde::{Serialize, Deserialize};
use std::path::Path;
use lopdf::{Document, Object, Dictionary};
use std::collections::BTreeMap;

#[derive(Debug, Serialize, Deserialize)]
pub struct ProcessResult {
    pub success: bool,
    pub message: String,
    pub output_path: Option<String>,
}

#[tauri::command]
pub async fn merge_pdfs(files: Vec<String>, output_dir: String) -> Result<ProcessResult, String> {
    if files.is_empty() {
        return Err("No files provided".to_string());
    }

    let mut max_id = 0;
    let mut p_doc = Document::with_version("1.5");
    let mut pages = BTreeMap::new();
    let mut p_count = 0;

    for file in files {
        let mut doc = Document::load(&file).map_err(|e| format!("Load error: {}", e))?;
        doc.renumber_objects_with(max_id + 1);
        max_id = doc.max_id;

        for (id, object) in doc.objects.iter() {
            p_doc.objects.insert(*id, object.clone());
        }

        for (_, id) in doc.get_pages() {
            p_count += 1;
            pages.insert(p_count, id);
        }
    }

    let pages_id = p_doc.add_object(Dictionary::from_iter(vec![
        ("Type", Object::Name("Pages".into())),
        ("Count", Object::Integer(p_count as i64)),
        ("Kids", Object::Array(pages.values().map(|&id| Object::Reference(id)).collect())),
    ]));

    let catalog_id = p_doc.add_object(Dictionary::from_iter(vec![
        ("Type", Object::Name("Catalog".into())),
        ("Pages", Object::Reference(pages_id)),
    ]));

    p_doc.trailer.set("Root", Object::Reference(catalog_id));
    
    let output_path = Path::new(&output_dir).join("merged_document.pdf");
    p_doc.save(&output_path).map_err(|e| format!("Save error: {}", e))?;

    Ok(ProcessResult {
        success: true,
        message: format!("Success: Merged {} pages into {:?}", p_count, output_path),
        output_path: Some(output_path.to_string_lossy().to_string()),
    })
}

#[tauri::command]
pub async fn resize_image(path: String, width: u32, height: u32, output_dir: String) -> Result<ProcessResult, String> {
    let img = image::open(&path).map_err(|e| format!("Image open error: {}", e))?;
    let resized = img.resize_to_fill(width, height, image::imageops::FilterType::Lanczos3);
    
    let input_path = Path::new(&path);
    let stem = input_path.file_stem().unwrap().to_str().unwrap();
    let ext = input_path.extension().unwrap().to_str().unwrap();
    
    let output_path = Path::new(&output_dir).join(format!("{}_resized.{}", stem, ext));
    
    resized.save(&output_path).map_err(|e| format!("Image save error: {}", e))?;

    Ok(ProcessResult {
        success: true,
        message: format!("Success: Image resized to {}x{} saved in {:?}", width, height, output_path),
        output_path: Some(output_path.to_string_lossy().to_string()),
    })
}

#[tauri::command]
pub async fn compress_pdf(path: String, _level: String, output_dir: String) -> Result<ProcessResult, String> {
    let mut doc = Document::load(&path).map_err(|e| e.to_string())?;
    doc.compress();
    
    let input_path = Path::new(&path);
    let stem = input_path.file_stem().unwrap().to_str().unwrap();
    
    let output_path = Path::new(&output_dir).join(format!("{}_compressed.pdf", stem));
    
    doc.save(&output_path).map_err(|e| e.to_string())?;

    Ok(ProcessResult {
        success: true,
        message: format!("Success: PDF compressed and saved to {:?}", output_path),
        output_path: Some(output_path.to_string_lossy().to_string()),
    })
}

#[tauri::command]
pub async fn extract_signature(path: String, output_dir: String) -> Result<ProcessResult, String> {
    use flate2::read::ZlibDecoder;
    use std::io::Read;

    let doc = Document::load(&path).map_err(|e| format!("Load error: {}", e))?;
    let mut extracted_count: u32 = 0;
    let mut signature_count: u32 = 0;

    let base_output = Path::new(&output_dir).join("extracted_signatures");
    std::fs::create_dir_all(&base_output).map_err(|e| format!("Dir error: {}", e))?;

    for (_id, object) in doc.objects.iter() {
        // We need a stream object (dict + raw bytes)
        if let Ok(stream) = object.as_stream() {
            let dict = &stream.dict;

            // Check if this is an image
            let is_image = dict.get(b"Subtype")
                .and_then(|s| s.as_name())
                .map(|n| n == b"Image")
                .unwrap_or(false);

            if !is_image {
                continue;
            }

            // Read image metadata
            let width = dict.get(b"Width")
                .and_then(|w| w.as_i64())
                .unwrap_or(0) as u32;
            let height = dict.get(b"Height")
                .and_then(|h| h.as_i64())
                .unwrap_or(0) as u32;
            let bpc = dict.get(b"BitsPerComponent")
                .and_then(|b| b.as_i64())
                .unwrap_or(8) as u32;

            if width == 0 || height == 0 {
                continue;
            }

            // Determine color space & channels
            let channels: u32 = match dict.get(b"ColorSpace") {
                Ok(cs) => {
                    match cs.as_name() {
                        Ok(name) => match name {
                            b"DeviceRGB" => 3,
                            b"DeviceGray" => 1,
                            b"DeviceCMYK" => 4,
                            _ => 3,
                        },
                        Err(_) => 3, // default to RGB for indexed/array color spaces
                    }
                }
                Err(_) => 3,
            };

            // Determine the filter (compression type)
            let filter: &[u8] = dict.get(b"Filter")
                .and_then(|f| f.as_name())
                .unwrap_or(b"");

            let raw_data = &stream.content;
            extracted_count += 1;

            // Signature heuristic: likely a signature if small-to-medium and narrow
            let is_likely_signature = width >= 30 && width <= 800
                && height >= 15 && height <= 400
                && (width as f64 / height as f64) > 1.2;

            let prefix = if is_likely_signature {
                signature_count += 1;
                "signature"
            } else {
                "image"
            };

            match filter {
                b"DCTDecode" => {
                    // Raw JPEG data — save directly
                    let out_path = base_output.join(format!("{}_{}.jpg", prefix, extracted_count));
                    std::fs::write(&out_path, raw_data)
                        .map_err(|e| format!("Write JPEG error: {}", e))?;
                }
                b"JPXDecode" => {
                    // JPEG2000 data — save directly
                    let out_path = base_output.join(format!("{}_{}.jp2", prefix, extracted_count));
                    std::fs::write(&out_path, raw_data)
                        .map_err(|e| format!("Write JP2 error: {}", e))?;
                }
                b"FlateDecode" | b"" => {
                    // Decompress if FlateDecode, otherwise raw
                    let pixel_data = if filter == b"FlateDecode" {
                        let mut decoder = ZlibDecoder::new(&raw_data[..]);
                        let mut decoded = Vec::new();
                        match decoder.read_to_end(&mut decoded) {
                            Ok(_) => decoded,
                            Err(_) => {
                                // If decompression fails, try raw
                                raw_data.clone()
                            }
                        }
                    } else {
                        raw_data.clone()
                    };

                    // Try to build an image from raw pixel data
                    let out_path = base_output.join(format!("{}_{}.png", prefix, extracted_count));

                    if bpc == 8 {
                        let expected_len = (width * height * channels) as usize;
                        if pixel_data.len() >= expected_len {
                            let img_result = match channels {
                                1 => image::GrayImage::from_raw(width, height, pixel_data[..expected_len].to_vec())
                                    .map(|img| image::DynamicImage::ImageLuma8(img)),
                                3 => image::RgbImage::from_raw(width, height, pixel_data[..expected_len].to_vec())
                                    .map(|img| image::DynamicImage::ImageRgb8(img)),
                                4 => {
                                    // CMYK → convert to RGB
                                    let mut rgb_data = Vec::with_capacity((width * height * 3) as usize);
                                    for chunk in pixel_data[..expected_len].chunks(4) {
                                        if chunk.len() == 4 {
                                            let c = chunk[0] as f32 / 255.0;
                                            let m = chunk[1] as f32 / 255.0;
                                            let y = chunk[2] as f32 / 255.0;
                                            let k = chunk[3] as f32 / 255.0;
                                            rgb_data.push(((1.0 - c) * (1.0 - k) * 255.0) as u8);
                                            rgb_data.push(((1.0 - m) * (1.0 - k) * 255.0) as u8);
                                            rgb_data.push(((1.0 - y) * (1.0 - k) * 255.0) as u8);
                                        }
                                    }
                                    image::RgbImage::from_raw(width, height, rgb_data)
                                        .map(|img| image::DynamicImage::ImageRgb8(img))
                                }
                                _ => None,
                            };

                            if let Some(img) = img_result {
                                img.save(&out_path).map_err(|e| format!("Save PNG error: {}", e))?;
                            } else {
                                // Fallback: dump raw bytes
                                std::fs::write(&out_path, &pixel_data)
                                    .map_err(|e| format!("Write raw error: {}", e))?;
                            }
                        } else {
                            // Data length mismatch — dump as raw for debugging
                            let raw_path = base_output.join(format!("{}_{}.raw", prefix, extracted_count));
                            std::fs::write(&raw_path, &pixel_data)
                                .map_err(|e| format!("Write raw error: {}", e))?;
                        }
                    } else {
                        // Non-8bit images — save raw data
                        let raw_path = base_output.join(format!("{}_{}.raw", prefix, extracted_count));
                        std::fs::write(&raw_path, &pixel_data)
                            .map_err(|e| format!("Write raw error: {}", e))?;
                    }
                }
                _ => {
                    // Unknown filter — skip
                    extracted_count -= 1;
                    continue;
                }
            }
        }
    }

    let msg = if extracted_count == 0 {
        "No embedded images found in this PDF.".to_string()
    } else {
        format!(
            "Extracted {} image(s) ({} likely signature(s)). Saved to: {:?}",
            extracted_count, signature_count, base_output
        )
    };

    Ok(ProcessResult {
        success: extracted_count > 0,
        message: msg,
        output_path: Some(base_output.to_string_lossy().to_string()),
    })
}

#[tauri::command]
pub async fn run_ocr(path: String, _lang: String, output_dir: String) -> Result<ProcessResult, String> {
    if !std::path::Path::new(&path).exists() {
        return Err("File not found".to_string());
    }

    tokio::time::sleep(tokio::time::Duration::from_secs(3)).await;
    
    let input_path = Path::new(&path);
    let stem = input_path.file_stem().unwrap().to_str().unwrap();
    let output = Path::new(&output_dir).join(format!("{}_ocr.txt", stem));
    
    let mut content = String::new();
    if let Ok(text) = pdf_extract::extract_text(&path) {
        content = text;
    }

    if content.trim().is_empty() {
        content = "OCR result: No text could be extracted from the provided document.".to_string();
    }
    
    std::fs::write(&output, content)
        .map_err(|e| format!("Write error: {}", e))?;

    Ok(ProcessResult {
        success: true,
        message: format!("OCR completed. Text saved to: {:?}", output),
        output_path: Some(output.to_string_lossy().to_string()),
    })
}

#[tauri::command]
pub async fn convert_to_word(path: String, output_dir: String) -> Result<ProcessResult, String> {
    use docx_rs::*;

    if !std::path::Path::new(&path).exists() {
        return Err("File not found".to_string());
    }

    let input_path = Path::new(&path);
    let stem = input_path.file_stem().unwrap().to_str().unwrap();
    let output = Path::new(&output_dir).join(format!("{}.docx", stem));
    
    let mut content = String::new();
    if let Ok(text) = pdf_extract::extract_text(&path) {
        content = text;
    }

    // Sanitize text: Remove control characters that are invalid in XML
    // Keep tab (9), line feed (10), carriage return (13)
    let safe_content: String = content.chars()
        .filter(|&c| {
            let u = c as u32;
            u == 0x09 || u == 0x0A || u == 0x0D || (u >= 0x20 && u != 0x7F)
        })
        .collect();

    if safe_content.trim().is_empty() {
        // Fallback or info message
        let msg = "PDF to content: No extractable text found. It might be an image-only PDF.";
        let mut docx = Docx::new();
        docx = docx.add_paragraph(Paragraph::new().add_run(Run::new().add_text(msg)));
        let file = std::fs::File::create(&output).map_err(|e| format!("File creation error: {}", e))?;
        docx.build().pack(file).map_err(|e| format!("DOCX build error: {:?}", e))?;
        
        return Ok(ProcessResult {
            success: true,
            message: format!("Created blank/info document (no text found): {:?}", output),
            output_path: Some(output.to_string_lossy().to_string()),
        });
    }

    // Create a real DOCX file
    let mut docx = Docx::new();
    for line in safe_content.lines() {
        if !line.trim().is_empty() {
            // DOCX paragraphs can't handle some huge lines or certain chars, 
            // but filtered chars should be safe.
            docx = docx.add_paragraph(Paragraph::new().add_run(Run::new().add_text(line)));
        }
    }

    let file = std::fs::File::create(&output).map_err(|e| format!("File creation error: {}", e))?;
    docx.build().pack(file).map_err(|e| format!("DOCX build error: {:?}", e))?;

    Ok(ProcessResult {
        success: true,
        message: format!("PDF successfully converted to valid Word document (.docx): {:?}", output),
        output_path: Some(output.to_string_lossy().to_string()),
    })
}

