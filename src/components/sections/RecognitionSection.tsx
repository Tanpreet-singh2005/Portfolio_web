"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import { certifications, educations, keyAchievements } from "@/data/content";

export default function RecognitionSection() {
  return (
    <section
      id="recognition"
      aria-label="Education & Credentials"
      className="w-full section-band-1 py-20 md:py-32 relative"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
        
        {/* ── PART 1: Education ───────────────────────────────────── */}
        <div>
          <FadeUp>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase text-cyan-300 font-semibold">
                05 · Academic Pedigree
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Education &amp; Qualifications
                </h2>
                <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-xl">
                  Rigorous academic training in Computer Science, Systems, and Data Structures.
                </p>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educations.map((edu, idx) => (
              <FadeUp key={edu.institution} delay={0.12 + idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="card p-7 sm:p-9 h-full flex flex-col justify-between border border-slate-700/80 relative overflow-hidden group shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="font-mono text-xs font-bold tracking-widest uppercase text-cyan-400 block mb-1">
                        {edu.period}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-slate-400 text-sm">{edu.location}</p>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/35 text-cyan-300 font-mono text-xs font-bold shrink-0 shadow-sm">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-slate-200 font-medium text-base mb-6">
                    {edu.degree}
                  </p>

                  <div className="pt-6 border-t border-white/10 space-y-2.5">
                    {edu.highlights?.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* ── PART 2: Verified Industry Certifications ────────────── */}
        <div>
          <FadeUp>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase text-emerald-300 font-semibold">
                06 · Verified Credentials
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Certifications &amp; Accreditations
                </h2>
                <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-xl">
                  Standardized credentials verifying expertise in Cloud Computing, Networking, and Machine Learning.
                </p>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <FadeUp key={cert.title} delay={0.1 + i * 0.08}>
                <motion.div 
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="card p-6 h-full flex flex-col justify-between border border-slate-700/80 hover:border-emerald-500/50 group shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-semibold">
                        {cert.badge || "Certified"}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-cyan-400 font-mono text-xs mb-3 font-semibold">
                      {cert.issuer}
                    </p>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {cert.detail}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Credential Verified</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* ── PART 3: Engineering Milestones ─────────────────────── */}
        <div>
          <FadeUp>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Engineering &amp; Problem Solving Highlights
            </h3>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyAchievements.map((item, idx) => (
              <FadeUp key={item.title} delay={0.1 + idx * 0.08}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between h-full shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                >
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono mb-2">
                      {item.metric}
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs font-mono text-slate-400 mb-4">
                      {item.subtitle}
                    </p>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
