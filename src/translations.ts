export const versionInfo = {
    current: "v0.1.1",
    releaseName: "Initial Release",
    date: "2026-02-12",
    notes: {
        en: [
            "PDF compression, merge, and text extraction",
            "PDF to Word (.docx) conversion",
            "Image resizing with Lanczos3 filter",
            "Signature candidate detection from PDFs",
            "Multi-language UI (Turkish & English)",
            "Activity history and output directory settings"
        ],
        tr: [
            "PDF sıkıştırma, birleştirme ve metin çıkarma",
            "PDF'den Word (.docx) formatına dönüştürme",
            "Lanczos3 filtresi ile görsel boyutlandırma",
            "PDF belgelerinden imza adayı tespiti",
            "Çoklu dil desteği (Türkçe & İngilizce)",
            "İşlem geçmişi ve çıktı klasörü ayarları"
        ]
    }
};

export const translations = {
    en: {
        welcome: "Hello,",
        efficiencyText: "Efficiency is just one drop away",
        dropZoneTitle: "Drop your files here",
        dropZoneSub: "Support PDF, Images, Word & more",
        dashboard: "Panel",
        history: "History",
        settings: "Settings",
        help: "Help",
        about: "About",
        version: "Version",
        releaseNotes: "Release Notes",
        outputDir: "Output Folder",
        selectFolder: "Select folder",
        noFolder: "No folder selected",
        processing: "Processing...",
        selectFolderFirst: "Please select output directory first!",
        comingSoon: "Coming Soon",
        categories: {
            all: "All",
            pdf: "PDF",
            word: "Word",
            image: "Image",
            ocr: "OCR"
        },
        tools: {
            compress: {
                name: "Compress PDF",
                desc: "Reduce file size while keeping quality"
            },
            word: {
                name: "PDF to Text",
                desc: "Extract text to a readable file (DOCX coming soon)"
            },
            signature: {
                name: "Signature Extract",
                desc: "Isolate signatures from documents instantly"
            },
            resize: {
                name: "Bulk Image Resize",
                desc: "Resize and optimize 100s of images at once"
            },
            ocr: {
                name: "OCR Tool",
                desc: "Extract text content from your documents"
            },
            merge: {
                name: "Merge PDF",
                desc: "Combine multiple PDF files into one"
            }
        }
    },
    tr: {
        welcome: "Merhaba,",
        efficiencyText: "Verimlilik sadece bir damla uzağınızda",
        dropZoneTitle: "Dosyaları buraya bırakın",
        dropZoneSub: "PDF, Görsel, Word ve daha fazlasını destekler",
        dashboard: "Panel",
        history: "Geçmiş",
        settings: "Ayarlar",
        help: "Yardım",
        about: "Hakkında",
        version: "Versiyon",
        releaseNotes: "Sürüm Notları",
        outputDir: "Çıktı Klasörü",
        selectFolder: "Klasör seç",
        noFolder: "Klasör seçilmedi",
        processing: "İşleniyor...",
        selectFolderFirst: "Lütfen önce çıktı klasörü seçin!",
        comingSoon: "Yakında Gelecek",
        categories: {
            all: "Hepsi",
            pdf: "PDF",
            word: "Word",
            image: "Görsel",
            ocr: "Metin"
        },
        tools: {
            compress: {
                name: "PDF Sıkıştır",
                desc: "Kaliteyi koruyarak boyutu küçültün"
            },
            word: {
                name: "Metin Çıkar (PDF)",
                desc: "PDF metinlerini dışa aktar (DOCX yakında)"
            },
            signature: {
                name: "İmza Çıkar",
                desc: "Belgelerden imzaları anında ayıklayın"
            },
            resize: {
                name: "Toplu Boyutlandır",
                desc: "Yüzlerce görseli aynı anda optimize edin"
            },
            ocr: {
                name: "Metin Tanıma (OCR)",
                desc: "Taranmış belgelerden metin çıkarın"
            },
            merge: {
                name: "PDF Birleştir",
                desc: "Birden fazla PDF'i tek belge yapın"
            }
        }
    }
};

export type Language = "en" | "tr";
