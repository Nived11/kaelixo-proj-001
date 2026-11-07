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
  const statColumns = ["lg:grid-cols-1", "lg:grid-cols-2", "lg:grid-cols-3", "lg:grid-cols-4"];
  const statIcons = [
    <BarChart3 key="0" className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2]" />,
    <TrendingUp key="1" className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2]" />,
    <Users key="2" className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2]" />,
    <Star key="3" className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2]" />,
  ];

  const logoSrc =
    project.clientLogoImageDark ||
    project.clientLogoImage ||
    null;

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
         <div className="flex items-center gap-2 mb-6">
              <span className="w-5 h-[2px] bg-[#FF0055]" />
              <span className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-[750] tracking-[.2em] text-gray-700">
                PROJECT SNAPSHOT
              </span>
            </div>

          <h2 className="text-[#020205] m-0 font-sans text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.16] tracking-[-1.3px] mb-4">
            At a <span className="text-[#FF0055]">Glance</span>
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] mb-8 max-w-[550px]">
            Key details about the {project.title} project, from goals to outcomes —<br className="hidden sm:inline" /> a quick look at what we built together.
          </p>
        </div>

        {/* Card 1: Main Project Details Card (Logo | 2-Col Grid | Image Preview) */}
        <div className="relative isolate mb-6 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] before:pointer-events-none before:absolute before:-top-16 before:-left-9 before:-z-10 before:size-36 before:rounded-full before:bg-[#ff0055]/[.055] before:content-[''] after:pointer-events-none after:absolute after:-right-9 after:-bottom-16 after:-z-10 after:size-36 after:rounded-full after:bg-[#ff0055]/[.055] sm:rounded-[28px] sm:p-8 lg:p-9">
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
                  renderClientBrandLogo(project, clientLogoText, clientLogoTagline, "light")
                )}
              </div>
            </div>

            {/* Middle Zone: 2-Column Metadata Grid (Optimized Ratio for Services Text) */}
            <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-[1.25fr_1fr] gap-x-5 sm:gap-x-6 lg:gap-x-7 gap-y-5 sm:gap-y-6 lg:pl-1">
              {/* 1. Client */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#F0F4FA] border border-[#E2E8F2] flex items-center justify-center text-slate-800 shrink-0 mt-0.5 shadow-2xs">
                  <Building2 className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] font-bold mb-1 leading-tight">
                    Client
                  </span>
                  <span className="text-gray-700 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed pr-2 block">
                    {project.client || project.title}
                  </span>
                </div>
              </div>

              {/* 2. Platform */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#F0F4FA] border border-[#E2E8F2] flex items-center justify-center text-slate-800 shrink-0 mt-0.5 shadow-2xs">
                  <Monitor className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] font-bold mb-1 leading-tight">
                    Platform
                  </span>
                  <span className="text-gray-700 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed pr-2 block">
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
                  <span className="text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] font-bold mb-1 leading-tight">
                    Industry
                  </span>
                  <span className="text-gray-700 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed pr-2 block">
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
                  <span className="text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] font-bold mb-1 leading-tight">
                    Project Duration
                  </span>
                  <span className="text-gray-700 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed pr-2 block">
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
                  <span className="text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] font-bold mb-1 leading-tight">
                    Services
                  </span>
                  <span className="text-gray-700 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed pr-2 block leading-snug sm:leading-relaxed whitespace-pre-line">
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
                  <span className="text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] font-bold mb-1 leading-tight">
                    Location
                  </span>
                  <span className="text-gray-700 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed pr-2 block">
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

        {/* Card 2: Key Results Card (Headline & Subtitle on Left | Stats on Right) */}
        <div className="relative isolate overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] before:pointer-events-none before:absolute before:-top-16 before:-right-9 before:-z-10 before:size-36 before:rounded-full before:bg-[#ff0055]/[.055] after:pointer-events-none after:absolute after:-bottom-16 after:-left-9 after:-z-10 after:size-36 after:rounded-full after:bg-[#ff0055]/[.055]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & Tagline */}
            <div className="lg:col-span-4 lg:border-r lg:border-slate-200 lg:pr-8">
              <div className="flex items-center gap-2 mb-2">
               <span className="w-5 h-[2px] bg-[#FF0055]" />
                <span className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-[750] tracking-[.2em] text-gray-700">
                  KEY RESULTS
                </span>
              </div>
              <h3 className="text-[#020205] m-0 font-sans text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.16] tracking-[-1.3px] ">
                Real Growth. <br />
                <span className="text-[#FF0055]">Measurable Impact.</span>
              </h3>
              <p className="text-gray-700 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed mt-2">
                The results speak louder than words.
              </p>
            </div>

            {/* Right Column: Stat Items Separated by Subtle Borders */}
            <div className="lg:col-span-8">
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 ${statColumns[snapshot.quickStats.length - 1] ?? "lg:grid-cols-4"}`}>
                {snapshot.quickStats.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col justify-start pt-4 sm:pt-0 ${
                      idx !== 0 ? "sm:pl-5 lg:pl-6" : ""
                    }`}
                  >
                    {/* Row: Pink Icon Badge on Left + Big Stat Number on Right */}
                    <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center text-white shrink-0 shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-2 ring-pink-100">
                        {statIcons[idx] || <Star className="w-6 h-6" />}
                      </div>
                      <span className="text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[32px] 2xl:text-[32px] [@media(min-width:1920px)]:text-[32px] font-black font-heading text-[#0A1024] tracking-tight leading-none">
                        {item.stat}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-[#020205] text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] font-bold mb-1 leading-tight">
                      {item.label}
                    </h4>

                    {/* Desc */}
                    <p className="text-gray-700 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed pr-2 ">
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
