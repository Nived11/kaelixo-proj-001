"use client";
import { ReplayDiv } from "@/components/ui/ReplayReveal";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function RatingsSection() {
  const ratings = [
    {
      name: "GoodFirms",
      rating: "4.9 Rating",
      logo: (
        <div className="flex items-center gap-1.5">
          <div className="bg-[#1D65D6] w-[26px] h-[26px] flex items-center justify-center rounded-[4px] text-white font-bold text-[18px] leading-none">
            G
          </div>
          <span className="text-[#1D65D6] font-bold text-[22px] tracking-tight">GoodFirms</span>
        </div>
      ),
    },
    {
      name: "Google",
      rating: "4.8 Rating",
      logo: (
        <div className="flex items-center gap-[1px] font-bold text-[24px] tracking-tighter font-sans">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </div>
      ),
    },
    {
      name: "Trustpilot",
      rating: "4.9 Rating",
      logo: (
        <div className="flex items-center gap-1.5">
          <Star className="w-6 h-6 fill-[#00B67A] text-[#00B67A]" />
          <span className="text-gray-900 font-bold text-[24px] tracking-tight">Trustpilot</span>
        </div>
      ),
    },
    {
      name: "Clutch",
      rating: "4.9 Rating",
      logo: (
        <div className="flex items-center font-bold text-[24px] tracking-tight text-gray-900">
          Clut
          <div className="relative inline-flex items-center">
            c
            <span className="absolute bottom-1 right-0 w-[5px] h-[5px] bg-[#FF3A2D] rounded-full translate-x-1" />
          </div>
          <span className="ml-[6px]">h</span>
        </div>
      ),
    },
    {
      name: "TopDevelopers",
      rating: "4.9 Rating",
      logo: (
        <div className="flex items-center gap-1.5">
          <div className="bg-[#0B2149] border border-blue-900/50 w-[24px] h-[24px] flex items-center justify-center rounded-[4px] text-blue-400 font-bold text-[14px]">
            D
          </div>
          <span className="text-gray-900 font-semibold text-[20px] tracking-tight">TopDevelopers</span>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white pt-8 sm:pt-12 pb-16 sm:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <ReplayDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center sm:text-left mb-10 sm:mb-16"
        >
          <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-extrabold text-[#020205] leading-[1.1] tracking-tight font-heading">
            Trusted by Clients with Top Ratings
          </h2>
        </ReplayDiv>

        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-x-8 gap-y-12">
          {ratings.map((item, index) => (
            <ReplayDiv
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2, margin: "0px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center sm:items-start group cursor-pointer"
            >
              <div className="mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                {item.logo}
              </div>
              <div className="text-gray-500 text-[16px] font-medium tracking-wide flex items-center gap-2">
                {item.rating}
                {/* 5 small stars */}
                <div className="flex items-center gap-[2px]">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <Star 
                      key={star} 
                      className={`w-3 h-3 ${i < 4 || item.rating.includes('4.9') ? 'fill-[#FF0055] text-[#FF0055]' : 'fill-[#FF0055]/50 text-[#FF0055]/50'}`} 
                    />
                  ))}
                </div>
              </div>
            </ReplayDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
