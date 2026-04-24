import { useLanguage } from '../App';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ExternalLink, ShoppingBag, ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'branding', name: 'Branding' },
  { id: 'digital', name: 'Digital' },
  { id: 'merch', name: 'Merchandise' },
];

const ITEMS = [
  { id: 1, title: 'T-Shirt Branding', category: 'merch', size: 'large' },
  { id: 2, title: 'AI Platform UI', category: 'digital', size: 'small' },
  { id: 3, title: 'Corporate Identity', category: 'branding', size: 'small' },
  { id: 4, title: 'Custom Shoe Design', category: 'merch', size: 'small' },
  { id: 5, title: 'Brand Strategy', category: 'branding', size: 'medium' },
  { id: 6, title: 'Mobile App Design', category: 'digital', size: 'small' },
];

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="mesh-gradient-navy opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-tight">{t.portfolio.title}</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(cat => (
               <button 
                key={cat.id}
                className="px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-full glass border-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all shadow-lg"
               >
                {cat.name}
               </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative rounded-[2.5rem] overflow-hidden glass border-white/5 shadow-2xl",
                item.size === 'large' ? "sm:row-span-2 lg:col-span-1" : 
                item.size === 'medium' ? "sm:col-span-2" : ""
              )}
            >
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-12 bg-white/5">
                 <div className="w-full h-full border-2 border-white/5 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <ShoppingBag className="w-16 h-16 text-white/5 group-hover:text-secondary group-hover:opacity-40 transition-all" />
                 </div>
              </div>

              <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-3">
                  {item.category}
                </span>
                <h4 className="text-3xl font-black text-white mb-6 leading-tight">
                  {item.title}
                </h4>
                <button className="self-start w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl">
                  <ExternalLink className="w-6 h-6" />
                </button>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity z-20">
                 <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-secondary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
