'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScrollFoldIndicator() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
    >
      <button
        onClick={scrollToNext}
        className="w-12 h-12 rounded-full bg-glass backdrop-blur-md border border-white/20 flex items-center justify-center hover:shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={20} className="text-text" />
      </button>
    </motion.div>
  );
}