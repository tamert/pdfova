export const translations = {
    en: {
        welcome: "Hello,",
        efficiencyText: "Efficiency is just one drop away",
        dropZoneTitle: "Drop your files here",
        dropZoneSub: "Support PDF, Images, Word & more",
        dashboard: "Dashboard",
        history: "History",
        settings: "Settings",
        proPlan: "Pro Plan",
        proDesc: "Unlock unlimited bulk processing & OCR power.",
        upgrade: "Upgrade Now",
        whatToDo: "What would you like to do today?",
        tools: {
            compress: {
                name: "Compress PDF",
                desc: "Reduce file size while keeping high quality"
            },
            word: {
                name: "PDF to Word",
                desc: "Convert PDFs to editable document formats"
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
                desc: "Extract text from scanned PDF and images"
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
        dropZoneTitle: "Dosyalarınızı buraya bırakın",
        dropZoneSub: "PDF, Görsel, Word ve daha fazlasını destekler",
        dashboard: "Panel",
        history: "Geçmiş",
        settings: "Ayarlar",
        proPlan: "Pro Plan",
        proDesc: "Sınırsız toplu işlem ve OCR gücünün kilidini açın.",
        upgrade: "Şimdi Yükselt",
        whatToDo: "Bugün ne yapmak istersiniz?",
        tools: {
            compress: {
                name: "PDF Sıkıştır",
                desc: "Kaliteyi koruyarak dosya boyutunu küçültün"
            },
            word: {
                name: "PDF'den Word'e",
                desc: "PDF'leri düzenlenebilir belgelere dönüştürün"
            },
            signature: {
                name: "İmza Çıkar",
                desc: "Belgelerden imzaları anında ayıklayın"
            },
            resize: {
                name: "Toplu Görsel Boyutlandır",
                desc: "Yüzlerce görseli aynı anda optimize edin"
            },
            ocr: {
                name: "OCR Aracı",
                desc: "Taranmış PDF ve görsellerden metin çıkarın"
            },
            merge: {
                name: "PDF Birleştir",
                desc: "Birden fazla PDF'i tek bir belgede birleştirin"
            }
        }
    }
};

export type Language = "en" | "tr";
export type TranslationKey = keyof typeof translations.en;
