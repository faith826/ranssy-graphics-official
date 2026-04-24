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
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold mb-4">{t.services.title}</h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
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
                className="group relative p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300"
              >
                <div className="mb-6 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {IconComponent && <IconComponent className="w-7 h-7" />}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                  {service.desc}
                </p>

                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* Decorative Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowUpRight className="w-4 h-4 text-slate-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
