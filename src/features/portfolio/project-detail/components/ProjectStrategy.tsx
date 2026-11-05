import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Monitor,
  Layers,
  MessageSquare,
  Users,
  BarChart3,
  Megaphone,
} from "lucide-react";
import { FaChessKnight } from "react-icons/fa6";
import { renderIcon } from "./renderIcon";

interface StrategyData {
  challengePoints: string[];
  strategyPoints: string[];
  solutionPoints: string[];
  processSteps: {
    label: string;
    icon: string;
  }[];
}

interface ProjectStrategyProps {
  projectTitle: string;
  strategy: StrategyData;
}

function renderProcessIcon(iconName: string) {
  const iconProps = { className: "w-5 h-5 sm:w-6 sm:h-6", strokeWidth: 1.8 };
  switch (iconName) {
    case "Laptop":
    case "Monitor":
      return <Monitor {...iconProps} />;
    case "Layers":
      return <Layers {...iconProps} />;
    case "MessageSquare":
    case "MessageCircle":
      return <MessageSquare {...iconProps} />;
    case "Users":
      return <Users {...iconProps} />;
    case "BarChart3":
    case "BarChart2":
      return <BarChart3 {...iconProps} />;
    case "Megaphone":
      return <Megaphone {...iconProps} />;
    default:
      return renderIcon(iconName, "w-5 h-5 sm:w-6 sm:h-6");
  }
}

export default function ProjectStrategy({
  projectTitle,
  strategy,
}: ProjectStrategyProps) {
  return (
    <section className="relative z-20 bg-[#060713] text-white py-16 sm:py-24 border-t border-b border-white/5 overflow-hidden">
      {/* Keyframe Animations for Dual-Beam on Cards & Single-Beam on Icons */}
      <style>{`
        @keyframes dualBeamSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes singleBeamSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-dual-beam {
          animation: dualBeamSpin 7s linear infinite;
        }
        .animate-single-beam {
          animation: singleBeamSpin 5s linear infinite;
        }
      `}</style>

      {/* Background with curve-line-2.png on Top-Left and Bottom-Right (Opposite Direction) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Ambient Corner Glows */}
        <div className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-[#FF0055]/12 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[550px] h-[550px] bg-[#FF0055]/12 blur-[150px] rounded-full pointer-events-none" />

        {/* Top-Left: curve-line-2.png */}
        <div className="absolute -top-10 -left-10 w-[500px] sm:w-[650px] aspect-[728/780] pointer-events-none select-none opacity-85">
          <Image
            src="/images/portfolio/curve-line-2.png"
            alt="Top Left Curve Lines"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Bottom-Right: curve-line-2.png (Rotated 180 degrees in opposite direction) */}
        <div className="absolute -bottom-14 -right-14 w-[500px] sm:w-[650px] aspect-[728/780] pointer-events-none select-none opacity-85 rotate-180">
          <Image
            src="/images/portfolio/curve-line-2.png"
            alt="Bottom Right Curve Lines"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Eyebrow & Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-[2px] bg-[#FF0055]" />
            <span className="text-[11px] sm:text-[12px] font-bold text-slate-400 tracking-[0.2em] uppercase font-mono">
              OUR STRATEGY / SOLUTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black font-heading tracking-tight text-white leading-[1.12]">
            A Smarter Path from <br />
            <span className="text-[#FF0055]">Challenge</span>{" "}
            <span className="text-white">to</span>{" "}
            <span className="text-[#FF0055]">Solution</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-sans">
            Kaelixo combined UX, structure, CRM thinking, SEO and digital marketing support to transform {projectTitle} into a more effective travel platform.
          </p>
        </div>

        {/* 3 Step Cards Layout (All 3 Cards have the Same Dual-Beam Moving Border Animation) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative mb-16 sm:mb-20">
          {/* Card 1: Challenge */}
          <div className="relative">
            <div className="relative rounded-[26px] p-[1.5px] overflow-hidden group shadow-[0_10px_35px_-5px_rgba(255,0,85,0.22)] h-full">
              {/* Neutral Base Border */}
              <div className="absolute inset-0 rounded-[26px] border border-white/10 pointer-events-none z-10" />

              {/* Animated Rotating Dual Border Beams (2 opposite lines moving continuously) */}
              <div className="absolute inset-[-140%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_5deg,#FF0055_25deg,transparent_45deg,transparent_180deg,transparent_185deg,#FF0055_205deg,transparent_225deg,transparent_360deg)] animate-dual-beam pointer-events-none z-0" />

              {/* Inner Card (Clean Dark Obsidian) */}
              <div className="relative rounded-[24.5px] bg-[#090C18] p-7 sm:p-8 xl:p-9 h-full flex flex-col justify-between z-20">
                <div>
                  {/* Badge & Title */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-12 h-12 rounded-full border-2 border-[#FF0055] bg-[#140819] shadow-[0_0_20px_rgba(255,0,85,0.5)] flex items-center justify-center text-[#FF0055] font-black text-2xl shrink-0">
                      !
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-xl sm:text-[22px] text-white">
                        Challenge
                      </h3>
                      <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-400 tracking-[0.14em] uppercase font-mono">
                        UNDERSTANDING THE PROBLEM
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points with 16px text */}
                  <ul className="space-y-3.5 sm:space-y-4">
                    {strategy.challengePoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#FF0055] mt-2 shrink-0 shadow-[0_0_8px_#FF0055]" />
                        <span className="text-[16px] leading-[1.6] text-white/90 font-sans">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Pink Arrow to Strategy (Desktop - Outside of overflow-hidden card) */}
            <div className="hidden lg:flex absolute -right-[27px] top-1/2 -translate-y-1/2 z-30 text-[#FF0055] drop-shadow-[0_0_10px_#FF0055]">
              <ArrowRight className="w-6 h-6 text-[#FF0055]" strokeWidth={2.5} />
            </div>
          </div>

          {/* Card 2: Strategy */}
          <div className="relative">
            <div className="relative rounded-[26px] p-[1.5px] overflow-hidden group shadow-[0_10px_35px_-5px_rgba(255,0,85,0.22)] h-full">
              {/* Neutral Base Border */}
              <div className="absolute inset-0 rounded-[26px] border border-white/10 pointer-events-none z-10" />

              {/* Animated Rotating Dual Border Beams (Same 2 opposite lines moving continuously) */}
              <div className="absolute inset-[-140%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_5deg,#FF0055_25deg,transparent_45deg,transparent_180deg,transparent_185deg,#FF0055_205deg,transparent_225deg,transparent_360deg)] animate-dual-beam pointer-events-none z-0" />

              {/* Inner Card (Clean Dark Obsidian) */}
              <div className="relative rounded-[24.5px] bg-[#090C18] p-7 sm:p-8 xl:p-9 h-full flex flex-col justify-between z-20">
                <div>
                  {/* Badge & Title */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-12 h-12 rounded-full border-2 border-[#FF0055] bg-[#140819] shadow-[0_0_20px_rgba(255,0,85,0.5)] flex items-center justify-center text-[#FF0055] shrink-0">
                      <FaChessKnight className="w-6 h-6 text-[#FF0055]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-xl sm:text-[22px] text-white">
                        Strategy
                      </h3>
                      <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-400 tracking-[0.14em] uppercase font-mono">
                        A CLEAR PLAN FOR PROGRESS
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points with 16px text */}
                  <ul className="space-y-3.5 sm:space-y-4">
                    {strategy.strategyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#FF0055] mt-2 shrink-0 shadow-[0_0_8px_#FF0055]" />
                        <span className="text-[16px] leading-[1.6] text-white/90 font-sans">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Pink Arrow to Solution (Desktop - Outside of overflow-hidden card) */}
            <div className="hidden lg:flex absolute -right-[27px] top-1/2 -translate-y-1/2 z-30 text-[#FF0055] drop-shadow-[0_0_10px_#FF0055]">
              <ArrowRight className="w-6 h-6 text-[#FF0055]" strokeWidth={2.5} />
            </div>
          </div>

          {/* Card 3: Solution */}
          <div className="relative">
            <div className="relative rounded-[26px] p-[1.5px] overflow-hidden group shadow-[0_10px_35px_-5px_rgba(255,0,85,0.22)] h-full">
              {/* Neutral Base Border */}
              <div className="absolute inset-0 rounded-[26px] border border-white/10 pointer-events-none z-10" />

              {/* Animated Rotating Dual Border Beams (Same 2 opposite lines moving continuously) */}
              <div className="absolute inset-[-140%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_5deg,#FF0055_25deg,transparent_45deg,transparent_180deg,transparent_185deg,#FF0055_205deg,transparent_225deg,transparent_360deg)] animate-dual-beam pointer-events-none z-0" />

              {/* Inner Card (Clean Dark Obsidian) */}
              <div className="relative rounded-[24.5px] bg-[#090C1A] p-7 sm:p-8 xl:p-9 h-full flex flex-col justify-between z-20">
                <div>
                  {/* Badge & Title */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-12 h-12 rounded-full border-2 border-[#FF0055] bg-[#140819] shadow-[0_0_20px_rgba(255,0,85,0.5)] flex items-center justify-center text-[#FF0055] shrink-0">
                      <Check className="w-6 h-6 text-[#FF0055]" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-xl sm:text-[22px] text-white">
                        Solution
                      </h3>
                      <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-400 tracking-[0.14em] uppercase font-mono">
                        REAL IMPACT, LASTING GROWTH
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points with 16px text */}
                  <ul className="space-y-3.5 sm:space-y-4">
                    {strategy.solutionPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#FF0055] mt-2 shrink-0 shadow-[0_0_8px_#FF0055]" />
                        <span className="text-[16px] leading-[1.6] text-white/90 font-sans">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Step Horizontal Process Stepper */}
        <div className="relative mt-16 sm:mt-24 overflow-x-auto pt-2 pb-6 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="min-w-[650px] lg:min-w-0 relative">
            {/* Connecting line that stays solid between all 6 nodes, and smoothly blends/fades out past the first & last nodes */}
            <div
              className="absolute top-[7.5px] left-[3.5%] right-[3.5%] h-[1px] pointer-events-none z-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, #FF0055 5.2%, #FF0055 94.8%, transparent 100%)",
                boxShadow: "0 0 6px rgba(255, 0, 85, 0.6)",
              }}
            />

            <div className="grid grid-cols-6 gap-3 sm:gap-4 lg:gap-6 relative z-10">
              {strategy.processSteps.map((step, sIdx) => (
                <div key={sIdx} className="flex flex-col items-center relative">
                  {/* Glowing Pink Node Dot on the line (Static, no hover scale or cutoff) */}
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF0055] shadow-[0_0_10px_#FF0055] ring-[2.5px] ring-[#060713] mb-5 sm:mb-6 z-10 shrink-0" />

                  {/* Circular Icon Container with Refined Animated Rotating Line */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[1.5px] overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    {/* Base circle border */}
                    <div className="absolute inset-0 rounded-full border border-white/15 pointer-events-none z-10" />

                    {/* Single Animated Rotating Border Line */}
                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_290deg,#FF0055_330deg,transparent_360deg)] animate-single-beam pointer-events-none z-0" />

                    {/* Inner circle button */}
                    <div className="relative w-full h-full rounded-full bg-[#0B0D1A] flex items-center justify-center text-white/90 group-hover:text-[#FF0055] transition-colors z-20">
                      {renderProcessIcon(step.icon)}
                    </div>
                  </div>

                  {/* Step Label */}
                  <span className="text-[12.5px] sm:text-[14px] font-bold text-white text-center leading-tight mt-3 font-heading max-w-[120px]">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
