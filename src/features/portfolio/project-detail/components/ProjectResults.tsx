import React from "react";
import { TrendingUp } from "lucide-react";

interface StatItem {
  stat: string;
  label: string;
  desc: string;
}

interface ResultsData {
  headline: {
    prefix: string;
    highlight: string;
  };
  subtitle: string;
  stats: StatItem[];
  footerTagline?: string;
}

interface ProjectResultsProps {
  projectTitle: string;
  results: ResultsData;
}

export default function ProjectResults({
  projectTitle,
  results,
}: ProjectResultsProps) {
  return (
    <section className="relative z-20 bg-[#03040B] text-white py-20 sm:py-28 overflow-hidden border-t border-white/5">
      {/* Glowing Trajectory Arc with Ambient Light */}
      <div className="absolute top-0 right-0 w-[600px] h-[300px] bg-[#FF0055]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Eyebrow & Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#FF0055]" />
            <span className="text-xs sm:text-[13px] font-bold text-[#FF0055] tracking-widest uppercase font-heading">
              RESULTS & BUSINESS IMPACT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
            {results.headline.prefix} <br />
            <span className="bg-gradient-to-r from-[#FF0055] via-pink-400 to-[#FF3377] bg-clip-text text-transparent">
              {results.headline.highlight}
            </span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-3 font-sans">
            {results.subtitle}
          </p>
        </div>

        {/* 4 Glowing Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {results.stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-[26px] bg-[#0A0D1E]/80 backdrop-blur-md border border-[#FF0055]/25 shadow-[0_10px_35px_rgba(255,0,85,0.08)] hover:border-[#FF0055] hover:shadow-[0_15px_45px_rgba(255,0,85,0.18)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#FF0055]/15 border border-[#FF0055]/30 flex items-center justify-center text-[#FF0055]">
                    <TrendingUp className="w-4.5 h-4.5" />
                  </div>
                </div>
                <span className="text-4xl sm:text-5xl font-black font-heading text-white block mb-2 tracking-tight">
                  {item.stat}
                </span>
                <h4 className="font-heading font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                  {item.label}
                </h4>
                <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Client Tagline Accent Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-heading font-bold text-white/50 tracking-widest uppercase">
          <div>
            <span className="text-[#FF0055] mr-2">—</span>
            <span>{projectTitle.toUpperCase()}</span>
          </div>
          <div>{results.footerTagline || "PEOPLE | POSSIBILITIES"}</div>
        </div>
      </div>
    </section>
  );
}

