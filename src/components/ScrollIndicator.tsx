'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Start' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'wspolpraca', label: 'Współpraca' },
  { id: 'kontakt', label: 'Kontakt' },
];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    // Also listen to scroll on main element if it exists
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
      {sections.map((section) => (
        <div
          key={section.id}
          className="relative flex items-center"
          onMouseEnter={() => setHoveredSection(section.id)}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: hoveredSection === section.id ? 1 : 0,
              x: hoveredSection === section.id ? 0 : 10,
            }}
            className="absolute right-10 bg-[#2a2a2a] text-[#a1a1a1] px-3 py-1 rounded text-sm whitespace-nowrap"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            {section.label}
          </motion.div>

          {/* Dot */}
          <motion.button
            onClick={() => scrollToSection(section.id)}
            className="relative w-3 h-3 rounded-full cursor-pointer"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              animate={{
                borderColor: activeSection === section.id ? '#4ade80' : '#4a4a4a',
                scale: activeSection === section.id ? 1.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Inner dot */}
            <motion.div
              className="absolute inset-0 m-auto w-2 h-2 rounded-full"
              animate={{
                backgroundColor: activeSection === section.id ? '#4ade80' : '#4a4a4a',
                scale: activeSection === section.id ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      ))}
    </div>
  );
}