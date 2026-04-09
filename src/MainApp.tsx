import React, { useState, useContext } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { LanguageContext } from './contexts/LanguageContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

import Aliyah from './components/Aliyah';
import Mission from './components/Mission';
import Project from './components/Project';
import Union from './components/Union';
import Gallery from './components/Gallery';
import Support from './components/Support';
import Founder from './components/founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface MainAppProps {
  onNavigateToBlog: () => void;
  initialSection?: string;
  clearInitialSection?: () => void;
}

function MainApp({ onNavigateToBlog, initialSection, clearInitialSection }: MainAppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  React.useEffect(() => {
    if (initialSection) {
      setTimeout(() => {
        const element = document.getElementById(initialSection);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        if (clearInitialSection) clearInitialSection();
      }, 100);
    }
  }, [initialSection, clearInitialSection]);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <NavBar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        language={language}
        setLanguage={setLanguage}
        onNavigateToBlog={(sectionId) => {
          if (sectionId === 'blog') {
            onNavigateToBlog();
          }
        }}
      />
      <main>
        <Hero />

        <Aliyah />
        <Mission />
        <Project />
        <Union />
        <Gallery />
        <Support />
        <Founder />
        <Contact />
      </main>
      <Footer onNavigateToBlog={onNavigateToBlog} />
    </div>
  );
}

export default MainApp;