import { en } from "../en";

export const id: typeof en = {
    ...en,
    welcome: "Halo,",
    efficiencyText: "Efisiensi hanya sejauh satu tetes",
    dropZoneTitle: "Letakkan file Anda di sini",
    dropZoneSub: "Mendukung PDF, gambar, Word & lainnya",
    dashboard: "Dasbor",
    history: "Riwayat",
    settings: "Pengaturan",
    help: "Bantuan",
    about: "Tentang",
    version: "Versi",
    releaseNotes: "Catatan Rilis",
    outputDir: "Folder Output",
    selectFolder: "Pilih folder",
    noFolder: "Belum ada folder dipilih",
    processing: "Memproses...",
    selectFolderFirst: "Silakan pilih folder output terlebih dahulu!",
    comingSoon: "Segera hadir",
    categories: { all: "Semua", pdf: "PDF", word: "Word", image: "Gambar", ocr: "OCR" },
    tools: {
        compress: { name: "Kompres PDF", desc: "Kurangi ukuran file sambil menjaga kualitas" },
        word: { name: "PDF ke Teks", desc: "Ekstrak teks ke file yang mudah dibaca (DOCX segera)" },
        signature: { name: "Ekstrak Tanda Tangan", desc: "Ekstrak dan pisahkan gambar tanda tangan dari PDF" },
        resize: { name: "Ubah Ukuran Massal", desc: "Ubah ukuran dan optimalkan ratusan gambar sekaligus" },
        ocr: { name: "Alat OCR", desc: "Ekstrak konten teks dari dokumen Anda" },
        merge: { name: "Gabung PDF", desc: "Gabungkan beberapa file PDF menjadi satu" },
        split: { name: "Pisah PDF", desc: "Pisahkan halaman atau ekstrak bagian tertentu" },
        imageToPdf: { name: "Gambar ke PDF", desc: "Konversi dan gabungkan gambar menjadi dokumen" }
    },
    mergeUI: {
        addItems: "Tambah file", clearList: "Kosongkan daftar", startMerge: "Gabung sekarang",
        mergeTitle: "Daftar Gabung PDF", noFiles: "Belum ada file ditambahkan", orderHint: "Gunakan tombol untuk mengubah urutan"
    },
    resizeUI: {
        title: "Ubah Ukuran Gambar Massal", addImages: "Tambah gambar", clearList: "Bersihkan", startResize: "Ubah ukuran",
        noFiles: "Belum ada gambar ditambahkan", modeExact: "Ukuran tepat", modePercent: "Persentase", modeWidth: "Berdasarkan lebar", modeHeight: "Berdasarkan tinggi",
        widthLabel: "Lebar (px)", heightLabel: "Tinggi (px)", percentLabel: "Skala (%)", widthHint: "Tinggi dihitung otomatis", heightHint: "Lebar dihitung otomatis"
    },
    splitUI: {
        title: "Pisah PDF", selectFile: "Pilih PDF", startSplit: "Pisah sekarang",
        modeExtract: "Ekstrak yang dipilih", modeSplitAll: "Pisah semua halaman",
        pagesFound: "Halaman ditemukan", noFile: "Belum ada file dipilih", hint: "Klik halaman untuk pilih/batalkan"
    },
    imageToPdfUI: {
        title: "Gambar ke PDF", addImages: "Tambah gambar", createPdf: "Buat PDF", clear: "Bersihkan semua",
        placeholder: "Tambahkan gambar untuk menggabungkannya menjadi satu dokumen PDF"
    }
};

