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
      className="relative z-20 w-full bg-[#020205] py-16 sm:py-20 lg:py-24 overflow-hidden text-white"
    >
      {/* ============================================================ */}
      {/* BACKGROUND GRAPHIC (aboutdirector-bg.png)                    */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/images/about/aboutdirector-bg.png"
          alt="Leadership Section Background"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />

        {/* Top & Bottom Section Transition Fades */}
        <div className="absolute top-0 inset-x-0 h-20 sm:h-24 bg-gradient-to-b from-[#020205] to-transparent pointer-events-none z-[1]" />
        <div className="absolute bottom-0 inset-x-0 h-20 sm:h-24 bg-gradient-to-t from-[#020205] to-transparent pointer-events-none z-[1]" />
      </div>

      {/* ============================================================ */}
      {/* SECTION CONTENT CONTAINER                                    */}
      {/* ============================================================ */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* ============================================================ */}
        {/* MOBILE HEADING (Visible on screens < lg, above the portrait) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="block lg:hidden mb-6 sm:mb-8"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
            <span className="font-bold text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] tracking-widest uppercase text-[#FF0055]">
              LEADERSHIP
            </span>
            <div className="w-10 sm:w-12 h-[2px] bg-[#FF0055] rounded-full" />
          </div>

          {/* Headline */}
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold tracking-tight text-white leading-[1.12] mb-2 sm:mb-2.5 font-heading">
            The Mind <br />
            Steering <span className="text-[#FF0055]">Kaelixo</span>
          </h2>

          {/* Subtitle / Tagline */}
          <p className="text-[15px] sm:text-[15px] md:text-[16px] text-gray-400 font-normal">
            Clear vision. Lasting impact.
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/* MAIN TWO-COLUMN GRID                                         */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-8 items-center">

          {/* ============================================================ */}
          {/* LEFT COLUMN: KAELIXO LOGO EMBLEM + FOREGROUND PORTRAIT       */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 w-full flex items-center justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] xl:max-w-[400px] mx-auto lg:mx-0 flex items-center justify-center">

              {/* -------------------------------------------------------- */}
              {/* KAELIXO BRAND LOGO SHAPE (Behind Director Portrait)      */}
              {/* -------------------------------------------------------- */}
              <div className="absolute top-[8%] sm:top-[7%] lg:top-[6%] left-1/2 -translate-x-1/2 w-[76%] sm:w-[80%] lg:w-[82%] aspect-square pointer-events-none select-none z-0 opacity-70">
                <Image
                  src="/images/brand/kaelixo-logo.png"
                  alt="Kaelixo Brand Emblem"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_35px_rgba(255,0,85,0.35)]"
                />
              </div>

              {/* -------------------------------------------------------- */}
              {/* FOREGROUND DIRECTOR PORTRAIT (Z-20, ON TOP OF SHAPE)     */}
              {/* Smooth transparent gradient fade at bottom without black overlay */}
              {/* -------------------------------------------------------- */}
              <div className="relative z-20 w-full h-[390px] sm:h-[440px] lg:h-[480px] xl:h-[500px] flex items-end justify-center pointer-events-none select-none">
                <div
                  className="relative w-full h-full flex items-end justify-center"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 98%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 98%)",
                  }}
                >
                  <Image
                    src="/images/about/director-trimmed.png"
                    alt="Jineesh Sojan - Director, Kaelixo"
                    fill
                    priority
                    quality={95}
                    className="object-contain object-bottom"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: LEADERSHIP DETAILS & BIO                       */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
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
              <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-extrabold tracking-tight text-white leading-[1.12] mb-2 sm:mb-3 font-heading">
                The Mind <br />
                Steering <span className="text-[#FF0055]">Kaelixo</span>
              </h2>

              {/* 3. Subtitle / Tagline */}
              <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-gray-400 font-normal">
                Clear vision. Lasting impact.
              </p>
            </div>

            {/* 4. Divider Line */}
            <div className="w-10 sm:w-12 h-[2px] bg-[#FF0055] rounded-full my-4 sm:my-5" />

            {/* 5. Director Name & Role */}
            <div className="mb-3 sm:mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
                Jineesh Sojan
              </h3>
              <p className="text-base sm:text-lg font-semibold text-[#FF0055] mt-0.5">
                Director
              </p>
            </div>

            {/* 6. Bio Description */}
            <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-gray-300 leading-relaxed max-w-xl mb-6 sm:mb-8 font-sans">
              Jineesh sets the direction for Kaelixo, from technology and product vision to business growth. He keeps every project rooted in careful thinking, carries it through the build and stays close until the results are clear. His focus is on building client relationships that last and solutions that keep growing with the businesses they serve.
            </p>

            {/* 7. Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group w-11 h-11 rounded-full flex items-center justify-center bg-[#FF0055] border border-white/30 text-white shadow-[0_4px_16px_rgba(255,0,85,0.35)] hover:bg-[#e0004b] hover:border-white/60 hover:shadow-[0_0_24px_rgba(255,0,85,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <FaLinkedinIn className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="mailto:contact@kaelixo.com"
                aria-label="Email Director"
                className="group w-11 h-11 rounded-full flex items-center justify-center bg-[#FF0055] border border-white/30 text-white shadow-[0_4px_16px_rgba(255,0,85,0.35)] hover:bg-[#e0004b] hover:border-white/60 hover:shadow-[0_0_24px_rgba(255,0,85,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
