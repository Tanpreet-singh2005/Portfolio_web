"use client";

import { useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollBackground() {
  const { scrollYProgress } = useScroll();
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax glow movements with scroll
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "85%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["5%", "95%"]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], ["20%", "70%"]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#070A12]">
      {/* Dynamic Cursor Spotlight (Follows mouse across screen) */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-all duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%)",
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        }}
      />

      {/* Futuristic Blueprint Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: `
            radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Cyber Subtle Hex / Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radiant Nebula Orb 1 - Cyan / Sky (Top Left) */}
      <motion.div
        style={{ top: orb1Y }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-[15%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full blur-[150px] bg-gradient-to-tr from-cyan-500/30 via-sky-500/20 to-blue-600/10 -z-10"
      />

      {/* Radiant Nebula Orb 2 - Electric Indigo / Violet (Right Side) */}
      <motion.div
        style={{ top: orb2Y }}
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-[15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-[160px] bg-gradient-to-bl from-indigo-500/25 via-violet-600/15 to-purple-800/10 -z-10"
      />

      {/* Radiant Nebula Orb 3 - Emerald / Teal Hint (Center Bottom) */}
      <motion.div
        style={{ top: orb3Y }}
        animate={{
          scale: [0.95, 1.1, 0.95],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[20%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full blur-[160px] bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-transparent -z-10"
      />

      {/* Top Beam of Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[350px] bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl" />

      {/* Vignette Edge Shading */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(0,0,0,0)_50%,rgba(7,10,18,0.85)_100%)]" />
    </div>
  );
}
