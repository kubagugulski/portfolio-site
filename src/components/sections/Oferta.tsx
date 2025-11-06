'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Oferta() {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToContact = () => {
    const kontakt = document.getElementById('kontakt');
    if (kontakt) {
      kontakt.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="oferta" className="min-h-screen flex items-center justify-center bg-[#2a2a2a] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4 text-[#e5e5e5]"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            Oferta
          </h2>
          <p
            className="text-lg text-[#a1a1a1] max-w-2xl mx-auto"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Wybierz usługę dopasowaną do Twoich potrzeb
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Strona wizytówka */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#1a1a1a] rounded-lg p-8 border border-[#4a4a4a] hover:border-[#4ade80] hover:shadow-[0_0_25px_rgba(74,222,128,0.2)] transition-all duration-300 flex flex-col"
          >
            <h3
              className="text-2xl font-bold text-[#e5e5e5] mb-6"
              style={{ fontFamily: 'Courier Prime, monospace' }}
            >
              Strona Wizytówka
            </h3>

            <ul className="space-y-3 mb-8 flex-grow">
              {['Responsywny design', 'Optymalizacja SEO', 'Formularz kontaktowy', 'Panel WordPress', 'Hosting i domena w cenie'].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4ade80]/20 border border-[#4ade80] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#a1a1a1]" style={{ fontFamily: 'Space Mono, monospace' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#4a4a4a] pt-6 mt-auto">
              <div className="mb-4">
                <span className="text-[#a1a1a1] text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>od</span>
                <div className="text-4xl font-bold text-[#4ade80]" style={{ fontFamily: 'Courier Prime, monospace' }}>
                  900 zł
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="w-full py-3 bg-[#4ade80] text-[#1a1a1a] rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                Zamów teraz
              </motion.button>
            </div>
          </motion.div>

          {/* Card 2 - Optymalizacja wizytówek */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] rounded-lg p-8 border border-[#4a4a4a] hover:border-[#4ade80] hover:shadow-[0_0_25px_rgba(74,222,128,0.2)] transition-all duration-300 flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <h3
                className="text-2xl font-bold text-[#e5e5e5]"
                style={{ fontFamily: 'Courier Prime, monospace' }}
              >
                Optymalizacja<br />Wizytówek Google
              </h3>
              <button
                onClick={() => setShowPopup(true)}
                className="text-xs text-[#4ade80] hover:text-[#22c55e] border-b border-[#4ade80] hover:border-[#22c55e] transition-colors whitespace-nowrap"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                Czym to jest?
              </button>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {['Optymalizacja profilu', 'Dodanie zdjęć i opisów', 'Zarządzanie opiniami', 'Raport miesięczny', 'Wsparcie techniczne'].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4ade80]/20 border border-[#4ade80] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#a1a1a1]" style={{ fontFamily: 'Space Mono, monospace' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#4a4a4a] pt-6 mt-auto">
              <div className="mb-4">
                <span className="text-[#a1a1a1] text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>od</span>
                <div className="text-4xl font-bold text-[#4ade80]" style={{ fontFamily: 'Courier Prime, monospace' }}>
                  500 zł
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="w-full py-3 bg-[#4ade80] text-[#1a1a1a] rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                Zamów teraz
              </motion.button>
            </div>
          </motion.div>

          {/* Card 3 - Pozostałe usługi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#1a1a1a] rounded-lg p-8 border border-[#4a4a4a] hover:border-[#4ade80] hover:shadow-[0_0_25px_rgba(74,222,128,0.2)] transition-all duration-300 flex flex-col"
          >
            <h3
              className="text-2xl font-bold text-[#e5e5e5] mb-6"
              style={{ fontFamily: 'Courier Prime, monospace' }}
            >
              Pozostałe Usługi
            </h3>

            <p className="text-[#a1a1a1] mb-6" style={{ fontFamily: 'Space Mono, monospace' }}>
              Masz inny pomysł? Podziel się nim ze mną!
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {['Sklepy internetowe', 'Landing pages', 'Integracje z API', 'Konsultacje techniczne', 'Audyt strony'].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4ade80]/20 border border-[#4ade80] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#a1a1a1]" style={{ fontFamily: 'Space Mono, monospace' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#4a4a4a] pt-6 mb-4 mt-auto">
              <div className="text-center mb-4">
                <p className="text-sm text-[#a1a1a1] mb-2" style={{ fontFamily: 'Space Mono, monospace' }}>
                  Napisz bezpośrednio:
                </p>
                <a
                  href="mailto:kontakt@example.com"
                  className="text-[#4ade80] hover:text-[#22c55e] transition-colors text-lg font-semibold"
                  style={{ fontFamily: 'Courier Prime, monospace' }}
                >
                  kontakt@example.com
                </a>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="w-full py-3 bg-[#4ade80] text-[#1a1a1a] rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              Skontaktuj się
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              {/* Modal */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#1a1a1a] border border-[#4ade80] rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3
                    className="text-2xl font-bold text-[#e5e5e5]"
                    style={{ fontFamily: 'Courier Prime, monospace' }}
                  >
                    Wizytówka Google Business
                  </h3>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-[#a1a1a1] hover:text-[#4ade80] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-4 text-[#a1a1a1]" style={{ fontFamily: 'Space Mono, monospace' }}>
                  <p>
                    <strong className="text-[#4ade80]">Wizytówka Google Business</strong> to darmowy profil Twojej firmy, który pojawia się w wynikach wyszukiwania Google oraz na Mapach Google.
                  </p>
                  <p>
                    Optymalizacja wizytówki to proces, w którym:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Uzupełniamy wszystkie informacje o firmie</li>
                    <li>Dodajemy profesjonalne zdjęcia</li>
                    <li>Optymalizujemy opisy pod kątem SEO</li>
                    <li>Zarządzamy opiniami klientów</li>
                    <li>Monitorujemy statystyki</li>
                  </ul>
                  <p>
                    <strong className="text-[#4ade80]">Efekt?</strong> Twoja firma jest lepiej widoczna w lokalnych wynikach wyszukiwania, co przekłada się na więcej klientów!
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPopup(false)}
                  className="w-full mt-6 py-3 bg-[#4ade80] text-[#1a1a1a] rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all"
                  style={{ fontFamily: 'Space Mono, monospace' }}
                >
                  Rozumiem
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Decorative element */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-10 w-24 h-24 border border-[#4ade80] opacity-10 rounded-lg"
      />
    </section>
  );
}