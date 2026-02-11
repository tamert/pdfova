#[cfg_attr(mobile, tauri::mobile_entry_point)]
mod commands;

pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            commands::merge_pdfs,
            commands::resize_image,
            commands::compress_pdf,
            commands::extract_signature,
            commands::run_ocr,
            commands::convert_to_word
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
