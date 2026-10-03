import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollBackgroundLoader from "@/components/ScrollBackgroundLoader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
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
        <EducationSection />
        <ExperienceSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
