import { en } from "../en";

export const hi: typeof en = {
    ...en,
    welcome: "नमस्ते,",
    efficiencyText: "कुशलता बस एक बूंद दूर है",
    dropZoneTitle: "अपनी फ़ाइलें यहाँ छोड़ें",
    dropZoneSub: "PDF, छवियाँ, Word और अधिक समर्थित",
    dashboard: "डैशबोर्ड",
    history: "इतिहास",
    settings: "सेटिंग्स",
    help: "मदद",
    about: "परिचय",
    version: "संस्करण",
    releaseNotes: "रिलीज़ नोट्स",
    outputDir: "आउटपुट फ़ोल्डर",
    selectFolder: "फ़ोल्डर चुनें",
    noFolder: "कोई फ़ोल्डर चयनित नहीं",
    processing: "प्रोसेस हो रहा है...",
    selectFolderFirst: "कृपया पहले आउटपुट फ़ोल्डर चुनें!",
    comingSoon: "जल्द आ रहा है",
    categories: { all: "सभी", pdf: "PDF", word: "Word", image: "छवि", ocr: "OCR" },
    tools: {
        compress: { name: "PDF संपीड़ित करें", desc: "गुणवत्ता बनाए रखते हुए फ़ाइल आकार घटाएँ" },
        word: { name: "PDF से टेक्स्ट", desc: "टेक्स्ट निकालकर पढ़ने योग्य फ़ाइल बनाएँ (DOCX जल्द)" },
        signature: { name: "हस्ताक्षर निकालें", desc: "PDF से हस्ताक्षर की छवियाँ निकालें और अलग करें" },
        resize: { name: "बैच इमेज रीसाइज़", desc: "सैकड़ों छवियों का आकार बदलें और अनुकूलित करें" },
        ocr: { name: "OCR टूल", desc: "दस्तावेज़ों से टेक्स्ट सामग्री निकालें" },
        merge: { name: "PDF मर्ज करें", desc: "कई PDF फ़ाइलों को एक में जोड़ें" },
        split: { name: "PDF स्प्लिट करें", desc: "पृष्ठ अलग करें या विशेष भाग निकालें" },
        imageToPdf: { name: "छवियाँ से PDF", desc: "छवियों को दस्तावेज़ में बदलें और जोड़ें" }
    },
    mergeUI: {
        addItems: "फ़ाइलें जोड़ें", clearList: "सूची साफ़ करें", startMerge: "अभी मर्ज करें",
        mergeTitle: "PDF मर्ज सूची", noFiles: "अभी तक कोई फ़ाइल नहीं जोड़ी गई", orderHint: "क्रम बदलने के लिए बटन इस्तेमाल करें"
    },
    resizeUI: {
        title: "बैच इमेज रीसाइज़", addImages: "छवियाँ जोड़ें", clearList: "साफ़ करें", startResize: "रीसाइज़",
        noFiles: "अभी तक कोई छवि नहीं जोड़ी गई", modeExact: "सटीक आकार", modePercent: "प्रतिशत", modeWidth: "चौड़ाई के अनुसार", modeHeight: "ऊँचाई के अनुसार",
        widthLabel: "चौड़ाई (px)", heightLabel: "ऊँचाई (px)", percentLabel: "स्केल (%)", widthHint: "ऊँचाई स्वतः गणना होगी", heightHint: "चौड़ाई स्वतः गणना होगी"
    },
    splitUI: {
        title: "PDF स्प्लिट", selectFile: "PDF चुनें", startSplit: "अभी विभाजित करें",
        modeExtract: "चयनित निकालें", modeSplitAll: "सभी पृष्ठ विभाजित करें",
        pagesFound: "पृष्ठ मिले", noFile: "कोई फ़ाइल चयनित नहीं", hint: "चयन/हटाने के लिए पृष्ठ पर क्लिक करें"
    },
    imageToPdfUI: {
        title: "छवियाँ से PDF", addImages: "छवियाँ जोड़ें", createPdf: "PDF बनाएँ", clear: "सब साफ़ करें",
        placeholder: "छवियों को एक PDF दस्तावेज़ में बदलने के लिए जोड़ें"
    }
};

