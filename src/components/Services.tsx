import { useLanguage } from '../App';
import { motion } from 'motion/react';
import { Palette, Bot, Printer, Globe, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const iconMap = {
  Palette,
  Bot,
  Printer,
  Globe,
};

export default function Services() {
  const { t, setActiveSection } = useLanguage();

  return (
    <section id="services" className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="mesh-gradient-navy opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-tight">{t.services.title}</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.list.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-10 glass border-white/5 rounded-[2.5rem] shadow-2xl hover:border-secondary/30 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="mb-8 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 border border-white/5 shadow-lg">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/40 mb-8 leading-relaxed font-medium flex-grow">
                  {service.desc}
                </p>

                <button 
                  onClick={() => setActiveSection('contact')}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-secondary group-hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
