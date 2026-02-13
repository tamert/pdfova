import { en } from "../en";

export const az: typeof en = {
    ...en,
    welcome: "Salam,",
    efficiencyText: "Səmərəlilik sadəcə bir damla uzaqdadır",
    dropZoneTitle: "Fayllarınızı bura buraxın",
    dropZoneSub: "PDF, Şəkillər, Word və daha çoxunu dəstəkləyir",
    dashboard: "Panel",
    history: "Tarixçə",
    settings: "Ayarlar",
    help: "Kömək",
    about: "Haqqında",
    version: "Versiya",
    releaseNotes: "Buraxılış Qeydləri",
    outputDir: "Çıxış Qovluğu",
    selectFolder: "Qovluğu seç",
    noFolder: "Qovluq seçilməyib",
    processing: "Emal edilir...",
    selectFolderFirst: "Zəhmət olmasa əvvəlcə çıxış qovluğunu seçin!",
    comingSoon: "Tezliklə",
    categories: { all: "Hamısı", pdf: "PDF", word: "Word", image: "Şəkil", ocr: "OCR" },
    tools: {
        compress: { name: "PDF Sıxışdır", desc: "Keyfiyyəti qoruyaraq fayl ölçüsünü azaldın" },
        word: { name: "PDF-dən Mətn", desc: "Mətni oxunaqlı fayla çıxarın (DOCX tezliklə)" },
        signature: { name: "İmzanı Çıxar", desc: "PDF-lərdən imza şəkillərini çıxarın və ayırın" },
        resize: { name: "Toplu Ölçü Dəyiş", desc: "Yüzlərlə şəkli bir anda ölçüləndirin və optimallaşdırın" },
        ocr: { name: "OCR Aləti", desc: "Sənədlərinizdən mətn məzmununu çıxarın" },
        merge: { name: "PDF Birləşdir", desc: "Birdən çox PDF faylını birində birləşdirin" },
        split: { name: "PDF Böl", desc: "Səhifələri ayırın və ya müəyyən hissələri çıxarın" },
        imageToPdf: { name: "Şəkillərdən PDF", desc: "Şəkilləri sənədə çevirin və birləşdirin" }
    },
    mergeUI: {
        addItems: "Fayl əlavə et", clearList: "Siyahını təmizlə", startMerge: "İndi birləşdir",
        mergeTitle: "PDF Birləşdirmə Siyahısı", noFiles: "Hələ fayl əlavə edilməyib", orderHint: "Sıralamanı dəyişmək üçün düymələrdən istifadə edin"
    },
    resizeUI: {
        title: "Toplu Şəkil Ölçüləndirmə", addImages: "Şəkil əlavə et", clearList: "Təmizlə", startResize: "Ölçüləndir",
        noFiles: "Hələ şəkil əlavə edilməyib", modeExact: "Dəqiq Ölçü", modePercent: "Faiz", modeWidth: "Enə görə", modeHeight: "Hündürlüyə görə",
        widthLabel: "En (px)", heightLabel: "Hündürlük (px)", percentLabel: "Miqyas (%)", widthHint: "Hündürlük avtomatik hesablanır", heightHint: "En avtomatik hesablanır"
    },
    splitUI: {
        title: "PDF Böl", selectFile: "PDF seç", startSplit: "İndi böl",
        modeExtract: "Seçilənləri çıxar", modeSplitAll: "Bütün səhifələri böl",
        pagesFound: "Səhifə tapıldı", noFile: "Fayl seçilməyib", hint: "Seçmək/ləğv etmək üçün səhifələrə klikləyin"
    },
    imageToPdfUI: {
        title: "Şəkillərdən PDF", addImages: "Şəkil əlavə et", createPdf: "PDF yarat", clear: "Hamısını təmizlə",
        placeholder: "Şəkilləri tək bir PDF sənədinə çevirmək üçün əlavə edin"
    }
};

