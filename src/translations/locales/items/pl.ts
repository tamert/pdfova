import { en } from "../en";

export const pl: typeof en = {
    ...en,
    welcome: "Cześć,",
    efficiencyText: "Wydajność jest o jedną kroplę stąd",
    dropZoneTitle: "Upuść pliki tutaj",
    dropZoneSub: "Obsługuje PDF, obrazy, Word i więcej",
    dashboard: "Panel",
    history: "Historia",
    settings: "Ustawienia",
    help: "Pomoc",
    about: "O aplikacji",
    version: "Wersja",
    releaseNotes: "Informacje o wydaniu",
    outputDir: "Folder wyjściowy",
    selectFolder: "Wybierz folder",
    noFolder: "Nie wybrano folderu",
    processing: "Przetwarzanie...",
    selectFolderFirst: "Najpierw wybierz folder wyjściowy!",
    comingSoon: "Wkrótce",
    categories: { all: "Wszystko", pdf: "PDF", word: "Word", image: "Obraz", ocr: "OCR" },
    tools: {
        compress: { name: "Kompresuj PDF", desc: "Zmniejsz rozmiar pliku, zachowując jakość" },
        word: { name: "PDF do tekstu", desc: "Wyodrębnij tekst do czytelnego pliku (DOCX wkrótce)" },
        signature: { name: "Wyodrębnij podpis", desc: "Wyodrębnij i odizoluj obrazy podpisu z PDF-ów" },
        resize: { name: "Zmiana rozmiaru wsadowa", desc: "Zmień rozmiar i zoptymalizuj setki obrazów naraz" },
        ocr: { name: "Narzędzie OCR", desc: "Wyodrębnij tekst z dokumentów" },
        merge: { name: "Scal PDF", desc: "Połącz wiele plików PDF w jeden" },
        split: { name: "Podziel PDF", desc: "Oddziel strony lub wyodrębnij konkretne części" },
        imageToPdf: { name: "Obrazy do PDF", desc: "Konwertuj i łącz obrazy w dokument" }
    },
    mergeUI: {
        addItems: "Dodaj pliki", clearList: "Wyczyść listę", startMerge: "Scal teraz",
        mergeTitle: "Lista scalania PDF", noFiles: "Nie dodano jeszcze plików", orderHint: "Użyj przycisków, aby zmienić kolejność plików"
    },
    resizeUI: {
        title: "Wsadowa zmiana rozmiaru obrazów", addImages: "Dodaj obrazy", clearList: "Wyczyść", startResize: "Zmień rozmiar",
        noFiles: "Nie dodano jeszcze obrazów", modeExact: "Dokładny rozmiar", modePercent: "Procent", modeWidth: "Według szerokości", modeHeight: "Według wysokości",
        widthLabel: "Szerokość (px)", heightLabel: "Wysokość (px)", percentLabel: "Skala (%)", widthHint: "Wysokość liczona automatycznie", heightHint: "Szerokość liczona automatycznie"
    },
    splitUI: {
        title: "Podziel PDF", selectFile: "Wybierz PDF", startSplit: "Podziel teraz",
        modeExtract: "Wyodrębnij zaznaczone", modeSplitAll: "Podziel wszystkie strony",
        pagesFound: "Znaleziono stron", noFile: "Nie wybrano pliku", hint: "Kliknij strony, aby zaznaczyć/odznaczyć"
    },
    imageToPdfUI: {
        title: "Obrazy do PDF", addImages: "Dodaj obrazy", createPdf: "Utwórz PDF", clear: "Wyczyść wszystko",
        placeholder: "Dodaj obrazy, aby połączyć je w jeden dokument PDF"
    }
};

