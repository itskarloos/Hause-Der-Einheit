import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import Logo from '../assets/logo.png';

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
  onNavigateToBlog?: (sectionId: string) => void;
  onNavigateToSection?: (sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ isMenuOpen, setIsMenuOpen, language, setLanguage, onNavigateToBlog, onNavigateToSection }) => {
  const { t } = useTranslation();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsAtTop(currentScrollPos < 10);
      setIsScrolled(currentScrollPos > 50);

      // Update active section based on scroll position
      const sections = ['start', 'aliyah', 'mission', 'project', 'support', 'founder', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
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
    {
      id: 'about',
      label: t('nav.about'),
      children: [

        { id: 'mission', label: t('nav.mission') },
        { id: 'founder', label: t('nav.founder') },
        { id: 'aliyah', label: t('nav.aliyah') },
      ]
    },
    { id: 'project', label: t('nav.project') },
    { id: 'support', label: t('nav.support') },
    { id: 'contact', label: t('nav.contact') },
    { id: 'blog', label: t('nav.blog') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  const handleItemClick = (sectionId: string) => {
    setIsMenuOpen(false);
    setOpenDropdown(null);

    // If it's the blog link and we have a handler, use it
    if (sectionId === 'blog' && onNavigateToBlog) {
      onNavigateToBlog(sectionId);
      return;
    }

    // Default behavior: scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (onNavigateToSection) {
      // If we are on a page where the section doesn't exist, use the callback
      onNavigateToSection(sectionId);
    }
  };

  const toggleDropdown = (id: string) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  const isActive = (id: string, children?: { id: string }[]) => {
    if (activeSection === id) return true;
    if (children) {
      return children.some(child => child.id === activeSection);
    }
    return false;
  };

  return (
    <div className="relative">
      {/* Main Navigation */}
      <nav
        className={`fixed w-full transition-all duration-300 z-[100] border-b border-transparent
          ${isAtTop ? 'bg-transparent' : 'bg-white/80 backdrop-blur-lg shadow-sm border-white/20'}
          ${isScrolled ? 'py-2' : 'py-4'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <a href="#" className="block" onClick={(e) => { e.preventDefault(); handleItemClick('start'); }}>
                <img
                  src={Logo}
                  alt="Haus der Einheit"
                  className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`}
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {menuItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        className={`flex items-center text-sm font-medium tracking-wide transition-all duration-300
                          ${isAtTop ? 'text-white' : 'text-gray-800'}
                          ${isActive(item.id, item.children) ? 'text-[#2E8B57]' : 'hover:text-[#2E8B57]'}`}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-48 overflow-hidden">
                          {item.children.map((child) => (
                            <a
                              key={child.id}
                              href={`#${child.id}`}
                              onClick={(e) => { e.preventDefault(); handleItemClick(child.id); }}
                              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-[#2E8B57]/10 hover:text-[#2E8B57] transition-colors
                                ${activeSection === child.id ? 'bg-[#2E8B57]/5 text-[#2E8B57]' : ''}`}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => { e.preventDefault(); handleItemClick(item.id); }}
                      className={`text-sm font-medium tracking-wide transition-all duration-300 relative
                        ${isAtTop ? 'text-white' : 'text-gray-800'}
                        ${activeSection === item.id ? 'text-[#2E8B57]' : 'hover:text-[#2E8B57]'}`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2E8B57] transform scale-x-100 transition-transform duration-300" />
                      )}
                    </a>
                  )}
                </div>
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
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 left-8 text-white hover:text-[#2E8B57] transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-4 max-h-[80vh] overflow-y-auto px-4 py-8 w-full">
            {menuItems.map((item) => (
              <React.Fragment key={item.id}>
                {item.children ? (
                  <div className="flex flex-col items-center w-full">
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className={`text-lg text-white hover:text-[#2E8B57] transition-all duration-300 flex items-center
                        ${isActive(item.id, item.children) ? 'text-[#2E8B57]' : ''}`}
                    >
                      {item.label}
                      <ChevronDown className={`ml-2 w-5 h-5 transition-transform duration-300 ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 w-full flex flex-col items-center
                      ${openDropdown === item.id ? 'max-h-64 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      {item.children.map(child => (
                        <a
                          key={child.id}
                          href={`#${child.id}`}
                          onClick={(e) => { e.preventDefault(); handleItemClick(child.id); }}
                          className={`block py-2 text-base text-gray-300 hover:text-[#2E8B57] transition-colors
                             ${activeSection === child.id ? 'text-[#2E8B57]' : ''}`}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); handleItemClick(item.id); }}
                    className={`text-lg text-white hover:text-[#2E8B57] transition-all duration-300
                      ${activeSection === item.id ? 'text-[#2E8B57]' : ''}`}
                  >
                    {item.label}
                  </a>
                )}
              </React.Fragment>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center mt-6 px-4 py-2 text-white hover:text-[#2E8B57] transition-all duration-300 border border-white/30 rounded-full hover:border-[#2E8B57]"
            >
              <Globe className="w-5 h-5 mr-2" />
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;