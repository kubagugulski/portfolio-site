'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/sections/Footer';
import Kontakt from '@/components/sections/Kontakt';
import FAQ from '@/components/sections/FAQ';
import Portfolio from '@/components/sections/Portfolio';
import Oferta from '@/components/sections/Oferta';
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
            <Oferta />
            <Portfolio />
            <FAQ />
            <Kontakt />
            <Footer />
          </main>
        </motion.div>
      )}
    </>
  );
}