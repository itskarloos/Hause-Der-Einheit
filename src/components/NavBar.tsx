import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import Logo from '../assets/logo.png';

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

const NavBar: React.FC<NavBarProps> = ({ isMenuOpen, setIsMenuOpen, language, setLanguage }) => {
  const { t } = useTranslation();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsAtTop(currentScrollPos < 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'start', label: t('nav.start') },
    { id: 'project', label: t('nav.project') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  const handleItemClick = () => {
    // Close mobile menu when a menu item is clicked
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full transition-all duration-300 z-50 
      ${isAtTop ? 'bg-transparent' : 'bg-white/90 backdrop-blur-sm shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              <img src={Logo} alt="Haus der Einheit" className="h-14" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`hover:text-[#2E8B57] transition-colors
                  ${isAtTop ? 'text-white' : 'text-gray-700'}`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className={`flex items-center hover:text-[#2E8B57] transition-colors
                ${isAtTop ? 'text-white' : 'text-gray-700'}`}
            >
              <Globe className="w-5 h-5 mr-1" />
              {language.toUpperCase()}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hover:text-[#2E8B57] transition-colors
                ${isAtTop ? 'text-white' : 'text-gray-700'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block px-3 py-2 text-gray-700 hover:text-[#2E8B57] transition-colors"
                onClick={handleItemClick}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-[#2E8B57] transition-colors"
            >
              <Globe className="w-5 h-5 mr-1" />
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;