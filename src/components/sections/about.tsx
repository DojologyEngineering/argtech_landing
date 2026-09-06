"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { HoverCard } from "@/components/motion/hover-card";
import { about } from "@/lib/mock-data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid gap-14 md:grid-cols-[1fr_1fr]">
        <ScrollReveal className="flex flex-col gap-6">
          <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
            {about.eyebrow}
          </span>
          <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
            {about.heading}
          </h2>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
            {about.recognition}
          </span>
          <div className="flex flex-col gap-4">
            {about.body.map((paragraph, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          <ScrollReveal delay={0.05}>
            <HoverCard className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/app/dashboard1.png"
                alt="The ARG TECH dashboard"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 90vw"
              />
            </HoverCard>
          </ScrollReveal>

          {about.values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              <motion.div
                whileHover="hover"
                initial="rest"
                className="flex gap-5 border-t border-border pt-6"
              >
                <motion.span
                  variants={{
                    rest: { color: "var(--primary)", x: 0 },
                    hover: { color: "var(--accent)", x: 2 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="font-heading text-lg"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <motion.div
                  variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-1.5"
                >
                  <h3 className="text-[17px] font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
