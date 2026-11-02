import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Memberships } from './components/Memberships';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { BackgroundEffects } from './components/BackgroundEffects';
import { SectionDivider } from './components/SectionDivider';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030611] text-slate-100 selection:bg-blue-600/30 selection:text-white overflow-x-hidden">
      {/* Dynamic Ambient Background System */}
      <BackgroundEffects />

      {/* Sticky Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Sections with Decorative Dividers */}
      <main className="relative z-10">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />
        
        <SectionDivider label="Profile & Background" index="1" />
        <About />
        
        <SectionDivider label="Technical Capabilities" index="2" />
        <Skills />
        
        <SectionDivider label="Featured Systems" index="3" />
        <Projects />
        
        <SectionDivider label="Industry Experience" index="4" />
        <Experience />
        
        <SectionDivider label="Credentials & Coursework" index="5" />
        <Certifications />
        
        <SectionDivider label="Leadership & Affiliations" index="6" />
        <Memberships />
        
        <SectionDivider label="Linguistic Capabilities" index="7" />
        <Languages />
        
        <SectionDivider label="Initiate Connection" index="8" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button (Convenient for Phone & PC) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-5 sm:right-8 z-30 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700/80 hover:border-blue-500 shadow-2xl shadow-black/80 flex items-center justify-center transition-all duration-300 active:scale-90 group backdrop-blur-md"
          title="Back to Top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={setIsCommandPaletteOpen}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </div>
  );
}

export default App;
