import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface ShowcaseData {
  subtitle: string;
  pills: string[];
  screens: {
    name: string;
    desc: string;
  }[];
}

interface ProjectShowcaseProps {
  projectTitle: string;
  projectImage: string;
  showcase: ShowcaseData;
}

export default function ProjectShowcase({
  projectTitle,
  projectImage,
  showcase,
}: ProjectShowcaseProps) {
  return (
    <section className="relative z-20 bg-[#04060E] text-white py-16 sm:py-24 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Eyebrow & Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#FF0055]" />
            <span className="text-xs sm:text-[13px] font-bold text-[#FF0055] tracking-widest uppercase font-heading">
              DESIGN & EXPERIENCE SHOWCASE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white">
            Design & Experience <span className="text-[#FF0055]">Showcase</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-2 font-sans">
            {showcase.subtitle}
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
          {showcase.pills.map((pill, pIdx) => (
            <span
              key={pIdx}
              className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white/90 text-xs sm:text-sm font-semibold hover:border-[#FF0055] hover:text-white transition-colors flex items-center gap-2"
            >
              <Check className="w-3.5 h-3.5 text-[#FF0055]" />
              <span>{pill}</span>
            </span>
          ))}
        </div>

        {/* Main Visual Laptop Display Banner */}
        <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] mb-10">
          <Image
            src={projectImage}
            alt={`${projectTitle} Full Showcase`}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* 5 Screen Previews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {showcase.screens.map((screen, scIdx) => (
            <div
              key={scIdx}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-pink-500/50 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/40 mb-3 border border-white/5">
                <Image
                  src={projectImage}
                  alt={screen.name}
                  fill
                  className="object-cover object-center scale-105"
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white mb-0.5">
                  {screen.name}
                </h4>
                <p className="text-[12px] text-white/50 font-sans">
                  {screen.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

