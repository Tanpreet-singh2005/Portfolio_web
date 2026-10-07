"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import { projects } from "@/data/content";
import type { Project } from "@/data/content";
import {
  RocketRegular,
  ArrowRightRegular,
  GlobeRegular,
  CheckmarkRegular,
  CodeRegular
} from "@fluentui/react-icons";

const PROJECT_THEMES = [
  {
    gradient: "from-emerald-500/20 via-cyan-500/15 to-transparent",
    border: "group-hover:border-emerald-400/50",
    accentBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    glow: "rgba(52, 211, 153, 0.25)",
    domain: "zerodha-7xzj.vercel.app",
    tagline: "Distributed FinTech Simulator",
    highlightBadge: "< 150ms Latency Engine",
  },
  {
    gradient: "from-amber-500/20 via-rose-500/15 to-transparent",
    border: "group-hover:border-amber-400/50",
    accentBg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    glow: "rgba(251, 191, 36, 0.25)",
    domain: "tanroam.onrender.com",
    tagline: "Vacation Rental Platform",
    highlightBadge: "+30% Faster Page Loads",
  },
  {
    gradient: "from-indigo-500/20 via-violet-500/15 to-transparent",
    border: "group-hover:border-indigo-400/50",
    accentBg: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    glow: "rgba(129, 140, 248, 0.25)",
    domain: "job-portal-beige-eta.vercel.app",
    tagline: "Dual-Role Career & RBAC Engine",
    highlightBadge: "5 Steps to 2 Clicks",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const theme = PROJECT_THEMES[index % PROJECT_THEMES.length];
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <FadeUp delay={0.1 + index * 0.12} className="h-full">
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative rounded-2xl bg-[#0B111E]/95 border border-slate-700/80 ${theme.border} transition-all duration-300 h-full flex flex-col overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)]`}
      >
        {/* Dynamic Cursor Spotlight inside card */}
        {isHovered && (
          <div
            className="pointer-events-none absolute w-[400px] h-[400px] rounded-full blur-[80px] -z-10 transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
              left: `${mousePos.x - 200}px`,
              top: `${mousePos.y - 200}px`,
            }}
          />
        )}

        {/* Ambient Top Gradient Wash */}
        <div className={`absolute top-0 inset-x-0 h-36 bg-gradient-to-b ${theme.gradient} pointer-events-none -z-10`} />

        {/* Browser Mock Chrome Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-[#080C16]/80 text-xs select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600/80 group-hover:bg-rose-500/80 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600/80 group-hover:bg-amber-500/80 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600/80 group-hover:bg-emerald-500/80 transition-colors" />
          </div>

          {/* Domain Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 font-mono text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors">
            <GlobeRegular fontSize={12} />
            <span className="truncate max-w-[170px]">{theme.domain}</span>
          </div>

          {/* Status Dot */}
          <div className="flex items-center gap-1 font-mono text-[10px] text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LIVE</span>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-6 sm:p-8 flex flex-col flex-1">
          
          {/* Subtitle & Tagline */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-bold uppercase tracking-wider border ${theme.accentBg}`}>
              {theme.tagline}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 font-mono text-[11px] text-cyan-300 font-semibold">
              {theme.highlightBadge}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-tight">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            {project.subtitle}
          </p>

          <hr className="border-white/10 mb-6" />

          {/* Key Engineering Bullets */}
          <ul className="space-y-3 mb-6 flex-1 text-slate-300 text-xs sm:text-[13px] leading-relaxed">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 group-hover:border-cyan-500/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button Strip */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live application for ${project.title}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-xs tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer"
              >
                <RocketRegular fontSize={16} />
                <span>Launch Live App ↗</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-slate-500 text-slate-200 font-semibold text-xs transition-all cursor-pointer"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Code</span>
              </a>
            )}
          </div>

        </div>
      </div>
    </FadeUp>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="w-full section-band-2 py-24 md:py-36 relative"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs tracking-widest uppercase text-cyan-300 font-semibold">
              04 · Deployed Production Systems
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Featured Work &amp; Live Platforms
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
                Every project is fully functional and live on the web with real-time architectures, JWT session isolation, and optimized database pipelines.
              </p>
            </div>

            {/* Quick Filter / Live Pill */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0D1424] border border-cyan-500/30 font-mono text-xs text-slate-300 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-semibold text-white">All 3 Live Demos Tested &amp; Active</span>
            </div>
          </div>
        </FadeUp>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
