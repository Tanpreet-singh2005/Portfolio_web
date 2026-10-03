"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [heroPink, setHeroPink] = useState("#FF3380");

  useEffect(() => {
    const handleSample = () => {
      const color = getComputedStyle(document.documentElement).getPropertyValue("--hero-pink").trim();
      if (color) setHeroPink(color);
    };
    handleSample(); // Try immediately
    window.addEventListener("hero-pink-sampled", handleSample);
    return () => window.removeEventListener("hero-pink-sampled", handleSample);
  }, []);

  const background = useTransform(
    scrollYProgress,
    [0, 0.08, 0.18, 0.30, 0.45],
    [heroPink, "#FFC2D6", "#FBDCCB", "#F7EEE3", "#EFE3D2"]
  );

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{ background }}
      className="fixed inset-0 -z-10 will-change-[background-color]"
    />
  );
}
