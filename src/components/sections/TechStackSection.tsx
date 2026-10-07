"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/FadeUp";

const ALL_SKILLS = [
  // Frontend
  { name: "React.js", category: "frontend", icon: "⚛️", color: "#61DAFB", level: "Advanced", desc: "Hooks, Context, SSR, Client Optimization" },
  { name: "Redux / Toolkit", category: "frontend", icon: "🔄", color: "#764ABC", level: "Proficient", desc: "Global State Trees & Action Dispatchers" },
  { name: "JavaScript (ES6+)", category: "frontend", icon: "⚡", color: "#F7DF1E", level: "Expert", desc: "Async/Await, Closures, DOM, Modern Specs" },
  { name: "Tailwind CSS", category: "frontend", icon: "🎨", color: "#38BDF8", level: "Expert", desc: "Responsive Design, Glassmorphism & Themes" },
  { name: "HTML5 / CSS3", category: "frontend", icon: "🌐", color: "#E34F26", level: "Expert", desc: "Semantic Markup, Flexbox, Grid, Animations" },

  // Backend
  { name: "Node.js", category: "backend", icon: "🟢", color: "#339933", level: "Advanced", desc: "Event-driven runtime & asynchronous I/O" },
  { name: "Express.js", category: "backend", icon: "🚂", color: "#FFFFFF", level: "Advanced", desc: "Modular routers, middleware & REST endpoints" },
  { name: "RESTful APIs", category: "backend", icon: "🔌", color: "#F97316", level: "Expert", desc: "Microservices design & payload optimization" },
  { name: "JWT Auth & RBAC", category: "backend", icon: "🔒", color: "#EC4899", level: "Advanced", desc: "Role-Based Access & HTTP-only cookies" },

  // Databases & Cloud
  { name: "MongoDB", category: "cloud", icon: "🍃", color: "#47A248", level: "Advanced", desc: "Mongoose ODM, Document indexing & Aggregation" },
  { name: "MySQL", category: "cloud", icon: "🐬", color: "#4479A1", level: "Proficient", desc: "Relational schema design & normalization" },
  { name: "AWS Cloud", category: "cloud", icon: "☁️", color: "#FF9900", level: "Certified", desc: "Certified Cloud Practitioner · S3, EC2, IAM" },
  { name: "Vercel & Render", category: "cloud", icon: "▲", color: "#00E5FF", level: "Expert", desc: "Edge hosting, CI/CD pipelines & production sync" },

  // Languages & Core
  { name: "Java", category: "foundations", icon: "☕", color: "#ED8B00", level: "Advanced", desc: "OOP principles, collections & DSA solutions" },
  { name: "SQL", category: "foundations", icon: "📊", color: "#00758F", level: "Advanced", desc: "Complex joins, indexing & query tuning" },
  { name: "Git & GitHub", category: "foundations", icon: "🐙", color: "#F05032", level: "Expert", desc: "Branching workflows, version control & PR reviews" },
  { name: "Postman", category: "foundations", icon: "📮", color: "#FF6C37", level: "Expert", desc: "API testing, environment mocking & assertions" },
  { name: "160+ DSA Problems", category: "foundations", icon: "🧠", color: "#34D399", level: "Milestone", desc: "Solved on GeeksforGeeks (Trees, DP, Graphs)" },
];

const CATEGORIES = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & Security" },
  { id: "cloud", label: "Databases & Cloud" },
  { id: "foundations", label: "Languages & DSA" },
];

const MARQUEE_ITEMS = [
  "React.js", "Node.js", "Express.js", "MongoDB", "AWS Cloud Practitioner",
  "Redux Toolkit", "Java", "JavaScript", "SQL", "JWT Authentication",
  "REST APIs", "Tailwind CSS", "160+ DSA Solved", "Agile / Scrum", "Postman", "Git & GitHub"
];

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all" 
    ? ALL_SKILLS 
    : ALL_SKILLS.filter(s => s.category === activeTab);

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="w-full section-band-1 py-24 md:py-36 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs tracking-widest uppercase text-cyan-300 font-semibold">
              02 · Technical Repertoire
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Architectural Tech Stack
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-xl">
                The languages, frameworks, and cloud services powering my production platforms and enterprise intern modules.
              </p>
            </div>

            {/* Filter Pills with motion layout */}
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? "text-cyan-300"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="relative z-10">{cat.label}</span>
                  {activeTab === cat.id && (
                    <motion.div
                      layoutId="tech-filter-pill"
                      className="absolute inset-0 rounded-xl bg-cyan-500/20 border border-cyan-500/40 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Dynamic Skills Bento Grid with Animated Transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-5 rounded-2xl bg-[#0B111E]/90 border border-slate-700/60 hover:border-cyan-500/50 hover:bg-[#0D1526] transition-all duration-300 flex flex-col justify-between h-full shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
              >
                {/* Ambient glow accent in card corner */}
                <div 
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl group-hover:scale-115 transition-transform duration-200 inline-block">{skill.icon}</span>
                    <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 font-mono text-[10px] text-slate-300 font-semibold group-hover:border-cyan-500/30">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <span>{skill.name}</span>
                    <span 
                      className="w-2 h-2 rounded-full inline-block shrink-0 shadow-sm" 
                      style={{ backgroundColor: skill.color }} 
                    />
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                  <span className="uppercase tracking-wider">{skill.category}</span>
                  <span className="text-cyan-400">★ Ready</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Infinite Live Animated Marquee Strip */}
        <FadeUp delay={0.25}>
          <div className="relative py-4 rounded-2xl bg-[#080D1A]/90 border border-slate-800 shadow-2xl overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-[#080D1A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-[#080D1A] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-3">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
                <div
                  key={`${item}-${idx}`}
                  className="px-4 py-2 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 font-mono text-xs text-slate-300 whitespace-nowrap transition-all flex items-center gap-2.5 shrink-0 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
