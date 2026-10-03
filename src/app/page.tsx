import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollBackgroundLoader from "@/components/ScrollBackgroundLoader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* Fixed scroll-driven background (behind everything) */}
      <ScrollBackgroundLoader />

      {/* Fixed navigation */}
      <Navbar />

      {/* Page content */}
      <main id="main-content" tabIndex={-1} aria-label="Main content">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <RecognitionSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
