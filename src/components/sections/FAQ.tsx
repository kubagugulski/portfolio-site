'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqData = [
  {
    question: "Pytanie placeholder 1?",
    answer: "Tutaj będzie odpowiedź na pierwsze pytanie. Możesz wpisać dowolną treść, która będzie się rozwijać po kliknięciu."
  },
  {
    question: "Pytanie placeholder 2?",
    answer: "Tutaj będzie odpowiedź na drugie pytanie. Możesz wpisać dowolną treść, która będzie się rozwijać po kliknięciu."
  },
  {
    question: "Pytanie placeholder 3?",
    answer: "Tutaj będzie odpowiedź na trzecie pytanie. Możesz wpisać dowolną treść, która będzie się rozwijać po kliknięciu."
  },
  {
    question: "Pytanie placeholder 4?",
    answer: "Tutaj będzie odpowiedź na czwarte pytanie. Możesz wpisać dowolną treść, która będzie się rozwijać po kliknięciu."
  },
  {
    question: "Pytanie placeholder 5?",
    answer: "Tutaj będzie odpowiedź na piąte pytanie. Możesz wpisać dowolną treść, która będzie się rozwijać po kliknięciu."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-screen flex items-center justify-center bg-[#2a2a2a] py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-[#e5e5e5] text-center"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          FAQ
        </motion.h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] transition-shadow duration-300"
              style={{
                boxShadow: openIndex === index 
                  ? '0 0 25px rgba(74, 222, 128, 0.4)' 
                  : '0 4px 6px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#252525] transition-colors cursor-pointer"
              >
                <span 
                  className="text-lg md:text-xl font-semibold text-[#e5e5e5] pr-4"
                  style={{ fontFamily: 'Courier Prime, monospace' }}
                >
                  {item.question}
                </span>
                
                {/* Plus/Minus Icon */}
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0 w-8 h-8 rounded-full border-2 border-[#4ade80] flex items-center justify-center"
                >
                  <div className="relative w-4 h-4">
                    {/* Horizontal line */}
                    <motion.div 
                      className="absolute top-1/2 left-0 w-full h-0.5 bg-[#4ade80] transform -translate-y-1/2"
                    />
                    {/* Vertical line */}
                    <motion.div 
                      animate={{ 
                        opacity: openIndex === index ? 0 : 1,
                        scaleY: openIndex === index ? 0 : 1
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-0 left-1/2 h-full w-0.5 bg-[#4ade80] transform -translate-x-1/2"
                    />
                  </div>
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 border-t border-[#4ade80]/20">
                      <motion.p
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#a1a1a1] leading-relaxed"
                        style={{ fontFamily: 'Space Mono, monospace' }}
                      >
                        {item.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-1/4 w-20 h-20 border border-[#4ade80] opacity-10"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-[#4ade80] opacity-10 rounded-full"
      />
    </section>
  );
}