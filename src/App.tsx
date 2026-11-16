import { useEffect, useState } from 'react';
import { BlogSection } from './components/BlogSection';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { CourseworkSection } from './components/CourseworkSection';
import { DetailModal, ModalState } from './components/DetailModal';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { ResumeSection } from './components/ResumeSection';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { SectionDivider } from './components/SectionDivider';
import { TestimonialSection } from './components/TestimonialSection';
import { ScrollAnimationCanvas } from './components/ScrollAnimationCanvas';
import { NAV_LINKS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modal, setModal] = useState<ModalState>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (let i = NAV_LINKS.length - 1; i >= 0; i -= 1) {
        const sectionEl = document.getElementById(NAV_LINKS[i].id);
        if (sectionEl && sectionEl.offsetTop <= scrollY) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTalkToMe = () => {
    setModal({ type: 'talk' });
  };

  return (
    <div className="relative min-h-screen text-[#3C3E41]">
      {/* Background Scroll Video Animation Canvas */}
      <ScrollAnimationCanvas />

      {/* Webpage Content Layer with subtle glassmorphic backdrop */}
      <div className="relative z-10 bg-[#ECF0F3]/80 backdrop-blur-[1px]">
        <ScrollProgressBar />
        <Navbar activeSection={activeSection} onTalkToMe={handleTalkToMe} />

        <main>
          <HeroSection
            onOpenDemos={() => setModal({ type: 'demos' })}
            onTalkToMe={handleTalkToMe}
          />
          <SectionDivider />
          <FeaturesSection
            onSelectFeature={(feature) =>
              setModal({ type: 'feature', data: feature })
            }
          />
          <SectionDivider />
          <PortfolioSection
            onSelectProject={(project) =>
              setModal({ type: 'project', data: project })
            }
          />
          <SectionDivider />
          <ResumeSection />
          <SectionDivider />
          <TestimonialSection />
          <SectionDivider />
          <ClientsSection />
          <SectionDivider />
          <CourseworkSection onTalkToMe={handleTalkToMe} />
          <SectionDivider />
          <BlogSection
            onSelectPost={(post) => setModal({ type: 'blog', data: post })}
          />
          <SectionDivider />
          <ContactSection />
        </main>

        <SectionDivider />
        <Footer />

        <DetailModal
          modal={modal}
          onClose={() => setModal(null)}
          onNavigateSection={handleNavigateSection}
        />
      </div>
    </div>
  );
}
