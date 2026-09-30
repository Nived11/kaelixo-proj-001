"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import StatsSection from "./StatsSection";
import AnimatedNeonLogo from "@/components/AnimatedNeonLogo";
import RotatingGlobe from "@/components/RotatingGlobe";
import { motion } from "framer-motion";


export default function HeroSection() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000); // 8 seconds per slide
    return () => clearInterval(timer);
  }, []);

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
      className="relative min-h-[100svh] lg:h-screen flex flex-col justify-between pt-[72px] sm:pt-24 overflow-hidden bg-[#020205]"
    >
      {/* ============================================================ */}
      {/* SLIDE 1: MULTI-LAYER PARALLAX COSMIC SCENE                   */}
      {/* ============================================================ */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          currentSlide === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Preload Globe Image to prevent delay */}
          <div className="hidden">
            <Image src="/images/home/globe-original.webp" alt="preload globe" width={10} height={10} />
          </div>

          {/* Layer 1: Distant Cosmic Sky & Background Nebula (Fixed / Static) */}
          <div className="absolute inset-0">
            <Image
              src="/images/home/hero-bg-space.webp"
              alt="Cosmic Background"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Layer 2: Cosmic Glowing Planet / Globe (Fixed position, rotating internally) */}
          <div
            className="absolute top-[2%] sm:top-[0%] right-[1%] sm:right-[10%] lg:right-[8%] w-[240px] sm:w-[380px] md:w-[480px] lg:w-[500px] aspect-square pointer-events-none z-[2]
              2xl:top-[0%] 2xl:right-[8%] 2xl:w-[500px]
              [@media(min-width:1920px)]:top-[0%] [@media(min-width:1920px)]:right-[10%] [@media(min-width:1920px)]:w-[600px]"
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
            className="absolute top-[0%] sm:-top-[18%] right-[-6%] sm:right-[2%] lg:-right-[6%] w-[300px] sm:w-[380px] md:w-[480px] lg:w-[700px] aspect-square pointer-events-none z-[3]
              2xl:-top-[18%] 2xl:-right-[6%] 2xl:w-[700px]
              [@media(min-width:1920px)]:-top-[20%] [@media(min-width:1920px)]:-right-[8%] [@media(min-width:1920px)]:w-[800px]"
            style={{
              maskImage: "linear-gradient(to bottom, #000000 0%, #000000 54%, rgba(0,0,0,0.75) 64%, rgba(0,0,0,0.25) 72%, transparent 77%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000000 0%, #000000 54%, rgba(0,0,0,0.75) 68%, rgba(0,0,0,0.25) 78%, transparent 77%)",
            }}
          >
            <Image
              src="/images/home/hero-clouds.webp"
              alt="Cosmic Cloud"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(255,0,85,0.25)]"
            />
          </div>

          {/* Layer 4: Animated Neon Crystal Logo (Anchored to bottom to scale properly with screen height) */}
          <div
            className="absolute bottom-[43%] sm:bottom-[55%] md:bottom-[50%] lg:bottom-[35%] left-[22%] sm:left-[34%] md:left-[36%] lg:left-[38%] xl:left-[40%] w-[210px] sm:w-[460px] md:w-[540px] lg:w-[400px] xl:w-[400px] aspect-[7/6] pointer-events-none z-[5]
              2xl:bottom-[19%] 2xl:left-[650px] 2xl:w-[350px]
              [@media(min-width:1920px)]:bottom-[19%] [@media(min-width:1920px)]:left-[48%] [@media(min-width:1920px)]:w-[450px]"
          >
            <AnimatedNeonLogo glow={true} animated={true} />
          </div>

          {/* Layer 5: Center Mountain Ridge (Misty Midground - behind Left Rock) */}
          <div
            className="absolute bottom-[38%] sm:bottom-10 left-[6%] sm:left-[20%] lg:left-[30%] w-[80%] sm:w-[50%] max-w-[700px] aspect-[17/10] transition-transform duration-300 ease-out will-change-transform pointer-events-none z-[6]
              2xl:bottom-[40px] 2xl:left-[35%] 2xl:w-[50%] 2xl:max-w-[600px]
              [@media(min-width:1920px)]:bottom-10 [@media(min-width:1920px)]:left-[40%] [@media(min-width:1920px)]:w-[50%] [@media(min-width:1920px)]:max-w-[800px]"
            style={{
              transform: `translate3d(${mousePos.x * 18}px, ${mousePos.y * 12}px, 0)`,
            }}
          >
            <Image
              src="/images/home/hero-rock-center.webp"
              alt="Center Mountain Ridge"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className="object-contain object-bottom"
            />
            <div className="absolute inset-x-0 bottom-[-2px] h-[30%] bg-gradient-to-t from-[#020205] via-[#020205]/90 to-transparent sm:hidden" />
          </div>

          {/* Layer 6: Left Mountain Ridge (Perfect soft blend on left edge) */}
          <div
            className="absolute bottom-[35%] sm:bottom-0 left-0 sm:left-10 lg:left-90 w-[60%] sm:w-[42%] max-w-[620px] aspect-[4/3] transition-transform duration-300 ease-out will-change-transform pointer-events-none z-[8]
              2xl:-bottom-15 2xl:left-[450px] 2xl:w-[42%] 2xl:max-w-[500px]
              [@media(min-width:1920px)]:-bottom-[10px] [@media(min-width:1920px)]:left-[520px] [@media(min-width:1920px)]:w-[42%] [@media(min-width:1920px)]:max-w-[700px]"
            style={{
              transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 8}px, 0)`,
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.5) 8%, rgba(0,0,0,0.85) 12%, #000000 16%, #000000 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.5) 8%, rgba(0,0,0,0.85) 12%, #000000 16%, #000000 100%)",
            }}
          >
            <Image
              src="/images/home/hero-rock-left.webp"
              alt="Left Mountain Ridge"
              fill
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 42vw, 42vw"
              className="object-contain object-bottom-left"
            />
            <div className="absolute inset-x-0 bottom-[-2px] h-[30%] bg-gradient-to-t from-[#020205] via-[#020205]/90 to-transparent sm:hidden" />
          </div>

          {/* Layer 7: Right Foreground Rock & Person Overlooking City Lights */}
          <div
            className="absolute bottom-[30%] sm:bottom-0 right-[-24%] sm:right-[4%] lg:right-[2%] w-[95%] sm:w-[38%] max-w-[540px] aspect-[4/3] transition-transform duration-300 ease-out will-change-transform pointer-events-none z-[8]
              2xl:bottom-0 2xl:right-[2%] 2xl:w-[38%] 2xl:max-w-[540px]
              [@media(min-width:1920px)]:bottom-0 [@media(min-width:1920px)]:right-[4%] [@media(min-width:1920px)]:w-[38%] [@media(min-width:1920px)]:max-w-[700px]"
            style={{
              transform: `translate3d(${mousePos.x * 26}px, ${mousePos.y * 16}px, 0)`,
            }}
          >
            <Image
              src="/images/home/hero-person.webp"
              alt="Person on Rocks Overlooking City"
              fill
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 38vw, 38vw"
              className="object-contain object-bottom-right"
            />
            <div className="absolute inset-x-0 bottom-[-2px] h-[30%] bg-gradient-to-t from-[#020205] via-[#020205]/90 to-transparent sm:hidden" />
          </div>

          {/* Text Readability Gradients (Left fade for text, top/bottom vignettes) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205]/60 sm:via-[#020205]/75 to-transparent w-[85%] sm:w-full md:w-[48%] [@media(min-width:1920px)]:w-[55%] [@media(min-width:1920px)]:from-[0%] [@media(min-width:1920px)]:via-[#020205]/80 [@media(min-width:1920px)]:via-[30%] z-[9]" />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#020205] via-[#020205]/30 to-transparent z-[9]" />
          <div className="absolute bottom-0 left-0 right-0 h-[45vh] sm:h-28 2xl:h-48 [@media(min-width:1920px)]:h-64 bg-gradient-to-t from-[#020205] from-[50%] sm:from-0% via-[#020205]/80 via-[80%] sm:via-[#020205]/30 2xl:via-[#020205]/50 [@media(min-width:1920px)]:via-[#020205]/60 to-transparent z-[9]" />
        </div>
      </div>

      {/* ============================================================ */}
      {/* SLIDE 2: VIDEO BACKGROUND                                    */}
      {/* ============================================================ */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          currentSlide === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            {/* Tech/AI Network Background Video */}
            <source src="/videos/home/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Text Readability Gradients (Same as Slide 1 to keep UI consistent) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205]/60 sm:via-[#020205]/75 to-transparent w-[85%] sm:w-full md:w-[48%] [@media(min-width:1920px)]:w-[55%] [@media(min-width:1920px)]:from-[0%] [@media(min-width:1920px)]:via-[#020205]/80 [@media(min-width:1920px)]:via-[30%] z-[9]" />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#020205] via-[#020205]/30 to-transparent z-[9]" />
          <div className="absolute bottom-0 left-0 right-0 h-[35vh] sm:h-28 2xl:h-48 [@media(min-width:1920px)]:h-64 bg-gradient-to-t from-[#020205] from-[30%] sm:from-0% via-[#020205]/80 via-[70%] sm:via-[#020205]/30 2xl:via-[#020205]/50 [@media(min-width:1920px)]:via-[#020205]/60 to-transparent z-[9]" />
        </div>
      </div>

      {/* Main Hero Content Area (Centered vertically in viewport) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex items-center py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

          {/* Left Column: Headline, Description & CTAs */}
          <div 
            key={currentSlide}
            className="lg:col-span-8 max-w-2xl space-y-4 sm:space-y-5"
          >
            {/* Tagline Eyebrow */}
            <div className="flex items-center gap-2 animate-fade-in-up">
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-white/80 uppercase font-heading
                [@media(min-width:1920px)]:text-[16px]
              ">
                THINK <span className="text-[#FF0055]">•</span> BUILD <span className="text-[#FF0055]">•</span> GROW
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[34px] leading-[1.05] sm:text-5xl md:text-[56px] lg:text-[64px] xl:text-[72px] font-extrabold text-white tracking-tight sm:leading-[1.05] font-heading animate-fade-in-up
              [@media(min-width:1920px)]:text-[84px]
            ">
              {/* Mobile: 4 lines */}
              <span className="block sm:hidden">Built</span>
              <span className="block sm:hidden">Smart</span>
              <span className="block sm:hidden text-[#FF0055] mt-1">Grown</span>
              <span className="block sm:hidden text-[#FF0055]">Beyond</span>

              {/* Desktop: 2 lines */}
              <span className="hidden sm:block">Built Smart</span>
              <span className="hidden sm:block text-[#FF0055] mt-1 sm:mt-2">Grown Beyond</span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-[12px] sm:text-[14px] md:text-[16px] text-slate-300 max-w-[480px] leading-relaxed font-normal font-sans animate-fade-in-up
              [@media(min-width:1920px)]:text-[20px] [@media(min-width:1920px)]:max-w-[600px] mt-2 sm:mt-4
            ">
              We study your business, build what it needs, <br className="block sm:hidden" />and grow it with marketing that delivers.
            </p>

            {/* Dual Pill CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-3 pt-3 sm:pt-2 font-heading animate-fade-in-up">
              <Link
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 w-[240px] py-2.5 rounded-full bg-[#FF0055] hover:bg-[#E6004C] text-white text-[13px] sm:text-sm font-semibold tracking-normal shadow-lg shadow-[#FF0055]/30 hover:shadow-[#FF0055]/50 transition-all duration-200 active:scale-95 text-center cursor-pointer
                  [@media(min-width:1920px)]:text-[18px] [@media(min-width:1920px)]:w-[280px] [@media(min-width:1920px)]:py-3.5
                "
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 w-[240px] py-2.5 rounded-full bg-black/40 hover:bg-white/10 text-white text-[13px] sm:text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-200 backdrop-blur-sm text-center cursor-pointer
                  [@media(min-width:1920px)]:text-[18px] [@media(min-width:1920px)]:w-[280px] [@media(min-width:1920px)]:py-3.5
                "
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
        <StatsSection>
          {/* Carousel Pagination Dots */}
          <div className="flex items-center gap-2">
            {[0, 1].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentSlide === idx 
                    ? "w-8 bg-[#FF0055]" 
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </StatsSection>
      </div>
    </section>
  );
}
