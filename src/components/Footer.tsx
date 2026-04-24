import { useLanguage } from '../App';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-primary pt-24 pb-12 text-white/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://i.postimg.cc/yYmpncQk/Rassy.png" 
                  alt="Ranssy Graphics Logo" 
                  className="w-12 h-12 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-display text-2xl font-bold tracking-tight text-white leading-none">
                  Ranssy <span className="text-secondary">Graphics</span>
                </span>
             </div>
             <p className="max-w-xs text-lg leading-relaxed text-white/60 mb-8">
                Crafting visuals that connect. We empower the next generation of designers with AI skills.
             </p>
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-secondary" />
                AI-Driven Creative Agency
             </div>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
             <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-secondary transition-colors">{t.nav.home}</a></li>
                <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">{t.nav.services}</a></li>
                <li><a href="#courses" className="hover:text-secondary transition-colors">{t.nav.courses}</a></li>
                <li><a href="#portfolio" className="hover:text-secondary transition-colors">{t.nav.portfolio}</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
             <ul className="space-y-4 text-sm font-medium">
                <li className="flex flex-col">
                   <span className="text-[10px] text-white/40 uppercase font-black mb-1">Main Office</span>
                   {t.contact.office}
                </li>
                <li className="flex flex-col">
                   <span className="text-[10px] text-white/40 uppercase font-black mb-1">Email</span>
                   {t.contact.emailValue}
                </li>
                <li className="flex flex-col">
                   <span className="text-[10px] text-white/40 uppercase font-black mb-1">Phone</span>
                   {t.contact.whatsappValue}
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-xs font-medium text-white/40 italic">
              &copy; {new Date().getFullYear()} Ranssy Graphics. All rights reserved.
           </div>
           
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
