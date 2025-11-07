'use client';

import { motion } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Projekt Example 1',
    url: 'https://example.com',
    image: 'https://placehold.co/800x600/2a2a2a/4ade80?text=Projekt+1'
  },
  {
    id: 2,
    title: 'Projekt Example 2',
    url: 'https://example.com',
    image: 'https://placehold.co/800x600/2a2a2a/4ade80?text=Projekt+2'
  },
  {
    id: 3,
    title: 'Projekt Example 3',
    url: 'https://example.com',
    image: 'https://placehold.co/800x600/2a2a2a/4ade80?text=Projekt+3'
  },
  {
    id: 4,
    title: 'Projekt Example 4',
    url: 'https://example.com',
    image: 'https://placehold.co/800x600/2a2a2a/4ade80?text=Projekt+4'
  }
];

export default function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center bg-[#1a1a1a] py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-[#e5e5e5] text-center"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          Portfolio
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#a1a1a1] max-w-2xl mx-auto text-center mb-12"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          Sprawdź moje ostatnie realizacje
        </motion.p>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {portfolioItems.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group"
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-[#4a4a4a] group-hover:border-[#4ade80] transition-all duration-300">
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto group-hover:blur-sm group-hover:scale-105 transition-all duration-300"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-[#1a1a1a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#4ade80] flex items-center justify-center">
                            <svg className="w-8 h-8 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                          <p className="text-[#4ade80] font-semibold text-lg" style={{ fontFamily: 'Space Mono, monospace' }}>
                            Zobacz stronę
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-[#2a2a2a] border-2 border-[#4ade80] flex items-center justify-center hover:bg-[#4ade80] hover:text-[#1a1a1a] text-[#4ade80] transition-all duration-300 z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-[#2a2a2a] border-2 border-[#4ade80] flex items-center justify-center hover:bg-[#4ade80] hover:text-[#1a1a1a] text-[#4ade80] transition-all duration-300 z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-[#4ade80] w-8'
                    : 'bg-[#4a4a4a] hover:bg-[#4ade80]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Current Project Title */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-8"
        >
          <h3
            className="text-2xl md:text-3xl font-bold text-[#e5e5e5]"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            {portfolioItems[selectedIndex].title}
          </h3>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-10 w-32 h-32 border border-[#4ade80] opacity-10 rounded-full"
      />
    </section>
  );
}