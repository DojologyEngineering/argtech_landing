"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const bars = [
  { week: "Batch 1", height: 30, value: "61%" },
  { week: "Batch 2", height: 42, value: "64%" },
  { week: "Batch 3", height: 38, value: "63%" },
  { week: "Batch 4", height: 55, value: "70%" },
  { week: "Batch 5", height: 48, value: "67%" },
  { week: "Batch 6", height: 64, value: "76%" },
  { week: "Batch 7", height: 58, value: "73%" },
  { week: "Batch 8", height: 72, value: "81%" },
  { week: "Batch 9", height: 66, value: "78%" },
  { week: "Batch 10", height: 84, value: "89%" },
];

export function YieldChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      ref={ref}
      className="mt-auto flex h-40 items-end gap-2 rounded-lg bg-primary-foreground/[0.06] p-5"
    >
      {bars.map((bar, i) => (
        <div
          key={bar.week}
          className="relative flex h-full w-full items-end"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setHovered(i)}
        >
          <AnimatePresence>
            {hovered === i && (
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-primary-foreground px-2 py-1 text-[10px] font-bold whitespace-nowrap text-primary shadow-sm"
              >
                {bar.week} · {bar.value}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: inView ? `${bar.height}%` : 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scaleX: 1.15 }}
            style={{ opacity: 0.35 + (i / bars.length) * 0.65 }}
            className="w-full origin-bottom rounded-t-sm bg-primary-foreground"
          />
        </div>
      ))}
    </div>
  );
}
