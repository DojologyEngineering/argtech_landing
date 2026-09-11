"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { MapPin } from "@/components/motion/map-pin";
import { HoverCard } from "@/components/motion/hover-card";
import { generateWorldMap } from "@/lib/world-map";
import { useContent } from "@/lib/i18n/context";

export function GlobalReach() {
  const { globalReach } = useContent();
  const { svg, pin, label, href } = generateWorldMap(globalReach.hqLabel);

  return (
    <section id="locations" className="border-y border-border/70 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <ScrollReveal className="flex max-w-xl flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
              {globalReach.eyebrow}
            </span>
            <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
              {globalReach.heading}
            </h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {globalReach.body}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <HoverCard className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div
                className="relative w-full text-primary/15"
                style={{ aspectRatio: "119 / 70" }}
              >
                <div
                  className="absolute inset-0"
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
                {pin && (
                  <MapPin xPct={pin.xPct} yPct={pin.yPct} label={label} href={href} />
                )}
              </div>
            </HoverCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
