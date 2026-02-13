import { en } from "../en";

export const es: typeof en = {
    ...en,
    welcome: "Hola,",
    efficiencyText: "La eficiencia está a solo una gota de distancia",
    dropZoneTitle: "Arrastra tus archivos aquí",
    dropZoneSub: "Soporta PDF, imágenes, Word y más",
    dashboard: "Panel",
    history: "Historial",
    settings: "Ajustes",
    help: "Ayuda",
    about: "Acerca de",
    version: "Versión",
    releaseNotes: "Notas de la versión",
    outputDir: "Carpeta de salida",
    selectFolder: "Seleccionar carpeta",
    noFolder: "Ninguna carpeta seleccionada",
    processing: "Procesando...",
    selectFolderFirst: "¡Por favor, selecciona primero el directorio de salida!",
    comingSoon: "Próximamente",
    categories: { all: "Todo", pdf: "PDF", word: "Word", image: "Imagen", ocr: "OCR" },
    tools: {
        compress: { name: "Comprimir PDF", desc: "Reduce el tamaño del archivo manteniendo la calidad" },
        word: { name: "PDF a Texto", desc: "Extrae texto a un archivo ejecutable" },
        signature: { name: "Extraer Firma", desc: "Extrae e aísla imágenes de firmas de PDFs" },
        resize: { name: "Redimensionar Imágenes", desc: "Redimensiona y optimiza cientos de imágenes a la vez" },
        ocr: { name: "Herramienta OCR", desc: "Extrae contenido de texto de tus documentos" },
        merge: { name: "Combinar PDF", desc: "Combina múltiples archivos PDF en uno solo" },
        split: { name: "Dividir PDF", desc: "Separa páginas o extrae partes específicas" },
        imageToPdf: { name: "Imágenes a PDF", desc: "Convierte y combina imágenes en un documento" }
    },
    mergeUI: {
        addItems: "Añadir Archivos", clearList: "Limpiar Lista", startMerge: "Combinar Ahora",
        mergeTitle: "Lista de Combinación PDF", noFiles: "Aún no se han añadido archivos", orderHint: "Usa los botones para reordenar los archivos"
    },
    resizeUI: {
        title: "Redimensionar Imágenes en Lote", addImages: "Añadir Imágenes", clearList: "Limpiar",
        startResize: "Redimensionar", noFiles: "Aún no se han añadido imágenes", modeExact: "Tamaño Exacto",
        modePercent: "Porcentaje", modeWidth: "Por Ancho", modeHeight: "Por Alto",
        widthLabel: "Ancho (px)", heightLabel: "Alto (px)", percentLabel: "Escala (%)",
        widthHint: "Alto calculado automáticamente", heightHint: "Ancho calculado automáticamente"
    },
    splitUI: {
        title: "Dividir PDF", selectFile: "Elegir PDF", startSplit: "Dividir Ahora",
        modeExtract: "Extraer Seleccionados", modeSplitAll: "Dividir Todas las Páginas",
        pagesFound: "Páginas encontradas", noFile: "Ningún archivo seleccionado", hint: "Haz clic en las páginas para seleccionar/deseleccionar"
    },
    imageToPdfUI: {
        title: "Imágenes a PDF", addImages: "Añadir Imágenes", createPdf: "Crear PDF", clear: "Limpiar Todo",
        placeholder: "Añade imágenes para convertirlas en un solo documento PDF"
    }
};
