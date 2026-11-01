"use client";

import FadeUp from "@/components/FadeUp";
import { projects } from "@/data/content";
import type { Project } from "@/data/content";
import { ArrowUpRight, ExternalLink, Globe, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectVisualMeta {
  domain: string;
  categoryTag: string;
  metricBadge: string;
  themeColor: string;
  themeBg: string;
  accentBorder: string;
  systemFlow: string;
}

const PROJECT_META_MAP: Record<string, ProjectVisualMeta> = {
  "Zerodha Trading Simulator": {
    domain: "zerodha-7xzj.vercel.app",
    categoryTag: "Distributed FinTech Simulator",
    metricBadge: "<150ms Execution Latency",
    themeColor: "text-emerald-400",
    themeBg: "from-emerald-500/10 via-sky-500/5 to-transparent",
    accentBorder: "hover:border-emerald-500/40",
    systemFlow: "2 Independent Frontends ──JWT──> Node Gateway ──<150ms──> MongoDB",
  },
  "TanRoam": {
    domain: "tanroam.onrender.com",
    categoryTag: "Vacation Rental Platform",
    metricBadge: "+30% Page Load Boost",
    themeColor: "text-amber-400",
    themeBg: "from-amber-500/10 via-rose-500/5 to-transparent",
    accentBorder: "hover:border-amber-500/40",
    systemFlow: "Airbnb Architecture ──3 Data Models──> React State ──Render",
  },
  "Job Portal Web Application": {
    domain: "job-portal-beige-eta.vercel.app",
    categoryTag: "Career & Recruiter Engine",
    metricBadge: "5 Steps to 2 Clicks",
    themeColor: "text-indigo-400",
    themeBg: "from-indigo-500/10 via-violet-500/5 to-transparent",
    accentBorder: "hover:border-indigo-500/40",
    systemFlow: "Dual Role RBAC ──8+ Workflows──> 2-Click Job Application",
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const meta = PROJECT_META_MAP[project.title] || {
    domain: "live-deployment.app",
    categoryTag: "Full Stack Platform",
    metricBadge: "Production Ready",
    themeColor: "text-sky-400",
    themeBg: "from-sky-500/10 to-transparent",
    accentBorder: "hover:border-sky-500/40",
    systemFlow: "React Frontend ──REST API──> Express & MongoDB",
  };

  return (
    <FadeUp delay={0.08 + index * 0.08} className="h-full">
      <div className={`glass-card-interactive p-6 sm:p-7 h-full flex flex-col justify-between ${meta.accentBorder} relative overflow-hidden group`}>
        
        {/* Subtle Ambient Top Wash */}
        <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${meta.themeBg} pointer-events-none -z-10`} />

        <div>
          {/* Top Domain & Status Bar */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <Globe size={13} className="text-slate-400" />
              <span className="truncate max-w-[210px]">{meta.domain}</span>
            </a>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Live System</span>
            </div>
          </div>

          {/* Category Tag & Metric Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3.5">
            <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.1] font-mono text-[11px] text-slate-200 font-medium">
              {meta.categoryTag}
            </span>
            <span className={`px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] font-semibold ${meta.themeColor}`}>
              {meta.metricBadge}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-sky-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
            {project.subtitle}
          </p>

          {/* Visual Architecture Chip */}
          <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] mb-5 font-mono text-[11px] text-slate-400">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">Architecture Flow</span>
            <span className="text-slate-200">{meta.systemFlow}</span>
          </div>

          {/* Key Deliverable Bullets */}
          <ul className="space-y-2.5 mb-6 text-xs sm:text-[13px] text-slate-300 leading-relaxed">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Tech Tags & Action Buttons */}
        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 pt-4 pb-5 border-t border-white/[0.08]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-[11px] font-mono text-slate-300 group-hover:border-white/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-semibold text-xs tracking-tight hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.25)]"
              >
                <span>Launch App</span>
                <ArrowUpRight size={14} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                title="View Source on GitHub"
              >
                <FaGithub size={14} />
                <span>Source</span>
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
      className="w-full section-band-alt py-24 md:py-32 relative"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="font-mono text-xs tracking-wider uppercase text-slate-400 font-medium">
              04 · Production Systems
            </span>
          </div>
        </FadeUp>

        {/* Section Header */}
        <FadeUp delay={0.06}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Featured Live Applications
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2.5 max-w-2xl leading-relaxed">
                Full-stack web systems architected from schema modeling to reactive user interfaces. Every application is live and hosted in production.
              </p>
            </div>

            <div className="font-mono text-xs text-slate-300 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.09] flex items-center gap-2.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>All 3 Systems Active Online</span>
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
