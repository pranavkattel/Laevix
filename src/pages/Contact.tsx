import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, ArrowUpRight, Send, MessageSquare, Phone, Check, AlertCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    customService: '',
    message: '',
    notificationPreference: 'email',
    connectionPreference: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
      const response = await fetch(`${apiUrl}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! Check your email for confirmation.'
        });
        setFormData({ name: '', email: '', phone: '', serviceType: '', customService: '', message: '', notificationPreference: 'email', connectionPreference: 'email' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please make sure the email server is running.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'contact@laevix.org', link: 'mailto:contact@laevix.org' },
    { icon: Phone, label: 'Phone', value: '+977 9768434350', value2: '+977 9820229166', subtext: '(WhatsApp Available)', link: 'tel:+9779768434350' },
    { icon: MessageSquare, label: 'Location', value: 'Gokarneshwor Jorpati', subtext: 'Kathmandu, Nepal', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-black transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-neutral-300 dark:bg-black overflow-hidden pt-24 transition-colors duration-300">
        {/* Animated Background Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <motion.h1 
            initial={{ opacity: 0, y: 100, rotateX: -45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[15vw] font-black uppercase tracking-tighter leading-none text-neutral-800/80 dark:text-neutral-700/70" 
            style={{ 
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)',
              textShadow: '0 0 80px rgba(239, 68, 68, 0.3)'
            }}
          >
            CONTACT
          </motion.h1>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-red-600 font-bold text-sm uppercase tracking-[0.4em] mb-8 inline-block">Let's Connect</span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8 leading-tight text-neutral-900 dark:text-white">
              LET'S BUILD<br />
              <span className="text-red-600">SOMETHING GREAT</span>
            </h2>
            <p className="text-xl text-neutral-700 dark:text-neutral-400 max-w-2xl mx-auto">
              We're always excited to take on new projects and collaborate with creative minds.
            </p>
          </motion.div>
        </div>

        {/* Floating 3D Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotateZ: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-red-600/20"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotateZ: [0, -5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 left-1/4 w-32 h-32 border-2 border-red-600/20 rounded-full"
        />
      </section>

      {/* Contact Form */}
      <section ref={ref} className="relative bg-neutral-200 dark:bg-black py-32 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              Ready to start your<br />
              <span className="text-red-600">digital journey?</span>
            </h2>
            <p className="text-xl text-neutral-700 dark:text-neutral-400">
              Drop us a message and let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
            onSubmit={handleSubmit}
          >
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 border flex items-center gap-3 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-600/10 border-green-600/50 text-green-400'
                    : 'bg-red-600/10 border-red-600/50 text-red-400'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span className="text-sm font-medium">{submitStatus.message}</span>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-neutral-300 dark:bg-neutral-900 border border-neutral-400 dark:border-white/10 text-neutral-900 dark:text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-neutral-300 dark:bg-neutral-900 border border-neutral-400 dark:border-white/10 text-neutral-900 dark:text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
                Phone Number <span className="text-neutral-500 font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-neutral-300 dark:bg-neutral-900 border border-neutral-400 dark:border-white/10 text-neutral-900 dark:text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                placeholder="+977 98XXXXXXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
                What service are you interested in? <span className="text-red-600">*</span>
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-neutral-300 dark:bg-neutral-900 border border-neutral-400 dark:border-white/10 text-neutral-900 dark:text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
              >
                <option value="">Select a service</option>
                <option value="website">Website Development</option>
                <option value="ai">AI Solutions</option>
                <option value="software">Custom Software</option>
                <option value="other">Other / Custom Project</option>
              </select>
            </div>

            {formData.serviceType === 'other' && (
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
                  Describe your service needs <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="customService"
                  value={formData.customService}
                  onChange={handleChange}
                  required={formData.serviceType === 'other'}
                  className="w-full px-6 py-4 bg-neutral-300 dark:bg-neutral-900 border border-neutral-400 dark:border-white/10 text-neutral-900 dark:text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                  placeholder="Tell us about your project..."
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
                Project Details <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 bg-neutral-300 dark:bg-neutral-900 border border-neutral-400 dark:border-white/10 text-neutral-900 dark:text-white focus:border-red-600 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tell us more about your project, timeline, budget, and goals..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
                  How do you want to be notified? <span className="text-red-600">*</span>
                </label>
                <select
                  name="notificationPreference"
                  value={formData.notificationPreference}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-neutral-300 dark:bg-neutral-900 border border-neutral-400 dark:border-white/10 text-neutral-900 dark:text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="sms">SMS</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
                  How do you want to get connected? <span className="text-red-600">*</span>
                </label>
                <select
                  name="connectionPreference"
                  value={formData.connectionPreference}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-neutral-300 dark:bg-neutral-900 border border-neutral-400 dark:border-white/10 text-neutral-900 dark:text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="zoom">Zoom Call</option>
                  <option value="meeting">In-Person Meeting</option>
                </select>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`group w-full py-6 font-bold text-lg uppercase tracking-widest transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-4 ${
                isSubmitting
                  ? 'bg-neutral-400 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 cursor-not-allowed'
                  : 'bg-red-600 text-neutral-100 hover:bg-neutral-900 dark:hover:bg-white hover:text-neutral-100 dark:hover:text-black'
              }`}
            >
              <Send className={`w-6 h-6 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : 'group-hover:rotate-45'}`} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && (
                <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  className="group p-8 bg-neutral-300 dark:bg-neutral-900/50 border border-neutral-400 dark:border-white/5 hover:border-red-600/50 transition-all duration-300 text-center"
                >
                  <div className="mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-2">
                    {method.label}
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                    {method.value}
                  </p>
                  {method.value2 && (
                    <p className="text-sm text-neutral-700 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                      {method.value2}
                    </p>
                  )}
                  {method.subtext && (
                    <p className="text-xs text-red-600 font-semibold mt-2">
                      {method.subtext}
                    </p>
                  )}
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
