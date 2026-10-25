"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { HoverCard } from "@/components/motion/hover-card";
import { useContent } from "@/lib/i18n/context";

export function About() {
  const { about } = useContent();
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="flex flex-col gap-12 md:gap-14">
        <ScrollReveal className="flex max-w-3xl flex-col gap-6">
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
              <p
                key={i}
                className="text-[15px] leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <HoverCard className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="flex items-center gap-2 border-b border-black/5 bg-white px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-black/10" />
              <span className="h-3 w-3 rounded-full bg-black/10" />
              <span className="h-3 w-3 rounded-full bg-black/10" />
              <span className="ml-2 truncate text-xs font-medium text-neutral-600">
                ARG TECH — Admin
              </span>
            </div>
            <Image
              src="/app/dashboard1.png"
              alt="The ARG TECH admin dashboard"
              width={2880}
              height={1636}
              className="block h-auto w-full"
              sizes="(min-width: 1152px) 1100px, 92vw"
            />
          </HoverCard>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {about.values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              <motion.div
                whileHover="hover"
                initial="rest"
                className="flex h-full gap-5 border-t border-border pt-6"
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
