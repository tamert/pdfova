export const versionInfo = {
    current: "v0.2.0",
    releaseName: "Engine Upgrade & Turkish Support",
    date: "2026-02-12",
    notes: {
        en: [
            "Upgraded text engine with full Turkish character support",
            "Full signature image extraction (decoding & exporting)",
            "Robust PDF to Word conversion with XML sanitization",
            "Improved responsive UI grid layout",
            "Stability and performance improvements"
        ],
        tr: [
            "Tam Türkçe karakter destekli gelişmiş metin motoru",
            "PDF belgelerinden tam imza ve görsel ayıklama",
            "XML temizleme ile daha stabil PDF'den Word'e dönüştürme",
            "Geliştirilmiş duyarlı (responsive) UI düzeni",
            "Stabilite ve performans iyileştirmeleri"
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
                desc: "Extract and isolate signature images from PDFs"
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
        },
        mergeUI: {
            addItems: "Add Files",
            clearList: "Clear List",
            startMerge: "Merge Now",
            mergeTitle: "PDF Merge List",
            noFiles: "No files added yet",
            orderHint: "Use buttons to reorder files"
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
                desc: "PDF belgelerinden imza görsellerini çıkarın"
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
        },
        mergeUI: {
            addItems: "Dosya Ekle",
            clearList: "Listeyi Temizle",
            startMerge: "Birleştir",
            mergeTitle: "PDF Birleştirme Listesi",
            noFiles: "Henüz dosya eklenmedi",
            orderHint: "Sıralamayı değiştirmek için butonları kullanın"
        }
    }
};

export type Language = "en" | "tr";
