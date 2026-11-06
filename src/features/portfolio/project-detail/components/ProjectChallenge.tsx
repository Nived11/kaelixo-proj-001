"use client";

import React, { useState } from "react";
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

const badgeSlots = [
  {
    icon: Globe,
    position: "left-[var(--badge-edge)] [--badge-top:2.75rem] [--badge-edge:-0.75rem] sm:[--badge-edge:-2.25rem]",
    landing: "origin-bottom-left [--land-x:calc(-1cqw_-_var(--badge-edge))] [--land-y:6.25rem] [--land-tilt:-4deg]",
  },
  {
    icon: Mail,
    position: "right-[var(--badge-edge)] [--badge-top:-1.75rem] [--badge-edge:0rem] sm:[--badge-edge:-0.5rem]",
    landing: "origin-bottom-right [--land-x:calc(var(--badge-edge)_+_1cqw)] [--land-y:5.85rem] [--land-tilt:4deg]",
  },
  {
    icon: Users,
    position: "left-[var(--badge-edge)] [--badge-top:54cqh] [--badge-edge:-0.75rem] sm:[--badge-edge:-2rem]",
    landing: "origin-bottom-left [--land-x:calc(-2cqw_-_var(--badge-edge))] [--land-y:0.75rem] [--land-tilt:2deg]",
  },
  {
    icon: Settings,
    position: "right-[var(--badge-edge)] [--badge-top:43cqh] [--badge-edge:-0.75rem] sm:[--badge-edge:-2.25rem]",
    landing: "origin-bottom-right [--land-x:calc(var(--badge-edge)_+_2cqw)] [--land-y:1.1rem] [--land-tilt:-2deg]",
  },
];

export default function ProjectChallenge({ challenges }: ProjectChallengeProps) {
  const [droppedBadges, setDroppedBadges] = useState<number[]>([]);

  function dropBadge(index: number) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setDroppedBadges((current) => current.includes(index) ? current : [...current, index]);
  }

  function nudgeBadge(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const badge = event.currentTarget;
    const animations = badge.getAnimations();
    const drop = animations.find(
      (animation) => animation instanceof CSSAnimation && animation.animationName === "challenge-badge-drop",
    );
    const time = drop?.currentTime;
    if (typeof time !== "number" || time < 700 || time >= 4700) return;
    if (animations.some((animation) => animation.id === "challenge-badge-nudge")) return;

    const bounds = badge.getBoundingClientRect();
    const direction = Math.sign(event.movementX) || (event.clientX < bounds.left + bounds.width / 2 ? 1 : -1);
    badge.animate(
      [
        { translate: "0 0", rotate: "0deg" },
        { translate: `${direction * 22}px -9px`, rotate: `${direction * 8}deg`, offset: 0.35 },
        { translate: `${direction * 9}px 2px`, rotate: `${direction * 3}deg`, offset: 0.72 },
        { translate: "0 0", rotate: "0deg" },
      ],
      { id: "challenge-badge-nudge", duration: 460, easing: "ease-out" },
    );
  }

  const challengeIcons: Record<string, React.ReactNode> = {
    "Limited Online Presence": <BarChart3 className="w-5 h-5 stroke-[2]" />,
    "Operational Inefficiencies": <Settings className="w-5 h-5 stroke-[2]" />,
    "Low Conversion": <Users className="w-5 h-5 stroke-[2]" />,
    "Lack of Scalable Platform": <Monitor className="w-5 h-5 stroke-[2]" />,
  };

  return (
    <section className="relative z-20 bg-[#f8faff] text-[#0A1024] py-16 sm:py-24 border-t border-slate-200/60 overflow-hidden">
      <style>{`
        @keyframes challenge-badge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }
        @keyframes challenge-badge-drop {
          0% { transform: translateY(-4px); animation-timing-function: cubic-bezier(.55, .02, .85, .7); }
          13.207547%, 88.679245% {
            transform: translate(var(--land-x), calc(100cqh - var(--badge-top) - 100% - var(--land-y))) rotate(var(--land-tilt));
            animation-timing-function: ease-in-out;
          }
          100% { transform: translateY(0); }
        }
        .challenge-badge-dropped {
          animation: challenge-badge-drop 5.3s both;
        }
      `}</style>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Eyebrow & Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2.5px] bg-[#FF0055]" />
            <span className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-[750] tracking-[.2em] text-gray-700">
              THE CHALLENGE
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.16] tracking-[-1.3px] text-[#0A1024] mb-4">
            Challenges Before <span className="text-[#FF0055]">Kaelixo</span>
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] mb-8 max-w-[550px]">
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
                  className="p-5 sm:p-6 rounded-[22px] sm:rounded-[24px] bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-pink-200 transition-all"
                >
                  <div className="mb-3 flex items-center gap-4">
                    <div aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] text-white shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-2 ring-pink-100">
                      {challengeIcons[item.title] ||
                        renderIcon(item.icon, "w-5 h-5 stroke-[2]")}
                    </div>
                    <h4 className="text-[#020205] text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] font-bold leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Accent Banner (Matches Reference Mockup) */}
            <div className="flex items-stretch gap-3.5 mt-6 sm:mt-8 pl-1">
              <div className="w-1 bg-[#FF0055] rounded-full shrink-0" />
              <p className="text-gray-700 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed max-w-xl py-0.5">
                {challenges.summaryBanner}
              </p>
            </div>
          </div>

          {/* Right Column (5 cols): Visual Graphic with pf-in-chal.png & Floating Pills (Equal height to left cards) */}
          <div className="lg:col-span-5 relative flex items-start justify-center pt-2 sm:pt-3 lg:pt-0">
            {/* Soft pink ambient background aura */}
            <div className="absolute -top-10 -right-10 w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full bg-gradient-to-br from-pink-100/70 via-pink-50/40 to-transparent blur-3xl pointer-events-none -z-0" />

            {/* Main Composition Wrapper */}
            <div className="relative mx-auto h-[360px] w-full max-w-[460px] [container-type:size] sm:h-[385px] lg:h-[395px] xl:h-[405px]">
              {/* Central Photo of Stressed Person working on Laptop (Height equal to left 4-cards grid) */}
              <div className="relative h-full w-full rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200/80 bg-white">
                <Image
                  src="/images/portfolio/pf-in-chal.png"
                  alt="Challenges faced before Kaelixo"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {challenges.floatingBadges.slice(0, badgeSlots.length).map((label, index) => {
                const { icon: Icon, position, landing } = badgeSlots[index];
                const isDropped = droppedBadges.includes(index);

                return (
                  <div
                    key={index}
                    onPointerEnter={(event) => {
                      if (event.pointerType === "mouse") dropBadge(index);
                    }}
                    className={`absolute top-[var(--badge-top)] max-w-[calc(50%+0.25rem)] sm:max-w-[49%] ${isDropped ? "z-30" : "z-20"} ${position}`}
                  >
                    <div
                      style={{ "--badge-delay": `${-index * 1.1}s` } as React.CSSProperties}
                      onPointerMove={isDropped ? nudgeBadge : undefined}
                      onAnimationEnd={(event) => {
                        if (event.animationName === "challenge-badge-drop") {
                          setDroppedBadges((current) => current.filter((badge) => badge !== index));
                        }
                      }}
                      className={`flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-2.5 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md sm:gap-3 sm:rounded-[14px] sm:px-4 sm:py-2.5 ${landing} ${isDropped ? "challenge-badge-dropped" : "pointer-events-none motion-safe:animate-[challenge-badge-float_6s_ease-in-out_var(--badge-delay)_infinite]"}`}
                    >
                      <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#FEEBF2] text-[#FF0055] shadow-2xs">
                        <Icon className="size-4 stroke-[2]" />
                      </span>
                      <span className="text-[14px] leading-tight font-bold text-slate-800 [overflow-wrap:anywhere]">{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
