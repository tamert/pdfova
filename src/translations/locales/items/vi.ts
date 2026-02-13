import { en } from "../en";

export const vi: typeof en = {
    ...en,
    welcome: "Xin chào,",
    efficiencyText: "Hiệu suất chỉ cách một giọt",
    dropZoneTitle: "Thả tệp của bạn vào đây",
    dropZoneSub: "Hỗ trợ PDF, hình ảnh, Word và nhiều hơn",
    dashboard: "Bảng điều khiển",
    history: "Lịch sử",
    settings: "Cài đặt",
    help: "Trợ giúp",
    about: "Giới thiệu",
    version: "Phiên bản",
    releaseNotes: "Ghi chú phát hành",
    outputDir: "Thư mục đầu ra",
    selectFolder: "Chọn thư mục",
    noFolder: "Chưa chọn thư mục",
    processing: "Đang xử lý...",
    selectFolderFirst: "Vui lòng chọn thư mục đầu ra trước!",
    comingSoon: "Sắp ra mắt",
    categories: { all: "Tất cả", pdf: "PDF", word: "Word", image: "Hình ảnh", ocr: "OCR" },
    tools: {
        compress: { name: "Nén PDF", desc: "Giảm dung lượng tệp mà vẫn giữ chất lượng" },
        word: { name: "PDF sang văn bản", desc: "Trích xuất văn bản ra tệp dễ đọc (DOCX sắp có)" },
        signature: { name: "Trích xuất chữ ký", desc: "Trích xuất và tách ảnh chữ ký từ PDF" },
        resize: { name: "Đổi kích thước hàng loạt", desc: "Đổi kích thước và tối ưu hàng trăm ảnh cùng lúc" },
        ocr: { name: "Công cụ OCR", desc: "Trích xuất nội dung văn bản từ tài liệu" },
        merge: { name: "Gộp PDF", desc: "Kết hợp nhiều tệp PDF thành một" },
        split: { name: "Tách PDF", desc: "Tách trang hoặc trích xuất phần cụ thể" },
        imageToPdf: { name: "Ảnh sang PDF", desc: "Chuyển đổi và gộp ảnh thành một tài liệu" }
    },
    mergeUI: {
        addItems: "Thêm tệp", clearList: "Xóa danh sách", startMerge: "Gộp ngay",
        mergeTitle: "Danh sách gộp PDF", noFiles: "Chưa có tệp nào", orderHint: "Dùng nút để sắp xếp lại thứ tự"
    },
    resizeUI: {
        title: "Đổi kích thước ảnh hàng loạt", addImages: "Thêm ảnh", clearList: "Xóa", startResize: "Đổi kích thước",
        noFiles: "Chưa có ảnh nào", modeExact: "Kích thước chính xác", modePercent: "Phần trăm", modeWidth: "Theo chiều rộng", modeHeight: "Theo chiều cao",
        widthLabel: "Rộng (px)", heightLabel: "Cao (px)", percentLabel: "Tỉ lệ (%)", widthHint: "Chiều cao tự tính", heightHint: "Chiều rộng tự tính"
    },
    splitUI: {
        title: "Tách PDF", selectFile: "Chọn PDF", startSplit: "Tách ngay",
        modeExtract: "Trích xuất đã chọn", modeSplitAll: "Tách tất cả trang",
        pagesFound: "Số trang tìm thấy", noFile: "Chưa chọn tệp", hint: "Nhấp vào trang để chọn/bỏ chọn"
    },
    imageToPdfUI: {
        title: "Ảnh sang PDF", addImages: "Thêm ảnh", createPdf: "Tạo PDF", clear: "Xóa tất cả",
        placeholder: "Thêm ảnh để chuyển thành một tài liệu PDF duy nhất"
    }
};

