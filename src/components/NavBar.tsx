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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsAtTop(currentScrollPos < 10);
      setIsScrolled(currentScrollPos > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Main Navigation */}
      <nav 
        className={`fixed w-full transition-all duration-300 z-[100]
          ${isAtTop ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-md'}
          ${isScrolled ? 'py-2' : 'py-4'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <a href="#" className="block">
                <img 
                  src={Logo} 
                  alt="Haus der Einheit" 
                  className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`} 
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium tracking-wide hover:text-[#2E8B57] transition-all duration-300
                    ${isAtTop ? 'text-white' : 'text-gray-800'}`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full border transition-all duration-300
                  ${isAtTop 
                    ? 'text-white border-white/50 hover:bg-white/10' 
                    : 'text-gray-800 border-gray-200 hover:bg-gray-50'}`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300
                  ${isAtTop 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-gray-800 hover:bg-gray-100'}`}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Container */}
      <div 
        className={`fixed inset-0 z-[90] md:hidden
          ${isMenuOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-xl transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ 
            top: isScrolled ? '64px' : '80px',
            height: `calc(100vh - ${isScrolled ? '64px' : '80px'})`
          }}
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 px-4 pt-6 pb-4 space-y-1 overflow-y-auto">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block px-4 py-3 text-gray-800 hover:text-[#2E8B57] hover:bg-gray-50 rounded-lg transition-all duration-300"
                  onClick={handleItemClick}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full px-4 py-3 text-gray-800 hover:text-[#2E8B57] hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                <Globe className="w-5 h-5 mr-2" />
                {language.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;