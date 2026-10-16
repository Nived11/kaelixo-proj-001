"use client";

import React from 'react';
import { ArrowRight, Building2, GraduationCap, Activity, HeartPulse, Home, Newspaper, Briefcase, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import IndustryGlobe from '@/features/services/web-development/components/IndustryGlobe';

const topCardsLeft = [
  {
    title: "Travel &\nHospitality",
    desc: "Packages, offers and destination pages your team can add and change as seasons shift.",
    icon: Building2,
    colors: {
      outer: "bg-[#fff5f0]",
      inner: "bg-[#FF6B00]",
      shadow: "shadow-[0_2px_8px_rgba(255,107,0,0.25)]"
    },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Overseas\nEducation",
    desc: "Course, country and admissions pages that counsellors can update without technical help.",
    icon: GraduationCap,
    colors: {
      outer: "bg-[#ecfdf5]",
      inner: "bg-[#10B981]",
      shadow: "shadow-[0_2px_8px_rgba(16,185,129,0.25)]"
    },
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
  }
];

const topCardsRight = [
  {
    title: "Fitness &\nWellness",
    desc: "Plans, schedules and offers kept current by your own team, with no developer needed.",
    icon: Activity,
    colors: {
      outer: "bg-[#eef5ff]",
      inner: "bg-[#0066FF]",
      shadow: "shadow-[0_2px_8px_rgba(0,102,255,0.25)]"
    },
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Healthcare",
    desc: "Easy-to-update service pages, doctor profiles and announcements for clinics and hospitals.",
    icon: HeartPulse,
    colors: {
      outer: "bg-[#fff0f8]",
      inner: "bg-[#FF0055]",
      shadow: "shadow-[0_2px_8px_rgba(255,0,85,0.25)]"
    },
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
  }
];

const bottomCards = [
  {
    title: "Real Estate",
    desc: "Property listings and project pages managed in-house, as fast as your inventory changes.",
    icon: Home,
    colors: {
      outer: "bg-[#fff1f2]",
      inner: "bg-[#F43F5E]",
      shadow: "shadow-[0_2px_8px_rgba(244,63,94,0.25)]"
    },
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
  },
  {
    title: "Media &\nPublishing",
    desc: "Blogs, news and articles published quickly, with a clean structure for search.",
    icon: Newspaper,
    colors: {
      outer: "bg-[#f4f0ff]",
      inner: "bg-[#7C3AED]",
      shadow: "shadow-[0_2px_8px_rgba(124,58,237,0.25)]"
    },
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Startups &\nEnterprises",
    desc: "Content systems that start simple for a five-person team and scale across departments and cities.",
    icon: Briefcase,
    colors: {
      outer: "bg-[#f0f9ff]",
      inner: "bg-[#0284C7]",
      shadow: "shadow-[0_2px_8px_rgba(2,132,199,0.25)]"
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function CMSIndustries() {
  return (
    <section className="py-16 sm:py-20 lg:py-20 xl:py-24 bg-[#f4f6f9] relative overflow-hidden">

      {/* Decorative top corner shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-slate-200/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/50 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-[800px] mx-auto mb-8"
        >
          <div className="flex justify-center items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#FF0055]" />
            <span className="text-gray-700 font-bold text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] tracking-[0.25em] uppercase">
              INDUSTRY SOLUTIONS
            </span>
            <div className="w-8 h-[2px] bg-[#FF0055]" />
          </div>

          <h2 className="text-[#05050A] text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-extrabold leading-[1.05] tracking-tight mb-3 font-heading">
            Industries We Build <br />
            <span className="text-[#FF0055]">CMS Websites For</span>
          </h2>

          <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[1.6] max-w-[700px] mx-auto">
            Every industry publishes differently, so the content system behind it should follow that rhythm, not force a new one.
          </p>
        </motion.div>

        {/* Top Section: 3-Column Layout on xl, 4 Cards with Globe in center */}
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 items-center w-full mb-4 lg:mb-5 xl:mb-6">

          {/* Top Left Cards */}
          <div className="order-1 xl:order-1 grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-col gap-4 lg:gap-5 w-full">
            {topCardsLeft.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <IndustryCard {...card} />
              </motion.div>
            ))}
          </div>

          {/* Top Right Cards */}
          <div className="order-2 xl:order-3 grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-col gap-4 lg:gap-5 w-full">
            {topCardsRight.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <IndustryCard {...card} />
              </motion.div>
            ))}
          </div>

          {/* Center Globe */}
          <div
            className="order-3 xl:order-2 relative flex items-center justify-center w-full min-h-[220px] md:min-h-[260px] xl:min-h-0 py-2 xl:py-0 my-3 md:my-4 xl:my-0"
          >
            <IndustryGlobe />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-white text-[12px] lg:text-[14px] font-bold tracking-[0.2em] uppercase text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                INDUSTRIES<br />WE EMPOWER
              </span>
              <div className="w-8 h-[2px] bg-[#FF0055] mt-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
            </div>
          </div>

        </div>

        {/* Bottom Row Cards: 3 Columns on xl, 2 Columns on tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 w-full">
          {bottomCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`w-full ${idx === 2 ? 'sm:col-span-2 sm:max-w-[calc(50%-8px)] lg:max-w-[calc(50%-10px)] xl:max-w-none sm:mx-auto xl:col-span-1' : ''}`}
            >
              <IndustryCard {...card} />
            </motion.div>
          ))}
        </div>

        {/* Action Button & Footer Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full mt-10 lg:mt-12 flex flex-col items-center relative"
        >
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -z-10" />

          <a href="#contact" className="group bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-[14px] sm:text-[16px] transition-all duration-300 flex items-center gap-2.5 sm:gap-3 hover:-translate-y-1 shadow-[0_4px_16px_rgba(255,0,85,0.2)] whitespace-nowrap">
            Build Industry Solution
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

function IndustryCard({ 
  title, 
  desc, 
  icon: Icon, 
  colors, 
  image 
}: { 
  title: string; 
  desc: string; 
  icon: LucideIcon; 
  colors: { outer: string; inner: string; shadow: string }; 
  image: string; 
}) {
  return (
    <div className="bg-white rounded-[16px] lg:rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100/50 hover:border-[#FF0055]/30 overflow-hidden flex items-stretch group hover:shadow-[0_15px_40px_rgba(255,0,85,0.07)] transition-all duration-300 min-h-[155px] sm:min-h-[160px] md:min-h-[165px] lg:min-h-[175px] xl:min-h-[185px] w-full">

      {/* Left Image */}
      <div className="w-[35%] sm:w-[36%] lg:w-[35%] xl:w-[36%] shrink-0 relative overflow-hidden bg-slate-100">
        <img
          src={image.replace(/w=\d+/, "w=480").replace("q=80", "q=75")} loading="lazy" decoding="async"
          alt={title.replace('\n', ' ')}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 p-3.5 sm:p-4 lg:p-4 flex flex-col justify-start relative min-w-0 pb-8">
        <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 lg:mb-2">
          <div className={`flex size-[36px] sm:size-[38px] lg:size-[42px] shrink-0 items-center justify-center rounded-[11px] sm:rounded-[12px] lg:rounded-[13px] ${colors.outer}`}>
            <div className={`flex size-[24px] sm:size-[25px] lg:size-[28px] items-center justify-center rounded-[7px] sm:rounded-[8px] lg:rounded-[9px] ${colors.inner} text-white ${colors.shadow}`}>
              <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white" strokeWidth={2.2} />
            </div>
          </div>
          <h4 className="text-[#05050A] font-bold text-[15px] sm:text-[15px] lg:text-[16px] xl:text-[17px] leading-tight whitespace-pre-line">
            {title}
          </h4>
        </div>
        <p className="text-gray-700 text-[13.5px] sm:text-[14px] lg:text-[14px] xl:text-[15px] leading-[1.4] pr-7">
          {desc}
        </p>

        {/* Arrow Button */}
        <div className={`absolute bottom-2.5 right-2.5 lg:bottom-3 lg:right-3 flex size-[30px] sm:size-[32px] lg:size-[34px] items-center justify-center rounded-full ${colors.outer} group-hover:scale-110 transition-all duration-300`}>
          <div className={`flex size-[20px] sm:size-[22px] lg:size-[24px] items-center justify-center rounded-full ${colors.inner} text-white ${colors.shadow}`}>
            <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" strokeWidth={2.4} />
          </div>
        </div>
      </div>
    </div>
  );
}
