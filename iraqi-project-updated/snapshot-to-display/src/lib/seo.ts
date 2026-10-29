import type { Lang } from "@/lib/i18n";
import { SEO_PAGES } from "@/data/seo-content";
export const SEO_LANGUAGES: Lang[] = ["en", "ar", "ru"];
export const languageFrom = (value: unknown): Lang => value === "ar" || value === "en" ? value : "ru";
export function localizedPath(path: string, lang: Lang) {
  return (path === "/" ? "/" : path.replace(/\/$/, "")) + (lang === "ru" ? "" : "?lang=" + lang);
}
export function siteOrigin(requestUrl: string, configured?: string) {
  const url = new URL(configured || requestUrl);
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("SITE_URL must use HTTP or HTTPS");
  return url.origin;
}
export function pageMeta(path: string, lang: Lang) {
  const page = SEO_PAGES[path];
  if (!page) return { meta: [{ title: "Page not found | Mesopotamia Nights" }, { name: "robots", content: "noindex, follow" }] };
  const locale = { en: "en_US", ar: "ar_IQ", ru: "ru_RU" }[lang];
  return { meta: [
    { title: page.title[lang] },
    { name: "description", content: page.description[lang] },
    { property: "og:title", content: page.title[lang] },
    { property: "og:description", content: page.description[lang] },
    { property: "og:type", content: path === "/" || path === "/event" ? "website" : "article" },
    { property: "og:site_name", content: "Mesopotamia Nights" },
    { property: "og:locale", content: locale },
    ...SEO_LANGUAGES.filter(l => l !== lang).map(l => ({ property: "og:locale:alternate", content: { en: "en_US", ar: "ar_IQ", ru: "ru_RU" }[l] })),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: page.title[lang] },
    { name: "twitter:description", content: page.description[lang] },
  ] };
}
export function pageSeo(path: string, lang: Lang, origin: string) {
  const page = SEO_PAGES[path];
  if (!page) return { ...pageMeta(path, lang), links: [], scripts: [] };
  const url = new URL(localizedPath(path, lang), origin).href;
  const image = new URL("/social-preview.jpg", origin).href;
  return {
    meta: [...pageMeta(path, lang).meta,
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: page.title[lang] },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: page.title[lang] },
    ],
    links: [{ rel: "canonical", href: url },
      ...SEO_LANGUAGES.map(l => ({ rel: "alternate", hrefLang: l, href: new URL(localizedPath(path, l), origin).href })),
      { rel: "alternate", hrefLang: "x-default", href: new URL(path, origin).href },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@graph": [
        { "@type": "WebSite", "@id": origin + "/#website", url: origin + "/", name: "Mesopotamia Nights", inLanguage: SEO_LANGUAGES },
        { "@type": "WebPage", "@id": url + "#webpage", url, name: page.title[lang], description: page.description[lang], inLanguage: lang, isPartOf: { "@id": origin + "/#website" } },
      ],
    }).replace(/</g, "\u003c") }],
  };
}
