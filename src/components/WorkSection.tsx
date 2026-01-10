import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: '01',
    name: 'The Himalayan Handicraft',
    description: 'E-commerce platform showcasing authentic Nepali handicrafts to the world.',
    url: 'https://thehimalayanhandicraft.com/',
    category: 'E-commerce',
  },
  {
    id: '02',
    name: 'Cargo Capital',
    description: 'Modern logistics and freight solutions for businesses across Nepal.',
    url: 'https://cargocapital.com/',
    category: 'Business',
  },
];

export function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="work" className="relative bg-black pt-40 pb-20 overflow-hidden border-t border-white/5" ref={ref}>
      {/* Background Text */}
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-none translate-y-[-10%] text-neutral-700/70" style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)' }}>
          WORK
        </h2>
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

      <div className="container-narrow relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 flex items-end gap-6"
        >
          <div className="flex flex-col">
            <span className="text-red-600 font-bold text-sm uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-red-600" /> Selected Work
            </span>
            <h2 className="heading-lg m-0">Projects</h2>
          </div>
          <div className="h-[2px] flex-grow bg-red-600/20 mb-3" />
        </motion.div>

        <div className="grid gap-0">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group block relative py-16 border-b border-red-600/10 hover:border-red-600/40 transition-colors duration-500 overflow-hidden"
            >
              {/* Hover Background Reveal */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 px-4 md:px-8">
                <div className="flex items-start gap-8">
                  <span className="text-4xl font-black text-red-600/20 group-hover:text-red-600/80 transition-colors duration-500 leading-none pt-2">
                    {project.id}
                  </span>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-red-600 text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-white group-hover:red-glow transition-all duration-300">
                      {project.name}
                    </h3>
                    <p className="body-md max-w-xl group-hover:text-white transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 self-end md:self-center">
                  <div className="w-16 h-16 border border-white/10 group-hover:border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500 transform group-hover:rotate-45">
                    <ArrowUpRight className="w-8 h-8 group-hover:-rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer CTA in Work Section */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button onClick={() => navigate('/work')} className="px-12 py-4 bg-transparent border border-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-600 transition-all duration-300 relative group overflow-hidden">
            <span className="relative z-10 uppercase tracking-widest text-sm italic">• DISCOVER MORE</span>
            <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

