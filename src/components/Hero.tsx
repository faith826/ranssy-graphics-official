import { useLanguage } from '../App';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const { t, setActiveSection } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="mesh-gradient-red" />
      <div className="mesh-gradient-navy" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 md:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/30 text-secondary rounded-full text-xs font-bold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            NEW: AI AUTOMATION TOOLS
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1]">
            Crafting Visuals <br/>
            <span className="text-gradient">{t.hero.title.split(' ').slice(-2).join(' ')}</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-md leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => setActiveSection('courses')}
              className="px-8 py-4 bg-secondary text-white rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              {t.hero.ctaStart}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setActiveSection('services')}
              className="px-8 py-4 glass-button rounded-xl font-bold"
            >
              {t.hero.ctaService}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Abstract Floating UI Elements */}
          <div className="relative z-10 w-full aspect-square glass rounded-[3rem] p-8 shadow-2xl flex items-center justify-center border-slate-200 overflow-hidden">
             <div className="absolute inset-0 gradient-hero opacity-5" />
             <div className="grid grid-cols-2 gap-4 w-full">
                <div className="h-32 bg-slate-100 rounded-2xl animate-pulse" />
                <div className="h-32 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Sparkles className="text-secondary" />
                   </div>
                </div>
                <div className="col-span-2 h-40 glass rounded-2xl p-6">
                   <div className="w-1/2 h-4 bg-slate-200 rounded-full mb-4" />
                   <div className="w-3/4 h-4 bg-slate-100 rounded-full mb-4" />
                   <div className="flex gap-2 mt-auto">
                      <div className="w-8 h-8 rounded-lg bg-primary" />
                      <div className="w-8 h-8 rounded-lg bg-secondary" />
                      <div className="w-8 h-8 rounded-lg bg-slate-200" />
                   </div>
                </div>
             </div>
          </div>
          
          {/* Decorative Blur Spheres */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20" />
        </motion.div>
      </div>
    </section>
  );
}
