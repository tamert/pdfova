import { en } from "../en";

export const ar: typeof en = {
    ...en,
    welcome: "مرحباً،",
    efficiencyText: "الكفاءة على بعد قطرة واحدة فقط",
    dropZoneTitle: "قم بإسقاط ملفاتك هنا",
    dropZoneSub: "يدعم PDF والصور وWord والمزيد",
    dashboard: "لوحة التحكم",
    history: "السجل",
    settings: "الإعدادات",
    help: "مساعدة",
    about: "حول التطبيق",
    version: "الإصدار",
    releaseNotes: "ملاحظات الإصدار",
    outputDir: "مجلد المخرجات",
    selectFolder: "اختر مجلد",
    noFolder: "لم يتم اختيار مجلد",
    processing: "جاري المعالجة...",
    selectFolderFirst: "يرجى اختيار مجلد المخرجات أولاً!",
    comingSoon: "قريباً",
    categories: { all: "الكل", pdf: "PDF", word: "Word", image: "صور", ocr: "OCR" },
    tools: {
        compress: { name: "تضغيط PDF", desc: "تقليل حجم الملف مع الحفاظ على الجودة" },
        word: { name: "PDF إلى نص", desc: "استخراج النص إلى ملف قابل للقراءة" },
        signature: { name: "استخراج التوقيع", desc: "استخراج صور التوقيع من ملفات PDF" },
        resize: { name: "تغيير الحجم الجماعي", desc: "تغيير حجم مئات الصور دفعة واحدة" },
        ocr: { name: "أداة OCR", desc: "استخراج المحتوى النصي من المستندات الممسوحة ضوئياً" },
        merge: { name: "دمج PDF", desc: "دمج ملفات PDF متعددة في ملف واحد" },
        split: { name: "تقسيم PDF", desc: "فصل الصفحات أو استخراج أجزاء معينة" },
        imageToPdf: { name: "صور إلى PDF", desc: "تحويل ودمج الصور في مستند واحد" }
    },
    mergeUI: {
        addItems: "إضافة ملفات", clearList: "مسح القائمة", startMerge: "دمج الآن",
        mergeTitle: "قائمة دمج PDF", noFiles: "لم يتم إضافة ملفات بعد", orderHint: "استخدم الأزرار لإعادة ترتيب الملفات"
    },
    resizeUI: {
        title: "تغيير حجم الصور الجماعي", addImages: "إضافة صور", clearList: "مسح",
        startResize: "تغيير الحجم", noFiles: "لم يتم إضافة صور بعد", modeExact: "الحجم الدقيق",
        modePercent: "النسبة المئوية", modeWidth: "حسب العرض", modeHeight: "حسب الطول",
        widthLabel: "العرض (px)", heightLabel: "الطول (px)", percentLabel: "المقياس (%)",
        widthHint: "يتم حساب الطول تلقائياً", heightHint: "يتم حساب العرض تلقائياً"
    },
    splitUI: {
        title: "تقسيم PDF", selectFile: "اختر PDF", startSplit: "تقسيم الآن",
        modeExtract: "استخراج المحدد", modeSplitAll: "تقسيم كل الصفحات",
        pagesFound: "تم العثور على صفحات", noFile: "لم يتم اختيار ملف", hint: "انقر على الصفحات للاختيار"
    },
    imageToPdfUI: {
        title: "صور إلى PDF", addImages: "إضافة صور", createPdf: "إنشاء PDF", clear: "مسح الكل",
        placeholder: "أضف صوراً لتحويلها إلى مستند PDF واحد"
    }
};
