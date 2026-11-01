"use client";

import { profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="w-full border-t border-white/[0.08] bg-[#07090E] py-10"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Name mark & copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <span className="font-semibold text-white text-xs">
            {profile.name}
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-xs font-mono text-slate-500">
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
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <span className="text-slate-700">•</span>
          <a
            href="#home"
            className="hover:text-white transition-colors"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
