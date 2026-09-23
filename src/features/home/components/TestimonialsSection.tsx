"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Kaelixo transformed our digital presence completely. Their team is professional, creative and truly understands business needs.",
    name: "Arjun Mathew",
    role: "CEO, RetailKart",
    avatar: "https://i.pravatar.cc/150?u=arjun",
  },
  {
    id: 2,
    quote: "The Way We Go CRM has streamlined our operations and improved our productivity significantly. Highly recommended!",
    name: "Sneha R",
    role: "Operations Head, Probugh",
    avatar: "https://i.pravatar.cc/150?u=sneha",
  },
  {
    id: 3,
    quote: "A reliable technology partner who delivers on time and beyond expectations. Great team to work with!",
    name: "Vishal Kumar",
    role: "Founder, EduLoom",
    avatar: "https://i.pravatar.cc/150?u=vishal",
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* ========================================= */}
          {/* LEFT CONTENT (Text & Stats)               */}
          {/* ========================================= */}
          <div className="lg:col-span-5 flex flex-col items-start lg:pr-8">
            <span className="text-[#FF0055] font-bold text-[13px] tracking-[0.25em] uppercase mb-6 block">
              Clients Speak
            </span>
            
            <h2 className="text-[40px] sm:text-5xl lg:text-[56px] font-extrabold text-[#020205] leading-[1.05] tracking-tight">
              Trusted by <br />
              Businesses That <br />
              <span className="text-[#FF0055]">Dream Bigger.</span>
            </h2>
            
            <p className="text-[#4A5568] text-base md:text-[17px] max-w-[420px] leading-relaxed mt-6">
              Real stories from real partners who trust us to bring their vision to life. Their success inspires us to go further every day.
            </p>

            <button className="flex items-center gap-4 mt-8 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#FF0055] flex items-center justify-center text-white shadow-lg shadow-[#FF0055]/30 group-hover:scale-105 group-active:scale-95 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="text-[#FF0055] font-bold text-[15px] group-hover:underline">
                See What Our Clients Say
              </span>
            </button>

            {/* Stats */}
            <div className="flex items-center gap-6 md:gap-10 mt-16 pt-8 border-t border-slate-100 relative z-20 w-full lg:w-[120%]">
              <div>
                <h4 className="text-[#020205] text-[24px] font-extrabold">4.9/5</h4>
                <p className="text-[#64748B] text-[13px] mt-1 font-medium">Client Satisfaction</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <h4 className="text-[#020205] text-[24px] font-extrabold">200+</h4>
                <p className="text-[#64748B] text-[13px] mt-1 font-medium">Happy Businesses</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <h4 className="text-[#020205] text-[24px] font-extrabold">Long-Term</h4>
                <p className="text-[#64748B] text-[13px] mt-1 font-medium">Partnerships</p>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT CONTENT (Testimonials Carousel)     */}
          {/* ========================================= */}
          <div className="lg:col-span-7 relative h-[500px] flex items-center justify-center mt-10 lg:mt-0">
            
            {/* Cards Container */}
            <div className="relative w-full max-w-[800px] h-full flex items-center justify-center">
              
              {testimonials.map((t, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
                const isNext = index === (activeIndex + 1) % testimonials.length;

                let transform = 'translateX(0) scale(1)';
                let zIndex = 10;
                let opacity = 0;

                if (isActive) {
                  transform = 'translateX(0) scale(1.05)';
                  zIndex = 30;
                  opacity = 1;
                } else if (isPrev) {
                  transform = 'translateX(-95%) scale(0.9)';
                  zIndex = 20;
                  opacity = 1;
                } else if (isNext) {
                  transform = 'translateX(95%) scale(0.9)';
                  zIndex = 10;
                  opacity = 1;
                }

                return (
                  <div 
                    key={t.id}
                    className="absolute w-[320px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ 
                      transform, 
                      zIndex, 
                      opacity
                    }}
                  >
                    {/* The Card Shape - Exact 3rd image look */}
                    <div 
                      className="bg-white h-full w-full relative flex flex-col p-8 pb-10 transition-all duration-700"
                      style={{ 
                        borderRadius: '24px',
                        border: isActive ? '1px solid rgba(255,0,85,0.1)' : '1px solid rgba(0,0,0,0.03)',
                        boxShadow: isActive 
                          ? '0 0 25px 2px rgba(255,0,85,0.15), 0 15px 35px -5px rgba(255,0,85,0.1)' 
                          : '0 10px 40px -10px rgba(23, 23, 23, 0.2)',
                        minHeight: '360px'
                      }}
                    >
                      {/* Standard Quote Icon */}
                      <div className={`text-[48px] font-serif leading-none mt-2 ${isActive ? 'text-[#FF0055]' : 'text-[#8B98B4]'}`}>
                        “
                      </div>
                      
                      {/* Text is dark on all cards as per image */}
                      <p className="mt-4 relative z-10 text-[15px] leading-[1.7] flex-1 text-[#1E293B]">
                        "{t.quote}"
                      </p>
                      
                      {/* Avatar and Name */}
                      <div className="mt-8 flex items-center gap-4">
                        <img 
                          src={t.avatar} 
                          alt={t.name} 
                          className="w-13 h-13 rounded-full object-cover bg-slate-100 border-2 border-white shadow-sm" 
                        />
                        <div>
                          <h5 className="text-[15px] font-bold text-[#020205]">{t.name}</h5>
                          <p className="text-[13px] text-[#64748B] mt-0.5">{t.role}</p>
                        </div>
                      </div>

                      {/* Star Rating - Same vibrant color on all cards */}
                      <div className="mt-6 flex items-center gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-[18px] h-[18px] fill-[#FFB800] text-[#FFB800]" />
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>

            {/* Desktop & Mobile Navigation Controls (Placed bottom left of the right column, aligning with stats) */}
            <div className="absolute -bottom-8 lg:-bottom-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-76 flex items-center gap-4 z-40">
              <button 
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="w-14 h-14 rounded-full bg-[#FF0055] flex items-center justify-center text-white hover:bg-[#E6004C] transition-all shadow-lg shadow-[#FF0055]/30 active:scale-95"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
