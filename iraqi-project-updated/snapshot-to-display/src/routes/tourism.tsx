import { pageMeta, languageFrom } from "@/lib/seo";
import { SEO_PAGES } from "@/data/seo-content";
import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Castle, Landmark, MapPin, Mountain, MoonStar, Search, Store, X } from "lucide-react";
import { PageHero, Reveal, Star } from "@/components/site";
import { CardImage } from "@/components/card-image";
import {
  TOURISM_CATEGORIES,
  TOURISM_DESTINATIONS,
  type TourismCategory,
  type TourismDestination,
} from "@/data/tourism-content";
import { TOURISM_TRANSLATIONS } from "@/data/tourism-translations";
import { TOURISM_UNESCO } from "@/data/tourism-art";
import { useI18n, usePageMeta, type Lang } from "@/lib/i18n";
import ur from "@/assets/ziggurat-ur.jpg";

export const Route = createFileRoute("/tourism")({
  head: ({ match }) => pageMeta("/tourism", languageFrom(match.search.lang)),
  component: Tourism,
});

const PAGE = 12;

type Copy = {
  title: string;
  intro: string;
  search: string;
  all: string;
  filter: string;
  categories: Record<TourismCategory, string>;
  count: (n: number) => string;
  emptyTitle: string;
  emptyText: string;
  clear: string;
  featured: string;
  featuredLine: string;
  details: string;
  close: string;
  showMore: (n: number) => string;
  statPlaces: string;
  statThemes: string;
  statUnesco: string;
  unescoBadge: string;
  unescoBadgeLong: string;
  travel: string;
  season: string;
  unesco: string;
  unescoNote: string;
  sourceNote: string;
  ctaTitle: string;
  ctaBtn: string;
  urAlt: string;
  metaTitle: string;
  metaDesc: string;
};

const COPY: Record<Lang, Copy> = {
  en: {
    title: "Tourism in Iraq",
    intro:
      "From the first cities of Mesopotamia to mountain waterfalls and living traditions, explore the places that make Iraq extraordinary.",
    search: "Search destinations or regions",
    all: "All destinations",
    filter: "Filter by theme",
    categories: {
      archaeology: "Ancient sites",
      architecture: "Historic architecture",
      nature: "Nature & mountains",
      culture: "Culture & markets",
      religious: "Religious landmarks",
    },
    count: (n) => `${n} ${n === 1 ? "destination" : "destinations"}`,
    emptyTitle: "No destinations found",
    emptyText: "Try a different name, region or theme.",
    clear: "Clear search",
    featured: "Featured destination",
    featuredLine:
      "Start where cities began: a moon temple still standing after four thousand years.",
    details: "View details",
    close: "Close",
    showMore: (n) => `Show more (${n} left)`,
    statPlaces: "destinations",
    statThemes: "themes",
    statUnesco: "UNESCO sites in the guide",
    unescoBadge: "UNESCO",
    unescoBadgeLong: "UNESCO site named in the guide",
    travel: "Travel notes",
    season:
      "The guide recommends November through April for more pleasant weather, especially when exploring open-air archaeological sites in central and southern Iraq.",
    unesco: "UNESCO sites named in the guide",
    unescoNote:
      "The source guide highlights six sites: Ur, Babylon, Hatra, Samarra, Erbil Citadel and the Mesopotamian Marshes. Confirm current designations and visitor information before planning a trip.",
    sourceNote:
      "Destination descriptions and travel notes are based on the supplied Iraq tourist destinations guide. Image sources and licenses are listed in Photo credits.",
    ctaTitle: "Inspired? Come and meet Iraq at the event.",
    ctaBtn: "Event info",
    urAlt: "The Ziggurat of Ur at sunset",
    metaTitle: "Tourism in Iraq — Ancient Sites, Citadels & Mountains | Mesopotamia Nights",
    metaDesc:
      "Explore Iraq's archaeological sites, historic architecture, natural landscapes, cultural landmarks and spiritual heritage.",
  },
  ar: {
    title: "السياحة في العراق",
    intro:
      "من أولى مدن بلاد الرافدين إلى شلالات الجبال والتقاليد الحية، اكتشف الأماكن التي تجعل العراق استثنائياً.",
    search: "ابحث عن وجهة أو منطقة",
    all: "كل الوجهات",
    filter: "التصفية حسب الموضوع",
    categories: {
      archaeology: "مواقع أثرية قديمة",
      architecture: "عمارة تاريخية",
      nature: "الطبيعة والجبال",
      culture: "الثقافة والأسواق",
      religious: "معالم دينية",
    },
    count: (n) => `${n} وجهة`,
    emptyTitle: "لم يتم العثور على وجهات",
    emptyText: "جرّب اسماً أو منطقة أو موضوعاً آخر.",
    clear: "مسح البحث",
    featured: "وجهة مميزة",
    featuredLine: "ابدأ من حيث وُلدت المدن: معبد للقمر ما زال قائماً بعد أربعة آلاف عام.",
    details: "عرض التفاصيل",
    close: "إغلاق",
    showMore: (n) => `عرض المزيد (${n} متبقية)`,
    statPlaces: "وجهة",
    statThemes: "مواضيع",
    statUnesco: "مواقع يونسكو في الدليل",
    unescoBadge: "يونسكو",
    unescoBadgeLong: "موقع يونسكو مذكور في الدليل",
    travel: "ملاحظات السفر",
    season:
      "يوصي الدليل بالفترة من نوفمبر إلى أبريل لاعتدال الطقس، ولا سيما عند استكشاف المواقع الأثرية المفتوحة في وسط العراق وجنوبه.",
    unesco: "مواقع اليونسكو المذكورة في الدليل",
    unescoNote:
      "يسلط المصدر الضوء على ستة مواقع: أور، وبابل، والحضر، وسامراء، وقلعة أربيل، والأهوار. تحقّق من التصنيفات ومعلومات الزيارة الحالية قبل التخطيط للرحلة.",
    sourceNote:
      "أوصاف الوجهات وملاحظات السفر مستندة إلى دليل الوجهات السياحية في العراق المرفق. مصادر الصور وتراخيصها مدرجة في حقوق الصور.",
    ctaTitle: "ألهمتك الوجهات؟ تعال والتقِ بالعراق في الفعالية.",
    ctaBtn: "معلومات الفعالية",
    urAlt: "زقورة أور عند الغروب",
    metaTitle: "السياحة في العراق — المواقع الأثرية والقلاع والجبال | ليالي بلاد الرافدين",
    metaDesc:
      "اكتشف المواقع الأثرية والعمارة التاريخية والمناظر الطبيعية والمعالم الثقافية والتراث الروحي في العراق.",
  },
  ru: {
    title: "Туризм в Ираке",
    intro:
      "От первых городов Месопотамии до горных водопадов и живых традиций — откройте места, которые делают Ирак особенным.",
    search: "Поиск места или региона",
    all: "Все места",
    filter: "Фильтр по теме",
    categories: {
      archaeology: "Древние памятники",
      architecture: "Историческая архитектура",
      nature: "Природа и горы",
      culture: "Культура и рынки",
      religious: "Религиозные памятники",
    },
    count: (n) =>
      `${n} ${n % 10 === 1 && n % 100 !== 11 ? "место" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? "места" : "мест"}`,
    emptyTitle: "Места не найдены",
    emptyText: "Попробуйте другое название, регион или тему.",
    clear: "Очистить поиск",
    featured: "Главное место",
    featuredLine:
      "Начните там, где родились города: лунный храм, который стоит уже четыре тысячи лет.",
    details: "Подробнее",
    close: "Закрыть",
    showMore: (n) => `Показать ещё (осталось ${n})`,
    statPlaces: "мест",
    statThemes: "тем",
    statUnesco: "объектов ЮНЕСКО в путеводителе",
    unescoBadge: "ЮНЕСКО",
    unescoBadgeLong: "Объект ЮНЕСКО, упомянутый в путеводителе",
    travel: "Советы путешественникам",
    season:
      "Путеводитель рекомендует период с ноября по апрель: в это время погода приятнее, особенно для осмотра археологических памятников под открытым небом в центральном и южном Ираке.",
    unesco: "Объекты ЮНЕСКО, упомянутые в путеводителе",
    unescoNote:
      "В источнике выделены шесть объектов: Ур, Вавилон, Хатра, Самарра, цитадель Эрбиля и Месопотамские болота. Перед поездкой проверьте актуальный статус и информацию для посетителей.",
    sourceNote:
      "Описания мест и советы путешественникам основаны на предоставленном путеводителе по Ираку. Источники изображений и лицензии перечислены в разделе «Авторы фотографий».",
    ctaTitle: "Вдохновились? Приходите познакомиться с Ираком на мероприятии.",
    ctaBtn: "О мероприятии",
    urAlt: "Зиккурат Ура на закате",
    metaTitle: "Туризм в Ираке — древние памятники, цитадели и горы | Ночи Месопотамии",
    metaDesc:
      "Археологические памятники, историческая архитектура, природа, культурные места и духовное наследие Ирака.",
  },
};

const ICON: Record<TourismCategory, typeof Landmark> = {
  archaeology: Landmark,
  architecture: Castle,
  nature: Mountain,
  culture: Store,
  religious: MoonStar,
};

function localize(d: TourismDestination, lang: Lang) {
  const l = lang === "en" ? undefined : TOURISM_TRANSLATIONS[lang][d.id];
  return {
    name: l?.name ?? d.name,
    region: l?.region ?? d.region,
    description: l?.description ?? d.description,
  };
}

function Tourism() {
  const { lang } = useI18n();
  const c = COPY[lang];
  usePageMeta(SEO_PAGES["/tourism"]!.title, SEO_PAGES["/tourism"]!.description);

  const [cat, setCat] = useState<TourismCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE);
  const [open, setOpen] = useState<TourismDestination | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open) dlg.current?.showModal();
    else dlg.current?.close();
  }, [open]);

  const term = query.trim().toLocaleLowerCase();
  const list = useMemo(
    () =>
      TOURISM_DESTINATIONS.filter((d) => {
        if (cat !== "all" && d.category !== cat) return false;
        if (!term) return true;
        const en = `${d.name} ${d.region} ${d.description}`;
        const loc =
          lang === "en"
            ? ""
            : (() => {
                const l = localize(d, lang);
                return `${l.name} ${l.region} ${l.description}`;
              })();
        return `${en} ${loc}`.toLocaleLowerCase().includes(term);
      }),
    [cat, term, lang],
  );
  const shown = list.slice(0, limit);
  const featured = TOURISM_DESTINATIONS.find((d) => d.id === "ur")!;
  const fLoc = localize(featured, lang);
  const isUnesco = (id: string) => (TOURISM_UNESCO as readonly string[]).includes(id);
  const pick = (next: TourismCategory | "all") => {
    setCat(next);
    setLimit(PAGE);
  };

  const Badge = ({ id }: { id: string }) =>
    isUnesco(id) ? (
      <span
        title={c.unescoBadgeLong}
        className="inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-0.5 text-xs font-bold text-ink"
      >
        <Star className="h-3 w-3" />
        <span className="sr-only">{c.unescoBadgeLong}</span>
        <span aria-hidden>{c.unescoBadge}</span>
      </span>
    ) : null;

  return (
    <>
      <PageHero img={ur} title={{ en: c.title }} intro={{ en: c.intro }} />

      {/* Key figures */}
      <section className="container-x relative z-10 -mt-8" aria-label={c.title}>
        <dl className="grid grid-cols-3 divide-x divide-gold/30 overflow-hidden rounded-2xl border border-gold/30 bg-card text-center shadow-soft rtl:divide-x-reverse">
          {[
            [String(TOURISM_DESTINATIONS.length), c.statPlaces],
            [String(TOURISM_CATEGORIES.length), c.statThemes],
            [String(TOURISM_UNESCO.length), c.statUnesco],
          ].map(([n, label]) => (
            <div key={label} className="px-3 py-5">
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block font-display text-3xl text-clay sm:text-4xl" aria-hidden>
                  {n}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground sm:text-sm">
                  <span className="sr-only">{n} </span>
                  {label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Featured destination */}
      {cat === "all" && !term && (
        <section className="container-x mt-12" aria-labelledby="featured-h">
          <Reveal>
            <div className="group grid overflow-hidden rounded-3xl bg-lapis text-lapis-foreground shadow-soft md:grid-cols-2">
              <div className="relative min-h-64 overflow-hidden">
                <CardImage imageKey="tourism-ur" className="absolute inset-0 h-full !aspect-auto" sizes="(min-width: 768px) 50vw, 100vw" />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-lapis/50 to-transparent md:hidden"
                  aria-hidden
                />
              </div>
              <div className="flex flex-col justify-center gap-3 p-7 sm:p-10">
                <p
                  id="featured-h"
                  className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold"
                >
                  <Star className="h-4 w-4" />
                  {c.featured}
                </p>
                <h2 className="text-fluid-h2">{fLoc.name}</h2>
                <p className="flex items-center gap-2 text-turquoise">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                  {fLoc.region}
                </p>
                <p className="opacity-90">{c.featuredLine}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setOpen(featured)}
                    className="rounded-full bg-gold px-6 py-2.5 font-semibold text-ink hover:brightness-105"
                  >
                    {c.details}
                  </button>
                  <Badge id="ur" />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Filters */}
      <section className="container-x pt-12" aria-label={c.filter}>
        <div className="mb-8 flex flex-col gap-5">
          <label className="relative block max-w-xl">
            <span className="sr-only">{c.search}</span>
            <Search
              className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setLimit(PAGE);
              }}
              placeholder={c.search}
              className="h-12 w-full rounded-full border border-border bg-card ps-12 pe-12 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={c.clear}
                className="absolute end-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-muted"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            )}
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label={c.filter}>
            {(["all", ...TOURISM_CATEGORIES] as const).map((k) => {
              const Icon = k === "all" ? Star : ICON[k];
              const active = cat === k;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => pick(k)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition ${active ? "border-clay bg-clay text-primary-foreground" : "border-border bg-card hover:border-clay"}`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {k === "all" ? c.all : c.categories[k]}
                </button>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {c.count(list.length)}
          </p>
        </div>

        {list.length > 0 ? (
          <>
            <div
              key={`${cat}-${term}`}
              className="grid gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300 sm:grid-cols-2 lg:grid-cols-3"
            >
              {shown.map((d) => {
                const l = localize(d, lang);
                const Icon = ICON[d.category];
                return (
                  <button
                    key={d.id}
                    onClick={() => setOpen(d)}
                    className="group lift flex flex-col overflow-hidden rounded-2xl bg-card text-start shadow-soft"
                  >
                    <div className="relative overflow-hidden">
                      <CardImage imageKey={"tourism-" + d.id} />
                      <span className="absolute start-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-lapis/80 px-3 py-1 text-xs text-lapis-foreground backdrop-blur">
                        <Icon className="h-3.5 w-3.5" aria-hidden />
                        {c.categories[d.category]}
                      </span>
                      {isUnesco(d.id) && (
                        <span className="absolute end-3 top-3">
                          <Badge id={d.id} />
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="text-xl leading-snug">{l.name}</h2>
                      <p className="mt-1.5 flex items-start gap-1.5 text-sm text-turquoise">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                        {l.region}
                      </p>
                      <p className="mt-2 line-clamp-3 text-sm leading-7 text-muted-foreground">
                        {l.description}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-clay">
                        {c.details}{" "}
                        <span className="rtl:rotate-180" aria-hidden>
                          →
                        </span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
            {list.length > shown.length && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setLimit((n) => n + PAGE)}
                  className="rounded-full border border-clay px-7 py-2.5 font-semibold text-clay hover:bg-clay hover:text-primary-foreground"
                >
                  {c.showMore(list.length - shown.length)}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-2xl border border-border bg-card px-6 py-14 text-center">
            <h2 className="text-2xl">{c.emptyTitle}</h2>
            <p className="mt-2 text-muted-foreground">{c.emptyText}</p>
            <button
              onClick={() => {
                setQuery("");
                pick("all");
              }}
              className="mt-5 rounded-full bg-lapis px-5 py-2 text-lapis-foreground"
            >
              {c.clear}
            </button>
          </div>
        )}
      </section>

      {/* Travel notes */}
      <section className="container-x mt-16" aria-labelledby="travel-h">
        <div className="grid gap-px overflow-hidden rounded-3xl bg-gold/40 md:grid-cols-2">
          <div className="bg-lapis p-8 text-lapis-foreground sm:p-10">
            <h2 id="travel-h" className="flex items-center gap-2 text-2xl text-gold">
              <Star className="h-5 w-5" />
              {c.travel}
            </h2>
            <p className="mt-3 leading-8 opacity-90">{c.season}</p>
          </div>
          <div className="bg-lapis p-8 text-lapis-foreground sm:p-10">
            <h2 className="flex items-center gap-2 text-2xl text-gold">
              <Star className="h-5 w-5" />
              {c.unesco}
            </h2>
            <p className="mt-3 leading-8 opacity-90">{c.unescoNote}</p>
          </div>
        </div>
        <p className="mt-4 text-xs leading-6 text-muted-foreground">{c.sourceNote}</p>
      </section>

      <section className="container-x mt-12">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-clay p-8 text-primary-foreground md:flex-row md:items-center">
          <p className="font-display text-2xl">{c.ctaTitle}</p>
          <Link to="/event" className="rounded-full bg-sand px-6 py-3 font-semibold text-ink">
            {c.ctaBtn}
          </Link>
        </div>
      </section>

      <dialog
        ref={dlg}
        aria-labelledby="dest-title"
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dlg.current && setOpen(null)}
        className="m-auto w-[min(92vw,40rem)] max-h-[92vh] overflow-y-auto rounded-2xl bg-card p-0 text-card-foreground backdrop:bg-lapis/70"
      >
        {open &&
          (() => {
            const l = localize(open, lang);
            return (
              <div>
                <div className="relative">
                  <CardImage imageKey={"tourism-" + open.id} className="!aspect-[16/10]" sizes="(min-width: 640px) 640px, 92vw" />
                  <button
                    onClick={() => setOpen(null)}
                    aria-label={c.close}
                    className="absolute end-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-lapis/80 text-lapis-foreground backdrop-blur hover:bg-lapis"
                  >
                    <X className="h-5 w-5" aria-hidden />
                  </button>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-muted px-3 py-0.5 text-xs">
                      {c.categories[open.category]}
                    </span>
                    <Badge id={open.id} />
                  </div>
                  <h2 id="dest-title" className="mt-3 text-2xl sm:text-3xl">
                    {l.name}
                  </h2>
                  <p className="mt-2 flex items-start gap-1.5 text-turquoise">
                    <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden />
                    {l.region}
                  </p>
                  <p className="mt-4 leading-8">{l.description}</p>
                  <button
                    onClick={() => setOpen(null)}
                    className="mt-6 rounded-full bg-lapis px-5 py-2 text-lapis-foreground"
                  >
                    {c.close}
                  </button>
                </div>
              </div>
            );
          })()}
      </dialog>
    </>
  );
}
