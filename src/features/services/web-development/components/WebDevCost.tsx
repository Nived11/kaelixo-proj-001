"use client";

import React from 'react';
import { ArrowRight, MessageSquareText, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WebDevCost() {
  return (
    <section className="py-16 sm:py-20 lg:py-20 xl:py-24 bg-[#020205] relative overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF0055]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FF0055]/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-[56%] xl:w-[55%] flex flex-col items-start relative z-20"
        >
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-slate-200 text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-[750] tracking-[0.25em] uppercase">
              TRANSPARENT PRICING
            </span>
            <div className="w-8 h-[2px] bg-[#FF0055]" />
          </div>
          
          <h2 className="text-white text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.05] tracking-tight mb-4 font-heading">
            How Much Does<br />
            <span className="text-[#FF0055]">Web Development</span> Cost?
          </h2>
          
          <p className="text-slate-300 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] max-w-[600px] mb-8">
            There's no single price tag for web development — it comes down to your goals, features, design complexity and functionality. As a Web Development Company, we think through the scope of every project before quoting, so you pay only for what actually helps your business grow.
          </p>
          
          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:gap-6 mb-8">
            <button className="group bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white px-6 py-3 rounded-full font-bold text-[16px] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 shadow-[0_4px_16px_rgba(255,0,85,0.25)]">
              Get a Cost Estimate
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <div className="hidden sm:block w-[1px] h-10 bg-slate-800" />
            
            <div className="flex items-center gap-3.5 cursor-pointer group">
              <div className="relative flex items-center justify-center shrink-0">
                {/* Outer luminous halo ring */}
                <div className="w-11 h-11 rounded-full bg-[#FF0055]/15 flex items-center justify-center p-1 group-hover:bg-[#FF0055]/25 group-hover:scale-105 transition-all duration-300">
                  {/* Inner gradient circle */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#80002A] to-[#FF0055] flex items-center justify-center shadow-[0_0_16px_rgba(255,0,85,0.45)]">
                    <MessageSquareText className="w-4.5 h-4.5 text-white" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[16px] group-hover:text-[#FF3377] transition-colors">Talk to Our Experts</span>
                <span className="text-slate-300 text-[13px]">Get a personalized quote</span>
              </div>
            </div>
          </div>

          {/* Bottom Checks */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-4 xl:gap-5">
            <div className="flex items-center gap-2 sm:gap-2 shrink-0 whitespace-nowrap">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#80002A] to-[#FF0055] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,0,85,0.4)] ring-2 ring-[#FF0055]/20">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
              <span className="text-slate-300 text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[16px] font-medium">No Hidden Costs</span>
            </div>

            <div className="hidden sm:block w-[1px] h-3.5 bg-slate-800 shrink-0" />

            <div className="flex items-center gap-2 sm:gap-2 shrink-0 whitespace-nowrap">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#80002A] to-[#FF0055] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,0,85,0.4)] ring-2 ring-[#FF0055]/20">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
              <span className="text-slate-300 text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[16px] font-medium">Flexible Packages</span>
            </div>

            <div className="hidden sm:block w-[1px] h-3.5 bg-slate-800 shrink-0" />

            <div className="flex items-center gap-2 sm:gap-2 shrink-0 whitespace-nowrap">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#80002A] to-[#FF0055] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,0,85,0.4)] ring-2 ring-[#FF0055]/20">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
              <span className="text-slate-300 text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[16px] font-medium">Tailored Solutions</span>
            </div>
          </div>
          
        </motion.div>

        {/* Right Content - 3D Illustration Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full lg:w-[44%] xl:w-[45%] relative flex justify-center lg:justify-end items-center"
        >
          {/* Subtle glow behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[#FF0055]/20 rounded-full blur-[100px] pointer-events-none" />
          
          <img 
            src="/images/home/calculator.webp" 
            alt="Web Development Cost Calculator" 
            className="w-full max-w-[450px] relative lg:absolute lg:w-[470px] xl:w-[600px] lg:max-w-none lg:top-1/2 lg:-translate-y-[45%] lg:-right-4 xl:-right-12 object-contain z-10 drop-shadow-2xl" 
            onError={(e) => {
              // Fallback styling if the image is missing, creating a mock placeholder
              e.currentTarget.style.display = 'none';
              const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextSibling) nextSibling.style.display = 'flex';
            }}
          />

          {/* Fallback CSS Composition (only visible if image fails to load) */}
          <div className="hidden relative w-full max-w-[450px] aspect-square flex-col items-center justify-center z-10" style={{ display: 'none' }}>
            <div className="absolute inset-0 border border-slate-800/50 rounded-3xl bg-slate-900/20 backdrop-blur-sm flex flex-col items-center justify-center p-6">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 shadow-2xl flex items-center justify-center mb-5">
                <span className="text-[#FF0055] font-black text-xl tracking-wider">COST</span>
              </div>
              
              
              {/* Floating aesthetic elements */}
              <div className="absolute top-10 right-10 px-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-md text-[10px] text-white shadow-xl backdrop-blur-md">
                Features
              </div>
              <div className="absolute bottom-16 left-8 px-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-md text-[10px] text-white shadow-xl backdrop-blur-md">
                Design
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
