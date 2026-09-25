import React from 'react';
import { ArrowRight, MessageSquareText, CheckCircle2 } from 'lucide-react';

export default function WebDevCost() {
  return (
    <section className="py-10 lg:py-16 bg-[#020205] relative overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF0055]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FF0055]/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start relative z-20">
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#FF0055]" />
            <span className="text-slate-400 font-bold text-[9px] tracking-[0.2em] uppercase">
              TRANSPARENT PRICING
            </span>
          </div>
          
          <h2 className="text-white text-[32px] md:text-[40px] lg:text-[46px] font-extrabold leading-[1.05] tracking-tight mb-4">
            How Much Does<br />
            <span className="text-[#FF0055]">Web Development</span> Cost?
          </h2>
          
          <p className="text-slate-400 text-[13px] lg:text-[14px] leading-[1.6] max-w-[550px] mb-8">
            The cost of web development depends on your goals, features, 
            design complexity and functionality. We provide tailored solutions 
            for every business size and budget.
          </p>
          
          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:gap-6 mb-8">
            <button className="bg-[#FF0055] text-white px-6 py-3 rounded-full font-bold text-[13px] lg:text-[14px] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] hover:-translate-y-1 hover:bg-[#e6004c]">
              Get a Cost Estimate
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <div className="hidden sm:block w-[1px] h-10 bg-slate-800" />
            
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-slate-900/50 border border-slate-800 flex items-center justify-center text-[#FF0055] group-hover:bg-slate-800 transition-colors">
                <MessageSquareText className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[13px]">Talk to Our Experts</span>
                <span className="text-slate-500 text-[11px]">Get a personalized quote</span>
              </div>
            </div>
          </div>

          {/* Bottom Checks */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-5">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0055]" />
              <span className="text-slate-300 text-[11px] font-medium">No Hidden Costs</span>
            </div>
            <div className="hidden sm:block w-[1px] h-3 bg-slate-800" />
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0055]" />
              <span className="text-slate-300 text-[11px] font-medium">Flexible Packages</span>
            </div>
            <div className="hidden sm:block w-[1px] h-3 bg-slate-800" />
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0055]" />
              <span className="text-slate-300 text-[11px] font-medium">Tailored Solutions</span>
            </div>
          </div>
          
        </div>

        {/* Right Content - 3D Illustration Placeholder */}
        {/* Note to user: The complex 3D graphic with calculator and floating elements should be exported as a single transparent PNG and placed here. */}
        <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end items-center">
          
          {/* Subtle glow behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[#FF0055]/20 rounded-full blur-[100px] pointer-events-none" />
          
          {/* 
            USER ADJUSTMENTS FOR THE IMAGE:
            Since this image is set to 'lg:absolute', it WILL NOT affect the section's height.
            You can freely adjust the following Tailwind classes on desktop (lg: prefix):
            - Width: lg:w-[700px] (change 700px to whatever you want)
            - Top/Bottom position: lg:top-1/2 lg:-translate-y-1/2 (adjust top percentage or translate-y)
            - Left/Right position: lg:-right-10 (change to lg:right-0 or lg:right-[-50px] etc)
          */}
          <img 
            src="/calculator.png" 
            alt="Web Development Cost Calculator" 
            className="w-full max-w-[450px] relative lg:absolute lg:w-[600px] lg:max-w-none lg:top-1/2 lg:-translate-y-[45%] lg:-right-12 object-contain z-10 drop-shadow-2xl" 
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

        </div>

      </div>
    </section>
  );
}
