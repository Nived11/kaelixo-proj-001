"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Mail, ArrowLeft, ArrowRight } from "lucide-react";
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
    email: "shahin@kaelixo.com",
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

export interface AboutTeamModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AboutTeamModal({ isOpen: controlledIsOpen, onClose }: AboutTeamModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeCardId, setActiveCardId] = useState("3"); // Aravind Menon featured as in mockup
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
    setInternalOpen(false);
  }, [onClose]);

  // Listen to custom events for opening/closing from anywhere
  useEffect(() => {
    const handleOpen = () => setInternalOpen(true);
    const handleCloseEvt = () => handleClose();

    window.addEventListener("open-team-modal", handleOpen);
    window.addEventListener("close-team-modal", handleCloseEvt);

    return () => {
      window.removeEventListener("open-team-modal", handleOpen);
      window.removeEventListener("close-team-modal", handleCloseEvt);
    };
  }, [handleClose]);

  // Keyboard navigation (Escape key closes modal)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleScrollRight();
      if (e.key === "ArrowLeft") handleScrollLeft();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

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

  // Convert vertical mouse wheel into horizontal scroll (cards move right to left on scroll down)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isOpen) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      container.scrollLeft += delta * 1.3;
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [isOpen]);

  // Prevent background scrolling when modal is open, pause Lenis smooth scroll
  useEffect(() => {
    if (!isOpen) return;

    // 1. Pause Lenis smooth scrolling if active
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();

    // 2. Lock both documentElement and body scrolling
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      lenis?.start();
      document.documentElement.style.overflow = originalHtmlOverflow || "";
      document.body.style.overflow = originalBodyOverflow || "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-40 select-none overflow-hidden"
          style={{ overflow: "hidden" }}
        >
          {/* ============================================================ */}
          {/* 1. BLACK GLASS EFFECT BACKDROP (Behind Header at z-50)       */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
          />

          {/* ============================================================ */}
          {/* 2. FULL SCREEN MODAL VIEW WITH ABOUTTEAMBG.PNG BACKGROUND    */}
          {/* Starts directly below the header with zero gap               */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[64px] sm:top-[68px] lg:top-[72px] inset-x-0 bottom-0 z-40 w-full h-[calc(100vh-64px)] sm:h-[calc(100vh-68px)] lg:h-[calc(100vh-72px)] flex flex-col justify-between overflow-hidden bg-[#020104] isolate"
            style={{ overflow: "hidden" }}
          >
            {/* Custom Background Graphic: aboutteambg.png */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <Image
                src="/images/about/team/aboutteambg.png"
                alt="About Team Background Glow"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* ============================================================ */}
            {/* TOP HEADER: Centered Eyebrow, Title & Tagline + Back & Close */}
            {/* ============================================================ */}
            <div className="relative z-30 w-full pt-2 sm:pt-3 pb-1 px-4 sm:px-8 lg:px-12 flex items-center justify-between shrink-0">
              {/* LEFT: Back Button with Icon */}
              <div className="flex-1 flex items-center justify-start">
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Go back"
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
                  <span className="w-8 sm:w-10 h-[1.5px] bg-[#FF0055]" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase font-heading">
                    OUR TEAM
                  </span>
                  <span className="w-8 sm:w-10 h-[1.5px] bg-[#FF0055]" />
                </div>

                {/* Main Heading: Meet Our Team Members */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white font-heading whitespace-nowrap drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                  Meet Our <span className="text-[#FF0055]">Team Members</span>
                </h2>

                {/* Tagline */}
                <p className="text-[11px] sm:text-[12.5px] text-gray-300/85 font-normal mt-0.5 max-w-md mx-auto">
                  Passionate people building solutions for a better tomorrow.
                </p>
              </div>

              {/* RIGHT: Close X Button */}
              <div className="flex-1 flex items-center justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close modal"
                  className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/[0.06] hover:bg-[#FF0055] border border-white/15 hover:border-[#FF0055] text-white/80 hover:text-white transition-all duration-300 shadow-md active:scale-90 cursor-pointer"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>
            </div>

            {/* ============================================================ */}
            {/* MIDDLE: CARDS ROW WITH LEFT & RIGHT ARROWS                   */}
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
                      className="group relative w-[275px] sm:w-[290px] min-w-[275px] sm:min-w-[290px] h-[415px] sm:h-[435px] rounded-[24px] sm:rounded-[28px] transition-all duration-300 flex flex-col justify-between overflow-hidden snap-center shrink-0 cursor-pointer select-none bg-gradient-to-b from-[#180512]/60 via-[#0B0208]/85 to-[#040106]/95 shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(255,0,85,0.25)]"
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
                      {/* 1. TOP & MIDDLE: SUBTLE LOGO + PERSON PORTRAIT       */}
                      {/* ==================================================== */}
                      <div className="relative w-full flex-1 min-h-[220px] sm:min-h-[240px] flex items-end justify-center overflow-hidden">
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

                        {/* Foreground Cutout Character (extends down behind the glass card) */}
                        <div className="relative z-10 w-full h-[250px] sm:h-[275px] flex items-end justify-center pointer-events-none select-none pb-1">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            quality={95}
                            priority={idx < 4}
                            className="object-contain object-bottom group-hover:scale-104 transition-transform duration-500 ease-out"
                            sizes="300px"
                          />
                        </div>
                      </div>

                      {/* ==================================================== */}
                      {/* 2. PURE TRANSLUCENT FROSTED GLASS CONTENT CARD       */}
                      {/* ==================================================== */}
                      <div
                        className="relative z-20 -mt-11 p-3.5 sm:p-4 pt-3.5 rounded-t-[22px] rounded-b-[22px] sm:rounded-b-[26px] backdrop-blur-2xl border-t border-t-white/35 border-x border-white/15 border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.35),inset_0_1px_1px_0_rgba(255,255,255,0.2)] shrink-0 transition-all duration-300"
                        style={{
                          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(18, 5, 20, 0.28) 100%)',
                        }}
                      >
                        {/* Specular light highlight on curved top edge */}
                        <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none rounded-t-[22px]" />

                        {/* Member Name */}
                        <h4 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight font-heading leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {member.name}
                        </h4>

                        {/* Role in Signature Pink */}
                        <p className="text-[10px] sm:text-[10.5px] font-bold text-[#FF0055] uppercase tracking-wider mt-0.5 font-heading line-clamp-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                          {member.role}
                        </p>

                        {/* Pink Accent Underline (matching design mockup) */}
                        <div className="w-7 h-[1.5px] bg-[#FF0055] rounded-full my-1.5 shadow-[0_0_8px_rgba(255,0,85,0.6)]" />

                        {/* Bio / Description - 2 lines clean, NO ellipsis (...) */}
                        <p className="text-[11px] sm:text-[11.5px] leading-[1.4] text-gray-200 font-sans">
                          {member.bio}
                        </p>

                        {/* Action Buttons Row (Department tag removed) */}
                        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/15">
                          {/* Social Icons */}
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
            {/* BOTTOM CENTER DOTS INDICATOR                                 */}
            {/* ============================================================ */}
            <div className="relative z-20 w-full pb-3 sm:pb-4 flex items-center justify-center gap-2 shrink-0">
              {TEAM_MEMBERS.map((member) => (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setActiveCardId(member.id)}
                  aria-label={`Select ${member.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    member.id === activeCardId
                      ? "w-6 bg-gradient-to-r from-[#FF0055] to-[#ff2b70] shadow-[0_0_10px_rgba(255,0,85,0.7)]"
                      : "w-1.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
