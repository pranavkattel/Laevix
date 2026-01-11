import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowUpRight, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: '01',
    name: 'The Himalayan Handicraft',
    category: 'E-commerce',
    description: 'E-commerce platform showcasing authentic Nepali handicrafts to the world with seamless user experience.',
    url: 'https://thehimalayanhandicraft.com/',
    tags: ['Design', 'Development'],
    year: '2024',
    image: null
  },
  {
    id: '02',
    name: 'Cargo Capital',
    category: 'Business',
    description: 'Modern logistics and freight solutions for businesses across Nepal with real-time tracking.',
    url: 'https://cargocapital.com/',
    tags: ['Design', 'Development'],
    year: '2024',
    image: null
  }
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-24">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[150px] animate-pulse" />
        </div>

        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-[25vw] font-black uppercase tracking-tighter leading-none text-neutral-800/50"
            style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)' }}
          >
            WORK
          </motion.h1>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-[0.4em] mb-6 inline-block">2024 - 2025</span>
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
                  SELECTED<br />
                  <span className="text-red-600">WORK</span>
                  <sup className="text-2xl align-super">®</sup>
                </h2>
              </div>
              <p className="text-neutral-400 text-lg max-w-md mt-8 md:mt-0">
                A curated selection of digital experiences we've worked on
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="relative bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-0">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group border-t border-white/5 py-16 md:py-20 hover:border-red-600/30 transition-all duration-500 relative"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Project Number */}
                  <div className="md:col-span-1">
                    <span className="text-5xl font-black text-red-600/20 group-hover:text-red-600/60 transition-colors duration-500">
                      {project.id}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="md:col-span-7">
                    <div className="mb-4">
                      <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 mb-4">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white group-hover:text-red-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl group-hover:text-neutral-300 transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="flex gap-3 mt-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-bold uppercase tracking-widest text-neutral-600 border border-neutral-800 group-hover:border-red-600/30 group-hover:text-red-600 px-4 py-2 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Year and Arrow */}
                  <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-8">
                    <span className="text-2xl font-bold text-neutral-700 group-hover:text-neutral-500 transition-colors duration-300">
                      {project.year}
                    </span>
                    <div className="w-16 h-16 border-2 border-white/10 group-hover:border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="w-8 h-8 text-white group-hover:-rotate-45 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-neutral-950 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to start your<br />
              <span className="text-red-600">digital journey?</span>
            </h3>
            <p className="text-xl text-neutral-400 mb-12">
              Drop us a message and let's discuss how we can help bring your vision to life.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-4 px-12 py-6 bg-red-600 text-white font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden"
            >
              <Send className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
              Send Message
              <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
