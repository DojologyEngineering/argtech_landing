import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function ProblemStatement() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
      <ScrollReveal className="flex flex-col items-center gap-6">
        <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
          The problem
        </span>
        <p className="font-heading text-4xl leading-[1.1] font-semibold text-balance text-foreground md:text-6xl lg:text-7xl">
          Every sale is a guess.
        </p>
        <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
          Cambodia&apos;s 1.85 million smallholder farmers negotiate blind —
          with zero verifiable cost data and no way to know if today&apos;s
          offer is a profit or a loss.
        </p>
      </ScrollReveal>
    </section>
  );
}
