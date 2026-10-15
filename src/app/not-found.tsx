"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";

const FuzzyText = dynamic(() => import("@/components/ui/FuzzyText"), {
  ssr: false,
});

export default function NotFound() {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#020205]">
      {/* Background radial glow */}
      <div
        className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full pointer-events-none opacity-20 -z-0"
        style={{
          background: "radial-gradient(circle, #FF0055 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Fuzzy 404 Headline */}
      <div className="relative z-10 flex items-center justify-center mb-2">
        <FuzzyText
          color="#FF0055"
          fontSize="clamp(4.5rem, 15vw, 11rem)"
          fontWeight={900}
          fontFamily="var(--font-heading, sans-serif)"
          colorSplit={0}
          trigger="hover"
          direction="horizontal"
          baseIntensity={0.2}
          hoverIntensity={0.5}
          fuzzRange={30}
          sliceSize={1}
          fps={60}
          transitionDuration={0}
          intro
          introDuration={1400}
          letterSpacing={0}
          enableHover
          clickEffect={false}
          glitchMode={false}
          glitchInterval={2000}
          glitchDuration={200}
        >
          404
        </FuzzyText>
      </div>

      {/* Text Info */}
      <div className="relative z-10 flex flex-col items-center max-w-lg">
        <h1 className="sr-only">Page Not Found</h1>
        <div className="flex items-center justify-center mb-3">
          <FuzzyText
            color="#FFFFFF"
            fontSize="clamp(1.75rem, 5vw, 2.75rem)"
            fontWeight={800}
            fontFamily="var(--font-heading, sans-serif)"
            colorSplit={0}
            trigger="hover"
            direction="horizontal"
            baseIntensity={0.2}
            hoverIntensity={0.5}
            fuzzRange={24}
            sliceSize={1}
            fps={60}
            transitionDuration={0}
            intro
            introDuration={1400}
            letterSpacing={-0.5}
            enableHover
            clickEffect={false}
            glitchMode={false}
            glitchInterval={2000}
            glitchDuration={200}
          >
            Page Not Found
          </FuzzyText>
        </div>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist, was removed, or is temporarily unavailable.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white text-[15px] font-medium tracking-wide shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
