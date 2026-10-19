"use client";

import { ArrowRight, Zap, BarChart2, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function PerformanceCTA() {
  return (
    <div className="relative bg-gradient-to-r from-[#fff5f8] via-[#ffffff] to-[#f5f3ff] text-[#030C25] py-16 sm:py-20 lg:py-20 xl:py-24 overflow-hidden border-t border-b border-gray-100">
      
      {/* Abstract Background Glows */}
      <div className="absolute left-[-10%] top-[-50%] w-[30%] h-[200%] bg-pink-200/40 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute right-[-10%] bottom-[-50%] w-[40%] h-[200%] bg-purple-200/40 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Ambient Glows for 3D Glass Prism */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 lg:-translate-y-[38%] w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[460px] h-[200px] sm:h-[240px] lg:h-[290px] bg-gradient-to-l from-pink-300/30 via-purple-300/20 to-transparent blur-[75px] rounded-full pointer-events-none z-0" />
      <div className="absolute right-[2%] bottom-[-5%] w-[180px] sm:w-[220px] lg:w-[260px] h-[140px] sm:h-[180px] lg:h-[210px] bg-[#FF0055]/12 blur-[65px] rounded-full pointer-events-none z-0" />

      {/* 3D Glass Graphic (Right Edge) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 25 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute top-auto bottom-[-10px] right-[-25px] sm:bottom-0 sm:right-[-10px] md:-bottom-8 md:-right-8 lg:top-1/2 lg:-translate-y-[30%] lg:right-[-20px] xl:-translate-y-[38%] xl:right-[-20px] 2xl:right-4 w-[300px] h-[300px] sm:w-[170px] sm:h-[195px] md:w-[410px] md:h-[435px] lg:w-[255px] lg:h-[280px] xl:w-[280px] xl:h-[300px] 2xl:w-[300px] 2xl:h-[340px] pointer-events-none z-0 flex items-center justify-end select-none"
      >
        <img 
          src="/images/services/web-dev/web-last-icon.png" 
          alt="Kaelixo Performance Optimization" 
          className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(255,0,85,0.18)] drop-shadow-[0_15px_35px_rgba(168,85,247,0.15)] opacity-70 sm:opacity-70 md:opacity-80 lg:opacity-100 transition-all duration-300" 
        />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 pr-0 lg:pr-4"
          >
            <span className="text-[#FF0055] font-[750] text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] tracking-widest uppercase mb-3 block">
              LET'S WORK TOGETHER
            </span>
            <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-[750] leading-[1.1] tracking-tight text-[#030C25]">
              Ready to Make <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0055] to-[#a855f7]">Your Website Faster?</span>
            </h2>
          </motion.div>

          {/* MIDDLE COLUMN: Text & Features */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-4 relative lg:pl-8 lg:border-l border-gray-200/80"
          >
            <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-relaxed mb-6 lg:mb-0 max-w-md">
              Tell us how your site performs today, and we'll think it through with you.
            </p>
            
            {/* Features in Mobile / Tablet (< lg) */}
            <div className="flex flex-col gap-3.5 sm:gap-4 lg:hidden mt-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-4 ring-[#FF0055]/15">
                  <Zap size={14} className="text-white fill-white" />
                </div>
                <span className="text-[14px] sm:text-[15px] font-medium text-gray-800 leading-tight">
                  Fast Turnaround
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-4 ring-[#FF0055]/15">
                  <BarChart2 size={14} strokeWidth={2.5} className="text-white" />
                </div>
                <span className="text-[14px] sm:text-[15px] font-medium text-gray-800 leading-tight">
                  Strategy-Led Execution
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-4 ring-[#FF0055]/15">
                  <Headphones size={14} strokeWidth={2.5} className="text-white" />
                </div>
                <span className="text-[14px] sm:text-[15px] font-medium text-gray-800 leading-tight">
                  Long-Term Support
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-3 flex flex-col items-start lg:items-center xl:items-end lg:pr-8 xl:pr-12 justify-center pt-4 lg:pt-0"
          >
            <div className="flex flex-col gap-3.5 w-full max-w-[250px] items-center">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-consultation-modal', { detail: { type: 'demo' } }))}
                className="group w-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white font-bold text-[16px] py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer hover:scale-[1.02] shadow-[0_4px_16px_rgba(255,0,85,0.25)]"
              >
                Book a Demo <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a 
                href="#contact"
                className="w-full bg-white border border-gray-300 text-[#030C25] hover:border-[#030C25] hover:bg-gray-50 font-bold text-[16px] py-3.5 rounded-full flex items-center justify-center transition-colors cursor-pointer shadow-sm text-center"
              >
                Start a Project
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Features Row on Desktop (lg+) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-start gap-8 xl:gap-12 mt-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-4 ring-[#FF0055]/15">
              <Zap size={14} className="text-white fill-white" />
            </div>
            <span className="text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[16px] font-medium text-gray-800 leading-tight whitespace-nowrap">
              Fast Turnaround
            </span>
          </div>

          <div className="w-[1px] h-4 bg-gray-300/80 shrink-0" />

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-4 ring-[#FF0055]/15">
              <BarChart2 size={14} strokeWidth={2.5} className="text-white" />
            </div>
            <span className="text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[16px] font-medium text-gray-800 leading-tight whitespace-nowrap">
              Strategy-Led Execution
            </span>
          </div>

          <div className="w-[1px] h-4 bg-gray-300/80 shrink-0" />

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-4 ring-[#FF0055]/15">
              <Headphones size={14} strokeWidth={2.5} className="text-white" />
            </div>
            <span className="text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[16px] font-medium text-gray-800 leading-tight whitespace-nowrap">
              Long-Term Support
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
