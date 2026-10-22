"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2025",
    title: "The Beginning",
    desc: "Started with a focused vision to build modern, high-performance web and digital solutions.",
  },
  {
    year: "2026",
    title: "The Official Launch",
    desc: "Kaelixo officially goes live as a full-fledged digital agency, turning bold ideas into digital growth.",
  },
  {
    year: "2026+",
    title: "A Bigger Tomorrow",
    desc: "Continuing to innovate, scale partnerships, and create lasting impact for businesses worldwide.",
  },
];

export default function AboutStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

  const handleOpenConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-consultation-modal", {
          detail: { type: "consultation" },
        })
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full bg-[#020205] py-20 sm:py-24 lg:py-28 overflow-hidden text-white"
    >
      {/* ============================================================ */}
      {/* BACKGROUND AMBIENT GLOW & FLUID RIBBON WAVES                 */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Ambient magenta glow spots */}
        <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-[#FF0055]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[#FF0055]/12 rounded-full blur-[150px]" />

        {/* Ambient fluid wave lines (matching the background smoke in the design) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,500 C200,300 400,650 700,450 C1000,250 1200,600 1600,350"
            stroke="url(#story-gradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M-50,600 C300,400 500,750 850,500 C1150,300 1350,650 1550,450"
            stroke="url(#story-gradient)"
            strokeWidth="1.2"
          />
          <path
            d="M100,200 C350,450 650,200 950,400 C1250,550 1400,250 1500,350"
            stroke="url(#story-gradient)"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="story-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF0055" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ff2b70" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Top & Bottom Section Transition Fades */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/5 to-transparent opacity-20" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ============================================================ */}
          {/* LEFT COLUMN: HEADLINE & STORY TEXT                           */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow: OUR STORY + Pink Line */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[12px] sm:text-[14px] font-bold tracking-[0.22em] text-white/90 uppercase font-heading">
                OUR STORY
              </span>
              <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[48px] xl:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight font-heading">
              From a Small Idea <br />
              to a{" "}
              <span className="text-[#FF0055] drop-shadow-[0_0_28px_rgba(255,0,85,0.45)]">
                Growing Agency
              </span>
            </h2>

            {/* Subtext Paragraph */}
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] lg:text-[16.5px] leading-relaxed text-white/75 font-sans font-normal max-w-[540px]">
              What started as a small idea to help businesses go online has now
              grown into a full-fledged digital agency. Over the years, we have
              worked with amazing clients, built meaningful partnerships and
              delivered projects across various industries.
            </p>

            {/* CTA Button: Our Journey */}
            <div className="mt-8 sm:mt-9 flex items-center gap-4">
              <button
                onClick={handleOpenConsultation}
                className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#FF0055] via-[#ff1464] to-[#ff2b70] text-white text-[15px] sm:text-[16px] font-semibold tracking-wide shadow-[0_0_25px_rgba(255,0,85,0.4)] hover:shadow-[0_0_35px_rgba(255,0,85,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 font-heading cursor-pointer"
              >
                <span>Our Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: VERTICAL TIMELINE WITH GLOWING NODES           */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 25 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex flex-col justify-center max-w-[560px] lg:max-w-none mx-auto lg:ml-auto w-full"
          >
            {/* The Vertical Connecting Line */}
            <div className="absolute left-[17px] sm:left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#FF0055] via-[#FF0055]/50 to-[#FF0055]/15" />

            {/* Timeline Items */}
            <div className="flex flex-col gap-9 sm:gap-10 relative">
              {timelineData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + idx * 0.15,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-5 sm:gap-6 group"
                >
                  {/* Glowing Pink Circular Timeline Node */}
                  <div className="relative z-10 flex-shrink-0 mt-0.5">
                    {/* Outer Glowing Halo */}
                    <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#FF0055]/15 border border-[#FF0055]/50 flex items-center justify-center shadow-[0_0_15px_rgba(255,0,85,0.4)] group-hover:shadow-[0_0_22px_rgba(255,0,85,0.7)] group-hover:scale-110 transition-all duration-300">
                      {/* Inner Solid Dot with white core */}
                      <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] rounded-full bg-gradient-to-br from-[#FF0055] to-[#ff2b70] shadow-[0_0_8px_#FF0055] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                      </div>
                    </div>
                  </div>

                  {/* Text Details (Year, Title, Description) */}
                  <div className="flex-1 pt-0.5">
                    {/* Year Tag */}
                    <span className="text-[13px] sm:text-[14px] font-semibold text-white/60 tracking-wider font-mono uppercase block mb-1">
                      {item.year}
                    </span>

                    {/* Milestone Title */}
                    <h3 className="text-[19px] sm:text-[21px] lg:text-[22px] font-bold text-white tracking-tight font-heading group-hover:text-[#FF0055] transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Milestone Description */}
                    <p className="mt-1.5 text-[14px] sm:text-[15px] text-white/70 leading-relaxed font-sans max-w-[460px]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
