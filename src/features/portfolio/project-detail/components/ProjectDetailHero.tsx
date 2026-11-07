import React from "react";
import Image from "next/image";
import { Briefcase, Laptop } from "lucide-react";
import { ProjectItem } from "@/features/portfolio/data/portfolioProjects";
import { renderClientBrandLogo } from "./renderClientBrandLogo";

interface ProjectDetailHeroProps {
  project: ProjectItem;
  heroHeadline: {
    prefix: string;
    highlight: string;
  };
  heroSubtitle: string;
  projectType: string;
  clientLogoText: string;
  clientLogoTagline: string;
  heroSlotRef?: React.RefObject<HTMLDivElement | null>;
  isMounted?: boolean;
}

export default function ProjectDetailHero({
  project,
  heroHeadline,
  heroSubtitle,
  projectType,
  clientLogoText,
  clientLogoTagline,
  heroSlotRef,
  isMounted,
}: ProjectDetailHeroProps) {
  return (
    <section
      className="sticky top-0 z-0 w-full min-h-[calc(100vh-70px)] lg:min-h-screen pt-[120px] sm:pt-[135px] lg:pt-[145px] pb-16 sm:pb-24 flex items-center overflow-hidden"
      style={{
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform",
      }}
    >
      {/* Project Custom Background (Desktop & Mobile) or Default Ambient Glows */}
      {project.heroBgImage ? (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Desktop Background */}
          <Image
            src={project.heroBgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hidden sm:block opacity-90"
          />
          {/* Mobile Background */}
          <Image
            src={project.heroMobileBgImage || project.heroBgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center block sm:hidden opacity-90"
          />
          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03040B]/85 via-[#03040B]/40 to-transparent hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#03040B]/80 via-[#03040B]/30 to-[#03040B]/90 sm:hidden block" />
        </div>
      ) : (
        <>
          {/* Background Ambient Glows & Neon Lighting */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FF0055]/15 blur-[140px] rounded-full pointer-events-none z-0" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none z-0" />
        </>
      )}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Eyebrow, Logo & Metadata, Big Headline & Subtitle */}
          <div className="lg:col-span-6 flex flex-col items-start relative z-20">
            {/* Eyebrow: — CASE STUDY */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-5 h-[2px] bg-[#FF0055]" />
              <span className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-bold text-white/80 tracking-[0.2em] uppercase font-heading">
                CASE STUDY
              </span>
            </div>

            {/* Client Logo Card & Stacked Metadata Row (Locked Side-by-Side, Never Wraps) */}
            <div className="flex items-center gap-4 sm:gap-6 mb-7 sm:mb-8 w-full max-w-full">
              {/* Client Logo Box */}
              <div className="relative rounded-[16px] bg-[#0A0D18]/90 border border-white/12 px-4 py-3 flex flex-col items-center justify-center shrink-0 w-[170px] sm:w-[190px] h-[78px] sm:h-[84px] shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                {project.clientLogoImage ? (
                  <div className="relative w-full h-full max-h-[54px] sm:max-h-[58px]">
                    <Image
                      src={project.clientLogoImage}
                      alt={`${clientLogoText} Logo`}
                      fill
                      priority
                      style={{ transform: `scale(${project.heroLogoScale ?? 1})` }}
                      className="object-contain object-center"
                    />
                  </div>
                ) : (
                  renderClientBrandLogo(project, clientLogoText, clientLogoTagline)
                )}
              </div>

              {/* Stacked Metadata: Industry & Project Type (Side-by-Side with Logo Box) */}
              <div className="flex flex-col justify-center gap-2.5 min-w-0">
                {/* Industry Item */}
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg border border-white/15 bg-white/[0.04] flex items-center justify-center text-[#FF0055] shrink-0 shadow-xs">
                    <Briefcase className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[16px] font-semibold text-white/45 uppercase tracking-wider block font-heading leading-tight">
                      INDUSTRY
                    </span>
                    <span className="text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] text-white font-sans block truncate max-w-[220px] sm:max-w-[320px]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Type Item */}
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg border border-white/15 bg-white/[0.04] flex items-center justify-center text-[#FF0055] shrink-0 shadow-xs">
                    <Laptop className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[16px] font-semibold text-white/45 uppercase tracking-wider block font-heading leading-tight">
                      PROJECT TYPE
                    </span>
                    <span className="text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] text-white font-sans block truncate max-w-[220px] sm:max-w-[320px]">
                      {projectType}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] leading-[1.12] text-white tracking-tight mb-5">
              <span className="block text-white">
                {project.title} —
              </span>
              <span className="text-[#FF0055] block">
                {heroHeadline.highlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-relaxed max-w-xl font-sans">
              {heroSubtitle}
            </p>

            {/* Pink Accent Line Under Subtitle */}
            <div className="w-16 h-[3px] bg-[#FF0055] rounded-full mt-6" />
          </div>

          {/* Right Column: Complete Photorealistic Mockup Scene */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end pt-6 lg:pt-0">
            {project.heroMockupImage ? (
              /* High-Res Transparent Mockup Image (Laptop + Mobile on Illuminated Stone) */
              <div
                ref={heroSlotRef}
                className={`relative w-full sm:w-[110%] lg:w-[136%] xl:w-[152%] 2xl:w-[160%] [@media(min-width:1920px)]:w-[172%] max-w-[640px] sm:max-w-[760px] lg:max-w-none flex items-center justify-center lg:justify-end z-10 lg:-translate-x-5 xl:-translate-x-8 2xl:-translate-x-8 [@media(min-width:1920px)]:-translate-x-10 lg:mr-0 xl:-mr-8 2xl:-mr-16 [@media(min-width:1920px)]:-mr-32 transition-opacity duration-150 ${
                  isMounted ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="relative w-full aspect-[1774/887]">
                  <Image
                    src={project.heroMockupImage}
                    alt={`${project.title} Showcase`}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1500px"
                    className="object-contain object-center drop-shadow-[0_25px_65px_rgba(0,0,0,0.95)]"
                  />
                </div>
              </div>
            ) : (
              /* Dynamic CSS Mockup Scene (Laptop + Overlapping Phone + Neon Arch Scene) */
              <>
                {/* Glowing Neon Pink Portal Arch - High Arched Curve Behind Screen */}
                <div className="absolute -top-16 sm:-top-24 -left-6 sm:-left-12 -right-6 sm:-right-12 bottom-0 pointer-events-none flex items-center justify-center z-0 overflow-visible">
                  <svg
                    viewBox="0 0 660 500"
                    className="w-full h-full overflow-visible"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Broad Ambient Soft Neon Halo */}
                    <path
                      d="M 40,430 C 50,50 200,0 480,18 C 600,32 640,220 610,440"
                      stroke="#FF0055"
                      strokeWidth="32"
                      strokeOpacity="0.3"
                      strokeLinecap="round"
                      style={{ filter: "blur(28px)" }}
                    />
                    {/* Vibrant Radiant Core Glow */}
                    <path
                      d="M 40,430 C 50,50 200,0 480,18 C 600,32 640,220 610,440"
                      stroke="#FF0055"
                      strokeWidth="14"
                      strokeOpacity="0.75"
                      strokeLinecap="round"
                      style={{ filter: "blur(8px)" }}
                    />
                    {/* Sharp Neon Tube */}
                    <path
                      d="M 40,430 C 50,50 200,0 480,18 C 600,32 640,220 610,440"
                      stroke="#FF3377"
                      strokeWidth="4"
                      strokeLinecap="round"
                      style={{
                        filter: "drop-shadow(0 0 10px #FF0055) drop-shadow(0 0 25px #FF0055)",
                      }}
                    />
                  </svg>
                </div>

                {/* Ambient Palm Tree Silhouettes Overlay */}
                <div className="absolute -top-14 right-2 sm:right-6 w-80 h-72 opacity-35 pointer-events-none z-0">
                  <svg viewBox="0 0 100 100" fill="#000" className="w-full h-full">
                    <path
                      d="M 50,100 Q 55,60 70,30 C 65,32 58,35 50,40 C 45,34 38,30 30,28 C 36,33 42,38 46,45 C 38,45 28,47 20,52 C 28,52 38,51 44,55 C 36,60 28,68 25,78 C 32,73 40,68 46,65 Z"
                      fill="#020308"
                    />
                    <path
                      d="M 70,30 Q 85,25 95,28 C 90,32 82,35 75,37 C 82,40 90,44 94,50 C 86,48 78,45 72,42 Z"
                      fill="#020308"
                    />
                  </svg>
                </div>

                {/* Devices Wrapper */}
                <div className="relative w-full max-w-[540px] sm:max-w-[580px] z-10 pt-4">
                  {/* Laptop Mockup */}
                  <div className="relative rounded-t-[18px] sm:rounded-t-[22px] bg-[#161822] p-2.5 sm:p-3 pb-0 shadow-[0_30px_70px_rgba(0,0,0,0.85)] border border-white/15">
                    {/* Laptop Camera Dot */}
                    <div className="w-2 h-2 rounded-full bg-black/70 mx-auto mb-2 border border-white/20" />

                    {/* Laptop Screen Display */}
                    <div className="relative aspect-[16/10] w-full rounded-t-[10px] overflow-hidden bg-slate-950 border border-white/10">
                      <Image
                        src={project.image}
                        alt={`${project.title} Desktop View`}
                        fill
                        priority
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Glossy Laptop Keyboard Base */}
                    <div className="h-3.5 bg-gradient-to-b from-[#252837] via-[#1a1c27] to-[#0d0e15] rounded-b-[10px] border-t border-white/20 shadow-md relative flex items-center justify-center">
                      <div className="w-16 h-1 bg-white/20 rounded-full" />
                    </div>
                  </div>

                  {/* Overlapping iPhone Device (Floating Bottom Right) */}
                  <div className="absolute -bottom-6 -right-2 sm:-right-4 w-[130px] sm:w-[155px] z-20">
                    <div className="relative rounded-[26px] bg-[#0c0d13] p-2 pb-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(255,0,85,0.2)] border-2 border-white/25">
                      {/* Dynamic Island Pill */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full z-30" />

                      {/* Screen Content */}
                      <div className="relative aspect-[9/19] w-full rounded-[20px] overflow-hidden bg-slate-950 border border-white/10">
                        <Image
                          src={project.image}
                          alt={`${project.title} Mobile View`}
                          fill
                          className="object-cover object-center scale-125"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Glossy Table Surface with Vibrant Neon Edge & Reflection */}
                  <div className="relative w-[114%] -ml-[7%] h-6 -mt-1 bg-gradient-to-b from-[#FF0055]/30 via-black/85 to-transparent border-t-2 border-[#FF0055] shadow-[0_0_22px_#FF0055,0_0_45px_rgba(255,0,85,0.7)] rounded-full -z-0" />

                  {/* Dark Tropical Monstera Leaves in Foreground (Bottom Left) */}
                  <div className="absolute -bottom-8 -left-10 w-36 h-36 opacity-75 pointer-events-none z-30">
                    <svg viewBox="0 0 100 100" fill="#020308" className="w-full h-full drop-shadow-2xl">
                      <path d="M 10,100 Q 35,70 60,50 C 65,40 75,25 90,20 C 82,32 72,48 65,58 C 75,52 88,48 95,50 C 85,58 72,65 60,72 C 68,78 78,85 82,95 C 72,88 62,82 55,78 Q 30,90 10,100 Z" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

