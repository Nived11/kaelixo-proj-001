"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const trustBadges = [
  "Strategy Driven",
  "Result Focused",
  "Long-Term Partnership",
];

export default function AboutHero() {
  return (
    <section className="relative min-h-[100svh] lg:h-screen lg:min-h-[720px] flex items-center pt-[100px] sm:pt-[110px] lg:pt-[70px] pb-16 sm:pb-20 overflow-hidden bg-[#020205]">
      {/* ============================================================ */}
      {/* BACKGROUND AMBIENT GLOW & TECH GRID                          */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Subtle high-tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_50%,#000_60%,transparent_100%)] opacity-35" />

        {/* Ambient magenta/pink glow behind the 3D graphic */}
        <div className="absolute top-[15%] sm:top-[20%] right-[-5%] sm:right-[5%] w-[420px] sm:w-[620px] h-[420px] sm:h-[620px] bg-[#FF0055]/16 rounded-full blur-[150px] pointer-events-none" />

        {/* Top Header Transition Fade */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#020205] to-transparent pointer-events-none z-[2]" />
      </div>

      {/* ============================================================ */}
      {/* 3D GRAPHIC: FULL RIGHT SIDE, ELEVATED & LARGER (DESKTOP)     */}
      {/* ============================================================ */}
      <div className="hidden lg:block absolute bottom-8 lg:bottom-14 xl:bottom-20 right-[-3%] xl:right-[-1%] 2xl:right-0 w-[70%] xl:w-[66%] 2xl:w-[56%] max-w-[1180px] xl:max-w-[1320px] 2xl:max-w-[1440px] aspect-[1647/955] pointer-events-none z-[1] select-none [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]">
        <Image
          src="/images/about/aboutherobg.png"
          alt="Kaelixo Digital Growth 3D Graphic"
          fill
          priority
          sizes="(min-width: 1024px) 68vw, 100vw"
          className="object-contain object-bottom-right"
        />
      </div>

      {/* ============================================================ */}
      {/* MINIMAL BOTTOM BLEND (ROCK 100% VISIBLE, BLENDS BOTTOM EDGE) */}
      {/* ============================================================ */}
      <div className="absolute inset-x-0 bottom-0 h-8 sm:h-12 bg-gradient-to-t from-[#020205] via-[#020205]/40 to-transparent pointer-events-none z-[5]" />

      {/* ============================================================ */}
      {/* MAIN HERO CONTENT (LEFT SIDE)                                */}
      {/* ============================================================ */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="w-full lg:w-[58%] xl:w-[52%] flex flex-col justify-center">
          {/* Eyebrow: ABOUT KAELIXO + Pink Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-4 sm:mb-5"
          >
            <span className="text-[12px] sm:text-[14px] font-bold tracking-[0.22em] text-white/90 uppercase font-heading">
              ABOUT KAELIXO
            </span>
            <span className="inline-block w-8 sm:w-11 h-[2px] bg-[#FF0055] rounded-full" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[70px] leading-[1.08] font-extrabold text-white tracking-tight font-heading"
          >
            We Turn Bold Ideas <br />
            Into{" "}
            <span className="text-[#FF0055] drop-shadow-[0_0_30px_rgba(255,0,85,0.4)]">
              Digital Growth
            </span>
          </motion.h1>

          {/* Subtext Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-5 text-[16px] text-white/85 max-w-[540px] leading-relaxed font-normal font-sans"
          >
            Kaelixo is a digital growth agency focused on strategy, design and
            technology. We help brands build powerful digital experiences that
            attract, engage and deliver real results.
          </motion.p>

          {/* CTA Buttons: Let's Talk → & Explore Our Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4"
          >
            {/* Primary Pill Button */}
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-consultation-modal", {
                    detail: { type: "consultation" },
                  })
                )
              }
              className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF0055] via-[#ff1464] to-[#ff2b70] text-white text-[15px] sm:text-[16px] font-semibold tracking-wide shadow-[0_0_25px_rgba(255,0,85,0.45)] hover:shadow-[0_0_35px_rgba(255,0,85,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 font-heading cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary Glass Pill Button */}
            <Link
              href="#works"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white text-[15px] sm:text-[16px] font-medium border border-white/20 hover:border-white/40 transition-all duration-200 backdrop-blur-sm cursor-pointer hover:scale-105 active:scale-95 font-heading"
            >
              <span>Explore Our Work</span>
            </Link>
          </motion.div>

          {/* Trust Badges / Key Pillars Row with Pink Checkmarks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FF0055] flex items-center justify-center text-white shrink-0 shadow-[0_0_10px_rgba(255,0,85,0.5)]">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                </div>
                <span className="text-white/90 text-[13px] sm:text-[14px] font-medium tracking-wide font-sans">
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE / TABLET 3D GRAPHIC (BELOW TEXT)                      */}
        {/* ============================================================ */}
        <div className="block lg:hidden relative w-full max-w-[680px] mx-auto aspect-[1647/955] mt-4 sm:mt-6 pointer-events-none select-none z-[1] [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]">
          <Image
            src="/images/about/aboutherobg.png"
            alt="Kaelixo Digital Growth 3D Graphic"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
