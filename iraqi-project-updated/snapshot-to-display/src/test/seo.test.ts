import { describe, expect, it } from "vitest";
import { pageMeta, pageSeo, languageFrom, localizedPath, siteOrigin } from "@/lib/seo";
import { indexingResponse, sitemap } from "@/lib/seo-indexing";
import { SEO_PAGES } from "@/data/seo-content";

describe("search indexing and multilingual metadata", () => {
  it("publishes a self-canonical and reciprocal language alternatives for every page", () => {
    for (const path of Object.keys(SEO_PAGES)) for (const lang of ["en", "ar", "ru"] as const) {
      const head = pageSeo(path, lang, "https://culture.example");
      expect(head.links.find(l => l.rel === "canonical")?.href).toBe("https://culture.example" + localizedPath(path, lang));
      expect(head.links.filter(l => l.rel === "alternate")).toHaveLength(4);
      expect(head.meta.find(m => "title" in m)?.title).toBe(SEO_PAGES[path]!.title[lang]);
      expect(head.meta.find(m => m.name === "description")?.content).toBe(SEO_PAGES[path]!.description[lang]);
      expect(head.meta.find(m => m.property === "og:image")?.content).toBe("https://culture.example/social-preview.jpg");
      const schema = JSON.parse(head.scripts[0]!.children);
      expect(schema["@graph"][1].inLanguage).toBe(lang);
      expect(schema["@graph"].some((s: { "@type": string }) => s["@type"] === "Event")).toBe(false);
    }
  });
  it("indexes all 21 localized pages in valid XML without inventing modification dates", () => {
    const document = new DOMParser().parseFromString(sitemap("https://culture.example"), "application/xml");
    expect(document.querySelector("parsererror")).toBeNull();
    const locations = [...document.getElementsByTagName("loc")].map(e => e.textContent);
    expect(locations).toHaveLength(21);
    expect(new Set(locations).size).toBe(21);
    expect(document.getElementsByTagName("lastmod")).toHaveLength(0);
    expect(locations).toContain("https://culture.example/event");
    expect(locations).toContain("https://culture.example/event?lang=en");
  });
  it("serves robots with an absolute sitemap and supports HEAD", async () => {
    const response = indexingResponse(new Request("https://culture.example/robots.txt"))!;
    expect(response.status).toBe(200);
    expect(await response.text()).toContain("Sitemap: https://culture.example/sitemap.xml");
    expect(await indexingResponse(new Request("https://culture.example/sitemap.xml", { method: "HEAD" }))!.text()).toBe("");
    expect(indexingResponse(new Request("https://culture.example/food"))).toBeUndefined();
  });
  it("uses the deployment origin or an explicitly configured canonical origin", () => {
    expect(siteOrigin("https://culture.example/event?lang=ar")).toBe("https://culture.example");
    expect(siteOrigin("https://preview.example/", "https://culture.example/")).toBe("https://culture.example");
    expect(() => siteOrigin("javascript:alert(1)")).toThrow();
    expect(languageFrom("invalid")).toBe("ru");
    expect(languageFrom(undefined)).toBe("ru");
    expect(languageFrom("en")).toBe("en");
    expect(localizedPath("/", "ru")).toBe("/");
    expect(localizedPath("/", "en")).toBe("/?lang=en");
    expect(pageMeta("/not-a-page", "en").meta).toContainEqual({ name: "robots", content: "noindex, follow" });
  });
  it("uses festival-specific event copy without assuming a year", () => {
    for (const lang of ["en", "ar", "ru"] as const) {
      const page = SEO_PAGES["/event"]!;
      expect(page.title[lang]).not.toMatch(/20[0-9]{2}/);
      expect(page.description[lang]).not.toMatch(/20[0-9]{2}/);
    }
    expect(SEO_PAGES["/event"]!.description.en).toContain("Exhibitions open");
  });
});
