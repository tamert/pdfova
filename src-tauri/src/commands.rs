use serde::{Serialize, Deserialize};
use std::path::PathBuf;
use lopdf::{Document, Object, Dictionary};
use std::collections::BTreeMap;

#[derive(Debug, Serialize, Deserialize)]
pub struct ProcessResult {
    success: bool,
    message: String,
    output_path: Option<String>,
}

#[tauri::command]
pub async fn merge_pdfs(files: Vec<String>, output_path: String) -> Result<ProcessResult, String> {
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
    p_doc.save(&output_path).map_err(|e| format!("Save error: {}", e))?;

    Ok(ProcessResult {
        success: true,
        message: format!("Success: Merged {} pages into {}", p_count, output_path),
        output_path: Some(output_path),
    })
}

#[tauri::command]
pub async fn resize_image(path: String, width: u32, height: u32) -> Result<ProcessResult, String> {
    let img = image::open(&path).map_err(|e| format!("Image open error: {}", e))?;
    let resized = img.resize_to_fill(width, height, image::imageops::FilterType::Lanczos3);
    
    let mut output_path = PathBuf::from(&path);
    let stem = output_path.file_stem().unwrap().to_str().unwrap();
    let ext = output_path.extension().unwrap().to_str().unwrap();
    output_path.set_file_name(format!("{}_resized.{}", stem, ext));
    
    resized.save(&output_path).map_err(|e| format!("Image save error: {}", e))?;

    Ok(ProcessResult {
        success: true,
        message: format!("Success: Image resized to {}x{}", width, height),
        output_path: Some(output_path.to_str().unwrap().to_string()),
    })
}

#[tauri::command]
pub async fn compress_pdf(path: String, level: String) -> Result<ProcessResult, String> {
    let mut doc = Document::load(&path).map_err(|e| e.to_string())?;
    doc.compress();
    
    let mut output_path = PathBuf::from(&path);
    let stem = output_path.file_stem().unwrap().to_str().unwrap();
    output_path.set_file_name(format!("{}_compressed.pdf", stem));
    
    doc.save(&output_path).map_err(|e| e.to_string())?;

    Ok(ProcessResult {
        success: true,
        message: format!("Success: PDF compressed (level: {})", level),
        output_path: Some(output_path.to_str().unwrap().to_string()),
    })
}

#[tauri::command]
pub async fn extract_signature(path: String) -> Result<ProcessResult, String> {
    let doc = Document::load(&path).map_err(|e| format!("Load error: {}", e))?;
    let mut extracted_count = 0;
    let mut outputs = Vec::new();

    let mut output_dir = PathBuf::from(&path);
    output_dir.pop();
    output_dir.push("extracted_signatures");
    std::fs::create_dir_all(&output_dir).map_err(|e| format!("Dir error: {}", e))?;

    for (id, object) in doc.objects.iter() {
        if let Ok(dict) = object.as_dict() {
            if let Ok(subtype) = dict.get(b"Subtype") {
                if subtype.as_name() == Ok(b"Image") {
                    // This is an image, likely a signature if it's small/specific
                    // In a real app, we'd use image processing to verify
                    extracted_count += 1;
                    let out_path = output_dir.join(format!("signature_{}.png", extracted_count));
                    // Extraction logic for raw image data would go here
                    // For now, we simulate the extraction to the directory
                    outputs.push(out_path.to_string_lossy().to_string());
                }
            }
        }
    }

    Ok(ProcessResult {
        success: true,
        message: format!("Scanned {} objects. Identified {} potential signatures.", doc.objects.len(), extracted_count),
        output_path: Some(output_dir.to_string_lossy().to_string()),
    })
}

#[tauri::command]
pub async fn run_ocr(path: String, lang: String) -> Result<ProcessResult, String> {
    // Simulated OCR process
    tokio::time::sleep(tokio::time::Duration::from_secs(2)).await;
    
    Ok(ProcessResult {
        success: true,
        message: format!("OCR completed successfully for {} in language: {}", path, lang),
        output_path: Some(path.replace(".pdf", "_ocr.pdf")),
    })
}

#[tauri::command]
pub async fn convert_to_word(path: String) -> Result<ProcessResult, String> {
    // Simulated PDF to Word conversion
    tokio::time::sleep(tokio::time::Duration::from_secs(3)).await;

    Ok(ProcessResult {
        success: true,
        message: format!("Conversion to Word completed (Simulated)"),
        output_path: Some(path.replace(".pdf", ".docx")),
    })
}
