import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
  { name: 'Amiks Karki', role: 'Co-founder' },
  { name: 'Satyam Dulal', role: 'Co-founder' },
  { name: 'Pranav Kattel', role: 'Co-founder' },
  { name: 'Abhiyan Dahal', role: 'Co-founder' },
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative bg-black pt-40 pb-20 border-t border-white/5 overflow-hidden" ref={ref}>
      {/* Background Text */}
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[12vw] font-black uppercase tracking-tighter leading-none translate-y-[-25%] text-neutral-700/70" 
          style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)' }}
        >
          TEAM
        </motion.h2>
      </div>

      {/* Cross Grid Lines & Markers */}
      <div className="absolute top-0 left-0 w-full flex justify-between px-[10%] pointer-events-none z-0">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
            <span className="text-neutral-500 text-xl font-light -translate-y-1/2">+</span>
            <div className="w-[1px] h-full bg-white/5" />
          </div>
        ))}
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="text-red-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-8 block">Our Backbone</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">The People Behind <span className="text-red-600">Laevix</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-24">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group text-center"
            >
              {/* Avatar placeholder */}
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-none bg-neutral-900 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-red-600 transition-all duration-500 relative">
                <span className="text-3xl md:text-4xl font-black text-neutral-800 tracking-tighter group-hover:text-red-600 transition-colors">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-lg uppercase tracking-widest text-white mb-2">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-bold">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="w-56 h-56 rounded-full border border-red-600/50 flex items-center justify-center p-4 group-hover:bg-red-600 transition-all duration-500 overflow-hidden">
              <span className="relative z-10 text-xs font-black uppercase tracking-[0.2em] text-white italic">• MORE ABOUT US</span>
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

