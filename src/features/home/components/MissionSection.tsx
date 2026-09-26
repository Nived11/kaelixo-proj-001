"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MissionSection() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  
  const lines = [
    "At Kaelixo, we help businesses think clearly, build intelligently, and grow confidently",
    "through the power of technology, creativity, AI and digital strategy.",
    "From bold ideas to real impact — we turn what's next into what's possible."
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!textRef.current || !containerRef.current) return;

    const wordsElements = textRef.current.querySelectorAll(".word-reveal");
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsElements,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current, // Use the text itself as the trigger
            start: "top 85%", // Starts when the text reaches 85% down the screen
            end: "bottom 45%", // Finishes when the bottom of the text reaches near middle of the screen
            scrub: 1.5, // slightly more smoothing
          }
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#020205] pt-16 pb-20 overflow-hidden flex flex-col justify-center min-h-[40vh]">
      {/* Subtle cosmic magenta aura in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF0055]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
          THINK. BUILD. <span className="text-[#FF0055]">GROW.</span>
        </h2>

        <p ref={textRef} className="text-base sm:text-lg lg:text-xl text-slate-200 font-medium max-w-4xl mx-auto leading-relaxed">
          {lines.map((line, lineIdx) => (
            <React.Fragment key={lineIdx}>
              {line.split(" ").map((word, wordIdx) => (
                <span key={wordIdx} className="word-reveal opacity-15 inline-block mr-[0.3em] mb-[0.1em]">
                  {word}
                </span>
              ))}
              {lineIdx < lines.length - 1 && <br className="hidden md:block" />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
