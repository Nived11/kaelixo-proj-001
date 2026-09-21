"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import StatsSection from "./StatsSection";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col justify-between pt-20 sm:pt-24 overflow-hidden bg-[#020205]">
      {/* Background Graphic: The Kaelixo Glowing Pink Monolith */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/hero-monolith.jpg"
            alt="Kaelixo Monolith"
            fill
            priority
            className="object-cover object-right md:object-center opacity-85"
          />
          {/* Deep Dark Vignette Gradients for crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205]/85 to-transparent md:w-[65%]" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020205] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#020205] to-transparent" />
        </div>
      </div>

      {/* Main Hero Content Area (Centered vertically in viewport) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex items-center py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Headline, Description & CTAs (Scaled down for optimal viewport fit) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
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
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FF0055] hover:bg-[#E6004C] text-white text-xs sm:text-sm font-semibold tracking-normal shadow-lg shadow-[#FF0055]/30 hover:shadow-[#FF0055]/50 transition-all duration-200 active:scale-95 text-center"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-black/40 hover:bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-200 backdrop-blur-sm text-center"
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
