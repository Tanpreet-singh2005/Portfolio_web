"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";
import {
  ArrowRightRegular,
  RocketRegular
} from "@fluentui/react-icons";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      aria-label="Hero — Introduction" 
      className="relative w-full min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 relative z-10">
        
        {/* ── LEFT: Clean, Concise & High Impact ─────────────────────── */}
        <div className="w-full lg:w-[58%] flex flex-col items-start">
          
          {/* Subtle status beacon */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-mono text-xs font-semibold text-cyan-300">
              Ex-SDE Intern @ Grasim Industries · CGPA 9.29
            </span>
          </motion.div>

          {/* Clean Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white leading-[1.1] mb-4"
          >
            Hi, I&rsquo;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Tanpreet Singh
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.5 }}
            className="text-xl sm:text-2xl font-semibold text-slate-200 mb-5"
          >
            Full-Stack Software Engineer
          </motion.p>

          {/* Tight, punchy summary (2 sentences max) */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-300 text-base sm:text-[17px] leading-relaxed max-w-xl mb-8"
          >
            CS undergraduate at VIT Bhopal who shipped 3 production full-stack platforms and interned at Grasim Industries (Aditya Birla Group). Building scalable web systems with React, Node.js, Express, MongoDB, and AWS.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto"
          >
            <button
              onClick={scrollToProjects}
              className="px-6 h-12 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRightRegular fontSize={16} />
            </button>

            <button
              onClick={scrollToContact}
              className="px-5 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-cyan-400/60 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer"
            >
              Contact Me
            </button>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 text-slate-300 hover:text-white text-xs font-mono font-medium transition-all flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Clean 3-Item Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.5 }}
            className="flex items-center gap-6 pt-5 border-t border-white/10 text-slate-300 font-mono text-xs"
          >
            <div>
              <span className="text-cyan-400 font-bold text-base block font-sans">9.29</span>
              <span className="text-slate-400 text-[11px]">CGPA (VIT)</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div>
              <span className="text-emerald-400 font-bold text-base block font-sans">160+</span>
              <span className="text-slate-400 text-[11px]">DSA Solved</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div>
              <span className="text-amber-400 font-bold text-base block font-sans">+35%</span>
              <span className="text-slate-400 text-[11px]">Query Speedup</span>
            </div>
          </motion.div>

        </div>

        {/* ── RIGHT: Compact, Lightweight & Modern Card ───────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full lg:w-[40%] flex flex-col"
        >
          {/* Lightweight Glass Highlight Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0B111E]/80 border border-slate-700/70 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden">
            {/* Subtle top edge glow */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-80" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Snapshot
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready for SDE Roles</span>
              </div>
            </div>

            {/* Highlights List */}
            <div className="space-y-4 text-xs">
              
              {/* Highlight 1 */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300 text-xs shrink-0 mt-0.5">
                  🏢
                </div>
                <div>
                  <div className="font-semibold text-white text-[13px]">Grasim Industries (Aditya Birla Group)</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Software Developer Intern · +35% query speedup, 99.2% stability</div>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 text-xs shrink-0 mt-0.5">
                  🚀
                </div>
                <div>
                  <div className="font-semibold text-white text-[13px]">3 Deployed Full-Stack Applications</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Zerodha Simulator · TanRoam Rentals · Job Portal Hub</div>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300 text-xs shrink-0 mt-0.5">
                  ☁️
                </div>
                <div>
                  <div className="font-semibold text-white text-[13px]">AWS Certified Cloud Practitioner</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">MERN Architecture · RESTful APIs · JWT &amp; RBAC</div>
                </div>
              </div>

            </div>

            {/* Bottom Quick Pill Badges */}
            <div className="flex flex-wrap gap-1.5 pt-4 mt-5 border-t border-white/10 font-mono text-[10px] text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">React</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Node.js</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">MongoDB</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Express</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">AWS</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
