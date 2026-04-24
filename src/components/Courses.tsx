import { useLanguage } from '../App';
import { motion } from 'motion/react';
import { Clock, Tag, ChevronRight } from 'lucide-react';

export default function Courses() {
  const { t } = useLanguage();

  return (
    <section id="courses" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative BG pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-10 right-10 w-96 h-96 border-[40px] border-white rounded-full blur-[80px]" />
         <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] border-[100px] border-secondary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-white">{t.courses.title}</h2>
            <p className="text-white/70 max-w-xl text-lg">
              Unlock your potential with our industry-leading courses designed for the AI-driven future.
            </p>
          </div>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm transition-colors border border-white/20">
            View All Courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.courses.items.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] border-white/10 flex flex-col group"
            >
              <div className="mb-8 p-6 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                 {/* Visual Placeholder for course thumbnail */}
                 <div className="w-full aspect-video bg-linear-to-br from-white/10 to-transparent rounded-xl flex items-center justify-center overflow-hidden">
                    <span className="text-white/20 font-black text-4xl group-hover:scale-110 transition-transform">{course.title[0]}</span>
                 </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Clock className="w-4 h-4 text-secondary" />
                  {t.courses.duration}: {course.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Tag className="w-4 h-4 text-secondary" />
                  {course.price}
                </div>
              </div>

              <button className="mt-auto w-full py-4 bg-white text-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-secondary hover:text-white transition-all group-hover:shadow-[0_0_30px_rgba(229,57,53,0.3)]">
                {t.courses.enroll}
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
