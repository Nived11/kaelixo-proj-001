"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";

const PageReadyContext = createContext(false);
export const usePageReady = () => useContext(PageReadyContext);

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Start the visual deadline with hydration, alongside the logo animation.
    setHasStarted(true);
    document.body.setAttribute("data-page-loading", "true");
    // Hold the complete logo, then allow the full 600ms exit before hero playback.
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsReady(true);
      document.body.removeAttribute("data-page-loading");
    }, 3400);

    return () => {
      clearTimeout(timer);
      document.body.removeAttribute("data-page-loading");
    };
  }, []);

  return (
    <PageReadyContext.Provider value={isReady}>
      <MotionConfig reducedMotion="user">
        {isLoading && (
          <motion.div
            key="loader"
            className="page-loader pointer-events-none fixed inset-0 z-[2147483647] flex items-center justify-center bg-[#020205]"
            data-started={hasStarted}
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
                  <path
                    d="M 10 15 L 85 5 L 85 18 L 33 44 Q 21 50 33 56 L 85 82 L 85 95 L 10 85 Z"
                    className="loader-logo-piece"
                    pathLength={1}
                    stroke="#FF0055"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />

                  {/* Piece 2: Right Chevron Piece */}
                  <path
                    d="M 85 36 L 65 46 Q 57 50 65 54 L 85 64 Z"
                    className="loader-logo-piece"
                    pathLength={1}
                    stroke="#FF0055"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />

                </svg>
              </div>

            </div>
          </motion.div>
        )}
        <div>
          {children}
        </div>
      </MotionConfig>
    </PageReadyContext.Provider>
  );
}
