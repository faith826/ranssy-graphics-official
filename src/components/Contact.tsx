import { useLanguage } from '../App';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
             <h2 className="text-4xl font-extrabold mb-6 leading-tight">{t.contact.title}</h2>
             <p className="text-slate-600 mb-10 text-lg">
                Have a project in mind or want to join our classes? Reach out and we'll get back to you within 24 hours.
             </p>

             <div className="space-y-6">
                <a href="https://wa.me/255123456789" className="flex items-center gap-4 group p-4 bg-white rounded-2xl border border-slate-100 hover:border-secondary/20 transition-all shadow-sm">
                   <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                      <MessageSquare className="w-6 h-6" />
                   </div>
                   <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp</div>
                      <div className="font-bold text-primary">+255 123 456 789</div>
                   </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                   <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <Mail className="w-6 h-6" />
                   </div>
                   <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</div>
                      <div className="font-bold text-primary">hello@ranssy.com</div>
                   </div>
                </div>
             </div>

             <div className="flex gap-4 mt-12">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                   <button key={i} className="w-12 h-12 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                      <Icon className="w-5 h-5" />
                   </button>
                ))}
             </div>
          </div>

          <div className="lg:col-span-2">
             <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 md:p-12 rounded-[2.5rem] border-white shadow-xl"
                onSubmit={(e) => e.preventDefault()}
             >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">{t.contact.name}</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-6 py-4 bg-slate-100 rounded-2xl border border-transparent focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all outline-none"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">{t.contact.email}</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-slate-100 rounded-2xl border border-transparent focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all outline-none"
                      />
                   </div>
                </div>

                <div className="space-y-2 mb-8">
                   <label className="text-sm font-bold text-slate-700 ml-1">{t.contact.message}</label>
                   <textarea 
                     rows={5}
                     placeholder="Tell us about your project..."
                     className="w-full px-6 py-4 bg-slate-100 rounded-2xl border border-transparent focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all outline-none resize-none"
                   />
                </div>

                <button className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg hover:bg-primary/95 transition-all hover:scale-[1.01] flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/20">
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
