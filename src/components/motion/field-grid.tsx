"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const pattern = [
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
];

const tiles = pattern.map((healthy, i) => ({
  healthy: Boolean(healthy),
  zone: i + 1,
  margin: healthy ? 4 + ((i * 3) % 14) : -(2 + ((i * 2) % 8)),
}));

export function FieldGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid flex-1 grid-cols-6 grid-rows-4 gap-1.5">
      {tiles.map((tile, i) => (
        <div key={i} className="relative">
          <AnimatePresence>
            {hovered === i && (
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 rounded-md bg-foreground px-2 py-1 text-[10px] font-bold whitespace-nowrap text-background shadow-sm"
              >
                Zone {tile.zone} · {tile.margin > 0 ? "+" : ""}
                {tile.margin}% vs. break-even
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            onClick={() => setHovered(i)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.15 }}
            transition={{ duration: 0.15 }}
            className={
              tile.healthy
                ? "h-full w-full rounded bg-primary/70"
                : "h-full w-full rounded bg-accent-foreground/50"
            }
          />
        </div>
      ))}
    </div>
  );
}
