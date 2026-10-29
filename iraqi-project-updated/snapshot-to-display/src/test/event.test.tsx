import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Route } from "@/routes/event";
import { I18nProvider, useI18n } from "@/lib/i18n";

const EventPage = Route.options.component!;
function LanguageControls() {
  const { setLang } = useI18n();
  return <>{(["en", "ar", "ru"] as const).map((lang) => <button key={lang} onClick={() => setLang(lang)}>{lang}</button>)}</>;
}
const cases = [
  { lang: "en", title: "Festival of National Cultures of the Peoples of the Don Region", values: ["November 5", "12:00 PM — Exhibitions open", "DSTU Congress Hall, second floor", "Gagarin Square, 1, Rostov-on-Don, Russia"], labels: ["Date", "Time", "Venue", "Address"] },
  { lang: "ar", title: "مهرجان الثقافات الوطنية لشعوب منطقة الدون", values: ["5 نوفمبر", "الساعة 12:00 ظهرًا — بدء المعارض", "قاعة المؤتمرات بجامعة دون الحكومية التقنية (DSTU)، الطابق الثاني", "ساحة غاغارين، 1، روستوف على الدون، روسيا"], labels: ["التاريخ", "الوقت", "المكان", "العنوان"] },
  { lang: "ru", title: "Фестиваль национальных культур народов Дона", values: ["5 ноября", "12:00 — начало работы выставок", "Конгресс-холл ДГТУ, 2-й этаж", "площадь Гагарина, 1, Ростов-на-Дону, Россия"], labels: ["Дата", "Время", "Место проведения", "Адрес"] },
];

describe("Don region festival", () => {
  it.each(cases)("renders confirmed details and labels in $lang without assuming a year", ({ lang, title, values, labels }) => {
    window.localStorage.setItem("lang", lang);
    const { unmount } = render(<I18nProvider><EventPage /></I18nProvider>);
    const card = screen.getByRole("article", { name: title });
    expect(card).toHaveAttribute("lang", lang);
    expect(card).toHaveAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    for (const text of [...values, ...labels]) expect(within(card).getByText(text, { exact: true })).toBeInTheDocument();
    expect(card.textContent).not.toMatch(/20[0-9]{2}|upcoming|past event|ticket|register/i);
    if (lang !== "ru") expect(card.textContent).not.toMatch(/[А-Яа-яЁё]/);
    expect(within(card).queryByRole("link")).not.toBeInTheDocument();
    unmount();
    window.localStorage.clear();
  });

  it("updates the existing card when the shared language changes and keeps the updated FAQ", () => {
    window.localStorage.clear();
    const { unmount } = render(<I18nProvider><LanguageControls /><EventPage /></I18nProvider>);
    expect(screen.queryByText("[16:00]")).not.toBeInTheDocument();
    expect(screen.getByText("No, admission is free.")).toBeInTheDocument();
    for (const item of [...cases].reverse()) {
      fireEvent.click(screen.getByRole("button", { name: item.lang }));
      const card = screen.getByRole("article", { name: item.title });
      expect(within(card).getByText(item.values[1]!, { exact: true })).toBeInTheDocument();
      expect(document.documentElement.dir).toBe(item.lang === "ar" ? "rtl" : "ltr");
      expect(window.localStorage.getItem("lang")).toBe(item.lang);
    }
    unmount();
    window.localStorage.clear();
  });
});
