"use client";

import FadeUp from "@/components/FadeUp";
import { experience } from "@/data/content";
import { Briefcase, Building2, CheckCircle2, ShieldCheck, Zap, Activity, Users } from "lucide-react";

export default function ExperienceSection() {
  const item = experience[0]; // Grasim Industries Pvt. Ltd.

  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="w-full section-band py-24 md:py-32 relative"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="font-mono text-xs tracking-wider uppercase text-slate-400 font-medium">
              03 · Industry Experience
            </span>
          </div>
        </FadeUp>

        {/* Section Header */}
        <FadeUp delay={0.06}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Enterprise Experience
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2.5 max-w-xl leading-relaxed">
                Engineering production web services, database query tuning, and security endpoints in an Agile enterprise environment.
              </p>
            </div>
            <div className="font-mono text-xs text-slate-300 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.09] flex items-center gap-2.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Aditya Birla Group · Grasim Industries</span>
            </div>
          </div>
        </FadeUp>

        {/* Featured Experience Card */}
        <FadeUp delay={0.1}>
          <div className="glass-card-interactive p-7 sm:p-10 relative overflow-hidden">
            {/* Subtle Top Ambient Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-7 border-b border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-400/30 flex items-center justify-center text-white font-mono font-bold text-lg shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  GI
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {item.company}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 font-mono text-xs font-semibold">
                      Aditya Birla Group
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5 text-slate-300 text-xs sm:text-sm font-medium">
                    <span className="text-white font-semibold text-sm sm:text-base">{item.role}</span>
                    <span className="text-slate-500">•</span>
                    <span>{item.location}</span>
                    <span className="text-slate-500">•</span>
                    <span className="font-mono text-sky-400 font-semibold">{item.period}</span>
                  </div>
                </div>
              </div>

              {/* Metrics Badge Group */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {item.metrics.map((m) => (
                  <div 
                    key={m.label}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-center hover:border-sky-400/30 transition-colors"
                  >
                    <div className="text-xl font-bold text-sky-300 font-mono leading-none mb-1">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Role Summary & Deliverables */}
            <div className="py-7 space-y-6">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
                {item.summary}
              </p>

              <div>
                <span className="font-mono text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-4">
                  Key Technical Deliverables &amp; Impact
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.bullets.map((bullet, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] flex items-start gap-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-300 text-xs font-mono font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Tech Tags */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">
                  Stack Utilized:
                </span>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300 hover:border-sky-400/30 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Internship Successfully Completed</span>
              </span>
            </div>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}
