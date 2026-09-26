"use client";

import React from "react";

export default function TrustedBySection() {
  const logos = [
    {
      name: "Microsoft",
      render: () => (
        <div className="flex items-center gap-2.5">
          <svg className="w-[24px] h-[24px]" viewBox="0 0 21 21" fill="none">
            <rect x="0.5" y="0.5" width="9" height="9" fill="currentColor" />
            <rect x="11.5" y="0.5" width="9" height="9" fill="currentColor" />
            <rect x="0.5" y="11.5" width="9" height="9" fill="currentColor" />
            <rect x="11.5" y="11.5" width="9" height="9" fill="currentColor" />
          </svg>
          <span className="text-[26px] font-semibold tracking-tight">Microsoft</span>
        </div>
      ),
    },
    {
      name: "Google",
      render: () => (
        <div className="flex items-center">
          <span className="text-[28px] font-bold tracking-tight font-sans">
            Google
          </span>
        </div>
      ),
    },
    {
      name: "AWS",
      render: () => (
        <div className="flex flex-col items-center justify-center pt-1">
          <span className="text-[28px] font-black lowercase tracking-tight leading-none">
            aws
          </span>
          {/* AWS Smile Arrow */}
          <svg className="w-12 h-3 mt-0.5" viewBox="0 0 50 14" fill="none">
            <path
              d="M3 3C15 12 35 12 47 3"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M44 8L48 2.5L42 2"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      name: "Meta",
      render: () => (
        <div className="flex items-center gap-2">
          <svg className="w-8 h-6 fill-current" viewBox="0 0 36 24">
            <path d="M18.002 14.167C16.34 10.96 14.28 8.877 11.83 8.877c-3.14 0-5.32 2.656-5.32 6.133 0 3.82 2.64 6.476 6.04 6.476 2.76 0 4.79-1.87 6.12-4.492l-.668-.327zm.003-4.334c1.66 3.207 3.72 5.29 6.17 5.29 3.14 0 5.32-2.656 5.32-6.133 0-3.82-2.64-6.476-6.04-6.476-2.76 0-4.79 1.87-6.12 4.492l.67.327zM24.172 6.5C28.43 6.5 32 9.94 32 14.81c0 4.67-3.23 8.69-8.08 8.69-3.5 0-6.16-2.28-7.92-5.46-1.76 3.18-4.42 5.46-7.92 5.46C3.23 23.5 0 19.48 0 14.81 0 9.94 3.57 6.5 7.83 6.5c3.5 0 6.16 2.28 7.92 5.46 1.76-3.18 4.42-5.46 7.92-5.46z" />
          </svg>
          <span className="text-[26px] font-bold tracking-tight">Meta</span>
        </div>
      ),
    },
    {
      name: "IBM",
      render: () => (
        <div className="flex items-center">
          <svg className="h-[28px] w-auto fill-current" viewBox="0 0 72 28">
            {/* 8-bar striped IBM logo */}
            <g fill="currentColor">
              {/* Bar 1 */}
              <rect x="0" y="0" width="18" height="2" />
              <rect x="24" y="0" width="18" height="2" />
              <rect x="48" y="0" width="24" height="2" />
              {/* Bar 2 */}
              <rect x="0" y="3.6" width="18" height="2" />
              <rect x="24" y="3.6" width="18" height="2" />
              <rect x="48" y="3.6" width="6" height="2" />
              <rect x="57" y="3.6" width="6" height="2" />
              <rect x="66" y="3.6" width="6" height="2" />
              {/* Bar 3 */}
              <rect x="6" y="7.2" width="6" height="2" />
              <rect x="24" y="7.2" width="18" height="2" />
              <rect x="48" y="7.2" width="6" height="2" />
              <rect x="57" y="7.2" width="6" height="2" />
              <rect x="66" y="7.2" width="6" height="2" />
              {/* Bar 4 */}
              <rect x="6" y="10.8" width="6" height="2" />
              <rect x="24" y="10.8" width="18" height="2" />
              <rect x="48" y="10.8" width="6" height="2" />
              <rect x="57" y="10.8" width="6" height="2" />
              <rect x="66" y="10.8" width="6" height="2" />
              {/* Bar 5 */}
              <rect x="6" y="14.4" width="6" height="2" />
              <rect x="24" y="14.4" width="18" height="2" />
              <rect x="48" y="14.4" width="6" height="2" />
              <rect x="57" y="14.4" width="6" height="2" />
              <rect x="66" y="14.4" width="6" height="2" />
              {/* Bar 6 */}
              <rect x="6" y="18" width="6" height="2" />
              <rect x="24" y="18" width="18" height="2" />
              <rect x="48" y="18" width="6" height="2" />
              <rect x="57" y="18" width="6" height="2" />
              <rect x="66" y="18" width="6" height="2" />
              {/* Bar 7 */}
              <rect x="0" y="21.6" width="18" height="2" />
              <rect x="24" y="21.6" width="18" height="2" />
              <rect x="48" y="21.6" width="6" height="2" />
              <rect x="66" y="21.6" width="6" height="2" />
              {/* Bar 8 */}
              <rect x="0" y="25.2" width="18" height="2" />
              <rect x="24" y="25.2" width="18" height="2" />
              <rect x="48" y="25.2" width="24" height="2" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      name: "Adobe",
      render: () => (
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <polygon points="0,0 9.6,24 16.8,24 7.2,0" />
            <polygon points="24,0 14.4,24 21.6,24 31.2,0" />
            <polygon points="10.8,15.2 13.8,7.2 18,17.6 14.4,17.6" />
          </svg>
          <span className="text-[26px] font-bold tracking-tight">Adobe</span>
        </div>
      ),
    },
    {
      name: "Shopify",
      render: () => (
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M15.34 3.1c-.07-.47-.48-.82-.95-.82h-4.78c-.47 0-.88.35-.95.82L7.02 14.88c-.08.59.34 1.12.95 1.12h8.06c.61 0 1.03-.53.95-1.12l-1.64-11.78zm-2.84 8.78h-1v-2.2h1v2.2z" />
          </svg>
          <span className="text-[26px] font-bold italic tracking-tight font-sans">
            shopify
          </span>
        </div>
      ),
    },
    {
      name: "Dropbox",
      render: () => (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6 2l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM0 14l6-4 6 4-6 4-6-4zm18-4l6 4-6 4-6-4 6-4zm-6 6.5l6-4 6 4-6 4-6-4z" />
          </svg>
          <span className="text-[19px] font-semibold tracking-tight">Dropbox</span>
        </div>
      ),
    },
  ];

  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <section className="relative bg-[#020205] py-20 lg:py-24 overflow-hidden select-none border-t border-white/[0.04]">
      {/* Section Subtitle */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12 text-center">
        <p className="text-xs sm:text-[14px] font-bold tracking-[0.28em] text-white/60 uppercase font-sans">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>
      </div>

      {/* Marquee Wrapper with Smooth Left & Right Fade Gradients */}
      <div 
        className="pause-marquee-hover relative w-full overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#020205] via-[#020205]/80 to-transparent z-10" />

        {/* Right Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#020205] via-[#020205]/80 to-transparent z-10" />

        {/* Moving Marquee Track */}
        <div 
          className="animate-marquee-infinite flex w-max items-center"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* Repeat 4 times for Seamless Infinite Loop even on ultra-wide screens */}
          {[...Array(4)].map((_, loopIdx) => (
            <div
              key={loopIdx}
              className="flex items-center gap-12 sm:gap-16 lg:gap-20 pr-12 sm:pr-16 lg:pr-20 text-white/75"
            >
              {logos.map((logo, idx) => (
                <div
                  key={`${loopIdx}-${idx}`}
                  className="flex items-center shrink-0 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {logo.render()}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
