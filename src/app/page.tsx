import { NeuralNoise } from "@/components/ui/neural-noise";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* NeuralNoise WebGL Background — purple/violet palette */}
      <NeuralNoise
        color={[0.55, 0.15, 0.95]}
        opacity={0.85}
        speed={0.0008}
      />

      {/* Deep dark base so text stays readable */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: '#050510', zIndex: -11 }}
      />

      {/* Subtle vignette overlay for depth */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,16,0.7) 100%)',
          zIndex: -9,
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ResumeSection />
      <Footer />
    </main>
  );
}
