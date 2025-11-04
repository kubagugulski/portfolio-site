'use client';

import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center bg-[#1a1a1a] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-[#e5e5e5]"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          Portfolio
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#a1a1a1] max-w-2xl mx-auto"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          Tu będą Twoje projekty i realizacje
        </motion.p>
      </div>

      {/* Decorative element */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-10 w-32 h-32 border border-[#4ade80] opacity-10 rounded-full"
      />
    </section>
  );
}