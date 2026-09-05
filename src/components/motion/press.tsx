"use client";

import { motion, type HTMLMotionProps } from "motion/react";

export function Press({ className, children, ...props }: HTMLMotionProps<"span">) {
  return (
    <motion.span
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={className ?? "inline-block"}
      {...props}
    >
      {children}
    </motion.span>
  );
}
