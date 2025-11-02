'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Start' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'wspolpraca', label: 'Współpraca' },
  { id: 'kontakt', label: 'Kontakt' },
];

// Variants for stagger animation
const menuVariants = {
  closed: {
    scale: 0,
    opacity: 0,
    transition: {
      delay: 0.3,
      type: "spring" as const,
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 30,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 }
};

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-200"
        aria-label="Menu"
      >
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="w-6 h-0.5 bg-[#4ade80] block"
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="w-6 h-0.5 bg-[#4ade80] block"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="w-6 h-0.5 bg-[#4ade80] block"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#1a1a1a] z-150 flex items-center justify-center"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              transformOrigin: 'center',
            }}
          >

            <motion.nav className="flex flex-col gap-8 items-center">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, color: '#4ade80' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => scrollToSection(section.id)}
                  className="text-4xl text-[#a1a1a1] transition-colors"
                  style={{ fontFamily: 'Courier Prime, monospace' }}
                >
                  {section.label}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}