import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { HoverCard } from "@/components/motion/hover-card";
import { Press } from "@/components/motion/press";
import { team } from "@/lib/mock-data";

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <ScrollReveal className="mb-14 flex max-w-xl flex-col gap-4">
        <span className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
          {team.eyebrow}
        </span>
        <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-foreground md:text-4xl">
          {team.heading}
        </h2>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.members.map((member, i) => (
          <ScrollReveal key={member.name} delay={i * 0.08}>
            <HoverCard className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(20%_0.03_154.2)]/95 via-[oklch(20%_0.03_154.2)]/10 to-transparent" />

                <Press className="absolute top-4 right-4">
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(97%_0.01_90)]/15 text-[oklch(97%_0.01_90)] backdrop-blur-sm transition-colors hover:bg-[oklch(97%_0.01_90)]/25"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </Link>
                </Press>

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-5">
                  <h3 className="font-heading text-xl font-semibold text-[oklch(97%_0.01_90)]">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[oklch(87.7%_0.189_129.4)]">
                    {member.role}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {member.title}
                </p>
              </div>
            </HoverCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
