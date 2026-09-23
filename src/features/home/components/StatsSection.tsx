"use client";

import React from "react";

export default function StatsSection() {
  const stats = [
    {
      // 3-people silhouette icon matching image
      icon: (
        <svg className="w-6 h-6 text-[#C084FC] fill-current" viewBox="0 0 24 24">
          <circle cx="8" cy="8" r="3" />
          <path d="M2 19c0-3.3 2.7-6 6-6h2c3.3 0 6 2.7 6 6v1H2v-1z" />
          <circle cx="16" cy="8" r="2.5" />
          <path d="M14.5 14c1.8.4 3.5 1.7 4 3.5v1.5h3.5v-1.5c0-2.8-2.2-5-5-5h-.5c-.7.6-1.3 1.1-2 1.5z" />
        </svg>
      ),
      number: "120+",
      label: "Happy Clients",
    },
    {
      // Isometric 3D box icon matching image
      icon: (
        <svg className="w-6 h-6 text-[#C084FC] fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
      number: "250+",
      label: "Projects Delivered",
    },
    {
      // Globe with continents/grid icon matching image
      icon: (
        <svg className="w-6 h-6 text-[#C084FC] fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      number: "10+",
      label: "Countries Served",
    },
    {
      // 3 vertical ascending bars icon matching image
      icon: (
        <svg className="w-6 h-6 text-[#C084FC] fill-current" viewBox="0 0 24 24">
          <rect x="3" y="13" width="4" height="8" rx="1" />
          <rect x="10" y="8" width="4" height="13" rx="1" />
          <rect x="17" y="3" width="4" height="18" rx="1" />
        </svg>
      ),
      number: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-t from-[#020205] via-[#020205]/40 to-transparent pt-6 pb-5 sm:pb-6 backdrop-blur-[2px]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-start gap-y-4 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3.5 ${
                idx !== stats.length - 1 ? "md:border-r border-white/15 md:pr-8 lg:pr-10" : ""
              }`}
            >
              <div className="flex-shrink-0 flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-heading leading-tight">
                  {stat.number}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium font-sans whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
