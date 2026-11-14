/*  */"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  ArrowRight,
  ArrowLeft,
  Rocket,
  Users,
  Layers,
  Star,
  Award,
  Heart,
  Globe,
  Building,
  ShieldCheck,
  Clock,
  Zap,
  Lock,
  BookOpen,
  TrendingUp,
  Compass,
  MapPin,
} from "lucide-react";
import GradientBlinds from "@/components/ui/GradientBlinds";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StatItem {
  icon?: React.ReactNode;
  value?: string;
  label: string;
}

interface MenuItemData {
  id: string;
  label: string;
  firstWord: string;
  secondWord: string;
  desc: string;
  stats: StatItem[];
  ctaText: string;
  href: string;
}

interface TestimonialCard {
  id: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  company: string;
  name: string;
  role: string;
}

const TESTIMONIAL_CARDS: TestimonialCard[] = [
  {
    id: "lulu",
    thumbnail: "/images/testimonials/highres/person-1.webp",
    videoUrl: "/videos/home/workspace.mp4",
    duration: "1:42",
    company: "LuLu Group International",
    name: "Nandakumar V",
    role: "Director - Marketing and Communications",
  },
  {
    id: "marsleeva",
    thumbnail: "/images/testimonials/highres/person-2.webp",
    videoUrl: "/videos/home/kaelixo-hero-video.mp4",
    duration: "2:15",
    company: "Mar Sleeva Medicity Palai",
    name: "Manjit Cherian",
    role: "Chief Branding Officer",
  },
  {
    id: "joyalukkas",
    thumbnail: "/images/testimonials/highres/person-3.webp",
    videoUrl: "/videos/home/workspace.mp4",
    duration: "1:18",
    company: "Joyalukkas Exchange",
    name: "Antony Jos",
    role: "Managing Director",
  },
  {
    id: "unicoin",
    thumbnail: "/images/testimonials/highres/person-4.webp",
    videoUrl: "/videos/home/kaelixo-hero-video.mp4",
    duration: "2:04",
    company: "Unicoin DCX",
    name: "Aboobacker Mohammed Ali",
    role: "Founder & CEO",
  },
  {
    id: "designsolutions",
    thumbnail: "/images/testimonials/highres/person-5.webp",
    videoUrl: "/videos/home/workspace.mp4",
    duration: "1:35",
    company: "Design Solutions Inc.",
    name: "Mohammed Shameer",
    role: "Co-founder | Partner",
  },
  {
    id: "lanalifecare",
    thumbnail: "/images/testimonials/highres/person-6.webp",
    videoUrl: "/videos/home/kaelixo-hero-video.mp4",
    duration: "1:50",
    company: "Lana Life Care",
    name: "Naser Abdulaziz N Alsorayai",
    role: "Chief Executive Officer",
  },
];

interface ClientLogoItem {
  id: string;
  name: string;
  logo: string;
}

const CLIENT_LOGOS: ClientLogoItem[] = [
  {
    id: "safari-mall",
    name: "Safari Mall",
    logo: "/images/portfolio/safari-mall/safari-mall.svg",
  },
  {
    id: "dream-holidays",
    name: "Dream Holidays",
    logo: "/images/portfolio/dream-holidays/dreamholidays-logo.svg",
  },
  {
    id: "dats-interiors",
    name: "DATS Interiors",
    logo: "/images/portfolio/dats-interiors/dats-logo.svg",
  },
  {
    id: "safari-furniture",
    name: "Safari Furniture",
    logo: "/images/portfolio/safari-furniture/safari-furniture-logo.svg",
  },
  {
    id: "finexx-travels",
    name: "Finexx Travels",
    logo: "/images/portfolio/finexx-travels/finexx-logo.svg",
  },
  {
    id: "hair-o-craft",
    name: "Hair O Craft",
    logo: "/images/portfolio/hair-o-craft/hairocraft-logo.svg",
  },
  {
    id: "insafe-steel",
    name: "Insafe Steel",
    logo: "/images/portfolio/insafe-steel/insafe-logo.svg",
  },
  {
    id: "unigrant-academy",
    name: "Unigrant Academy",
    logo: "/images/portfolio/unigrant-academy/unigrant-logo.svg",
  },
  {
    id: "ivaansh-international",
    name: "Ivaansh International",
    logo: "/images/portfolio/ivaansh-international/ivaansh-logo.svg",
  },
  {
    id: "ayurgreen-spices",
    name: "Ayurgreen Spices",
    logo: "/images/portfolio/ayurgreen-spices/ayurgreen-logo.svg",
  },
  {
    id: "dsoft-institute",
    name: "DSoft Institute",
    logo: "/images/portfolio/dsoft-institute/dsoft-logo.svg",
  },
  {
    id: "travel-hope",
    name: "Travel Hope",
    logo: "/images/portfolio/travel-hope/travelhopelogo-dark.webp",
  },
];

interface InsightArticle {
  id: string;
  category: string;
  readTime: string;
  title: string;
  href: string;
}

const FEATURED_INSIGHT: InsightArticle & { image: string } = {
  id: "featured-1",
  category: "Blog",
  readTime: "9 mins read",
  title: "Best Programming Languages in 2026 for Future-Ready Development",
  image: "/images/insights/best-programming-languages-2026.webp",
  href: "/about",
};

const INSIGHTS_LIST: InsightArticle[] = [
  {
    id: "insight-1",
    category: "Blog",
    readTime: "8 mins read",
    title: "AI for Ecommerce: Driving the Next Digital Revolution",
    href: "/about",
  },
  {
    id: "insight-2",
    category: "Blog",
    readTime: "10 mins read",
    title: "The Rise of Quick Commerce: Key Benefits & Future Growth 2026",
    href: "/about",
  },
  {
    id: "insight-3",
    category: "Blog",
    readTime: "14 mins read",
    title: "Top 5 Tech Stacks: Choosing the Right One",
    href: "/about",
  },
];

const MENU_ITEMS: MenuItemData[] = [
  {
    id: "impact",
    label: "Impact",
    firstWord: "Our",
    secondWord: "Impact",
    desc: "Every innovation that happens here is out of a quest to get better at what we are already doing. We deliver ideas that make a difference, create experiences that transform lives, and build ecosystems that foster progress.",
    stats: [
      {
        value: "700+",
        label: "Projects launched successfully across the globe",
      },
      {
        value: "10M",
        label: "Daily customer engagement through our projects",
      },
      {
        value: "100+",
        label: "Digital transformation stories that made a difference",
      },
    ],
    ctaText: "Our Impact",
    href: "/about",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    firstWord: "Client",
    secondWord: "Stories",
    desc: "Hear directly from founders, enterprise directors, and industry leaders who scaled their businesses and transformed operations with Kaelixo's engineering.",
    stats: [
      {
        icon: <Star className="size-6 text-[#FF0055]" />,
        label: "Client satisfaction & retention rate across all deployments",
      },
      {
        icon: <Award className="size-6 text-[#FF0055]" />,
        label: "Average partner rating across global review platforms",
      },
      {
        icon: <Heart className="size-6 text-[#FF0055]" />,
        label: "Referral & repeat client engagements worldwide",
      },
    ],
    ctaText: "Client Stories",
    href: "/#testimonials",
  },
  {
    id: "clients",
    label: "Clients",
    firstWord: "Clients",
    secondWord: "",
    desc: "Our clients are everything to us; so are we to them. Clients we've turned into long-term partners",
    stats: [],
    ctaText: "View Portfolio",
    href: "/portfolio",
  },
  {
    id: "partnership",
    label: "Partnership",
    firstWord: "Collaboration for a",
    secondWord: "Better Tomorrow",
    desc: "Through our partnership programme, we invite organisations and professionals to collaborate with us in pursuit of a brighter tomorrow",
    stats: [],
    ctaText: "Explore partnership",
    href: "/contact",
  },
  {
    id: "insights",
    label: "Insights",
    firstWord: "Digital",
    secondWord: "Insights",
    desc: "In-depth perspectives, architecture breakdowns, design philosophies, and technological deep dives from our engineering and design teams.",
    stats: [],
    ctaText: "Explore all insights",
    href: "/about",
  },
  {
    id: "contact",
    label: "Contact",
    firstWord: "Get in",
    secondWord: "Touch",
    desc: "Have a challenge to solve or a platform to build? Reach out directly to our principal engineers and strategic team to start the conversation.",
    stats: [
      {
        icon: <Clock className="size-6 text-[#FF0055]" />,
        label: "Average consultation response time under 2 hours",
      },
      {
        icon: <MapPin className="size-6 text-[#FF0055]" />,
        label: "Principal development & innovation center in Kochi",
      },
      {
        icon: <Globe className="size-6 text-[#FF0055]" />,
        label: "Remote & on-site deployment capabilities worldwide",
      },
    ],
    ctaText: "Contact Us",
    href: "/contact",
  },
];

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [activeItemId, setActiveItemId] = useState<string>("impact");
  const [playingVideo, setPlayingVideo] = useState<TestimonialCard | null>(null);

  const handleNavigate = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();

    if (href.startsWith("/#") || href.startsWith("#")) {
      const hash = href.replace(/^\/?#/, "");
      if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
        const el = document.getElementById(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
          return;
        }
      }
    }
    router.push(href);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body & HTML scroll, pause Lenis smooth scroll, prevent wheel bleed, and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    // 1. Pause Lenis smooth scrolling so wheel events don't move the background virtual scroll
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();

    // 2. Lock both documentElement and body scrolling + overscroll bounce
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverscroll = document.documentElement.style.overscrollBehavior;
    const originalBodyOverscroll = document.body.style.overscrollBehavior;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overscrollBehavior = "none";

    // 3. Escape key to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      lenis?.start();
      document.documentElement.style.overflow = originalHtmlOverflow || "";
      document.body.style.overflow = originalBodyOverflow || "";
      document.documentElement.style.overscrollBehavior = originalHtmlOverscroll || "";
      document.body.style.overscrollBehavior = originalBodyOverscroll || "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const currentItem = MENU_ITEMS.find((m) => m.id === activeItemId) || MENU_ITEMS[0];

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          data-lenis-prevent="true"
          role="dialog"
          aria-modal="true"
          aria-label="Explore Kaelixo"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          style={{ backgroundColor: "#040407" }}
          className="fixed inset-0 z-[99999] h-[100dvh] w-screen bg-[#040407] text-white overflow-hidden select-none"
        >
          {/* React Bits WebGL GradientBlinds Background with #FF0052 Pink in Moody Darkness */}
          <div className="absolute inset-0 pointer-events-none z-0 w-full h-full overflow-hidden bg-[#040407]">
            <GradientBlinds
              gradientColors={["#FF0052", "#990031"]}
              angle={20}
              blindCount={16}
              blindMinWidth={60}
              spotlightRadius={0.48}
              shine={0.16}
              relief={0.55}
              glow={0.22}
              sway={0.3}
              hoverTilt={0.22}
              trackPointer={false}
              clickEffect="ripple"
              noise={0.06}
              spotlightSoftness={1.0}
              spotlightOpacity={1.0}
              shineDirection="left"
              lightColor="#b3003a"
              speed={1}
              perspective={0}
              gradientSpeed={0}
              distortAmount={0}
              mirrorGradient={false}
              mouseDampening={0.15}
              idle="drift"
              intro={false}
              lightMode={false}
              className="w-full h-full"
            />
          </div>

          {/* Gentle Ambient Darkness Overlay to match earlier darkness level */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] bg-black/20"
          />

          {/* Top Bar: Brand Logo on Left, Close Button on Right */}
          <div className="relative z-30 w-full max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 pt-7 sm:pt-9 flex items-center justify-between">
            {/* Kaelixo Brand Logo */}
            <Link
              href="/"
              onClick={(e) => handleNavigate(e, "/")}
              className="flex items-center gap-2 group transition-opacity hover:opacity-90"
            >
              <Image
                src="/images/brand/kaelixo-logo.webp"
                alt="Kaelixo Logo"
                width={140}
                height={38}
                priority
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>

            {/* Top-Right Close Button */}
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer group"
            >
              <X className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          {/* Main Content Area */}
          <div
            data-lenis-prevent="true"
            className="menu-scrollable relative z-20 h-[calc(100dvh-90px)] w-full max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 pb-10 sm:pb-14 flex flex-col justify-center overflow-y-auto lg:overflow-hidden"
          >
            {/* 2-Column Grid (Menu on Left, Divider in Center, Content on Right) */}
            <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
              
              {/* Left Column: Navigation List with Space Grotesk */}
              <div className="lg:col-span-4 flex flex-col items-start justify-center">
                <nav className="flex flex-col items-start space-y-3 sm:space-y-4">
                  {MENU_ITEMS.map((item) => {
                    const isActive = item.id === activeItemId;
                    return (
                      <div key={item.id} className="w-fit">
                        <button
                          type="button"
                          onClick={() => setActiveItemId(item.id)}
                          onMouseEnter={() => setActiveItemId(item.id)}
                          className={`w-fit text-left py-2 pr-6 inline-flex items-center gap-3.5 sm:gap-4 cursor-pointer group bg-transparent transition-all duration-200 ${
                            isActive ? "text-white" : "text-white/45 hover:text-white"
                          }`}
                        >
                          <span
                            className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center transition-all duration-200 ${
                              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                            }`}
                          >
                            <ArrowRight
                              className={`text-[#FF0055] transition-transform duration-300 ${
                                isActive
                                  ? "w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-1.5 drop-shadow-[0_0_12px_rgba(255,0,85,0.95)]"
                                  : "w-5 h-5"
                              }`}
                            />
                          </span>
                          <span
                            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                            className={`font-heading uppercase tracking-wider text-[22px] sm:text-[26px] lg:text-[28px] transition-colors select-none ${
                              isActive
                                ? "text-white drop-shadow-[0_0_15px_rgba(255,0,85,0.6)] font-semibold"
                                : "text-white/50 group-hover:text-white font-normal"
                            }`}
                          >
                            {item.label}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Center Crisp Vertical Divider Line (Desktop only, NO shadow) */}
              <div
                aria-hidden="true"
                className="hidden lg:block lg:col-span-1 h-[450px] w-px mx-auto bg-gradient-to-b from-transparent via-white/30 via-white/45 to-transparent"
              />

              {/* Right Column: Content Preview (Impact, Testimonials, Clients, Partnership, Insights, Contact) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    {currentItem.id === "testimonials" ? (
                      /* Enlarged Video Testimonials 2x3 Grid with Dummy Video Player */
                      <div className="flex flex-col">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-5 lg:gap-x-6 gap-y-4 sm:gap-y-6 max-w-[760px]">
                          {TESTIMONIAL_CARDS.map((card) => (
                            <div
                              key={card.id}
                              onClick={() => setPlayingVideo(card)}
                              className="flex flex-col group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                            >
                              {/* Enlarged Video Thumbnail with Play Button & Duration */}
                              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-white/[0.04] border border-white/10 group-hover:border-[#FF0055]/50 group-hover:shadow-[0_0_20px_rgba(255,0,85,0.25)] transition-all duration-300">
                                <Image
                                  src={card.thumbnail}
                                  alt={card.name}
                                  fill
                                  sizes="(max-width: 640px) 50vw, 260px"
                                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                                />

                                {/* Duration Badge in Top Right */}
                                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] sm:text-[11px] text-white/90 font-mono font-medium border border-white/10">
                                  {card.duration}
                                </div>

                                {/* Video Play Button at Bottom-Left with Glow Effect */}
                                <div className="absolute bottom-2.5 left-2.5 size-7 sm:size-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-115 group-hover:bg-[#FF0055] group-hover:border-[#FF0055] group-hover:shadow-[0_0_20px_rgba(255,0,85,0.8)]">
                                  <Play className="w-3.5 h-3.5 fill-white text-white translate-x-[0.5px]" />
                                </div>
                              </div>

                              {/* Card Text Info */}
                              <div className="mt-2.5 flex flex-col">
                                <span className="text-[#6D81D8] text-[11.5px] sm:text-[12.5px] font-semibold tracking-tight leading-tight line-clamp-1">
                                  {card.company}
                                </span>
                                <h4 className="text-white font-bold text-[13.5px] sm:text-[15px] leading-tight mt-0.5 group-hover:text-[#FF0055] transition-colors line-clamp-1">
                                  {card.name}
                                </h4>
                                <p className="text-white/60 text-[11px] sm:text-[12px] leading-snug mt-0.5 line-clamp-1">
                                  {card.role}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* View all testimonials CTA Button */}
                        <div className="mt-6 sm:mt-8">
                          <Link
                            href="/#testimonials"
                            onClick={(e) => handleNavigate(e, "/#testimonials")}
                            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                            className="inline-flex items-center gap-2.5 px-7 py-3 border border-white/35 text-white text-[13.5px] sm:text-[14.5px] font-medium tracking-wide hover:border-white hover:bg-white/10 transition-all duration-200 group"
                          >
                            <span>View all testimonials</span>
                            <span className="text-white/60 transition-transform duration-200 group-hover:translate-x-1">&gt;</span>
                          </Link>
                        </div>
                      </div>
                    ) : currentItem.id === "clients" ? (
                      /* Clients Logo Grid Layout matching user reference image */
                      <div className="flex flex-col">
                        {/* Heading: Pure clean 'Clients' */}
                        <h2 className="font-heading text-[44px] sm:text-[54px] lg:text-[62px] font-bold tracking-tight text-white leading-none">
                          Clients
                        </h2>

                        {/* Description */}
                        <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] text-white/75 font-light leading-relaxed max-w-[500px]">
                          {currentItem.desc}
                        </p>

                        {/* 3x4 Grid of 12 White Monochrome Client Logos from Portfolio Projects */}
                        <div className="mt-9 sm:mt-11 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-7 sm:gap-y-9 max-w-[680px] items-center">
                          {CLIENT_LOGOS.map((client) => (
                            <Link
                              key={client.id}
                              href="/portfolio"
                              onClick={(e) => handleNavigate(e, "/portfolio")}
                              className="h-10 sm:h-12 flex items-center justify-start group cursor-pointer transition-transform duration-300 hover:scale-105"
                            >
                              <Image
                                src={client.logo}
                                alt={client.name}
                                width={130}
                                height={44}
                                className="max-h-8 sm:max-h-9 w-auto object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : currentItem.id === "partnership" ? (
                      /* Partnership Layout matching user reference screenshot, WITHOUT bottom shape */
                      <div className="flex flex-col items-start">
                        {/* Heading: Two Lines */}
                        <h2 className="font-heading text-[38px] sm:text-[50px] lg:text-[58px] font-normal tracking-tight text-white leading-[1.14]">
                          Collaboration for a
                          <br />
                          Better Tomorrow
                        </h2>

                        {/* Description Paragraph */}
                        <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] text-white/75 font-light leading-relaxed max-w-[480px]">
                          {currentItem.desc}
                        </p>

                        {/* Explore partnership > Outline Button */}
                        <div className="mt-7 sm:mt-9">
                          <Link
                            href={currentItem.href}
                            onClick={(e) => handleNavigate(e, currentItem.href)}
                            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                            className="inline-flex items-center gap-3 px-6 sm:px-7 py-3 border border-white/40 text-white text-[13.5px] sm:text-[14.5px] font-medium tracking-wide hover:border-white hover:bg-white/10 transition-all duration-200 group"
                          >
                            <span>{currentItem.ctaText}</span>
                            <span className="text-white/70 transition-transform duration-200 group-hover:translate-x-1 text-[13px] font-mono">
                              &gt;
                            </span>
                          </Link>
                        </div>
                      </div>
                    ) : currentItem.id === "insights" ? (
                      /* Insights Layout matching user reference screenshot */
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-[760px] items-start">
                        {/* Left Column: Featured Blog Post with Thumbnail */}
                        <div className="flex flex-col group">
                          {/* Thumbnail */}
                          <Link
                            href={FEATURED_INSIGHT.href}
                            onClick={(e) => handleNavigate(e, FEATURED_INSIGHT.href)}
                            className="relative aspect-[16/10] w-full max-w-[340px] rounded-[2px] overflow-hidden bg-white/[0.04] border border-white/10 group-hover:border-[#FF0055]/40 transition-all duration-300"
                          >
                            <Image
                              src={FEATURED_INSIGHT.image}
                              alt={FEATURED_INSIGHT.title}
                              fill
                              sizes="(max-width: 640px) 100vw, 340px"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </Link>

                          {/* Meta: Category & Read Time */}
                          <div className="mt-4 flex items-center gap-3.5 text-[12px] sm:text-[13px]">
                            <span className="text-white/90 font-medium tracking-wide">
                              {FEATURED_INSIGHT.category}
                            </span>
                            <span className="text-white/45 font-normal">
                              {FEATURED_INSIGHT.readTime}
                            </span>
                          </div>

                          {/* Title */}
                          <Link
                            href={FEATURED_INSIGHT.href}
                            onClick={(e) => handleNavigate(e, FEATURED_INSIGHT.href)}
                            className="mt-2 text-white text-[15.5px] sm:text-[16.5px] font-medium leading-snug max-w-[330px] group-hover:text-[#FF0055] transition-colors"
                          >
                            {FEATURED_INSIGHT.title}
                          </Link>

                          {/* Explore -> link */}
                          <Link
                            href={FEATURED_INSIGHT.href}
                            onClick={(e) => handleNavigate(e, FEATURED_INSIGHT.href)}
                            className="mt-4 inline-flex items-center gap-1.5 text-white/75 hover:text-white text-[13px] font-medium transition-colors group/link"
                          >
                            <span>Explore</span>
                            <span className="text-white/60 transition-transform duration-200 group-hover/link:translate-x-1">
                              &rarr;
                            </span>
                          </Link>
                        </div>

                        {/* Right Column: 3 Text Blog Posts with Dividers & CTA */}
                        <div className="flex flex-col justify-between h-full max-w-[340px]">
                          <div className="flex flex-col">
                            {INSIGHTS_LIST.map((post) => (
                              <div key={post.id} className="flex flex-col group/post">
                                <Link
                                  href={post.href}
                                  onClick={(e) => handleNavigate(e, post.href)}
                                  className="flex flex-col text-left py-1"
                                >
                                  {/* Meta */}
                                  <div className="flex items-center gap-3.5 text-[12px] sm:text-[13px]">
                                    <span className="text-white/90 font-medium tracking-wide">
                                      {post.category}
                                    </span>
                                    <span className="text-white/45 font-normal">
                                      {post.readTime}
                                    </span>
                                  </div>

                                  {/* Title */}
                                  <h4 className="mt-2 text-white text-[14px] sm:text-[15px] font-medium leading-snug group-hover/post:text-[#FF0055] transition-colors">
                                    {post.title}
                                  </h4>
                                </Link>

                                {/* Divider line between posts */}
                                <div
                                  aria-hidden="true"
                                  className="w-full h-px bg-white/15 my-4 sm:my-4.5"
                                />
                              </div>
                            ))}
                          </div>

                          {/* Explore all insights > Button */}
                          <div className="mt-2 sm:mt-3">
                            <Link
                              href="/about"
                              onClick={(e) => handleNavigate(e, "/about")}
                              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                              className="inline-flex items-center gap-3 px-6 sm:px-7 py-3 border border-white/40 text-white text-[13px] sm:text-[14px] font-medium tracking-wide hover:border-white hover:bg-white/10 transition-all duration-200 group"
                            >
                              <span>Explore all insights</span>
                              <span className="text-white/70 transition-transform duration-200 group-hover:translate-x-1 text-[13px] font-mono">
                                &gt;
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Standard Layout (e.g. Impact, Clients, etc.) */
                      <>
                        {/* Main Heading: White word with bottom bar + Pink word */}
                        <h2 className="font-heading capitalize text-[46px] sm:text-[60px] lg:text-[68px] font- tracking-tight text-white leading-none">
                          <span className="relative inline-block text-white">
                            {currentItem.firstWord}
                          </span>{" "}
                          <span className="text-[#FF0055]">{currentItem.secondWord}</span>
                        </h2>

                        {/* Paragraph Description: exactly 16px */}
                        <p className="mt-7 sm:mt-9 text-[16px] text-white/85 font-light leading-relaxed max-w-[560px]">
                          {currentItem.desc}
                        </p>

                        {/* 3 Metric Cards with Vertical Dividers: description at exactly 16px */}
                        <div className="mt-10 sm:mt-12 flex flex-row items-center gap-4 sm:gap-6 lg:gap-8 max-w-[620px]">
                          {currentItem.stats.map((stat, idx) => (
                            <React.Fragment key={idx}>
                              <div className="flex-1 flex flex-col items-start min-w-0">
                                {stat.value ? (
                                  /* Large Metric Count Number */
                                  <div
                                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                                    className="font-heading text-[32px] sm:text-[38px] lg:text-[44px] text-white tracking-tight leading-none mb-3 sm:mb-3.5 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                  >
                                    {stat.value}
                                  </div>
                                ) : (
                                  /* Glowing Icon Container Box fallback if no value */
                                  <div className="size-12 sm:size-14 rounded-2xl bg-white/[0.04] border border-[#FF0055]/35 shadow-[0_0_20px_rgba(255,0,85,0.2)] flex items-center justify-center mb-3 sm:mb-4 shrink-0 transition-transform hover:scale-105">
                                    {stat.icon}
                                  </div>
                                )}
                                {/* Descriptive Text: 16px */}
                                <p className="text-[16px] text-white/80 font-normal leading-snug">
                                  {stat.label}
                                </p>
                              </div>

                              {/* Thin Vertical Divider between cards (Crisp, NO shadow) */}
                              {idx < currentItem.stats.length - 1 && (
                                <div
                                  aria-hidden="true"
                                  className="w-px h-16 sm:h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent shrink-0 self-center"
                                />
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        {/* Glowing Pill Outline CTA Button */}
                        <div className="mt-10 sm:mt-12">
                          <Link
                            href={currentItem.href}
                            onClick={(e) => handleNavigate(e, currentItem.href)}
                            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                            className="font-heading capitalize inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[#FF0055] text-white text-[15px] font-medium tracking-wide shadow-[0_0_25px_rgba(255,0,85,0.35)] hover:shadow-[0_0_35px_rgba(255,0,85,0.65)] hover:bg-[#FF0055]/15 transition-all duration-300 active:scale-95 group"
                          >
                            <span>{currentItem.ctaText}</span>
                            <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Interactive Video Testimonial Modal Popup with Dummy Video */}
          <AnimatePresence>
            {playingVideo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
                onClick={() => setPlayingVideo(null)}
              >
                <motion.div
                  initial={{ scale: 0.92, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.92, opacity: 0, y: 15 }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className="relative w-full max-w-[840px] bg-[#0c0c14] border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,0,85,0.35)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.03]">
                    <div className="flex flex-col">
                      <span className="text-[#6D81D8] text-[12px] sm:text-[13px] font-semibold tracking-wide">
                        {playingVideo.company}
                      </span>
                      <h3 className="text-white font-bold text-[16px] sm:text-[18px] leading-tight">
                        {playingVideo.name}{" "}
                        <span className="text-white/50 text-[13px] font-normal">
                          — {playingVideo.role}
                        </span>
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPlayingVideo(null)}
                      className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Dummy Video Player */}
                  <div className="relative aspect-video w-full bg-black">
                    <video
                      src={playingVideo.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
