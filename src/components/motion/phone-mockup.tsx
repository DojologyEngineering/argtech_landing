"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const screens = [
  { src: "/screens/dashboard.png", label: "Dashboard" },
  { src: "/screens/purchase.png", label: "Purchase orders" },
  { src: "/screens/famer_profile.png", label: "Farmer profile" },
  { src: "/screens/crop_cycle.png", label: "Crop cycles" },
  { src: "/screens/crop_calendar.png", label: "Crop calendar" },
];

interface PhoneMockupProps {
  intervalMs?: number;
}

export function PhoneMockup({ intervalMs = 3200 }: PhoneMockupProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % screens.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative h-[600px] w-[292px] rounded-[2.75rem] bg-neutral-950 p-3 shadow-[0_40px_80px_-32px_rgba(0,0,0,0.35)]">
        <div className="absolute top-3 left-1/2 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-neutral-950" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-background">
          <motion.div
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full"
          >
            {screens.map((screen) => (
              <div key={screen.src} className="relative h-full w-full shrink-0">
                <Image
                  src={screen.src}
                  alt={screen.label}
                  fill
                  className="object-cover"
                  sizes="292px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {screens.map((screen, i) => (
          <button
            key={screen.label}
            type="button"
            aria-label={`Show ${screen.label}`}
            onClick={() => setIndex(i)}
            className="flex items-center justify-center p-1"
          >
            <motion.span
              animate={{
                width: i === index ? 20 : 6,
                backgroundColor: i === index ? "var(--primary)" : "var(--border)",
              }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="h-1.5 rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
