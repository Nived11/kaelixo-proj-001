"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ============================================================
// MOBILE PARALLAX STACKING CARDS COMPONENT
// ============================================================
function TeamMobileParallaxDeck() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80px", "end 80px"],
  });

  // Card 1 scales down subtly as Card 2 slides over it
  const card1Scale = useTransform(scrollYProgress, [0, 0.45], [1, 0.95]);

  // Card 2 scales down subtly as Card 3 slides over it
  const card2Scale = useTransform(scrollYProgress, [0.45, 0.85], [1, 0.97]);

  return (
    <div
      ref={containerRef}
      className="block sm:hidden relative w-full pt-1 pb-0"
    >
      {/* 1. First Card: Main Team Collaborating */}
      <div className="sticky top-20 z-10">
        <motion.div
          style={{
            scale: card1Scale,
            transformOrigin: "top center",
          }}
          className="relative w-full aspect-[16/10.5] rounded-[22px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-white/15 bg-[#0A0710]"
        >
          <Image
            src="/images/about/team-main.webp"
            alt="Kaelixo Team Collaborating at Office"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Mobile Top-Right Sparkle on the corner of the first image */}
        <div className="absolute -top-3 -right-2 z-40 pointer-events-none select-none">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M17 3L17 9" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M26.5 7.5L22.5 11.5" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M31 17L25 17" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* 2. Second Card: Developer Workspace (slides over Card 1) */}
      <div className="sticky top-24 z-20 mt-3.5">
        <motion.div
          style={{
            scale: card2Scale,
            transformOrigin: "top center",
          }}
          className="relative w-full aspect-[16/10.5] rounded-[22px] overflow-hidden shadow-[0_-6px_25px_rgba(0,0,0,0.4),0_18px_36px_rgba(0,0,0,0.55)] border border-white/15 bg-[#0A0710]"
        >
          <Image
            src="/images/about/team-workspace.webp"
            alt="Kaelixo Developer Workspace"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* 3. Third Card: Team Meeting (slides over Card 2) */}
      <div className="relative z-30 mt-3.5">
        <motion.div className="relative w-full aspect-[16/10.5] rounded-[22px] overflow-hidden shadow-[0_-6px_25px_rgba(0,0,0,0.45),0_22px_42px_rgba(0,0,0,0.6)] border border-white/15 bg-[#0A0710]">
          <Image
            src="/images/about/team-meeting.webp"
            alt="Kaelixo Team Meeting & Brainstorming"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Mobile Bottom-Left Sparkle on the corner of the last image */}
        <div className="absolute -bottom-3 -left-2 z-40 pointer-events-none select-none">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M7 17L13 17" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M11.5 22.5L7.5 26.5" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M17 25L17 31" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function AboutTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });
  const handleOpenTeamModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-team-modal"));
    }
  };

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
      className="relative z-20 w-full bg-[#020205] py-20 sm:py-24 lg:py-28 overflow-x-clip text-white"
    >
      {/* Background Image */}
      <Image
        src="/images/about/aboutourteambg.png"
        alt="Team Section Background"
        fill
        priority
        className="object-cover object-center pointer-events-none select-none z-0 opacity-60"
        sizes="100vw"
        quality={90}
      />

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
              <span className="text-[14px] sm:text-[14px] lg:text-[18px] xl:text-[18px] font-bold tracking-[0.2em] text-white/90 uppercase">
                OUR TEAM
              </span>
              <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-black text-white leading-[1.12] tracking-tight font-heading">
              Skilled Minds, <br />
              <span className="text-[#FF0055] drop-shadow-[0_0_28px_rgba(255,0,85,0.45)]">
                One Shared Goal
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-relaxed text-white/75 font-sans font-normal max-w-[500px]">
              Designers, developers, writers, marketers and strategists work side by side here, each adding their craft to the same goal. Our director, Jineesh Sojan, guides the team from the first idea to the final result.
            </p>

            {/* CTA Button: Meet Our Team */}
            <div className="mt-8 sm:mt-9 flex items-center gap-4">
              <Link
                href="/about/team"
                className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] font-semibold tracking-wide shadow-sm hover:shadow-none active:scale-95 transition-all duration-300 font-heading cursor-pointer"
              >
                <span>Meet Our Team</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
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
            {/* Top-Right Pink Radiant Sparkle Accent Marks (Desktop only) */}
            <div className="hidden sm:block absolute -top-3 sm:-top-4 -right-2 sm:-right-3 z-20 pointer-events-none select-none">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M17 3L17 9" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M26.5 7.5L22.5 11.5" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M31 17L25 17" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Bottom-Left Pink Radiant Sparkle Accent Marks (Desktop only) */}
            <div className="hidden sm:block absolute -bottom-3 sm:-bottom-4 -left-2 sm:-left-3 z-20 pointer-events-none select-none">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M7 17L13 17" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M11.5 22.5L7.5 26.5" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M17 25L17 31" stroke="#FF0055" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* ── MOBILE ONLY: Sticky Parallax Stacking Cards ── */}
            <TeamMobileParallaxDeck />

            {/* ── DESKTOP & TABLET ONLY: Collage Grid ── */}
            <div className="hidden sm:grid sm:grid-cols-12 gap-3.5 sm:gap-4 relative z-10">
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
