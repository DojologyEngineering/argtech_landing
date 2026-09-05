"use client";

import { motion } from "motion/react";

interface HamburgerIconProps {
  open: boolean;
  className?: string;
}

const GAP = 6; // px between line centers

export function HamburgerIcon({ open, className }: HamburgerIconProps) {
  return (
    <span className={className}>
      <motion.span
        className="block h-0.5 w-5 rounded-full bg-current"
        animate={open ? { rotate: 45, y: GAP } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="mt-1.5 block h-0.5 w-5 rounded-full bg-current"
        animate={{ opacity: open ? 0 : 1, scale: open ? 0.4 : 1 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="mt-1.5 block h-0.5 w-5 rounded-full bg-current"
        animate={open ? { rotate: -45, y: -GAP } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </span>
  );
}
