import { describe, expect, it } from "vitest";
import { TOURISM_CATEGORIES, TOURISM_DESTINATIONS } from "@/data/tourism-content";
import { TOURISM_TRANSLATIONS } from "@/data/tourism-translations";
import { TOURISM_ART, TOURISM_TONE, TOURISM_UNESCO } from "@/data/tourism-art";

describe("tourism section", () => {
  it("has unique destination ids and a known category for each", () => {
    const ids = TOURISM_DESTINATIONS.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const d of TOURISM_DESTINATIONS) expect(TOURISM_CATEGORIES, d.id).toContain(d.category);
  });

  it("translates every destination into Arabic and Russian", () => {
    for (const lang of ["ar", "ru"] as const) {
      for (const d of TOURISM_DESTINATIONS) {
        const t = TOURISM_TRANSLATIONS[lang][d.id];
        expect(t, `${lang}:${d.id}`).toBeDefined();
        expect(t!.name.trim(), `${lang}:${d.id} name`).not.toBe("");
        expect(t!.region.trim(), `${lang}:${d.id} region`).not.toBe("");
        expect(t!.description.trim(), `${lang}:${d.id} description`).not.toBe("");
      }
    }
  });

  it("gives every destination an illustration and every theme a colour", () => {
    for (const d of TOURISM_DESTINATIONS) expect(TOURISM_ART[d.id], d.id).toBeDefined();
    for (const c of TOURISM_CATEGORIES) expect(TOURISM_TONE[c], c).toBeDefined();
  });

  it("only flags real destinations as UNESCO sites", () => {
    const ids = new Set(TOURISM_DESTINATIONS.map((d) => d.id));
    for (const id of TOURISM_UNESCO) expect(ids.has(id), id).toBe(true);
  });
});
