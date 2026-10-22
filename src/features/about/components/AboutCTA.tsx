"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
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
    <section className="relative z-20 w-full overflow-hidden text-[#0A1024] select-none">
      <div className="relative w-full min-h-[185px] sm:min-h-[205px] md:min-h-[225px] lg:min-h-[240px] xl:min-h-[255px] flex items-center py-7 sm:py-8 md:py-9 lg:py-10 overflow-hidden">
        {/* Full-width 4K Ultra-Definition Panoramic Mountain Background */}
        <Image
          src="/images/about/about-cta-mountain-4k.webp"
          alt="Let's Build Something Great Together - Kaelixo"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />

        {/* Subtle Rosy Ambient Wash for pristine readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/5 to-transparent pointer-events-none" />

        {/* Content Container aligned with site grid */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 md:gap-8">
          {/* ============================================================ */}
          {/* LEFT: HEADLINE                                               */}
          {/* ============================================================ */}
          <div className="shrink-0 text-center md:text-left">
            <h2 className="text-[22px] sm:text-[25px] md:text-[27px] lg:text-[30px] xl:text-[34px] font-extrabold text-[#0A1024] tracking-tight leading-[1.12] font-heading drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">
              <span>Let&apos;s Build</span>
              <br />
              <span className="whitespace-nowrap">
                Something Great <span className="text-[#FF0055]">Together</span>
              </span>
            </h2>
          </div>

          {/* ============================================================ */}
          {/* CENTER: 2-LINE SUBTITLE TEXT                                 */}
          {/* ============================================================ */}
          <div className="text-slate-700/95 font-sans text-[12.5px] sm:text-[13.5px] md:text-[13.5px] lg:text-[14.5px] xl:text-[15px] font-medium leading-snug text-center md:text-left">
            <p className="whitespace-nowrap">Have a project in mind or just want to say hello?</p>
            <p className="whitespace-nowrap mt-0.5">We&apos;d love to hear from you.</p>
          </div>

          {/* ============================================================ */}
          {/* RIGHT: GET IN TOUCH BUTTON                                   */}
          {/* ============================================================ */}
          <div className="shrink-0 flex items-center justify-center md:justify-end">
            <button
              type="button"
              onClick={handleOpenConsultation}
              className="group inline-flex items-center gap-2 px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#FF0055] via-[#ff1464] to-[#ff2b70] text-white text-[13.5px] sm:text-[14px] lg:text-[14.5px] font-semibold tracking-wide shadow-[0_4px_18px_rgba(255,0,85,0.4)] hover:shadow-[0_6px_25px_rgba(255,0,85,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 font-heading cursor-pointer whitespace-nowrap border border-white/20"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
