"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import { profile } from "@/data/content";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Tanpreet"
      className="w-full section-band-1 py-20 md:py-32 relative"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-cyan-300 font-semibold">
              01 · Background &amp; Philosophy
            </span>
          </div>
        </FadeUp>

        {/* Main Headline */}
        <FadeUp delay={0.08}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-14 md:mb-16">
            Building robust software from first principles —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 animate-shimmer">
              engineered for reliability &amp; scale.
            </span>
          </h2>
        </FadeUp>

        {/* Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          
          {/* 1. Summary / Overview (Full Width) */}
          <div className="md:col-span-12 col-span-1">
            <FadeUp delay={0.15} className="h-full">
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="card p-7 sm:p-10 md:p-12 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold tracking-widest uppercase text-cyan-400">
                    Candidate Profile
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    VIT Bhopal · SDE Aspirant
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl text-white font-bold mb-6 leading-snug max-w-4xl">
                  A software engineer focused on architecting resilient backends, fluid user interfaces, and dependable data pipelines.
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-slate-300 text-base leading-relaxed">
                  <p>
                    I am a Computer Science undergraduate at <strong className="text-white font-semibold">VIT Bhopal (CGPA 9.29)</strong> who has architected and deployed 3 production-grade full-stack systems. During my Software Development internship at <strong className="text-cyan-300 font-semibold">Grasim Industries (Aditya Birla Group)</strong>, I engineered internal web modules supporting 50+ technical engineers, optimized database queries reducing API latency by 35%, and closed critical security endpoints with JWT/RBAC authorization.
                  </p>
                  <p>
                    My problem-solving mindset is reinforced by over <strong className="text-emerald-400 font-semibold">160+ DSA problems solved on GeeksforGeeks</strong> across core algorithmic paradigms. I take deep satisfaction in taking full ownership — from clean database schema design and RESTful API architecture to responsive, reactive client frontends.
                  </p>
                </div>
              </motion.div>
            </FadeUp>
          </div>

          {/* 2. Technical Mindset */}
          <div className="md:col-span-7 col-span-1">
            <FadeUp delay={0.22} className="h-full">
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="card p-7 sm:p-9 h-full flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold tracking-widest uppercase text-slate-400 block mb-4">
                    Engineering Approach
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                    Measure twice, optimize systematically, ship with confidence.
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    Whether diagnosing database index bottlenecks, securing cookie sessions against cross-domain drops, or streamlining complex 5-step recruiting workflows down to 2 clicks — I build software that prioritizes performance, security, and delightful developer and user experiences.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {["REST APIs", "JWT & RBAC", "State Architecture", "Query Indexing"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeUp>
          </div>

          {/* 3. Education & Academic Standing */}
          <div className="md:col-span-5 col-span-1">
            <FadeUp delay={0.28} className="h-full">
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="card p-7 sm:p-9 h-full flex flex-col justify-between bg-gradient-to-br from-[#0F172A]/90 to-[#0A101D]/90 border border-cyan-500/30"
              >
                <div>
                  <span className="font-mono text-xs font-bold tracking-widest uppercase text-cyan-400 block mb-3">
                    Academic Standing
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    B.Tech in Computer Science
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">VIT Bhopal University · 2023 – 2027</p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">Cumulative GPA</span>
                    <span className="text-xs text-slate-400 font-medium">Top Academic Percentile</span>
                  </div>
                  <div className="text-right">
                    <span className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 leading-none">
                      9.29
                    </span>
                    <span className="block font-mono text-[11px] text-cyan-400 font-bold tracking-widest uppercase mt-1">
                      CGPA / 10
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 text-xs text-slate-400 space-y-1.5">
                  <div className="flex justify-between">
                    <span>Class XII (Senior Secondary):</span>
                    <span className="font-mono text-slate-200 font-semibold">91.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Class X (Secondary):</span>
                    <span className="font-mono text-slate-200 font-semibold">95.6%</span>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          </div>

          {/* 4. Verified Metrics & Impact */}
          <div className="md:col-span-12 col-span-1">
            <FadeUp delay={0.35} className="h-full">
              <div className="card p-7 sm:p-10 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <span className="font-mono text-xs font-bold tracking-widest uppercase text-cyan-400 block mb-1">
                      Key Highlights &amp; Metrics
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Quantifiable Engineering Results
                    </h3>
                  </div>
                  <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Verified across Internship &amp; Projects
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                  
                  {[
                    { value: "+35%", label: "API Latency Cut at Grasim", color: "text-cyan-400" },
                    { value: "99.2%", label: "Release Stability Rate", color: "text-emerald-400" },
                    { value: "<150ms", label: "Zerodha Engine Response", color: "text-sky-400" },
                    { value: "160+", label: "DSA Solved (GeeksforGeeks)", color: "text-indigo-400" },
                    { value: "3 Apps", label: "Shipped Live Platforms", color: "text-amber-400" },
                    { value: "97%", label: "NPTEL Gold (Top 5%)", color: "text-rose-400" },
                  ].map((metric) => (
                    <motion.div 
                      key={metric.label}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col p-3 rounded-xl bg-slate-900/40 border border-white/5"
                    >
                      <span className={`text-3xl sm:text-4xl font-extrabold ${metric.color} leading-none mb-2 font-mono`}>
                        {metric.value}
                      </span>
                      <span className="text-slate-300 text-xs sm:text-sm font-medium leading-snug">
                        {metric.label}
                      </span>
                    </motion.div>
                  ))}

                </div>
              </div>
            </FadeUp>
          </div>

        </div>

      </div>
    </section>
  );
}
