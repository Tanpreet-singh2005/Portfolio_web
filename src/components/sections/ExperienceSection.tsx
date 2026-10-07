"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import { experience } from "@/data/content";

export default function ExperienceSection() {
  const item = experience[0]; // Grasim Industries Pvt. Ltd.

  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="w-full section-band-1 py-20 md:py-32 relative"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-cyan-300 font-semibold">
              03 · Industry Experience
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Professional Experience
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-xl">
                Engineering enterprise web solutions, database query tuning, and security endpoints in an Agile production environment.
              </p>
            </div>
            <div className="font-mono text-xs text-slate-300 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Aditya Birla Group · Grasim Industries</span>
            </div>
          </div>
        </FadeUp>

        {/* Featured Experience Card */}
        <FadeUp delay={0.15}>
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="card p-7 sm:p-10 md:p-12 border border-slate-700/80 relative overflow-hidden bg-gradient-to-br from-[#0F172A]/95 via-[#0B111E]/95 to-[#070B14]/95 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {/* Ambient edge glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/35 flex items-center justify-center text-cyan-300 font-bold font-mono text-xl shrink-0 shadow-[0_0_25px_rgba(56,189,248,0.25)]">
                  GI
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {item.company}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                      Aditya Birla Group
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-slate-300 text-sm font-medium">
                    <span className="text-white font-semibold text-base">{item.role}</span>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <span className="text-slate-400">{item.location}</span>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <span className="font-mono text-cyan-400/90">{item.period}</span>
                  </div>
                </div>
              </div>

              {/* Metrics Badge Group */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {item.metrics.map((m) => (
                  <motion.div 
                    key={m.label} 
                    whileHover={{ scale: 1.05 }}
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-center transition-all hover:border-cyan-500/40"
                  >
                    <div className="text-cyan-400 font-bold text-xl leading-none mb-1 font-mono">
                      {m.value}
                    </div>
                    <div className="text-slate-400 text-xs font-medium">
                      {m.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content & Bullets */}
            <div className="py-8">
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {item.summary}
              </p>

              <h4 className="font-mono text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">
                Key Deliverables &amp; Engineering Impact
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.bullets.map((bullet, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3.5 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/35 flex items-center justify-center text-cyan-300 text-xs font-mono shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer tech tags */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2 uppercase tracking-wider">
                  Tech Utilized:
                </span>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="font-mono text-xs text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Internship Successfully Completed</span>
              </div>
            </div>

          </motion.div>
        </FadeUp>

      </div>
    </section>
  );
}
