import { useState, useEffect } from 'react';
import { useLanguage, type Section } from '../App';
import { cn } from '../lib/utils';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { lang, setLang, t, activeSection, setActiveSection } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: Section }[] = [
    { name: t.nav.home, id: 'home' },
    { name: t.nav.about, id: 'about' },
    { name: t.nav.services, id: 'services' },
    { name: t.nav.courses, id: 'courses' },
    { name: t.nav.portfolio, id: 'portfolio' },
    { name: t.nav.contact, id: 'contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled || activeSection !== 'home' ? "glass py-3 shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => setActiveSection('home')}
          className="flex items-center gap-3 group"
        >
          <img 
            src="https://i.postimg.cc/yYmpncQk/Rassy.png" 
            alt="Ranssy Graphics Logo" 
            className="w-10 h-10 object-contain transform group-hover:scale-110 transition-transform"
            referrerPolicy="no-referrer"
          />
          <span className="font-display text-xl font-bold tracking-tight text-white uppercase hidden sm:block">
            Ranssy <span className="text-secondary">Graphics</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => setActiveSection(link.id)}
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === link.id ? "text-secondary" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </button>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'sw' : 'en')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full glass-button text-xs font-semibold text-white"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'en' ? 'SW' : 'EN'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-slate-200 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => {
                  setActiveSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "text-lg font-medium text-left",
                  activeSection === link.id ? "text-secondary" : "text-white"
                )}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                setLang(lang === 'en' ? 'sw' : 'en');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 mt-2 text-secondary font-bold"
            >
              <Globe className="w-5 h-5" />
              {lang === 'en' ? 'Switch to Kiswahili' : 'Badili kwenda Kiingereza'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
