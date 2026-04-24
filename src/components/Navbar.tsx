import { useState, useEffect } from 'react';
import { useLanguage } from '../App';
import { cn } from '../lib/utils';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.courses, href: '#courses' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3 shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-secondary/20">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-white uppercase">
            Ranssy <span className="text-secondary">Graphics</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
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
            className="absolute top-full left-0 right-0 glass border-t border-slate-200 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-slate-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
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
