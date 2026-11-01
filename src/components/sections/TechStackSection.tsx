"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiRender,
  SiGit,
  SiPostman,
  SiGeeksforgeeks,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Coffee, Database, KeyRound, Network, Server, ShieldCheck, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "cloud" | "core";
  icon: ReactNode;
  level: string;
  desc: string;
  glowColor: string;
}

const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: <SiReact className="text-[#61DAFB]" size={24} />,
    level: "Advanced",
    desc: "Hooks, Context API, state trees, client performance optimization",
    glowColor: "rgba(97, 218, 251, 0.15)",
  },
  {
    name: "Redux Toolkit",
    category: "frontend",
    icon: <SiRedux className="text-[#764ABC]" size={24} />,
    level: "Proficient",
    desc: "Centralized state management, async thunks, action dispatches",
    glowColor: "rgba(118, 74, 188, 0.15)",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: <SiJavascript className="text-[#F7DF1E]" size={24} />,
    level: "Expert",
    desc: "Asynchronous I/O, closures, DOM lifecycle & modern web standards",
    glowColor: "rgba(247, 223, 30, 0.15)",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: <SiTailwindcss className="text-[#38BDF8]" size={24} />,
    level: "Expert",
    desc: "Responsive design systems, micro-interactions & modern themes",
    glowColor: "rgba(56, 189, 248, 0.15)",
  },
  {
    name: "HTML5 / CSS3",
    category: "frontend",
    icon: <SiHtml5 className="text-[#E34F26]" size={24} />,
    level: "Expert",
    desc: "Semantic architecture, flex/grid layouts & accessibility (a11y)",
    glowColor: "rgba(227, 79, 38, 0.15)",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: <SiNodedotjs className="text-[#5FA04E]" size={24} />,
    level: "Advanced",
    desc: "Event-driven runtime, non-blocking architecture & microservices",
    glowColor: "rgba(95, 160, 78, 0.15)",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: <SiExpress className="text-white" size={24} />,
    level: "Advanced",
    desc: "Modular routers, custom middlewares, validation & REST services",
    glowColor: "rgba(255, 255, 255, 0.15)",
  },
  {
    name: "RESTful APIs",
    category: "backend",
    icon: <Network className="text-amber-400" size={24} />,
    level: "Expert",
    desc: "Resource modeling, payload optimization & CORS/cookie isolation",
    glowColor: "rgba(251, 191, 36, 0.15)",
  },
  {
    name: "JWT & RBAC Security",
    category: "backend",
    icon: <KeyRound className="text-rose-400" size={24} />,
    level: "Advanced",
    desc: "Role-Based Access Control, HTTP-only session cookies & tokens",
    glowColor: "rgba(244, 63, 94, 0.15)",
  },

  // Databases & Cloud
  {
    name: "MongoDB",
    category: "cloud",
    icon: <SiMongodb className="text-[#47A248]" size={24} />,
    level: "Advanced",
    desc: "Mongoose ODM schemas, index tuning & aggregation pipelines",
    glowColor: "rgba(71, 162, 72, 0.15)",
  },
  {
    name: "MySQL",
    category: "cloud",
    icon: <SiMysql className="text-[#4479A1]" size={24} />,
    level: "Proficient",
    desc: "Relational schema design, ACID compliance & query optimization",
    glowColor: "rgba(68, 121, 161, 0.15)",
  },
  {
    name: "AWS Cloud",
    category: "cloud",
    icon: <FaAws className="text-[#FF9900]" size={24} />,
    level: "Certified",
    desc: "Certified Cloud Practitioner · S3, EC2, IAM & cloud principles",
    glowColor: "rgba(255, 153, 0, 0.15)",
  },
  {
    name: "Vercel & Render",
    category: "cloud",
    icon: <SiVercel className="text-white" size={24} />,
    level: "Expert",
    desc: "Edge networks, production deployments & continuous delivery",
    glowColor: "rgba(255, 255, 255, 0.15)",
  },

  // Core & Languages
  {
    name: "Java",
    category: "core",
    icon: <Coffee className="text-[#ED8B00]" size={24} />,
    level: "Advanced",
    desc: "Object-oriented design, Collections framework & algorithmic DSA",
    glowColor: "rgba(237, 139, 0, 0.15)",
  },
  {
    name: "SQL",
    category: "core",
    icon: <Database className="text-sky-400" size={24} />,
    level: "Advanced",
    desc: "Complex joins, indexing analysis & database query tuning",
    glowColor: "rgba(56, 189, 248, 0.15)",
  },
  {
    name: "Git & GitHub",
    category: "core",
    icon: <SiGit className="text-[#F05032]" size={24} />,
    level: "Expert",
    desc: "Branching strategies, Git workflows, review cycles & versioning",
    glowColor: "rgba(240, 80, 50, 0.15)",
  },
  {
    name: "Postman",
    category: "core",
    icon: <SiPostman className="text-[#FF6C37]" size={24} />,
    level: "Expert",
    desc: "Endpoint test suites, automated assertions & mock environments",
    glowColor: "rgba(255, 108, 55, 0.15)",
  },
  {
    name: "160+ DSA Problems",
    category: "core",
    icon: <SiGeeksforgeeks className="text-[#2F8D46]" size={24} />,
    level: "Milestone",
    desc: "GeeksforGeeks problem solving: Trees, Graphs, DP & Heaps",
    glowColor: "rgba(47, 141, 70, 0.15)",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & Security" },
  { id: "cloud", label: "Databases & Cloud" },
  { id: "core", label: "Languages & Core" },
];

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeTab);

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="w-full section-band py-24 md:py-32 relative"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="font-mono text-xs tracking-wider uppercase text-slate-400 font-medium">
              02 · Technical Repertoire
            </span>
          </div>
        </FadeUp>

        {/* Section Header & Interactive Filter Bar */}
        <FadeUp delay={0.06}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Architectural Tech Stack
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2.5 max-w-xl leading-relaxed">
                The languages, frameworks, databases, and cloud infrastructure powering my production applications and enterprise modules.
              </p>
            </div>

            {/* Aesthetic Filter Pills */}
            <div className="flex flex-wrap gap-1 p-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? "bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-white font-semibold border border-sky-400/30 shadow-sm"
                      : "text-slate-400 hover:text-white border border-transparent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Dynamic Skills Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-5 flex flex-col justify-between h-full group relative overflow-hidden"
            >
              {/* Subtle Corner Glow Accent */}
              <div 
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: skill.glowColor }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-white/20 flex items-center justify-center transition-all group-hover:scale-105">
                    {skill.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.07] font-mono text-[10px] text-slate-300 font-medium">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span className="capitalize">{skill.category}</span>
                <span className="text-emerald-400 font-medium">● Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
