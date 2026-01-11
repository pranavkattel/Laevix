import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, ArrowUpRight, Send, MessageSquare, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'contact@laevix.org', link: 'mailto:contact@laevix.org' },
    { icon: Phone, label: 'Phone', value: '+977 9768434350', value2: '+977 9820229166', subtext: '(WhatsApp Available)', link: 'tel:+9779768434350' },
    { icon: MessageSquare, label: 'Location', value: 'Gokarneshwor Jorpati', subtext: 'Kathmandu, Nepal', link: '#' },
  ];

  return (
    <section id="contact" className="relative bg-black pt-56 pb-32 border-t border-white/5 overflow-hidden" ref={ref}>
      {/* Animated Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Background Text */}
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none">
        <motion.h2 
          initial={{ opacity: 0, y: 100, rotateX: -45 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: -45 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[15vw] font-black uppercase tracking-tighter leading-none translate-y-[-15%] text-neutral-700/70" 
          style={{ 
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)',
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          CONTACT
        </motion.h2>
      </div>

      {/* Floating 3D Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-red-600/20 rotate-45 floating-3d" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-red-600/20 rotate-12 floating-3d" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-red-600/20 -rotate-12 floating-3d" style={{ animationDelay: '4s' }} />
      </div>

      {/* Cross Grid Lines & Markers */}
      <div className="absolute top-0 left-0 w-full flex justify-between px-[10%] pointer-events-none z-0">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-red-600 text-xl font-light -translate-y-1/2"
            >
              +
            </motion.span>
            <div className="w-[1px] h-full bg-white/5" />
          </div>
        ))}
      </div>

      <div className="container-narrow relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-red-600 font-bold text-sm uppercase tracking-[0.4em] flex items-center gap-4">
              <span className="w-12 h-[1px] bg-red-600" /> Let's Connect <span className="w-12 h-[1px] bg-red-600" />
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.9]"
          >
            <span className="text-white">START YOUR</span> <br />
            <span className="red-glow text-red-600">DIGITAL JOURNEY</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Ready to elevate your digital presence? Let's create something extraordinary together.
          </motion.p>
        </motion.div>

        {/* Contact Methods Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -15 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group p-8 bg-neutral-900/50 border border-white/5 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-red-600/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  animate={{ 
                    rotateY: hoveredCard === index ? 360 : 0,
                    scale: hoveredCard === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mb-6 bg-red-600/10 border border-red-600/30 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-500"
                >
                  <method.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-500" />
                </motion.div>
                
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {method.label}
                </h3>
                <p className="text-xl font-bold text-white group-hover:text-red-600 transition-colors duration-300">
                  {method.value}
                </p>
                {method.value2 && (
                  <p className="text-xl font-bold text-white group-hover:text-red-600 transition-colors duration-300">
                    {method.value2}
                  </p>
                )}
                {method.subtext && (
                  <p className="text-sm text-red-600 font-semibold mt-2">
                    {method.subtext}
                  </p>
                )}
              </div>

              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  x: hoveredCard === index ? [0, 5, 0] : 0,
                  y: hoveredCard === index ? [0, 5, 0] : 0,
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-red-600 text-white font-black text-lg uppercase tracking-widest overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <span className="relative z-10 flex items-center gap-4 group-hover:text-black transition-colors duration-300">
              <Send className="w-6 h-6" />
              Send Message
              <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-24 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"
        />
      </div>
    </section>
  );
}
