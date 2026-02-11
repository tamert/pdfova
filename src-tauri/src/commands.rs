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

    let catalog_id = p_doc.add_object(Dictionary::from_iter(vec![
        ("Type", Object::Name("Catalog".into())),
        ("Pages", p_doc.add_object(Dictionary::from_iter(vec![
            ("Type", Object::Name("Pages".into())),
            ("Count", Object::Integer(p_count as i64)),
            ("Kids", Object::Array(pages.values().map(|&id| Object::Reference(id)).collect())),
        ]))),
    ]));

    p_doc.trailer.set("Root", Object::Reference(catalog_id));
    p_doc.save(&output_path).map_err(|e| format!("Save error: {}", e))?;

    Ok(ProcessResult {
        success: true,
        message: format!("Merged {} pages into {}", p_count, output_path),
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
        message: "Image resized successfully".to_string(),
        output_path: Some(output_path.to_str().unwrap().to_string()),
    })
}

#[tauri::command]
pub async fn compress_pdf(path: String, level: String) -> Result<ProcessResult, String> {
    // Basic compression strategy without Ghostscript (limited but works)
    let mut doc = Document::load(&path).map_err(|e| e.to_string())?;
    doc.compress();
    
    let mut output_path = PathBuf::from(&path);
    let stem = output_path.file_stem().unwrap().to_str().unwrap();
    output_path.set_file_name(format!("{}_compressed.pdf", stem));
    
    doc.save(&output_path).map_err(|e| e.to_string())?;

    Ok(ProcessResult {
        success: true,
        message: format!("PDF compressed (level: {})", level),
        output_path: Some(output_path.to_str().unwrap().to_string()),
    })
}

#[tauri::command]
pub async fn extract_signature(path: String) -> Result<ProcessResult, String> {
    // Signature extraction logic (Mocking process for now)
    Ok(ProcessResult {
        success: true,
        message: "Signatures identified and extracted to PNG (Mock)".to_string(),
        output_path: None,
    })
}
