import laevixLogo from '@/assets/laevix-logo.png';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-20 bg-neutral-200 dark:bg-black border-t border-neutral-300 dark:border-red-600/10 transition-colors duration-300" itemScope itemType="https://schema.org/Organization">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <img src={laevixLogo} alt="Laevix - AI Tech Company Nepal" className="w-8 h-8" itemProp="logo" />
            <span className="font-black uppercase tracking-tighter text-xl text-neutral-900 dark:text-white" itemProp="name">Laevix</span>
          </div>

          <nav aria-label="Social Media Links">
            <div className="flex gap-8">
              <a href="https://www.instagram.com/laevix" className="text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-medium hover:text-red-600 transition-colors duration-300" aria-label="Follow Laevix on Instagram" rel="noopener noreferrer" target="_blank" itemProp="sameAs">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/laevix" className="text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-medium hover:text-red-600 transition-colors duration-300" aria-label="Connect with Laevix on LinkedIn" rel="noopener noreferrer" target="_blank" itemProp="sameAs">
                LinkedIn
              </a>
              <a href="https://twitter.com/laevix" className="text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-medium hover:text-red-600 transition-colors duration-300" aria-label="Follow Laevix on Twitter" rel="noopener noreferrer" target="_blank" itemProp="sameAs">
                Twitter
              </a>
            </div>
          </nav>

          <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-medium">
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">KATHMANDU</span>, 
              <span itemProp="addressCountry"> NEPAL</span> 🇳🇵
            </span> {currentYear}
          </div>
        </div>
        
        {/* Hidden SEO Footer Content */}
        <div className="sr-only">
          <p itemProp="description">Laevix - Nepal's leading AI tech company and website making agency. Specializing in website development, AI solutions, custom software, and digital transformation services in Kathmandu, Nepal. Contact: info@laevix.com</p>
          <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="streetAddress">Kathmandu</span>,
            <span itemProp="addressRegion">Bagmati Province</span>,
            <span itemProp="addressCountry">Nepal</span>
          </address>
          <div>Services: Website Development Nepal, AI Tech Company Nepal, Website Making Company Kathmandu, AI Solutions Nepal, Custom Software Development, Business Automation, Digital Transformation, Web Design Nepal, AI Agents, Machine Learning, Cloud Solutions</div>
        </div>
      </div>
    </footer>
  );
}

