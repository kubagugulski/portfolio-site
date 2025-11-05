'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="min-h-screen flex items-center justify-center bg-[#1a1a1a] py-20 relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-[#e5e5e5] text-center"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          Kontakt
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#a1a1a1] mb-12 text-center"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          Masz projekt? Napisz do mnie!
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name Input */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-[#a1a1a1] mb-2 text-sm"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              Imię i nazwisko
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#4a4a4a] rounded-lg text-[#e5e5e5] focus:outline-none focus:border-[#4ade80] focus:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all duration-300"
              style={{ fontFamily: 'Space Mono, monospace' }}
              placeholder="Jan Kowalski"
            />
          </div>

          {/* Email Input */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-[#a1a1a1] mb-2 text-sm"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#4a4a4a] rounded-lg text-[#e5e5e5] focus:outline-none focus:border-[#4ade80] focus:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all duration-300"
              style={{ fontFamily: 'Space Mono, monospace' }}
              placeholder="jan@example.com"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-[#a1a1a1] mb-2 text-sm"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#4a4a4a] rounded-lg text-[#e5e5e5] focus:outline-none focus:border-[#4ade80] focus:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all duration-300 resize-none"
              style={{ fontFamily: 'Space Mono, monospace' }}
              placeholder="Opowiedz o swoim projekcie..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
            whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              status === 'loading' 
                ? 'bg-[#4a4a4a] text-[#a1a1a1] cursor-not-allowed' 
                : 'bg-[#4ade80] text-[#1a1a1a] hover:shadow-[0_0_25px_rgba(74,222,128,0.5)]'
            }`}
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            {status === 'loading' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
          </motion.button>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-[#4ade80] p-4 bg-[#4ade80]/10 rounded-lg border border-[#4ade80]"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              ✓ Wiadomość wysłana pomyślnie!
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-400 p-4 bg-red-400/10 rounded-lg border border-red-400"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              ✗ Coś poszło nie tak. Spróbuj ponownie.
            </motion.div>
          )}
        </motion.form>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 right-1/4 w-28 h-28 border border-[#4ade80] opacity-10 rounded-lg"
      />
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-20 h-20 border border-[#4ade80] opacity-10"
      />
    </section>
  );
}