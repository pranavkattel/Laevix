import laevixLogo from '@/assets/laevix-logo.png';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-20 bg-black border-t border-red-600/10">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <img src={laevixLogo} alt="Laevix" className="w-8 h-8" />
            <span className="font-black uppercase tracking-tighter text-xl">Laevix</span>
          </div>

          <div className="flex gap-8">
            {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
              <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest text-neutral-medium hover:text-red-600 transition-colors duration-300">
                {social}
              </a>
            ))}
          </div>

          <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-medium">
            LAEVIX NEPAL 🇳🇵 {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
}

