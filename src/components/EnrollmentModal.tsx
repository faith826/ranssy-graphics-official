import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { useLanguage } from '../App';

interface EnrollmentModalProps {
  course: string;
  onClose: () => void;
}

export default function EnrollmentModal({ course, onClose }: EnrollmentModalProps) {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: 'beginner',
    mode: 'online'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  const handleWhatsApp = () => {
    const text = `Hello Ranssy Graphics, I would like to enroll for the ${course} course. My details: Name: ${formData.fullName}, Email: ${formData.email}, Phone: ${formData.phone}, Experience: ${formData.experience}, Mode: ${formData.mode}`;
    window.open(`https://wa.me/${t.contact.whatsappValue.replace(/\s+/g, '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg glass border border-white/20 rounded-[2.5rem] shadow-2xl p-8 md:p-10 overflow-hidden"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-white/40 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {!isSubmitted ? (
            <>
              <h3 className="text-3xl font-black mb-2">Enroll Now</h3>
              <p className="text-white/60 mb-8 font-medium">Joining: <span className="text-secondary">{course}</span></p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input 
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-secondary focus:bg-white/10 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email</label>
                    <input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="email@example.com"
                      className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-secondary focus:bg-white/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Phone</label>
                    <input 
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+254..."
                      className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-secondary focus:bg-white/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Experience</label>
                    <select 
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-secondary focus:bg-white/10 outline-none transition-all appearance-none"
                    >
                      <option value="beginner" className="bg-dark text-white">Beginner</option>
                      <option value="intermediate" className="bg-dark text-white">Intermediate</option>
                      <option value="advanced" className="bg-dark text-white">Advanced</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Learning Mode</label>
                    <select 
                      value={formData.mode}
                      onChange={(e) => setFormData({...formData, mode: e.target.value})}
                      className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-secondary focus:bg-white/10 outline-none transition-all appearance-none"
                    >
                      <option value="online" className="bg-dark text-white">Online</option>
                      <option value="physical" className="bg-dark text-white">Physical (Nairobi)</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-secondary text-white rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-3"
                >
                  Confirm Enrollment
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-24 h-24 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-black mb-4">Success!</h3>
              <p className="text-white/60 mb-10 leading-relaxed font-medium">
                Thank you for enrolling in <span className="text-white font-bold">{course}</span>. We will reach out to you shortly via email or phone to finalize your registration.
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={handleWhatsApp}
                  className="w-full py-4 bg-green-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-green-500 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
                <button 
                  onClick={onClose}
                  className="w-full py-4 glass-button rounded-2xl font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
