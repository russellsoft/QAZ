import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../types';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/ru/' || location.pathname === '/en/' || location.pathname === '/cn/'

  // Check if page is scrolled for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Change language and navigate
  const handleLanguageChange = (newLang: Language) => {
    // Get current path without language prefix
    const currentPathWithoutLang = location.pathname.replace(/^\/(ru|en|cn)/, '');
    
    // Navigate to the same page but with new language prefix
    navigate(`/${newLang}${currentPathWithoutLang}`);
    
    // Update language in context
    setLanguage(newLang);
  };

  const navigationItems = [
    { name: t('nav.home'), path: `/${language}/` },
    { name: t('nav.products'), path: `/${language}/products` },
    { name: t('nav.about'), path: `/${language}/about` },
    { name: t('nav.contacts'), path: `/${language}/contacts` },
    { name: t('nav.news'), path: `/${language}/news` },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHome ? (isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6') : 'bg-white shadow-md py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigate(`/${language}/`)}
          >
            <span className={`text-2xl font-bold ${isHome ? (isScrolled ? 'text-primary-700' : 'text-white') : 'text-primary-700'}`}>QAZ BOXZ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                }}
                className={`${
                  isHome ? (isScrolled ? 'text-neutral-800' : 'text-white') : 'text-neutral-800'
                } hover:text-primary-500 transition-colors duration-200`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Language Selector - Desktop */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 ${
                    isHome ? (isScrolled ? 'text-neutral-800' : 'text-white') : 'text-neutral-800'
                } hover:text-primary-500`}
              >
                <span>{language.toUpperCase()}</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {(['ru', 'en', 'cn'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      language === lang ? 'bg-primary-50 text-primary-700' : 'text-neutral-800'
                    } hover:bg-primary-50 hover:text-primary-700`}
                  >
                    {lang === 'ru' ? 'Русский' : lang === 'en' ? 'English' : '中文'}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className={isHome ? (isScrolled ? 'text-neutral-800' : 'text-white') : 'text-neutral-800'} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg absolute w-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navigationItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className="py-3 text-neutral-800 hover:text-primary-600 border-b border-neutral-100"
              >
                {item.name}
              </a>
            ))}

            {/* Language Selector - Mobile */}
            <div className="py-4 flex space-x-4">
              {(['ru', 'en', 'cn'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    handleLanguageChange(lang);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded ${
                    language === lang 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-neutral-100 text-neutral-800'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;