import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { russianText } from "./ru";
import { arabicText } from "./ar";

export type Lang = "en" | "ar" | "ru";
export const SUPPORTED_LANGUAGES: Lang[] = ["en", "ar", "ru"];
export function isLang(value: unknown): value is Lang {
  return value === "en" || value === "ar" || value === "ru";
}
export function languageDirection(lang: Lang) {
  return lang === "ar" ? "rtl" : "ltr";
}

/** Language choices for the selector. Each name is written in its own language. */
export const LANGUAGE_OPTIONS: { code: Lang; flag: string; label: string; short: string }[] = [
  { code: "en", flag: "🇬🇧", label: "English", short: "EN" },
  { code: "ar", flag: "🇮🇶", label: "العربية", short: "عربي" },
  { code: "ru", flag: "🇷🇺", label: "Русский", short: "RU" },
];

/** All shared UI text. Page-specific long text lives with each page as {en, ar?} pairs; English is the fallback. */
const dict: Record<Lang, Record<string, string>> = {
  en: {
    "event.name": "Mesopotamia Nights",
    "nav.home": "Home",
    "nav.history": "History",
    "nav.tourism": "Tourism",
    "nav.food": "Food",
    "nav.religions": "Religions & Communities",
    "nav.languages": "Languages",
    "nav.event": "Event Info",
    "nav.visit": "Visit the event",
    "nav.menu": "Menu",
    "nav.skip": "Skip to content",
    "history.readMore": "Read more",
    "history.readLess": "Read less",
    "history.machineTranslated": "Machine translation; editorial review is recommended.",
    "home.title": "Where civilization began, a feast awaits.",
    "home.sub": "History, flavor, faith and language: five thousand years of Iraq, in one place.",
    "home.explore": "Explore",
    "home.details": "Event details",
    "home.teaser": "Five doors into Iraq",
    "card.history": "Where writing, law and cities were born.",
    "card.tourism": "Ziggurats, citadels, marshes and mountain waterfalls.",
    "card.food": "Fire-grilled fish, date cookies, cardamom tea.",
    "card.religions": "Many faiths, one ancient land.",
    "card.languages": "Say “peace” in five scripts.",
    "strip.program": "See the program",
    "footer.contact": "Contact",
    "footer.credits": "Photo credits",
    "footer.creditsNote":
      "Photographer names and licenses to be added (own photos / Wikimedia Commons / Unsplash).",
    "common.more": "Discover",
    "nav.language": "Language",
    "footer.explore": "Explore",
    "footer.rights": "A celebration of Iraqi culture.",
    "footer.top": "Back to top",
    "err.notfound": "Page not found",
    "err.home": "Go home",
    "err.load": "This page didn't load",
    "err.retry": "Try again",
    "home.alt": "Glazed blue brick gate with golden lions at dusk",
  },
  ru: {
    "event.name": "Ночи Месопотамии",
    "nav.home": "Главная",
    "nav.history": "История",
    "nav.tourism": "Туризм",
    "nav.food": "Еда",
    "nav.religions": "Религии и общины",
    "nav.languages": "Языки",
    "nav.event": "О мероприятии",
    "nav.visit": "Посетить мероприятие",
    "nav.menu": "Меню",
    "nav.skip": "Перейти к содержимому",
    "history.readMore": "Читать далее",
    "history.readLess": "Свернуть",
    "history.machineTranslated": "Машинный перевод; рекомендуется редакторская проверка.",
    "home.title": "Там, где зародилась цивилизация, вас ждёт пир.",
    "home.sub": "История, вкусы, вера и языки: пять тысяч лет Ирака в одном месте.",
    "home.explore": "Узнать больше",
    "home.details": "О мероприятии",
    "home.teaser": "Пять дверей в Ирак",
    "card.history": "Где родились письменность, законы и города.",
    "card.tourism": "Зиккураты, цитадели, болота и горные водопады.",
    "card.food": "Рыба на огне, финиковое печенье, чай с кардамоном.",
    "card.religions": "Много верований, одна древняя земля.",
    "card.languages": "Скажите «мир» на пяти языках.",
    "strip.program": "Смотреть программу",
    "footer.contact": "Контакты",
    "footer.credits": "Авторы фотографий",
    "footer.creditsNote":
      "Имена фотографов и лицензии будут добавлены (собственные фото / Wikimedia Commons / Unsplash).",
    "common.more": "Открыть",
    "nav.language": "Язык",
    "footer.explore": "Разделы",
    "footer.rights": "Праздник иракской культуры.",
    "footer.top": "Наверх",
    "err.notfound": "Страница не найдена",
    "err.home": "На главную",
    "err.load": "Не удалось загрузить страницу",
    "err.retry": "Попробовать снова",
    "home.alt": "Ворота из синего глазурованного кирпича с золотыми львами в сумерках",
  },
  ar: {
    "event.name": "ليالي بلاد الرافدين",
    "nav.home": "الرئيسية",
    "nav.history": "التاريخ",
    "nav.tourism": "السياحة",
    "nav.food": "الطعام",
    "nav.religions": "الأديان والمجتمعات",
    "nav.languages": "اللغات",
    "nav.event": "معلومات الفعالية",
    "nav.visit": "زوروا الفعالية",
    "nav.menu": "القائمة",
    "nav.skip": "انتقل إلى المحتوى",
    "history.readMore": "اقرأ المزيد",
    "history.readLess": "اقرأ أقل",
    "history.machineTranslated": "الترجمة الآلية؛ يُنصح بمراجعتها تحريرياً.",
    "home.title": "حيث بدأت الحضارة، تنتظركم مائدة.",
    "home.sub": "تاريخ ونكهة وإيمان ولغة: خمسة آلاف عام من العراق في مكان واحد.",
    "home.explore": "استكشف",
    "home.details": "تفاصيل الفعالية",
    "home.teaser": "خمسة أبواب إلى العراق",
    "card.history": "حيث وُلدت الكتابة والقانون والمدن.",
    "card.tourism": "زقورات وقلاع وأهوار وشلالات جبلية.",
    "card.food": "سمك مسكوف، كليجة، وشاي بالهيل.",
    "card.religions": "أديان كثيرة، وأرض واحدة عريقة.",
    "card.languages": "قل «سلام» بخمس كتابات.",
    "strip.program": "اطّلع على البرنامج",
    "footer.contact": "تواصل",
    "footer.credits": "حقوق الصور",
    "footer.creditsNote": "ستُضاف أسماء المصورين والتراخيص لاحقاً.",
    "common.more": "اكتشف",
    "nav.language": "اللغة",
    "footer.explore": "استكشف",
    "footer.rights": "احتفاءٌ بالثقافة العراقية.",
    "footer.top": "العودة إلى الأعلى",
    "err.notfound": "الصفحة غير موجودة",
    "err.home": "العودة إلى الرئيسية",
    "err.load": "تعذّر تحميل هذه الصفحة",
    "err.retry": "حاول مرة أخرى",
    "home.alt": "بوابة من الآجر الأزرق المزجّج عليها أسود ذهبية عند الغروب",
  },
};

export type L = { en: string; ar?: string; ru?: string };

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function I18nProvider({ children, initialLang, onLanguageChange }: { children: ReactNode; initialLang?: Lang; onLanguageChange?: (lang: Lang) => void }) {
  const [langState, setLangState] = useState<Lang>("en");
  const lang = initialLang ?? langState;
  // Page URLs control language for SSR and crawlers; standalone consumers retain saved preferences.
  useEffect(() => {
    if (initialLang) return;
    try {
      const saved = localStorage.getItem("lang");
      if (isLang(saved)) setLangState(saved);
    } catch {
      /* storage or clipboard unavailable: carry on without it */
    }
  }, [initialLang]);
  // Only the document attributes follow state; saving happens on an explicit choice so a
  // fresh page load can never overwrite the stored language with the default.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = languageDirection(lang);
  }, [lang]);
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    onLanguageChange?.(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      /* storage or clipboard unavailable: carry on without it */
    }
  }, [onLanguageChange]);
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const { lang, setLang } = useContext(Ctx);
  const t = (key: string) => dict[lang][key] ?? dict.en[key] ?? key;
  const txt = (text: string) =>
    lang === "ru" ? (russianText[text] ?? text) : lang === "ar" ? (arabicText[text] ?? text) : text;
  const tr = (v: L) => v[lang] ?? txt(v.en);
  return { lang, setLang, t, tr, txt };
}

/** Keeps the browser tab title and meta description in the selected language. */
export function usePageMeta(title: L, description?: L) {
  const { tr, lang } = useI18n();
  const t = tr(title);
  const d = description ? tr(description) : undefined;
  useEffect(() => {
    document.title = t;
    if (d) document.querySelector('meta[name="description"]')?.setAttribute("content", d);
  }, [t, d, lang]);
}
