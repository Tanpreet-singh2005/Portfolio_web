"use client";

import { useState } from "react";
import { profile } from "@/data/content";
import { FaGithub, FaLinkedin, FaAws } from "react-icons/fa6";
import { SiGeeksforgeeks, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import { ArrowDown, Check, Copy, ExternalLink, ShieldCheck, Sparkles, Terminal, Layers, Award } from "lucide-react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"spec" | "stack" | "honors">("spec");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-14 relative z-10">
        
        {/* ── LEFT: Typographic Elegance & Narrative ─────────────────── */}
        <div className="w-full lg:w-[56%] flex flex-col items-start">
          
          {/* Status Badge with Subtle Luminous Dot */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] shadow-sm mb-7 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-mono text-xs text-slate-300 font-medium">
              Available for SDE &amp; Full-Stack Roles · 2026/2027
            </span>
          </div>

          {/* High-Impact Headline with Subtle Metallic Shimmer */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Hi, I&rsquo;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-200">
              Tanpreet Singh
            </span>
            .
            <span className="block text-slate-200 text-2xl sm:text-3xl lg:text-[34px] font-semibold mt-2.5 tracking-normal">
              Full-Stack Software Engineer
            </span>
          </h1>

          {/* Narrative Paragraph */}
          <p className="text-slate-300 text-base sm:text-[17px] leading-relaxed max-w-xl mb-8">
            Computer Science undergraduate at <strong className="text-white font-semibold">VIT Bhopal (CGPA 9.29)</strong> and ex-Software Developer Intern at <strong className="text-white font-semibold">Grasim Industries (Aditya Birla Group)</strong>. I architect reliable web platforms using React, Node.js, Express, MongoDB, and AWS.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-9">
            <button
              onClick={scrollToProjects}
              className="px-6 h-11 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-semibold text-xs uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.25)]"
            >
              <span>Explore Projects</span>
              <ArrowDown size={14} />
            </button>

            <button
              onClick={handleCopyEmail}
              className="px-4 h-11 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 text-slate-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-2 cursor-pointer"
              title="Click to copy email"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>tanpreetsingh7007@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles Row */}
          <div className="flex flex-wrap items-center gap-2.5 pt-6 border-t border-white/[0.08] w-full text-xs font-mono">
            <span className="text-slate-500 uppercase tracking-wider text-[11px] mr-1">
              Connect:
            </span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/25 text-slate-300 hover:text-white transition-colors"
            >
              <FaGithub size={13} />
              <span>GitHub</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/25 text-slate-300 hover:text-white transition-colors"
            >
              <FaLinkedin size={13} />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.links.gfg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/25 text-slate-300 hover:text-white transition-colors"
            >
              <SiGeeksforgeeks size={13} />
              <span>GFG (160+)</span>
            </a>
          </div>

        </div>

        {/* ── RIGHT: Interactive Bento System Showcase ───────────────── */}
        <div className="w-full lg:w-[44%] flex flex-col">
          <div className="glass-card-interactive overflow-hidden border border-white/[0.1] shadow-2xl">
            
            {/* Interactive Tab Switcher Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0A0E1A] border-b border-white/[0.08]">
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <button
                  onClick={() => setActiveTab("spec")}
                  className={`px-3 py-1 rounded-md font-mono text-[11px] font-medium transition-colors cursor-pointer ${
                    activeTab === "spec"
                      ? "bg-white/10 text-white font-semibold shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("stack")}
                  className={`px-3 py-1 rounded-md font-mono text-[11px] font-medium transition-colors cursor-pointer ${
                    activeTab === "stack"
                      ? "bg-white/10 text-white font-semibold shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Stack
                </button>
                <button
                  onClick={() => setActiveTab("honors")}
                  className={`px-3 py-1 rounded-md font-mono text-[11px] font-medium transition-colors cursor-pointer ${
                    activeTab === "honors"
                      ? "bg-white/10 text-white font-semibold shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Honors
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
            </div>

            {/* TAB 1: System Spec & Verified Metrics */}
            {activeTab === "spec" && (
              <div className="p-5 sm:p-6 space-y-5">
                
                {/* 4 Metric Tiles with Subtle Color Harmonies */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                      VIT Bhopal CGPA
                    </span>
                    <div className="text-2xl font-bold text-white mt-1 font-mono">
                      9.29 <span className="text-xs text-slate-500 font-normal">/ 10</span>
                    </div>
                    <span className="text-[11px] text-sky-400/90 font-mono block mt-0.5">Top Academic Tier</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                      DSA Solved
                    </span>
                    <div className="text-2xl font-bold text-white mt-1 font-mono">
                      160+
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono block mt-0.5">GeeksforGeeks</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                      Query Optimization
                    </span>
                    <div className="text-2xl font-bold text-emerald-400 mt-1 font-mono">
                      +35%
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono block mt-0.5">API Latency Cut</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                      Shipped Platforms
                    </span>
                    <div className="text-2xl font-bold text-sky-400 mt-1 font-mono">
                      3 Live
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono block mt-0.5">FinTech &amp; Platforms</span>
                  </div>
                </div>

                {/* Internship Experience Line */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-white text-xs sm:text-sm">
                      Grasim Industries (Aditya Birla Group)
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 px-2 py-0.5 rounded bg-white/[0.04]">
                      Jun – Jul 2026
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Software Developer Intern · Engineered internal web tools supporting 50+ engineers, tuned query logic reducing API latency by 35%, and closed security endpoints with JWT/RBAC.
                  </p>
                </div>

                {/* Live Architecture Indicator */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-sky-400" />
                    <span className="font-medium text-sky-200">Featured System: Zerodha Trading Simulator</span>
                  </div>
                  <button 
                    onClick={scrollToProjects}
                    className="text-white hover:text-sky-300 font-mono text-[11px] font-semibold transition-colors cursor-pointer"
                  >
                    View ↗
                  </button>
                </div>

              </div>
            )}

            {/* TAB 2: Core Stack Preview */}
            {activeTab === "stack" && (
              <div className="p-5 sm:p-6 space-y-4">
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                  Core Technologies
                </span>
                
                <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                    <SiReact size={18} className="text-[#61DAFB]" />
                    <div>
                      <div className="font-semibold text-white text-[13px]">React.js</div>
                      <div className="text-[10px] text-slate-400">Context, Hooks, SSR</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                    <SiNodedotjs size={18} className="text-[#5FA04E]" />
                    <div>
                      <div className="font-semibold text-white text-[13px]">Node.js</div>
                      <div className="text-[10px] text-slate-400">Express &amp; APIs</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                    <SiMongodb size={18} className="text-[#47A248]" />
                    <div>
                      <div className="font-semibold text-white text-[13px]">MongoDB</div>
                      <div className="text-[10px] text-slate-400">Aggregation &amp; Index</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                    <FaAws size={18} className="text-[#FF9900]" />
                    <div>
                      <div className="font-semibold text-white text-[13px]">AWS Cloud</div>
                      <div className="text-[10px] text-slate-400">Certified Practitioner</div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300">
                  <span className="font-mono text-slate-400 text-[11px] block mb-1.5 uppercase tracking-wider">Secondary Repertoire</span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {["Java", "SQL", "Redux Toolkit", "JWT Auth", "REST APIs", "Tailwind CSS", "Git & GitHub", "Postman"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Academic Honors & Standing */}
            {activeTab === "honors" && (
              <div className="p-5 sm:p-6 space-y-3.5">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-sm">VIT Bhopal University</span>
                    <span className="font-mono text-xs text-sky-400 font-bold">9.29 CGPA</span>
                  </div>
                  <p className="text-xs text-slate-400">B.Tech Computer Science &amp; Engineering · Top Academic Percentile</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-sm">NPTEL Marketing Analytics</span>
                    <span className="font-mono text-xs text-amber-400 font-bold">97% (Gold)</span>
                  </div>
                  <p className="text-xs text-slate-400">Awarded Top 5% Performer nationwide by IIT Kharagpur</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-sm">Fatima Convent H.S. School</span>
                    <span className="font-mono text-xs text-emerald-400 font-bold">95.6% / 91.4%</span>
                  </div>
                  <p className="text-xs text-slate-400">Class X: 95.6% · Class XII: 91.4% (PCM &amp; Computer Science)</p>
                </div>
              </div>
            )}

            {/* Spec Sheet Footer */}
            <div className="px-5 py-3.5 bg-[#0A0E1A] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck size={14} />
                <span>AWS Certified Cloud Practitioner</span>
              </span>
              <button 
                onClick={scrollToContact}
                className="text-white hover:text-sky-300 font-sans font-semibold transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Connect</span>
                <span className="text-sky-400">→</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
