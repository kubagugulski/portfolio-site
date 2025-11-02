'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface HeroProps {
  startAnimation: boolean;
}

export default function Hero({ startAnimation }: HeroProps) {
  const text1 = "Tworzę Strony";
  const text2 = "Które Sprzedają";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#1a1a1a] pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Typewriter heading */}
        <div className="text-5xl md:text-7xl font-bold mb-6 text-[#e5e5e5] min-h-[200px]" style={{ fontFamily: 'Courier Prime, monospace' }}>
          <div className="block">
            {text1.split('').map((char, index) => (
              <motion.span
                key={`line1-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: startAnimation ? 1 : 0 }}
                transition={{ duration: 0.05, delay: startAnimation ? index * 0.04 : 0 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <br />
          <div className="block text-[#4ade80]">
            {text2.split('').map((char, index) => (
              <motion.span
                key={`line2-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: startAnimation ? 1 : 0 }}
                transition={{ duration: 0.05, delay: startAnimation ? (text1.length * 0.04) + (index * 0.04) + 0.2 : 0 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Animated subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: startAnimation ? 1 : 0, y: startAnimation ? 0 : 30 }}
          transition={{ duration: 0.8, delay: startAnimation ? (text1.length + text2.length) * 0.04 + 0.5 : 0 }}
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
          animate={{ opacity: startAnimation ? 1 : 0, scale: startAnimation ? 1 : 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 25px rgba(74, 222, 128, 0.5)",
          }}
          transition={{ 
            opacity: { duration: 0.5, delay: startAnimation ? (text1.length + text2.length) * 0.04 + 1 : 0 },
            scale: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            fontFamily: 'Space Mono, monospace',
            animation: 'pulse-shadow 2s ease-in-out infinite',
          }}
          onClick={() => {
            const kontakt = document.getElementById('kontakt');
            if (kontakt) {
              const offsetTop = kontakt.offsetTop;
              window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
          }}
          className="bg-[#4ade80] text-[#1a1a1a] px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow relative z-20 animate-[pulse-shadow_2s_ease-in-out_infinite]"
          
        >
          Rozpocznij Współpracę →
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: startAnimation ? 1 : 0 }}
          transition={{ delay: startAnimation ? (text1.length + text2.length) * 0.04 + 1.5 : 0, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
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
        <div className="h-full w-full bg-[linear-gradient(to_right,#4ade8020_1px,transparent_1px),linear-gradient(to_bottom,#4ade8020_1px,transparent_1px)] bg-size-[40px_40px]" />
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