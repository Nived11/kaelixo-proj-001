"use client";

import React from "react";

export default function MissionSection() {
  return (
    <section className="relative bg-[#020205] pt-12 pb-24 overflow-hidden">
      {/* Subtle cosmic magenta aura in background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#FF0055]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          THINK. BUILD. <span className="text-[#FF0055]">GROW.</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
          At Kaelixo, we help businesses think clearly, build intelligently, and grow confidently through the power of technology, creativity, AI and digital strategy. From bold ideas to real impact — we turn what&apos;s next into what&apos;s possible.
        </p>
      </div>
    </section>
  );
}
