"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";

export default function AboutWorkspace() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
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
      className="relative z-20 w-full bg-white py-20 sm:py-24 lg:py-28 overflow-hidden text-[#0A1024]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
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
            {/* Eyebrow: OUR WORKSPACE + Pink Accent Line */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[12px] sm:text-[14px] font-bold tracking-[0.22em] text-[#0A1024] uppercase font-heading">
                OUR WORKSPACE
              </span>
              <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[46px] xl:text-[54px] font-extrabold text-[#0A1024] leading-[1.12] tracking-tight font-heading">
              A Place Where <br />
              <span className="text-[#FF0055] drop-shadow-[0_2px_18px_rgba(255,0,85,0.25)]">
                Ideas Come to Life
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] lg:text-[16.5px] leading-relaxed text-slate-600 font-sans font-normal max-w-[500px]">
              We believe a great workspace brings out better ideas. Our space is
              designed to encourage creativity, collaboration and focus.
            </p>

            {/* CTA Button: Explore */}
            <div className="mt-7 sm:mt-8 flex items-center gap-4">
              <button
                onClick={handleOpenConsultation}
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-[#FF0055] text-[#FF0055] bg-transparent hover:bg-gradient-to-r hover:from-[#FF0055] hover:to-[#ff2b70] hover:text-white hover:border-transparent text-[14px] sm:text-[14.5px] font-semibold tracking-wide transition-all duration-300 font-heading cursor-pointer shadow-sm hover:shadow-[0_4px_18px_rgba(255,0,85,0.3)] active:scale-95"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: WORKSPACE VIDEO CARD + PHOTO PAIR              */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }
            }
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative w-full max-w-[650px] lg:max-w-none mx-auto"
          >
            {/* Ambient soft glow behind video cluster */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] bg-[#FF0055]/08 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4 relative z-10">
              {/* ============================================================ */}
              {/* 1. MAIN WORKSPACE VIDEO PLAYER CARD                          */}
              {/* ============================================================ */}
              <div
                className="sm:col-span-8 relative aspect-[16/11] sm:aspect-auto sm:h-full min-h-[300px] sm:min-h-[380px] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100 group cursor-pointer bg-slate-900"
                onClick={togglePlay}
              >
                {/* Real HTML5 Video element */}
                <video
                  ref={videoRef}
                  src="/videos/home/workspace.mp4"
                  playsInline
                  loop
                  muted
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    isPlaying ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
                  }`}
                />

                {/* Workspace Tour Cover Image (shown before playing) */}
                <Image
                  src="/images/about/workspace-tour.webp"
                  alt="Kaelixo Workspace Tour"
                  fill
                  priority
                  className={`object-cover object-center group-hover:scale-104 transition-all duration-700 ease-out ${
                    isPlaying ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />

                {/* Bottom Right Play / Pause Button */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20">
                  <div className="relative flex items-center justify-center">
                    {!isPlaying && (
                      <div className="absolute w-14 h-14 rounded-full bg-[#FF0055]/30 animate-ping pointer-events-none" />
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#FF0055] to-[#ff2b70] text-white flex items-center justify-center shadow-[0_0_24px_rgba(255,0,85,0.65)] hover:shadow-[0_0_32px_rgba(255,0,85,0.9)] hover:scale-108 active:scale-95 transition-all duration-300 border-2 border-white/40 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                      ) : (
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white translate-x-0.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* ============================================================ */}
              {/* 2. TWO STACKED SUPPORTING WORKSPACE PHOTOS                   */}
              {/* ============================================================ */}
              <div className="sm:col-span-4 flex flex-col gap-3.5 sm:gap-4">
                {/* Photo 1: Green Plant Creative Lounge */}
                <div className="relative aspect-square sm:aspect-auto sm:flex-1 rounded-[18px] sm:rounded-[22px] overflow-hidden border border-slate-100 shadow-[0_10px_28px_rgba(0,0,0,0.08)] bg-slate-100 group">
                  <Image
                    src="/images/about/workspace-lounge.webp"
                    alt="Kaelixo Plant Lounge Corner"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(min-width: 1024px) 20vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Photo 2: Executive Glass Meeting Suite */}
                <div className="relative aspect-square sm:aspect-auto sm:flex-1 rounded-[18px] sm:rounded-[22px] overflow-hidden border border-slate-100 shadow-[0_10px_28px_rgba(0,0,0,0.08)] bg-slate-100 group">
                  <Image
                    src="/images/about/workspace-meeting.webp"
                    alt="Kaelixo Glass Meeting Room"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(min-width: 1024px) 20vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
