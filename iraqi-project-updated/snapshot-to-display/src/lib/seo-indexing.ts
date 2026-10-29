import { SEO_PAGES } from "@/data/seo-content";
import { localizedPath, SEO_LANGUAGES, siteOrigin } from "./seo";
const xml = (s: string) => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[c]!));
export function sitemap(origin: string) {
  const entries = Object.keys(SEO_PAGES).flatMap(path => SEO_LANGUAGES.map(lang => {
    const alternates = SEO_LANGUAGES.map(l => '<xhtml:link rel="alternate" hreflang="' + l + '" href="' + xml(new URL(localizedPath(path, l), origin).href) + '"/>').join("");
    return '<url><loc>' + xml(new URL(localizedPath(path, lang), origin).href) + '</loc>' + alternates + '<xhtml:link rel="alternate" hreflang="x-default" href="' + xml(new URL(path, origin).href) + '"/></url>';
  }));
  return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' + entries.join("") + '</urlset>';
}
export function indexingResponse(request: Request, configuredOrigin?: string) {
  const path = new URL(request.url).pathname;
  if (!["/sitemap.xml", "/robots.txt"].includes(path)) return undefined;
  if (!["GET", "HEAD"].includes(request.method)) return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
  const origin = siteOrigin(request.url, configuredOrigin);
  const body = path === "/sitemap.xml" ? sitemap(origin) : "User-agent: *\nAllow: /\n\nSitemap: " + origin + "/sitemap.xml\n";
  return new Response(request.method === "HEAD" ? null : body, { headers: { "Content-Type": path === "/sitemap.xml" ? "application/xml; charset=utf-8" : "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
