"use client";

import { ArrowUp } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic";

export function BackToTop() {
  return (
    <Magnetic strength={0.5}>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[oklch(95.8%_0.012_91.5)]/20 text-[oklch(95.8%_0.012_91.5)] transition-colors hover:border-[oklch(95.8%_0.012_91.5)]/40 hover:bg-[oklch(95.8%_0.012_91.5)]/10"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </Magnetic>
  );
}
