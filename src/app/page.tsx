'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import ScrollIndicator from '@/components/ScrollIndicator';
import LoadingAnimation from '@/components/LoadingAnimation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingAnimation onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? 'hidden' : ''}>
        <Navbar />
        <ScrollIndicator />
        
        <main className="bg-[#1a1a1a]">
          <Hero />
          
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
        </main>
      </div>
    </>
  );
}