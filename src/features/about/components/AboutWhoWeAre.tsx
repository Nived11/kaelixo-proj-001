"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutWhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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
      className="relative z-20 w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* ============================================================ */}
          {/* LEFT CONTENT COLUMN                                          */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Eyebrow: WHO WE ARE + Pink Accent Dash */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4 sm:mb-5"
            >
              <span className="text-[14px] sm:text-[14px] lg:text-[18px] xl:text-[18px] font-bold text-[#FF0055] tracking-[0.2em] uppercase">
                WHO WE ARE
              </span>
              <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-black text-[#0A1024] leading-[1.12] tracking-tight font-heading"
            >
              A Team That Turns <br className="hidden sm:inline" />
              Ideas Into{" "}
              <span className="text-[#FF0055] drop-shadow-[0_2px_18px_rgba(255,0,85,0.25)]">
                Impact
              </span>
            </motion.h2>

            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-6 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-relaxed text-gray-600 max-w-[540px]"
            >
              Kaelixo is a digital solutions company focused on web development,
              UI/UX design and technology-driven growth. We help startups,
              small businesses and established brands build powerful digital
              experiences that attract, engage and deliver real results.
            </motion.p>

            {/* CTA Button: Learn More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-9 flex items-center gap-4"
            >
              <button
                onClick={handleOpenConsultation}
                className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white font-medium text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] tracking-wide transition-all duration-300 active:scale-95 font-heading cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </button>
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLLAGE COLUMN                                         */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[560px] xl:max-w-[600px] mx-auto lg:ml-auto lg:mr-0">
            {/* Ambient Pink Glow behind right section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-[#FF0055]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* 1. Top Element: Kaelixo Headquarters Building (Animates First) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.96 }
              }
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[16/9.5] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)] border-2 sm:border-[3px] border-white bg-slate-100"
            >
              <Image
                src="/images/about/kaelixo-building.webp"
                alt="Kaelixo Headquarters Building"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </motion.div>

            {/* 2. Bottom Row: Team Image & Experience Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 -mt-4 sm:-mt-12 lg:-mt-16 xl:-mt-20 -mx-2 sm:-mx-6 lg:-mx-8 xl:-mx-9 relative z-10">
              {/* Bottom-Left: Team Photo (Animates in from the Left) */}
              <motion.div
                initial={{ opacity: 0, x: -60, y: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, x: -60, y: 20 }
                }
                transition={{
                  duration: 0.75,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative aspect-[4/3] rounded-[18px] sm:rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.16)] border-2 sm:border-[2.5px] border-white bg-slate-100"
              >
                <Image
                  src="/images/about/kaelixo-team.webp"
                  alt="Kaelixo Creative Minds in Discussion"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </motion.div>

              {/* Bottom-Right: Experience Image (Animates in from the Right) */}
              <motion.div
                initial={{ opacity: 0, x: 60, y: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, x: 60, y: 20 }
                }
                transition={{
                  duration: 0.75,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative aspect-[4/3] rounded-[18px] sm:rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.18)] border-2 sm:border-[2.5px] border-white bg-slate-100"
              >
                <Image
                  src="/images/about/about-experience.jpg"
                  alt="Kaelixo Digital Product Designer Creating Experiences"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
