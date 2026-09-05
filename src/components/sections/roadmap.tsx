"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerGroup } from "@/components/motion/stagger-group";
import { fadeUp } from "@/lib/motion";
import { roadmap } from "@/lib/mock-data";

export function Roadmap() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <ScrollReveal className="mb-16 flex max-w-xl flex-col gap-4">
        <span className="text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase">
          {roadmap.eyebrow}
        </span>
        <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
          {roadmap.heading}
        </h2>
      </ScrollReveal>

      <StaggerGroup staggerChildren={0.12} className="relative grid gap-10 md:grid-cols-4">
        <div className="absolute top-4 right-0 left-0 hidden h-px bg-border md:block" />
        {roadmap.stages.map((stage, i) => (
          <motion.div key={stage.title} variants={fadeUp} className="relative flex flex-col gap-3">
            <div className="relative z-10 flex items-center gap-2">
              <span
                className={
                  stage.current
                    ? "relative flex h-3 w-3 items-center justify-center"
                    : "flex h-3 w-3 items-center justify-center"
                }
              >
                {stage.current && (
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-primary"
                    animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <span
                  className={
                    stage.current
                      ? "relative h-3 w-3 rounded-full bg-primary ring-4 ring-background"
                      : "relative h-3 w-3 rounded-full bg-border ring-4 ring-background"
                  }
                />
              </span>
              {stage.current && (
                <span className="text-[11px] font-bold tracking-wide text-primary uppercase">
                  Current stage
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-foreground">{stage.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {stage.description}
            </p>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  );
}
