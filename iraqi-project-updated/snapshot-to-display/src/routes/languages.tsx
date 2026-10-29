import { pageMeta, languageFrom } from "@/lib/seo";
import { SEO_PAGES } from "@/data/seo-content";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero, Reveal } from "@/components/site";
import { useI18n, usePageMeta } from "@/lib/i18n";
import calli from "@/assets/calligraphy.jpg";

export const Route = createFileRoute("/languages")({
  head: ({ match }) => pageMeta("/languages", languageFrom(match.search.lang)),
  component: Languages,
});

const LANGS = [
  { id: "arabic", name: "Arabic", word: "سلام", tr: "salām", dir: "rtl", note: "Official language, spoken across Iraq." },
  { id: "kurdish", name: "Kurdish (Sorani)", word: "ئاشتی", tr: "ashtî", dir: "rtl", note: "Official language, mainly in the north." },
  { id: "turkmen", name: "Turkmen", word: "barış", tr: "barış", dir: "ltr", note: "Official where widely spoken, e.g. around Kirkuk." },
  { id: "syriac", name: "Syriac (Neo-Aramaic)", word: "ܫܠܡܐ", tr: "shlāmā", dir: "rtl", note: "Official where widely spoken; heir of ancient Aramaic." },
  { id: "armenian", name: "Armenian", word: "խաղաղություն", tr: "khaghaghutyun", dir: "ltr", note: "Spoken by Iraq's Armenian community." },
];

function SayCard({ l }: { l: (typeof LANGS)[number] }) {
  const { txt } = useI18n();
  const [copied, setCopied] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const src = `/audio/${l.id}.mp3`;
  useEffect(() => {
    fetch(src, { method: "HEAD" })
      .then((r) => setHasAudio(r.ok && (r.headers.get("content-type") ?? "").includes("audio")))
      .catch(() => {});
  }, [src]);
  const copy = async () => {
    try { await navigator.clipboard.writeText(l.word); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* storage or clipboard unavailable: carry on without it */ }
  };
  return (
    <Reveal as="article" className="rounded-2xl bg-card p-6 shadow-soft">
      <p className="text-sm font-semibold text-turquoise">{txt(l.name)}</p>
      <p className="my-3 font-display text-5xl text-lapis dark:text-gold" dir={l.dir}>{l.word}</p>
      <p className="italic text-muted-foreground">{l.tr}</p>
      <p className="mt-2 text-sm">{txt(l.note)}</p>
      <div className="mt-4 flex gap-2">
        <button onClick={copy} className="rounded-full border border-turquoise px-4 py-1.5 text-sm hover:bg-turquoise/10">{copied ? txt("Copied!") : txt("Copy")}</button>
        {hasAudio && <button onClick={() => new Audio(src).play().catch(() => {})} className="rounded-full bg-turquoise px-4 py-1.5 text-sm text-primary-foreground">{txt("▶ Listen")}</button>}
      </div>
    </Reveal>
  );
}

function Languages() {
  const { txt } = useI18n();
  usePageMeta(SEO_PAGES["/languages"]!.title, SEO_PAGES["/languages"]!.description);
  return (
    <>
      <PageHero img={calli} title={{ en: "Languages", ar: "اللغات" }} intro={{ en: "Iraq's constitution recognizes Arabic and Kurdish as official languages, with Turkmen and Syriac also official in areas where they are spoken by a significant population.", ar: "يعترف دستور العراق بالعربية والكردية لغتين رسميتين، وبالتركمانية والسريانية في المناطق التي يتحدث بها عدد كبير من السكان." }} />
      <section className="container-x py-16">
        <h2 className="text-fluid-h2">{txt("Say “peace”")}</h2>
        <p className="mb-8 text-sm text-muted-foreground">{txt("Spellings to be verified with native speakers.")}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LANGS.map((l) => <SayCard key={l.id} l={l} />)}
        </div>
        <p className="prose-w mt-12 text-muted-foreground">
          {txt("Mandaic, a form of Aramaic, survives as the liturgical language of the Mandaean community.")}
        </p>
      </section>
    </>
  );
}
