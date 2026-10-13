"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let visible = false;
    const toggleVisibility = () => {
      const next = window.scrollY > 400;
      if (next === visible) return;
      visible = next;
      setIsVisible(next);
    };
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? "instant" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 p-3 sm:p-4 rounded-full bg-[#FF0055] text-white shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <img 
            src="/images/brand/kaelixo-logo.png" 
            alt="Scroll to top" 
            className="w-6 h-6 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 object-contain rotate-90 brightness-0 invert" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
