import { en } from "../en";

export const zh: typeof en = {
    ...en,
    welcome: "你好，",
    efficiencyText: "高效办公，触手可及",
    dropZoneTitle: "将文件拖放到此处",
    dropZoneSub: "支持 PDF、图像、Word 等",
    dashboard: "面板",
    history: "历史",
    settings: "设置",
    help: "帮助",
    about: "关于",
    version: "版本",
    releaseNotes: "发行说明",
    outputDir: "输出文件夹",
    selectFolder: "选择文件夹",
    noFolder: "未选择文件夹",
    processing: "处理中...",
    selectFolderFirst: "请先选择输出目录！",
    comingSoon: "敬请期待",
    categories: { all: "全部", pdf: "PDF", word: "Word", image: "图像", ocr: "OCR" },
    tools: {
        compress: { name: "压缩 PDF", desc: "在保持质量的同时减小文件大小" },
        word: { name: "PDF 转文字", desc: "将文字提取到可读文件中" },
        signature: { name: "提取签名", desc: "从 PDF 中提取并分离签名图像" },
        resize: { name: "批量调整图像", desc: "一次性调整和优化数百张图像" },
        ocr: { name: "OCR 工具", desc: "从文档中提取文字内容" },
        merge: { name: "合并 PDF", desc: "将多个 PDF 文件合并为一个" },
        split: { name: "拆分 PDF", desc: "分离页面或提取特定部分" },
        imageToPdf: { name: "图像转 PDF", desc: "将图像转换并合并为单个文档" }
    },
    mergeUI: {
        addItems: "添加文件", clearList: "清空列表", startMerge: "立即合并",
        mergeTitle: "PDF 合并列表", noFiles: "尚未添加文件", orderHint: "使用按钮重新排序文件"
    },
    resizeUI: {
        title: "批量调整图像尺寸", addImages: "添加图像", clearList: "清空",
        startResize: "开始调整", noFiles: "尚未添加图像", modeExact: "精确尺寸",
        modePercent: "百分比", modeWidth: "按宽度", modeHeight: "按高度",
        widthLabel: "宽度 (px)", heightLabel: "高度 (px)", percentLabel: "比例 (%)",
        widthHint: "高度自动计算", heightHint: "宽度自动计算"
    },
    splitUI: {
        title: "拆分 PDF", selectFile: "选择 PDF", startSplit: "立即拆分",
        modeExtract: "提取选中项", modeSplitAll: "拆分所有页面",
        pagesFound: "找到页面", noFile: "未选择文件", hint: "点击页面进行选择/取消选择"
    },
    imageToPdfUI: {
        title: "图像转 PDF", addImages: "添加图像", createPdf: "创建 PDF", clear: "全部清空",
        placeholder: "添加图像以将其转换为单个 PDF 文档"
    }
};
