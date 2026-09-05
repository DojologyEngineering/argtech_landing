"use client";

import { motion, type Variants } from "motion/react";
import { staggerContainer } from "@/lib/motion";

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  /** Reveal on mount (hero, above the fold) instead of on scroll into view. */
  onMount?: boolean;
}

export function StaggerGroup({
  children,
  className,
  staggerChildren = 0.08,
  delayChildren = 0,
  once = true,
  onMount = false,
}: StaggerGroupProps) {
  const variants: Variants = staggerContainer(staggerChildren, delayChildren);

  if (onMount) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3, margin: "0px 0px -100px 0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
