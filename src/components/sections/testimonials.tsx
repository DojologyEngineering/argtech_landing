"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { testimonials } from "@/lib/mock-data";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <ScrollReveal className="mb-10 flex flex-col items-center gap-4 text-center">
        <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
          From the field
        </span>
        <h2 className="font-heading text-3xl font-semibold text-balance text-foreground md:text-4xl">
          What early growers are seeing.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="flex flex-col items-center gap-6">
        <Quote className="h-8 w-8 text-primary/40" />

        <div className="relative flex min-h-[160px] w-full flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-5 text-center"
            >
              <blockquote className="font-heading max-w-xl text-2xl leading-snug font-medium text-balance text-foreground md:text-3xl">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm">
                <div className="font-semibold text-foreground">{active.name}</div>
                <div className="text-muted-foreground">{active.role}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name + i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className="flex items-center justify-center p-1"
            >
              <motion.span
                animate={{
                  width: i === index ? 20 : 6,
                  backgroundColor: i === index ? "var(--primary)" : "var(--border)",
                }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="h-1.5 rounded-full"
              />
            </button>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
