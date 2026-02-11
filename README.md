# Pdfova 🚀

**Pdfova** is a high-performance, modern "File Format Conversion + Cleaning" Power Tool designed specifically for the Linux desktop. It brings the comfort of tools like Smallpdf and iLovePDF to a native, offline application.

![Pdfova Dashboard](https://raw.githubusercontent.com/tamert/pdfova/main/assets/screenshot-main.png)

## ✨ Features

- 📉 **PDF Compression:** Reduce file size without compromising quality.
- 📝 **PDF to Word:** Convert PDF documents to editable Word files.
- 🖋️ **Signature Extraction:** Intelligent extraction of signatures and images from PDFs.
- 🖼️ **Bulk Image Resizing:** High-speed, concurrent image optimization.
- 🔍 **OCR Tool:** Extract text from scanned documents and images.
- 🔗 **PDF Merger:** Quick and easy combining of multiple PDF files.

## 🚀 Key Advantages

- **Modern Desktop App:** Modern GNOME and dark mode aesthetics.
- **Offline Working:** Your documents stay private; no cloud uploads required.
- **Drag & Drop:** Context-aware file processing.
- **Bulk Processing:** Designed for efficiency and productivity.

## 🛠️ Tech Stack

- **Backend:** [Rust](https://www.rust-lang.org/) for safety and performance.
- **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) + [Tailwind CSS](https://tailwindcss.com/).
- **Bridge:** [Tauri v2](https://tauri.app/) for small binaries and native OS integration.

## 📦 Installation

Pdfova is available for all Debian-based distributions (including Pardus) and universally via Flathub.

### Debian / Pardus
Download the latest `.deb` package from the [Releases](https://github.com/tamert/pdfova/releases) page and install it:
```bash
sudo apt install ./pdfova_1.0.0_amd64.deb
```

### Flatpak
Available on Flathub soon:
```bash
flatpak install flathub com.tamert.Pdfova
```

## 🛠️ Development

To build Pdfova from source, you'll need Rust and Node.js installed.

1. **Clone the repo:**
   ```bash
   git clone https://github.com/tamert/pdfova.git
   cd pdfova
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run in development mode:**
   ```bash
   npm run tauri dev
   ```

## 📄 License

Licensed under the [GPL-3.0 License](LICENSE). 

---
Created by [Tamer](https://github.com/tamert) with ❤️ for the Open Source Community.
