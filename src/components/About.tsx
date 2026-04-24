import { useLanguage } from '../App';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="aspect-square bg-primary rounded-3xl overflow-hidden shadow-2xl relative">
             <div className="absolute inset-0 bg-linear-to-tr from-primary to-transparent opacity-60" />
             <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full h-full border-2 border-white/20 rounded-2xl flex items-center justify-center">
                   <span className="text-white/10 font-bold text-[10rem] select-none">RG</span>
                </div>
             </div>
             {/* Info Tag */}
             <div className="absolute bottom-6 left-6 right-6 glass-dark p-6 rounded-2xl">
                <p className="text-white font-medium italic text-lg leading-snug">
                  "Innovating the creative landscape through AI and expert design education."
                </p>
             </div>
          </div>
          
          {/* Accent Blobs */}
          <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-extrabold mb-8">{t.about.title}</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {t.about.text}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.highlights.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-secondary/20 transition-colors"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                <span className="font-semibold text-primary">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
