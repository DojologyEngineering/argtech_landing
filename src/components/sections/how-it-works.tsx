"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerGroup } from "@/components/motion/stagger-group";
import { fadeUp } from "@/lib/motion";
import { useContent } from "@/lib/i18n/context";

export function HowItWorks() {
  const { howItWorks } = useContent();
  const [active, setActive] = useState(0);

  return (
    <section id="solutions" className="border-y border-border/70 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <ScrollReveal className="mb-16 flex max-w-xl flex-col gap-4">
          <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
            {howItWorks.eyebrow}
          </span>
          <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
            {howItWorks.heading}
          </h2>
        </ScrollReveal>

        <StaggerGroup
          staggerChildren={0.12}
          className="relative grid gap-10 md:grid-cols-3"
        >
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-border md:block" />
          {howItWorks.steps.map((step, i) => {
            const isActive = active === i;
            return (
              <motion.button
                type="button"
                key={step.title}
                variants={fadeUp}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                whileTap={{ scale: 0.97 }}
                className="relative flex flex-col gap-4 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    backgroundColor: isActive
                      ? "var(--accent)"
                      : "var(--primary)",
                  }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-muted font-heading text-lg font-semibold"
                  style={{
                    color: isActive
                      ? "var(--accent-foreground)"
                      : "var(--primary-foreground)",
                  }}
                >
                  {i + 1}
                  {isActive && (
                    <motion.span
                      layoutId="step-ring"
                      className="absolute -inset-1.5 rounded-full border-2 border-primary/40"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </motion.div>
                <h3
                  className="text-lg font-bold transition-colors"
                  style={{ color: isActive ? "var(--primary)" : "var(--foreground)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.button>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
