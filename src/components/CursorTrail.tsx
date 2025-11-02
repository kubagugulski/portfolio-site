'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  id: number;
}

export default function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: idCounter++,
      };

      setPoints((prevPoints) => {
        const newPoints = [...prevPoints, newPoint];
        return newPoints.slice(-12);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-9999">
      {points.map((point, index) => {
        const size = 8 - index * 0.5;
        const opacity = 0.5 - index * 0.04;
        
        return (
          <motion.div
            key={point.id}
            initial={{ opacity, scale: 1 }}
            animate={{ 
              opacity: 0, 
              scale: 0,
              y: [0, -10, -20],
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            style={{
              position: 'absolute',
              left: point.x,
              top: point.y,
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: '#4ade80',
              transform: 'translate(-50%, -50%)',
            }}
            onAnimationComplete={() => {
              setPoints((prev) => prev.filter((p) => p.id !== point.id));
            }}
          />
        );
      })}
    </div>
  );
}