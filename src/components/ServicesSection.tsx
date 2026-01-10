import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        title: 'Define',
        description: 'Laying the foundation with strategy, style and structure. From brand discovery to visual direction, everything starts here.',
        letter: 'De',
        rest: 'fine',
        icon: '✦'
    },
    {
        title: 'Design',
        description: 'Crafting clear, bold and personality-driven interfaces. High-fidelity UI with motion and intent, straight from Figma.',
        letter: 'De',
        rest: 'sign',
        icon: '❖'
    },
    {
        title: 'Develop',
        description: 'Bringing design to life in Webflow, smooth, responsive and accessible. From CMS to micro-interactions; fully functional and future-proof.',
        letter: 'De',
        rest: 'velop',
        icon: '⌘'
    }
];

export function ServicesSection() {
    const navigate = useNavigate();
    
    return (
        <section id="services" className="relative bg-black pt-56 pb-32 border-t border-white/5 overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden">
                <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-none translate-y-[-10%] text-neutral-700/70" style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)' }}>
                    SERVICES
                </h2>
            </div>

            <div className="relative z-10 border-t border-white/10">
                {/* Cross Grid Lines & Markers */}
                <div className="absolute top-0 left-0 w-full flex justify-between px-[10%] pointer-events-none">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="relative flex flex-col items-center">
                            <span className="text-neutral-500 text-xl font-light -translate-y-1/2">+</span>
                            <div className="w-[1px] h-screen bg-white/5" />
                        </div>
                    ))}
                </div>

                <div className="container-narrow px-0 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`flex flex-col p-8 md:p-12 ${index !== 2 ? 'md:border-r border-white/5' : ''}`}
                            >
                                <div className="aspect-square w-full mb-12 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-sm flex items-center justify-center relative overflow-hidden group shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_60px_rgba(239,68,68,0.6)] transition-all duration-500">
                                    {/* Placeholder for 3D Icon */}
                                    <span className="text-9xl text-red-600/40 group-hover:text-red-600 transition-colors duration-500">
                                        {service.icon}
                                    </span>
                                    <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/20 transition-all duration-500" />
                                    <div className="absolute inset-0 border-2 border-red-600/20 group-hover:border-red-600/40 transition-colors duration-500" />
                                </div>

                                <h3 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
                                    <span className="text-neutral-600">{service.letter}</span>
                                    <span className="text-white">{service.rest}</span>
                                </h3>

                                <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-normal">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Discover More Button */}
                <div className="flex justify-center mt-16">
                    <motion.button
                        onClick={() => navigate('/services')}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative px-8 py-3 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors duration-300"
                    >
                        • DISCOVER MORE
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
