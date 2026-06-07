'use client';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }: { theme: 'dark' | 'light'; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-lg py-4 shadow-lg border-b border-foreground/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group" aria-label="Aarya Shrivaastava logo">
          <div className="w-9 h-9 rounded-lg btn-shimmer flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
            AS
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center justify-end gap-10 order-last">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link text-xs font-semibold tracking-widest uppercase transition-colors ${
                  activeSection === href.replace('#', '')
                    ? 'text-red-400'
                    : 'text-foreground opacity-50 hover:opacity-100'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-3 ml-auto mr-10">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 transition-all hover:bg-red-500/10 hover:scale-110 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 6.343A9 9 0 115.636 5.636m12.728 12.728A9 9 0 015.636 5.636"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            )}
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/AaryaShrivaastava"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 transition-all hover:bg-red-500/10 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 transition-all hover:bg-red-500/10 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* HackerRank */}
          <a
            href="https://hackerrank.com/profile/aarya_shrivaast2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 transition-all hover:bg-red-500/10 hover:scale-110"
            aria-label="HackerRank Profile"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908a.405.405 0 00-.405-.405H8.2a.405.405 0 00-.405.405v10.359c0 .224.181.405.405.405h1.358c.224 0 .405-.181.405-.405v-4.119h4.074v4.269c0 .142.115.258.258.258h1.498c.141 0 .258-.116.258-.258V7.057a.258.258 0 00-.258-.258h-1.498z"/>
            </svg>
          </a>

          {/* Codolio */}
          <a
            href="https://codolio.com/profile/ApexVoyager30"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 transition-all hover:bg-red-500/10 hover:scale-110"
            aria-label="Codolio Profile"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.001 2.4A5.6 5.6 0 002.4 8v8a5.6 5.6 0 005.601 5.6h8A5.6 5.6 0 0021.6 16V8A5.6 5.6 0 0016 2.4h-8zm.001 3.2h8a2.4 2.4 0 012.4 2.4v8a2.4 2.4 0 01-2.4 2.4H8.002A2.4 2.4 0 015.6 16V8A2.4 2.4 0 018.002 5.6zM9.6 8a1.6 1.6 0 100 3.2A1.6 1.6 0 009.6 8zm4.8 4.8a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"/>
            </svg>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:bg-red-500/10 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 6.343A9 9 0 115.636 5.636m12.728 12.728A9 9 0 015.636 5.636"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            className="text-foreground p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ opacity: 1 }} />
            <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} style={{ opacity: 1 }} />
            <div className={`w-6 h-0.5 bg-foreground transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ opacity: 1 }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass mt-2 mx-4 rounded-2xl p-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 px-4 text-foreground opacity-70 hover:opacity-100 hover:bg-red-500/10 rounded-lg transition-all"
            >
              {label}
            </a>
          ))}
          {/* Social icons row in mobile menu */}
          <div className="flex items-center justify-center gap-3 pt-4 mt-2 border-t border-white/10">
            <a href="https://github.com/AaryaShrivaastava" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 transition-all hover:bg-red-500/10">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-10 h-10 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 transition-all hover:bg-red-500/10">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://hackerrank.com/profile/aarya_shrivaast2" target="_blank" rel="noopener noreferrer" aria-label="HackerRank" className="flex items-center justify-center w-10 h-10 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 transition-all hover:bg-red-500/10">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908a.405.405 0 00-.405-.405H8.2a.405.405 0 00-.405.405v10.359c0 .224.181.405.405.405h1.358c.224 0 .405-.181.405-.405v-4.119h4.074v4.269c0 .142.115.258.258.258h1.498c.141 0 .258-.116.258-.258V7.057a.258.258 0 00-.258-.258h-1.498z"/></svg>
            </a>
            <a href="https://codolio.com/profile/ApexVoyager30" target="_blank" rel="noopener noreferrer" aria-label="Codolio" className="flex items-center justify-center w-10 h-10 rounded-full glass border border-red-500/25 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 transition-all hover:bg-red-500/10">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.001 2.4A5.6 5.6 0 002.4 8v8a5.6 5.6 0 005.601 5.6h8A5.6 5.6 0 0021.6 16V8A5.6 5.6 0 0016 2.4h-8zm.001 3.2h8a2.4 2.4 0 012.4 2.4v8a2.4 2.4 0 01-2.4 2.4H8.002A2.4 2.4 0 015.6 16V8A2.4 2.4 0 018.002 5.6zM9.6 8a1.6 1.6 0 100 3.2A1.6 1.6 0 009.6 8zm4.8 4.8a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
