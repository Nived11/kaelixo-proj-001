"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Kaelixo transformed our digital presence completely. Their team is professional, creative and truly understands business needs.",
    name: "Arjun Mathew",
    role: "CEO, RetailKart",
    avatar: "/images/home/person1.jpg",
  },
  {
    id: 2,
    quote: "The Way We Go CRM has streamlined our operations and improved our productivity significantly. Highly recommended!",
    name: "Sneha R",
    role: "Operations Head, Probugh",
    avatar: "/images/home/person2.jpg",
  },
  {
    id: 3,
    quote: "A reliable technology partner who delivers on time and beyond expectations. Great team to work with!",
    name: "Vishal Kumar",
    role: "Founder, EduLoom",
    avatar: "/images/home/person3.jpg",
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "opacity, transform" }}
            className="lg:col-span-5 flex flex-col items-start lg:pr-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#FF0055] font-bold text-sm tracking-widest uppercase">CLIENTS SPEAK</span>
              <div className="w-10 h-[2px] bg-[#FF0055]"></div>
            </div>
            
            <h2 className="text-[32px] sm:text-[42px] lg:text-[36px] xl:text-[52px] font-extrabold text-[#020205] leading-[1.1] tracking-tight">
              Trusted by <br />
              Businesses That <br />
              <span className="text-[#FF0055]">Dream Bigger</span>
            </h2>
            
            <p className="text-[#4A5568] text-[14px] sm:text-[16px] lg:text-[13px] xl:text-[16px] max-w-[420px] lg:max-w-[320px] xl:max-w-[420px] leading-relaxed mt-4 sm:mt-6">
              Real stories from real partners who trust us as their growth marketing agency to bring their vision to life. Their success inspires us to go further every day.
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
            <div className="flex flex-row items-start sm:items-center justify-between sm:justify-start gap-1 sm:gap-6 lg:gap-3 xl:gap-10 mt-12 sm:mt-16 lg:mt-10 xl:mt-16 pt-6 sm:pt-8 border-t border-slate-100 relative z-20 w-full lg:w-[110%] xl:w-[120%] perspective-[1000px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
                className="flex-1 sm:flex-none text-center sm:text-left pr-1 sm:pr-0"
              >
                <motion.div 
                  initial={{ rotateY: -360 }}
                  whileInView={{ rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className="inline-block"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <h4 className="text-[#020205] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[24px] font-extrabold whitespace-nowrap">4.9/5</h4>
                </motion.div>
                <p className="text-[#64748B] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[10px] xl:text-[13px] mt-1 font-medium leading-tight">Client Satisfaction</p>
              </motion.div>
              <div className="w-px h-8 sm:h-10 bg-slate-200 shrink-0 mt-2" />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
                className="flex-1 sm:flex-none text-center sm:text-left px-1 sm:pr-0"
              >
                <motion.div 
                  initial={{ rotateY: -360 }}
                  whileInView={{ rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className="inline-block"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <h4 className="text-[#020205] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[24px] font-extrabold whitespace-nowrap">200+</h4>
                </motion.div>
                <p className="text-[#64748B] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[10px] xl:text-[13px] mt-1 font-medium leading-tight">Happy Businesses</p>
              </motion.div>
              <div className="w-px h-8 sm:h-10 bg-slate-200 shrink-0 mt-2" />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
                className="flex-1 sm:flex-none text-center sm:text-left pl-1 sm:pl-0"
              >
                <motion.div 
                  initial={{ rotateY: -360 }}
                  whileInView={{ rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  className="inline-block"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <h4 className="text-[#020205] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[24px] font-extrabold whitespace-nowrap">Long-Term</h4>
                </motion.div>
                <p className="text-[#64748B] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[10px] xl:text-[13px] mt-1 font-medium leading-tight">Partnerships</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ========================================= */}
          {/* RIGHT CONTENT (Testimonials Carousel)     */}
          {/* ========================================= */}
          <div 
            className="lg:col-span-7 relative h-[320px] sm:h-[420px] lg:h-[500px] flex items-center justify-center mt-6 sm:mt-10 lg:mt-0 mb-16 lg:mb-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            
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
                  transform = 'translateX(-85%) scale(0.85)';
                  zIndex = 20;
                  opacity = 1;
                } else if (isNext) {
                  transform = 'translateX(85%) scale(0.85)';
                  zIndex = 10;
                  opacity = 1;
                }

                return (
                  <div 
                    key={t.id}
                    className="absolute w-[250px] sm:w-[320px] md:w-[260px] lg:w-[260px] xl:w-[320px] transition-all duration-500 ease-out will-change-transform"
                    style={{ 
                      transform: `${transform} translateZ(0)`, 
                      zIndex, 
                      opacity,
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    {/* Base Shadow (Inactive state) */}
                    <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] shadow-[0_10px_40px_-10px_rgba(23,23,23,0.2)] pointer-events-none" />
                    
                    {/* Glowing Pink Shadow (Fades in on active state using opacity, which is 100x faster than animating box-shadow) */}
                    <div 
                      className={`absolute inset-0 rounded-[20px] sm:rounded-[24px] shadow-[0_0_25px_2px_rgba(255,0,85,0.15),0_15px_35px_-5px_rgba(255,0,85,0.1)] pointer-events-none transition-opacity duration-500 ease-out ${isActive ? 'opacity-100' : 'opacity-0'}`} 
                    />

                    {/* The Card Shape */}
                    <div 
                      className="bg-white min-h-[290px] sm:min-h-[340px] md:min-h-[280px] lg:min-h-[280px] xl:min-h-[340px] h-full w-full relative flex flex-col p-5 sm:p-8 md:p-6 lg:p-6 xl:p-8 pb-6 sm:pb-10 md:pb-7 lg:pb-7 xl:pb-10 rounded-[20px] sm:rounded-[24px] md:rounded-[20px] lg:rounded-[20px] xl:rounded-[24px] border border-black/[0.03]"
                      style={{ 
                        transform: 'translateZ(0)',
                        WebkitTransform: 'translateZ(0)'
                      }}
                    >
                      {/* Animated Border Mask (Visible on Active Card) */}
                      <div 
                         className={`absolute inset-0 overflow-hidden pointer-events-none z-50 rounded-[20px] sm:rounded-[24px] transition-opacity duration-500 ease-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
                         style={{
                            padding: '1.5px',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                         }}
                      >
                         <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] opacity-60 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#FF0055_30%,transparent_60%)]" />
                      </div>

                      {/* Standard Quote Icon */}
                      <div className={`text-[36px] sm:text-[48px] font-serif leading-none mt-1 sm:mt-2 ${isActive ? 'text-[#FF0055]' : 'text-[#8B98B4]'}`}>
                        “
                      </div>
                      
                      {/* Text is dark on all cards as per image */}
                      <p className="mt-2 sm:mt-4 md:mt-2 lg:mt-2 xl:mt-4 relative z-10 text-[13px] sm:text-[15px] md:text-[12px] lg:text-[12px] xl:text-[15px] leading-[1.6] sm:leading-[1.7] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.7] flex-1 text-[#1E293B]">
                        "{t.quote}"
                      </p>
                      
                      {/* Avatar and Name */}
                      <div className="mt-5 sm:mt-8 md:mt-5 flex items-center gap-3 sm:gap-4 md:gap-2 lg:gap-2 xl:gap-4">
                        <img 
                          src={t.avatar} 
                          alt={t.name} 
                          className="w-10 h-10 sm:w-[52px] sm:h-[52px] md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-[52px] xl:h-[52px] rounded-full object-cover bg-slate-100 border-2 border-white shadow-sm shrink-0" 
                        />
                        <div className="min-w-0">
                          <h5 className="text-[13px] sm:text-[15px] md:text-[12px] lg:text-[12px] xl:text-[15px] font-bold text-[#020205] truncate">{t.name}</h5>
                          <p className="text-[11px] sm:text-[13px] md:text-[10px] lg:text-[10px] xl:text-[13px] text-[#64748B] mt-0.5 lg:mt-0 xl:mt-0.5 truncate">{t.role}</p>
                        </div>
                      </div>

                      {/* Star Rating - Realistic 2-Tone Star matching image */}
                      <div className="mt-6 flex items-center gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} viewBox="0 0 200 200" className="w-[20px] h-[20px] drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
                            {/* Left Half - Light Gold */}
                            <polygon 
                              points="100,15 80,77 15,77 67,116 47,178 100,139" 
                              fill="#FFC72C"
                            />
                            {/* Right Half - Dark Gold */}
                            <polygon 
                              points="100,15 120,77 185,77 133,116 153,178 100,139" 
                              fill="#F59E0B"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>

            {/* Desktop & Mobile Navigation Controls (Placed bottom left of the right column, aligning with stats) */}
            <div className="absolute -bottom-16 sm:-bottom-12 lg:-bottom-10 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-76 flex items-center gap-4 z-40">
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
