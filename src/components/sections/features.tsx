import { Gauge, Satellite, Droplets, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { YieldChart } from "@/components/motion/yield-chart";
import { HoverCard } from "@/components/motion/hover-card";
import { fadeScale } from "@/lib/motion";
import { features } from "@/lib/mock-data";

const supportingIcons = [Gauge, Satellite, Droplets];

export function Features() {
  return (
    <section id="platform" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <ScrollReveal className="mb-14 flex max-w-xl flex-col gap-4">
        <span className="text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase">
          {features.eyebrow}
        </span>
        <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
          {features.heading}
        </h2>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
        <ScrollReveal variants={fadeScale}>
          <HoverCard className="flex h-full flex-col gap-6 rounded-2xl bg-primary p-10 text-primary-foreground">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-foreground/10">
              <TrendingUp className="h-5 w-5 text-accent" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-2xl font-semibold">
                {features.featured.title}
              </h3>
              <p className="max-w-md text-[15px] leading-relaxed text-primary-foreground/80">
                {features.featured.description}
              </p>
            </div>

            <YieldChart />
          </HoverCard>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {features.items.map((item, i) => {
            const Icon = supportingIcons[i];
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <HoverCard className="flex items-start gap-4 rounded-2xl border border-border bg-card p-7">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-[17px] font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </HoverCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
