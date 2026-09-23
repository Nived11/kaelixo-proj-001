"use client";

import { ArrowRight, Heart, Lightbulb, Users, BarChart2, Play } from "lucide-react";

export default function WhyKaelixoSection() {
  const features = [
    {
      title: "Client-Centric Approach",
      desc: "Your goals, our priority.",
      icon: Heart,
      iconColor: "text-[#FF0055]",
      iconBg: "bg-[#FF0055]/10",
    },
    {
      title: "Innovative Solutions",
      desc: "Always one step ahead.",
      icon: Lightbulb,
      iconColor: "text-[#a855f7]",
      iconBg: "bg-[#a855f7]/10",
    },
    {
      title: "Experienced Team",
      desc: "Passionate experts.",
      icon: Users,
      iconColor: "text-[#3b82f6]",
      iconBg: "bg-[#3b82f6]/10",
    },
    {
      title: "Long-Term Partnership",
      desc: "We grow together.",
      icon: BarChart2,
      iconColor: "text-[#FF0055]",
      iconBg: "bg-[#FF0055]/10",
    },
  ];

  return (
    <div className="relative bg-[#020205] text-white py-24 lg:py-32 overflow-hidden border-t border-white/5">
      
      {/* Abstract Neon Glow Background Effects */}
      <div className="absolute top-0 left-[-20%] w-[60%] h-[600px] bg-[#FF0055]/20 blur-[150px] rounded-full pointer-events-none opacity-50"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[500px] bg-[#FF0055]/15 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

      {/* Decorative Wavy Lines (Simplified SVG representation) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 mix-blend-screen" preserveAspectRatio="none">
        <path d="M-100 200 C 300 0, 600 500, 1500 200" fill="none" stroke="url(#pinkGlow)" strokeWidth="2" />
        <path d="M-100 800 C 400 900, 800 200, 1600 800" fill="none" stroke="url(#pinkGlow)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="pinkGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF0055" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF0055" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF0055" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content & CTAs (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gray-400 font-bold text-[11px] tracking-[0.2em] uppercase">WHY KAELIXO</span>
              <div className="w-12 h-[2px] bg-[#FF0055]"></div>
            </div>
            
            <h2 className="text-[40px] xl:text-[48px] font-black leading-[1.1] tracking-tight mb-6">
              More Than a <br /> Tech Company — <br />
              <span className="text-[#FF0055]">A Growth Partner.</span>
            </h2>
            
            <p className="text-gray-400 text-[16px] leading-relaxed mb-10 font-medium">
              We combine technology, creativity, strategy and AI thinking to build digital experiences that create real business impact.
            </p>
            
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF0055] to-[#ff2a6d] text-white font-bold hover:shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer">
              Our Story <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* CENTER COLUMN: Image & Video Card (4 Cols) */}
          <div className="lg:col-span-4 relative flex justify-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,0,85,0.15)] group">
              
              {/* Fallback dark gradient placeholder instead of actual image */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a24] to-[#0a0a0f]"></div>
              
              {/* Subtle grid pattern inside image box */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              {/* Kaelixo Signage Mockup */}
              <div className="absolute right-6 top-1/3 flex items-center gap-2">
                <span className="text-[#FF0055] font-black text-2xl tracking-tighter">{"<"}</span>
                <h3 className="text-white font-bold text-2xl tracking-tight">Kaelixo</h3>
              </div>

              <div className="absolute right-6 top-1/2 mt-4 text-right">
                <p className="text-[10px] font-black text-gray-400 tracking-[0.2em] leading-relaxed">
                  GREAT<br/>BUSINESSES<br/>BUILD A<br/>BRIGHTER<br/>TOMORROW
                </p>
              </div>

              {/* Overlapping Play Button Card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-[#0a0f1c] border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl z-20 w-[240px] cursor-pointer hover:border-white/20 transition-colors group/play">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover/play:bg-white/5 transition-colors">
                  <Play size={18} className="text-white ml-1" fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-white mb-0.5">See Our Workspace</h4>
                  <p className="text-[11px] text-gray-400 font-medium">A peek into our world</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Feature List (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-6 lg:pl-10 mt-16 lg:mt-0">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-5 group cursor-pointer">
                <div className={`w-[52px] h-[52px] rounded-[18px] flex items-center justify-center shrink-0 ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon size={22} className={feature.iconColor} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-white mb-1 group-hover:text-[#FF0055] transition-colors">{feature.title}</h4>
                  <p className="text-[13px] text-gray-400 font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM ROW: Footer Stats / Philosophy */}
        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-[#FF0055]">
            <h4 className="text-[15px] font-bold text-white mb-1">Strategy-Led</h4>
            <p className="text-[13px] text-gray-400 font-medium">Not just execution</p>
          </div>
          <div className="relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-[#FF0055]">
            <h4 className="text-[15px] font-bold text-white mb-1">People-First</h4>
            <p className="text-[13px] text-gray-400 font-medium">Relationships matter</p>
          </div>
          <div className="relative pl-5 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-[#FF0055]">
            <h4 className="text-[15px] font-bold text-white mb-1">Impact-Driven</h4>
            <p className="text-[13px] text-gray-400 font-medium">Your growth is our success</p>
          </div>
        </div>

      </div>
    </div>
  );
}