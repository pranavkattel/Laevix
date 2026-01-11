import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import amiksPhoto from '@/assets/amiks.png';
import satyamPhoto from '@/assets/satyam.png';
import pranavPhoto from '@/assets/pranav.jpeg';
import abhiyanPhoto from '@/assets/abhiyan.png';

const teamMembers = [
  { name: 'Amiks Karki', role: 'Co-founder', photo: amiksPhoto },
  { name: 'Satyam Dulal', role: 'Co-founder', photo: satyamPhoto },
  { name: 'Pranav Kattel', role: 'Co-founder', photo: pranavPhoto },
  { name: 'Abhiyan Dahal', role: 'Co-founder', photo: abhiyanPhoto },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const [positions, setPositions] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(prev => {
        const newPositions = [...prev];
        // Fisher-Yates shuffle algorithm
        for (let i = newPositions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newPositions[i], newPositions[j]] = [newPositions[j], newPositions[i]];
        }
        return newPositions;
      });
    }, 3000); // Shuffle every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative bg-neutral-200 dark:bg-black pt-24 md:pt-40 pb-12 md:pb-20 border-t border-neutral-300 dark:border-white/5 overflow-hidden transition-colors duration-300" ref={ref}>
      {/* Background Text */}
      <div className="flex absolute top-0 left-0 w-full justify-center pointer-events-none select-none overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[15vw] md:text-[10vw] font-black uppercase tracking-tighter leading-none translate-y-[-25%] text-neutral-800/80 dark:text-neutral-700/70" 
          style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)' }}
        >
          ABOUT
        </motion.h2>
      </div>

      {/* Cross Grid Lines & Markers */}
      <div className="hidden md:flex absolute top-0 left-0 w-full justify-between px-[10%] pointer-events-none z-0">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
            <span className="text-neutral-400 dark:text-neutral-500 text-xl font-light -translate-y-1/2">+</span>
            <div className="w-[1px] h-full bg-white/5" />
          </div>
        ))}
      </div>

      <div className="container-narrow relative z-10 px-4 md:px-6">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16 md:mb-32"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12 md:mb-16 leading-[0.9] text-neutral-900 dark:text-white px-4"
          >
            CRAFTING DIGITAL<br />
            <span className="red-glow text-red-600">SOLUTIONS</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="body-md max-w-3xl mx-auto text-neutral-700 dark:text-neutral-medium leading-relaxed text-base md:text-lg px-4"
          >
            We provide cutting-edge tech solutions including custom websites, AI agents, 
            intelligent automation, and innovative digital experiences for businesses in Nepal.
            Our focus is on craftsmanship, attention to detail, and leveraging the latest 
            technology to transform your brand. Every pixel is calculated, every interaction 
            is powered by intelligence.
          </motion.p>
        </motion.div>

        {/* Team Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-6 md:mb-8 block">Our Backbone</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic text-neutral-900 dark:text-white px-4">The People Behind <span className="text-red-600">Laevix</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-16 mb-16 md:mb-24 relative px-4">
          {positions.map((memberIndex, positionIndex) => {
            const member = teamMembers[memberIndex];
            return (
              <motion.div
                key={member.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1
                } : { opacity: 0, scale: 0.9 }}
                transition={{ 
                  layout: { duration: 0.8, ease: "easeInOut" },
                  opacity: { duration: 0.6, delay: 1 + positionIndex * 0.1 },
                  scale: { duration: 0.6, delay: 1 + positionIndex * 0.1 }
                }}
                className="group text-center"
              >
                {/* Avatar placeholder */}
                <div className="w-full aspect-square max-w-[140px] md:max-w-none md:w-40 md:h-40 mx-auto mb-4 md:mb-6 rounded-none bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-red-600 transition-all duration-500 relative">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-sm md:text-base uppercase tracking-wide md:tracking-widest text-neutral-900 dark:text-white mb-1 md:mb-2">{member.name}</h3>
                <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-red-600 font-bold">{member.role}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.button
            onClick={() => navigate('/about')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-red-600/50 flex items-center justify-center p-4 group-hover:bg-red-600 transition-all duration-500 overflow-hidden touch-manipulation">
              <span className="relative z-10 text-[10px] md:text-xs font-black uppercase tracking-wider md:tracking-[0.2em] text-neutral-900 dark:text-white italic text-center">• MORE ABOUT US</span>
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}


