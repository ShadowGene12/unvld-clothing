import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BrandCurtain: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hold the off-black screen for 1.5 seconds, then fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center pointer-events-none"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-3xl md:text-5xl font-display tracking-[0.3em] uppercase"
          >
            UNVLD
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrandCurtain;
