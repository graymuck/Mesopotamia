import { describe, expect, it } from "vitest";
import { arabicText } from "@/lib/ar";
import { russianText } from "@/lib/ru";
import { LANGUAGE_OPTIONS, languageDirection, SUPPORTED_LANGUAGES } from "@/lib/i18n";

describe("translations", () => {
  it("offers English, Arabic and Russian, with Arabic right-to-left only", () => {
    expect(SUPPORTED_LANGUAGES).toEqual(["en", "ar", "ru"]);
    expect(LANGUAGE_OPTIONS.map((o) => o.code)).toEqual(["en", "ar", "ru"]);
    expect(languageDirection("ar")).toBe("rtl");
    expect(languageDirection("en")).toBe("ltr");
    expect(languageDirection("ru")).toBe("ltr");
  });

  it("keeps the Arabic and Russian page-text dictionaries in step", () => {
    const missingInArabic = Object.keys(russianText).filter((k) => !(k in arabicText));
    const missingInRussian = Object.keys(arabicText).filter((k) => !(k in russianText));
    expect({ missingInArabic, missingInRussian }).toEqual({ missingInArabic: [], missingInRussian: [] });
  });

  it("has no empty translations", () => {
    for (const [k, v] of [...Object.entries(arabicText), ...Object.entries(russianText)]) {
      expect(v.trim(), k).not.toBe("");
    }
  });
});
