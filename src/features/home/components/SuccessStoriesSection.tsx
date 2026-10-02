"use client";

import React from "react";
import { ArrowRight, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SuccessStoriesSection() {
  const cases = [
    {
      id: 1,
      category: "MEDIA & CONTENT",
      image: "/images/home/stories1.avif",
      title: "Media Platform",
      desc: "AI-powered recommendation engine that increased user engagement and content discovery.",
      stat: "+40%",
      statLabel: "Engagement"
    },
    {
      id: 2,
      category: "RETAIL & ECOMMERCE",
      image: "/images/home/stories2.avif",
      title: "Retail Growth Brand",
      desc: "A unified CRM and automation system that reduced support tickets and improved customer satisfaction.",
      stat: "-60%",
      statLabel: "Support Tickets"
    },
    {
      id: 3,
      category: "DATA & ANALYTICS",
      image: "/images/home/stories3.avif",
      title: "Enterprise Analytics",
      desc: "A data analytics platform for faster, smarter decisions across global teams.",
      stat: "3x",
      statLabel: "Faster Insights"
    }
  ];

  return (
    <section className="relative bg-[#FAFBFF] py-16 lg:py-20 overflow-hidden font-sans">

      {/* Soft Background Gradients */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-200/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[5%] -right-[5%] w-[40%] h-[60%] bg-pink-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8 lg:gap-4 xl:gap-8 mb-12 sm:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#FF0055] font-bold text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] tracking-widest uppercase">
                REAL RESULTS
              </span>
              <div className="w-10 h-[2px] bg-[#FF0055]"></div>
            </div>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-extrabold text-[#020205] leading-[1.1] tracking-tight lg:whitespace-nowrap xl:whitespace-normal">
              Success Stories
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-center lg:items-center justify-between lg:justify-end gap-5 md:gap-8 lg:gap-5 xl:gap-4 w-full lg:w-auto">
            <p className="text-slate-700 text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-[400px] lg:max-w-none lg:w-max">
              A growth marketing agency<br className="hidden lg:block" /> that delivers real, lasting growth.
            </p>
            <a href="#" className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-5 md:py-2.5 lg:px-4 lg:py-2.5 xl:px-6 xl:py-3 rounded-full border border-[#FF0055]/20 text-[#FF0055] font-bold text-[13px] sm:text-[14px] lg:text-[15px] flex items-center justify-center gap-2 hover:bg-[#FF0055]/5 transition-all shrink-0">
              See All Case Studies <ArrowRight className="w-4 h-4 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
            </a>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-4 xl:gap-8 mb-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
              className={`bg-white rounded-[20px] sm:rounded-2xl border border-slate-100 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 group flex flex-col relative ${
                index === 2 ? 'md:col-span-2 md:w-[calc(50%-16px)] md:mx-auto lg:col-span-1 lg:w-full lg:mx-0' : ''
              }`}
            >
              {/* Subtle Animated Top Line */}
              <div className="absolute top-0 left-0 w-[200%] h-[3px] bg-gradient-to-r from-transparent via-[#FF0055] to-transparent -translate-x-[100%] group-hover:animate-[sweep_2s_ease-in-out_infinite] z-20" />
              <style>{`
                @keyframes sweep {
                  0% { transform: translateX(-100%); }
                  50% { transform: translateX(50%); }
                  100% { transform: translateX(-100%); }
                }
              `}</style>
              {/* Image Header */}
              <div className="relative h-[160px] sm:h-[220px] md:h-[180px] lg:h-[180px] xl:h-[220px] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-sm px-2.5 sm:px-3 lg:px-2 xl:px-3 py-1 sm:py-1.5 lg:py-1 xl:py-1.5 rounded-full shadow-sm flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-[10px] sm:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] [@media(min-width:1920px)]:text-[15px] tracking-wider uppercase leading-none mt-[1px]">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), type: "spring", bounce: 0.25 }}
                style={{ willChange: "transform, opacity" }}
                className="relative -mt-6 sm:-mt-8 md:-mt-6 lg:-mt-6 xl:-mt-8 p-5 sm:p-6 md:p-5 lg:p-4 xl:p-6 bg-white rounded-t-2xl sm:rounded-t-3xl md:rounded-t-2xl lg:rounded-t-2xl xl:rounded-t-3xl flex flex-col flex-1 z-10"
              >
                <h3 className="text-[#020205] text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] font-extrabold mb-1.5 sm:mb-2 md:mb-1.5 lg:mb-1.5 xl:mb-2 group-hover:text-[#FF0055] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-relaxed mb-5 sm:mb-6 md:mb-4 lg:mb-4 xl:mb-6 flex-1">
                  {item.desc}
                </p>

                {/* Footer Stats & Link */}
                <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 mt-auto pt-2 border-t border-slate-50">
                  <div className="flex items-baseline gap-1.5 shrink-0">
                    <span className="text-[#FF0055] text-[24px] sm:text-[28px] lg:text-[28px] xl:text-[32px] font-extrabold tracking-tight">
                      {item.stat}
                    </span>
                    <span className="text-slate-500 text-[12px] sm:text-[13px] lg:text-[13px] xl:text-[14px] font-medium whitespace-nowrap">
                      {item.statLabel}
                    </span>
                  </div>
                  <a href="#" className="text-[#FF0055] font-bold text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[14px] flex items-center justify-end gap-1 group-hover:gap-2 transition-all whitespace-nowrap shrink-0">
                    Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="relative w-full rounded-[16px] sm:rounded-[24px] md:rounded-[20px] lg:rounded-[20px] xl:rounded-[24px] bg-white border border-slate-100 p-4 sm:p-5 md:p-4 lg:p-4 xl:p-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] z-10 overflow-hidden">

          <div className="flex items-center gap-4 sm:gap-6 md:gap-4 lg:gap-4 xl:gap-6 z-10 w-full md:w-auto">
            <div className="w-10 sm:w-12 md:w-10 lg:w-10 xl:w-12 h-10 sm:h-12 md:h-10 lg:h-10 xl:h-12 shrink-0 rounded-lg bg-[#FF0055]/10 flex items-center justify-center">
              <BarChart2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-[#FF0055]" />
            </div>
            <div>
              <p className="text-[#020205] text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] font-semibold leading-tight">
                More success stories are on the way.
              </p>
              <p className="text-[#020205] text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[20px] font-extrabold leading-tight mt-0.5 sm:mt-1">
                Let's create yours.
              </p>
            </div>
          </div>

          <div className="flex items-center z-10 w-full md:w-auto mt-2 md:mt-0">
            <button className="group w-full md:w-auto px-5 py-2.5 sm:px-6 sm:py-3 md:px-5 md:py-2.5 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-full bg-gradient-to-r from-[#CC0044] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white font-medium tracking-wide text-[13px] sm:text-[14px] lg:text-[15px] flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-300 active:scale-95 cursor-pointer">
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Subtle decoration inside banner */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
