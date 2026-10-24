"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[100svh] lg:h-screen lg:min-h-[720px] flex items-center justify-center pt-[100px] sm:pt-[110px] lg:pt-[70px] pb-16 sm:pb-20 overflow-hidden bg-[#020205]">
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Mobile Background Image (Vertical Phone Optimized with Reduced Opacity) */}
        <Image
          src="/images/about/aboutheromobilebg.png"
          alt="Kaelixo About Hero Mobile Background"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="sm:hidden object-cover object-center opacity-35"
        />

        {/* Desktop & Tablet Background Image */}
        <Image
          src="/images/about/aboutherobg.png"
          alt="Kaelixo About Hero Background"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="hidden sm:block object-cover object-center"
        />

        {/* Subtle Top Header Transition Fade */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#020205]/70 via-[#020205]/20 to-transparent pointer-events-none z-[1]" />

        {/* Subtle Bottom Transition Blend */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#020205] via-[#020205]/50 to-transparent pointer-events-none z-[1]" />
      </div>

      {/* ============================================================ */}
      {/* CENTERED HERO CONTENT                                        */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col items-center text-center">
        {/* Eyebrow: ABOUT KAELIXO ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-4 sm:mb-6"
        >
          <span className="inline-block w-8 sm:w-11 h-[2px] bg-[#FF0055] rounded-full" />

          <span className="text-[14px] sm:text-[14px] lg:text-[18px] xl:text-[18px] font-bold tracking-[0.24em] text-white/90 uppercase font-heading">
            ABOUT KAELIXO
          </span>
          <span className="inline-block w-8 sm:w-11 h-[2px] bg-[#FF0055] rounded-full" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-extrabold text-white tracking-tight font-heading leading-[1.08] max-w-[950px] mx-auto"
        >
          A Digital Team <br />
          Driven by{" "}
          <span className="text-[#FF0055] drop-shadow-[0_0_35px_rgba(255,0,85,0.5)]">
            Impact
          </span>
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 sm:mt-6 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-white/80 max-w-[640px] mx-auto leading-relaxed font-normal font-sans"
        >
          We&apos;re a team of thinkers, designers and developers passionate about
          building digital experiences that create real value for businesses.
        </motion.p>

        {/* CTA Buttons: Our Story → & Meet Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          {/* Primary Pill Button: Our Story → */}
          <Link
            href="#story"
            className="group inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white text-[15px] sm:text-[16px] font-medium tracking-wide shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden font-heading"
          >
            <div className="flex flex-col h-[22px] sm:h-[24px] overflow-hidden">
              <div className="flex items-center gap-2.5 transition-transform duration-300 ease-in-out group-hover:-translate-y-full h-[22px] sm:h-[24px]">
                <span className="leading-[22px] sm:leading-[24px] text-[15px] sm:text-[16px]">Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2.5 transition-transform duration-300 ease-in-out group-hover:-translate-y-full h-[22px] sm:h-[24px]">
                <span className="leading-[22px] sm:leading-[24px] text-[15px] sm:text-[16px]">Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Secondary Glass Pill Button: Meet Our Team */}
          <Link
            href="#team"
            className="group inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white/[0.02] hover:bg-white/[0.08] text-white text-[15px] sm:text-[16px] font-medium border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm cursor-pointer active:scale-95 overflow-hidden font-heading"
          >
            <div className="flex flex-col h-[22px] sm:h-[24px] overflow-hidden">
              <div className="flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full h-[22px] sm:h-[24px]">
                <span className="leading-[22px] sm:leading-[24px] text-[15px] sm:text-[16px]">Meet Our Team</span>
              </div>
              <div className="flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full h-[22px] sm:h-[24px]">
                <span className="leading-[22px] sm:leading-[24px] text-[15px] sm:text-[16px]">Meet Our Team</span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
