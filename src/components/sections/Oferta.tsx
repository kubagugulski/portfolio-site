'use client';

import { motion } from 'framer-motion';

export default function Oferta() {
  return (
    <section id="oferta" className="min-h-screen flex items-center justify-center bg-[#2a2a2a] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-[#e5e5e5]"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          Oferta
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#a1a1a1] max-w-2xl mx-auto"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          Tu będzie opis oferty i usług
        </motion.p>
      </div>

      {/* Decorative element */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-10 w-24 h-24 border border-[#4ade80] opacity-10 rounded-lg"
      />
    </section>
  );
}