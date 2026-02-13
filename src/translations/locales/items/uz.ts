import { en } from "../en";

export const uz: typeof en = {
    ...en,
    welcome: "Salom,",
    efficiencyText: "Samaradorlik atigi bir tomchi uzoqda",
    dropZoneTitle: "Fayllarni shu yerga tashlang",
    dropZoneSub: "PDF, rasmlar, Word va boshqalarni qo‘llab-quvvatlaydi",
    dashboard: "Panel",
    history: "Tarix",
    settings: "Sozlamalar",
    help: "Yordam",
    about: "Haqida",
    version: "Versiya",
    releaseNotes: "Reliz Eslatmalari",
    outputDir: "Chiqish Papkasi",
    selectFolder: "Papkani tanlang",
    noFolder: "Papka tanlanmagan",
    processing: "Qayta ishlanmoqda...",
    selectFolderFirst: "Iltimos, avval chiqish papkasini tanlang!",
    comingSoon: "Tez orada",
    categories: { all: "Hammasi", pdf: "PDF", word: "Word", image: "Rasm", ocr: "OCR" },
    tools: {
        compress: { name: "PDF siqish", desc: "Sifatni saqlagan holda fayl hajmini kamaytiring" },
        word: { name: "PDF dan matn", desc: "Matnni o‘qiladigan faylga ajrating (DOCX tez orada)" },
        signature: { name: "Imzo ajratish", desc: "PDFlardan imzo rasmlarini ajrating va ajratib oling" },
        resize: { name: "Ommaviy o‘lcham", desc: "Yuzlab rasmlarni bir vaqtning o‘zida o‘lchamlang va optimallashtiring" },
        ocr: { name: "OCR vositasi", desc: "Hujjatlaringizdan matn tarkibini ajrating" },
        merge: { name: "PDF birlashtirish", desc: "Bir nechta PDF faylni bitta faylga birlashtiring" },
        split: { name: "PDF bo‘lish", desc: "Sahifalarni ajrating yoki aniq qismlarni chiqarib oling" },
        imageToPdf: { name: "Rasmlardan PDF", desc: "Rasmlarni hujjatga aylantiring va birlashtiring" }
    },
    mergeUI: {
        addItems: "Fayl qo‘shish", clearList: "Ro‘yxatni tozalash", startMerge: "Hozir birlashtir",
        mergeTitle: "PDF birlashtirish ro‘yxati", noFiles: "Hali fayl qo‘shilmagan", orderHint: "Tartibni o‘zgartirish uchun tugmalardan foydalaning"
    },
    resizeUI: {
        title: "Ommaviy rasm o‘lchamlash", addImages: "Rasm qo‘shish", clearList: "Tozalash", startResize: "O‘lchamlash",
        noFiles: "Hali rasm qo‘shilmagan", modeExact: "Aniq o‘lcham", modePercent: "Foiz", modeWidth: "Kenglik bo‘yicha", modeHeight: "Balandlik bo‘yicha",
        widthLabel: "Kenglik (px)", heightLabel: "Balandlik (px)", percentLabel: "Masshtab (%)", widthHint: "Balandlik avtomatik hisoblanadi", heightHint: "Kenglik avtomatik hisoblanadi"
    },
    splitUI: {
        title: "PDF bo‘lish", selectFile: "PDF tanlash", startSplit: "Hozir bo‘l",
        modeExtract: "Tanlanganni chiqarish", modeSplitAll: "Barcha sahifalarni bo‘lish",
        pagesFound: "Sahifa topildi", noFile: "Fayl tanlanmagan", hint: "Tanlash/bekor qilish uchun sahifalarni bosing"
    },
    imageToPdfUI: {
        title: "Rasmlardan PDF", addImages: "Rasm qo‘shish", createPdf: "PDF yaratish", clear: "Hammasini tozalash",
        placeholder: "Rasmlarni bitta PDF hujjatiga aylantirish uchun qo‘shing"
    }
};

