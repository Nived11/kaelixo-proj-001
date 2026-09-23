"use client";

import React from "react";
import { ArrowRight, BarChart2 } from "lucide-react";

export default function SuccessStoriesSection() {
  const cases = [
    {
      id: 1,
      category: "MEDIA & CONTENT",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
      title: "Media Platform",
      desc: "AI-powered recommendation engine that increased user engagement and content discovery.",
      stat: "+40%",
      statLabel: "Engagement"
    },
    {
      id: 2,
      category: "RETAIL & ECOMMERCE",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
      title: "Retail Growth Brand",
      desc: "A unified CRM and automation system that reduced support tickets and improved customer satisfaction.",
      stat: "-60%",
      statLabel: "Support Tickets"
    },
    {
      id: 3,
      category: "DATA & ANALYTICS",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      title: "Enterprise Analytics",
      desc: "A data analytics platform for faster, smarter decisions across global teams.",
      stat: "3x",
      statLabel: "Faster Insights"
    }
  ];

  return (
    <section className="relative bg-[#FAFBFF] py-24 lg:py-32 overflow-hidden font-sans">
      
      {/* Soft Background Gradients */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-200/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[5%] -right-[5%] w-[40%] h-[60%] bg-pink-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#FF0055] font-bold text-[11px] tracking-[0.2em] uppercase">
                Real Results
              </span>
            </div>
            <h2 className="text-[#020205] text-[40px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight">
              Success Stories.
            </h2>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-3 max-w-[320px]">
            <a href="#" className="text-[#FF0055] font-bold text-[15px] flex items-center gap-2 hover:gap-3 transition-all">
              See All Case Studies <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed md:text-right">
              Different businesses. Unique challenges. Real growth with Kaelixo.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-slate-800 font-bold text-[10px] tracking-wider uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-[#020205] text-[22px] font-extrabold mb-3 group-hover:text-[#FF0055] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed mb-8 flex-1">
                  {item.desc}
                </p>
                
                {/* Footer Stats & Link */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#FF0055] text-3xl font-extrabold tracking-tight">
                      {item.stat}
                    </span>
                    <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                      {item.statLabel}
                    </span>
                  </div>
                  <a href="#" className="text-[#FF0055] font-semibold text-[13px] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="relative w-full rounded-[32px] bg-white border border-slate-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] z-10 overflow-hidden">
          
          <div className="flex items-center gap-6 z-10">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#FF0055]/10 flex items-center justify-center">
              <BarChart2 className="w-7 h-7 text-[#FF0055]" />
            </div>
            <div>
              <p className="text-[#020205] text-lg font-semibold leading-tight">
                More success stories are on the way.
              </p>
              <p className="text-[#020205] text-lg font-extrabold leading-tight mt-0.5">
                Let's create yours.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 z-10 w-full md:w-auto">
            <button className="w-full md:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF0055] to-[#D90048] text-white font-bold text-[15px] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,0,85,0.3)] hover:shadow-[0_0_30px_rgba(255,0,85,0.5)] transition-all hover:scale-105 active:scale-95">
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </button>
            
            {/* Watermark text hidden on small screens */}
            <div className="hidden xl:flex flex-col text-[10px] font-bold text-slate-300 tracking-[0.2em] leading-loose uppercase">
              <span>Businesses</span>
              <span>People</span>
              <span>Progress</span>
            </div>
          </div>
          
          {/* Subtle decoration inside banner */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
