"use client";

import { useState, useEffect } from "react";
import { profile } from "@/data/content";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const NAV_LINKS = [
  { label: "About",       href: "#about" },
  { label: "Skills",      href: "#skills" },
  { label: "Experience",  href: "#experience" },
  { label: "Projects",    href: "#projects" },
  { label: "Credentials", href: "#recognition" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Intersection observer for section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );

    const sections = NAV_LINKS.map(l => document.getElementById(l.href.substring(1))).filter(Boolean);
    sections.forEach(s => observer.observe(s!));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#080C16]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full"
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          aria-label="Tanpreet Singh — Back to top"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-400/30 group-hover:border-sky-400/60 flex items-center justify-center font-mono font-bold text-white text-xs transition-all shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            TS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-sky-300 transition-colors">
              Tanpreet Singh
            </span>
            <span className="font-mono text-[11px] text-slate-400 hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Ex-Grasim SDE Intern
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-inner" role="list">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all block ${
                    isActive
                      ? "bg-white/10 text-white font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action Icons & Button */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-sky-400/40 transition-colors flex items-center justify-center shadow-sm"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <FaGithub size={15} />
          </a>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-sky-400/40 transition-colors flex items-center justify-center shadow-sm"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedin size={15} />
          </a>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="ml-1.5 px-4.5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs tracking-tight hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.25)]"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-slate-300"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#080C16]/98 border-b border-white/10 px-6 py-6"
        >
          <ul className="flex flex-col gap-3" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="block text-base font-medium text-slate-300 hover:text-white py-1.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-300 hover:text-white"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-300 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
                className="px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
