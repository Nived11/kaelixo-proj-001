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
      {/* SUBTLE BACKGROUND BLUSH ACCENTS (Deep Ambient Glows)         */}
      {/* ============================================================ */}
      <div className="absolute -top-24 right-0 w-[500px] lg:w-[700px] h-[500px] lg:h-[700px] bg-gradient-to-br from-[#FF0055]/[0.10] via-transparent to-transparent rounded-full blur-3xl pointer-events-none select-none z-0" />
      <div className="absolute -bottom-24 left-10 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-gradient-to-tr from-[#FF0055]/[0.08] via-transparent to-transparent rounded-full blur-3xl pointer-events-none select-none z-0" />

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: KAELIXO LOGO EMBLEM + FOREGROUND PORTRAIT       */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 w-full flex items-center justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[430px] xl:max-w-[450px] mx-auto lg:mx-0 flex items-center justify-center">
              
              {/* -------------------------------------------------------- */}
              {/* KAELIXO BRAND LOGO SHAPE (Behind Director Portrait)      */}
              {/* -------------------------------------------------------- */}
              <div className="absolute top-[8%] sm:top-[6%] lg:top-[5%] left-1/2 -translate-x-1/2 w-[82%] sm:w-[86%] lg:w-[90%] aspect-square pointer-events-none select-none z-0">
                <Image
                  src="/images/brand/kaelixo-logo.png"
                  alt="Kaelixo Brand Emblem"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_45px_rgba(255,0,85,0.4)]"
                />
              </div>

              {/* -------------------------------------------------------- */}
              {/* FOREGROUND DIRECTOR PORTRAIT (Z-20, ON TOP OF SHAPE)     */}
              {/* 100% solid body, soft blend ONLY at the very bottom cut  */}
              {/* -------------------------------------------------------- */}
              <div className="relative z-20 w-full h-[440px] sm:h-[490px] lg:h-[530px] xl:h-[560px] flex items-end justify-center pointer-events-none select-none">
                <div
                  className="relative w-full h-full flex items-end justify-center"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 90%, black 95%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 90%, black 95%, transparent 100%)",
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

                {/* Subtle edge blend right at the very bottom cut */}
                <div className="absolute inset-x-0 bottom-0 h-4 sm:h-5 bg-gradient-to-t from-[#020205] to-transparent pointer-events-none z-30" />
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
                className="group w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:border-[#FF0055] hover:bg-[#FF0055] hover:shadow-[0_0_24px_rgba(255,0,85,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaLinkedinIn className="w-4 h-4 text-white group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:contact@kaelixo.com"
                aria-label="Email Director"
                className="group w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:border-[#FF0055] hover:bg-[#FF0055] hover:shadow-[0_0_24px_rgba(255,0,85,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-[#FF0055] group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
