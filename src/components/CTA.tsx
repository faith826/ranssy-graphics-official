import { useLanguage } from '../App';
import { motion } from 'motion/react';
import { Plane, Send } from 'lucide-react';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gradient-hero rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Spark */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white relative z-10 leading-tight">
            {t.cta.title}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-10 py-5 bg-white text-primary rounded-2xl font-black text-lg hover:bg-white/90 transition-all hover:scale-105 flex items-center gap-3 group">
              {t.cta.join}
              <Plane className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-transparent border-4 border-white/30 text-white rounded-2xl font-black text-lg hover:border-white transition-all flex items-center gap-3 uppercase tracking-wide">
              {t.cta.contact}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
