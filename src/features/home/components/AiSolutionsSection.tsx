"use client";

import React, { useState, useEffect } from 'react';
import { Settings, User, BarChart2, BrainCircuit, ArrowRight, Quote, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function AiSolutionsSection() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  
  const quotes = [
    "AI won't replace businesses.\nBut businesses that use AI\nwill replace those that don't.",
    "The future belongs to those\nwho integrate AI seamlessly\ninto their business vision."
  ];

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setActiveQuote((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    
    return () => {
      clearInterval(quoteInterval);
      clearInterval(featureInterval);
    };
  }, []);

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#020205] overflow-hidden">

      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0 flex justify-end">

        {/* Gradients for blending the image into the dark background and masking the hard edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205]/95 to-transparent z-10 w-[80%] lg:w-[50%]" />

        {/* Top and bottom vignettes to blend with adjacent sections */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020205] to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020205] to-transparent z-10" />

        {/* Image layer - Desktop Animated SVG */}
        <div className="relative w-full lg:w-[70%] h-full hidden lg:block">
          <Image
            src="/images/home/animated-circuit-lines.svg"
            alt="AI Solutions Animated Background"
            fill
            className="object-cover object-[right_top] lg:object-right opacity-100"
            sizes="70vw"
            quality={100}
            priority
          />
        </div>

        {/* Image layer - Mobile Animated SVG */}
        <div className="relative w-full h-[65%] lg:hidden mt-auto">
          <Image
            src="/images/home/mobile-animated-circuit-lines.svg"
            alt="AI Solutions Animated Background Mobile"
            fill
            className="object-cover object-right opacity-90 -translate-x-[0%] -translate-y-[5%]"
            sizes="100vw"
            quality={100}
            priority
          />
          {/* Top gradient for mobile to blend into the dark bg above it */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020205] via-[#020205]/80 to-transparent z-10" />
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="max-w-[550px]"
          >
            {/* Eyebrow */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="flex items-center gap-3 mb-4">
              <span className="text-[#FF0055] font-bold text-[12px] sm:text-[13px] lg:text-[18px] xl:text-[18px] tracking-[0.25em] uppercase">
                AI SOLUTIONS
              </span>
              <div className="w-8 h-[2px] bg-[#FF0055]" />
            </motion.div>

            {/* Headline */}
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px]  font-extrabold leading-[1.05] tracking-tight mb-4 font-heading">
              AI Thinking for a<br />
              Smarter <span className="text-[#FF0066]">Tomorrow</span>
            </motion.h2>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="text-slate-300 text-[16px] leading-[1.6] mb-8 lg:mb-6 xl:mb-8 max-w-[480px] lg:max-w-[380px] xl:max-w-[480px]">
              We integrate artificial intelligence into real business solutions — helping you automate, predict, personalize and grow without limits, the same intelligence-first approach that runs through every growth marketing agency service we offer.
            </motion.p>

            {/* Feature List - Desktop */}
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="hidden lg:block space-y-3 xl:space-y-4 mb-8 lg:mb-6 xl:mb-8">
              <FeatureItem icon={Settings} title="Process Automation" desc="Streamline operations and reduce manual work." />
              <FeatureItem icon={User} title="Intelligent Customer Experiences" desc="Create personalized interactions that build loyalty." />
              <FeatureItem icon={BarChart2} title="Data-Driven Decision Making" desc="Turn raw data into actionable insight." />
              <FeatureItem icon={BrainCircuit} title="Custom AI Solutions" desc="Tailored to your business logic, not generic tools." />
            </motion.div>

            {/* Feature List - Mobile Carousel */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="block lg:hidden mb-8 w-full max-w-sm">
              <div className="relative border border-white/10 rounded-[16px] bg-[#0c0418]/60 backdrop-blur-md p-5 h-[160px] flex flex-col justify-between overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 group cursor-pointer w-full"
                    onClick={() => setActiveFeature((prev) => (prev + 1) % 4)}
                  >
                    <div className="w-12 h-12 rounded-[12px] border flex items-center justify-center shrink-0 bg-[#16132b] border-[#c084fc]/20 text-[#c084fc]">
                      {activeFeature === 0 && <Settings className="w-6 h-6" />}
                      {activeFeature === 1 && <User className="w-6 h-6" />}
                      {activeFeature === 2 && <BarChart2 className="w-6 h-6" />}
                      {activeFeature === 3 && <BrainCircuit className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[16px] font-bold leading-tight mb-1">
                        {activeFeature === 0 && "Process Automation"}
                        {activeFeature === 1 && "Intelligent Customer Experiences"}
                        {activeFeature === 2 && "Data-Driven Decision Making"}
                        {activeFeature === 3 && "Custom AI Solutions"}
                      </h4>
                      <p className="text-slate-300 text-[13px] leading-[1.4] line-clamp-2">
                        {activeFeature === 0 && "Streamline operations and reduce manual work."}
                        {activeFeature === 1 && "Create personalized interactions that build loyalty."}
                        {activeFeature === 2 && "Turn raw data into actionable insight."}
                        {activeFeature === 3 && "Tailored to your business logic, not generic tools."}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
                  <span className="text-slate-400 text-[12px] tracking-widest">{activeFeature + 1} / 4</span>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3].map((i) => (
                      <button
                        key={i}
                        onClick={() => setActiveFeature(i)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === activeFeature ? 'bg-[#FF0055]' : 'bg-white/20'}`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Area */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-2">
              <Link
                href="/services/ai-solutions"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377]/50 hover:border-[#FF6699] text-white text-[14px] sm:text-[15px] xl:text-[16px] font-medium tracking-wide shadow-[0_0_20px_rgba(255,0,85,0.3)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] hover:brightness-110 transition-all duration-300 active:scale-95 cursor-pointer shrink-0"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-4 sm:gap-5 h-10 sm:h-12 ml-2 sm:ml-0">
                <div className="w-[1px] h-full bg-white/20" />
                <p className="text-slate-300 text-[13px] sm:text-[14px] xl:text-[16px] leading-[1.5]">
                  From Possibilities<br />to Real Impact
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Overlays */}
          <div className="relative h-full min-h-[350px] sm:min-h-[400px] block w-full">

            {/* The Floating AI Box with Animated Gradient Border */}
            {/* 
              POSITION ADJUSTMENTS:
              Modify the 'top-' and 'right-' values below to change the card's position on different screen sizes.
            */}
            <motion.div 
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute z-20 group overflow-hidden rounded-[10px] sm:rounded-[14px] shadow-[0_0_50px_rgba(255,0,102,0.15)] w-[65px] sm:w-[120px] lg:w-[100px] xl:w-[120px] aspect-[4/5] 
              top-[10%] -right-[5%]
              sm:top-[25%] sm:right-[10%] 
              md:top-[30%] md:right-[15%] 
              lg:top-[30%] lg:right-[33%] 
              xl:top-[24%] xl:right-[38%] 
              2xl:top-[24%] 2xl:right-[27%]
              [@media(min-width:1920px)]:top-[25%] [@media(min-width:1920px)]:-right-[19px]
            ">
              {/* Spinning Gradient for Border */}
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#FF0066_360deg)] opacity-70" />
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#FF0066_360deg)] opacity-70" />

              {/* Static faint border fallback */}
              <div className="absolute inset-0 rounded-[10px] sm:rounded-[14px] border border-[#FF0066]/20" />

              {/* Inner Glass Content */}
              <div className="absolute inset-[2px] rounded-[8px] sm:rounded-[12px] bg-[#0c0418]/70 backdrop-blur-md flex flex-col items-center justify-center border border-white/5">
                <span className="text-[#FF0066] text-[24px] sm:text-[36px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] font-black tracking-tighter mb-1 sm:mb-2 lg:mb-1 xl:mb-2 font-heading drop-shadow-[0_0_15px_rgba(255,0,102,0.8)]">AI</span>
                <div className="flex flex-col items-start w-[85%] mx-auto pl-1 sm:pl-2">
                  <span className="text-white/90 text-[5px] sm:text-[8px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] [@media(min-width:1920px)]:text-[10px] font-medium tracking-[0.35em] text-left uppercase leading-[1.7] drop-shadow-sm">
                    FOR A<br />BRIGHTER<br />TOMORROW
                  </span>
                </div>
              </div>
            </motion.div>

            {/* The Quote Box with Animated Border & Carousel */}
            {/* 
              POSITION ADJUSTMENTS:
              Modify the 'bottom-' and 'right-' values below to change the quote box's position.
            */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="absolute z-20 group overflow-hidden rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] w-[92%] sm:w-[320px] md:w-[350px] lg:w-[320px] xl:w-[350px] p-[2px]
              bottom-2 left-1/2 -translate-x-1/2
              sm:left-auto sm:translate-x-0 sm:bottom-10 sm:right-0 
              md:bottom-12 md:right-0 
              lg:bottom-12 lg:right-4 
              xl:bottom-0 xl:right-80 
              2xl:-bottom-10 2xl:right-[350px]
              [@media(min-width:1920px)]:-bottom-[60px] [@media(min-width:1920px)]:right-[280px]
            ">
              {/* Spinning Gradient for Border */}
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#FF0066_360deg)] opacity-30" />
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#FF0066_360deg)] opacity-30" />

              {/* Inner Content (Sets the height of the card) */}
              <div className="relative z-10 rounded-[14px] bg-[#0c0418]/60 backdrop-blur-lg p-4 sm:p-5 lg:p-7 flex flex-row lg:flex-col items-center lg:items-start border border-white/10 h-[110px] sm:h-[130px] lg:h-auto lg:min-h-[220px]">
                
                {/* Left/Top Side: Quote Text */}
                <div className="flex-1 flex flex-col justify-between lg:justify-start h-full lg:h-auto pr-3 lg:pr-0 lg:w-full">
                  <div className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif leading-none h-4 sm:h-6 lg:h-8 mb-2 lg:mb-4 bg-gradient-to-r from-[#FFB3D9] to-[#FF0055] bg-clip-text text-transparent select-none">
                    “
                  </div>
                  <div className="relative flex-1 w-full lg:h-[90px] lg:mb-6">
                    {quotes.map((quote, idx) => (
                      <p
                        key={idx}
                        className={`absolute inset-0 flex items-center lg:items-start text-white text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-[1.5] lg:leading-[1.6] font-medium drop-shadow-sm whitespace-pre-line transition-all duration-500 ${activeQuote === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                          }`}
                      >
                        {quote}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right Side (Mobile Only): Vertical Divider and Title */}
                <div className="flex lg:hidden flex-col items-center justify-center shrink-0 pl-3 sm:pl-4 border-l border-white/10 h-[70%]">
                  <span className="text-[#d8b4fe] text-[7px] sm:text-[9px] font-semibold tracking-[0.2em] text-center uppercase leading-[1.4] mb-2">
                    A SMARTER<br />TOMORROW
                  </span>
                  <div className="h-[2px] w-6 sm:w-8 bg-[#FF0055]" />
                </div>

                {/* Bottom Bar (Desktop Only): Lines and Title */}
                <div className="hidden lg:flex w-full items-end justify-between mt-auto">
                  <div className="flex gap-2 lg:gap-3 mb-1">
                    <div className={`h-[3px] rounded-full transition-all duration-300 ${activeQuote === 0 ? 'w-8 bg-[#FF0055]' : 'w-8 bg-[#2a1a4a]'}`} />
                    <div className={`h-[3px] rounded-full transition-all duration-300 ${activeQuote === 1 ? 'w-8 bg-[#FF0055]' : 'w-8 bg-[#2a1a4a]'}`} />
                  </div>
                  <span className="text-[#d8b4fe] text-[10px] xl:text-[11px] font-semibold tracking-[0.2em] text-right uppercase leading-[1.4]">
                    A SMARTER<br />TOMORROW
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      className="flex items-center gap-4 md:gap-3 lg:gap-3 xl:gap-4 group"
    >
      <div
        className="w-11 h-11 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-[12px] border flex items-center justify-center shrink-0 transition-all duration-300 bg-[#16132b] border-[#c084fc]/20 group-hover:bg-[#2a0e1b] group-hover:border-[#f43f5e]/50 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]"
      >
        <Icon className="w-5 h-5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 transition-colors duration-300 text-[#c084fc] group-hover:text-[#f43f5e]" />
      </div>
      <div>
        <h4 className="text-white text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[24px] font-bold leading-tight mb-0.5">{title}</h4>
        <p className="text-slate-300 text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-[1.4]">{desc}</p>
      </div>
    </motion.div>
  );
}
