"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutTeam() {
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
      id="team"
      className="relative z-20 w-full bg-[#020205] py-20 sm:py-24 lg:py-28 overflow-hidden text-white"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-[#FF0055]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#FF0055]/08 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* ============================================================ */}
          {/* LEFT COLUMN: HEADLINE, DESCRIPTION & CTA                     */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Eyebrow: OUR TEAM + Pink Dash */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[12px] sm:text-[14px] font-bold tracking-[0.22em] text-white/90 uppercase font-heading">
                OUR TEAM
              </span>
              <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[48px] xl:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight font-heading">
              Creative Minds <br />
              <span className="text-[#FF0055] drop-shadow-[0_0_28px_rgba(255,0,85,0.45)]">
                Real People
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] lg:text-[16.5px] leading-relaxed text-white/75 font-sans font-normal max-w-[500px]">
              Our team is a mix of designers, developers, strategists and
              problem-solvers who share a common goal — to create digital
              experiences that make a difference.
            </p>

            {/* CTA Button: Meet The Team */}
            <div className="mt-8 sm:mt-9 flex items-center gap-4">
              <button
                onClick={handleOpenConsultation}
                className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#FF0055] via-[#ff1464] to-[#ff2b70] text-white text-[15px] sm:text-[16px] font-semibold tracking-wide shadow-[0_0_25px_rgba(255,0,85,0.4)] hover:shadow-[0_0_35px_rgba(255,0,85,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 font-heading cursor-pointer"
              >
                <span>Meet The Team</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: TEAM IMAGES COLLAGE                            */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }
            }
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative w-full max-w-[650px] lg:max-w-none mx-auto"
          >
            {/* Top-Right Pink Radiant Sparkle Accent Marks */}
            <div className="absolute -top-3 sm:-top-4 -right-2 sm:-right-3 z-20 pointer-events-none select-none">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M17 3L17 9" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M26.5 7.5L22.5 11.5" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M31 17L25 17" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Bottom-Left Pink Radiant Sparkle Accent Marks */}
            <div className="absolute -bottom-3 sm:-bottom-4 -left-2 sm:-left-3 z-20 pointer-events-none select-none">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M7 17L13 17" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M11.5 22.5L7.5 26.5" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M17 25L17 31" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Collage Grid: 1 Tall Main Image + 2 Stacked Images */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4 relative z-10">
              {/* Main Large Team Photo (Left) */}
              <div className="sm:col-span-7 relative aspect-[4/4.6] sm:aspect-auto sm:h-full min-h-[300px] sm:min-h-[390px] rounded-[22px] sm:rounded-[26px] overflow-hidden border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.45)] bg-[#0A0710] group">
                <Image
                  src="/images/about/team-main.webp"
                  alt="Kaelixo Team Collaborating at Office"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                  sizes="(min-width: 1024px) 35vw, 100vw"
                />
              </div>

              {/* Two Stacked Images (Right) */}
              <div className="sm:col-span-5 flex flex-col gap-3.5 sm:gap-4">
                {/* Top Image: Developer at Multi-Monitor Workspace */}
                <div className="relative aspect-[16/10.5] sm:aspect-[16/10] rounded-[18px] sm:rounded-[22px] overflow-hidden border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.35)] bg-[#0A0710] group">
                  <Image
                    src="/images/about/team-workspace.webp"
                    alt="Kaelixo Developer Workspace"
                    fill
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>

                {/* Bottom Image: Team In Discussion around Meeting Table */}
                <div className="relative aspect-[16/10.5] sm:aspect-[16/10] rounded-[18px] sm:rounded-[22px] overflow-hidden border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.35)] bg-[#0A0710] group">
                  <Image
                    src="/images/about/team-meeting.webp"
                    alt="Kaelixo Team Meeting & Brainstorming"
                    fill
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
