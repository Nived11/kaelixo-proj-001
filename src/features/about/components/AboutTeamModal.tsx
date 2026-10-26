"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  skills: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Jineesh Sojan",
    role: "Director & Technology Lead",
    department: "Leadership",
    image: "/images/about/team/director.jpg",
    bio: "Sets the technology and product vision for Kaelixo, guiding projects from initial architecture to final measurable impact.",
    skills: ["Strategic Vision", "System Architecture", "Client Growth"],
  },
  {
    id: "2",
    name: "Sneha Pillai",
    role: "Lead UI/UX & Product Designer",
    department: "Design & UX",
    image: "/images/about/team/designer.jpg",
    bio: "Transforms complex ideas into intuitive, award-worthy digital experiences, design systems, and delightful micro-interactions.",
    skills: ["Design Systems", "Product Strategy", "Figma", "Micro-UX"],
  },
  {
    id: "3",
    name: "Aravind Menon",
    role: "Head of Technology & Cloud Architect",
    department: "Engineering",
    image: "/images/about/team/architect.jpg",
    bio: "Architects scalable, high-performance web applications and cloud infrastructure with relentless focus on speed and security.",
    skills: ["Cloud Architecture", "Next.js", "Scalability", "DevOps"],
  },
  {
    id: "4",
    name: "Rahul Varma",
    role: "Senior Full-Stack Engineer",
    department: "Development",
    image: "/images/about/team/developer.jpg",
    bio: "Bridges modern frontend aesthetics with resilient backend APIs, crafting lightning-fast, production-ready web platforms.",
    skills: ["TypeScript", "Full-Stack APIs", "Performance", "React"],
  },
  {
    id: "5",
    name: "Anjali Nair",
    role: "Growth & Digital Marketing Strategist",
    department: "Growth & Strategy",
    image: "/images/about/team/growth.jpg",
    bio: "Drives data-driven digital growth, customer acquisition funnels, and performance optimization for growing businesses.",
    skills: ["Performance Marketing", "SEO Strategy", "Analytics", "Brand Growth"],
  },
];

interface AboutTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutTeamModal({ isOpen, onClose }: AboutTeamModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = TEAM_MEMBERS.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
        {/* ============================================================ */}
        {/* 1. BLACK GLASS EFFECT BACKDROP                               */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
        />

        {/* Ambient magenta back glow */}
        <div className="absolute w-[500px] h-[500px] bg-[#FF0055]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

        {/* ============================================================ */}
        {/* 2. MODAL CONTAINER                                           */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl my-auto flex flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-[#08070D]/95 border border-white/12 shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_60px_rgba(255,0,85,0.15)] overflow-hidden text-white z-10 p-3.5 sm:p-5 lg:p-6"
        >
          {/* Subtle noise / gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-[#FF0055]/[0.03] pointer-events-none" />

          {/* ============================================================ */}
          {/* HEADER (Eyebrow, Title & Close Button)                       */}
          {/* ============================================================ */}
          <div className="relative z-10 flex items-start justify-between gap-4 mb-2">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-[#FF0055] animate-pulse" />
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#FF0055] uppercase font-heading">
                  THE MINDS BEHIND KAELIXO
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white font-heading">
                Meet the <span className="text-[#FF0055]">Dream Team</span>
              </h3>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              aria-label="Close team modal"
              className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/[0.06] hover:bg-[#FF0055] border border-white/15 hover:border-[#FF0055] text-white/80 hover:text-white transition-all duration-300 shadow-md active:scale-90 cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          {/* ============================================================ */}
          {/* HORIZONTAL CARDS SLIDER WITH CENTER CARD HIGHLIGHTED         */}
          {/* ============================================================ */}
          <div className="relative z-10 w-full py-1 flex items-center justify-center overflow-hidden">
            {/* Desktop & Tablet 3-Card Panoramic View */}
            <div className="w-full hidden md:flex items-center justify-center gap-3.5 lg:gap-5 min-h-[340px]">
              {(() => {
                const leftIdx = (activeIndex - 1 + total) % total;
                const centerIdx = activeIndex;
                const rightIdx = (activeIndex + 1) % total;

                const visibleCards = [
                  { member: TEAM_MEMBERS[leftIdx], idx: leftIdx, isCenter: false, isLeft: true },
                  { member: TEAM_MEMBERS[centerIdx], idx: centerIdx, isCenter: true, isLeft: false },
                  { member: TEAM_MEMBERS[rightIdx], idx: rightIdx, isCenter: false, isLeft: false },
                ];

                return visibleCards.map(({ member, idx, isCenter }) => {
                  return (
                    <motion.div
                      key={member.id}
                      layout
                      onClick={() => setActiveIndex(idx)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: isCenter ? 1 : 0.45,
                        scale: isCenter ? 1.02 : 0.92,
                        zIndex: isCenter ? 30 : 10,
                      }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative rounded-[18px] sm:rounded-[22px] overflow-hidden transition-all duration-500 cursor-pointer select-none ${
                        isCenter
                          ? "w-[320px] lg:w-[350px] bg-gradient-to-b from-[#13101E] to-[#0A0711] border-2 border-[#FF0055] shadow-[0_15px_45px_rgba(255,0,85,0.28),0_0_30px_rgba(255,0,85,0.18)]"
                          : "w-[230px] lg:w-[260px] bg-[#0E0C16]/80 border border-white/10 hover:opacity-75 hover:border-white/20 shadow-lg"
                      }`}
                    >
                      {/* Top Image Container */}
                      <div className="relative w-full aspect-[16/9.5] overflow-hidden bg-slate-900">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          priority={isCenter}
                          className={`object-cover object-center transition-transform duration-700 ease-out ${
                            isCenter ? "scale-100 group-hover:scale-105" : "scale-100 grayscale-[25%]"
                          }`}
                          sizes="(min-width: 1024px) 35vw, 60vw"
                        />

                        {/* Vignette Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0711] via-[#0A0711]/20 to-transparent" />

                        {/* Department Chip (Top Left) */}
                        <div className="absolute top-2.5 left-2.5 z-10 px-2.5 py-0.5 rounded-full backdrop-blur-md bg-black/70 border border-white/20 text-[10.5px] font-semibold text-white/90">
                          {member.department}
                        </div>

                        {/* Featured Star Badge for Center Card */}
                        {isCenter && (
                          <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#FF0055] to-[#ff2b70] text-white text-[10.5px] font-bold shadow-md">
                            <Sparkles className="w-3 h-3" />
                            <span>Core Team</span>
                          </div>
                        )}
                      </div>

                      {/* Bottom Info Card */}
                      <div className="p-3.5 sm:p-4 flex flex-col justify-between">
                        <div>
                          {/* Name */}
                          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight font-heading">
                            {member.name}
                          </h4>

                          {/* Role in Signature Pink */}
                          <p className="text-[12px] sm:text-[12.5px] font-semibold text-[#FF0055] mt-0.5 font-heading">
                            {member.role}
                          </p>

                          {/* Bio (Visible on center card) */}
                          {isCenter && (
                            <motion.p
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-[12px] sm:text-[12.5px] leading-relaxed text-white/75 mt-2 font-sans line-clamp-2"
                            >
                              {member.bio}
                            </motion.p>
                          )}
                        </div>

                        {/* Skills Tags */}
                        {isCenter && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-wrap gap-1.5 mt-2.5 pt-2 border-t border-white/10"
                          >
                            {member.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] text-white/80 border border-white/10"
                              >
                                {skill}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                });
              })()}
            </div>

            {/* Mobile View: Single Center Card with Swipe/Tap */}
            <div className="w-full flex md:hidden items-center justify-center">
              <motion.div
                key={TEAM_MEMBERS[activeIndex].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-[320px] rounded-[20px] overflow-hidden bg-gradient-to-b from-[#13101E] to-[#0A0711] border-2 border-[#FF0055] shadow-[0_15px_40px_rgba(255,0,85,0.25)]"
              >
                {/* Mobile Card Photo */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={TEAM_MEMBERS[activeIndex].image}
                    alt={TEAM_MEMBERS[activeIndex].name}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0711] via-[#0A0711]/25 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 z-10 px-2.5 py-0.5 rounded-full backdrop-blur-md bg-black/60 border border-white/20 text-[10.5px] font-semibold text-white/90">
                    {TEAM_MEMBERS[activeIndex].department}
                  </div>
                </div>

                {/* Mobile Info */}
                <div className="p-3.5 sm:p-4">
                  <h4 className="text-lg font-bold text-white tracking-tight font-heading">
                    {TEAM_MEMBERS[activeIndex].name}
                  </h4>
                  <p className="text-[12.5px] font-semibold text-[#FF0055] mt-0.5">
                    {TEAM_MEMBERS[activeIndex].role}
                  </p>
                  <p className="text-[12px] leading-relaxed text-white/75 mt-2 line-clamp-2">
                    {TEAM_MEMBERS[activeIndex].bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2 border-t border-white/10">
                    {TEAM_MEMBERS[activeIndex].skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] text-white/80 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* BOTTOM CONTROLS: LEFT & RIGHT ARROWS + DOT INDICATORS        */}
          {/* ============================================================ */}
          <div className="relative z-10 pt-3 sm:pt-4 mt-1 border-t border-white/10 flex items-center justify-between">
            {/* Left Counter */}
            <div className="text-[13px] font-mono text-white/60">
              <span className="text-[#FF0055] font-bold text-[15px]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              <span>{String(total).padStart(2, "0")}</span>
            </div>

            {/* Center Pagination Dots */}
            <div className="flex items-center gap-2">
              {TEAM_MEMBERS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Go to team member ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === activeIndex
                      ? "w-8 bg-gradient-to-r from-[#FF0055] to-[#ff2b70] shadow-[0_0_12px_rgba(255,0,85,0.7)]"
                      : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Bottom Arrow Buttons: Left & Right */}
            <div className="flex items-center gap-2.5">
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous team member"
                className="group w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/60 hover:bg-[#FF0055] border border-white/20 hover:border-[#FF0055] text-white transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,0,85,0.5)] active:scale-90 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next team member"
                className="group w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/60 hover:bg-[#FF0055] border border-white/20 hover:border-[#FF0055] text-white transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,0,85,0.5)] active:scale-90 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
