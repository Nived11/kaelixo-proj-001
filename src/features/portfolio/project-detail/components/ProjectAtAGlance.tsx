import React from "react";
import Image from "next/image";
import {
  Building2,
  Briefcase,
  Settings,
  Monitor,
  Calendar,
  MapPin,
  BarChart3,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";
import { ProjectItem } from "@/features/portfolio/data/portfolioProjects";
import { renderClientBrandLogo } from "./renderClientBrandLogo";

interface SnapshotData {
  platform: string;
  duration: string;
  location: string;
  services: string;
  industry?: string;
  previewImage?: string;
  quickStats: {
    stat: string;
    label: string;
    desc: string;
  }[];
}

interface ProjectAtAGlanceProps {
  project: ProjectItem;
  clientLogoText: string;
  clientLogoTagline: string;
  snapshot: SnapshotData;
  targetSlotRef?: React.RefObject<HTMLDivElement | null>;
}

export default function ProjectAtAGlance({
  project,
  clientLogoText,
  clientLogoTagline,
  snapshot,
  targetSlotRef,
}: ProjectAtAGlanceProps) {
  const statIcons = [
    <BarChart3 key="0" className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2]" />,
    <TrendingUp key="1" className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2]" />,
    <Users key="2" className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2]" />,
    <Star key="3" className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2]" />,
  ];

  const logoSrc =
    project.clientLogoImageDark ||
    project.clientLogoImage ||
    "/images/portfolio/travelhopelogo-dark.webp";

  return (
    <section
      id="at-a-glance"
      className="relative z-20 overflow-hidden rounded-t-[32px] sm:rounded-t-[44px] max-md:rounded-t-[28px] border-t border-[#e9eef7] bg-[#f8faff] text-[#0A1024] py-16 sm:py-20 lg:py-24 shadow-[0_-16px_40px_rgba(0,0,0,0.18)]"
      style={{
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Eyebrow & Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#FF0055]" />
            <span className="text-[12px] sm:text-[13px] font-bold text-slate-400 tracking-[0.2em] uppercase font-heading">
              PROJECT SNAPSHOT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#0A1024]">
            At a <span className="text-[#FF0055]">Glance</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mt-2 font-sans leading-relaxed">
            Key details about the {project.title} project, from goals to outcomes —<br className="hidden sm:inline" /> a quick look at what we built together.
          </p>
        </div>

        {/* Card 1: Main Project Details Card (Logo | 2-Col Grid | Image Preview) */}
        <div className="rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] mb-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-6">
            {/* Left Zone: Client Logo Box (Neat & Compact, Space & Gap Reduced) */}
            <div className="w-full lg:w-[160px] xl:w-[175px] shrink-0 flex flex-col items-center justify-center lg:border-r lg:border-slate-200/80 lg:pr-5 py-1">
              <div className="relative w-full max-w-[145px] sm:max-w-[160px] h-[65px] sm:h-[75px] flex items-center justify-center">
                {logoSrc ? (
                  <div className="relative w-full h-full max-h-[55px]">
                    <Image
                      src={logoSrc}
                      alt={`${clientLogoText} Logo`}
                      fill
                      priority
                      className="object-contain object-center brightness-0"
                    />
                  </div>
                ) : (
                  renderClientBrandLogo(project, clientLogoText, clientLogoTagline)
                )}
              </div>
            </div>

            {/* Middle Zone: 2-Column Metadata Grid (Optimized Ratio for Services Text) */}
            <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-[1.25fr_1fr] gap-x-5 sm:gap-x-6 lg:gap-x-7 gap-y-5 sm:gap-y-6 lg:pl-1">
              {/* 1. Client */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#F0F4FA] border border-[#E2E8F2] flex items-center justify-center text-slate-800 shrink-0 mt-0.5 shadow-2xs">
                  <Building2 className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[14px] sm:text-[15px] font-bold text-black font-heading block leading-snug">
                    Client
                  </span>
                  <span className="text-[16px] text-gray-700 font-sans font-normal block">
                    {project.client || project.title}
                  </span>
                </div>
              </div>

              {/* 2. Platform */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#F0F4FA] border border-[#E2E8F2] flex items-center justify-center text-slate-800 shrink-0 mt-0.5 shadow-2xs">
                  <Monitor className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[14px] sm:text-[15px] font-bold text-black font-heading block leading-snug">
                    Platform
                  </span>
                  <span className="text-[16px] text-gray-700 font-sans font-normal block">
                    {snapshot.platform}
                  </span>
                </div>
              </div>

              {/* 3. Industry */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#F0F4FA] border border-[#E2E8F2] flex items-center justify-center text-slate-800 shrink-0 mt-0.5 shadow-2xs">
                  <Briefcase className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[14px] sm:text-[15px] font-bold text-black font-heading block leading-snug">
                    Industry
                  </span>
                  <span className="text-[16px] text-gray-700 font-sans font-normal block">
                    {snapshot.industry || project.category}
                  </span>
                </div>
              </div>

              {/* 4. Project Duration */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#F0F4FA] border border-[#E2E8F2] flex items-center justify-center text-slate-800 shrink-0 mt-0.5 shadow-2xs">
                  <Calendar className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[14px] sm:text-[15px] font-bold text-black font-heading block leading-snug">
                    Project Duration
                  </span>
                  <span className="text-[16px] text-gray-700 font-sans font-normal block">
                    {snapshot.duration}
                  </span>
                </div>
              </div>

              {/* 5. Services */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#F0F4FA] border border-[#E2E8F2] flex items-center justify-center text-slate-800 shrink-0 mt-0.5 shadow-2xs">
                  <Settings className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[14px] sm:text-[15px] font-bold text-black font-heading block leading-snug">
                    Services
                  </span>
                  <span className="text-[16px] text-gray-700 font-sans font-normal block leading-snug sm:leading-relaxed whitespace-pre-line">
                    {snapshot.services}
                  </span>
                </div>
              </div>

              {/* 6. Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#F0F4FA] border border-[#E2E8F2] flex items-center justify-center text-slate-800 shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[14px] sm:text-[15px] font-bold text-black font-heading block leading-snug">
                    Location
                  </span>
                  <span className="text-[16px] text-gray-700 font-sans font-normal block">
                    {snapshot.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Zone: Mockup Landing Zone (Balanced Size, Blank & Transparent) */}
            <div className="w-full sm:max-w-[400px] lg:max-w-none lg:w-[325px] xl:w-[375px] 2xl:w-[410px] shrink-0 relative flex items-center justify-center">
              <div
                ref={targetSlotRef}
                className="relative w-full aspect-[1774/887] pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Card 2: Key Results Card (Headline & Subtitle on Left | 4 Stats on Right) */}
        <div className="rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & Tagline */}
            <div className="lg:col-span-4 lg:border-r lg:border-slate-200/80 lg:pr-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#FF0055]" />
                <span className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase font-heading">
                  KEY RESULTS
                </span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-[28px] text-[#0A1024] leading-tight">
                Real Growth. <br />
                <span className="text-[#FF0055]">Measurable Impact.</span>
              </h3>
              <p className="text-slate-500 text-xs sm:text-[13px] font-sans mt-2">
                The results speak louder than words.
              </p>
            </div>

            {/* Right Column: 4 Stat Items Separated by Subtle Borders */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {snapshot.quickStats.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col justify-start pt-4 sm:pt-0 ${
                      idx !== 0 ? "sm:pl-5 lg:pl-6" : ""
                    }`}
                  >
                    {/* Row: Pink Icon Badge on Left + Big Stat Number on Right */}
                    <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FEEBF2] flex items-center justify-center text-[#FF0055] shrink-0">
                        {statIcons[idx] || <Star className="w-4 h-4" />}
                      </div>
                      <span className="text-2xl sm:text-[28px] lg:text-[32px] font-black font-heading text-[#0A1024] tracking-tight leading-none">
                        {item.stat}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-heading font-bold text-xs sm:text-[14px] text-[#0A1024] mb-1 leading-snug">
                      {item.label}
                    </h4>

                    {/* Desc */}
                    <p className="text-[11px] sm:text-xs text-slate-500 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
