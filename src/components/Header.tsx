import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import laevixLogo from '@/assets/laevix-logo.png';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-200/95 dark:bg-black/80 backdrop-blur-md border-b border-neutral-900 dark:border-transparent transition-colors duration-300">
      <nav className="flex items-center justify-between px-4 md:px-12 lg:px-24 h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2 z-50">
          <img src={laevixLogo} alt="Laevix" className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300" />
        </Link>

        {/* Desktop Navigation - Centered style */}
        <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigation(link.href)}
              className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 flex items-center gap-2 group relative"
            >
              <span className="text-neutral-400 dark:text-neutral-600 group-hover:text-red-600 transition-colors">+</span>
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Contact Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-3 bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-red-600 hover:border-red-600 hover:text-neutral-100 transition-all duration-300 group"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => handleNavigation('/contact')}
            className="px-6 py-3 bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:border-red-600 hover:text-neutral-100 transition-all duration-300 flex items-center gap-3 group"
          >
            <div className="w-2 h-2 bg-red-600 rounded-full group-hover:animate-ping" />
            Contact
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-900 dark:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-900 dark:text-white"
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
            className="md:hidden bg-neutral-200 dark:bg-black border-b border-neutral-300 dark:border-white/5"
          >
            <div className="flex flex-col py-6 px-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className="py-3 text-left text-lg font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-light hover:text-red-500 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigation('#contact')}
                className="py-4 mt-2 bg-red-600 text-neutral-100 font-bold uppercase tracking-widest text-center"
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

