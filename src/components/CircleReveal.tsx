'use client';

import { motion } from 'framer-motion';

interface CircleRevealProps {
  isComplete: boolean;
}

export default function CircleReveal({ isComplete }: CircleRevealProps) {
  if (isComplete) return null;

  return (
    <motion.div
      className="fixed inset-0 z-90 pointer-events-none flex items-center justify-center bg-[#1a1a1a]"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 150 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-10 h-10 rounded-full bg-[#4ade80]"
      />
    </motion.div>
  );
}