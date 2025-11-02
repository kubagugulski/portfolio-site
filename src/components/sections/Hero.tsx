'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#1a1a1a] pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Animated heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-[#e5e5e5]"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          Tworzę Strony
          <br />
          <span className="text-[#4ade80]">Które Sprzedają</span>
        </motion.h1>

        {/* Animated subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-[#a1a1a1] mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          Profesjonalne strony WordPress dla firm i freelancerów.
          <br />
          Szybko, ładnie, skutecznie.
        </motion.p>

        {/* Animated CTA button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05, backgroundColor: '#22c55e' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#4ade80] text-[#1a1a1a] px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          Rozpocznij Współpracę →
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#4ade80] rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#4ade80] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4ade8020_1px,transparent_1px),linear-gradient(to_bottom,#4ade8020_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 w-20 h-20 border border-[#4ade80] opacity-20 rounded-lg"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-10 w-32 h-32 border border-[#4ade80] opacity-20 rounded-full"
      />
    </section>
  );
}