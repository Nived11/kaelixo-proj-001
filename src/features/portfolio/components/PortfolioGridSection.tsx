"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "../data/portfolioProjects";

export default function PortfolioGridSection() {
  const [showAll, setShowAll] = useState(false);

  // Initial view shows first 15 cards; clicking View More shows all 18 cards
  const visibleProjects = showAll ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.slice(0, 15);

  return (
    <section
      id="portfolio-grid"
      className="relative z-20 w-full bg-white pt-8 sm:pt-12 pb-16 sm:pb-24 text-[#07080c] border-t border-slate-100"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* ============================================================ */}
        {/* 3-COLUMN RESPONSIVE PROJECT GRID (3 cards per row on desktop)*/}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (idx % 3) * 0.06 }}
              >
                <Link
                  href={`/portfolio/${project.id}`}
                  className="group relative flex flex-col h-full rounded-[22px] bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-pink-200 transition-all duration-300 p-4 sm:p-5 cursor-pointer"
                >
                  {/* Image Container with Floating Overlap Badge (Half on Image, Half Below) */}
                  <div className="relative w-full">
                    <div className="relative aspect-[16/9.6] w-full overflow-hidden rounded-[16px] bg-[#f8fafc] border border-slate-100/90">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        priority={idx < 6}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center"
                      />

                      {/* Hover Glow Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Rounded Div Badge: Half on Image, Half Below, Glassmorphic + Soft Pink Border */}
                    <div className="absolute -bottom-3.5 left-1.5 sm:left-2 z-10">
                      <span className="inline-flex items-center px-3.5 py-1 sm:px-4 sm:py-1 rounded-full bg-white/85 backdrop-blur-md border border-[#FF0055]/35 text-[13px] sm:text-[14px] font-bold text-[#030C25] shadow-[0_2px_10px_rgba(255,0,85,0.08)] tracking-tight">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Action Button Row */}
                  <div className="pt-6 px-1 flex items-start justify-between gap-3">
                    <h3 className="font-heading text-[18px] sm:text-[20px] font-black text-[#030C25] group-hover:text-[#FF0055] transition-colors duration-200 leading-snug flex-1">
                      {project.title}
                    </h3>

                    {/* Pink Circle Button */}
                    <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#FF0055] flex items-center justify-center text-[#FF0055] group-hover:bg-[#FF0055] group-hover:text-white transition-all duration-300 shadow-[0_2px_10px_rgba(255,0,85,0.15)]">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.6]" />
                    </div>
                  </div>

                  {/* Full-Width Description Below - no cut off / ellipsis */}
                  <div className="px-1 pt-2 pb-1 flex-1">
                    <p className="font-sans text-gray-600 text-[15px] sm:text-[16px] font-medium leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ============================================================ */}
        {/* SIGNATURE GRADIENT VIEW MORE / SHOW LESS BUTTON              */}
        {/* ============================================================ */}
        {PORTFOLIO_PROJECTS.length > 15 && (
          <div className="mt-12 sm:mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 h-[48px] sm:h-[52px] rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white text-[14px] sm:text-[15px] font-semibold tracking-wide shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>{showAll ? "Show Less" : "View More"}</span>
              <ArrowDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : "group-hover:translate-y-0.5"
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
