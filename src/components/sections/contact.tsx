"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Mail, Phone, Send } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { HoverCard } from "@/components/motion/hover-card";
import { ContactForm } from "@/components/contact-form";
import { useContent } from "@/lib/i18n/context";

const icons = { mail: Mail, phone: Phone, telegram: Send };

export function Contact() {
  const { contact } = useContent();
  return (
    <section id="contact-info" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <ScrollReveal className="h-full">
          <ContactForm />
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          <ScrollReveal delay={0.05}>
            <HoverCard className="flex flex-col gap-3 rounded-2xl bg-primary p-6 text-primary-foreground md:p-7">
              <span className="text-xs font-bold tracking-[0.14em] text-accent uppercase">
                {contact.eyebrow}
              </span>
              <h2 className="font-heading text-2xl leading-tight font-semibold text-balance">
                {contact.heading}
              </h2>
              <p className="text-sm leading-relaxed text-primary-foreground/80">
                {contact.body}
              </p>
            </HoverCard>
          </ScrollReveal>

          {contact.methods.map((method, i) => {
            const Icon = icons[method.icon as keyof typeof icons];
            const isPending = method.href === "#";
            const content = (
              <>
                <motion.div
                  whileHover={isPending ? undefined : { rotate: -8, scale: 1.08 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted"
                >
                  <Icon className="h-5 w-5 text-primary" />
                </motion.div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                    {method.label}
                  </span>
                  <span
                    className={
                      isPending
                        ? "text-[15px] font-semibold text-muted-foreground"
                        : "text-[15px] font-semibold text-foreground"
                    }
                  >
                    {method.value}
                  </span>
                </div>
              </>
            );
            return (
              <ScrollReveal key={method.label} delay={0.1 + i * 0.06}>
                <HoverCard
                  className={
                    isPending
                      ? "min-h-20 rounded-2xl border border-border bg-card"
                      : "group min-h-20 rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
                  }
                >
                  {isPending ? (
                    <div className="flex h-full items-center gap-4 p-5">{content}</div>
                  ) : (
                    <Link
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex h-full items-center gap-4 p-5"
                    >
                      {content}
                    </Link>
                  )}
                </HoverCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
