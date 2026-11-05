import React from "react";
import { ProjectItem } from "@/features/portfolio/data/portfolioProjects";

export function renderClientBrandLogo(
  project: ProjectItem,
  clientLogoText: string,
  clientLogoTagline: string
) {
  const pid = project.id.toLowerCase();
  const cat = project.category.toLowerCase();

  // Travel Hope or Travel projects: Sun + Coconut Palms SVG
  if (pid.includes("travel-hope") || (cat.includes("travel") && !pid.includes("finexx"))) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center mb-1 text-amber-400">
          <svg viewBox="0 0 32 30" className="w-7 h-7">
            <circle cx="10" cy="11" r="5.5" fill="#F59E0B" />
            <path d="M 18,25 Q 18,13 26,8 Q 24,14 24,18 Z" fill="#10B981" />
            <path d="M 18,25 Q 16,11 21,6 Q 20,13 18,17 Z" fill="#06B6D4" />
            <path d="M 18,25 Q 19,16 18,12" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span className="font-serif italic font-bold text-sm sm:text-[15px] text-white tracking-tight leading-none block">
          {clientLogoText}
        </span>
        <span className="text-[7.5px] sm:text-[8px] text-white/50 tracking-[0.22em] uppercase font-sans font-semibold mt-1 block">
          {clientLogoTagline}
        </span>
      </div>
    );
  }

  // Safari Furniture: Modern luxury crimson/gold furniture icon + text
  if (pid.includes("safari-furniture")) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-[#FF0055] to-[#80002A] border border-[#FF3377]/40 flex items-center justify-center text-white text-[11px] font-black shadow-xs">
            S
          </div>
          <span className="font-heading font-black text-xs sm:text-[13px] text-white uppercase tracking-wider leading-none">
            SAFARI FURNITURE
          </span>
        </div>
        <span className="text-[7px] sm:text-[7.5px] text-white/50 tracking-[0.2em] uppercase font-sans font-semibold block">
          HOME & OFFICE EXCELLENCE
        </span>
      </div>
    );
  }

  // Safari Mall: Hypermarket shopping arch emblem
  if (pid.includes("safari-mall")) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-amber-500 to-rose-600 border border-amber-400/40 flex items-center justify-center text-white text-[11px] font-black shadow-xs">
            S
          </div>
          <span className="font-heading font-black text-xs sm:text-[13px] text-white uppercase tracking-wider leading-none">
            SAFARI MALL
          </span>
        </div>
        <span className="text-[7px] sm:text-[7.5px] text-white/50 tracking-[0.2em] uppercase font-sans font-semibold block">
          HYPERMARKET & MALL
        </span>
      </div>
    );
  }

  // Hair O Craft: Clinic medical rose/cyan silhouette
  if (pid.includes("hair-o-craft") || pid.includes("hairocraft")) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-500 to-[#FF0055] flex items-center justify-center text-white text-[10px] font-bold shadow-xs">
            H
          </div>
          <span className="font-heading font-black text-xs sm:text-[13px] text-white uppercase tracking-wider leading-none">
            HAIR O CRAFT
          </span>
        </div>
        <span className="text-[7px] sm:text-[7.5px] text-white/50 tracking-[0.2em] uppercase font-sans font-semibold block">
          HAIR & SKIN CLINIC
        </span>
      </div>
    );
  }

  // Asian Avenue: Asian market geometric pagoda
  if (pid.includes("asian-avenue")) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white text-[10px] font-black shadow-xs">
            A
          </div>
          <span className="font-heading font-black text-xs sm:text-[13px] text-white uppercase tracking-wider leading-none">
            ASIAN AVENUE
          </span>
        </div>
        <span className="text-[7px] sm:text-[7.5px] text-white/50 tracking-[0.2em] uppercase font-sans font-semibold block">
          SUPERMARKET & FOODS
        </span>
      </div>
    );
  }

  // Dats Interiors: Architecture / Interior geometric compass
  if (pid.includes("dats-interior") || pid.includes("datsinterior")) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-5 h-5 rounded bg-[#101426] border border-amber-500/50 flex items-center justify-center text-amber-400 text-[10px] font-bold shadow-xs">
            D
          </div>
          <span className="font-heading font-black text-xs sm:text-[13px] text-white uppercase tracking-wider leading-none">
            DATS INTERIORS
          </span>
        </div>
        <span className="text-[7px] sm:text-[7.5px] text-white/50 tracking-[0.2em] uppercase font-sans font-semibold block">
          LUXURY ARCHITECTURE
        </span>
      </div>
    );
  }

  // Neurobase Ayurveda: Lotus & medical cross
  if (pid.includes("neurobase")) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center text-white text-[10px] font-black shadow-xs">
            N
          </div>
          <span className="font-heading font-black text-xs sm:text-[13px] text-white uppercase tracking-wider leading-none">
            NEUROBASE
          </span>
        </div>
        <span className="text-[7px] sm:text-[7.5px] text-white/50 tracking-[0.2em] uppercase font-sans font-semibold block">
          AYURVEDA SPECIALITY
        </span>
      </div>
    );
  }

  // Finexx Travels: Elite wings / VIP chauffeur
  if (pid.includes("finexx")) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-[#FF0055] to-purple-800 flex items-center justify-center text-white text-[10px] font-black shadow-xs">
            F
          </div>
          <span className="font-heading font-black text-xs sm:text-[13px] text-white uppercase tracking-wider leading-none">
            FINEXX TRAVELS
          </span>
        </div>
        <span className="text-[7px] sm:text-[7.5px] text-white/50 tracking-[0.2em] uppercase font-sans font-semibold block">
          VIP TRAVEL & LOGISTICS
        </span>
      </div>
    );
  }

  // Default clean client monogram & typography
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex items-center gap-1.5 mb-1">
        <div className="w-5 h-5 rounded bg-gradient-to-br from-[#FF0055] to-[#80002A] flex items-center justify-center text-white text-[10px] font-black shadow-xs">
          {clientLogoText.charAt(0)}
        </div>
        <span className="font-heading font-black text-xs sm:text-[13px] text-white uppercase tracking-wider leading-none">
          {clientLogoText}
        </span>
      </div>
      <span className="text-[7px] sm:text-[7.5px] text-white/50 tracking-[0.2em] uppercase font-sans font-semibold block">
        {clientLogoTagline}
      </span>
    </div>
  );
}

