import { en } from "../en";

export const ru: typeof en = {
    ...en,
    welcome: "Привет,",
    efficiencyText: "Эффективность — всего в одной капле",
    dropZoneTitle: "Перетащите файлы сюда",
    dropZoneSub: "Поддерживает PDF, изображения, Word и другое",
    dashboard: "Панель",
    history: "История",
    settings: "Настройки",
    help: "Помощь",
    about: "О программе",
    version: "Версия",
    releaseNotes: "Примечания к выпуску",
    outputDir: "Папка вывода",
    selectFolder: "Выбрать папку",
    noFolder: "Папка не выбрана",
    processing: "Обработка...",
    selectFolderFirst: "Сначала выберите папку вывода!",
    comingSoon: "Скоро",
    categories: { all: "Все", pdf: "PDF", word: "Word", image: "Изображения", ocr: "OCR" },
    tools: {
        compress: { name: "Сжать PDF", desc: "Уменьшайте размер файла, сохраняя качество" },
        word: { name: "PDF в текст", desc: "Извлеките текст в читаемый файл (DOCX скоро)" },
        signature: { name: "Извлечь подпись", desc: "Извлеките и изолируйте изображения подписи из PDF" },
        resize: { name: "Пакетное изменение размера", desc: "Изменяйте размер и оптимизируйте сотни изображений сразу" },
        ocr: { name: "Инструмент OCR", desc: "Извлекайте текст из ваших документов" },
        merge: { name: "Объединить PDF", desc: "Объедините несколько PDF в один файл" },
        split: { name: "Разделить PDF", desc: "Разделяйте страницы или извлекайте нужные части" },
        imageToPdf: { name: "Изображения в PDF", desc: "Преобразуйте и объединяйте изображения в документ" }
    },
    mergeUI: {
        addItems: "Добавить файлы", clearList: "Очистить список", startMerge: "Объединить",
        mergeTitle: "Список объединения PDF", noFiles: "Файлы пока не добавлены", orderHint: "Используйте кнопки, чтобы изменить порядок"
    },
    resizeUI: {
        title: "Пакетное изменение размера изображений", addImages: "Добавить изображения", clearList: "Очистить", startResize: "Изменить размер",
        noFiles: "Изображения пока не добавлены", modeExact: "Точный размер", modePercent: "Процент", modeWidth: "По ширине", modeHeight: "По высоте",
        widthLabel: "Ширина (px)", heightLabel: "Высота (px)", percentLabel: "Масштаб (%)", widthHint: "Высота рассчитывается автоматически", heightHint: "Ширина рассчитывается автоматически"
    },
    splitUI: {
        title: "Разделить PDF", selectFile: "Выбрать PDF", startSplit: "Разделить",
        modeExtract: "Извлечь выбранные", modeSplitAll: "Разделить все страницы",
        pagesFound: "Страниц найдено", noFile: "Файл не выбран", hint: "Нажимайте на страницы, чтобы выбрать/снять выбор"
    },
    imageToPdfUI: {
        title: "Изображения в PDF", addImages: "Добавить изображения", createPdf: "Создать PDF", clear: "Очистить всё",
        placeholder: "Добавьте изображения, чтобы объединить их в один PDF-документ"
    }
};

