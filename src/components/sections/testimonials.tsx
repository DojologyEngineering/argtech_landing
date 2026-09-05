"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { testimonials } from "@/lib/mock-data";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <ScrollReveal className="mb-14 flex max-w-xl flex-col gap-4">
        <span className="text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase">
          From the field
        </span>
        <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
          What early growers are seeing.
        </h2>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <motion.figure
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98, y: -1 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-8"
            >
              <blockquote className="font-heading text-xl leading-snug font-medium text-balance text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
