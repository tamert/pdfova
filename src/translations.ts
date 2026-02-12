export const versionInfo = {
    current: "v0.2.3",
    releaseName: "Production Ready PDF & Image Engine",
    date: "2026-02-13",
    notes: {
        en: [
            "Images to PDF: Convert and combine multiple images into a professional PDF",
            "Visual PDF Split: See and select specific pages to extract or split-all",
            "Fixed PDF Merge: Fully compatible with Apple Preview & strict readers",
            "Pardus & Linux Support: Optimized installers for Debian-based systems",
            "Batch Image Resize: Added 100+ image processing with 4 scaling modes"
        ],
        tr: [
            "Görselden PDF'e: Birden fazla görseli tek bir PDF belgesine dönüştürün",
            "Görsel PDF Ayırma: Sayfaları görerek seçin, ayıklayın veya tümünü bölün",
            "PDF Birleştirme Fix: Apple Önizleme ve katı okuyucularla tam uyum",
            "Pardus ve Linux Desteği: Debian tabanlı sistemler için optimize edilmiş paketler",
            "Toplu Görsel Boyutlandırma: 4 farklı mod ile 100+ görsel işleme"
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
            },
            split: {
                name: "Split PDF",
                desc: "Separate pages or extract specific parts"
            },
            imageToPdf: {
                name: "Images to PDF",
                desc: "Convert and combine images into a document"
            }
        },
        mergeUI: {
            addItems: "Add Files",
            clearList: "Clear List",
            startMerge: "Merge Now",
            mergeTitle: "PDF Merge List",
            noFiles: "No files added yet",
            orderHint: "Use buttons to reorder files"
        },
        resizeUI: {
            title: "Batch Image Resize",
            addImages: "Add Images",
            clearList: "Clear",
            startResize: "Resize",
            noFiles: "No images added yet",
            modeExact: "Exact Size",
            modePercent: "Percentage",
            modeWidth: "By Width",
            modeHeight: "By Height",
            widthLabel: "Width (px)",
            heightLabel: "Height (px)",
            percentLabel: "Scale (%)",
            widthHint: "Height auto-calculated",
            heightHint: "Width auto-calculated"
        },
        splitUI: {
            title: "Split PDF",
            selectFile: "Choose PDF",
            startSplit: "Split Now",
            modeExtract: "Extract Selected",
            modeSplitAll: "Split All Pages",
            pagesFound: "Pages found",
            noFile: "No file selected",
            hint: "Click pages to select/deselect"
        },
        imageToPdfUI: {
            title: "Images to PDF",
            addImages: "Add Images",
            createPdf: "Create PDF",
            clear: "Clear All",
            placeholder: "Add images to convert them into a single PDF document"
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
            },
            split: {
                name: "PDF Ayır",
                desc: "Sayfaları ayırın veya belirli kısımları dışa aktarın"
            },
            imageToPdf: {
                name: "Görselden PDF'e",
                desc: "Görselleri PDF belgesine dönüştürün"
            }
        },
        mergeUI: {
            addItems: "Dosya Ekle",
            clearList: "Listeyi Temizle",
            startMerge: "Birleştir",
            mergeTitle: "PDF Birleştirme Listesi",
            noFiles: "Henüz dosya eklenmedi",
            orderHint: "Sıralamayı değiştirmek için butonları kullanın"
        },
        resizeUI: {
            title: "Toplu Görsel Boyutlandırma",
            addImages: "Görsel Ekle",
            clearList: "Temizle",
            startResize: "Ölçekle",
            noFiles: "Henüz görsel eklenmedi",
            modeExact: "Tam Boyut",
            modePercent: "Yüzde",
            modeWidth: "Genişliğe Göre",
            modeHeight: "Yüksekliğe Göre",
            widthLabel: "Genişlik (px)",
            heightLabel: "Yükseklik (px)",
            percentLabel: "Oran (%)",
            widthHint: "Yükseklik otomatik hesaplanır",
            heightHint: "Genişlik otomatik hesaplanır"
        },
        splitUI: {
            title: "PDF Ayır",
            selectFile: "PDF Seç",
            startSplit: "Ayır",
            modeExtract: "Seçilenleri Çıkar",
            modeSplitAll: "Tüm Sayfaları Ayır",
            pagesFound: "Sayfa bulundu",
            noFile: "Dosya seçilmedi",
            hint: "Seçmek/kaldırmak için sayfalara tıklayın"
        },
        imageToPdfUI: {
            title: "Görselden PDF'e",
            addImages: "Görsel Ekle",
            createPdf: "PDF Oluştur",
            clear: "Temizle",
            placeholder: "Görselleri tek bir PDF belgesine dönüştürmek için ekleyin"
        }
    }
};

export type Language = "en" | "tr";
