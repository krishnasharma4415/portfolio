"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function KonamiCode() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; offsetX: number; offsetY: number }>>([]);

  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  const triggerEasterEgg = useCallback(() => {
    setShowEasterEgg(true);
    
    // Create particle explosion with deterministic positions
    const colors = ['#a78bfa', '#fb7185', '#6ee7b7', '#fbbf24'];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: (typeof window !== 'undefined' ? window.innerWidth : 1200) / 2,
      y: (typeof window !== 'undefined' ? window.innerHeight : 800) / 2,
      color: colors[i % colors.length],
      offsetX: ((i * 137) % 400) - 200, // Deterministic offset
      offsetY: ((i * 97) % 400) - 200   // Deterministic offset
    }));
    
    setParticles(newParticles);

    // Hide easter egg after animation
    setTimeout(() => {
      setShowEasterEgg(false);
      setParticles([]);
    }, 3000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...sequence, event.code].slice(-konamiCode.length);
      setSequence(newSequence);

      // Check if the sequence matches the Konami code
      if (newSequence.length === konamiCode.length && 
          newSequence.every((key, index) => key === konamiCode[index])) {
        triggerEasterEgg();
        setSequence([]); // Reset sequence
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequence, konamiCode, triggerEasterEgg]);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
        >
          {/* Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: particle.color,
                left: particle.x,
                top: particle.y,
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
                x: [0, particle.offsetX],
                y: [0, particle.offsetY],
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Easter egg message */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-card border border-primary rounded-2xl p-8 text-center shadow-2xl">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="text-6xl mb-4"
              >
                🎉
              </motion.div>
              <h2 className="text-2xl font-bold gradient-text mb-2">
                Easter Egg Found!
              </h2>
              <p className="text-muted-foreground mb-4">
                You discovered the Konami Code! 🎮
              </p>
              <div className="text-sm text-primary">
                ↑↑↓↓←→←→BA
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mt-4 text-accent"
              >
                Thanks for being curious! 🚀
              </motion.div>
            </div>
          </motion.div>

          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}