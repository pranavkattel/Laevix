import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import laevixLogo from '@/assets/laevix-logo.png';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else if (href.startsWith('#')) {
      // If it's a hash link, navigate to home page first if not already there
      if (window.location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-16 md:h-24">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <img src={laevixLogo} alt="Laevix" className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300" />
          <span className="text-xl font-black uppercase tracking-tighter text-white group-hover:text-red-600 transition-colors">Laevix</span>
        </Link>

        {/* Desktop Navigation - Centered style */}
        <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigation(link.href)}
              className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-all duration-300 flex items-center gap-2 group relative"
            >
              <span className="text-neutral-600 group-hover:text-red-600 transition-colors">+</span>
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavigation('/contact')}
            className="px-6 py-3 bg-neutral-900 border border-white/10 text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center gap-3 group"
          >
            <div className="w-2 h-2 bg-red-600 rounded-full group-hover:animate-ping" />
            Contact
          </button>
        </div>


        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black border-b border-white/5"
          >
            <div className="flex flex-col py-6 px-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className="py-3 text-left text-lg font-bold uppercase tracking-widest text-neutral-light hover:text-red-500 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigation('#contact')}
                className="py-4 mt-2 bg-red-600 text-white font-bold uppercase tracking-widest text-center"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

