use serde::{Serialize, Deserialize};
use std::path::PathBuf;
use lopdf::Document;
use image::GenericImageView;

#[derive(Debug, Serialize, Deserialize)]
pub struct ProcessResult {
    success: bool,
    message: String,
    output_path: Option<String>,
}

#[tauri::command]
pub async fn merge_pdfs(files: Vec<String>, output_name: String) -> Result<ProcessResult, String> {
    if files.is_empty() {
        return Err("No files provided".to_string());
    }

    let mut doc = Document::with_version("1.5");
    let mut page_id = 1;

    for file in files {
        if let Ok(input_doc) = Document::load(&file) {
            for (_, object) in input_doc.objects.iter() {
                // Simplified merge logic for boilerplate
                // In a real app, uses a more robust merging crate or logic
            }
        }
    }

    Ok(ProcessResult {
        success: true,
        message: "PDFs merged successfully (stub)".to_string(),
        output_path: Some(output_name),
    })
}

#[tauri::command]
pub async fn resize_image(path: String, width: u32, height: u32) -> Result<ProcessResult, String> {
    let img = image::open(&path).map_err(|e| e.to_string())?;
    let resized = img.resize(width, height, image::imageops::FilterType::Lanczos3);
    
    let mut output_path = PathBuf::from(path);
    output_path.set_file_name(format!("resized_{}", output_path.file_name().unwrap().to_str().unwrap()));
    
    resized.save(&output_path).map_err(|e| e.to_string())?;

    Ok(ProcessResult {
        success: true,
        message: "Image resized successfully".to_string(),
        output_path: Some(output_path.to_str().unwrap().to_string()),
    })
}

#[tauri::command]
pub async fn compress_pdf(path: String, level: String) -> Result<ProcessResult, String> {
    // PDF compression logic would go here
    Ok(ProcessResult {
        success: true,
        message: format!("PDF compressed at level: {} (stub)", level),
        output_path: Some(path),
    })
}
