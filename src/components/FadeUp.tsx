"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

/**
 * FadeUp
 * Reusable reveal animation: fade in + 16px rise.
 * Skips animation when prefers-reduced-motion is set.
 */
export default function FadeUp({
  children,
  delay = 0,
  className,
  once = true,
}: FadeUpProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
