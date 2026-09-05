import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { fadeScale } from "@/lib/motion";
import { cta } from "@/lib/mock-data";

export function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
      <ScrollReveal variants={fadeScale}>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:py-20">
          <h2 className="font-heading max-w-2xl text-3xl leading-tight font-semibold text-balance md:text-4xl">
            {cta.heading}
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-primary-foreground/80">
            {cta.subhead}
          </p>
          <Magnetic className="mt-2 inline-block">
            <Button
              render={<Link href={cta.primaryCta.href} />}
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="h-11 px-7 text-[15px] font-semibold"
            >
              {cta.primaryCta.label}
            </Button>
          </Magnetic>
        </div>
      </ScrollReveal>
    </section>
  );
}
