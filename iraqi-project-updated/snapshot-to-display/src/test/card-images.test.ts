import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { CARD_IMAGES, HISTORY_IMAGES } from "@/data/card-images";
import { HISTORY_TOPICS } from "@/data/history-content";
import { TOURISM_DESTINATIONS } from "@/data/tourism-content";

const credits = JSON.parse(readFileSync(resolve("public/images/cards/credits.json"), "utf8")) as { key: string; artist: string; license: string; page: string; licenseUrl?: string; source?: string }[];

describe("curated card image integrity", () => {
  it("covers every destination, history topic, dish, community and achievement", () => {
    const keys = [
      ...TOURISM_DESTINATIONS.map((d) => "tourism-" + d.id),
      ...HISTORY_TOPICS.map((t) => HISTORY_IMAGES[t.id]),
      ...["masgouf", "dolma", "kubba", "tashreeb", "rice", "samoon", "kahi", "kleicha", "baklava", "tea", "coffee"].map((s) => "food-" + s),
      ...["muslims", "christians", "yazidis", "mandaeans", "kakai", "jews", "bahai", "zoroastrians"].map((s) => "community-" + s),
      "gift-math", "gift-law", "gift-library",
    ];
    for (const key of keys) expect(key && CARD_IMAGES[key], String(key)).toBeDefined();
  });
  it("ships both local WebP sizes and an attribution record for every image", () => {
    for (const [key, image] of Object.entries(CARD_IMAGES)) {
      expect(image.alt.length, key).toBeGreaterThan(20);
      for (const src of [image.src, image.small]) {
        expect(src, key).toMatch(/^\/images\/cards\/[a-z0-9-]+\.webp$/);
        expect(existsSync(resolve("public", src.slice(1))), src).toBe(true);
        const data = readFileSync(resolve("public", src.slice(1)));
        expect(data.subarray(8, 12).toString(), src).toBe("WEBP");
      }
      const credit = credits.find((c) => c.key === key);
      expect(credit?.artist, key).toBeTruthy();
      if (credit?.source === "user-provided") {
        expect(["food-dolma", "food-masgouf", "food-tashreeb", "food-rice", "food-samoon", "food-kahi", "food-baklava", "history-akkadian", "history-babylon", "history-achievements", "history-round", "history-modern", "history-today", "history-heritage", "community-muslims", "community-christians"]).toContain(key);
        expect(credit.license).toBe("License not provided");
        continue;
      }
      expect(credit?.license, key).toMatch(/CC BY|CC0|Public domain/);
      expect(credit?.page, key).toMatch(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
    }
  });
});
