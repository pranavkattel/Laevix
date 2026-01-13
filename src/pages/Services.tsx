import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    number: '01',
    title: 'Website Development',
    fullTitle: 'Website Development',
    description: 'Professional website design and development services in Nepal. From responsive corporate websites to e-commerce platforms, we create stunning digital experiences that drive business growth.',
    includes: ['Custom Web Design', 'E-commerce Platforms', 'Responsive Development', 'SEO Optimization'],
    icon: '✦'
  },
  {
    number: '02',
    title: 'AI Solutions',
    fullTitle: 'AI Solutions',
    description: 'Cutting-edge AI agents and intelligent automation for businesses in Nepal. From chatbots to predictive analytics, we implement AI solutions that transform your operations.',
    includes: ['AI Agents & Chatbots', 'Machine Learning', 'Predictive Analytics', 'Intelligent Automation'],
    icon: '❖'
  },
  {
    number: '03',
    title: 'Custom Software',
    fullTitle: 'Custom Software',
    description: 'Tailored software development and digital transformation services. CMS integration, API development, cloud solutions - fully functional, scalable, and future-proof technology.',
    includes: ['Custom Development', 'CMS Integration', 'API Development', 'Cloud Solutions'],
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

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <span className="text-red-600 font-bold text-sm uppercase tracking-[0.4em] mb-8 inline-block">What We Do</span>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter leading-none text-neutral-800 dark:text-neutral-800/50 mb-16"
              style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)' }}
            >
              SERVICES
            </motion.h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-normal text-neutral-800 dark:text-neutral-300 leading-relaxed">
              We help brands and creative teams to go from idea to digital experience, with design, motion, and development at the core.
            </h2>
          </motion.div>
          
          {/* Hidden SEO Content */}
          <div className="sr-only">
            <h3>Professional Website Development and AI Solutions in Nepal</h3>
            <p>Laevix is the leading AI tech company and website making company in Nepal, offering comprehensive services including website development, web design, AI agent development, custom software solutions, business automation, and digital transformation services in Kathmandu, Nepal. We specialize in creating responsive websites, e-commerce platforms, AI chatbots, intelligent automation systems, and cutting-edge digital solutions for businesses across Nepal. As the top-rated tech company in Kathmandu, we deliver world-class website development services, AI solutions, and custom software that drives business growth. Contact us for professional web development, AI implementation, and digital transformation services in Nepal.</p>
          </div>
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
                    <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors duration-500 break-words">
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
