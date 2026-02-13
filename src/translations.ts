import { en } from "./translations/locales/en";
import { tr } from "./translations/locales/tr";
import { bs } from "./translations/locales/bs";
import { es } from "./translations/locales/items/es";
import { fr } from "./translations/locales/items/fr";
import { de } from "./translations/locales/items/de";
import * as majorExtra from "./translations/locales/items/major_extra";
import * as asian from "./translations/locales/items/asian";
import { others } from "./translations/locales/items/others";

export const versionInfo = {
    current: "v0.3.0",
    releaseName: "Production Ready PDF & Image Engine",
    date: "2026-02-13",
    notes: {
        en: [
            "Images to PDF: Convert and combine multiple images into a professional PDF",
            "Visual PDF Split: See and select specific pages to extract or split-all",
            "Fixed PDF Merge: Fully compatible with Apple Preview & strict readers",
            "Pardus & Linux Support: Optimized installers for Debian-based systems",
            "Batch Image Resize: Added 100+ image processing with 4 scaling modes"
        ],
        tr: [
            "Görselden PDF'e: Birden fazla görseli tek bir PDF belgesine dönüştürün",
            "Görsel PDF Ayırma: Sayfaları görerek seçin, ayıklayın veya tümünü bölün",
            "PDF Birleştirme Fix: Apple Önizleme ve katı okuyucularla tam uyum",
            "Pardus ve Linux Desteği: Debian tabanlı sistemler için optimize edilmiş paketler",
            "Toplu Görsel Boyutlandırma: 4 farklı mod ile 100+ görsel işleme"
        ]
    }
};

export const translations = {
    en,
    tr,
    bs,
    es,
    fr,
    de,
    ...majorExtra,
    ...asian,
    ...others
} as const;

export type Language = keyof typeof translations;

export const languageNames: Record<Language, string> = {
    en: "English",
    tr: "Türkçe",
    bs: "Bosanski",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    it: "Italiano",
    pt: "Português",
    nl: "Nederlands",
    ru: "Русский",
    ja: "日本語",
    ko: "한국어",
    zh: "简体中文",
    hi: "हिन्दी",
    ar: "العربية",
    id: "Bahasa Indonesia",
    vi: "Tiếng Việt",
    th: "ไทย",
    pl: "Polski",
    uk: "Українська",
    sv: "Svenska",
    fi: "Suomi",
    da: "Dansk",
    no: "Norsk",
    el: "Ελληνικά",
    cs: "Čeština",
    hu: "Magyar",
    ro: "Română",
    bg: "Български",
    sk: "Slovenčina",
    hr: "Hrvatski",
    sr: "Српски",
    sl: "Slovenščina",
    et: "Eesti",
    lv: "Latviešu",
    lt: "Lietuvių",
    ms: "Bahasa Melayu",
    fil: "Filipino",
    fa: "فارسی",
    ka: "ქართული",
    hy: "Հայերեն",
    mn: "Монгол",
    kk: "Қазақ тілі",
    bn: "বাংলা",
    pa: "ਪੰਜਾਬੀ",
    az: "Azərbaycanca",
    uz: "O'zbekcha",
    sq: "Shqip"
};
