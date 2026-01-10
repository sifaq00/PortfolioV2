import { Navbar } from "../components/Navbar";
import { MobileNavbar } from "../components/MobileNavbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { BackToTop } from "../components/BackToTop";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection"; // [!code ++] Tambahkan ini
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { CertificatesSection } from "../components/CertificatesSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <BackToTop />
      <StarBackground />
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="block sm:hidden">
        <MobileNavbar />
      </div>
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection /> 
        <CertificatesSection /> 
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};