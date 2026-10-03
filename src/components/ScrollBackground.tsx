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
    [heroPink, "rgba(255, 194, 214, 0.7)", "rgba(251, 220, 203, 0.7)", "rgba(247, 238, 227, 0.7)", "rgba(239, 227, 210, 0.7)"]
  );

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-20"
        src="/bg-stock.mp4"
      />
      <motion.div
        ref={ref}
        aria-hidden="true"
        style={{ background }}
        className="fixed inset-0 -z-10 will-change-[background-color]"
      />
    </>
  );
}
