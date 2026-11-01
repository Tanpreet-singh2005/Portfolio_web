"use client";

import FadeUp from "@/components/FadeUp";
import { certifications, educations, keyAchievements } from "@/data/content";
import { Award, CheckCircle, GraduationCap, ShieldCheck, Trophy } from "lucide-react";
import { FaAws } from "react-icons/fa6";

export default function RecognitionSection() {
  return (
    <section
      id="recognition"
      aria-label="Education & Credentials"
      className="w-full section-band py-24 md:py-32 relative"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ── PART 1: Education ───────────────────────────────────── */}
        <div>
          <FadeUp>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="font-mono text-xs tracking-wider uppercase text-slate-400 font-medium">
                05 · Academic Pedigree
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Education &amp; Qualifications
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2.5 max-w-xl leading-relaxed">
                Rigorous foundations in Computer Science, Systems Architecture, and Data Structures.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educations.map((edu, idx) => (
              <FadeUp key={edu.institution} delay={0.08 + idx * 0.08} className="h-full">
                <div className="glass-card-interactive p-7 sm:p-9 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider block mb-1">
                          {edu.period}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          {edu.institution}
                        </h3>
                        <p className="text-slate-400 text-xs sm:text-sm">{edu.location}</p>
                      </div>
                      <span className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-white font-mono text-xs font-bold shrink-0 shadow-sm">
                        {edu.grade}
                      </span>
                    </div>

                    <p className="text-slate-200 font-semibold text-base mb-5">
                      {edu.degree}
                    </p>

                    <div className="pt-5 border-t border-white/[0.08] space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {edu.highlights?.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* ── PART 2: Verified Industry Certifications ────────────── */}
        <div>
          <FadeUp>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs tracking-wider uppercase text-slate-400 font-medium">
                06 · Verified Accreditations
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Certifications &amp; Accreditations
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2.5 max-w-xl leading-relaxed">
                Standardized credentials verifying expertise in Cloud Infrastructure, Computer Networking, and Machine Learning.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => {
              const isGold = cert.title.includes("Marketing Analytics");
              return (
                <FadeUp key={cert.title} delay={0.06 + i * 0.06} className="h-full">
                  <div className={`glass-card p-6 h-full flex flex-col justify-between group transition-all ${
                    isGold ? "border-amber-400/40 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" : ""
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold ${
                          isGold 
                            ? "bg-amber-500/15 border border-amber-500/30 text-amber-300"
                            : "bg-white/[0.04] border border-white/[0.08] text-slate-300"
                        }`}>
                          {cert.badge || "Verified"}
                        </span>
                        {isGold ? (
                          <Trophy size={16} className="text-amber-400" />
                        ) : (
                          <ShieldCheck size={16} className="text-emerald-400" />
                        )}
                      </div>

                      <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-sky-300 transition-colors">
                        {cert.title}
                      </h3>

                      <p className="text-xs font-mono text-sky-400 mb-3 font-medium">
                        {cert.issuer}
                      </p>

                      <p className="text-slate-300 text-xs leading-relaxed">
                        {cert.detail}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Credential Verified</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        {/* ── PART 3: Engineering Milestones ─────────────────────── */}
        <div>
          <FadeUp>
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Algorithmic &amp; Engineering Milestones
              </h3>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyAchievements.map((item, idx) => (
              <FadeUp key={item.title} delay={0.06 + idx * 0.06} className="h-full">
                <div className="glass-card p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-white font-mono mb-1.5">
                      {item.metric}
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs font-mono text-slate-400 mb-3.5">
                      {item.subtitle}
                    </p>
                    <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
