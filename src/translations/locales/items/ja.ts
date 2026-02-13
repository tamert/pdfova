import { en } from "../en";

export const ja: typeof en = {
    ...en,
    welcome: "こんにちは、",
    efficiencyText: "効率化まであと一歩です",
    dropZoneTitle: "ここにファイルをドロップ",
    dropZoneSub: "PDF、画像、Wordなどに対応",
    dashboard: "パネル",
    history: "履歴",
    settings: "設定",
    help: "ヘルプ",
    about: "アプリについて",
    version: "バージョン",
    releaseNotes: "リリースノート",
    outputDir: "出力フォルダ",
    selectFolder: "フォルダを選択",
    noFolder: "フォルダが選択されていません",
    processing: "処理中...",
    selectFolderFirst: "先に出力ディレクトリを選択してください！",
    comingSoon: "近日公開",
    categories: { all: "すべて", pdf: "PDF", word: "Word", image: "画像", ocr: "OCR" },
    tools: {
        compress: { name: "PDF圧縮", desc: "品質を維持しながらファイルサイズを縮小" },
        word: { name: "PDFからテキスト", desc: "テキストを読み取り可能なファイルに抽出" },
        signature: { name: "署名抽出", desc: "PDFから署名画像を抽出・分離" },
        resize: { name: "画像サイズ一括変更", desc: "大量の画像を一度にリサイズ・最適化" },
        ocr: { name: "OCRツール", desc: "ドキュメントからテキスト内容を抽出" },
        merge: { name: "PDF結合", desc: "複数のPDFファイルを1つに統合" },
        split: { name: "PDF分割", desc: "ページを分離または特定部分を抽出" },
        imageToPdf: { name: "画像をPDFに", desc: "画像を変換して1つのドキュメントに結合" }
    },
    mergeUI: {
        addItems: "ファイルを追加", clearList: "リストをクリア", startMerge: "今すぐ結合",
        mergeTitle: "PDF結合リスト", noFiles: "ファイルが追加されていません", orderHint: "ボタンで順序を入れ替え"
    },
    resizeUI: {
        title: "画像サイズ一括変更", addImages: "画像を追加", clearList: "クリア",
        startResize: "リサイズ開始", noFiles: "画像が追加されていません", modeExact: "指定サイズ",
        modePercent: "パーセント", modeWidth: "幅指定", modeHeight: "高さ指定",
        widthLabel: "幅 (px)", heightLabel: "高さ (px)", percentLabel: "スケール (%)",
        widthHint: "高さは自動計算されます", heightHint: "幅は自動計算されます"
    },
    splitUI: {
        title: "PDF分割", selectFile: "PDFを選択", startSplit: "今すぐ分割",
        modeExtract: "選択範囲を抽出", modeSplitAll: "全ページを分割",
        pagesFound: "ページが見つかりました", noFile: "ファイルが選択されていません", hint: "ページをクリックして選択/解除"
    },
    imageToPdfUI: {
        title: "画像をPDFに", addImages: "画像を追加", createPdf: "PDFを作成", clear: "すべてクリア",
        placeholder: "画像を追加して1つのPDFドキュメントに変換します"
    }
};
