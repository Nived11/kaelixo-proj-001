"use client";

import React, { useState, useEffect } from 'react';
import { Settings, User, BarChart2, BrainCircuit, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

export default function AiSolutionsSection() {
  const [activeQuote, setActiveQuote] = useState(0);
  const quotes = [
    "AI won't replace businesses.\nBut businesses that use AI\nwill replace those that don't.",
    "The future belongs to those\nwho integrate AI seamlessly\ninto their business vision."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-12 lg:py-16 bg-[#020205] overflow-hidden flex items-center min-h-0 lg:min-h-[600px]">

      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0 flex justify-end">

        {/* Gradients for blending the image into the dark background and masking the hard edge */}
        {/* This gradient covers the left 50%, being solid black where the image cuts off at 30% */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205] to-transparent z-10 w-[60%] lg:w-[50%]" />

        {/* Top and bottom vignettes to blend with adjacent sections */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020205] to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020205] to-transparent z-10" />

        {/* Image layer */}
        <img
          src="/heroaibg.png"
          alt="AI Solutions Background"
          className="w-full lg:w-[70%] h-full object-cover object-right opacity-100"
          onError={(e) => {
            // Fallback to .jpg if .png is not found
            if (!e.currentTarget.src.endsWith('.jpg')) {
              e.currentTarget.src = "/heroaibg.jpg";
            }
          }}
        />

      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="max-w-[550px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#FF0055] font-bold text-[10px] tracking-[0.25em] uppercase">
                AI SOLUTIONS
              </span>
              <div className="w-8 h-[2px] bg-[#FF0055]" />
            </div>

            {/* Headline */}
            <h2 className="text-white text-[34px] md:text-[40px] lg:text-[48px] font-extrabold leading-[1.05] tracking-tight mb-4 font-heading">
              AI Thinking for a<br />
              Smarter <span className="text-[#FF0066]">Tomorrow</span>
            </h2>

            <p className="text-slate-300/90 text-[13px] md:text-[14px] leading-[1.6] mb-8 max-w-[480px]">
              We integrate artificial intelligence into real business solutions — helping you automate, predict, personalize and grow without limits.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              <FeatureItem
                icon={Settings}
                title="Process Automation"
                desc="Streamline operations and reduce manual work."
              />
              <FeatureItem
                icon={User}
                title="Intelligent Customer Experiences"
                desc="Create personalized journeys that build loyalty."
              />
              <FeatureItem
                icon={BarChart2}
                title="Data-Driven Decision Making"
                desc="Turn data into actionable insights."
                theme="pink"
              />
              <FeatureItem
                icon={BrainCircuit}
                title="Custom AI Solutions"
                desc="Tailored AI models for your unique business needs."
              />
            </div>

            {/* CTA Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link
                href="/services/ai-solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FF0055] hover:bg-[#E6004C] text-white text-[13px] font-semibold tracking-wide shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] transition-all duration-300"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="hidden sm:block w-[1px] h-8 bg-white/20" />

              <p className="text-slate-300 text-[11px] leading-[1.4]">
                From Possibilities<br />to Real Impact
              </p>
            </div>
          </div>

          {/* Right Content - Overlays */}
          <div className="relative h-full min-h-[400px] hidden lg:block">

            {/* The Floating AI Box with Animated Gradient Border */}
            {/* 
              POSITION ADJUSTMENTS:
              Modify the 'top-' and 'right-' values below to change the card's position on different screen sizes.
              - default: mobile
              - md: tablet
              - lg: small desktop
              - xl: large desktop
              - 2xl: extra large screens
            */}
            <div className="absolute z-20 group overflow-hidden rounded-[20px] shadow-[0_0_50px_rgba(255,0,102,0.15)] w-[120px] aspect-[4/5] 
              top-[25%] right-[10%] 
              md:top-[30%] md:right-[15%] 
              lg:top-[30%] lg:right-[22%] 
              xl:top-[35%] xl:right-[25%] 
              2xl:top-[23%] 2xl:right-[15%]
              [@media(min-width:1920px)]:top-[17%] [@media(min-width:1920px)]:-right-[19px]
            ">
              {/* Spinning Gradient for Border */}
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#FF0066_360deg)] opacity-70" />
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#FF0066_360deg)] opacity-70" />

              {/* Static faint border fallback */}
              <div className="absolute inset-0 rounded-[20px] border border-[#FF0066]/20" />

              {/* Inner Glass Content */}
              <div className="absolute inset-[2px] rounded-[12px] bg-[#0c0418]/70 backdrop-blur-md flex flex-col items-center justify-center border border-white/5">
                <span className="text-[#FF0066] text-[42px] font-black tracking-tighter mb-2 font-heading drop-shadow-[0_0_15px_rgba(255,0,102,0.8)]">AI</span>
                <div className="flex flex-col items-start w-[85%] mx-auto pl-2">
                  <span className="text-white/90 text-[8px] font-medium tracking-[0.35em] text-left uppercase leading-[1.7] drop-shadow-sm">
                    FOR A<br />BRIGHTER<br />TOMORROW
                  </span>
                </div>
              </div>
            </div>

            {/* The Quote Box with Animated Border & Carousel */}
            {/* 
              POSITION ADJUSTMENTS:
              Modify the 'bottom-' and 'right-' values below to change the quote box's position.
            */}
            <div className="absolute z-20 group overflow-hidden rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] w-[280px] md:w-[310px] p-[2px]
              bottom-10 right-0 
              md:bottom-12 md:right-0 
              lg:bottom-12 lg:right-4 
              xl:bottom-16 xl:right-10 
              2xl:-bottom-10 2xl:right-[350px]
              [@media(min-width:1920px)]:-bottom-[60px] [@media(min-width:1920px)]:right-[280px]
            ">

              {/* Spinning Gradient for Border */}
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#FF0066_360deg)] opacity-30" />
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#FF0066_360deg)] opacity-30" />

              {/* Inner Content (Sets the height of the card) */}
              <div className="relative z-10 rounded-[18px] bg-gradient-to-br from-[#1a0b2e]/90 to-[#07020d]/95 backdrop-blur-xl p-4 md:p-5 flex flex-col h-full border border-white/5">

                {/* Custom Gradient Quote Icon */}
                <div className="text-[45px] font-serif leading-none h-7 mb-2 bg-gradient-to-r from-[#FFB3D9] to-[#FF0055] bg-clip-text text-transparent select-none">
                  “
                </div>

                <div className="relative h-[65px] mb-5">
                  {quotes.map((quote, idx) => (
                    <p
                      key={idx}
                      className={`absolute inset-0 text-white text-[12px] md:text-[13px] leading-[1.6] font-medium pr-2 drop-shadow-sm whitespace-pre-line transition-all duration-500 ${activeQuote === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                        }`}
                    >
                      "{quote}"
                    </p>
                  ))}
                </div>

                <div className="flex items-end justify-between mt-auto">
                  <div className="flex gap-2 mb-1">
                    <div className={`h-[2.5px] rounded-full transition-all duration-300 ${activeQuote === 0 ? 'w-7 bg-[#FF0055]' : 'w-5 bg-white/20'}`} />
                    <div className={`h-[2.5px] rounded-full transition-all duration-300 ${activeQuote === 1 ? 'w-7 bg-[#FF0055]' : 'w-5 bg-white/20'}`} />
                  </div>
                  <span className="text-[#d8b4fe] text-[7.5px] font-semibold tracking-[0.3em] text-right uppercase leading-[1.5]">
                    A SMARTER<br />TOMORROW
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon: Icon, title, desc, theme = "purple" }: { icon: any, title: string, desc: string, theme?: "purple" | "pink" }) {
  const isPink = theme === "pink";

  return (
    <div className="flex items-center gap-4 group">
      <div
        className={`w-11 h-11 rounded-[12px] border flex items-center justify-center shrink-0 transition-all duration-300
          ${isPink
            ? 'bg-[#2a0e1b] border-[#f43f5e]/20 group-hover:border-[#f43f5e]/50 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]'
            : 'bg-[#16132b] border-[#c084fc]/20 group-hover:border-[#c084fc]/50 group-hover:shadow-[0_0_15px_rgba(192,132,252,0.3)]'
          }
        `}
      >
        <Icon className={`w-5 h-5 ${isPink ? 'text-[#f43f5e]' : 'text-[#c084fc]'}`} />
      </div>
      <div>
        <h4 className="text-white text-[14px] font-bold leading-tight mb-0.5">{title}</h4>
        <p className="text-slate-400 text-[11px] leading-[1.4]">{desc}</p>
      </div>
    </div>
  );
}
