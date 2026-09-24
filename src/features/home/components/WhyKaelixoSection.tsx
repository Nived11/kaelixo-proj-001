"use client";

import { ArrowRight, Heart, Lightbulb, Users, BarChart3, Play } from "lucide-react";

export default function WhyKaelixoSection() {
  const features = [
    {
      title: "Client-Centric Approach",
      desc: "Your goals, our priority.",
      icon: Heart,
      iconColor: "text-[#FF0055]",
      iconBg: "bg-[#3a0a1f]", // Dark vivid pink background
    },
    {
      title: "Innovative Solutions",
      desc: "Always one step ahead.",
      icon: Lightbulb,
      iconColor: "text-[#c084fc]", // Brighter purple
      iconBg: "bg-[#21163b]", // Dark vivid purple background
    },
    {
      title: "Experienced Team",
      desc: "Passionate experts.",
      icon: Users,
      iconColor: "text-[#38bdf8]", // Brighter blue
      iconBg: "bg-[#0b2440]", // Dark vivid blue background
    },
    {
      title: "Long-Term Partnership",
      desc: "We grow together.",
      icon: BarChart3,
      iconColor: "text-[#FF0055]",
      iconBg: "bg-[#3a0a1f]", // Dark vivid pink background
    },
  ];

  return (
    <section className="relative bg-[#020205] text-white py-16 lg:py-40 overflow-hidden border-t border-white/5">
      
      {/* Background Graphics */}
      <img 
        src="/service-left.png" 
        alt="" 
        className="absolute left-0 top-0 w-[35%] h-full object-cover object-left pointer-events-none z-0 mix-blend-screen opacity-60" 
      />
      <img 
        src="/service-right.png" 
        alt="" 
        className="absolute right-0 bottom-0 w-[35%] h-full object-cover object-right pointer-events-none z-0 mix-blend-screen opacity-60" 
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content & CTAs (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-slate-300 font-bold text-[10px] tracking-[0.2em] uppercase">WHY KAELIXO</span>
              <div className="w-10 h-[2px] bg-[#FF0055]"></div>
            </div>
            
            <h2 className="text-[36px] xl:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-5">
              More Than a <br /> Tech Company — <br />
              <span className="text-[#FF0055]">A Growth Partner.</span>
            </h2>
            
            <p className="text-slate-400 text-[14px] leading-relaxed mb-8 font-normal max-w-[340px]">
              We combine technology, creativity, strategy and AI thinking to build digital experiences that create real business impact.
            </p>
            
            <button className="px-7 py-3 rounded-full bg-[#FF0055] text-white font-bold text-[14px] hover:shadow-[0_0_20px_rgba(255,0,85,0.4)] transition-all duration-300 flex items-center gap-2 cursor-pointer mb-10 lg:mb-0">
              Our Story <ArrowRight className="w-4 h-4" />
            </button>

            {/* BOTTOM ROW: Footer Stats / Philosophy */}
            <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 w-full mt-auto relative top-10">
              <div className="relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-[#FF0055]">
                <h4 className="text-[14px] font-bold text-white mb-1 leading-tight">Strategy-Led</h4>
                <p className="text-[12px] text-slate-400 font-medium whitespace-nowrap">Not just execution</p>
              </div>
              <div className="relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-[#FF0055]">
                <h4 className="text-[14px] font-bold text-white mb-1 leading-tight">People-First</h4>
                <p className="text-[12px] text-slate-400 font-medium whitespace-nowrap">Relationships matter</p>
              </div>
              <div className="relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-[#FF0055]">
                <h4 className="text-[14px] font-bold text-white mb-1 leading-tight">Impact-Driven</h4>
                <p className="text-[12px] text-slate-400 font-medium whitespace-nowrap">Your growth is our success</p>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Image & Video Card (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0 lg:-ml-2">
            <div className="relative w-full max-w-[600px]">
              
              {/* Image Container with overflow hidden */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,0,85,0.1)] group">
                {/* Actual Image */}
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
                  alt="Workspace" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Overlapping Play Button Card (Outside overflow-hidden) */}
              <div className="absolute -bottom-6 right-0 sm:-right-8 bg-[#0a0f1c]/95 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-2xl z-20 w-[220px] sm:w-[240px] cursor-pointer hover:border-white/20 transition-colors group/play">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover/play:bg-white/10 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-1" fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-[12px] sm:text-[13px] font-bold text-white mb-0.5 leading-tight">See Our Workspace</h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium">A peek into our world</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Feature List (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-5 sm:gap-6 lg:pl-6 mt-12 lg:mt-0">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-5 group cursor-pointer">
                <div className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center shrink-0 ${feature.iconBg} transition-transform duration-300 group-hover:scale-105`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[14px] sm:text-[15px] font-bold text-white mb-0.5 group-hover:text-white transition-colors">{feature.title}</h4>
                  <p className="text-[12px] sm:text-[13px] text-slate-400 font-medium leading-tight">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}