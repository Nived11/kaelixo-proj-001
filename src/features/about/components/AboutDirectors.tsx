"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function AboutDirectors() {
  return (
    <section
      id="leadership"
      className="relative z-20 w-full bg-white py-20 sm:py-24 lg:py-28 overflow-hidden text-[#0A1024]"
    >
      {/* Background Graphic: Desktop & Tablet */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none select-none">
        <Image
          src="/images/about/aboutdirectorsbg.png"
          alt="Directors Background Graphic"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />
        {/* Soft bottom gradient blend */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 lg:h-60 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Background Graphic: Mobile */}
      <div className="block sm:hidden absolute inset-0 pointer-events-none select-none">
        <Image
          src="/images/about/aboutdirectorsmobilebg.png"
          alt="Directors Mobile Background Graphic"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />
        {/* Soft bottom gradient blend */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* ============================================================ */}
        {/* MOBILE HEADING (Visible on screens < lg, above the image)    */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="block lg:hidden mb-8"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-bold text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] tracking-widest uppercase text-[#FF0055]">
              LEADERSHIP
            </span>
            <div className="w-10 sm:w-12 h-[2px] bg-[#FF0055] rounded-full" />
          </div>

          {/* Headline */}
          <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-extrabold tracking-tight text-[#0A1024] leading-[1.12] mb-2 sm:mb-3">
            The Person <br />
            Behind <span className="text-[#FF0055]">Kaelixo</span>
          </h2>

          {/* Subtitle / Tagline */}
          <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-gray-700 font-normal">
            Guided by vision. Focused on impact.
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/* MAIN GRID LAYOUT                                             */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* ============================================================ */}
          {/* SKEWED / SLANTED DIRECTOR PHOTO CARD                         */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 w-full px-2 sm:px-4 lg:px-0"
          >
            <div className="relative group max-w-[560px] mx-auto lg:mx-0">
              {/* Soft ambient pink back-glow matching the ribbon accents */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#FF0055]/20 via-pink-400/25 to-pink-200/30 rounded-[32px] blur-2xl -z-10 pointer-events-none opacity-80" />

              {/* Slanted Card Frame (Chariv ulla div) */}
              <div
                className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-[22px] sm:rounded-[28px] overflow-hidden border border-white/60 shadow-[0_20px_50px_rgba(255,0,85,0.18),0_12px_28px_rgba(0,0,0,0.08)] bg-slate-900 transform-gpu isolate"
                style={{ transform: "skewX(-6.5deg)" }}
              >
                {/* Counter-skewed photo so the person and surroundings remain perfectly upright */}
                <div
                  className="relative w-full h-full"
                  style={{ transform: "skewX(6.5deg) scale(1.18)" }}
                >
                  <Image
                    src="/images/about/director-dummy.jpg"
                    alt="Director - Kaelixo"
                    fill
                    priority
                    className="object-cover object-center "
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>

                {/* Animated Moving Border Lines (2 opposite beams chasing each other) */}
                <div
                  className="absolute inset-0 rounded-[22px] sm:rounded-[28px] overflow-hidden pointer-events-none z-20"
                  style={{
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] aspect-square animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_18%,#FF0055_36%,#ff4d88_44%,#ffffff_49%,transparent_50%,transparent_68%,#FF0055_86%,#ff4d88_94%,#ffffff_99%,transparent_100%)] [filter:drop-shadow(0_0_6px_#FF0055)]" />
                </div>

                {/* Delicate inner glass highlight edge */}
                <div className="absolute inset-0 rounded-[22px] sm:rounded-[28px] ring-1 ring-inset ring-white/40 pointer-events-none z-10" />
              </div>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* LEADERSHIP DETAILS & BIO                                     */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center mt-2 sm:mt-4 lg:mt-0"
          >
            {/* Desktop-only Heading (hidden on mobile to prevent duplication) */}
            <div className="hidden lg:block">
              {/* 1. Eyebrow */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="font-bold text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] tracking-widest uppercase text-[#FF0055]">
                  LEADERSHIP
                </span>
                <div className="w-10 sm:w-12 h-[2px] bg-[#FF0055] rounded-full" />
              </div>

              {/* 2. Headline */}
              <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-extrabold tracking-tight text-[#0A1024] leading-[1.12] mb-2 sm:mb-3">
                The Person <br />
                Behind <span className="text-[#FF0055]">Kaelixo</span>
              </h2>

              {/* 3. Subtitle / Tagline */}
              <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-gray-700 font-normal ">
                Guided by vision. Focused on impact.
              </p>
            </div>

            {/* 4. Divider Line */}
            <div className="w-10 h-[2px] bg-[#FF0055] rounded-full mb-5 sm:mb-6" />

            {/* 5. Director Name & Role */}
            <div className="mb-3 sm:mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1024] tracking-tight">
                Name
              </h3>
              <p className="text-base sm:text-lg font-semibold text-[#FF0055] mt-0.5">
                Director
              </p>
            </div>

            {/* 6. Bio Description */}
            <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-gray-700 leading-relaxed max-w-xl mb-6 sm:mb-8">
              Leads the agency&apos;s vision, builds strong client relationships, and drives digital strategy to create meaningful impact. Focused on delivering innovative solutions and long-term growth for businesses.
            </p>

            {/* 7. Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white border border-pink-200/80 shadow-[0_4px_16px_rgba(255,0,85,0.12),0_2px_6px_rgba(0,0,0,0.04)] hover:border-[#FF0055] hover:shadow-[0_4px_20px_rgba(255,0,85,0.28)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaLinkedinIn className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800 group-hover:text-[#FF0055] transition-colors" />
              </a>
              <a
                href="mailto:contact@kaelixo.com"
                aria-label="Email Director"
                className="group w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white border border-pink-200/80 shadow-[0_4px_16px_rgba(255,0,85,0.12),0_2px_6px_rgba(0,0,0,0.04)] hover:border-[#FF0055] hover:shadow-[0_4px_20px_rgba(255,0,85,0.28)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF0055] group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
