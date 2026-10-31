"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="sticky top-0 sm:top-[96px] -mt-[96px] sm:mt-0 pt-[96px] sm:pt-0 z-0 w-full flex items-center justify-center overflow-hidden
        h-[380px] sm:h-[300px] md:h-[320px] lg:h-[350px] xl:h-[450px] 2xl:h-[480px] [@media(min-width:1920px)]:h-[500px] bg-[#020205] text-white"
      style={{
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-[#020205]">
        {/* Mobile Background Image (< sm) */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src="/images/about/aboutheromobilebg.png"
            alt="Kaelixo Contact Hero Mobile Background"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-top opacity-70"
          />
        </div>

        {/* Desktop & Tablet Background Image (>= sm) */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/images/about/aboutherobg.png"
            alt="Kaelixo Contact Hero Background"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
        </div>

        {/* Top Header Transition Fade (Dark near header) */}
        <div className="absolute top-0 inset-x-0 h-28 sm:h-24 bg-gradient-to-b from-[#020205] via-[#020205]/75 to-transparent pointer-events-none z-[1]" />

        {/* Subtle Bottom Transition Blend */}
        <div className="absolute inset-x-0 bottom-0 h-8 sm:h-16 bg-gradient-to-t from-[#020205]/70 via-transparent to-transparent pointer-events-none z-[1]" />
      </div>

      {/* ============================================================ */}
      {/* CENTERED HERO CONTENT (Identical structure to AboutHero)     */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col items-center text-center">
        {/* Eyebrow: CONTACT US */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2 sm:mb-3"
        >
          <span className="inline-block w-6 sm:w-9 h-[2px] bg-[#FF0055] rounded-full" />
          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-bold tracking-[0.24em] text-white/90 uppercase font-heading">
            CONTACT US
          </span>
          <span className="inline-block w-6 sm:w-9 h-[2px] bg-[#FF0055] rounded-full" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] xl:text-[60px] 2xl:text-[66px] font-extrabold tracking-tight font-heading leading-[1.12] max-w-[950px] mx-auto mb-2.5 sm:mb-4 drop-shadow-[0_2px_25px_rgba(0,0,0,0.8)]"
        >
          Let&apos;s Build Something <br className="hidden sm:inline" />
          <span className="text-[#FF0055] drop-shadow-[0_0_35px_rgba(255,0,85,0.5)]">
            Great Together.
          </span>
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/80 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[20px] max-w-2xl mx-auto font-medium leading-relaxed font-sans"
        >
          Have a project in mind or just want to say hello? We&apos;d love to hear from you.
        </motion.p>
      </div>
    </section>
  );
}
