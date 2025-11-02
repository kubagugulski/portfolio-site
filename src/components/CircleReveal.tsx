// 'use client';

// import { motion } from 'framer-motion';

// interface CircleRevealProps {
//   isComplete: boolean;
// }

// export default function CircleReveal({ isComplete }: CircleRevealProps) {
//   if (isComplete) return null;

//   return (
//     <motion.div
//       className="fixed inset-0 z-90 pointer-events-none flex items-center justify-center bg-[#1a1a1a]"
//     >
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 150 }}
//         transition={{
//           duration: 1,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="w-10 h-10 rounded-full bg-[#4ade80]"
//       />
//     </motion.div>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CircleRevealProps {
  isComplete: boolean;
}

export default function CircleReveal({ isComplete }: CircleRevealProps) {
  const [phase, setPhase] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    if (!isComplete) {
      // Po ~0.8 s zaczyna się otwieranie kurtyny
      const timer = setTimeout(() => setPhase('exit'), 800);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  if (isComplete) return null;

  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: phase === 'enter' ? 0 : '100%' }}
      transition={{
        duration: 1,
        ease: [0.83, 0, 0.17, 1], // smooth ease in/out
      }}
      className="fixed inset-0 z-[90] bg-[#4ade80]"
    />
  );
}
