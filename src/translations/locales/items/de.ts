import { en } from "../en";

export const de: typeof en = {
    ...en,
    welcome: "Hallo,",
    efficiencyText: "Effizienz ist nur einen Tropfen entfernt",
    dropZoneTitle: "Dateien hier ablegen",
    dropZoneSub: "Unterstützt PDF, Bilder, Word & mehr",
    dashboard: "Panel",
    history: "Verlauf",
    settings: "Einstellungen",
    help: "Hilfe",
    about: "Über uns",
    version: "Version",
    releaseNotes: "Versionshinweise",
    outputDir: "Ausgabeordner",
    selectFolder: "Ordner auswählen",
    noFolder: "Kein Ordner ausgewählt",
    processing: "Verarbeitung...",
    selectFolderFirst: "Bitte wählen Sie zuerst das Ausgabeverzeichnis aus!",
    comingSoon: "Demnächst",
    categories: { all: "Alle", pdf: "PDF", word: "Word", image: "Bild", ocr: "OCR" },
    tools: {
        compress: { name: "PDF komprimieren", desc: "Dateigröße bei gleichbleibender Qualität reduzieren" },
        word: { name: "PDF zu Text", desc: "Text in eine lesbare Datei extrahieren" },
        signature: { name: "Unterschrift extrahieren", desc: "Signaturbilder aus PDFs isolieren" },
        resize: { name: "Bildgröße ändern", desc: "Hunderte von Bildern gleichzeitig optimieren" },
        ocr: { name: "OCR-Tool", desc: "Textinhalte aus Ihren Dokumenten extrahieren" },
        merge: { name: "PDF zusammenführen", desc: "Mehrere PDF-Dateien zu einer kombinieren" },
        split: { name: "PDF teilen", desc: "Seiten trennen oder bestimmte Teile extrahieren" },
        imageToPdf: { name: "Bilder zu PDF", desc: "Bilder in ein Dokument umwandeln und kombinieren" }
    },
    mergeUI: {
        addItems: "Dateien hinzufügen", clearList: "Liste leeren", startMerge: "Jetzt zusammenführen",
        mergeTitle: "PDF-Zusammenführungliste", noFiles: "Noch keine Dateien hinzugefügt", orderHint: "Nutzen Sie die Tasten zum Sortieren"
    },
    resizeUI: {
        title: "Stapel-Bildgrößenänderung", addImages: "Bilder hinzufügen", clearList: "Leeren",
        startResize: "Größe ändern", noFiles: "Noch keine Bilder hinzugefügt", modeExact: "Exakte Größe",
        modePercent: "Prozent", modeWidth: "Nach Breite", modeHeight: "Nach Höhe",
        widthLabel: "Breite (px)", heightLabel: "Höhe (px)", percentLabel: "Skala (%)",
        widthHint: "Höhe wird automatisch berechnet", heightHint: "Breite wird automatisch berechnet"
    },
    splitUI: {
        title: "PDF teilen", selectFile: "PDF wählen", startSplit: "Jetzt teilen",
        modeExtract: "Auswahl extrahieren", modeSplitAll: "Alle Seiten teilen",
        pagesFound: "Seiten gefunden", noFile: "Keine Datei ausgewählt", hint: "Klicken Sie auf Seiten zur Auswahl"
    },
    imageToPdfUI: {
        title: "Bilder zu PDF", addImages: "Bilder hinzufügen", createPdf: "PDF erstellen", clear: "Alles leeren",
        placeholder: "Bilder hinzufügen, um sie in ein PDF-Dokument umzuwandeln"
    }
};
