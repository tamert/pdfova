import { en } from "./translations/locales/en";
import { tr } from "./translations/locales/tr";
import { bs } from "./translations/locales/bs";
import { es } from "./translations/locales/items/es";
import { fr } from "./translations/locales/items/fr";
import { de } from "./translations/locales/items/de";
import { ar } from "./translations/locales/items/ar";
import { ko } from "./translations/locales/items/ko";
import { ja } from "./translations/locales/items/ja";
import { zh } from "./translations/locales/items/zh";
import { az } from "./translations/locales/items/az";
import { uz } from "./translations/locales/items/uz";
import { ru } from "./translations/locales/items/ru";
import { pt } from "./translations/locales/items/pt";
import { it } from "./translations/locales/items/it";
import { nl } from "./translations/locales/items/nl";
import { pl } from "./translations/locales/items/pl";
import { hi } from "./translations/locales/items/hi";
import { id } from "./translations/locales/items/id";
import { vi } from "./translations/locales/items/vi";
import { th } from "./translations/locales/items/th";
import { uk } from "./translations/locales/items/uk";
import { sv } from "./translations/locales/items/sv";
import { fi } from "./translations/locales/items/fi";
import { da } from "./translations/locales/items/da";
import { no } from "./translations/locales/items/no";
import { el } from "./translations/locales/items/el";
import { cs } from "./translations/locales/items/cs";
import { hu } from "./translations/locales/items/hu";
import { ro } from "./translations/locales/items/ro";
import { bg } from "./translations/locales/items/bg";
import { sk } from "./translations/locales/items/sk";
import { hr } from "./translations/locales/items/hr";
import { sr } from "./translations/locales/items/sr";
import { sl } from "./translations/locales/items/sl";
import { et } from "./translations/locales/items/et";
import { lv } from "./translations/locales/items/lv";
import { lt } from "./translations/locales/items/lt";
import { ms } from "./translations/locales/items/ms";
import { fil } from "./translations/locales/items/fil";
import { fa } from "./translations/locales/items/fa";
import { ka } from "./translations/locales/items/ka";
import { hy } from "./translations/locales/items/hy";
import { mn } from "./translations/locales/items/mn";
import { kk } from "./translations/locales/items/kk";
import { bn } from "./translations/locales/items/bn";
import { pa } from "./translations/locales/items/pa";
import { sq } from "./translations/locales/items/sq";

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
    ar,
    ko,
    ja,
    zh,
    az,
    uz,
    ru,
    pt,
    it,
    nl,
    pl,
    hi,
    id,
    vi,
    th,
    uk,
    sv,
    fi,
    da,
    no,
    el,
    cs,
    hu,
    ro,
    bg,
    sk,
    hr,
    sr,
    sl,
    et,
    lv,
    lt,
    ms,
    fil,
    fa,
    ka,
    hy,
    mn,
    kk,
    bn,
    pa,
    sq
} as const;

export type Language = keyof typeof translations;

export const languageNames: Record<Language, string> = {
    en: "English",
    tr: "Türkçe",
    bs: "Bosanski",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    ar: "العربية",
    ko: "한국어",
    ja: "日本語",
    zh: "简体中文",
    it: "Italiano",
    pt: "Português",
    nl: "Nederlands",
    ru: "Русский",
    hi: "हिन्दी",
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
    hy: "Հايերեն",
    mn: "Монгол",
    kk: "Қазақ тілі",
    bn: "বাংলা",
    pa: "ਪੰਜਾਬੀ",
    az: "Azərbaycanca",
    uz: "O'zbekcha",
    sq: "Shqip"
};
