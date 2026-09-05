import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PhoneMockup } from "@/components/motion/phone-mockup";
import { HoverCard } from "@/components/motion/hover-card";
import { appShowcase } from "@/lib/mock-data";

const gallery = [
  { src: "/app_3d.png", alt: "ARG TECH app, 3D render" },
  { src: "/app_hand.png", alt: "ARG TECH app held in hand" },
  { src: "/app.png", alt: "ARG TECH app screen" },
];

export function AppShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <ScrollReveal className="mb-14 flex max-w-xl flex-col gap-4">
        <span className="text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase">
          {appShowcase.eyebrow}
        </span>
        <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
          {appShowcase.heading}
        </h2>
        <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
          {appShowcase.body}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[minmax(280px,1fr)_minmax(280px,1fr)]">
        <ScrollReveal className="md:col-span-1 md:row-span-2">
          <HoverCard className="flex h-full items-center justify-center rounded-2xl border border-border bg-card p-6">
            <PhoneMockup />
          </HoverCard>
        </ScrollReveal>

        <ScrollReveal delay={0.05} className="md:col-span-2">
          <HoverCard className="relative h-full min-h-70 overflow-hidden rounded-2xl border border-border">
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 66vw, 100vw"
            />
          </HoverCard>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <HoverCard className="relative h-full min-h-70 overflow-hidden rounded-2xl border border-border">
            <Image
              src={gallery[1].src}
              alt={gallery[1].alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </HoverCard>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <HoverCard className="relative h-full min-h-70 overflow-hidden rounded-2xl border border-border">
            <Image
              src={gallery[2].src}
              alt={gallery[2].alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </HoverCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
