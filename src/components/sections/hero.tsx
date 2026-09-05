"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { StaggerGroup } from "@/components/motion/stagger-group";
import { Press } from "@/components/motion/press";
import { Magnetic } from "@/components/motion/magnetic";
import { FieldGrid } from "@/components/motion/field-grid";
import { wordVariant, fadeUp } from "@/lib/motion";
import { hero } from "@/lib/mock-data";

function AnimatedHeadline({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <StaggerGroup onMount staggerChildren={0.045} className="flex flex-col">
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="flex flex-wrap">
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              key={`${lineIndex}-${wordIndex}`}
              variants={wordVariant}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </StaggerGroup>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-[1.15fr_1fr] md:py-28">
        <div className="flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase"
          >
            <span className="h-px w-5 bg-accent-foreground/60" />
            {hero.eyebrow}
          </motion.div>

          <h1 className="font-heading text-3xl leading-tight font-light text-balance text-foreground md:text-4xl lg:text-5xl">
            <AnimatedHeadline text={hero.headline} />
          </h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="max-w-xl text-lg leading-relaxed font-medium text-muted-foreground"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.62 }}
            className="mt-2 flex flex-wrap items-center gap-7"
          >
            <Magnetic>
              <Button
                render={<Link href={hero.primaryCta.href} />}
                nativeButton={false}
                size="lg"
                className="h-11 px-7 text-[15px] font-semibold"
              >
                {hero.primaryCta.label}
              </Button>
            </Magnetic>
            <Press>
              <Link
                href={hero.secondaryCta.href}
                className="border-b border-foreground pb-0.5 text-[15px] font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                {hero.secondaryCta.label}
              </Link>
            </Press>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[420px] w-full"
        >
          <div className="absolute inset-0 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-[0_24px_48px_-24px_rgba(30,75,52,0.25)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-wide text-muted-foreground">
                {hero.fieldName.toUpperCase()}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                LIVE
              </span>
            </div>

            <FieldGrid />

            <div className="flex items-center gap-5 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-primary/70" />
                Healthy
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-accent-foreground/50" />
                Needs attention
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute top-14 -right-4 w-52 rounded-xl bg-primary p-4 text-primary-foreground shadow-[0_20px_40px_-18px_rgba(30,75,52,0.4)]"
          >
            <div className="mb-1.5 text-[11px] font-bold tracking-wide opacity-80">
              {hero.sensorReadout.zone.toUpperCase()}
            </div>
            <div className="font-heading text-2xl font-semibold">
              {hero.sensorReadout.value}
            </div>
            <div className="mt-1 text-xs opacity-75">
              {hero.sensorReadout.note}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
