import { useLanguage } from '../App';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ExternalLink, ShoppingBag } from 'lucide-react';

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
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">{t.portfolio.title}</h2>
            <div className="h-1.5 w-24 bg-linear-to-r from-primary to-secondary rounded-full" />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
               <button 
                key={cat.id}
                className="px-5 py-2 text-sm font-bold rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
               >
                {cat.name}
               </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative rounded-[2rem] overflow-hidden bg-slate-100",
                item.size === 'large' ? "sm:row-span-2 lg:col-span-1" : 
                item.size === 'medium' ? "sm:col-span-2" : ""
              )}
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10" />
              
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                 <div className="w-full h-full border-4 border-slate-200/50 rounded-2xl flex items-center justify-center opacity-50 group-hover:opacity-10 transition-opacity">
                    <ShoppingBag className="w-12 h-12 text-slate-300" />
                 </div>
              </div>

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                  {item.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h4>
                <button className="self-start p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
