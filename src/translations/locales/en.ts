export const en = {
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
    categories: { all: "All", pdf: "PDF", word: "Word", image: "Image", ocr: "OCR" },
    tools: {
        compress: { name: "Compress PDF", desc: "Reduce file size while keeping quality" },
        word: { name: "PDF to Text", desc: "Extract text to a readable file (DOCX coming soon)" },
        signature: { name: "Signature Extract", desc: "Extract and isolate signature images from PDFs" },
        resize: { name: "Bulk Image Resize", desc: "Resize and optimize 100s of images at once" },
        ocr: { name: "OCR Tool", desc: "Extract text content from your documents" },
        merge: { name: "Merge PDF", desc: "Combine multiple PDF files into one" },
        split: { name: "Split PDF", desc: "Separate pages or extract specific parts" },
        imageToPdf: { name: "Images to PDF", desc: "Convert and combine images into a document" }
    },
    mergeUI: {
        addItems: "Add Files", clearList: "Clear List", startMerge: "Merge Now",
        mergeTitle: "PDF Merge List", noFiles: "No files added yet", orderHint: "Use buttons to reorder files"
    },
    resizeUI: {
        title: "Batch Image Resize", addImages: "Add Images", clearList: "Clear", startResize: "Resize",
        noFiles: "No images added yet", modeExact: "Exact Size", modePercent: "Percentage",
        modeWidth: "By Width", modeHeight: "By Height", widthLabel: "Width (px)",
        heightLabel: "Height (px)", percentLabel: "Scale (%)", widthHint: "Height auto-calculated", heightHint: "Width auto-calculated"
    },
    splitUI: {
        title: "Split PDF", selectFile: "Choose PDF", startSplit: "Split Now",
        modeExtract: "Extract Selected", modeSplitAll: "Split All Pages",
        pagesFound: "Pages found", noFile: "No file selected", hint: "Click pages to select/deselect"
    },
    imageToPdfUI: {
        title: "Images to PDF", addImages: "Add Images", createPdf: "Create PDF", clear: "Clear All",
        placeholder: "Add images to convert them into a single PDF document"
    }
};
