"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import StatsSection from "./StatsSection";
import AnimatedNeonLogo from "@/components/AnimatedNeonLogo";
import RotatingGlobe from "@/components/RotatingGlobe";


export default function HeroSection() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX / width) - 0.5) * 2; // Range -1 to 1
    const y = ((clientY / height) - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen lg:h-screen flex flex-col justify-between pt-20 sm:pt-24 overflow-hidden bg-[#020205]"
    >
      {/* ============================================================ */}
      {/* MULTI-LAYER PARALLAX COSMIC SCENE                            */}
      {/* ============================================================ */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">

        {/* Layer 1: Distant Cosmic Sky & Background Nebula (Fixed / Static) */}
        <div className="absolute inset-0">
          <Image
            src="/herobg1.png"
            alt="Cosmic Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Layer 2: Cosmic Glowing Planet / Globe (Fixed position, rotating internally) */}
        <div
          className="absolute top-[2%] sm:top-[0%] right-[4%] sm:right-[10%] lg:right-[8%] w-[280px] sm:w-[380px] md:w-[480px] lg:w-[500px] aspect-square pointer-events-none z-[2]"
          style={{
            maskImage: "radial-gradient(ellipse 90% 70% at 75% 15%, #000000 0%, #000000 30%, rgba(0,0,0,0.7) 48%, rgba(0,0,0,0.3) 62%, rgba(0,0,0,0.08) 76%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 75% 15%, #000000 0%, #000000 30%, rgba(0,0,0,0.7) 48%, rgba(0,0,0,0.3) 62%, rgba(0,0,0,0.08) 76%, transparent 90%)",
          }}
        >
          {/* Hardware-accelerated ambient glow behind globe */}
          <div
            className="absolute inset-[8%] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,0,85,0.5) 0%, rgba(255,0,85,0.2) 50%, transparent 70%)",
              filter: "blur(38px)",
            }}
          />
          <RotatingGlobe duration={180} animated={true} />
        </div>

        {/* Layer 3: Floating Nebula Cloud (Full cloud visible, smoothly blended at bottom into sky) */}
        <div
          className="absolute top-[4%] sm:-top-[18%] right-[0%] sm:right-[2%] lg:-right-[6%] w-[280px] sm:w-[380px] md:w-[480px] lg:w-[700px] aspect-square pointer-events-none z-[3]"
          style={{
            maskImage: "linear-gradient(to bottom, #000000 0%, #000000 54%, rgba(0,0,0,0.75) 64%, rgba(0,0,0,0.25) 72%, transparent 77%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000000 0%, #000000 54%, rgba(0,0,0,0.75) 68%, rgba(0,0,0,0.25) 78%, transparent 77%)",
          }}
        >
          <Image
            src="/herocloud.png"
            alt="Cosmic Cloud"
            fill
            priority
            className="object-contain drop-shadow-[0_0_30px_rgba(255,0,85,0.25)]"
          />
        </div>

        {/* Layer 4: Animated Neon Crystal Logo (Fixed / Static position) */}
        <div
          className="absolute top-[6%] sm:top-[8%] md:top-[10%] lg:top-[30%] left-[30%] sm:left-[34%] md:left-[36%] lg:left-[38%] xl:left-[40%] w-[350px] sm:w-[460px] md:w-[540px] lg:w-[400px] xl:w-[400px] aspect-[7/6] pointer-events-none z-[5]"
        >
          <AnimatedNeonLogo glow={true} animated={true} />
        </div>

        {/* Layer 5: Center Mountain Ridge (Misty Midground - behind Left Rock) */}
        <div
          className="absolute bottom-0  sm:bottom-10  left-[12%] sm:left-[20%] lg:left-[30%] w-[58%] sm:w-[50%] max-w-[700px] aspect-[17/10] transition-transform duration-300 ease-out will-change-transform pointer-events-none z-[6]"
          style={{
            transform: `translate3d(${mousePos.x * 18}px, ${mousePos.y * 12}px, 0)`,
          }}
        >
          <Image
            src="/herocenterrock.png"
            alt="Center Mountain Ridge"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>

        {/* Layer 6: Left Mountain Ridge (Perfect soft blend on left edge) */}
        <div
          className="absolute bottom-0 left-10 sm:left-10 lg:left-90 w-[50%] sm:w-[42%] max-w-[620px] aspect-[4/3] transition-transform duration-300 ease-out will-change-transform pointer-events-none z-[8]"
          style={{
            transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 8}px, 0)`,
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 2%, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0.85) 8%, #000000 12%, #000000 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 2%, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0.85) 8%, #000000 12%, #000000 100%)",
          }}
        >
          <Image
            src="/heroleftrock.png"
            alt="Left Mountain Ridge"
            fill
            priority
            className="object-contain object-bottom-left"
          />
        </div>

        {/* Layer 7: Right Foreground Rock & Person Overlooking City Lights */}
        <div
          className="absolute bottom-0 right-0 sm:right-[4%] lg:right-[2%] w-[46%] sm:w-[38%] max-w-[540px] aspect-[4/3] transition-transform duration-300 ease-out will-change-transform pointer-events-none z-[8]"
          style={{
            transform: `translate3d(${mousePos.x * 26}px, ${mousePos.y * 16}px, 0)`,
          }}
        >
          <Image
            src="/heroperson.png"
            alt="Person on Rocks Overlooking City"
            fill
            priority
            className="object-contain object-bottom-right"
          />
        </div>

        {/* Text Readability Gradients (Left fade for text, top/bottom vignettes) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205]/75 to-transparent w-full md:w-[48%] z-[9]" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#020205] via-[#020205]/30 to-transparent z-[9]" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#020205] via-[#020205]/30 to-transparent z-[9]" />
      </div>

      {/* Main Hero Content Area (Centered vertically in viewport) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex items-center py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-8 max-w-2xl space-y-4 sm:space-y-5">
            {/* Tagline Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-white/80 uppercase font-heading">
                THINK <span className="text-[#FF0055]">•</span> BUILD <span className="text-[#FF0055]">•</span> GROW
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[45px] xl:text-[48px] font-extrabold text-white tracking-tight leading-[1.14] font-heading">
              Technology That <br />
              Helps Businesses <br />
              Think Bigger, Build <br />
              Smarter and <span className="text-[#FF0055]">Grow</span> <br />
              <span className="text-[#FF0055]">Faster.</span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-xs sm:text-[13px] md:text-sm text-slate-300 max-w-lg leading-relaxed font-normal font-sans">
              We design intelligent websites, build powerful software, create custom CRM solutions, develop AI-driven tools and deliver digital growth strategies for ambitious businesses worldwide.
            </p>

            {/* Dual Pill CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 font-heading">
              <Link
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FF0055] hover:bg-[#E6004C] text-white text-xs sm:text-sm font-semibold tracking-normal shadow-lg shadow-[#FF0055]/30 hover:shadow-[#FF0055]/50 transition-all duration-200 active:scale-95 text-center cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-black/40 hover:bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-200 backdrop-blur-sm text-center cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Docked Stats Bar at the bottom of the Viewport */}
      <div className="relative z-10 w-full">
        <StatsSection />
      </div>
    </section>
  );
}
