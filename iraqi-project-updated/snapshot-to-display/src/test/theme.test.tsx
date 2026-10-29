import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { I18nProvider } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";
import { preferredTheme } from "@/lib/theme";

beforeEach(() => { localStorage.clear(); document.documentElement.classList.remove("dark"); });
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); localStorage.clear(); document.documentElement.classList.remove("dark"); });
const renderToggle = () => render(<I18nProvider><ThemeToggle /></I18nProvider>);

describe("Dark/Bright theme choice", () => {
  it("lets a saved bright choice override a dark device setting", () => {
    vi.stubGlobal("matchMedia", () => ({ matches: true }));
    localStorage.setItem("theme", "light");
    renderToggle();
    expect(document.documentElement).not.toHaveClass("dark");
    expect(screen.getByRole("button", { name: "Switch to dark mode" })).toBeInTheDocument();
  });
  it("toggles both ways and preserves the chosen theme on remount", () => {
    localStorage.setItem("theme", "light");
    const first = renderToggle();
    fireEvent.click(screen.getByRole("button", { name: "Switch to dark mode" }));
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    first.unmount(); renderToggle();
    fireEvent.click(screen.getByRole("button", { name: "Switch to bright mode" }));
    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("light");
  });
  it("uses the device preference if storage is unavailable and still allows switching", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("Blocked"); });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("Blocked"); });
    vi.stubGlobal("matchMedia", () => ({ matches: true }));
    expect(preferredTheme()).toBe("dark");
    renderToggle();
    fireEvent.click(screen.getByRole("button", { name: "Switch to bright mode" }));
    expect(document.documentElement).not.toHaveClass("dark");
  });
  it.each([["ar", "التبديل إلى الوضع الداكن"], ["ru", "Включить тёмный режим"]])("localizes the accessible control in %s", (lang, label) => {
    localStorage.setItem("lang", lang!); localStorage.setItem("theme", "light");
    renderToggle();
    expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
  });
});
