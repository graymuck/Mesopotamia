import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Route } from "@/routes/history";
import { HISTORY_TOPICS } from "@/data/history-content";
import { I18nProvider } from "@/lib/i18n";

const History = Route.options.component!;

describe("History page", () => {
  it("includes all 15 source topics with complete articles in each language", () => {
    expect(HISTORY_TOPICS).toHaveLength(15);
    const paragraphCount = (text: string) => text.split(/\r?\n\s*\r?\n/).length;
    expect(
      HISTORY_TOPICS.every(
        ({ summary, fullText }) =>
          summary.en.length > 80 &&
          fullText.ar.length > 100 &&
          fullText.en.length > 100 &&
          fullText.ru.length > 100 &&
          paragraphCount(fullText.ar) === paragraphCount(fullText.en) &&
          paragraphCount(fullText.ar) === paragraphCount(fullText.ru),
      ),
    ).toBe(true);
    expect(HISTORY_TOPICS[2]?.fullText.ar).toContain(
      "نحو الألف الرابع قبل الميلاد تحوّلت التجمّعات الزراعية الصغيرة",
    );
    expect(HISTORY_TOPICS[13]?.fullText.ar).toContain("حربٌ طويلةٌ ومدمّرةٌ مع إيران");
  });

  it("shows concise summaries and expands/collapses the complete Arabic article in RTL", () => {
    window.localStorage.setItem("lang", "ar");
    render(
      <I18nProvider>
        <History />
      </I18nProvider>,
    );

    const readMoreButtons = screen.getAllByRole("button", { name: /اقرأ المزيد/ });
    expect(readMoreButtons).toHaveLength(15);
    expect(screen.getByText(/في جنوب العراق، نحو الألف الرابع قبل الميلاد/)).toBeInTheDocument();
    expect(
      screen.queryByText(/Sumerian settlements in southern Iraq became cities/),
    ).not.toBeInTheDocument();

    fireEvent.click(readMoreButtons[2]!);
    expect(readMoreButtons[2]).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("ميلاد المدينة", { selector: "h4" })).toBeInTheDocument();
    expect(screen.getByText(/بلغ سكانها في أوجها نحو خمسين ألف نسمة/)).toBeInTheDocument();
    expect(screen.getByLabelText("الفصل الثاني: فجر الحضارة — سومر")).toHaveAttribute("lang", "ar");
    expect(screen.getByLabelText("الفصل الثاني: فجر الحضارة — سومر")).toHaveAttribute("dir", "rtl");

    fireEvent.click(readMoreButtons[2]!);
    expect(readMoreButtons[2]).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("ميلاد المدينة", { selector: "h4" })).not.toBeInTheDocument();
    window.localStorage.clear();
  });

  it("renders the full article in English and Russian when those languages are selected", async () => {
    for (const [language, title, note] of [
      [
        "en",
        "Sumer: the dawn of civilization",
        "Machine translation; editorial review is recommended.",
      ],
      ["ru", "Шумер: заря цивилизации", "Машинный перевод; рекомендуется редакторская проверка."],
    ]) {
      window.localStorage.setItem("lang", language!);
      const { unmount } = render(
        <I18nProvider>
          <History />
        </I18nProvider>,
      );
      const button = screen.getAllByRole("button", {
        name: language === "ru" ? /Читать далее/ : /Read more/i,
      })[2]!;
      fireEvent.click(button);
      const article = await screen.findByLabelText(title!);
      expect(article).toHaveAttribute("lang", language);
      expect(article).toHaveAttribute("dir", "ltr");
      expect(article.textContent?.length).toBeGreaterThan(2000);
      expect(article).toHaveTextContent(note!);
      unmount();
    }
    window.localStorage.clear();
  });

  it("localizes disclosure labels in Arabic", () => {
    window.localStorage.setItem("lang", "ar");
    render(
      <I18nProvider>
        <History />
      </I18nProvider>,
    );
    expect(screen.getAllByRole("button", { name: /اقرأ المزيد/ })).toHaveLength(15);
    window.localStorage.clear();
  });
});
