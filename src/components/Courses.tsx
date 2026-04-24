import { useState } from 'react';
import { useLanguage } from '../App';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Tag, ChevronRight } from 'lucide-react';

export default function Courses() {
  const { t, setSelectedCourse } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const displayedCourses = showAll ? t.courses.items : t.courses.items.slice(0, 3);

  return (
    <section id="courses" className="py-24 bg-dark text-white overflow-hidden relative">
      {/* Background Mesh Gradients */}
      <div className="mesh-gradient-navy opacity-30" />
      <div className="mesh-gradient-red opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-white uppercase tracking-tight">{t.courses.title}</h2>
            <p className="text-white/60 max-w-xl text-lg font-medium">
              Unlock your potential with our industry-leading courses designed for the AI-driven future.
            </p>
          </div>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 glass-button rounded-full text-sm font-bold tracking-widest uppercase hover:text-secondary transition-all"
          >
            {showAll ? 'Show Featured' : 'View All Courses'}
          </button>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayedCourses.map((course, index) => (
              <motion.div
                key={course.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-[2.5rem] border-white/10 flex flex-col group relative overflow-hidden"
              >
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <div className="mb-8 p-6 bg-white/5 rounded-3xl flex items-center justify-center border border-white/5 relative">
                 {/* Visual Placeholder for course thumbnail */}
                 <div className="w-full aspect-video bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center overflow-hidden border border-white/5">
                    <span className="text-white/20 font-black text-4xl group-hover:scale-110 transition-transform group-hover:text-secondary group-hover:opacity-40">{course.title[0]}</span>
                 </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
              
              <div className="flex flex-wrap gap-4 mb-8 mt-auto">
                <div className="flex items-center gap-2 text-sm text-white/50 font-medium">
                  <Clock className="w-4 h-4 text-secondary" />
                  {t.courses.duration}: {course.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50 font-medium">
                  <Tag className="w-4 h-4 text-secondary" />
                  {course.price}
                </div>
              </div>

              <button 
                onClick={() => setSelectedCourse(course.title)}
                className="w-full py-4 bg-secondary text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all hover:shadow-[0_0_30px_rgba(229,57,53,0.3)] shadow-lg shadow-secondary/10"
              >
                {t.courses.enroll}
                <ChevronRight className="w-5 h-5" />
              </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
