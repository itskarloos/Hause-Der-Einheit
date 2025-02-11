import React, { useState, useContext } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { LanguageContext } from './contexts/LanguageContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Mission from './components/Mission';
import Workshop from './components/Workshop';
import Support from './components/Support';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Founder from './components/founder';

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
        <About />
        <Project />
        <Mission />
        <Workshop />
        <Support />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default MainApp;