'use client';
import { useEffect, useState } from 'react';

const ROLES = [
  'B.Tech CSE Student',
  'C / C++ Developer',
  'Python Programmer',
  'Open Source Contributor',
  'PR & Outreach Lead',
  'ML Enthusiast',
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        }, 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex(r => (r + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex]);

  const SOCIAL = [
    {
      name: 'GitHub',
      url: 'https://github.com/AaryaShrivaastava',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'HackerRank',
      url: 'https://hackerrank.com/profile/aarya_shrivaast2',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908a.405.405 0 00-.405-.405H8.2a.405.405 0 00-.405.405v10.359c0 .224.181.405.405.405h1.358c.224 0 .405-.181.405-.405v-4.119h4.074v4.269c0 .142.115.258.258.258h1.498c.141 0 .258-.116.258-.258V7.057a.258.258 0 00-.258-.258h-1.498z"/>
        </svg>
      ),
    },
    {
      name: 'Codolio',
      url: 'https://codolio.com/profile/ApexVoyager30',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.001 2.4A5.6 5.6 0 002.4 8v8a5.6 5.6 0 005.601 5.6h8A5.6 5.6 0 0021.6 16V8A5.6 5.6 0 0016 2.4h-8zm.001 3.2h8a2.4 2.4 0 012.4 2.4v8a2.4 2.4 0 01-2.4 2.4H8.002A2.4 2.4 0 015.6 16V8A2.4 2.4 0 018.002 5.6zM9.6 8a1.6 1.6 0 100 3.2A1.6 1.6 0 009.6 8zm4.8 4.8a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-red-500/10 animate-spin-slow" />
        <div className="absolute w-[420px] h-[420px] rounded-full border border-red-500/8" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-red-500/30 text-xs text-red-400 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Open to Software Internships
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-foreground mb-4 animate-fade-in-up delay-100">
          Aarya{' '}
          <span className="gradient-text glow-text">Shrivaastava</span>
        </h1>

        {/* Typing role */}
        <div className="h-12 flex items-center justify-center mb-6 animate-fade-in-up delay-200">
          <span className="text-xl sm:text-2xl font-medium text-foreground opacity-70 font-mono">
            {displayed}
            <span className="animate-blink text-red-400">|</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="text-foreground opacity-60 text-base sm:text-lg max-w-2xl mx-auto mb-4 animate-fade-in-up delay-300 leading-relaxed">
          Final year CSE student at{' '}
          <span className="text-red-400 font-semibold opacity-100">VIT Bhopal</span>, crafting efficient &
          scalable software. HackerRank{' '}
          <span className="text-yellow-400 font-bold opacity-100">4⭐ in C++</span> · Open Source Contributor ·
          AI Club PR Lead.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up delay-500">
          <a
            href="#resume"
            className="btn-shimmer px-8 py-3 rounded-full text-white font-semibold text-sm shadow-lg animate-pulse-glow"
          >
            📄 View Resume
          </a>
          <a
            href="#experience"
            className="px-8 py-3 rounded-full glass border border-white/20 text-foreground font-semibold text-sm hover:border-red-400 hover:text-red-400 transition-all"
          >
            Explore Work ↓
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in-up delay-600">
          {SOCIAL.map(({ name, url, icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              className="w-11 h-11 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:text-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground opacity-40 text-xs animate-float">
        <span>scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-red-400 to-transparent" />
      </div>
    </section>
  );
}
