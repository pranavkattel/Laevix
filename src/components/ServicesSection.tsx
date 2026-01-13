import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        title: 'Website Development',
        description: 'Professional website design and development services in Nepal. From responsive corporate websites to e-commerce platforms, we create stunning digital experiences that drive business growth.',
        letter: 'WEB',
        rest: 'SITES',
        icon: '✦',
        keywords: 'website making company nepal, web development kathmandu, custom website design'
    },
    {
        title: 'AI Solutions',
        description: 'Cutting-edge AI agents and intelligent automation for businesses in Nepal. From chatbots to predictive analytics, we implement AI solutions that transform your operations.',
        letter: 'AI',
        rest: 'TECH',
        icon: '❖',
        keywords: 'ai tech company nepal, artificial intelligence solutions, ai agents nepal'
    },
    {
        title: 'Custom Software',
        description: 'Tailored software development and digital transformation services. CMS integration, API development, cloud solutions - fully functional, scalable, and future-proof technology.',
        letter: 'SOFT',
        rest: 'WARE',
        icon: '⌘',
        keywords: 'custom software development nepal, business automation, digital transformation'
    }
];

export function ServicesSection() {
    const navigate = useNavigate();
    
    return (
        <section id="services" className="relative bg-neutral-300 dark:bg-black pt-24 md:pt-56 pb-16 md:pb-32 border-t border-neutral-400 dark:border-white/5 overflow-hidden transition-colors duration-300">
            {/* Background Text */}
            <div className="flex absolute top-0 left-0 w-full justify-center pointer-events-none select-none overflow-hidden">
                <h2 className="text-[15vw] md:text-[10vw] font-black uppercase tracking-tighter leading-none translate-y-[-10%] text-neutral-800/80 dark:text-neutral-700/70" style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)' }}>
                    SERVICES
                </h2>
            </div>

            {/* Hidden SEO Content */}
            <div className="sr-only">
                <h2>Leading AI Tech Company and Website Development Services in Nepal</h2>
                <p>Laevix offers comprehensive technology services including website development, AI solutions, and custom software development in Nepal. As the top website making company in Kathmandu, we provide professional web design, AI agent development, business automation, digital transformation, and intelligent systems for businesses across Nepal. Our services include responsive website design, e-commerce development, AI chatbots, machine learning solutions, custom CMS, API development, cloud solutions, and mobile app development. Contact Nepal's premier tech company for cutting-edge digital solutions.</p>
            </div>

            <div className="relative z-10 border-t border-white/10">
                {/* Cross Grid Lines & Markers */}
                <div className="hidden md:flex absolute top-0 left-0 w-full justify-between px-[10%] pointer-events-none">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="relative flex flex-col items-center">
                            <span className="text-neutral-400 dark:text-neutral-500 text-xl font-light -translate-y-1/2">+</span>
                            <div className="w-[1px] h-screen bg-white/5" />
                        </div>
                    ))}
                </div>

                <div className="container-narrow px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center p-6 md:p-12"
                            >
                                <div className="aspect-square w-full mb-8 md:mb-12 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-sm relative overflow-hidden group shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_60px_rgba(239,68,68,0.6)] transition-all duration-500">
                                    {/* Placeholder for 3D Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-7xl md:text-9xl text-red-600/40 group-hover:text-red-600 transition-colors duration-500">
                                            {service.icon}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/20 transition-all duration-500" />
                                    <div className="absolute inset-0 border-2 border-red-600/20 group-hover:border-red-600/40 transition-colors duration-500" />
                                </div>

                                <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 md:mb-6 uppercase">
                                    <span className="text-neutral-400 dark:text-neutral-600">{service.letter}</span><span className="text-neutral-900 dark:text-white">{service.rest}</span>
                                </h3>
                                
                                {/* Hidden SEO keywords */}
                                <span className="sr-only">{service.keywords}</span>

                                <p className="text-neutral-700 dark:text-neutral-400 text-sm md:text-base leading-relaxed font-normal">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Discover More Button */}
                <div className="flex justify-center mt-12 md:mt-16 px-4">
                    <motion.button
                        onClick={() => navigate('/services')}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative px-6 md:px-8 py-3 bg-neutral-800 dark:bg-white text-neutral-100 dark:text-black font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-red-600 hover:text-neutral-100 transition-colors duration-300 touch-manipulation w-full md:w-auto max-w-xs"
                    >
                        • DISCOVER MORE
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
