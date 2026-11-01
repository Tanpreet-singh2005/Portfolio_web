"use client";

import FadeUp from "@/components/FadeUp";
import { Award, BookOpen, CheckCircle, Code2, Cpu, GraduationCap, Layers, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Tanpreet"
      className="w-full section-band py-24 md:py-32 relative"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="font-mono text-xs tracking-wider uppercase text-slate-400 font-medium">
              01 · Engineering Philosophy &amp; Background
            </span>
          </div>
        </FadeUp>

        {/* Section Headline */}
        <FadeUp delay={0.06}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-12">
            Architecting robust software with a systems mindset —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-200">
              engineered for scale.
            </span>
          </h2>
        </FadeUp>

        {/* Main 2-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 flex flex-col">
            <FadeUp delay={0.1} className="h-full">
              <div className="glass-card-interactive p-7 sm:p-9 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                    <span className="font-mono text-xs font-semibold text-sky-400 uppercase tracking-wider">
                      Engineer Profile
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      VIT Bhopal · SDE Aspirant
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl text-white font-bold mb-5 leading-snug">
                    Dedicated to designing dependable backends, fluid client interfaces, and optimized database pipelines.
                  </h3>

                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <p>
                      I am a Computer Science undergraduate at <strong className="text-white font-semibold">VIT Bhopal University (CGPA 9.29)</strong> who has architected and deployed 3 production-grade full-stack systems. During my Software Development internship at <strong className="text-white font-semibold">Grasim Industries (Aditya Birla Group)</strong>, I engineered internal web modules supporting 50+ technical engineers, optimized database queries reducing API latency by 35%, and closed critical security endpoints with JWT/RBAC authorization.
                    </p>
                    <p>
                      My algorithmic mindset is reinforced by over <strong className="text-white font-semibold">160+ DSA problems solved on GeeksforGeeks</strong> across core algorithmic paradigms. I take deep satisfaction in taking full ownership — from clean database schema design and RESTful API architecture to responsive, reactive client frontends.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-white/[0.08] font-mono text-xs">
                  {["RESTful APIs", "JWT & RBAC", "Query Optimization", "State Architecture", "Agile / Scrum"].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200 hover:border-sky-400/40 hover:text-white transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Academic Pedigree Card */}
          <div className="lg:col-span-5 flex flex-col">
            <FadeUp delay={0.14} className="h-full">
              <div className="glass-card-interactive p-7 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                {/* Subtle Top Glow Accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                    <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Academic Standing
                    </span>
                    <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-xs font-medium">
                      Top Academic Percentile
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-300 font-mono leading-none mb-1.5">
                      9.29
                      <span className="text-base font-normal text-slate-400 ml-1.5">/ 10 CGPA</span>
                    </div>
                    <span className="text-base font-semibold text-white block mt-2">
                      B.Tech in Computer Science &amp; Engineering
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      VIT Bhopal University · 2023 – 2027
                    </span>
                  </div>

                  <div className="space-y-3 pt-5 border-t border-white/[0.08] text-xs">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                      <span className="text-slate-300 font-medium">Class XII (Senior Secondary)</span>
                      <span className="font-mono font-bold text-white text-sm">91.4%</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                      <span className="text-slate-300 font-medium">Class X (Secondary)</span>
                      <span className="font-mono font-bold text-white text-sm">95.6%</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/25">
                      <span className="text-amber-200 font-medium">NPTEL Marketing Analytics</span>
                      <span className="font-mono font-bold text-amber-300 text-sm">97% (Gold · Top 5%)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] text-xs text-slate-300 flex items-center gap-2">
                  <GraduationCap size={16} className="text-sky-400" />
                  <span>Comprehensive coursework in DBMS, OS, Networks &amp; Algorithms</span>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>

        {/* Quantifiable Highlights Strip */}
        <FadeUp delay={0.18}>
          <div className="glass-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                Quantifiable Engineering Impact
              </span>
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Verified Across Internship &amp; Platforms
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: "Query Latency Cut", value: "+35%", sub: "Grasim Industries" },
                { label: "Release Stability", value: "99.2%", sub: "4 Agile Sprints" },
                { label: "Execution Latency", value: "<150ms", sub: "Zerodha Simulator" },
                { label: "DSA Solved", value: "160+", sub: "GeeksforGeeks" },
                { label: "Shipped Applications", value: "3 Apps", sub: "Live Production" },
                { label: "NPTEL Gold (Top 5%)", value: "97%", sub: "IIT Kharagpur" },
              ].map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-400/30 transition-all hover:-translate-y-1">
                  <div className="text-3xl font-extrabold text-white font-mono mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 leading-snug">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
