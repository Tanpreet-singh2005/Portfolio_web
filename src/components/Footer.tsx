"use client";

import { profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="w-full border-t border-white/5 bg-[#060910] py-12"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Name mark & copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-white text-sm">
            {profile.name}
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-xs font-mono text-slate-400">
            Full-Stack Software Engineer &copy; {year}
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
          <span className="text-slate-700">•</span>
          <a
            href="#home"
            className="hover:text-cyan-400 transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
