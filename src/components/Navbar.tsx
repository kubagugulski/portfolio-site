'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer text-[#4ade80]"
            style={{ fontFamily: 'Courier Prime, monospace' }}
            onClick={() => scrollToSection('hero')}
          >
            JG
          </motion.div>

          {/* Desktop Menu - hidden on mobile */}
          <div className="hidden md:flex gap-8">
            {['Start', 'Oferta', 'Portfolio', 'FAQ', 'Kontakt'].map((item, index) => {
              const sectionId = item.toLowerCase() === 'start' ? 'hero' : 
                               item.toLowerCase();
              return (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1, color: '#4ade80' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => scrollToSection(sectionId)}
                  className="text-[#a1a1a1] hover:text-[#4ade80] font-medium transition-colors duration-200"
                  style={{ fontFamily: 'Space Mono, monospace' }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {item}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </motion.nav>
  );
}