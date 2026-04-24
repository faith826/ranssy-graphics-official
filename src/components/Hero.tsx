import { useLanguage } from '../App';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
            <Sparkles className="w-3 h-3" />
            Empowering Creativity via AI
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]">
            {t.hero.title}
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#courses" 
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              {t.hero.ctaStart}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-slate-200 text-primary rounded-xl font-bold hover:border-primary hover:bg-primary/5 transition-all"
            >
              {t.hero.ctaService}
            </a>
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
