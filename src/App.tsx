/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, createContext, useContext } from 'react';
import { translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Language = 'en' | 'sw';

interface LanguageContextType {
  lang: Language;
  t: typeof translations.en;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Courses />
          <Portfolio />
          <WhyChooseUs />
          <CTA />
          <Contact />
        </main>
        <Footer />
        
        {/* Future Integrations Placeholders */}
        <div className="hidden">
          <div id="student-dashboard-placeholder" />
          <div id="ai-chatbot-placeholder" />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}
