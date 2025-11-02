'use client';

import { useEffect } from 'react';

export function useTypewriterSound() {
  useEffect(() => {
    // Create audio context
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const playTypeSound = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Typewriter key sound parameters
      oscillator.frequency.value = 200;
      oscillator.type = 'square';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    };

    // Play sound for each character animation
    const text1Length = "Tworzę Strony".length;
    const text2Length = "Które Sprzedają".length;
    const totalChars = text1Length + text2Length;

    for (let i = 0; i < totalChars; i++) {
      setTimeout(() => {
        playTypeSound();
      }, i * 100);
    }

    return () => {
      audioContext.close();
    };
  }, []);
}

export default useTypewriterSound;