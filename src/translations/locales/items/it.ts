import { en } from "../en";

export const it: typeof en = {
    ...en,
    welcome: "Ciao,",
    efficiencyText: "L'efficienza è a una sola goccia di distanza",
    dropZoneTitle: "Trascina qui i tuoi file",
    dropZoneSub: "Supporta PDF, immagini, Word e altro",
    dashboard: "Pannello",
    history: "Cronologia",
    settings: "Impostazioni",
    help: "Aiuto",
    about: "Informazioni",
    version: "Versione",
    releaseNotes: "Note di rilascio",
    outputDir: "Cartella di output",
    selectFolder: "Seleziona cartella",
    noFolder: "Nessuna cartella selezionata",
    processing: "Elaborazione...",
    selectFolderFirst: "Seleziona prima la cartella di output!",
    comingSoon: "In arrivo",
    categories: { all: "Tutto", pdf: "PDF", word: "Word", image: "Immagine", ocr: "OCR" },
    tools: {
        compress: { name: "Comprimi PDF", desc: "Riduci la dimensione mantenendo la qualità" },
        word: { name: "PDF in testo", desc: "Estrai il testo in un file leggibile (DOCX in arrivo)" },
        signature: { name: "Estrai firma", desc: "Estrai e isola le immagini della firma dai PDF" },
        resize: { name: "Ridimensiona in blocco", desc: "Ridimensiona e ottimizza centinaia di immagini in una volta" },
        ocr: { name: "Strumento OCR", desc: "Estrai contenuti testuali dai tuoi documenti" },
        merge: { name: "Unisci PDF", desc: "Combina più file PDF in uno" },
        split: { name: "Dividi PDF", desc: "Separa le pagine o estrai parti specifiche" },
        imageToPdf: { name: "Immagini in PDF", desc: "Converti e combina immagini in un documento" }
    },
    mergeUI: {
        addItems: "Aggiungi file", clearList: "Svuota lista", startMerge: "Unisci ora",
        mergeTitle: "Elenco unione PDF", noFiles: "Nessun file aggiunto", orderHint: "Usa i pulsanti per riordinare i file"
    },
    resizeUI: {
        title: "Ridimensionamento immagini in blocco", addImages: "Aggiungi immagini", clearList: "Svuota", startResize: "Ridimensiona",
        noFiles: "Nessuna immagine aggiunta", modeExact: "Dimensione esatta", modePercent: "Percentuale", modeWidth: "Per larghezza", modeHeight: "Per altezza",
        widthLabel: "Larghezza (px)", heightLabel: "Altezza (px)", percentLabel: "Scala (%)", widthHint: "Altezza calcolata automaticamente", heightHint: "Larghezza calcolata automaticamente"
    },
    splitUI: {
        title: "Dividi PDF", selectFile: "Scegli PDF", startSplit: "Dividi ora",
        modeExtract: "Estrai selezionate", modeSplitAll: "Dividi tutte le pagine",
        pagesFound: "Pagine trovate", noFile: "Nessun file selezionato", hint: "Clicca sulle pagine per selezionare/deselezionare"
    },
    imageToPdfUI: {
        title: "Immagini in PDF", addImages: "Aggiungi immagini", createPdf: "Crea PDF", clear: "Svuota tutto",
        placeholder: "Aggiungi immagini per convertirle in un unico documento PDF"
    }
};

