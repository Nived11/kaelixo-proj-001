"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Lightbulb, ShieldCheck, Users, TrendingUp } from "lucide-react";

const valuesData = [
  {
    id: "innovation",
    icon: <Lightbulb className="w-4 h-4 stroke-[2.2]" />,
    title: "Fresh Thinking",
    desc: "We try new ideas and tools, and use them where they genuinely help.",
  },
  {
    id: "integrity",
    icon: <ShieldCheck className="w-4 h-4 stroke-[2.2]" />,
    title: "Honest Work",
    desc: "We say what we’ll do, do what we said, and show you the results.",
  },
  {
    id: "collaboration",
    icon: <Users className="w-4 h-4 stroke-[2.2]" />,
    title: "Shared Effort",
    desc: "We succeed together, with our clients and with each other.",
  },
  {
    id: "growth",
    icon: <TrendingUp className="w-4 h-4 stroke-[2.2]" />,
    title: "Steady Progress",
    desc: "We never stop learning, and we count your growth as our own.",
  },
];

export default function AboutMissionValues() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });

  return (
    <div ref={containerRef} className="relative z-20 w-full bg-white text-[#0A1024]">
      {/* ============================================================ */}
      {/* 1. OUR MISSION & VISION SECTION                              */}
      {/* ============================================================ */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Eyebrow: OUR MISSION & VISION */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <span className="text-[14px] sm:text-[14px] lg:text-[18px] xl:text-[18px] font-bold text-[#0A1024] tracking-[0.2em] uppercase">
              OUR MISSION & VISION
            </span>
            <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
          </motion.div>

          {/* Mission & Vision 2-Column Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
            {/* ============================================================ */}
            {/* Mission Card (Fixed Background, Animated Text)               */}
            {/* ============================================================ */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[310px] lg:min-h-[330px] p-5 sm:p-7 lg:p-8 flex items-start justify-start shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 group">
              {/* Full Background Photo - Fixed in Place */}
              <Image
                src="/images/about/mission-bg.webp"
                alt="Our Mission - Mountain Sunrise"
                fill
                className="object-cover object-right sm:object-center pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />

              {/* Black Shaded Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/30 pointer-events-none z-[1]" />

              {/* BLACK SMOKY GLASS CARD (Top-Left Positioned) */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 backdrop-blur-xl bg-black/45 sm:bg-black/40 shadow-[0_12px_36px_rgba(0,0,0,0.35)] rounded-xl sm:rounded-[18px] p-5 sm:p-6 lg:p-7 max-w-[420px] overflow-hidden group/glass"
              >
                {/* Animated Border Mask */}
                <div
                  className="absolute inset-0 rounded-xl sm:rounded-[18px] overflow-hidden pointer-events-none z-10"
                  style={{
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_4s_linear_infinite] opacity-70 sm:opacity-30 group-hover/glass:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#FF0055_40%,#ff3377_60%,transparent_100%)]" />
                </div>

                <div className="relative z-20 flex flex-col">
                  {/* Target Icon & Title in the same line */}
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-2 sm:mb-2.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#FF0055] shrink-0 transition-transform duration-300 group-hover:scale-105 border border-[#FF0055]">
                      <Target className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.4]" />
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#FF0055] font-heading leading-tight tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                      Our Mission
                    </h3>
                  </div>

                  {/* Description in next line */}
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[16px] leading-relaxed text-slate-100 font-sans font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    To give businesses digital solutions that are planned with care, built with skill and followed through until the growth is clear.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ============================================================ */}
            {/* Vision Card (Fixed Background, Animated Text)                */}
            {/* ============================================================ */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[310px] lg:min-h-[330px] p-5 sm:p-7 lg:p-8 flex items-start justify-start shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 group">
              {/* Full Background Photo - Fixed in Place */}
              <Image
                src="/images/about/vision-bg.webp"
                alt="Our Vision - Modern Architecture"
                fill
                className="object-cover object-right sm:object-center pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />

              {/* Black Shaded Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/30 pointer-events-none z-[1]" />

              {/* BLACK SMOKY GLASS CARD (Top-Left Positioned) */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 backdrop-blur-xl bg-black/45 sm:bg-black/40 shadow-[0_12px_36px_rgba(0,0,0,0.35)] rounded-xl sm:rounded-[18px] p-5 sm:p-6 lg:p-7 max-w-[420px] overflow-hidden group/glass"
              >
                {/* Animated Border Mask */}
                <div
                  className="absolute inset-0 rounded-xl sm:rounded-[18px] overflow-hidden pointer-events-none z-10"
                  style={{
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_4s_linear_infinite] opacity-70 sm:opacity-30 group-hover/glass:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#FF0055_40%,#ff3377_60%,transparent_100%)]" />
                </div>

                <div className="relative z-20 flex flex-col">
                  {/* Eye Icon & Title in the same line */}
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-2 sm:mb-2.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#FF0055] shrink-0 transition-transform duration-300 group-hover:scale-105 border border-[#FF0055]">
                      <Eye className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.4]" />
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#FF0055] font-heading leading-tight tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                      Our Vision
                    </h3>
                  </div>

                  {/* Description in next line */}
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[16px] leading-relaxed text-slate-100 font-sans font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    To become the digital partner businesses trust most, recognised for clear thinking, creative work and dependable results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. OUR VALUES SECTION                                        */}
      {/* ============================================================ */}
      <section className="relative pt-4 sm:pt-6 pb-20 sm:pb-24 lg:pb-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Eyebrow: OUR VALUES */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <span className="text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[24px] font-bold tracking-[0.22em] text-[#0A1024] uppercase font-heading">
              OUR VALUES
            </span>
            <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
          </motion.div>

          {/* 4 Values Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {valuesData.map((val, idx) => (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.55,
                  delay: 0.3 + idx * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.01, transition: { duration: 0.25 } }}
                className="relative bg-white rounded-[20px] p-5 sm:p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(255,0,85,0.08)] hover:border-[#FF0055]/30 transition-all duration-300 flex flex-col justify-start group cursor-default overflow-hidden"
              >
                {/* Animated Border Mask */}
                <div
                  className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none z-10"
                  style={{
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_4s_linear_infinite] opacity-70 sm:opacity-30 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#FF0055_40%,#ff3377_60%,transparent_100%)]" />
                </div>

                {/* Header: Icon & Title on the same line */}
                <div className="relative z-20 flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#FF0055] via-[#FF2670] to-[#FF6699] border border-[#FF85B3]/40 flex items-center justify-center text-white shrink-0 shadow-[0_2px_8px_rgba(255,0,85,0.22)] transition-transform duration-300 group-hover:scale-105">
                    {val.icon}
                  </div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#0A1024] font-heading leading-snug group-hover:text-[#FF0055] transition-colors duration-200">
                    {val.title}
                  </h4>
                </div>

                {/* Description in next line */}
                <p className="relative z-20 mt-1 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-gray-600 font-sans leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
