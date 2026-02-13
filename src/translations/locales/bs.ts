import { en } from "./en";

export const bs: typeof en = {
    ...en,
    welcome: "Zdravo,",
    efficiencyText: "Efikasnost je samo kap daleko",
    dropZoneTitle: "Prevucite datoteke ovdje",
    dropZoneSub: "Podržava PDF, slike, Word i više",
    dashboard: "Panel",
    history: "Istorija",
    settings: "Postavke",
    help: "Pomoć",
    about: "O aplikaciji",
    version: "Verzija",
    releaseNotes: "Napomene o izdanju",
    outputDir: "Izlazni folder",
    selectFolder: "Odaberi folder",
    noFolder: "Nije odabran folder",
    processing: "Obrađuje se...",
    selectFolderFirst: "Molimo prvo odaberite izlazni folder!",
    comingSoon: "Uskoro dostupno",
    categories: { all: "Sve", pdf: "PDF", word: "Word", image: "Slike", ocr: "OCR" },
    tools: {
        compress: { name: "Kompresuj PDF", desc: "Smanjite veličinu fajla uz zadržavanje kvaliteta" },
        word: { name: "PDF u tekst", desc: "Izvucite tekst u čitljivu datoteku" },
        signature: { name: "Ekstrakcija potpisa", desc: "Izvucite slike potpisa iz PDF-a" },
        resize: { name: "Skupna promena veličine", desc: "Promijenite veličinu stotina slika odjednom" },
        ocr: { name: "OCR Alat", desc: "Izvucite tekstualni sadržaj iz skeniranih dokumenata" },
        merge: { name: "Spoji PDF", desc: "Kombinujte više PDF fajlova u jedan" },
        split: { name: "Podijeli PDF", desc: "Odvojite stranice ili izvucite određene dijelove" },
        imageToPdf: { name: "Slike u PDF", desc: "Pretvorite i kombinujte slike u jedan dokument" }
    },
    mergeUI: {
        addItems: "Dodaj fajlove", clearList: "Očisti listu", startMerge: "Spoji sada",
        mergeTitle: "Lista za spajanje PDF-ova", noFiles: "Još nema dodanih fajlova", orderHint: "Koristite dugmad za promjenu redoslijeda"
    },
    resizeUI: {
        title: "Skupna promjena veličine slika", addImages: "Dodaj slike", clearList: "Očisti",
        startResize: "Promijeni veličinu", noFiles: "Još nema dodanih slika", modeExact: "Tačna veličina",
        modePercent: "Procenat", modeWidth: "Po širini", modeHeight: "Po visini",
        widthLabel: "Širina (px)", heightLabel: "Visina (px)", percentLabel: "Skala (%)",
        widthHint: "Visina se automatski izračunava", heightHint: "Širina se automatski izračunava"
    },
    splitUI: {
        title: "Podijeli PDF", selectFile: "Odaberi PDF", startSplit: "Podijeli sada",
        modeExtract: "Izvucite odabrano", modeSplitAll: "Podijeli sve stranice",
        pagesFound: "Stranica pronađeno", noFile: "Nije odabran fajl", hint: "Kliknite na stranice za odabir"
    },
    imageToPdfUI: {
        title: "Slike u PDF", addImages: "Dodaj slike", createPdf: "Kreiraj PDF", clear: "Očisti sve",
        placeholder: "Dodajte slike da ih pretvorite u jedan PDF dokument"
    }
};
