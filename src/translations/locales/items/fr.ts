import { en } from "../en";
export const fr: typeof en = {
    ...en,
    welcome: "Bonjour,", dashboard: "Panneau", settings: "Paramètres", history: "Historique", help: "Aide",
    outputDir: "Dossier de sortie", selectFolder: "Choisir un dossier",
    categories: { all: "Tout", pdf: "PDF", word: "Word", image: "Image", ocr: "OCR" }
};
