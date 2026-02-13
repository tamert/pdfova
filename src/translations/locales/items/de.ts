import { en } from "../en";
export const de: typeof en = {
    ...en,
    welcome: "Hallo,", dashboard: "Panel", settings: "Einstellungen", history: "Verlauf", help: "Hilfe",
    outputDir: "Ausgabeordner", selectFolder: "Ordner auswählen",
    categories: { all: "Alle", pdf: "PDF", word: "Word", image: "Bild", ocr: "OCR" }
};
