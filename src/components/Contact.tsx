import { useLanguage } from '../App';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${t.contact.whatsappValue.replace(/\s+/g, '')}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      <div className="mesh-gradient-red opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
             <h2 className="text-4xl font-extrabold mb-6 leading-tight uppercase tracking-tight">{t.contact.title}</h2>
             <p className="text-gray-400 mb-10 text-lg font-medium leading-relaxed">
                Have a project in mind or want to join our classes? Reach out and we'll get back to you within 24 hours.
             </p>

             <div className="space-y-6">
                <button 
                  onClick={handleWhatsApp}
                  className="w-full flex items-center gap-4 group p-5 bg-white/5 rounded-3xl border border-white/10 hover:border-secondary/40 transition-all shadow-xl backdrop-blur-md"
                >
                   <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-7 h-7" />
                   </div>
                   <div className="text-left">
                      <div className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-1">WhatsApp</div>
                      <div className="font-bold text-white text-lg">{t.contact.whatsappValue}</div>
                   </div>
                </button>

                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-3xl border border-white/10 shadow-xl backdrop-blur-md">
                   <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500">
                      <Mail className="w-7 h-7" />
                   </div>
                   <div className="text-left">
                      <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">Email</div>
                      <div className="font-bold text-white text-lg">{t.contact.emailValue}</div>
                   </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-3xl border border-white/10 shadow-xl backdrop-blur-md">
                   <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                      <Phone className="w-7 h-7" />
                   </div>
                   <div className="text-left">
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Office</div>
                      <div className="font-bold text-white text-lg">{t.contact.office}</div>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-2">
             <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 shadow-2xl relative"
                onSubmit={(e) => e.preventDefault()}
             >
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                   <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{t.contact.name}</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-6 py-5 bg-white/5 rounded-2xl border border-white/10 focus:border-secondary focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{t.contact.email}</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-5 bg-white/5 rounded-2xl border border-white/10 focus:border-secondary focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                      />
                   </div>
                </div>

                <div className="space-y-3 mb-10">
                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{t.contact.message}</label>
                   <textarea 
                     rows={5}
                     placeholder="Tell us about your project..."
                     className="w-full px-6 py-5 bg-white/5 rounded-2xl border border-white/10 focus:border-secondary focus:bg-white/10 outline-none resize-none transition-all placeholder:text-white/20"
                   />
                </div>

                <button className="w-full py-5 bg-secondary text-white rounded-2xl font-black text-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 shadow-xl shadow-secondary/20">
                   {t.contact.send}
                   <Send className="w-6 h-6" />
                </button>
             </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
