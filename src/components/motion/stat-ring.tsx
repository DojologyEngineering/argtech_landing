"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CountUp } from "@/components/motion/count-up";

interface StatRingProps {
  value: number;
  decimals?: number;
  suffix?: string;
  size?: number;
}

export function StatRing({ value, decimals = 1, suffix = "%", size = 100 }: StatRingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = value / 100;

  return (
    <div ref={ref} className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          style={{ stroke: "var(--primary-foreground)", opacity: 0.15 }}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: inView ? circumference * (1 - progress) : circumference,
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ stroke: "var(--accent)" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-heading text-base font-semibold text-primary-foreground">
          <CountUp value={value} decimals={decimals} suffix={suffix} />
        </span>
      </div>
    </div>
  );
}
