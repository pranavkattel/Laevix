import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import amiksPhoto from '@/assets/amiks.png';
import satyamPhoto from '@/assets/satyam.png';
import pranavPhoto from '@/assets/pranav.jpeg';
import abhiyanPhoto from '@/assets/abhiyan.png';

const faqs = [
  { question: 'Do you offer both design and development?', answer: 'Yes! We handle both UI/UX design and full-stack development, specializing in React, Next.js, and modern web technologies.' },
  { question: 'Do you also create full branding and logo designs?', answer: 'While our primary focus is web design and development, we can collaborate with branding specialists for comprehensive brand identity projects.' },
  { question: 'Do you work with existing designs?', answer: 'Absolutely! We can take your existing designs from Figma, Sketch, or Adobe XD and bring them to life with pixel-perfect implementation.' },
  { question: 'Can you also create animations?', answer: 'Yes, we create smooth animations using Framer Motion, GSAP, and CSS animations to enhance user experience.' },
  { question: 'Do you only develop in Webflow?', answer: 'No, we primarily work with React, Next.js, and modern JavaScript frameworks. We can also work with Webflow when needed.' },
  { question: 'How long does a typical project take?', answer: 'Project timelines vary based on scope. A standard website takes 4-6 weeks, while complex applications may take 2-3 months.' },
  { question: 'Do you collaborate with agencies or other freelancers?', answer: 'Yes! We frequently collaborate with design agencies, marketing teams, and other developers on larger projects.' },
  { question: 'Do you offer support or updates after launch?', answer: 'Yes, we provide ongoing maintenance and support packages to ensure your website stays up-to-date and secure.' }
];

const teamMembers = [
  { name: 'Amiks Karki', role: 'CFO', photo: amiksPhoto },
  { name: 'Satyam Dulal', role: 'CTO', photo: satyamPhoto },
  { name: 'Pranav Kattel', role: 'Co-founder', photo: pranavPhoto },
  { name: 'Abhiyan Dahal', role: 'Co-founder', photo: abhiyanPhoto },
  { name: 'Aditiya Aryal', role: 'System Administrator' },
];

export default function About() {
  const ref = useRef(null);
  const faqRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const [positions, setPositions] = useState([0, 1, 2, 3, 4]);

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
    <div className="min-h-screen bg-neutral-200 dark:bg-black transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-neutral-300 dark:bg-black overflow-hidden pt-24 transition-colors duration-300">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-[18vw] font-black uppercase tracking-tighter leading-none text-neutral-800/80 dark:text-neutral-800/50"
            style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)' }}
          >
            BEHIND<br/>THE WORK
          </motion.h1>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-12">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 text-neutral-900 dark:text-white">
                LAEVIX <span className="text-red-600">[32]</span>
              </h2>
              <p className="text-xl text-neutral-700 dark:text-neutral-400">NEPAL</p>
            </div>
            
            {/* Hidden SEO Content */}
            <div className="sr-only">
              <h3>About Laevix - Premier AI Tech Company and Website Making Company in Nepal</h3>
              <p>Laevix is Nepal's leading AI tech company and website development agency headquartered in Kathmandu. We specialize in professional website development, AI solutions, custom software development, and digital transformation services for businesses across Nepal. Our expert team delivers cutting-edge technology solutions including website design, web development, AI agent development, chatbot development, business automation, e-commerce platforms, mobile app development, and cloud solutions. As the top-rated tech company in Kathmandu, we combine world-class expertise with local market knowledge to help businesses grow digitally. Contact Laevix for innovative AI solutions and professional website development services in Nepal.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section ref={ref} className="relative bg-neutral-200 dark:bg-black py-32 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-red-600 font-bold text-sm uppercase tracking-[0.4em] mb-8 inline-block">• About</span>
            <h2 className="text-4xl md:text-5xl font-normal text-neutral-800 dark:text-neutral-300 leading-relaxed mb-12">
              We are a Nepali tech team specializing in next-generation digital solutions. From custom websites and web applications to AI agents and intelligent automation, we combine cutting-edge technology with exceptional design to deliver transformative experiences.
            </h2>
            <p className="text-xl text-neutral-700 dark:text-neutral-400 leading-relaxed mb-8">
              Our expertise spans web development, AI integration, machine learning solutions, and intelligent automation systems. We help businesses leverage the power of modern technology to stay ahead in the digital age, creating solutions that are not just beautiful, but smart and efficient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative bg-neutral-300 dark:bg-neutral-950 py-32 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-red-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Our Backbone</span>
            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic text-neutral-900 dark:text-white">
              The People Behind <span className="text-red-600">Laevix</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {positions.map((memberIndex, positionIndex) => {
              const member = teamMembers[memberIndex];
              return (
                <motion.div
                  key={member.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    layout: { duration: 0.8, ease: "easeInOut" },
                    opacity: { duration: 0.6, delay: positionIndex * 0.1 },
                    scale: { duration: 0.6, delay: positionIndex * 0.1 }
                  }}
                  viewport={{ once: true }}
                  className="group text-center"
                >
                  <div className="w-full aspect-square mb-6 bg-neutral-400 dark:bg-neutral-900 border border-neutral-500 dark:border-white/5 flex items-center justify-center group-hover:border-red-600 transition-all duration-500 relative overflow-hidden">
                    {member.photo ? (
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    ) : (
                      <span className="text-5xl font-black text-neutral-600 dark:text-neutral-800 tracking-tighter group-hover:text-red-600 transition-colors z-10 relative">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-bold text-lg uppercase tracking-widest text-neutral-900 dark:text-white mb-2">{member.name}</h4>
                  <p className="text-xs uppercase tracking-wider text-red-600 font-bold">{member.role}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="relative bg-neutral-200 dark:bg-black py-32 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column - Title */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={faqInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.8 }}
                className="lg:sticky lg:top-32"
              >
                <h3 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-neutral-900 dark:text-white">FAQ</h3>
                <p className="text-neutral-700 dark:text-neutral-400 text-lg leading-relaxed">
                  If your question is not answered here, feel free to reach out to us above.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Questions */}
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group border-t border-neutral-300 dark:border-white/10 py-8 cursor-pointer"
                  >
                    <summary className="flex items-center justify-between text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors list-none">
                      <span className="pr-8">{faq.question}</span>
                      <span className="text-3xl text-neutral-500 dark:text-neutral-600 group-hover:text-red-600 transition-colors flex-shrink-0">+</span>
                    </summary>
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-6 text-lg text-neutral-700 dark:text-neutral-400 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-neutral-300 dark:bg-neutral-950 py-32 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-8 leading-tight">
              Ready to start your<br />
              <span className="text-red-600">digital journey?</span>
            </h3>
            <p className="text-xl text-neutral-700 dark:text-neutral-400 mb-12">
              Drop us a message and let's discuss how we can help bring your vision to life.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-4 px-12 py-6 bg-red-600 text-neutral-100 font-bold text-lg uppercase tracking-widest hover:bg-neutral-900 hover:text-neutral-100 transition-all duration-300 relative overflow-hidden"
            >
              <Send className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
              Send Message
              <div className="absolute inset-0 bg-neutral-900/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
