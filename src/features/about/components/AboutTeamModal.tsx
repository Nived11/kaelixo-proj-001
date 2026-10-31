"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Mail, ArrowLeft } from "lucide-react";
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
    bio: "Builds lightning-fast applications and robust scalable backend APIs.",
    linkedin: "https://linkedin.com",
    email: "rahul@kaelixo.com",
  },
  {
    id: "5",
    name: "Anjali Nair",
    role: "GROWTH & DIGITAL STRATEGIST",
    department: "STRATEGY",
    image: "/images/about/team/growth-clean.png",
    bio: "Drives customer acquisition funnels and digital brand growth strategies.",
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalOpen;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = useCallback(() => {
    if (isControlled && onClose) {
      onClose();
    } else {
      setInternalOpen(false);
      if (typeof window !== "undefined" && window.location.hash === "#team-modal") {
        window.history.pushState(null, "", window.location.pathname + "#team");
      }
    }
  }, [isControlled, onClose]);

  // Listen for open-team-modal event and sync with URL hash #team-modal
  useEffect(() => {
    if (isControlled) return;

    const handleCustomOpen = () => {
      setInternalOpen(true);
      if (typeof window !== "undefined" && window.location.hash !== "#team-modal") {
        window.history.pushState(null, "", window.location.pathname + "#team-modal");
      }
    };

    const checkHash = () => {
      if (typeof window !== "undefined") {
        if (window.location.hash === "#team-modal") {
          setInternalOpen(true);
        } else {
          setInternalOpen(false);
        }
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    window.addEventListener("open-team-modal", handleCustomOpen);

    return () => {
      window.removeEventListener("hashchange", checkHash);
      window.removeEventListener("open-team-modal", handleCustomOpen);
    };
  }, [isControlled]);

  // Keyboard navigation & ESC to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handleScrollLeft();
      } else if (e.key === "ArrowRight") {
        handleScrollRight();
      }
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

  // Smooth horizontal scroll
  useEffect(() => {
    if (!isOpen) return;
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
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 0) {
        targetScroll = container.scrollLeft;
        return;
      }

      e.preventDefault();
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      const maxScroll = container.scrollWidth - container.clientWidth;

      targetScroll = Math.max(0, Math.min(maxScroll, targetScroll + delta * 1.15));

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
  }, [isOpen]);

  // Lock scrolling
  useEffect(() => {
    if (!isOpen) return;

    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();

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
          {/* Black Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
          />

          {/* Full Screen Modal View */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[64px] sm:top-[68px] lg:top-[72px] inset-x-0 bottom-0 z-40 w-full h-[calc(100vh-64px)] sm:h-[calc(100vh-68px)] lg:h-[calc(100vh-72px)] flex flex-col justify-between overflow-hidden bg-[#020104] isolate"
            style={{ overflow: "hidden" }}
          >
            {/* Background Graphic */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <Image
                src="/images/about/team/aboutteambg.png"
                alt="About Team Background Glow"
                fill
                priority
                className="object-cover object-center opacity-25"
              />
            </div>

            {/* TOP HEADER: Back Button, Eyebrow, Title & Tagline matching other pages */}
            <div className="relative z-30 w-full pt-2 sm:pt-3 pb-1 px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center sm:justify-between shrink-0 gap-2 sm:gap-0">
              {/* LEFT: Back Button */}
              <div className="w-full sm:w-auto sm:flex-1 flex items-center justify-start">
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

              {/* CENTER: Eyebrow, Headline & Tagline matching site typography */}
              <div className="w-full sm:w-auto sm:flex-initial text-center px-2">
                {/* Eyebrow */}
                <div className="inline-flex items-center justify-center gap-3 mb-2 sm:mb-2.5">
                  <span className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-bold text-[#FF0055] tracking-[0.2em] uppercase">
                    OUR TEAM
                  </span>
                  <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
                </div>

                {/* Main Heading */}
                <h2 className="text-[26px] sm:text-[28px] md:text-[34px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-extrabold tracking-tight text-white font-heading leading-[1.15] drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
                  Meet Our <span className="text-[#FF0055]">Team Members</span>
                </h2>

                {/* Tagline */}
                <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-gray-300 font-sans font-normal mt-1 sm:mt-1.5 max-w-lg mx-auto leading-relaxed">
                  Passionate people building solutions for a better tomorrow.
                </p>
              </div>

              {/* RIGHT: Close X Button */}
              <div className="flex-1 hidden sm:flex items-center justify-end">
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

            {/* MIDDLE: CARDS ROW WITH LEFT & RIGHT ARROWS */}
            <div className="relative z-10 w-full flex-1 flex items-center overflow-hidden my-auto py-1">
              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={handleScrollLeft}
                aria-label="Previous team members"
                className="group absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/75 hover:bg-[#FF0055] border border-white/20 hover:border-[#FF0055] text-white shadow-[0_8px_30px_rgba(0,0,0,0.85)] hover:shadow-[0_0_24px_rgba(255,0,85,0.6)] backdrop-blur-md transition-all duration-300 active:scale-90 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={handleScrollRight}
                aria-label="Next team members"
                className="group absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/75 hover:bg-[#FF0055] border border-white/20 hover:border-[#FF0055] text-white shadow-[0_8px_30px_rgba(0,0,0,0.85)] hover:shadow-[0_0_24px_rgba(255,0,85,0.6)] backdrop-blur-md transition-all duration-300 active:scale-90 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              {/* Horizontal Cards Scroller */}
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
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      className="group relative w-[310px] sm:w-[335px] md:w-[350px] lg:w-[360px] min-w-[310px] sm:min-w-[335px] md:min-w-[350px] lg:min-w-[360px] h-[455px] sm:h-[480px] md:h-[495px] rounded-[24px] sm:rounded-[28px] transition-all duration-300 flex flex-col justify-between overflow-hidden snap-center shrink-0 cursor-pointer select-none bg-gradient-to-b from-[#180512]/60 via-[#0B0208]/85 to-[#040106]/95 shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(255,0,85,0.25)]"
                    >
                      {/* Border */}
                      <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-white/10 pointer-events-none z-30" />

                      {/* Rotating Border */}
                      <div
                        className="absolute inset-0 rounded-[24px] sm:rounded-[28px] overflow-hidden pointer-events-none z-30"
                        style={{
                          padding: "1.2px",
                          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      >
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] aspect-square animate-[spin_5.5s_linear_infinite] transition-opacity duration-300 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_19%,#FF0055_22%,#ff4081_25%,#FF0055_28%,transparent_31%,transparent_69%,#FF0055_72%,#ff4081_75%,#FF0055_78%,transparent_81%,transparent_100%)] opacity-60 group-hover:opacity-85"
                        />
                      </div>

                      {/* Cutout Portrait */}
                      <div className="relative w-full flex-1 min-h-[235px] sm:min-h-[260px] md:min-h-[275px] flex items-end justify-center overflow-hidden">
                        <div className="absolute top-[12%] sm:top-[14%] left-1/2 -translate-x-1/2 w-[74%] sm:w-[78%] aspect-square pointer-events-none select-none z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                          <Image
                            src="/images/brand/kaelixo-logo.png"
                            alt="Kaelixo Brand Emblem"
                            fill
                            priority={idx < 4}
                            className="object-contain drop-shadow-[0_0_25px_rgba(255,0,85,0.25)]"
                          />
                        </div>

                        <div className="relative z-10 w-full h-[270px] sm:h-[305px] md:h-[320px] flex items-end justify-center pointer-events-none select-none pb-1">
                          <div className={`relative w-full h-full flex items-end justify-center ${member.id === "1" ? "scale-[0.91] origin-bottom" : ""}`}>
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

                      {/* Content Card: Exact original text sizes, uniform height across all cards */}
                      <div
                        className="relative z-20 -mt-12 h-[215px] sm:h-[225px] p-4 sm:p-4.5 pt-3.5 rounded-t-[22px] rounded-b-[22px] sm:rounded-b-[26px] backdrop-blur-2xl border-t border-t-white/35 border-x border-white/15 border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.35),inset_0_1px_1px_0_rgba(255,255,255,0.2)] shrink-0 transition-all duration-300 flex flex-col justify-between"
                        style={{
                          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(18, 5, 20, 0.28) 100%)",
                        }}
                      >
                        <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none rounded-t-[22px]" />

                        <div>
                          {/* Member Name: Original text size */}
                          <h4 className="text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold text-white tracking-tight font-heading leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {member.name}
                          </h4>

                          {/* Role: Original text size */}
                          <p className="text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] font-bold text-[#FF0055] uppercase tracking-wide mt-1 font-heading line-clamp-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                            {member.role}
                          </p>

                          {/* Pink Accent Underline */}
                          <div className="w-7 h-[1.5px] bg-[#FF0055] rounded-full my-2 shadow-[0_0_8px_rgba(255,0,85,0.6)]" />

                          {/* Bio: Original text size, uniform 2 lines */}
                          <p className="text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.45] text-gray-200 font-sans line-clamp-2 min-h-[42px] sm:min-h-[46px]">
                            {member.bio}
                          </p>
                        </div>

                        {/* Social Icons Row */}
                        <div className="flex items-center gap-2.5 mt-auto pt-2.5 border-t border-white/10">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn Profile`}
                            className="group/icon w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.08] hover:bg-[#FF0055] border border-white/15 hover:border-[#FF0055] text-white/80 hover:text-white shadow-sm hover:shadow-[0_0_15px_rgba(255,0,85,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaLinkedinIn className="w-3.5 h-3.5 transition-transform duration-300 group-hover/icon:scale-110" />
                          </a>

                          <a
                            href={`mailto:${member.email}`}
                            aria-label={`Email ${member.name}`}
                            className="group/icon w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.08] hover:bg-[#FF0055] border border-white/15 hover:border-[#FF0055] text-white/80 hover:text-white shadow-sm hover:shadow-[0_0_15px_rgba(255,0,85,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail className="w-3.5 h-3.5 transition-transform duration-300 group-hover/icon:scale-110" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
