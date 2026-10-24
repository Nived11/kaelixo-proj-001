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
      <div className="relative w-full min-h-[185px] sm:min-h-[205px] md:min-h-[250px] lg:min-h-[265px] xl:min-h-[255px] flex items-center py-7 sm:py-8 md:py-8 lg:py-9 xl:py-10 overflow-hidden">
        {/* Full-width 4K Ultra-Definition Panoramic Mountain Background */}
        <Image
          src="/images/about/about-cta-mountain-4k.webp"
          alt="Let's Build Something Great Together - Kaelixo"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />

        {/* Rosy Ambient Wash: protects left side readability on tablet/laptop, subtle on xl */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/35 via-white/10 to-transparent md:from-white/75 md:via-white/35 md:to-transparent xl:from-white/25 xl:via-white/5 xl:to-transparent pointer-events-none" />

        {/* Content Container aligned with site grid */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-3.5 sm:px-8 lg:px-12 flex flex-col md:items-start xl:flex-row xl:items-center xl:justify-between gap-4 sm:gap-5 md:gap-4 xl:gap-8">
          {/* ============================================================ */}
          {/* 1. HEADLINE                                                  */}
          {/* ============================================================ */}
          <div className="shrink-0 text-center md:text-left">
            <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-extrabold text-[#0A1024] tracking-tighter sm:tracking-tight leading-[1.12] font-heading drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">
              <span>Let&apos;s Build</span>
              <br />
              <span className="whitespace-nowrap">
                Something Great <span className="text-[#FF0055]">Together</span>
              </span>
            </h2>
          </div>

          {/* ============================================================ */}
          {/* 2. SUBTITLE / DESCRIPTION                                    */}
          {/* ============================================================ */}
          <div className="text-gray-600 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-medium leading-snug text-center md:text-left max-w-[480px] xl:max-w-none xl:-translate-x-12 2xl:-translate-x-14">
            <p className="whitespace-nowrap tracking-tight sm:tracking-normal">Have a project in mind or just want to say hello?</p>
            <p className="whitespace-nowrap tracking-tight sm:tracking-normal mt-0.5">We&apos;d love to hear from you.</p>
          </div>

          {/* ============================================================ */}
          {/* 3. GET IN TOUCH BUTTON                                       */}
          {/* ============================================================ */}
          <div className="shrink-0 flex items-center justify-center md:justify-start xl:justify-end">
            <button
              type="button"
              onClick={handleOpenConsultation}
              className="group inline-flex items-center gap-2 px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white text-[15px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-semibold tracking-wide shadow-sm hover:shadow-none active:scale-95 transition-all duration-300 font-heading cursor-pointer whitespace-nowrap"
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
