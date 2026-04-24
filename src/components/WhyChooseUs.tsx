import { useLanguage } from '../App';
import { motion } from 'motion/react';
import { CheckCircle, ShieldCheck, Zap, Heart, Award } from 'lucide-react';

const iconMap = [CheckCircle, Zap, ShieldCheck, Heart, Award];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-accent/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
              {t.why.title}
            </h2>
            <div className="space-y-6">
              {t.why.points.map((point, index) => {
                const Icon = iconMap[index % iconMap.length];
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-semibold text-primary">{point}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative">
             <div className="aspect-square glass rounded-[3rem] p-12 border-slate-200">
                <div className="w-full h-full border-4 border-dashed border-slate-200 rounded-[2rem] flex items-center justify-center relative">
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                   >
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">R</div>
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">G</div>
                   </motion.div>
                   <div className="text-center">
                      <div className="text-5xl font-black text-primary mb-2">100%</div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Satisfaction</div>
                   </div>
                </div>
             </div>
             
             {/* Floaties */}
             <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 glass p-6 rounded-3xl shadow-xl border-slate-200"
             >
                <div className="text-secondary font-black text-2xl">#1</div>
                <div className="text-[10px] font-bold uppercase text-slate-400">Choice in Tanzania</div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
