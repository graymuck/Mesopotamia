import { pageMeta, languageFrom } from "@/lib/seo";
import { SEO_PAGES } from "@/data/seo-content";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n, usePageMeta } from "@/lib/i18n";
import { Reveal } from "@/components/site";
import { CULTURAL_EVENTS } from "@/data/events";
import { CardImage } from "@/components/card-image";
import hero from "@/assets/hero-iraq.jpg";
import calli from "@/assets/calligraphy.jpg";
import homeFood from "@/assets/home-food-table-960.webp";
import homeFoodSmall from "@/assets/home-food-table-480.webp";
import homeHistory from "@/assets/home-history-ur-960.webp";
import homeHistorySmall from "@/assets/home-history-ur-480.webp";

export const Route = createFileRoute("/")({
  head: ({ match }) => pageMeta("/", languageFrom(match.search.lang)),
  component: Index,
});

const CARDS = [
  { to: "/history", key: "nav.history", hook: "card.history", imageKey: "home-history" },
  { to: "/food", key: "nav.food", hook: "card.food", imageKey: "home-food" },
  { to: "/religions", key: "nav.religions", hook: "card.religions", imageKey: "community-yazidis" },
  { to: "/languages", key: "nav.languages", hook: "card.languages", imageKey: "languages" },
] as const;

function Index() {
  const { t, txt } = useI18n();
  const event = CULTURAL_EVENTS[0];
  usePageMeta(SEO_PAGES["/"]!.title, SEO_PAGES["/"]!.description);
  return (
    <>
      <section className="relative flex min-h-svh items-end overflow-hidden bg-lapis text-lapis-foreground">
        <img src={hero} alt={t("home.alt")} width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero" aria-hidden />
        <div className="container-x relative pb-20 pt-32">
          <h1 className="text-fluid-hero max-w-4xl">{t("home.title")}</h1>
          <p className="prose-w mt-5 text-lg opacity-90">{t("home.sub")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#explore" className="rounded-full bg-turquoise px-6 py-3 font-semibold text-primary-foreground shadow-soft">{t("home.explore")}</a>
            <Link to="/event" className="rounded-full border border-gold px-6 py-3 font-semibold text-gold hover:bg-gold/15">{t("home.details")}</Link>
          </div>
        </div>
      </section>

      <section id="explore" className="container-x scroll-mt-20 py-20">
        <h2 className="text-fluid-h2 mb-10">{t("home.teaser")}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {CARDS.map((c) => (
            <Reveal key={c.to}>
              <Link to={c.to} className="group lift relative block overflow-hidden rounded-2xl shadow-soft">
                {c.imageKey === "home-food" || c.imageKey === "home-history" ? <img src={c.imageKey === "home-food" ? homeFood : homeHistory} srcSet={c.imageKey === "home-food" ? `${homeFoodSmall} 480w, ${homeFood} 960w` : `${homeHistorySmall} 480w, ${homeHistory} 960w`} sizes="(min-width: 640px) 50vw, 100vw" alt="" loading="lazy" decoding="async" width={960} height={720} className="zoom-img aspect-[4/3] w-full object-cover" /> : c.imageKey === "languages" ? <img src={calli} alt="" loading="lazy" width={1024} height={768} className="zoom-img aspect-[4/3] w-full object-cover" /> : <CardImage imageKey={c.imageKey} decorative sizes="(min-width: 640px) 50vw, 100vw" />}
                <div className="absolute inset-0 bg-hero" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-6 text-lapis-foreground">
                  <h3 className="text-2xl">{t(c.key)}</h3>
                  <p className="mt-1 opacity-90">{t(c.hook)}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-gold">{t("common.more")} <span className="rtl:rotate-180" aria-hidden>→</span></span>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal className="sm:col-span-2">
            <Link to="/tourism" className="group lift relative block overflow-hidden rounded-2xl shadow-soft">
              <CardImage imageKey="tourism-marshes" decorative className="!aspect-[16/9] sm:!aspect-[21/9]" sizes="100vw" />
              <div className="absolute inset-0 bg-hero" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 p-6 text-lapis-foreground">
                <h3 className="text-2xl">{t("nav.tourism")}</h3>
                <p className="mt-1 opacity-90">{t("card.tourism")}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-gold">{t("common.more")} <span className="rtl:rotate-180" aria-hidden>→</span></span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-x">
        <div className="bg-tile flex flex-col items-start justify-between gap-4 rounded-2xl p-8 text-lapis-foreground md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl">{txt(event.date)} · {txt(event.time)}</p>
            <p className="mt-2 opacity-90">{txt(event.venue)} · {txt(event.address)}</p>
          </div>
          <Link to="/event" className="rounded-full bg-gold px-6 py-3 font-semibold text-ink">{t("home.details")}</Link>
        </div>
      </section>
    </>
  );
}
