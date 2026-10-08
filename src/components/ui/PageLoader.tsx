"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total animation time 2.5 seconds since we removed the name reveal
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#020205]"
          // Exact exit animation
          exit={{ opacity: 0, y: -30 }} 
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background Ambient Pink Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#FF0055] rounded-full blur-[100px] pointer-events-none"
          />

          <div className="relative flex items-center justify-center z-10">
            
            {/* EXACT 2-PIECE PRECISION LOGO DRAW ANIMATION */}
            <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,0,85,0.4)]">
                
                {/* Piece 1: Left Main Block */}
                <motion.path
                  d="M 10 15 L 85 5 L 85 18 L 33 44 Q 21 50 33 56 L 85 82 L 85 95 L 10 85 Z"
                  initial={{ pathLength: 0, fill: "rgba(255, 0, 85, 0)", opacity: 0 }}
                  animate={{ pathLength: 1, fill: "rgba(255, 0, 85, 1)", opacity: 1 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    pathLength: { duration: 1.5, ease: "easeInOut" },
                    fill: { duration: 0.8, delay: 1.4, ease: "easeIn" }
                  }}
                  stroke="#FF0055"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Piece 2: Right Chevron Piece */}
                <motion.path
                  d="M 85 36 L 65 46 Q 57 50 65 54 L 85 64 Z"
                  initial={{ pathLength: 0, fill: "rgba(255, 0, 85, 0)", opacity: 0 }}
                  animate={{ pathLength: 1, fill: "rgba(255, 0, 85, 1)", opacity: 1 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    pathLength: { duration: 1.5, ease: "easeInOut" },
                    fill: { duration: 0.8, delay: 1.4, ease: "easeIn" }
                  }}
                  stroke="#FF0055"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

              </svg>
            </div>

          </div>
        </motion.div>
      ) : (
        <motion.div key="content">
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
