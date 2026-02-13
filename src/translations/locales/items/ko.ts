import { en } from "../en";

export const ko: typeof en = {
    ...en,
    welcome: "안녕하세요,",
    efficiencyText: "효율성까지 단 한 걸음입니다",
    dropZoneTitle: "여기에 파일을 놓으세요",
    dropZoneSub: "PDF, 이미지, Word 등 지원",
    dashboard: "패널",
    history: "기록",
    settings: "설정",
    help: "도움말",
    about: "정보",
    version: "버전",
    releaseNotes: "릴리스 정보",
    outputDir: "출력 폴더",
    selectFolder: "폴더 선택",
    noFolder: "폴더가 선택되지 않았습니다",
    processing: "처리 중...",
    selectFolderFirst: "출력 디렉토리를 먼저 선택해주세요!",
    comingSoon: "출시 예정",
    categories: { all: "전체", pdf: "PDF", word: "Word", image: "이미지", ocr: "OCR" },
    tools: {
        compress: { name: "PDF 압축", desc: "품질을 유지하면서 파일 크기 줄이기" },
        word: { name: "PDF를 텍스트로", desc: "텍스트를 읽을 수 있는 파일로 추출" },
        signature: { name: "서명 추출", desc: "PDF에서 서명 이미지 추출 및 분리" },
        resize: { name: "이미지 크기 일괄 조정", desc: "수백 개의 이미지 크기를 한 번에 조정" },
        ocr: { name: "OCR 도구", desc: "문서에서 텍스트 콘텐츠 추출" },
        merge: { name: "PDF 병합", desc: "여러 PDF 파일을 하나로 통합" },
        split: { name: "PDF 분할", desc: "페이지를 분리하거나 특정 부분 추출" },
        imageToPdf: { name: "이미지를 PDF로", desc: "이미지를 하나의 문서로 변환 및 통합" }
    },
    mergeUI: {
        addItems: "파일 추가", clearList: "목록 지우기", startMerge: "지금 병합",
        mergeTitle: "PDF 병합 목록", noFiles: "추가된 파일 없음", orderHint: "버튼을 사용하여 순서 변경"
    },
    resizeUI: {
        title: "이미지 크기 일괄 조정", addImages: "이미지 추가", clearList: "지우기",
        startResize: "조정 시작", noFiles: "추가된 이미지 없음", modeExact: "정확한 크기",
        modePercent: "백분율", modeWidth: "너비 기준", modeHeight: "높이 기준",
        widthLabel: "너비 (px)", heightLabel: "높이 (px)", percentLabel: "비율 (%)",
        widthHint: "높이는 자동으로 계산됨", heightHint: "너비는 자동으로 계산됨"
    },
    splitUI: {
        title: "PDF 분할", selectFile: "PDF 선택", startSplit: "지금 분할",
        modeExtract: "선택 항목 추출", modeSplitAll: "모든 페이지 분할",
        pagesFound: "페이지 찾음", noFile: "파일이 선택되지 않음", hint: "페이지를 클릭하여 선택/해제"
    },
    imageToPdfUI: {
        title: "이미지를 PDF로", addImages: "이미지 추가", createPdf: "PDF 생성", clear: "모두 지우기",
        placeholder: "이미지를 추가하여 단일 PDF 문서로 변환하세요"
    }
};
