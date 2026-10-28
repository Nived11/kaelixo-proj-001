"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Mail, ArrowLeft, ArrowRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  linkedin: string;
  email: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Jineesh Sojan",
    role: "DIRECTOR & TECHNOLOGY LEAD",
    department: "LEADERSHIP",
    image: "/images/about/director-trimmed.png",
    bio: "Guides Kaelixo from product vision to measurable growth and client success.",
    linkedin: "https://linkedin.com",
    email: "jineesh@kaelixo.com",
  },
  {
    id: "2",
    name: "Shahin sha Kabeer",
    role: "LEAD UI/UX & PRODUCT DESIGNER",
    department: "DESIGN & UX",
    image: "/images/about/team/designer-clean.png",
    bio: "Transforms complex requirements into award-worthy digital experiences.",
    linkedin: "https://linkedin.com",
    email: "sneha@kaelixo.com",
  },
  {
    id: "3",
    name: "Aravind Menon",
    role: "HEAD OF TECHNOLOGY & CLOUD ARCHITECT",
    department: "ENGINEERING",
    image: "/images/about/team/architect-clean.png",
    bio: "Architects scalable cloud infrastructure and resilient modern web systems.",
    linkedin: "https://linkedin.com",
    email: "aravind@kaelixo.com",
  },
  {
    id: "4",
    name: "Rahul Varma",
    role: "SENIOR FULL-STACK ENGINEER",
    department: "DEVELOPMENT",
    image: "/images/about/team/developer-clean.png",
    bio: "Builds lightning-fast applications and robust backend APIs with clean architecture.",
    linkedin: "https://linkedin.com",
    email: "rahul@kaelixo.com",
  },
  {
    id: "5",
    name: "Anjali Nair",
    role: "GROWTH & DIGITAL STRATEGIST",
    department: "STRATEGY",
    image: "/images/about/team/growth-clean.png",
    bio: "Drives customer acquisition funnels and digital brand performance analytics.",
    linkedin: "https://linkedin.com",
    email: "anjali@kaelixo.com",
  },
];

export default function AboutTeamView() {
  const router = useRouter();
  const [activeCardId, setActiveCardId] = useState("3"); // Aravind Menon featured as in mockup
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      router.push("/about#team");
    }
  };

  // Scroll navigation helpers
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  // Convert vertical mouse wheel into smooth horizontal momentum scrolling
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let targetScroll = container.scrollLeft;
    let animId: number | null = null;
    let snapTimeout: NodeJS.Timeout | null = null;

    const smoothScrollLoop = () => {
      const current = container.scrollLeft;
      const diff = targetScroll - current;

      if (Math.abs(diff) > 0.5) {
        container.scrollLeft = current + diff * 0.12;
        animId = requestAnimationFrame(smoothScrollLoop);
      } else {
        container.scrollLeft = targetScroll;
        animId = null;
      }
    };

    const onWheel = (e: WheelEvent) => {
      // Allow native smooth trackpad horizontal swipe
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 0) {
        targetScroll = container.scrollLeft;
        return;
      }

      e.preventDefault();
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      const maxScroll = container.scrollWidth - container.clientWidth;

      targetScroll = Math.max(0, Math.min(maxScroll, targetScroll + delta * 1.15));

      // Temporarily soften snap during active wheeling
      container.style.scrollSnapType = "none";
      if (snapTimeout) clearTimeout(snapTimeout);
      snapTimeout = setTimeout(() => {
        container.style.scrollSnapType = "x proximity";
      }, 250);

      if (!animId) {
        animId = requestAnimationFrame(smoothScrollLoop);
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
      if (animId) cancelAnimationFrame(animId);
      if (snapTimeout) clearTimeout(snapTimeout);
    };
  }, []);

  return (
    <div className="relative isolate w-full h-screen min-h-[580px] pt-[72px] sm:pt-[76px] lg:pt-[80px] pb-3 sm:pb-4 flex flex-col justify-between overflow-hidden bg-[#030105] text-white">
      {/* ============================================================ */}
      {/* 1. BACKGROUND IMAGE: aboutteambg.png                         */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/about/team/aboutteambg.png"
          alt="Team Background Glow"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Ambient subtle magenta back glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FF0055]/10 rounded-full blur-[220px] pointer-events-none z-0" />

      {/* ============================================================ */}
      {/* 2. TOP HEADER: Back Button, Eyebrow, Title & Tagline         */}
      {/* ============================================================ */}
      <div className="relative z-30 w-full pt-1 sm:pt-2 pb-1 px-4 sm:px-8 lg:px-12 flex items-center justify-between shrink-0">
        {/* LEFT: Back Button */}
        <div className="flex-1 flex items-center justify-start">
          <button
            type="button"
            onClick={handleBack}
            aria-label="Go back to team section"
            className="group inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.06] hover:bg-[#FF0055] border border-white/15 hover:border-[#FF0055] text-white/90 hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md active:scale-95 cursor-pointer font-heading"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back</span>
          </button>
        </div>

        {/* CENTER: Exact Eyebrow, Headline & Tagline from Design Mockup */}
        <div className="flex-initial text-center px-2">
          {/* Eyebrow: — OUR TEAM — */}
          <div className="flex items-center justify-center gap-2.5 mb-1">
            <span className="w-7 sm:w-9 h-[1.5px] bg-[#FF0055]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase font-heading">
              OUR TEAM
            </span>
            <span className="w-7 sm:w-9 h-[1.5px] bg-[#FF0055]" />
          </div>

          {/* Main Heading: Meet Our Team Members */}
          <h1 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold tracking-tight text-white font-heading whitespace-nowrap drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
            Meet Our <span className="text-[#FF0055]">Team Members</span>
          </h1>

          {/* Tagline */}
          <p className="text-[11px] sm:text-[12px] text-gray-300/85 font-normal mt-0.5 max-w-md mx-auto">
            Passionate people building solutions for a better tomorrow.
          </p>
        </div>

        {/* RIGHT: Visual spacer for symmetry */}
        <div className="flex-1 hidden sm:flex items-center justify-end" />
      </div>

      {/* ============================================================ */}
      {/* 3. MIDDLE: CARDS ROW WITH LEFT & RIGHT ARROWS                */}
      {/* ============================================================ */}
      <div className="relative z-10 w-full flex-1 flex items-center overflow-hidden my-auto py-1">
        {/* FLOATING LEFT ARROW BUTTON */}
        <button
          type="button"
          onClick={handleScrollLeft}
          aria-label="Previous team members"
          className="group absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/75 hover:bg-[#FF0055] border border-white/20 hover:border-[#FF0055] text-white shadow-[0_8px_30px_rgba(0,0,0,0.85)] hover:shadow-[0_0_24px_rgba(255,0,85,0.6)] backdrop-blur-md transition-all duration-300 active:scale-90 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>

        {/* FLOATING RIGHT ARROW BUTTON */}
        <button
          type="button"
          onClick={handleScrollRight}
          aria-label="Next team members"
          className="group absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/75 hover:bg-[#FF0055] border border-white/20 hover:border-[#FF0055] text-white shadow-[0_8px_30px_rgba(0,0,0,0.85)] hover:shadow-[0_0_24px_rgba(255,0,85,0.6)] backdrop-blur-md transition-all duration-300 active:scale-90 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>

        {/* HORIZONTAL CARDS SCROLLER */}
        <div
          ref={scrollContainerRef}
          data-lenis-prevent="true"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="w-full flex items-center overflow-x-auto overflow-y-visible py-4 sm:py-5 px-14 sm:px-24 lg:px-28 gap-5 sm:gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-contain snap-x snap-mandatory"
        >
          {TEAM_MEMBERS.map((member, idx) => {
            return (
              <motion.div
                key={member.id}
                onClick={() => setActiveCardId(member.id)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative w-[310px] sm:w-[335px] md:w-[350px] lg:w-[360px] min-w-[310px] sm:min-w-[335px] md:min-w-[350px] lg:min-w-[360px] h-[445px] sm:h-[475px] md:h-[490px] rounded-[24px] sm:rounded-[28px] transition-all duration-300 flex flex-col justify-between overflow-hidden snap-center shrink-0 cursor-pointer select-none bg-gradient-to-b from-[#180512]/60 via-[#0B0208]/85 to-[#040106]/95 shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(255,0,85,0.25)]"
              >
                {/* Static Base Border - on top of content */}
                <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-white/10 pointer-events-none z-30" />

                {/* Animated 2-Line Rotating Border Mask (z-30 so it runs in front on the outer perimeter, not behind description) */}
                <div
                  className="absolute inset-0 rounded-[24px] sm:rounded-[28px] overflow-hidden pointer-events-none z-30"
                  style={{
                    padding: '1.2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] aspect-square animate-[spin_5.5s_linear_infinite] transition-opacity duration-300 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_19%,#FF0055_22%,#ff4081_25%,#FF0055_28%,transparent_31%,transparent_69%,#FF0055_72%,#ff4081_75%,#FF0055_78%,transparent_81%,transparent_100%)] opacity-60 group-hover:opacity-85"
                  />
                </div>

                {/* ==================================================== */}
                {/* 1. TOP & MIDDLE: LOGO EMBLEM + TRANSPARENT CUTOUT    */}
                {/* ==================================================== */}
                <div className="relative w-full flex-1 min-h-[235px] sm:min-h-[260px] md:min-h-[275px] flex items-end justify-center overflow-hidden">
                  {/* Kaelixo Brand Logo Shape behind portrait - subtle opacity */}
                  <div className="absolute top-[12%] sm:top-[14%] left-1/2 -translate-x-1/2 w-[74%] sm:w-[78%] aspect-square pointer-events-none select-none z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <Image
                      src="/images/brand/kaelixo-logo.png"
                      alt="Kaelixo Brand Emblem"
                      fill
                      priority={idx < 4}
                      className="object-contain drop-shadow-[0_0_25px_rgba(255,0,85,0.25)]"
                    />
                  </div>

                  {/* Foreground Cutout Character (extends down behind the glass card with hover translate) */}
                  <div className="relative z-10 w-full h-[270px] sm:h-[305px] md:h-[320px] flex items-end justify-center pointer-events-none select-none pb-1">
                    <div className={`relative w-full h-full flex items-end justify-center ${member.id === '1' ? 'scale-[0.91] origin-bottom' : ''}`}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        quality={95}
                        priority={idx < 4}
                        className="object-contain object-bottom group-hover:scale-106 group-hover:-translate-y-3.5 transition-transform duration-500 ease-out"
                        sizes="(max-width: 640px) 310px, 360px"
                      />
                    </div>
                  </div>
                </div>

                {/* ==================================================== */}
                {/* 2. PURE TRANSLUCENT FROSTED GLASS CONTENT CARD       */}
                {/* ==================================================== */}
                <div
                  className="relative z-20 -mt-12 p-4 sm:p-4.5 pt-3.5 rounded-t-[22px] rounded-b-[22px] sm:rounded-b-[26px] backdrop-blur-2xl border-t border-t-white/35 border-x border-white/15 border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.35),inset_0_1px_1px_0_rgba(255,255,255,0.2)] shrink-0 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(18, 5, 20, 0.28) 100%)',
                  }}
                >
                  {/* Specular light highlight on curved top edge */}
                  <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none rounded-t-[22px]" />

                  {/* Member Name */}
                  <h4 className="text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold text-white tracking-tight font-heading leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {member.name}
                  </h4>

                  {/* Role in Signature Pink - fits fully without ellipsis */}
                  <p className="text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] font-bold text-[#FF0055] uppercase tracking-wide mt-1 font-heading line-clamp-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    {member.role}
                  </p>

                  {/* Pink Accent Underline (matching design mockup) */}
                  <div className="w-7 h-[1.5px] bg-[#FF0055] rounded-full my-2 shadow-[0_0_8px_rgba(255,0,85,0.6)]" />

                  {/* Bio / Description - 2 lines clean, NO ellipsis (...) */}
                  <p className="text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.45] text-gray-200 font-sans">
                    {member.bio}
                  </p>

                  {/* Social Icons Row (Department tag removed) */}
                  <div className="flex items-center gap-2 mt-2.5 pt-2.5 border-t border-white/15">
                    {/* LinkedIn Icon */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn Profile`}
                      className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full flex items-center justify-center bg-[#4d001a]/80 hover:bg-[#FF0055] border border-white/20 hover:border-[#FF0055] text-white shadow-sm hover:shadow-[0_0_12px_rgba(255,0,85,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaLinkedinIn className="w-3 h-3 text-white" />
                    </a>

                    {/* Email Icon */}
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full flex items-center justify-center bg-[#4d001a]/80 hover:bg-[#FF0055] border border-white/20 hover:border-[#FF0055] text-white shadow-sm hover:shadow-[0_0_12px_rgba(255,0,85,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-3 h-3 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. BOTTOM CENTER DOTS INDICATOR                              */}
      {/* ============================================================ */}
      <div className="relative z-20 w-full pb-4 sm:pb-5 flex items-center justify-center gap-2 shrink-0">
        {TEAM_MEMBERS.map((member) => (
          <button
            key={member.id}
            type="button"
            onClick={() => setActiveCardId(member.id)}
            aria-label={`Select ${member.name}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${member.id === activeCardId
              ? "w-6 bg-gradient-to-r from-[#FF0055] to-[#ff2b70] shadow-[0_0_10px_rgba(255,0,85,0.7)]"
              : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
