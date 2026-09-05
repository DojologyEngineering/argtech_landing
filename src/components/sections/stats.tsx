"use client";

import { motion } from "motion/react";
import { CountUp } from "@/components/motion/count-up";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { stats } from "@/lib/mock-data";

export function Stats() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-16 px-6 sm:justify-between">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1} className="min-w-50">
            <motion.div
              whileHover="hover"
              className="flex cursor-default flex-col"
            >
              <motion.div
                variants={{
                  hover: { scale: 1.08, color: "var(--accent)" },
                }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-fit font-heading text-4xl font-semibold text-primary-foreground md:text-5xl"
              >
                <CountUp value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="mt-2 max-w-55 text-sm font-semibold text-primary-foreground/80">
                {stat.label}
              </p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
