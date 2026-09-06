"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerGroup } from "@/components/motion/stagger-group";
import { fadeUp } from "@/lib/motion";
import { roadmap } from "@/lib/mock-data";

export function Roadmap() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <ScrollReveal className="mb-16 flex max-w-xl flex-col gap-4">
        <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
          {roadmap.eyebrow}
        </span>
        <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
          {roadmap.heading}
        </h2>
      </ScrollReveal>

      <StaggerGroup staggerChildren={0.15} className="relative flex flex-col gap-10">
        <div className="absolute top-1.5 bottom-1.5 left-1.25 w-px bg-border" />
        {roadmap.stages.map((stage) => (
          <motion.div key={stage.title} variants={fadeUp} className="relative flex gap-6">
            <div className="relative z-10 mt-1.5 flex h-3 w-3 shrink-0 items-center justify-center">
              {stage.current && (
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-primary"
                  animate={{ scale: [1, 2.4, 1], opacity: [0.5, 0, 0.5] }}
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
            </div>
            <div className="flex flex-1 flex-col gap-2 pb-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold text-foreground">{stage.title}</h3>
                {stage.current && (
                  <span className="w-fit rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-accent-foreground uppercase">
                    Current stage
                  </span>
                )}
              </div>
              <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                {stage.description}
              </p>
            </div>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  );
}
