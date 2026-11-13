"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Smartphone,
  Zap,
  Smile,
  Sparkles,
  Monitor,
  Search,
  Share2,
  Layers,
  Globe,
  Mouse,
} from "lucide-react";
import type { ShowcaseCardItem } from "@/features/portfolio/data/portfolioProjects";

interface ShowcaseData {
  subtitle: string;
  pills?: string[];
  websiteImage?: string;
  websiteUrl?: string;
  cards?: ShowcaseCardItem[];
  screens?: {
    name: string;
    desc: string;
  }[];
}

interface ProjectShowcaseProps {
  projectTitle: string;
  projectImage: string;
  heroMockupImage?: string;
  websiteImage?: string;
  showcase: ShowcaseData;
}

const defaultBadges = [
  {
    title: "Responsive",
    subtitle: "Design",
    icon: Smartphone,
  },
  {
    title: "Performance",
    subtitle: "Optimized",
    icon: Zap,
  },
  {
    title: "User-Centric",
    subtitle: "UI/UX",
    icon: Smile,
  },
  {
    title: "Business",
    subtitle: "Focused",
    icon: Sparkles,
  },
];

const showcaseCards: ShowcaseCardItem[] = [
  {
    id: "website",
    title: "Website",
    desc: "Modern, responsive and brand-focused website design.",
    icon: "Monitor",
    type: "website",
  },
  {
    id: "seo",
    title: "SEO Report",
    desc: "Website SEO analysis with score, issues and insights.",
    icon: "Search",
    type: "seo",
  },
  {
    id: "social",
    title: "Social Report",
    desc: "Social media performance with reach, engagement and growth.",
    icon: "Share2",
    type: "social",
  },
  {
    id: "crm",
    title: "CRM",
    desc: "Manage leads, customers, deals and sales in one platform.",
    icon: "Layers",
    type: "crm",
  },
];

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Search,
  Share2,
  Layers,
  Smartphone,
  Sparkles,
  Globe,
};

const projectWebsiteMap: Record<string, string> = {
  "Travel Hope": "/images/portfolio/travel-hope/travelhope-website.png",
  "Dream Holidays Kerala": "/images/portfolio/dream-holidays/dreamholidays-website.png",
  "Safari Furniture": "/images/portfolio/safari-furniture/safarifurniture-website.png",
  "Safari Mall": "/images/portfolio/safari-mall/safarimall-website.png",
  "DATs Interiors": "/images/portfolio/dats-interiors/dats-website.png",
  "Finexx Travels": "/images/portfolio/finexx-travels/finexx-website.png",
  "Hair-O-Craft": "/images/portfolio/hair-o-craft/hairocraft-website.png",
  "Hair O Craft": "/images/portfolio/hair-o-craft/hairocraft-website.png",
  "Insafe Steel": "/images/portfolio/insafe-steel/insafe-website.png",
  "Unigrant Academy": "/images/portfolio/unigrant-academy/unigrant-website.png",
  "Ivaansh International": "/images/portfolio/ivaansh-international/ivaansh-website.png",
  "Ayurgreen Spices": "/images/portfolio/ayurgreen-spices/ayurgreen-website.png",
  "D Soft Institute": "/images/portfolio/dsoft-institute/dsoftinstitute-website.png",
  "Asian Avenue": "/images/portfolio/asian-avenue/asianavenue-website.png",
  "Neurobase Ayurveda": "/images/portfolio/neurobase-ayurveda/neurobase-website.png",
  "Infig Content Hub": "/images/portfolio/infig-content-hub/infig-website.png",
  "Phoenix Flow": "/images/portfolio/phoenix-flow/phoenix-website.png",
};

function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      {/* Laptop Lid Screen */}
      <div className="relative aspect-[16/9] w-full rounded-t-[10px] bg-[#111317] p-[5px] sm:p-[6px] shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
        {/* Camera dot */}
        <div className="absolute top-[2.5px] left-1/2 -translate-x-1/2 size-1 rounded-full bg-slate-700 z-10 pointer-events-none" />
        {/* Screen Content */}
        <div className="relative h-full w-full overflow-hidden rounded-[4px] bg-white">
          {children}
        </div>
      </div>
      {/* Laptop Base */}
      <div className="relative -mt-px w-full">
        <div className="relative h-[6px] w-[104%] -left-[2%] rounded-b-[4px] bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] shadow-[0_3px_6px_rgba(0,0,0,0.12)] flex justify-center">
          <div className="h-[2px] w-8 rounded-b-[2px] bg-[#64748b]/50" />
        </div>
        <div className="mx-auto h-[2.5px] w-[55%] rounded-b-full bg-slate-400/40" />
      </div>
    </div>
  );
}

function ScaledIframe({
  url,
  title,
  virtualWidth = 1280,
  fallbackImage,
}: {
  url: string;
  title: string;
  virtualWidth?: number;
  virtualHeight?: number;
  fallbackImage?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(virtualWidth === 390 ? 0.18 : 0.21);
  const [virtualHeight, setVirtualHeight] = useState<number>(virtualWidth === 390 ? 770 : 720);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    // Safety timer: external sites have heavy GTM/analytics scripts that delay window.onload.
    // Reveal the preview within 1.2s so the user is never stuck waiting.
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, [url]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateDimensions = () => {
      const width = el.clientWidth;
      const height = el.clientHeight;
      if (width > 0) {
        const computedScale = width / virtualWidth;
        setScale(computedScale);
        if (height > 0 && computedScale > 0) {
          setVirtualHeight(Math.round(height / computedScale));
        }
      }
    };

    updateDimensions();
    const ro = new ResizeObserver(updateDimensions);
    ro.observe(el);
    return () => ro.disconnect();
  }, [virtualWidth]);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden bg-slate-50">
      {/* Fallback image while loading or on error */}
      {fallbackImage && !isLoaded && (
        <Image
          src={fallbackImage}
          alt={title}
          fill
          className="object-cover"
          sizes="300px"
        />
      )}

      {/* Subtle top progress bar while initial connection streams */}
      {!isLoaded && !hasError && (
        <div className="absolute top-0 left-0 right-0 h-[2px] z-10 overflow-hidden bg-slate-200 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-r from-pink-500 via-[#ff0055] to-purple-500 animate-pulse" />
        </div>
      )}

      {!hasError && (
        <iframe
          src={url}
          title={title}
          loading="eager"
          scrolling="yes"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          tabIndex={-1}
          className="border-0 absolute top-0 left-0 pointer-events-auto select-auto"
          style={{
            width: `${virtualWidth}px`,
            height: `${virtualHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: "0 0",
            overscrollBehavior: "contain",
          }}
        />
      )}
    </div>
  );
}

function MobileFrame({
  url,
  title,
  fallbackImage,
}: {
  url?: string;
  title: string;
  fallbackImage?: string;
}) {
  return (
    <div className="relative mx-auto flex h-[185px] w-full items-center justify-center select-none">
      {/* Ambient soft glow */}
      <div className="absolute size-32 rounded-full bg-gradient-to-tr from-pink-200/50 to-purple-200/40 blur-xl pointer-events-none" />

      {/* iPhone Chassis */}
      <div className="relative h-[180px] w-[90px] rounded-[22px] bg-[#0f172a] p-[3.5px] shadow-[0_12px_28px_rgba(0,0,0,0.22)] border border-slate-700/80 flex flex-col">
        {/* Dynamic Island */}
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-7 h-[4.5px] rounded-full bg-black z-30 flex items-center justify-end pr-[2px] pointer-events-none">
          <div className="size-[2px] rounded-full bg-slate-800" />
        </div>

        {/* Screen Content */}
        <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-white">
          {url ? (
            <ScaledIframe
              url={url}
              title={title}
              virtualWidth={390}
              virtualHeight={780}
              fallbackImage={fallbackImage}
            />
          ) : fallbackImage ? (
            <Image
              src={fallbackImage}
              alt={title}
              fill
              className="object-cover"
              sizes="120px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-100 text-[8px] text-slate-400">
              Mobile View
            </div>
          )}
        </div>

        {/* Home Indicator Line */}
        <div className="absolute bottom-[2.5px] left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-slate-500/60 z-30 pointer-events-none" />
      </div>
    </div>
  );
}

function SEOReportContent() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-white p-2.5 sm:p-3 select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-1">
        <span className="text-[10px] font-bold text-slate-800 tracking-tight sm:text-[11px]">
          SEO Report
        </span>
        <span className="flex size-1.5 rounded-full bg-emerald-500" />
      </div>

      {/* Center Score & Chart */}
      <div className="my-auto flex items-center justify-between gap-2 py-0.5">
        {/* Circular Score Ring */}
        <div className="relative flex size-11 shrink-0 items-center justify-center sm:size-12">
          <svg className="size-full -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-slate-100"
              strokeWidth="3.2"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-emerald-500"
              strokeDasharray="92, 100"
              strokeWidth="3.2"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[12px] font-extrabold text-slate-900 leading-none">92</span>
            <span className="text-[5px] font-bold text-emerald-600 uppercase tracking-tighter mt-0.5">
              Score
            </span>
          </div>
        </div>

        {/* Upward Line Chart */}
        <div className="h-8 w-full flex-1 sm:h-9">
          <svg className="size-full" viewBox="0 0 120 40" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="seoGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#9333ea" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 32 Q 25 35, 40 22 T 80 16 T 105 8 T 120 4 L 120 40 L 0 40 Z"
              fill="url(#seoGrad)"
            />
            <path
              d="M0 32 Q 25 35, 40 22 T 80 16 T 105 8 T 120 4"
              stroke="#9333ea"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-3 gap-0.5 border-t border-slate-100 pt-1 text-center">
        <div>
          <div className="text-[9px] font-bold text-emerald-600 sm:text-[10px]">+68%</div>
          <div className="truncate text-[6px] font-medium text-slate-400">Organic Traffic</div>
        </div>
        <div>
          <div className="text-[9px] font-bold text-slate-800 sm:text-[10px]">+41%</div>
          <div className="truncate text-[6px] font-medium text-slate-400">Keywords</div>
        </div>
        <div>
          <div className="text-[9px] font-bold text-slate-800 sm:text-[10px]">12</div>
          <div className="truncate text-[6px] font-medium text-slate-400">Issues</div>
        </div>
      </div>
    </div>
  );
}

function SocialReportContent() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-white p-2.5 sm:p-3 select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-1">
        <span className="text-[10px] font-bold text-slate-800 tracking-tight sm:text-[11px]">
          Social Report
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-1.5 py-0.5">
        <div className="flex size-3.5 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-[6.5px] font-bold text-white shadow-xs">
          ig
        </div>
        <div className="flex size-3.5 items-center justify-center rounded-full bg-[#1877f2] text-[6.5px] font-bold text-white shadow-xs">
          f
        </div>
        <div className="flex size-3.5 items-center justify-center rounded-full bg-[#ff0000] text-[6.5px] font-bold text-white shadow-xs">
          yt
        </div>
        <div className="flex size-3.5 items-center justify-center rounded-full bg-[#0a66c2] text-[6.5px] font-bold text-white shadow-xs">
          in
        </div>
      </div>

      {/* Bar Chart & Right Stats */}
      <div className="my-auto flex items-end justify-between gap-2">
        <div className="flex items-end gap-1 h-9 sm:h-10">
          <div className="h-[45%] w-1.5 rounded-t-sm bg-gradient-to-t from-violet-600 to-fuchsia-400" />
          <div className="h-[75%] w-1.5 rounded-t-sm bg-gradient-to-t from-violet-600 to-fuchsia-400" />
          <div className="h-[55%] w-1.5 rounded-t-sm bg-gradient-to-t from-violet-600 to-fuchsia-400" />
          <div className="h-[95%] w-1.5 rounded-t-sm bg-gradient-to-t from-violet-600 to-fuchsia-400" />
          <div className="h-[70%] w-1.5 rounded-t-sm bg-gradient-to-t from-violet-600 to-fuchsia-400" />
        </div>

        <div className="flex flex-col gap-0.5 text-right">
          <div>
            <span className="text-[8px] font-bold text-fuchsia-600 sm:text-[9px]">+120%</span>
            <span className="block text-[6px] font-medium text-slate-400">Engagement</span>
          </div>
          <div>
            <span className="text-[8px] font-bold text-violet-600 sm:text-[9px]">+85%</span>
            <span className="block text-[6px] font-medium text-slate-400">Reach</span>
          </div>
          <div>
            <span className="text-[8px] font-bold text-pink-600 sm:text-[9px]">+32%</span>
            <span className="block text-[6px] font-medium text-slate-400">Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CRMReportContent() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-white p-2.5 sm:p-3 select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-1">
        <span className="text-[10px] font-bold text-slate-800 tracking-tight sm:text-[11px]">
          CRM Dashboard
        </span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-1 py-1">
        <div className="rounded bg-slate-50 p-1 text-center">
          <div className="text-[9px] font-extrabold text-slate-900 leading-none sm:text-[10px]">
            1,248
          </div>
          <div className="text-[5.5px] font-semibold text-slate-400 uppercase mt-0.5">Leads</div>
        </div>
        <div className="rounded bg-slate-50 p-1 text-center">
          <div className="text-[9px] font-extrabold text-slate-900 leading-none sm:text-[10px]">
            423
          </div>
          <div className="text-[5.5px] font-semibold text-slate-400 uppercase mt-0.5">Deals</div>
        </div>
        <div className="rounded bg-slate-50 p-1 text-center">
          <div className="text-[9px] font-extrabold text-purple-600 leading-none sm:text-[10px]">
            ₹28.4L
          </div>
          <div className="text-[5.5px] font-semibold text-slate-400 uppercase mt-0.5">Revenue</div>
        </div>
      </div>

      {/* Fluid Wave Graph */}
      <div className="h-7 w-full sm:h-8">
        <svg className="size-full" viewBox="0 0 160 40" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="crmGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#d946ef" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M0 34 C 25 36, 45 20, 70 24 C 95 28, 115 10, 135 12 C 148 13, 155 6, 160 4 L 160 40 L 0 40 Z"
            fill="url(#crmGrad)"
          />
          <path
            d="M0 34 C 25 36, 45 20, 70 24 C 95 28, 115 10, 135 12 C 148 13, 155 6, 160 4"
            stroke="#7c3aed"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function ProjectShowcase({
  projectTitle,
  projectImage,
  heroMockupImage,
  websiteImage,
  showcase,
}: ProjectShowcaseProps) {
  const mainMockupImage = heroMockupImage || projectImage;
  const websitePreviewImage =
    websiteImage ||
    showcase.websiteImage ||
    projectWebsiteMap[projectTitle] ||
    heroMockupImage ||
    projectImage;

  // Use custom project cards if defined; otherwise fallback to default 4 cards
  const cardsToRender =
    showcase.cards && showcase.cards.length > 0 ? showcase.cards : showcaseCards;

  return (
    <section className="relative z-20 overflow-hidden bg-white py-16 text-slate-900 sm:py-24">
      {/* Decorative organic background shapes matching reference mockup */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* Top-left organic petal curve */}
        <svg
          className="absolute -top-12 -left-12 w-[340px] h-[360px] text-[#ffe4e6] opacity-80 sm:w-[460px] sm:h-[440px]"
          viewBox="0 0 460 440"
          fill="none"
        >
          <path
            d="M-40 -40 C 160 -60, 320 60, 260 210 C 210 330, 60 410, -40 360 Z"
            fill="currentColor"
          />
        </svg>

        {/* Top-right soft organic blob */}
        <svg
          className="absolute -top-16 -right-16 w-[300px] h-[300px] text-[#fff1f2] opacity-90 sm:w-[420px] sm:h-[420px]"
          viewBox="0 0 420 420"
          fill="none"
        >
          <path
            d="M480 -30 C 480 180, 320 320, 190 270 C 80 230, 60 90, 180 -30 Z"
            fill="currentColor"
          />
        </svg>

        {/* Center-right elongated pink blob behind hero mockup */}
        <div className="absolute top-[8%] right-[4%] w-[560px] h-[280px] rounded-[100px] bg-gradient-to-tr from-[#fce7f3]/50 to-[#ffe4e6]/40 -rotate-[10deg] blur-[20px] pointer-events-none hidden lg:block" />

        {/* Bottom subtle ambient glow */}
        <div className="absolute -bottom-24 left-1/4 w-[480px] h-[220px] rounded-full bg-[#fff0f4]/80 blur-[40px] pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8">
        {/* Top Section: Heading + Badges (Left) & Hero Mockup (Right) */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
          <div className="sm:px-2 lg:pb-4">
            <p className="flex items-center gap-3 font-[750] text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] tracking-[0.2em] text-slate-900 uppercase">
              <span className="h-0.5 w-9 shrink-0 bg-[#ff0055]" />
              Design &amp; Experience Showcase
            </p>
            <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.16] tracking-[-1.3px] mb-2 text-slate-950 mt-2">
              Design &amp; Experience
              <span className="block text-[#ff0055]">Showcase</span>
            </h2>
            <p className="mt-3 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] mb-8 max-w-[550px] text-slate-600">
              {showcase.subtitle}
            </p>

            {/* 4 Feature Badges with Soft Pink Rounded Boxes */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {defaultBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="mb-2.5 flex size-12 items-center justify-center rounded-2xl bg-[#fff0f4] border border-pink-100/90 text-[#ff0055] shadow-[0_2px_8px_rgba(255,0,85,0.08)]">
                      <Icon className="size-5.5 stroke-[2]" aria-hidden="true" />
                    </div>
                    <span className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-slate-900 leading-snug">
                      {badge.title}
                      <span className="block font-bold">{badge.subtitle}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top-Right Hero Mockup with clean shadow on white */}
          <div className="relative mx-auto aspect-[2/1] w-full max-w-[650px] lg:mx-0 lg:justify-self-end">
            <Image
              src={mainMockupImage}
              alt={`${projectTitle} website preview`}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>

        {/* Bottom Section: 4 Individual White Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {cardsToRender.map((card) => {
            const iconKey = card.icon || "Monitor";
            const Icon =
              (typeof iconKey === "string" ? iconMap[iconKey] : iconKey) || Monitor;
            const cardType = card.type || card.id;
            const liveUrl = card.url || (card.id === "website" ? showcase.websiteUrl : undefined);
            const isScrollable =
              cardType === "iframe" ||
              cardType === "iframe-mobile" ||
              (cardType === "website" && !!liveUrl);

            return (
              <div
                key={card.id}
                className="group flex flex-col rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,0,85,0.07)]"
              >
                {/* Visual Preview */}
                <div className="relative flex h-[190px] w-full items-center justify-center">
                  {isScrollable && (
                    <div className="pointer-events-none absolute bottom-1 right-1 z-20 flex items-center gap-1 rounded-full bg-slate-900/85 px-2 py-0.5 text-[9.5px] font-medium text-white shadow-sm backdrop-blur-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <Mouse className="size-2.5 text-pink-400" />
                      <span>Scrollable</span>
                    </div>
                  )}
                  {cardType === "iframe-mobile" ? (
                    <MobileFrame
                      url={liveUrl}
                      title={card.title}
                      fallbackImage={websitePreviewImage}
                    />
                  ) : (
                    <LaptopFrame>
                      {cardType === "iframe" || (cardType === "website" && liveUrl) ? (
                        <ScaledIframe
                          url={liveUrl || ""}
                          title={card.title}
                          virtualWidth={1280}
                          virtualHeight={720}
                          fallbackImage={websitePreviewImage}
                        />
                      ) : cardType === "seo" ? (
                        <SEOReportContent />
                      ) : cardType === "social" ? (
                        <SocialReportContent />
                      ) : cardType === "crm" ? (
                        <CRMReportContent />
                      ) : (
                        <div className="relative h-full w-full overflow-hidden bg-slate-50">
                          <Image
                            src={card.image || websitePreviewImage}
                            alt={`${projectTitle} ${card.title}`}
                            fill
                            sizes="(min-width: 1024px) 25vw, 50vw"
                            className="object-fill"
                          />
                        </div>
                      )}
                    </LaptopFrame>
                  )}
                </div>

                {/* Bottom Card Title & Description */}
                <div className="mt-4 flex flex-1 flex-col pt-1">
                  <div className="flex min-h-[44px] items-center gap-2.5">
                    <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0f4] border border-pink-100/90 text-[#ff0055]">
                      <Icon className="size-4.5 sm:size-5 stroke-[2]" aria-hidden="true" />
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] md:text-[18px] font-bold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[15px] sm:text-[16px] leading-relaxed text-slate-500">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
