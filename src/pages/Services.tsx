import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    number: '01',
    title: 'Define',
    fullTitle: 'Define',
    description: 'Laying the foundation with strategy, style and structure. From brand discovery to visual direction, everything starts here.',
    includes: ['Discovery Workshop', 'Visual Moodboard', 'Colors & Typography', 'Design Directions'],
    icon: '✦'
  },
  {
    number: '02',
    title: 'Design',
    fullTitle: 'Design',
    description: 'Crafting clear, bold and personality-driven interfaces. High-fidelity UI with motion and intent, straight from Figma.',
    includes: ['UI Design', 'Motion Ideas', 'Figma Prototype', 'Digital Styleguide'],
    icon: '❖'
  },
  {
    number: '03',
    title: 'Develop',
    fullTitle: 'Develop',
    description: 'Bringing design to life in Webflow, smooth, responsive and accessible. From CMS to micro-interactions; fully functional and future-proof.',
    includes: ['Webflow Development', 'CMS Integration', 'Animations', 'Responsive Design'],
    icon: '⌘'
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-black transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-neutral-300 dark:bg-black overflow-hidden pt-24 transition-colors duration-300">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-[20vw] font-black uppercase tracking-tighter leading-none text-neutral-800/80 dark:text-neutral-800/50"
            style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)' }}
          >
            SERVICES
          </motion.h1>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-red-600 font-bold text-sm uppercase tracking-[0.4em] mb-8 inline-block">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-normal text-neutral-800 dark:text-neutral-300 leading-relaxed mb-12">
              We help brands and creative teams to go from idea to digital experience, with design, motion, and development at the core.
            </h2>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neutral-400 dark:border-white/20 rounded-full flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-red-600 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="relative bg-neutral-200 dark:bg-black py-32 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-t border-neutral-300 dark:border-white/10 py-16 md:py-24 relative"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
                  {/* Left: Number and Icon */}
                  <div className="md:col-span-3 flex flex-col items-start">
                    <span className="text-6xl font-black text-neutral-400 dark:text-neutral-800 group-hover:text-red-600/40 transition-colors duration-500 mb-8">
                      {service.number}
                    </span>
                    <motion.div
                      animate={{
                        rotateY: hoveredIndex === index ? 360 : 0,
                        scale: hoveredIndex === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-32 h-32 bg-neutral-400 dark:bg-neutral-900 border border-neutral-500 dark:border-white/10 group-hover:border-red-600/50 flex items-center justify-center group-hover:bg-red-600/10 transition-all duration-500"
                    >
                      <span className="text-6xl text-neutral-600 dark:text-white/20 group-hover:text-red-600 transition-colors duration-500">
                        {service.icon}
                      </span>
                    </motion.div>
                  </div>

                  {/* Middle: Title and Description */}
                  <div className="md:col-span-6">
                    <h3 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors duration-500">
                      {service.fullTitle}
                    </h3>
                    <p className="text-xl text-neutral-700 dark:text-neutral-400 leading-relaxed group-hover:text-neutral-800 dark:group-hover:text-neutral-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Right: Includes */}
                  <div className="md:col-span-3">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-500 mb-6">Includes:</h4>
                    <ul className="space-y-3">
                      {service.includes.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="text-sm font-medium text-neutral-700 dark:text-neutral-600 group-hover:text-neutral-800 dark:group-hover:text-neutral-400 transition-colors duration-300 border border-neutral-400 dark:border-neutral-800 group-hover:border-red-600/30 px-4 py-2 uppercase tracking-wider"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 1 }}
            className="mt-32 max-w-5xl mx-auto text-center"
          >
            <span className="text-red-600 font-bold text-sm uppercase tracking-[0.4em] mb-8 inline-block">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-normal text-neutral-800 dark:text-neutral-300 leading-relaxed mb-12">
              We help brands and creative teams to go from idea to digital experience, with design, motion, and development at the core.
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-400 leading-relaxed mb-16">
              We take care of the full journey from a digital identity to complete build, or collaborate on design or development-only projects. Our approach combines creativity with technical excellence to deliver exceptional digital experiences.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <button
              onClick={handleContactClick}
              className="group inline-flex items-center gap-4 px-12 py-6 bg-red-600 text-neutral-100 font-bold text-lg uppercase tracking-widest hover:bg-neutral-900 hover:text-neutral-100 transition-all duration-300"
            >
              Start Your Project
              <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
