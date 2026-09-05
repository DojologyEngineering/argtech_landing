"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface MapPinProps {
  xPct: number;
  yPct: number;
  label?: string;
  href?: string;
}

export function MapPin({ xPct, yPct, label, href }: MapPinProps) {
  const content = (
    <>
      <span className="relative flex h-3 w-3">
        <motion.span
          className="absolute inline-flex h-full w-full rounded-full bg-primary"
          animate={{ scale: [1, 2.6, 1], opacity: [0.55, 0, 0.55] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-primary ring-2 ring-card" />
      </span>
      {label && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-primary-foreground shadow-sm">
          {label}
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label ? `Open ${label} in Google Maps` : "Open in Google Maps"}
        className="group absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${xPct}%`, top: `${yPct}%` }}
      >
        <motion.span
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="block"
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${xPct}%`, top: `${yPct}%` }}
    >
      {content}
    </div>
  );
}
