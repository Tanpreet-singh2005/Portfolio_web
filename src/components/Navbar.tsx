"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationRegular,
  DismissRegular,
  DocumentRegular
} from "@fluentui/react-icons";
import { profile } from "@/data/content";

const NAV_LINKS = [
  { label: "About",       href: "#about" },
  { label: "Skills",      href: "#skills" },
  { label: "Experience",  href: "#experience" },
  { label: "Projects",    href: "#projects" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [onPink, setOnPink] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Adapt to non-pink bg after scrolling down
      setOnPink(y < window.innerHeight * 0.15);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Observer for active nav items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
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

  const textColor = onPink ? "text-white" : "text-ink";
  const hoverColor = onPink ? "hover:text-gold" : "hover:text-deep-brown";
  const logoColor = onPink ? "text-white" : "text-deep-brown";

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-4 md:pt-6 transition-all duration-300"
      >
        <nav
          aria-label="Main navigation"
          className="max-w-[1400px] mx-auto px-6 flex items-start justify-between w-full relative"
        >
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
            aria-label="Back to top"
            className={`pointer-events-auto font-display text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 z-10 mt-1.5 ${logoColor}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {/*Aarya Shrivaastava*/}
          </a>

          {/* Desktop links - FLOATING PILL */}
          <ul 
            className={[
              "hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 p-1.5 rounded-full backdrop-blur-md border pointer-events-auto transition-all duration-300",
              onPink 
                ? "bg-white/10 border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
                : "bg-white/70 border-ink/10 shadow-sm"
            ].join(" ")}
            role="list"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className={`relative z-10 px-4 py-2 font-mono text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 block ${isActive ? (onPink ? "text-white" : "text-deep-brown") : textColor} ${hoverColor}`}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full z-0 ${onPink ? "bg-white/20" : "bg-ink/5"}`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Social Icons & Resume CTA */}
          <div className="hidden lg:flex items-center gap-3 z-10 pointer-events-auto mt-1">
            {/* Codolio */}
            <a href={profile.links.codolio} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${onPink ? "border-white/30 text-white hover:bg-white/20" : "border-ink/20 text-ink hover:bg-ink/5"}`} aria-label="Codolio" title="Codolio">
              <img src="/codolio.svg" alt="Codolio" className="w-[14px] h-[14px]" />
            </a>
            {/* GitHub */}
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${onPink ? "border-white/30 text-white hover:bg-white/20" : "border-ink/20 text-ink hover:bg-ink/5"}`} aria-label="GitHub" title="GitHub">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${onPink ? "border-white/30 text-white hover:bg-white/20" : "border-ink/20 text-ink hover:bg-ink/5"}`} aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            {/* X */}
            <a href={profile.links.x} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${onPink ? "border-white/30 text-white hover:bg-white/20" : "border-ink/20 text-ink hover:bg-ink/5"}`} aria-label="X" title="X">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>

            {/* <div className={`w-px h-5 mx-2 ${onPink ? "bg-white/30" : "bg-ink/20"}`} />

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume (opens in new tab)"
              className={[
                "inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-[13px] font-semibold",
                "border transition-all duration-200",
                onPink
                  ? "border-white/60 text-white hover:bg-white hover:text-hero-pink"
                  : "border-deep-brown/30 text-deep-brown hover:bg-deep-brown hover:text-white",
              ].join(" ")}
            >
              <DocumentRegular fontSize={16} />
              Résumé
            </a> */}
          </div>

          {/* Mobile burger */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors z-50 pointer-events-auto ${mobileOpen ? "text-ink" : textColor}`}
          >
            {mobileOpen ? (
              <DismissRegular fontSize={24} />
            ) : (
              <NavigationRegular fontSize={24} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center lg:hidden"
          >
            <ul className="flex flex-col items-center gap-6" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="block text-ink font-display text-3xl font-medium tracking-wide hover:text-deep-brown transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              
              <li className="pt-6 mt-6 border-t border-ink/10 flex flex-wrap justify-center gap-4 w-[80%] max-w-sm">
                 <a href={profile.links.codolio} className="w-10 h-10 flex items-center justify-center rounded-full bg-ink/5 text-ink hover:bg-ink/10">
                   <img src="/codolio.svg" alt="Codolio" className="w-[18px] h-[18px]" />
                 </a>
                 <a href={profile.links.github} className="w-10 h-10 flex items-center justify-center rounded-full bg-ink/5 text-ink hover:bg-ink/10">
                   <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                 </a>
                 <a href={profile.links.linkedin} className="w-10 h-10 flex items-center justify-center rounded-full bg-ink/5 text-ink hover:bg-ink/10">
                   <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                 </a>
                 <a href={profile.links.x} className="w-10 h-10 flex items-center justify-center rounded-full bg-ink/5 text-ink hover:bg-ink/10">
                   <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                 </a>
              </li>
              <li className="pt-2">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-deep-brown text-white text-[15px] font-medium hover:scale-95 transition-transform"
                >
                  <DocumentRegular fontSize={18} />
                  Download Résumé
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
