'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 100);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <motion.div
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-100 bg-[#1a1a1a] flex items-center justify-center"
    >
      {/* Animated initials */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <motion.h1
          className="text-[120px] md:text-[180px] font-bold text-[#4ade80]"
          style={{ fontFamily: 'Courier Prime, monospace' }}
          initial={{ letterSpacing: '-0.5em', opacity: 0 }}
          animate={{ letterSpacing: '0em', opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          JG
        </motion.h1>

        {/* Animated circle around initials */}
        <motion.div
          className="absolute inset-0 border-2 border-[#4ade80] rounded-full"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1.5, rotate: 360, opacity: [1, 0] }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        />

        {/* Dots animation */}
        <motion.div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#4ade80] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4ade8020_1px,transparent_1px),linear-gradient(to_bottom,#4ade8020_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>
    </motion.div>
  );
}