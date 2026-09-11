"use client";

import { motion } from "motion/react";
import { useLanguage, useContent, type Language } from "@/lib/i18n/context";

const OPTIONS: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "km", label: "KH" },
];

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const { ui } = useContent();

  return (
    <div className="relative flex items-center rounded-full border border-border bg-muted/60 p-0.5 text-xs font-bold">
      {OPTIONS.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => setLang(opt.code)}
          aria-pressed={lang === opt.code}
          aria-label={opt.code === "en" ? ui.switchToEnglish : ui.switchToKhmer}
          className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-center transition-colors"
        >
          {lang === opt.code && (
            <motion.span
              layoutId="lang-toggle-active"
              className="absolute inset-0 -z-10 rounded-full bg-primary"
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
          <span className={lang === opt.code ? "text-primary-foreground" : "text-muted-foreground"}>
            {opt.label}
          </span>
        </button>
      ))}
    </div>
  );
}
