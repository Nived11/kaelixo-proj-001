"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2025",
    title: "The Spark",
    desc: "A clear goal took shape: create modern, fast and dependable digital solutions, grounded in careful thinking.",
  },
  {
    year: "2026",
    title: "Going Live",
    desc: "Kaelixo opened its doors as a complete digital agency, ready to guide bold ideas from the first chat to visible growth.",
  },
  {
    year: "2026 and Beyond",
    title: "Aiming Higher",
    desc: "We’ll keep exploring new ideas, deepening partnerships and helping more businesses grow.",
  },
];

// Activation ranges: nodes strictly ONLY illuminate when the line reaches them
const MILESTONE_RANGES: [number, number][] = [
  [0.02, 0.14], // 2025: At top of track (activates as user enters)
  [0.48, 0.58], // 2026: At middle of track (~50%, activates only when line arrives)
  [0.90, 0.98], // 2026+: At bottom of track (~100%, activates only when line arrives)
];

interface TimelineNodeItemProps {
  item: TimelineItem;
  idx: number;
  progress: MotionValue<number>;
  nodeRef?: React.Ref<HTMLDivElement>;
}

function TimelineNodeItem({ item, idx, progress, nodeRef }: TimelineNodeItemProps) {
  const [rangeStart, rangeEnd] = MILESTONE_RANGES[idx] || [0, 1];
  const midRange = (rangeStart + rangeEnd) / 2;

  // Elastic pop on node circle when line arrives
  const nodeScale = useTransform(
    progress,
    [rangeStart, midRange, rangeEnd],
    [0.92, 1.15, 1.0]
  );

  // Halo and inner glow opacity
  const haloGlow = useTransform(progress, [rangeStart, rangeEnd], [0, 1]);

  // Year tag color transition (from dim white/35 to vivid Kaelixo neon pink)
  const yearColor = useTransform(
    progress,
    [rangeStart, rangeEnd],
    ["rgba(255, 255, 255, 0.35)", "rgba(255, 0, 85, 1)"]
  );

  // Title text color (from muted white/55 to crisp pure white)
  const titleColor = useTransform(
    progress,
    [rangeStart, rangeEnd],
    ["rgba(255, 255, 255, 0.55)", "rgba(255, 255, 255, 1)"]
  );

  // Description text color
  const descColor = useTransform(
    progress,
    [rangeStart, rangeEnd],
    ["rgba(255, 255, 255, 0.35)", "rgba(255, 255, 255, 0.82)"]
  );

  // Overall text opacity and horizontal slide-in
  const textOpacity = useTransform(progress, [rangeStart, rangeEnd], [0.38, 1]);
  const textX = useTransform(progress, [rangeStart, rangeEnd], [14, 0]);

  return (
    <div className="flex items-start gap-5 sm:gap-6 group relative">
      {/* ============================================================ */}
      {/* GLOWING CIRCULAR TIMELINE NODE                                */}
      {/* ============================================================ */}
      <motion.div
        ref={nodeRef}
        className="relative z-10 flex-shrink-0 mt-0.5"
        style={{ scale: nodeScale }}
      >
        {/* Outer Circle Container */}
        <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#07070d] border border-white/10 flex items-center justify-center relative overflow-visible transition-colors duration-300">
          {/* Active Blooming Halo Ring (illuminates strictly when line touches node) */}
          <motion.div
            className="absolute -inset-[1px] rounded-full bg-[#FF0055]/20 border border-[#FF0055] shadow-[0_0_22px_rgba(255,0,85,0.7)] pointer-events-none"
            style={{ opacity: haloGlow }}
          />

          {/* Inactive Center Dot (subtle unlit state before line arrives) */}
          <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full bg-white/10 flex items-center justify-center relative" />

          {/* Active Inner Center Dot (ignites vibrant neon pink when line arrives) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: haloGlow }}
          >
            <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] rounded-full bg-gradient-to-br from-[#FF0055] to-[#ff2b70] shadow-[0_0_10px_#FF0055] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.85)]" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* TEXT DETAILS (YEAR, TITLE, DESCRIPTION)                      */}
      {/* ============================================================ */}
      <motion.div
        className="flex-1 pt-0.5"
        style={{
          opacity: textOpacity,
          x: textX,
        }}
      >
        {/* Year Tag with Optical Neon Bloom */}
        <div className="relative inline-block mb-1">
          <motion.span
            className="text-[15px] sm:text-[16px] font-bold tracking-wider font-mono uppercase block"
            style={{ color: yearColor }}
          >
            {item.year}
          </motion.span>
          <motion.span
            className="text-[15px] sm:text-[16px] font-bold tracking-wider font-mono uppercase block absolute inset-0 text-[#FF0055] blur-[6px] pointer-events-none select-none"
            style={{ opacity: haloGlow }}
            aria-hidden="true"
          >
            {item.year}
          </motion.span>
        </div>

        {/* Milestone Title */}
        <motion.h3
          className="text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold tracking-tight font-heading group-hover:text-[#FF0055] transition-colors duration-200"
          style={{ color: titleColor }}
        >
          {item.title}
        </motion.h3>

        {/* Milestone Description */}
        <motion.p
          className="mt-1.5 text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-relaxed font-sans max-w-[460px]"
          style={{ color: descColor }}
        >
          {item.desc}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function AboutStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

  // Timeline tracking refs
  const timelineRef = useRef<HTMLDivElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const firstNodeRef = useRef<HTMLDivElement>(null);
  const lastNodeRef = useRef<HTMLDivElement>(null);

  // Scroll Progress linked to the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });

  // Butter-smooth spring progress for forward and reverse animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 22,
    mass: 0.2,
    restDelta: 0.001,
  });

  // Clamped progress values to prevent overshoot
  const lineScaleY = useTransform(smoothProgress, (v) => Math.max(0, Math.min(1, v)));

  // Dynamic measurement of line track between first and last node centers
  const [lineTrack, setLineTrack] = useState({ top: 20, height: 260 });

  const updateTrack = () => {
    if (firstNodeRef.current && lastNodeRef.current && listContainerRef.current) {
      const listRect = listContainerRef.current.getBoundingClientRect();
      const firstRect = firstNodeRef.current.getBoundingClientRect();
      const lastRect = lastNodeRef.current.getBoundingClientRect();

      const top = firstRect.top - listRect.top + firstRect.height / 2;
      const bottom = lastRect.top - listRect.top + lastRect.height / 2;
      const height = Math.max(bottom - top, 100);

      setLineTrack({ top, height });
    }
  };

  useEffect(() => {
    updateTrack();
    window.addEventListener("resize", updateTrack);
    const timer = setTimeout(updateTrack, 200);

    let ro: ResizeObserver | null = null;
    if (listContainerRef.current) {
      ro = new ResizeObserver(() => updateTrack());
      ro.observe(listContainerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateTrack);
      clearTimeout(timer);
      ro?.disconnect();
    };
  }, [isInView]);

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
      id="story"
      className="relative z-20 w-full bg-[#020205] py-20 sm:py-24 lg:py-28 overflow-hidden text-white"
    >
      {/* ============================================================ */}
      {/* BACKGROUND GRAPHIC (aboutourstorybg.png WITH REDUCED OPACITY) */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/images/about/aboutourstorybg.png"
          alt="Our Story Fluid Ribbon Background"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center opacity-40 sm:opacity-50"
        />

        {/* Top & Bottom Section Transition Fades */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#020205] to-transparent pointer-events-none z-[1]" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#020205] to-transparent pointer-events-none z-[1]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ============================================================ */}
          {/* LEFT COLUMN: HEADLINE & STORY TEXT                           */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow: OUR STORY + Pink Line */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[14px] sm:text-[14px] lg:text-[18px] xl:text-[18px] font-bold tracking-[0.2em] uppercase text-white/90">
                OUR STORY
              </span>
              <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-black text-white leading-[1.12] tracking-tight font-heading">
              One Idea, Now a <br />
              <span className="text-[#FF0055] drop-shadow-[0_0_28px_rgba(255,0,85,0.45)]">
                Full Digital Agency
              </span>
            </h2>

            {/* Subtext Paragraph */}
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-relaxed text-white/90 max-w-[540px]">
              We began by asking how to help businesses get online the right way. That question grew into a team, a process and a list of lasting partnerships across industries, all built on one habit: think first, then build.
            </p>

            {/* CTA Button: Our Journey */}
            <div className="mt-8 sm:mt-9 flex items-center gap-4">
              <button
                onClick={handleOpenConsultation}
                className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white font-medium text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] tracking-wide transition-all duration-300 active:scale-95 font-heading cursor-pointer"
              >
                <span>Our Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </button>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: SCROLL-DRIVEN VERTICAL TIMELINE                */}
          {/* ============================================================ */}
          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 25 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex flex-col justify-center max-w-[560px] lg:max-w-none mx-auto lg:ml-auto w-full"
          >
            {/* Timeline Header: The Road So Far */}
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.2em] text-[#FF0055] uppercase">
                The Road So Far
              </span>
              <span className="inline-block w-6 sm:w-8 h-[1.5px] bg-[#FF0055]/60 rounded-full" />
            </div>

            <div
              ref={listContainerRef}
              className="flex flex-col gap-9 sm:gap-10 relative"
            >
              {/* ============================================================ */}
              {/* SCROLL-DRIVEN LINE TRACK & TRAVELING GLOW BEAD               */}
              {/* ============================================================ */}
              <div
                className="absolute left-[17px] sm:left-[19px] w-[2px] pointer-events-none z-0"
                style={{
                  top: `${lineTrack.top}px`,
                  height: `${lineTrack.height}px`,
                }}
              >
                {/* Background Track Line (Inactive guide) */}
                <div className="w-full h-full bg-white/[0.08] rounded-full" />

                {/* Active Animated Progress Line (Travels downwards with scroll) */}
                <motion.div
                  className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-[#FF0055] via-[#ff2b70] to-[#FF0055] shadow-[0_0_14px_rgba(255,0,85,0.85)] origin-top"
                  style={{
                    height: "100%",
                    scaleY: lineScaleY,
                  }}
                />
              </div>

              {/* Timeline Items */}
              {timelineData.map((item, idx) => (
                <TimelineNodeItem
                  key={idx}
                  item={item}
                  idx={idx}
                  progress={smoothProgress}
                  nodeRef={
                    idx === 0
                      ? firstNodeRef
                      : idx === timelineData.length - 1
                      ? lastNodeRef
                      : undefined
                  }
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
