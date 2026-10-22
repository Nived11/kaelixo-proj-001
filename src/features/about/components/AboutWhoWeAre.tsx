"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow: WHO WE ARE + Pink Accent Dash */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[12px] sm:text-[14px] font-bold tracking-[0.22em] text-[#0A1024] uppercase font-heading">
                WHO WE ARE
              </span>
              <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[44px] xl:text-[52px] font-extrabold text-[#0A1024] leading-[1.12] tracking-tight font-heading">
              A Team That Turns <br className="hidden sm:inline" />
              Ideas Into{" "}
              <span className="text-[#FF0055] drop-shadow-[0_2px_18px_rgba(255,0,85,0.25)]">
                Impact
              </span>
            </h2>

            {/* Description Text */}
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] lg:text-[16.5px] leading-relaxed text-slate-600 font-sans font-normal max-w-[540px]">
              Kaelixo is a digital solutions company focused on web development,
              UI/UX design and technology-driven growth. We help startups,
              small businesses and established brands build powerful digital
              experiences that attract, engage and deliver real results.
            </p>

            {/* CTA Button: Learn More */}
            <div className="mt-8 sm:mt-9 flex items-center gap-4">
              <button
                onClick={handleOpenConsultation}
                className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#FF0055] via-[#ff1464] to-[#ff2b70] text-white text-[15px] sm:text-[16px] font-semibold tracking-wide shadow-[0_4px_22px_rgba(255,0,85,0.35)] hover:shadow-[0_6px_30px_rgba(255,0,85,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 font-heading cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* RIGHT COLLAGE COLUMN                                         */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }
            }
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[560px] xl:max-w-[600px] mx-auto lg:ml-auto lg:mr-0"
          >
            {/* Ambient Pink Glow behind right section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-[#FF0055]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* 1. Top Element: Kaelixo Headquarters Building */}
            <div className="relative w-full aspect-[16/9.5] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-slate-100 bg-slate-100">
              <Image
                src="/images/about/kaelixo-building.webp"
                alt="Kaelixo Headquarters Building"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>

            {/* 2. Bottom Row: Team Image & Experience Card (Shifted higher up over the building) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 -mt-8 sm:-mt-24 lg:-mt-28 xl:-mt-32 px-3 sm:px-4 relative z-10">
              {/* Bottom-Left: Team Collaborating Photo */}
              <div className="relative aspect-[4/3] rounded-[18px] sm:rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.16)] border-4 border-white bg-slate-100 group">
                <Image
                  src="/images/about/kaelixo-team.webp"
                  alt="Kaelixo Creative Minds in Discussion"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>

              {/* Bottom-Right: Dark Magenta "Creating Digital Experiences" Card */}
              <div className="relative aspect-[4/3] rounded-[18px] sm:rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.18)] border-4 border-white bg-gradient-to-br from-[#1a030d] via-[#100308] to-[#050103] p-4.5 sm:p-5 lg:p-6 flex flex-col justify-between group">
                {/* Background glow radial */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(255,0,85,0.3),transparent_65%)] pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#FF0055]/25 rounded-full blur-2xl pointer-events-none" />

                {/* Card Title */}
                <div className="relative z-10">
                  <h3 className="text-white text-[17px] sm:text-[18px] lg:text-[19px] xl:text-[20px] font-extrabold leading-[1.26] font-heading tracking-tight">
                    Creating <br />
                    Digital Experiences <br />
                    That Matter
                  </h3>
                  <div className="w-7 h-[2px] bg-[#FF0055] rounded-full mt-2.5" />
                </div>

                {/* Hot Pink Play Action Circle Button */}
                <div className="relative z-10 flex items-center justify-end mt-2">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-[#FF0055] to-[#ff2b70] text-white flex items-center justify-center shadow-[0_0_18px_rgba(255,0,85,0.55)] group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(255,0,85,0.75)] active:scale-95 transition-all duration-300">
                    <Play className="w-4 h-4 fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
