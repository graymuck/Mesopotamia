import { pageMeta, languageFrom } from "@/lib/seo";
import { SEO_PAGES } from "@/data/seo-content";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useI18n, usePageMeta, type Lang } from "@/lib/i18n";
import { Divider, PageHero, Reveal } from "@/components/site";
import { CardImage } from "@/components/card-image";
import { CARD_IMAGES, HISTORY_IMAGES } from "@/data/card-images";
import { formatHistoryArticle, HISTORY_TOPICS } from "@/data/history-content";
import zig from "@/assets/ziggurat-ur.jpg";

export const Route = createFileRoute("/history")({
  head: ({ match }) => pageMeta("/history", languageFrom(match.search.lang)),
  component: History,
});

const GIFTS = ["Writing", "The 60-minute hour & 360° circle", "Written law", "The first libraries"];

function History() {
  const { lang, tr, txt, t } = useI18n();
  usePageMeta(SEO_PAGES["/history"]!.title, SEO_PAGES["/history"]!.description);
  return (
    <>
      <PageHero
        img={zig}
        title={{ en: "History", ar: "التاريخ", ru: "История" }}
        intro={{
          en: "Between two rivers, people built some of the world's first cities, laws and libraries.",
          ar: "بين نهرين، بنى الناس من أوائل المدن والقوانين والمكتبات في العالم.",
          ru: "Между двумя реками возникли первые города, законы и библиотеки.",
        }}
      />
      <section className="container-x py-16">
        <ol className="relative space-y-10 before:absolute before:inset-y-0 before:start-3 before:w-0.5 before:bg-gold/50 md:before:start-1/2">
          {HISTORY_TOPICS.map((topic, i) => (
            <li
              key={topic.id}
              className={`relative ps-10 md:w-1/2 md:ps-0 ${i % 2 ? "md:ms-auto md:ps-10" : "md:pe-10"}`}
            >
              <span
                className={`absolute start-1.5 top-6 h-4 w-4 rounded-full border-2 border-sand bg-gold ${i % 2 ? "md:-start-2" : "md:start-auto md:-end-2"}`}
                aria-hidden
              />
              <HistoryArticle
                topic={topic}
                photoLabel={txt(topic.photo)}
                date={topic.date[lang]}
                title={topic.title[lang]}
                summary={topic.summary[lang]}
                lang={lang}
                readMore={t("history.readMore")}
                readLess={t("history.readLess")}
                translationNote={lang === "ar" ? undefined : t("history.machineTranslated")}
              />
            </li>
          ))}
        </ol>
      </section>
      <Divider />
      <section className="container-x">
        <h2 className="text-fluid-h2 mb-6">{txt("What Iraq gave the world")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GIFTS.map((g, i) => (
            <Reveal
              key={g}
              className="bg-tile overflow-hidden rounded-2xl font-display text-xl text-lapis-foreground"
            >
              <CardImage imageKey={["history-tablet", "gift-math", "gift-law", "gift-library"][i] ?? "history-tablet"} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
              <div className="p-6">{txt(g)}</div>
            </Reveal>
          ))}
        </div>
      </section>
      <div className="container-x mt-12">
        <p className="border-t border-border pt-6 text-start text-sm leading-relaxed text-muted-foreground">
          {txt("Historical content author:")} <bdi lang={lang}>{txt("Al-Kinani Brer Amer Musaab")}</bdi>
        </p>
      </div>
    </>
  );
}

function HistoryArticle({
  topic,
  photoLabel,
  date,
  title,
  summary,
  lang,
  readMore,
  readLess,
  translationNote,
}: {
  topic: (typeof HISTORY_TOPICS)[number];
  photoLabel: string;
  date: string;
  title: string;
  summary: string;
  lang: Lang;
  readMore: string;
  readLess: string;
  translationNote: string | undefined;
}) {
  const [expanded, setExpanded] = useState(false);
  const contentId = `history-article-${topic.id}`;
  const imageKey = HISTORY_IMAGES[topic.id] ?? "history-tablet";

  return (
    <Reveal as="article" className="group overflow-hidden rounded-2xl bg-card shadow-soft">
      <figure className="overflow-hidden">
        <CardImage imageKey={imageKey} sizes="(min-width: 1280px) 1100px, 100vw" />
        <figcaption className="px-5 pt-2 text-xs text-muted-foreground">{CARD_IMAGES[imageKey]?.caption?.[lang] ?? photoLabel}</figcaption>
      </figure>
      <div className="p-5">
        <p className="text-sm font-semibold text-turquoise">{date}</p>
        <h2 className="text-2xl">{title}</h2>
        <p className="mt-2 text-muted-foreground">{summary}</p>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={() => setExpanded((current) => !current)}
          className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md font-semibold text-turquoise underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {expanded ? readLess : readMore}
          <span aria-hidden="true">{expanded ? "−" : "+"}</span>
        </button>
        {expanded && (
          <div
            id={contentId}
            lang={lang}
            dir={lang === "ar" ? "rtl" : "ltr"}
            aria-label={title}
            className="mt-5 border-t border-border pt-5 text-start leading-8"
          >
            {translationNote && (
              <p className="mb-4 text-sm text-muted-foreground">{translationNote}</p>
            )}
            <ReactMarkdown
              components={{
                h3: ({ children }) => (
                  <h4 className="mb-2 mt-6 text-lg font-semibold text-turquoise">{children}</h4>
                ),
                p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
                ul: ({ children }) => <ul className="mb-4 list-disc space-y-2 ps-6">{children}</ul>,
                ol: ({ children }) => (
                  <ol className="mb-4 list-decimal space-y-2 ps-6">{children}</ol>
                ),
                strong: ({ children }) => <strong className="font-bold">{children}</strong>,
              }}
            >
              {formatHistoryArticle(topic.fullText[lang])}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </Reveal>
  );
}
