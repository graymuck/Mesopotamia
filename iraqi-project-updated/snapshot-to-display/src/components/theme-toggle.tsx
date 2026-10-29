import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { applyTheme, preferredTheme, type Theme } from "@/lib/theme";

export function ThemeToggle() {
  const { txt } = useI18n();
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const current = preferredTheme();
    applyTheme(current);
    setTheme(current);
  }, []);
  const dark = theme === "dark";
  const label = txt(dark ? "Switch to bright mode" : "Switch to dark mode");
  const toggle = () => {
    const next = dark ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
    try { localStorage.setItem("theme", next); } catch { /* Keep the current page choice. */ }
  };
  return (
    <button type="button" onClick={toggle} aria-label={label} title={label}
      className="inline-flex h-10 min-w-10 items-center justify-center gap-1.5 rounded-full border border-gold/60 px-2.5 text-sm hover:bg-lapis-foreground/10">
      {dark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
      <span className="hidden sm:inline">{txt(dark ? "Bright" : "Dark")}</span>
    </button>
  );
}
