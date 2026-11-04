"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  CheckCircle2,
  Briefcase,
  Calendar,
  Users,
  BarChart3,
  BookOpen,
  Video,
  Award,
  TrendingUp,
  Bot,
  Zap,
  Layers,
  Sliders,
  Send,
  CalendarCheck,
  GraduationCap,
  Play,
  Compass,
} from "lucide-react";

function RobotAvatar({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" y1="2" x2="12" y2="6" />
      <circle cx="12" cy="1.8" r="0.8" fill="currentColor" />
      <rect x="4.5" y="6" width="15" height="13" rx="3.5" />
      <line x1="2" y1="12.5" x2="4.5" y2="12.5" />
      <line x1="19.5" y1="12.5" x2="22" y2="12.5" />
      <circle cx="9" cy="12.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function ProductSuiteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      id="products-list"
      ref={sectionRef}
      className="relative z-20 w-full bg-[#f8fafc] pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 text-[#07080c] border-t border-slate-100"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* ============================================================ */}
        {/* SECTION HEADER WITH TITLE                                    */}
        {/* ============================================================ */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5">
              <span className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-bold text-[#FF0055] tracking-[0.22em] uppercase font-heading">
                OUR PRODUCTS
              </span>
              <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
            </div>

            {/* Headline */}
             <h2 className="text-[#020205] m-0 font-sans text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.16] tracking-[-1.3px] mb-4">
              Explore the Kaelixo{" "}
              <span className="text-[#FF0055]">Product Suite</span>
            </h2>

             <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] mb-8 max-w-[480px]">
              Most web development companies start building right away. As a Web Development Company, we start by thinking it through — who this brand is, and who they're really speaking to. 
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PRODUCT 1: WAY WE GO (TRAVEL CRM)                            */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/80 shadow-[0_12px_44px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_56px_rgba(0,0,0,0.07)] mb-10 sm:mb-14"
        >
          {/* Upper Section: Content + Laptop + Blended Mountain Scenery (Both Left & Right Bottom Rounded) */}
          <div className="relative rounded-b-[24px] sm:rounded-b-[32px] overflow-hidden p-6 sm:p-8 lg:p-10 xl:p-12 pb-6 sm:pb-8 lg:pb-10">
            {/* Right Blended Mountain Scenery Background */}
            <div
              className="absolute top-0 right-0 w-full lg:w-[58%] xl:w-[52%] h-full pointer-events-none overflow-hidden select-none z-0 rounded-tr-[28px] sm:rounded-tr-[36px] rounded-br-[24px] sm:rounded-br-[32px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, transparent 15%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,1) 80%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, transparent 15%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,1) 80%)",
              }}
            >
              <div className="relative w-full h-full rounded-tr-[28px] sm:rounded-tr-[36px] rounded-br-[24px] sm:rounded-br-[32px] overflow-hidden">
                <Image
                  src="/images/products/productcrmbg-clean.webp"
                  alt="Mountain Landscape Background"
                  fill
                  className="object-cover object-right rounded-tr-[28px] sm:rounded-tr-[36px] rounded-br-[24px] sm:rounded-br-[32px]"
                  priority
                />
              </div>
            </div>

            {/* Left Bottom Rounded Corner Transition (Symmetrical with right) */}
            <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 pointer-events-none z-20 overflow-hidden">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0,0 A 32,32 0 0,0 32,32 L 0,32 Z"
                  fill="#F8FAFC"
                />
                <path
                  d="M 0,0 A 32,32 0 0,0 32,32"
                  stroke="#E2E8F0"
                  strokeOpacity="0.6"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Right Bottom Rounded Corner Transition */}
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 pointer-events-none z-20 overflow-hidden">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 32,0 A 32,32 0 0,1 0,32 L 32,32 Z"
                  fill="#F8FAFC"
                />
                <path
                  d="M 32,0 A 32,32 0 0,1 0,32"
                  stroke="#E2E8F0"
                  strokeOpacity="0.6"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Top Badges Row */}
            <div className="relative z-10 flex items-center justify-between gap-3 mb-6 sm:mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-pink-50/80 border border-pink-200/80 text-[12px] sm:text-[13px] font-bold text-[#FF0055] tracking-wider uppercase font-heading shadow-xs">
                TRAVEL CRM
              </span>
            </div>

            {/* Main 2-Column: Content (Left) & Product Mockup (Right) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
              {/* Left: Product Info */}
              <div className="lg:col-span-6 flex flex-col items-start">
                {/* Product Logo / Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#80002A] to-[#FF0055] text-white flex items-center justify-center shadow-xs">
                    <Compass className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="font-heading font-black text-[22px] sm:text-[25px] text-[#0A1024]">
                    Way We Go
                  </h3>
                </div>

                {/* Headline */}
                <h4 className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#0A1024] font-heading leading-tight mt-4">
                  A Complete CRM for <br />
                  <span className="text-[#FF0055]">Travel Businesses.</span>
                </h4>

                {/* Description */}
                <p className="text-slate-600 font-sans text-[14px] sm:text-[15px] leading-relaxed mt-3 max-w-xl">
                  Way We Go is our travel CRM, built to help travel agencies, tour operators
                  and travel teams manage leads, bookings, customers and operations — all in one place.
                </p>

                {/* 2-Column Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-6 w-full max-w-xl">
                  {[
                    "Lead & enquiry management",
                    "Booking & trip management",
                    "Customer & agent management",
                    "Itinerary & quotation",
                    "Sales & revenue reports",
                    "Team & role access control",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[13px] sm:text-[13.5px] text-slate-700 font-medium font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#FF0055] shrink-0 fill-pink-50" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex flex-wrap items-center gap-3.5 mt-8">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white text-[14px] font-semibold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer font-heading"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </a>
                </div>
              </div>

              {/* Right: Mockup Laptop Image (Over blended mountain scenery, no boxed div) */}
              <div className="lg:col-span-6 relative z-10 flex items-end justify-center lg:justify-start self-end pt-4 lg:pt-8">
                <div className="relative w-full max-w-[600px] xl:max-w-[660px] lg:-ml-6 xl:-ml-10">
                  <Image
                    src="/images/products/productcrmlap.png"
                    alt="Way We Go Travel CRM Dashboard Laptop Mockup"
                    width={1024}
                    height={598}
                    className="w-full h-auto object-contain drop-shadow-[0_22px_44px_rgba(0,0,0,0.32)] select-none pointer-events-none"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4 Feature Items Strip (Inside the same card, nerathethe pole thanne) */}
          <div className="relative z-10 px-6 sm:px-8 lg:px-10 xl:px-12 py-6 sm:py-7 border-t border-slate-100 bg-slate-50/70">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {[
                {
                  icon: <Briefcase className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Manage Enquiries",
                  desc: "Capture and track leads from multiple channels.",
                },
                {
                  icon: <Calendar className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Bookings & Itineraries",
                  desc: "Create, manage and share trip itineraries.",
                },
                {
                  icon: <Users className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Customer Management",
                  desc: "Maintain customer history and communication.",
                },
                {
                  icon: <BarChart3 className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Business Reports",
                  desc: "Track sales, revenue and team performance.",
                },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {f.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0A1024] font-heading text-[14px] leading-snug">
                      {f.title}
                    </h5>
                    <p className="text-slate-500 font-sans text-[12.5px] leading-relaxed mt-0.5">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* PRODUCT 2: EDULOOM (LEARNING PLATFORM) - REVERSED LAYOUT     */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#FAF5FF] via-[#F8EEFE] to-[#F3E8FF] border border-[#E9D5FF] shadow-[0_12px_44px_rgba(147,51,234,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_56px_rgba(147,51,234,0.09)] mb-10 sm:mb-14"
        >
          {/* Upper Section: Mockup (Left) + Content (Right) */}
          <div className="relative rounded-b-[24px] sm:rounded-b-[32px] overflow-hidden p-6 sm:p-8 lg:p-10 xl:p-12 pb-6 sm:pb-8 lg:pb-10">
            {/* Left Subtle Ambient Glow for Laptop */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[380px] sm:w-[480px] h-[380px] bg-[#E9D5FF]/30 blur-[90px] rounded-full pointer-events-none z-0" />

            {/* Left Bottom Rounded Corner Transition */}
            <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 pointer-events-none z-20 overflow-hidden">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0,0 A 32,32 0 0,0 32,32 L 0,32 Z"
                  fill="rgba(255, 255, 255, 0.4)"
                />
                <path
                  d="M 0,0 A 32,32 0 0,0 32,32"
                  stroke="#E9D5FF"
                  strokeOpacity="0.45"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Right Bottom Rounded Corner Transition */}
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 pointer-events-none z-20 overflow-hidden">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 32,0 A 32,32 0 0,1 0,32 L 32,32 Z"
                  fill="rgba(255, 255, 255, 0.4)"
                />
                <path
                  d="M 32,0 A 32,32 0 0,1 0,32"
                  stroke="#E9D5FF"
                  strokeOpacity="0.45"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Main 2-Column: Product Mockup (Left) & Content (Right) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
              {/* Left on desktop: Mockup Image */}
              <div className="lg:col-span-6 relative z-10 flex items-center justify-center lg:justify-start py-2 lg:py-0 order-2 lg:order-1">
                <div className="relative w-full max-w-[540px] xl:max-w-[580px]">
                  <Image
                    src="/images/products/producteduloombg.png"
                    alt="EduLoom Learning Platform Dashboard Laptop Mockup"
                    width={1024}
                    height={818}
                    className="w-full h-auto object-contain select-none pointer-events-none"
                    priority
                  />
                </div>
              </div>

              {/* Right on desktop: Product Info */}
              <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
                {/* Top Badge */}
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 border border-[#E9D5FF] text-[12px] sm:text-[13px] font-bold text-[#FF0055] tracking-wider uppercase font-heading shadow-xs">
                    LEARNING PLATFORM
                  </span>
                </div>

                {/* Product Logo / Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#4C1D95] via-[#6B21A8] to-[#9333EA] text-white flex items-center justify-center shadow-xs">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="font-heading font-black text-[22px] sm:text-[25px] text-[#0A1024]">
                    EduLoom
                  </h3>
                </div>

                {/* Headline */}
                <h4 className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#0A1024] font-heading leading-tight mt-4">
                  A Modern Learning Platform <br />
                  for the <span className="text-[#FF0055]">Next Generation.</span>
                </h4>

                {/* Description */}
                <p className="text-slate-600 font-sans text-[14px] sm:text-[15px] leading-relaxed mt-3 max-w-xl">
                  EduLoom is a flexible and intuitive learning platform that empowers educators,
                  institutions and learners with technology, and transforms learning experiences — seamlessly.
                </p>

                {/* 2-Column Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-6 w-full max-w-xl">
                  {[
                    "Create & manage courses",
                    "Student progress tracking",
                    "Live & recorded classes",
                    "Multi-role access (Admin, Teacher, Student)",
                    "Assessments & certifications",
                    "Reports & analytics",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[13px] sm:text-[13.5px] text-slate-700 font-medium font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#FF0055] shrink-0 fill-pink-50" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 mt-8">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white text-[14px] font-semibold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer font-heading"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </a>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-consultation-modal', { detail: { type: 'demo' } }))}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-pink-300 text-slate-800 hover:text-[#FF0055] text-[14px] font-semibold transition-all duration-300 cursor-pointer font-sans shadow-xs active:scale-95"
                  >
                    <CalendarCheck className="w-4 h-4 text-[#FF0055]" />
                    <span>Request a Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4 Feature Items Strip */}
          <div className="relative z-10 px-6 sm:px-8 lg:px-10 xl:px-12 py-6 sm:py-7 border-t border-[#E9D5FF]/40 bg-white/40 backdrop-blur-[2px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {[
                {
                  icon: <BookOpen className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Course Management",
                  desc: "Build, organize and publish courses with ease.",
                },
                {
                  icon: <Video className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Online Learning",
                  desc: "Conduct live classes and recorded sessions.",
                },
                {
                  icon: <Award className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Assessments",
                  desc: "Create quizzes, tests and certifications.",
                },
                {
                  icon: <TrendingUp className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Learner Analytics",
                  desc: "Track performance and learning outcomes.",
                },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/90 border border-[#E9D5FF]/80 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {f.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0A1024] font-heading text-[14px] leading-snug">
                      {f.title}
                    </h5>
                    <p className="text-slate-500 font-sans text-[12.5px] leading-relaxed mt-0.5">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* PRODUCT 3: AI CHAT BOT (AI BUSINESS ASSISTANT)               */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#FFF5F8] via-[#FFF1F6] to-[#FFEAF2] border border-[#FFD8E6] shadow-[0_12px_44px_rgba(255,0,85,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_56px_rgba(255,0,85,0.09)]"
        >
          {/* Upper Section: Content (Left) + Chatbot Mockup (Right) */}
          <div className="relative rounded-b-[24px] sm:rounded-b-[32px] overflow-hidden p-6 sm:p-8 lg:p-10 xl:p-12 pb-6 sm:pb-8 lg:pb-10">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[420px] sm:w-[520px] h-[420px] bg-[#FF0055]/10 blur-[100px] rounded-full pointer-events-none z-0" />

            {/* Left Bottom Rounded Corner Transition */}
            <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 pointer-events-none z-20 overflow-hidden">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0,0 A 32,32 0 0,0 32,32 L 0,32 Z"
                  fill="rgba(255, 255, 255, 0.4)"
                />
                <path
                  d="M 0,0 A 32,32 0 0,0 32,32"
                  stroke="#FFD8E6"
                  strokeOpacity="0.45"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Right Bottom Rounded Corner Transition */}
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 pointer-events-none z-20 overflow-hidden">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 32,0 A 32,32 0 0,1 0,32 L 32,32 Z"
                  fill="rgba(255, 255, 255, 0.4)"
                />
                <path
                  d="M 32,0 A 32,32 0 0,1 0,32"
                  stroke="#FFD8E6"
                  strokeOpacity="0.45"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Main 2-Column: Content (Left) & Chatbot Mockup (Right) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
              {/* Left on desktop: Product Info */}
              <div className="lg:col-span-6 flex flex-col items-start">
                {/* Top Badge */}
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 border border-[#FFD8E6] text-[12px] sm:text-[13px] font-bold text-[#FF0055] tracking-wider uppercase font-heading shadow-xs">
                    AI BUSINESS ASSISTANT
                  </span>
                </div>

                {/* Product Logo / Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#80002A] to-[#FF0055] text-white flex items-center justify-center shadow-xs">
                    <RobotAvatar className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="font-heading font-black text-[22px] sm:text-[25px] text-[#0A1024]">
                    AI Chat Bot
                  </h3>
                </div>

                {/* Headline */}
                <h4 className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#0A1024] font-heading leading-tight mt-4">
                  Your 24/7 Intelligent <br />
                  <span className="text-[#FF0055]">Business Assistant.</span>
                </h4>

                {/* Description */}
                <p className="text-slate-600 font-sans text-[14px] sm:text-[15px] leading-relaxed mt-3 max-w-xl">
                  An AI-powered chatbot that handles customer queries, automates support,
                  captures leads and delivers instant, accurate responses across your digital channels.
                </p>

                {/* 2-Column Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-6 w-full max-w-xl">
                  {[
                    "Instant & accurate responses",
                    "Works across web & WhatsApp",
                    "Automated customer support",
                    "Custom knowledge base (FAQs, docs)",
                    "Lead capture & qualification",
                    "Human handoff (when needed)",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[13px] sm:text-[13.5px] text-slate-700 font-medium font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#FF0055] shrink-0 fill-pink-50" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 mt-8">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white text-[14px] font-semibold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer font-heading"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </a>
                </div>
              </div>

              {/* Right on desktop: Realistic Chatbot Mockup Widget */}
              <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end py-4 lg:py-0">
                <div className="relative w-full max-w-[440px] xl:max-w-[460px]">
                  {/* Chat Window Frame */}
                  <div className="w-full rounded-[26px] sm:rounded-[30px] overflow-hidden border border-white/90 shadow-[0_20px_50px_rgba(255,0,85,0.08)] bg-white flex flex-col">
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-[#6B0F43] via-[#7F1451] to-[#600A3A] px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        {/* Glowing Pink Header Avatar (As in uploaded image 4) */}
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#FF0066] to-[#E6004C] flex items-center justify-center text-white shadow-[0_0_14px_rgba(255,0,85,0.55)] border border-white/30 shrink-0">
                          <RobotAvatar className="w-5 h-5 text-white stroke-[2.2]" />
                        </div>
                        <div>
                          <h6 className="font-heading font-bold text-xs sm:text-sm leading-tight text-white">
                            Kaelixo AI Assistant
                          </h6>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-[11px] text-pink-200/90 font-sans">Online</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages Body */}
                    <div className="p-4 sm:p-5 flex flex-col gap-3 font-sans text-xs sm:text-[13px] bg-[#FAF8FA]">
                      {/* Bot Message 1 */}
                      <div className="flex items-start gap-2 self-start max-w-[90%]">
                        <div className="w-6 h-6 rounded-full bg-pink-100 border border-pink-200 text-[#FF0055] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <RobotAvatar className="w-3.5 h-3.5 stroke-[2.2]" />
                        </div>
                        <div className="rounded-2xl rounded-tl-xs bg-white p-3 border border-slate-200/70 shadow-xs text-slate-800 leading-relaxed">
                          Hi! How can I help you today?
                        </div>
                      </div>

                      {/* User Message */}
                      <div className="self-end max-w-[85%] rounded-2xl rounded-tr-xs bg-gradient-to-r from-[#80002A] to-[#FF0055] p-3 text-white shadow-xs leading-relaxed text-right">
                        Can you help me with a travel package to Ooty for 3 days?
                      </div>

                      {/* Bot Message 2 */}
                      <div className="flex items-start gap-2 self-start max-w-[90%]">
                        <div className="w-6 h-6 rounded-full bg-pink-100 border border-pink-200 text-[#FF0055] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <RobotAvatar className="w-3.5 h-3.5 stroke-[2.2]" />
                        </div>
                        <div className="rounded-2xl rounded-tl-xs bg-white p-3 border border-slate-200/70 shadow-xs text-slate-800 leading-relaxed">
                          Sure! I can help with that. Here are a few Ooty packages for you. Would you like to see the details?
                        </div>
                      </div>

                      {/* Quick Action Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1 pl-8">
                        {["View Packages", "Customize Trip", "Talk to Agent"].map((chip, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:text-[#FF0055] hover:border-pink-300 text-[11px] sm:text-[11.5px] font-medium shadow-2xs cursor-pointer transition-colors"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Chat Input Bar */}
                    <div className="p-3 sm:p-3.5 bg-white border-t border-slate-100 flex items-center gap-2.5">
                      <input
                        type="text"
                        disabled
                        placeholder="Type a message..."
                        className="flex-1 px-3.5 py-2 text-xs sm:text-[13px] bg-slate-50/80 rounded-xl border border-slate-200/80 text-slate-500 focus:outline-none"
                      />
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] flex items-center justify-center text-white shrink-0 shadow-xs hover:scale-105 transition-transform cursor-pointer">
                        <Send className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4 Feature Items Strip */}
          <div className="relative z-10 px-6 sm:px-8 lg:px-10 xl:px-12 py-6 sm:py-7 border-t border-[#FFD8E6]/50 bg-white/40 backdrop-blur-[2px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {[
                {
                  icon: <Zap className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Automate Support",
                  desc: "Handle common queries instantly.",
                },
                {
                  icon: <Layers className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Capture Leads",
                  desc: "Collect and qualify potential customers.",
                },
                {
                  icon: <Globe className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Multi-Channel",
                  desc: "Works on web, WhatsApp and other platforms.",
                },
                {
                  icon: <Sliders className="w-4.5 h-4.5 text-[#FF0055]" />,
                  title: "Customizable",
                  desc: "Train with your business data and FAQs.",
                },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/90 border border-[#FFD8E6] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {f.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0A1024] font-heading text-[14px] leading-snug">
                      {f.title}
                    </h5>
                    <p className="text-slate-500 font-sans text-[12.5px] leading-relaxed mt-0.5">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

