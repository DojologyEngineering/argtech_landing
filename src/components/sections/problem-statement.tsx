"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { useContent } from "@/lib/i18n/context";

export function ProblemStatement() {
  const { problemStatement } = useContent();
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
      <ScrollReveal className="flex flex-col items-center gap-6">
        <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
          {problemStatement.eyebrow}
        </span>
        <p className="font-heading text-4xl leading-[1.1] font-semibold text-balance text-foreground md:text-6xl lg:text-7xl">
          {problemStatement.heading}
        </p>
        <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
          {problemStatement.body}
        </p>
      </ScrollReveal>
    </section>
  );
}
