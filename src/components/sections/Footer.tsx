'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#2a2a2a] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#a1a1a1]"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            © 2026 Jakub Gugulski. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-6"
          >
            <motion.a
              href="https://github.com/kubagugulski"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#4ade80' }}
              className="text-[#a1a1a1] hover:text-[#4ade80] transition-colors"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              GitHub
            </motion.a>
            <span className="text-[#4a4a4a]">|</span>
            <motion.a
              href="https://www.linkedin.com/in/jakub-gugulski-155177232/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#4ade80' }}
              className="text-[#a1a1a1] hover:text-[#4ade80] transition-colors"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1, color: '#4ade80' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#a1a1a1] hover:text-[#4ade80] transition-colors flex items-center gap-2"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Powrót na górę ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}