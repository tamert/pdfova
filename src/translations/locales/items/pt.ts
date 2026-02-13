import { en } from "../en";

export const pt: typeof en = {
    ...en,
    welcome: "Olá,",
    efficiencyText: "A eficiência está a apenas uma gota de distância",
    dropZoneTitle: "Solte seus arquivos aqui",
    dropZoneSub: "Suporta PDF, imagens, Word e muito mais",
    dashboard: "Painel",
    history: "Histórico",
    settings: "Configurações",
    help: "Ajuda",
    about: "Sobre",
    version: "Versão",
    releaseNotes: "Notas da Versão",
    outputDir: "Pasta de Saída",
    selectFolder: "Selecionar pasta",
    noFolder: "Nenhuma pasta selecionada",
    processing: "Processando...",
    selectFolderFirst: "Selecione primeiro a pasta de saída!",
    comingSoon: "Em breve",
    categories: { all: "Tudo", pdf: "PDF", word: "Word", image: "Imagem", ocr: "OCR" },
    tools: {
        compress: { name: "Compactar PDF", desc: "Reduza o tamanho do arquivo mantendo a qualidade" },
        word: { name: "PDF para Texto", desc: "Extraia o texto para um arquivo legível (DOCX em breve)" },
        signature: { name: "Extrair Assinatura", desc: "Extraia e isole imagens de assinatura de PDFs" },
        resize: { name: "Redimensionar em Lote", desc: "Redimensione e otimize centenas de imagens de uma vez" },
        ocr: { name: "Ferramenta OCR", desc: "Extraia conteúdo de texto dos seus documentos" },
        merge: { name: "Mesclar PDF", desc: "Combine vários arquivos PDF em um só" },
        split: { name: "Dividir PDF", desc: "Separe páginas ou extraia partes específicas" },
        imageToPdf: { name: "Imagens para PDF", desc: "Converta e combine imagens em um documento" }
    },
    mergeUI: {
        addItems: "Adicionar arquivos", clearList: "Limpar lista", startMerge: "Mesclar agora",
        mergeTitle: "Lista de mesclagem de PDF", noFiles: "Nenhum arquivo adicionado ainda", orderHint: "Use os botões para reordenar os arquivos"
    },
    resizeUI: {
        title: "Redimensionamento de Imagens em Lote", addImages: "Adicionar imagens", clearList: "Limpar", startResize: "Redimensionar",
        noFiles: "Nenhuma imagem adicionada ainda", modeExact: "Tamanho exato", modePercent: "Porcentagem", modeWidth: "Por largura", modeHeight: "Por altura",
        widthLabel: "Largura (px)", heightLabel: "Altura (px)", percentLabel: "Escala (%)", widthHint: "Altura calculada automaticamente", heightHint: "Largura calculada automaticamente"
    },
    splitUI: {
        title: "Dividir PDF", selectFile: "Escolher PDF", startSplit: "Dividir agora",
        modeExtract: "Extrair selecionadas", modeSplitAll: "Dividir todas as páginas",
        pagesFound: "Páginas encontradas", noFile: "Nenhum arquivo selecionado", hint: "Clique nas páginas para selecionar/desmarcar"
    },
    imageToPdfUI: {
        title: "Imagens para PDF", addImages: "Adicionar imagens", createPdf: "Criar PDF", clear: "Limpar tudo",
        placeholder: "Adicione imagens para convertê-las em um único documento PDF"
    }
};

