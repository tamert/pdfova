import { en } from "../en";

export const nl: typeof en = {
    ...en,
    welcome: "Hallo,",
    efficiencyText: "Efficiëntie is slechts één druppel verwijderd",
    dropZoneTitle: "Sleep je bestanden hierheen",
    dropZoneSub: "Ondersteunt PDF, afbeeldingen, Word en meer",
    dashboard: "Paneel",
    history: "Geschiedenis",
    settings: "Instellingen",
    help: "Help",
    about: "Over",
    version: "Versie",
    releaseNotes: "Release notes",
    outputDir: "Uitvoermap",
    selectFolder: "Map selecteren",
    noFolder: "Geen map geselecteerd",
    processing: "Bezig...",
    selectFolderFirst: "Selecteer eerst een uitvoermap!",
    comingSoon: "Binnenkort",
    categories: { all: "Alles", pdf: "PDF", word: "Word", image: "Afbeelding", ocr: "OCR" },
    tools: {
        compress: { name: "PDF comprimeren", desc: "Verklein de bestandsgrootte met behoud van kwaliteit" },
        word: { name: "PDF naar tekst", desc: "Extraheer tekst naar een leesbaar bestand (DOCX binnenkort)" },
        signature: { name: "Handtekening extraheren", desc: "Extraheer en isoleer handtekeningafbeeldingen uit PDF's" },
        resize: { name: "Batch afbeeldingsgrootte", desc: "Verklein en optimaliseer honderden afbeeldingen tegelijk" },
        ocr: { name: "OCR-tool", desc: "Extraheer tekstinhoud uit je documenten" },
        merge: { name: "PDF samenvoegen", desc: "Combineer meerdere PDF-bestanden tot één" },
        split: { name: "PDF splitsen", desc: "Pagina's scheiden of specifieke delen extraheren" },
        imageToPdf: { name: "Afbeeldingen naar PDF", desc: "Zet afbeeldingen om en combineer ze tot één document" }
    },
    mergeUI: {
        addItems: "Bestanden toevoegen", clearList: "Lijst wissen", startMerge: "Nu samenvoegen",
        mergeTitle: "PDF-samenvoeglijst", noFiles: "Nog geen bestanden toegevoegd", orderHint: "Gebruik knoppen om de volgorde te wijzigen"
    },
    resizeUI: {
        title: "Batch afbeeldingsgrootte wijzigen", addImages: "Afbeeldingen toevoegen", clearList: "Wissen", startResize: "Grootte wijzigen",
        noFiles: "Nog geen afbeeldingen toegevoegd", modeExact: "Exacte grootte", modePercent: "Percentage", modeWidth: "Op breedte", modeHeight: "Op hoogte",
        widthLabel: "Breedte (px)", heightLabel: "Hoogte (px)", percentLabel: "Schaal (%)", widthHint: "Hoogte automatisch berekend", heightHint: "Breedte automatisch berekend"
    },
    splitUI: {
        title: "PDF splitsen", selectFile: "PDF kiezen", startSplit: "Nu splitsen",
        modeExtract: "Selectie extraheren", modeSplitAll: "Alle pagina's splitsen",
        pagesFound: "Pagina's gevonden", noFile: "Geen bestand geselecteerd", hint: "Klik pagina's om te selecteren/deselecteren"
    },
    imageToPdfUI: {
        title: "Afbeeldingen naar PDF", addImages: "Afbeeldingen toevoegen", createPdf: "PDF maken", clear: "Alles wissen",
        placeholder: "Voeg afbeeldingen toe om ze te combineren in één PDF-document"
    }
};

