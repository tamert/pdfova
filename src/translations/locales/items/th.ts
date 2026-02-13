import { en } from "../en";

export const th: typeof en = {
    ...en,
    welcome: "สวัสดี,",
    efficiencyText: "ประสิทธิภาพอยู่ใกล้แค่หยดเดียว",
    dropZoneTitle: "วางไฟล์ของคุณที่นี่",
    dropZoneSub: "รองรับ PDF, รูปภาพ, Word และอื่น ๆ",
    dashboard: "แดชบอร์ด",
    history: "ประวัติ",
    settings: "การตั้งค่า",
    help: "ความช่วยเหลือ",
    about: "เกี่ยวกับ",
    version: "เวอร์ชัน",
    releaseNotes: "บันทึกการอัปเดต",
    outputDir: "โฟลเดอร์เอาต์พุต",
    selectFolder: "เลือกโฟลเดอร์",
    noFolder: "ยังไม่ได้เลือกโฟลเดอร์",
    processing: "กำลังประมวลผล...",
    selectFolderFirst: "โปรดเลือกโฟลเดอร์เอาต์พุตก่อน!",
    comingSoon: "เร็ว ๆ นี้",
    categories: { all: "ทั้งหมด", pdf: "PDF", word: "Word", image: "รูปภาพ", ocr: "OCR" },
    tools: {
        compress: { name: "บีบอัด PDF", desc: "ลดขนาดไฟล์โดยยังคงคุณภาพ" },
        word: { name: "PDF เป็นข้อความ", desc: "ดึงข้อความออกเป็นไฟล์ที่อ่านง่าย (DOCX เร็ว ๆ นี้)" },
        signature: { name: "ดึงลายเซ็น", desc: "ดึงและแยกรูปลายเซ็นจาก PDF" },
        resize: { name: "ปรับขนาดรูปแบบกลุ่ม", desc: "ปรับขนาดและเพิ่มประสิทธิภาพรูปภาพจำนวนมากในครั้งเดียว" },
        ocr: { name: "เครื่องมือ OCR", desc: "ดึงเนื้อหาข้อความจากเอกสารของคุณ" },
        merge: { name: "รวม PDF", desc: "รวมไฟล์ PDF หลายไฟล์เป็นไฟล์เดียว" },
        split: { name: "แยก PDF", desc: "แยกหน้า หรือดึงบางส่วนที่ต้องการ" },
        imageToPdf: { name: "รูปภาพเป็น PDF", desc: "แปลงและรวมรูปภาพเป็นเอกสาร" }
    },
    mergeUI: {
        addItems: "เพิ่มไฟล์", clearList: "ล้างรายการ", startMerge: "รวมตอนนี้",
        mergeTitle: "รายการรวม PDF", noFiles: "ยังไม่มีไฟล์ที่เพิ่ม", orderHint: "ใช้ปุ่มเพื่อเปลี่ยนลำดับไฟล์"
    },
    resizeUI: {
        title: "ปรับขนาดรูปภาพแบบกลุ่ม", addImages: "เพิ่มรูปภาพ", clearList: "ล้าง", startResize: "ปรับขนาด",
        noFiles: "ยังไม่มีรูปภาพที่เพิ่ม", modeExact: "ขนาดพอดี", modePercent: "เปอร์เซ็นต์", modeWidth: "ตามความกว้าง", modeHeight: "ตามความสูง",
        widthLabel: "ความกว้าง (px)", heightLabel: "ความสูง (px)", percentLabel: "สเกล (%)", widthHint: "ความสูงคำนวณอัตโนมัติ", heightHint: "ความกว้างคำนวณอัตโนมัติ"
    },
    splitUI: {
        title: "แยก PDF", selectFile: "เลือก PDF", startSplit: "แยกตอนนี้",
        modeExtract: "ดึงที่เลือก", modeSplitAll: "แยกทุกหน้า",
        pagesFound: "พบหน้า", noFile: "ยังไม่ได้เลือกไฟล์", hint: "คลิกหน้าเพื่อเลือก/ยกเลิก"
    },
    imageToPdfUI: {
        title: "รูปภาพเป็น PDF", addImages: "เพิ่มรูปภาพ", createPdf: "สร้าง PDF", clear: "ล้างทั้งหมด",
        placeholder: "เพิ่มรูปภาพเพื่อรวมเป็นเอกสาร PDF เดียว"
    }
};

