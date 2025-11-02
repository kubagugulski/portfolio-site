'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/sections/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';
import LoadingAnimation from '@/components/LoadingAnimation';
import CursorTrail from '@/components/CursorTrail';
import CircleReveal from '@/components/CircleReveal';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [circleComplete, setCircleComplete] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setShowContent(true), 1600);
      setTimeout(() => setCircleComplete(true), 1700);
    }
  }, [isLoading]);



  return (
    <>
      {isLoading && <LoadingAnimation onComplete={() => setIsLoading(false)} />}
      {!isLoading && <CircleReveal isComplete={circleComplete} />}
      <CursorTrail />
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Navbar />
          <ScrollIndicator />
        
          <main className="bg-[#1a1a1a] overflow-x-hidden">
            <Hero startAnimation={showContent} />
            
            {/* Portfolio section - placeholder */}
            <section id="portfolio" className="min-h-screen flex items-center justify-center bg-[#2a2a2a]">
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-4 text-[#e5e5e5]" style={{ fontFamily: 'Courier Prime, monospace' }}>
                  Portfolio
                </h2>
                <p className="text-[#a1a1a1]" style={{ fontFamily: 'Space Mono, monospace' }}>
                  Tu będą Twoje projekty
                </p>
              </div>
            </section>

            {/* Współpraca section - placeholder */}
            <section id="wspolpraca" className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-4 text-[#e5e5e5]" style={{ fontFamily: 'Courier Prime, monospace' }}>
                  Współpraca
                </h2>
                <p className="text-[#a1a1a1]" style={{ fontFamily: 'Space Mono, monospace' }}>
                  Tu będzie schemat współpracy
                </p>
              </div>
            </section>

            {/* Kontakt section - placeholder */}
            <section id="kontakt" className="min-h-screen flex items-center justify-center bg-[#2a2a2a]">
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-4 text-[#e5e5e5]" style={{ fontFamily: 'Courier Prime, monospace' }}>
                  Kontakt
                </h2>
                <p className="text-[#a1a1a1]" style={{ fontFamily: 'Space Mono, monospace' }}>
                  Tu będzie formularz kontaktowy
                </p>
              </div>
            </section>
            
            <Footer />
          </main>
        </motion.div>
      )}
    </>
  );
}