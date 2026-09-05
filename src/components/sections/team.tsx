import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { HoverCard } from "@/components/motion/hover-card";
import { team } from "@/lib/mock-data";

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <ScrollReveal className="mb-14 flex max-w-xl flex-col gap-4">
        <span className="text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase">
          {team.eyebrow}
        </span>
        <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
          {team.heading}
        </h2>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.members.map((member, i) => (
          <ScrollReveal key={member.name} delay={i * 0.08}>
            <HoverCard className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-border">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </div>
            </HoverCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
