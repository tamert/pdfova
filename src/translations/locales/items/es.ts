import { en } from "../en";
export const es: typeof en = {
    ...en,
    welcome: "Hola,", dashboard: "Panel", settings: "Ajustes", history: "Historial", help: "Ayuda",
    outputDir: "Carpeta de salida", selectFolder: "Seleccionar carpeta",
    categories: { all: "Todo", pdf: "PDF", word: "Word", image: "Imagen", ocr: "OCR" }
};
