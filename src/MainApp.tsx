import React, { useState, useContext } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { LanguageContext } from './contexts/LanguageContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Aliyah from './components/Aliyah';
import Mission from './components/Mission';
import Project from './components/Project';
import Support from './components/Support';
import Founder from './components/founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

function MainApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <NavBar 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <Hero />
        <Vision />
        <Aliyah />
        <Mission />
        <Project />
        <Support />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default MainApp;