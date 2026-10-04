"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/content";
import { ArrowDownRegular, DocumentRegular, ArrowRightRegular } from "@fluentui/react-icons";

// Config
const FRAMES = 120;
const P_UP = 15;   // Frame index for looking UP
const P_DOWN = 105; // Frame index for looking DOWN
const DEAD_ZONE_PX = 90;
const LERP_FACTOR = 0.15;
const IDLE_TIMEOUT_MS = 2000;

function padFrame(n: number) {
  return String(Math.round(n)).padStart(3, "0");
}

function getFramePath(side: string, frame: number) {
  return `/frames/${side}/frame_${padFrame(frame)}.webp`;
}

interface HeadTrackerProps {
  debug?: boolean;
}

export function HeadTracker({ debug = false }: HeadTrackerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const state = useRef({
    currentFrame: 1,
    currentSide: "right",
    tgtSide: "right",
    rafId: 0,
    idleTimer: null as NodeJS.Timeout | null,
    mouseX: 0,
    mouseY: 0,
    isInside: false,
    hasMoved: false,
    imagesCache: {} as Record<string, HTMLImageElement>,
    lastDrawnPath: ""
  });

  // Sample hero pink color once
  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = "/frames/right/frame_001.webp";
    img.onload = () => {
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = img.naturalWidth;
      tempCanvas.height = img.naturalHeight;
      const tctx = tempCanvas.getContext("2d");
      if (tctx) {
        tctx.drawImage(img, 0, 0);
        const p = tctx.getImageData(4, 4, 1, 1).data;
        const color = `rgb(${p[0]}, ${p[1]}, ${p[2]})`;
        document.documentElement.style.setProperty("--hero-pink", color);
        document.documentElement.style.setProperty("--color-hero-pink", color);
        window.dispatchEvent(new Event("hero-pink-sampled"));
      }
    };
  }, []);

  // Initial frame draw
  useEffect(() => {
    if (shouldReduce) return;
    const path = getFramePath("right", 1);
    const img = new window.Image();
    img.src = path;
    img.onload = () => {
      state.current.imagesCache[path] = img;
      if (!state.current.lastDrawnPath && canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          canvasRef.current.width = img.naturalWidth;
          canvasRef.current.height = img.naturalHeight;
          ctx.drawImage(img, 0, 0);
          state.current.lastDrawnPath = path;
        }
      }
    };
  }, [shouldReduce]);

  // Preload images efficiently in a queue to avoid network bottlenecks
  useEffect(() => {
    if (shouldReduce) return;
    
    const s = state.current;
    const loadImage = (path: string): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        if (s.imagesCache[path]) return resolve(s.imagesCache[path]);
        const img = new window.Image();
        img.src = path;
        img.onload = () => {
          s.imagesCache[path] = img;
          resolve(img);
        };
        img.onerror = () => resolve(img);
      });
    };

    const loadQueue = async () => {
      // 1. Load key frames first
      const keyFrames = [1, 15, 30, 60, 90, 105, 120];
      for (const i of keyFrames) {
        await Promise.all([
          loadImage(getFramePath("right", i)),
          loadImage(getFramePath("left", i))
        ]);
      }
      
      // 2. Load the rest sequentially (in small batches of 4)
      let batch = [];
      for (let i = 1; i <= FRAMES; i++) {
        if (!keyFrames.includes(i)) {
           batch.push(loadImage(getFramePath("right", i)));
           batch.push(loadImage(getFramePath("left", i)));
           if (batch.length >= 4) {
              await Promise.all(batch);
              batch = [];
           }
        }
      }
      if (batch.length > 0) await Promise.all(batch);
    };

    const timer = setTimeout(loadQueue, 500);
    return () => clearTimeout(timer);
  }, [shouldReduce]);

  const tick = useCallback(() => {
    const s = state.current;
    
    let targetFrame = 1;
    let targetSide = s.tgtSide;

    if (s.isInside && s.hasMoved && s.idleTimer !== null) {
       const rect = containerRef.current?.getBoundingClientRect();
       if (rect) {
         const cx = rect.left + rect.width / 2;
         const cy = rect.top + rect.height * 0.38; 
         
         const dx = s.mouseX - cx;
         const dy = s.mouseY - cy;
         const dist = Math.sqrt(dx*dx + dy*dy);
         
         if (dx > 30) targetSide = "right";
         else if (dx < -30) targetSide = "left";
         
         if (dist > DEAD_ZONE_PX) {
           const theta = Math.atan2(Math.abs(dx), -dy) * (180 / Math.PI);
           targetFrame = P_UP + (P_DOWN - P_UP) * (theta / 180);
         }
       }
    }

    if (s.currentSide !== targetSide) {
       targetFrame = 1; 
       const distToCenter1 = Math.abs(s.currentFrame - 1);
       const distToCenter120 = Math.abs(s.currentFrame - 120);
       if (distToCenter1 < 2 || distToCenter120 < 2) {
          s.currentSide = targetSide; 
          s.currentFrame = 1;
       }
    }

    let diff = targetFrame - s.currentFrame;
    if (diff > 119 / 2) diff -= 119;
    if (diff < -119 / 2) diff += 119;

    s.currentFrame += diff * LERP_FACTOR;
    
    while (s.currentFrame < 1) s.currentFrame += 119;
    while (s.currentFrame >= 120) s.currentFrame -= 119;

    if (canvasRef.current) {
      let renderFrame = Math.round(s.currentFrame);
      if (renderFrame === 120) renderFrame = 1;
      const path = getFramePath(s.currentSide, renderFrame);
      const img = s.imagesCache[path];

      if (img && img.complete && img.naturalWidth > 0 && path !== s.lastDrawnPath) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          if (canvasRef.current.width !== img.naturalWidth) {
             canvasRef.current.width = img.naturalWidth;
             canvasRef.current.height = img.naturalHeight;
          }
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          ctx.drawImage(img, 0, 0);
          s.lastDrawnPath = path;
        }
      }
    }

    const isAtTarget = Math.abs(diff) < 0.1 && s.currentSide === targetSide;
    if (isAtTarget) {
      s.currentFrame = targetFrame;
      s.rafId = 0;
    } else {
      s.rafId = requestAnimationFrame(tick);
    }
  }, []);

  useEffect(() => {
    if (shouldReduce) return;
    
    const onMove = (e: PointerEvent) => {
      const s = state.current;
      s.mouseX = e.clientX;
      s.mouseY = e.clientY;
      s.isInside = true;
      s.hasMoved = true;
      
      if (s.idleTimer) clearTimeout(s.idleTimer);
      s.idleTimer = setTimeout(() => {
         s.idleTimer = null;
         if (!s.rafId) s.rafId = requestAnimationFrame(tick);
      }, IDLE_TIMEOUT_MS);
      
      if (!s.rafId) s.rafId = requestAnimationFrame(tick);
    };
    
    const onLeave = () => {
      const s = state.current;
      s.isInside = false;
      if (s.idleTimer) clearTimeout(s.idleTimer);
      s.idleTimer = null;
      if (!s.rafId) s.rafId = requestAnimationFrame(tick);
    };

    const section = document.getElementById("home");
    if (section) {
       section.addEventListener("pointermove", onMove);
       section.addEventListener("pointerleave", onLeave);
    }
    
    return () => {
       if (section) {
         section.removeEventListener("pointermove", onMove);
         section.removeEventListener("pointerleave", onLeave);
       }
       if (state.current.idleTimer) clearTimeout(state.current.idleTimer);
       if (state.current.rafId) cancelAnimationFrame(state.current.rafId);
    };
  }, [shouldReduce, tick]);

  const isTouchOrReduced = shouldReduce || (typeof window !== 'undefined' && !window.matchMedia("(pointer: fine)").matches);
  const maskStyle = { 
    maskImage: "radial-gradient(ellipse 100% 100% at 50% 100%, black 75%, transparent 100%)", 
    WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 100%, black 75%, transparent 100%)" 
  };

  if (isTouchOrReduced) {
     return (
       <div className="relative w-full h-full select-none flex items-end" aria-label="Interactive portrait" role="img">
         <motion.img
           src="/frames/right/frame_001.webp"
           alt="Portrait of Aarya Shrivaastava"
           animate={{ y: [0, -10, 0] }}
           transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
           className="w-full h-full object-cover object-bottom"
           style={maskStyle}
           draggable={false}
         />
       </div>
     );
  }

  return (
    <div ref={containerRef} className="relative w-full h-full select-none flex items-end" aria-label="Interactive portrait" role="img">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover object-bottom"
        style={maskStyle}
      />
    </div>
  );
}

export default function HeroSection() {
  const isDebug = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("debug") === "1";
  
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" aria-label="Hero — Introduction" className="relative w-full min-h-[100dvh] flex flex-col-reverse md:flex-row items-stretch justify-between overflow-hidden">
      
      {/* ── LEFT: Text column ─────────────────────────────────────────── */}
      <div className="relative z-10 w-full md:w-[45%] px-6 md:pl-16 lg:pl-24 flex flex-col justify-center shrink-0 pt-10 pb-16 md:py-0">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col mb-14"
        >
          <span className="font-body font-bold text-white uppercase tracking-[0.25em] text-[clamp(14px,1.5vw,18px)] mb-1 pl-1 drop-shadow-sm">
            Hi, I'm
          </span>
          <span 
            className="text-white text-[clamp(80px,11vw,180px)] leading-[0.8] drop-shadow-md pr-4"
            style={{ fontFamily: "var(--font-script, 'Great Vibes', cursive)" }}
          >
            Aarya
          </span>
          <span 
            className="text-white text-[clamp(64px,9vw,140px)] leading-[0.8] drop-shadow-md pr-4 mt-2"
            style={{ fontFamily: "var(--font-script, 'Great Vibes', cursive)" }}
          >
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="mb-10 flex flex-col gap-3 max-w-md"
        >
          <div className="flex flex-wrap gap-2.5 mb-2">
            <span className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm">
              Full Stack Engineer Intern
            </span>
            <span className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm">
              AI
            </span>
            <span className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm">
              CSE @ VIT Bhopal
            </span>
          </div>
          <p className="text-white/80 text-[15px] md:text-[17px] leading-relaxed">
            Building AI-driven backends and full-stack products — one clean API at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap gap-4 mb-8 md:mb-0"
        >
          <a
            href={profile.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Résumé"
            className="inline-flex items-center justify-center gap-2 px-7 h-12 rounded-full bg-white text-ink font-semibold text-[15px] hover:bg-white/90 active:scale-95 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:shadow-[0_4px_28px_rgba(255,255,255,0.35)]"
          >
            <DocumentRegular fontSize={18} />
            Download Resume
          </a>
          <button
            onClick={scrollToProjects}
            aria-label="View my work"
            className="inline-flex items-center justify-center gap-2 px-7 h-12 rounded-full border border-white/40 text-white font-semibold text-[15px] hover:bg-white/10 hover:border-white/70 active:scale-95 transition-all"
          >
            View my work
            <ArrowRightRegular fontSize={18} />
          </button>
        </motion.div>
        
        {/* Scroll indicator - absolute positioned so it doesn't affect vertical centering */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          aria-hidden="true"
          className="hidden md:flex flex-col items-start gap-2 absolute bottom-10 left-6 md:left-16 lg:left-24"
        >
          <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent animate-pulse ml-[22px]" />
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 ml-1">Scroll</span>
        </motion.div>
      </div>

      {/* ── RIGHT: Portrait ─────────────────────────────────────── */}
      <div
        className="relative w-full md:w-[55%] h-[55vh] md:h-auto flex items-end justify-end shrink-0"
        aria-hidden="true"
      >
        <HeadTracker debug={isDebug} />
      </div>
    </section>
  );
}
