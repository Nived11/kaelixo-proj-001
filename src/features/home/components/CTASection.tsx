"use client";

import { ArrowRight, Zap, BarChart2, Headphones } from "lucide-react";

export default function CTASection() {
  return (
    <div className="relative bg-gradient-to-r from-[#fff5f8] via-[#ffffff] to-[#f5f3ff] text-[#030C25] py-16 overflow-hidden border-t border-b border-gray-100">
      
      {/* Abstract Background Glows */}
      <div className="absolute left-[-10%] top-[-50%] w-[30%] h-[200%] bg-pink-200/40 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute right-[-10%] bottom-[-50%] w-[40%] h-[200%] bg-purple-200/40 blur-[120px] rounded-full pointer-events-none"></div>

      {/* 3D Glass Graphic Placeholder (Right Edge) */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 h-[120%] aspect-square pointer-events-none opacity-40 lg:opacity-100 z-0 flex items-center justify-end">
        {/* You can replace this with the actual transparent PNG of the 3D glass shape later */}
        <div className="w-[300px] h-[300px] bg-gradient-to-br from-pink-400/20 to-purple-500/20 backdrop-blur-md rounded-2xl transform rotate-12 shadow-2xl border border-white/50"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Heading (4 Cols) */}
          <div className="lg:col-span-4 pr-0 lg:pr-4">
            <span className="text-[#FF0055] font-black text-[10px] tracking-widest uppercase mb-3 block">
              LET'S WORK TOGETHER
            </span>
            <h2 className="text-[34px] md:text-[42px] font-black leading-[1.1] tracking-tight text-[#030C25]">
              Ready to Launch <br className="hidden md:block" /> Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0055] to-[#a855f7]">Next Big Idea?</span>
            </h2>
          </div>

          {/* MIDDLE COLUMN: Text & Features (5 Cols) */}
          <div className="lg:col-span-5 relative lg:pl-10 lg:border-l border-gray-200/80">
            <p className="text-[#475569] text-[14.5px] font-medium leading-relaxed mb-7 max-w-md">
              From websites and custom software to digital marketing, branding and AI solutions, Kaelixo helps businesses turn ambitious ideas into measurable growth.
            </p>
            
            <div className="flex flex-wrap items-center gap-5 lg:gap-8">
              {/* Feature 1 */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-pink-100 text-[#FF0055] flex items-center justify-center shrink-0 shadow-sm">
                  <Zap size={14} fill="currentColor" />
                </div>
                <span className="text-[11px] font-bold text-[#030C25] leading-tight">Fast<br/>Turnaround</span>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-fuchsia-100 text-[#d946ef] flex items-center justify-center shrink-0 shadow-sm">
                  <BarChart2 size={14} strokeWidth={3} />
                </div>
                <span className="text-[11px] font-bold text-[#030C25] leading-tight">Strategy-Led<br/>Execution</span>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-purple-100 text-[#a855f7] flex items-center justify-center shrink-0 shadow-sm">
                  <Headphones size={14} strokeWidth={3} />
                </div>
                <span className="text-[11px] font-bold text-[#030C25] leading-tight">Long-Term<br/>Support</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Buttons (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-center pt-4 lg:pt-0">
            <div className="flex flex-col gap-3.5 w-full max-w-[240px]">
              <button className="w-full bg-[#FF0055] hover:bg-[#e6004c] text-white font-bold text-[13.5px] py-3.5 rounded-full flex items-center justify-center gap-2 shadow-[0_8px_20px_-6px_rgba(255,0,85,0.4)] transition-all cursor-pointer hover:scale-[1.02]">
                Start a Project <ArrowRight size={16} strokeWidth={2.5} />
              </button>
              <button className="w-full bg-white border border-gray-300 text-[#030C25] hover:border-[#030C25] hover:bg-gray-50 font-bold text-[13.5px] py-3.5 rounded-full flex items-center justify-center transition-colors cursor-pointer shadow-sm">
                Schedule a Call
              </button>
            </div>
            <p className="text-[10.5px] text-gray-500 font-medium mt-4 text-left lg:text-center w-full max-w-[240px]">
              Trusted by growing brands across industries.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}