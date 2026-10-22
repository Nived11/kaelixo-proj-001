"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Lightbulb, ShieldCheck, Users, TrendingUp } from "lucide-react";

function DotGridPattern({ className }: { className?: string }) {
  return (
    <svg className={className} width="110" height="85" fill="none" aria-hidden="true">
      <defs>
        <pattern
          id="about-dot-pattern"
          x="0"
          y="0"
          width="13"
          height="13"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2.5" cy="2.5" r="1.6" fill="#FF0055" fillOpacity="0.65" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#about-dot-pattern)" />
    </svg>
  );
}

const valuesData = [
  {
    id: "innovation",
    icon: <Lightbulb className="w-5 h-5 stroke-[2.2]" />,
    title: "Innovation",
    desc: "We embrace new ideas and modern technology.",
  },
  {
    id: "integrity",
    icon: <ShieldCheck className="w-5 h-5 stroke-[2.2]" />,
    title: "Integrity",
    desc: "We believe in honest and transparent work.",
  },
  {
    id: "collaboration",
    icon: <Users className="w-5 h-5 stroke-[2.2]" />,
    title: "Collaboration",
    desc: "We work together to achieve the best results.",
  },
  {
    id: "growth",
    icon: <TrendingUp className="w-5 h-5 stroke-[2.2]" />,
    title: "Growth",
    desc: "We are committed to continuous learning and improvement.",
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
        {/* Decorative Dotted Grid Accents matching the reference design */}
        <DotGridPattern className="absolute top-10 right-4 sm:right-10 pointer-events-none" />
        <DotGridPattern className="absolute bottom-6 left-4 sm:left-8 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Eyebrow: OUR MISSION & VISION */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <span className="text-[12px] sm:text-[14px] font-bold tracking-[0.22em] text-[#0A1024] uppercase font-heading">
              OUR MISSION & VISION
            </span>
            <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
          </motion.div>

          {/* Mission & Vision 2-Column Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
            {/* ============================================================ */}
            {/* Mission Card (Fixed Background, Animated Text)               */}
            {/* ============================================================ */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[260px] sm:min-h-[290px] p-5 sm:p-6 lg:p-8 flex items-center shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100 group">
              {/* Full Background Photo - Fixed in Place */}
              <Image
                src="/images/about/mission-bg.webp"
                alt="Our Mission - Mountain Sunrise"
                fill
                className="object-cover object-right sm:object-center pointer-events-none"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />

              {/* TRUE CRYSTAL FROSTED GLASS CONTENT CARD (High Transparency, Real Glass Look) */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 backdrop-blur-xl sm:backdrop-blur-2xl bg-white/20 sm:bg-white/18 border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_1px_1px_0_rgba(255,255,255,0.4)] rounded-xl sm:rounded-2xl p-5 sm:p-6 max-w-[400px]"
              >
                <div className="flex items-start gap-4">
                  {/* Bullseye / Target Icon with Soft Pink Shade Background */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FFE8F2]/90 backdrop-blur-sm flex items-center justify-center text-[#FF0055] shrink-0 shadow-sm border border-pink-200/50">
                    <Target className="w-6 h-6 stroke-[2.3]" />
                  </div>

                  <div>
                    <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#0A1024] font-heading leading-tight tracking-tight">
                      Our Mission
                    </h3>
                    <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-slate-900/90 font-sans font-medium">
                      To empower businesses with innovative digital solutions that drive
                      measurable growth and create lasting value.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ============================================================ */}
            {/* Vision Card (Fixed Background, Animated Text)                */}
            {/* ============================================================ */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[260px] sm:min-h-[290px] p-5 sm:p-6 lg:p-8 flex items-center shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100 group">
              {/* Full Background Photo - Fixed in Place */}
              <Image
                src="/images/about/vision-bg.webp"
                alt="Our Vision - Modern Architecture"
                fill
                className="object-cover object-right sm:object-center pointer-events-none"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />

              {/* TRUE CRYSTAL FROSTED GLASS CONTENT CARD (High Transparency, Real Glass Look) */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 backdrop-blur-xl sm:backdrop-blur-2xl bg-white/20 sm:bg-white/18 border border-white/35 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_1px_1px_0_rgba(255,255,255,0.4)] rounded-xl sm:rounded-2xl p-5 sm:p-6 max-w-[400px]"
              >
                <div className="flex items-start gap-4">
                  {/* Eye / Vision Icon with Soft Pink Shade Background */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FFE8F2]/90 backdrop-blur-sm flex items-center justify-center text-[#FF0055] shrink-0 shadow-sm border border-pink-200/50">
                    <Eye className="w-6 h-6 stroke-[2.3]" />
                  </div>

                  <div>
                    <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#0A1024] font-heading leading-tight tracking-tight">
                      Our Vision
                    </h3>
                    <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-slate-900/90 font-sans font-medium">
                      To be a trusted global partner for digital growth, known for our
                      creativity, technology and results-driven approach.
                    </p>
                  </div>
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
            <span className="text-[12px] sm:text-[14px] font-bold tracking-[0.22em] text-[#0A1024] uppercase font-heading">
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
                whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.25 } }}
                className="bg-white rounded-[22px] p-5 sm:p-6 lg:p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_35px_rgba(255,0,85,0.12)] hover:border-[#FF0055]/30 transition-all duration-300 flex items-center gap-4 group cursor-default"
              >
                {/* Circular Icon with light pink gradient & hover animation */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fff0f5] to-[#ffe4ee] border border-pink-100 flex items-center justify-center text-[#FF0055] shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#FF0055] group-hover:to-[#ff2b70] group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(255,0,85,0.4)] transition-all duration-300 shadow-sm">
                  {val.icon}
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-[#0A1024] font-heading leading-snug group-hover:text-[#FF0055] transition-colors duration-200">
                    {val.title}
                  </h4>
                  <p className="mt-1 text-[12.5px] sm:text-[13px] text-slate-500 font-sans leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
