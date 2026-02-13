import { en } from "./en";

export const tr: typeof en = {
    ...en,
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
    categories: { all: "Hepsi", pdf: "PDF", word: "Word", image: "Görsel", ocr: "Metin" },
    tools: {
        compress: { name: "PDF Sıkıştır", desc: "Kaliteyi koruyarak boyutu küçültün" },
        word: { name: "Metin Çıkar (PDF)", desc: "PDF metinlerini dışa aktar (DOCX yakında)" },
        signature: { name: "İmza Çıkar", desc: "PDF belgelerinden imza görsellerini çıkarın" },
        resize: { name: "Toplu Boyutlandır", desc: "Yüzlerce görseli aynı anda optimize edin" },
        ocr: { name: "Metin Tanıma (OCR)", desc: "Taranmış belgelerden metin çıkarın" },
        merge: { name: "PDF Birleştir", desc: "Birden fazla PDF'i tek belge yapın" },
        split: { name: "PDF Ayır", desc: "Sayfaları ayırın veya belirli kısımları dışa aktarın" },
        imageToPdf: { name: "Görselden PDF'e", desc: "Görselleri PDF belgesine dönüştürün" }
    },
    mergeUI: {
        addItems: "Dosya Ekle", clearList: "Listeyi Temizle", startMerge: "Birleştir",
        mergeTitle: "PDF Birleştirme Listesi", noFiles: "Henüz dosya eklenmedi", orderHint: "Sıralamayı değiştirmek için butonları kullanın"
    },
    resizeUI: {
        title: "Toplu Görsel Boyutlandırma", addImages: "Görsel Ekle", clearList: "Temizle",
        startResize: "Ölçekle", noFiles: "Henüz görsel eklenmedi", modeExact: "Tam Boyut",
        modePercent: "Yüzde", modeWidth: "Genişliğe Göre", modeHeight: "Yüksekliğe Göre",
        widthLabel: "Genişlik (px)", heightLabel: "Yükseklik (px)", percentLabel: "Oran (%)",
        widthHint: "Yükseklik otomatik hesaplanır", heightHint: "Genişlik otomatik hesaplanır"
    },
    splitUI: {
        title: "PDF Ayır", selectFile: "PDF Seç", startSplit: "Ayır",
        modeExtract: "Seçilenleri Çıkar", modeSplitAll: "Tüm Sayfaları Ayır",
        pagesFound: "Sayfa bulundu", noFile: "Dosya seçilmedi", hint: "Seçmek/kaldırmak için sayfalara tıklayın"
    },
    imageToPdfUI: {
        title: "Görselden PDF'e", addImages: "Görsel Ekle", createPdf: "PDF Oluştur", clear: "Temizle",
        placeholder: "Görselleri tek bir PDF belgesine dönüştürmek için ekleyin"
    }
};
