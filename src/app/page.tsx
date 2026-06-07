'use client';

import { useEffect, useState } from "react";
import { NeuralNoise } from "@/components/ui/neural-noise";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const resolved = savedTheme ?? 'dark';
    setTheme(resolved);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(resolved);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(nextTheme);
  };

  return (
    <main
      className="relative min-h-screen transition-colors duration-500"
      style={{ color: 'var(--foreground)' }}
    >
      {/* ── Layer order (bottom → top) ──
          z: -20  solid base colour  (black / white)
          z: -10  WebGL canvas — transparent bg, red neurons glow
          z:  0+  page content (cards, text, etc.)
      */}

      {/* Solid base colour — sits BELOW the WebGL canvas */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--background)',
          zIndex: -20,
          pointerEvents: 'none',
        }}
      />

      {/* WebGL Neural Background — transparent, red neurons float on base */}
      <NeuralNoise
        color={[0.9, 0.2, 0.4]}
        opacity={0.95}
        speed={0.001}
      />

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
