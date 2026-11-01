"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  style?: React.CSSProperties;
}

/**
 * FadeUp
 * Lightweight reveal animation: subtle fade + 10px translate.
 * Zero 3D transforms, hardware-accelerated, instant 60/120fps.
 */
export default function FadeUp({
  children,
  delay = 0,
  className,
  once = true,
  style,
}: FadeUpProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={shouldReduce ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration: 0.35,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
