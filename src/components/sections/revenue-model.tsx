import { Handshake, Sprout } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { HoverCard } from "@/components/motion/hover-card";
import { revenueModel } from "@/lib/mock-data";

export function RevenueModel() {
  return (
    <section className="border-y border-border/70 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <ScrollReveal className="mb-14 flex max-w-xl flex-col gap-4">
          <span className="text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase">
            {revenueModel.eyebrow}
          </span>
          <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
            {revenueModel.heading}
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {revenueModel.streams.map((stream, i) => (
            <ScrollReveal key={stream.title} delay={i * 0.06}>
              <HoverCard className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6">
                <span className="w-fit rounded-full bg-muted px-2.5 py-1 text-[11px] font-bold tracking-wide text-muted-foreground uppercase">
                  {stream.phase}
                </span>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[17px] font-bold text-foreground">
                    {stream.title}
                  </h3>
                  <p className="font-heading text-lg font-semibold text-primary">
                    {stream.fee}
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-border pt-4">
                  <div className="flex items-start gap-2">
                    <Handshake className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      <span className="font-bold text-foreground">We get: </span>
                      {stream.weGet}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sprout className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      <span className="font-bold text-foreground">Farmer gets: </span>
                      {stream.farmerGets}
                    </p>
                  </div>
                </div>
              </HoverCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
