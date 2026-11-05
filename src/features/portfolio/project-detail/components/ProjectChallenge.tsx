import React from "react";
import Image from "next/image";
import {
  BarChart3,
  Settings,
  Users,
  Monitor,
  Mail,
  Globe,
} from "lucide-react";
import { renderIcon } from "./renderIcon";

interface ChallengeData {
  subtitle: string;
  items: {
    title: string;
    desc: string;
    icon?: string;
  }[];
  floatingBadges: string[];
  summaryBanner: string;
}

interface ProjectChallengeProps {
  challenges: ChallengeData;
}

export default function ProjectChallenge({ challenges }: ProjectChallengeProps) {
  const challengeIcons: Record<string, React.ReactNode> = {
    "Limited Online Presence": <BarChart3 className="w-5 h-5 stroke-[2]" />,
    "Operational Inefficiencies": <Settings className="w-5 h-5 stroke-[2]" />,
    "Low Conversion": <Users className="w-5 h-5 stroke-[2]" />,
    "Lack of Scalable Platform": <Monitor className="w-5 h-5 stroke-[2]" />,
  };

  return (
    <section className="relative z-20 bg-[#f8faff] text-[#0A1024] py-16 sm:py-24 border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Eyebrow & Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2.5px] bg-[#FF0055]" />
            <span className="text-xs sm:text-[13px] font-bold text-slate-400 tracking-[0.2em] uppercase font-heading">
              THE CHALLENGE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#0A1024]">
            Challenges Before <span className="text-[#FF0055]">Kaelixo</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-[15px] max-w-2xl mt-2 font-sans leading-relaxed">
            {challenges.subtitle}
          </p>
        </div>

        {/* Main Grid: 4 Challenge Cards (Left) + Visual Graphic with Floating Badges (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (7 cols): 4 Cards + Bottom Banner */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* 4 Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {challenges.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-[22px] sm:rounded-[24px] bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-pink-200 transition-all flex items-start gap-4"
                >
                  {/* Pink circular badge icon */}
                  <div className="w-11 h-11 rounded-full bg-[#FEEBF2] flex items-center justify-center text-[#FF0055] shrink-0 mt-0.5 shadow-2xs">
                    {challengeIcons[item.title] ||
                      renderIcon(item.icon, "w-5 h-5 stroke-[2]")}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[15px] sm:text-base text-[#0A1024] mb-1.5 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-[13.5px] leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Accent Banner (Matches Reference Mockup) */}
            <div className="flex items-stretch gap-3.5 mt-6 sm:mt-8 pl-1">
              <div className="w-1 bg-[#FF0055] rounded-full shrink-0" />
              <p className="text-slate-600 font-sans text-xs sm:text-[13.5px] leading-relaxed max-w-xl py-0.5">
                {challenges.summaryBanner}
              </p>
            </div>
          </div>

          {/* Right Column (5 cols): Visual Graphic with pf-in-chal.png & Floating Pills (Equal height to left cards) */}
          <div className="lg:col-span-5 relative flex items-start justify-center pt-2 sm:pt-3 lg:pt-0">
            {/* Soft pink ambient background aura */}
            <div className="absolute -top-10 -right-10 w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full bg-gradient-to-br from-pink-100/70 via-pink-50/40 to-transparent blur-3xl pointer-events-none -z-0" />

            {/* Main Composition Wrapper */}
            <div className="relative w-full max-w-[460px] mx-auto">
              {/* Central Photo of Stressed Person working on Laptop (Height equal to left 4-cards grid) */}
              <div className="relative w-full h-[360px] sm:h-[385px] lg:h-[395px] xl:h-[405px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200/80 bg-white">
                <Image
                  src="/images/portfolio/pf-in-chal.png"
                  alt="Challenges faced before Kaelixo"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating Pill 1: Top Right - Multiple enquiries across channels */}
              <div className="absolute -top-4 right-3 sm:right-6 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-[14px] border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 hover:translate-y-[-2px] transition-transform duration-200">
                <div className="w-8 h-8 rounded-lg bg-[#FEEBF2] flex items-center justify-center text-[#FF0055] shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight block">
                    Multiple enquiries
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight block">
                    across channels
                  </span>
                </div>
              </div>

              {/* Floating Pill 2: Top Left - Outdated website design */}
              <div className="absolute top-8 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-[14px] border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 hover:translate-y-[-2px] transition-transform duration-200">
                <div className="w-8 h-8 rounded-lg bg-[#FEEBF2] flex items-center justify-center text-[#FF0055] shrink-0 shadow-2xs">
                  <Globe className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight block">
                    Outdated website
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight block">
                    design
                  </span>
                </div>
              </div>

              {/* Floating Pill 3: Bottom Left - Low conversion rate */}
              <div className="absolute bottom-10 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-[14px] border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 hover:translate-y-[-2px] transition-transform duration-200">
                <div className="w-8 h-8 rounded-lg bg-[#FEEBF2] flex items-center justify-center text-[#FF0055] shrink-0 shadow-2xs">
                  <Users className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight block">
                    Low conversion
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight block">
                    rate
                  </span>
                </div>
              </div>

              {/* Floating Pill 4: Middle/Bottom Right - Difficult content management (Moved up, no 3-dots) */}
              <div className="absolute bottom-14 -right-3 sm:-right-6 z-20 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-[14px] border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 hover:translate-y-[-2px] transition-transform duration-200">
                <div className="w-8 h-8 rounded-lg bg-[#FEEBF2] flex items-center justify-center text-[#FF0055] shrink-0 shadow-2xs">
                  <Settings className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight block">
                    Difficult content
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight block">
                    management
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
