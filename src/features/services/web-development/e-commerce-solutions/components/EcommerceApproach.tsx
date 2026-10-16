"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, TrendingUp, ArrowRight, Globe } from 'lucide-react';

export default function EcommerceApproach() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Think.",
      desc: "We study your customers, products and competitors before we design a single page."
    },
    {
      icon: Code2,
      title: "Build.",
      desc: "Design and development move together, shaped by what we learned about how your buyers shop."
    },
    {
      icon: TrendingUp,
      title: "Grow.",
      desc: "We track real sales and behaviour after launch, then keep refining the store to drive growth."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-20 xl:py-24 relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 items-center">

          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start pr-0 xl:pr-10 relative z-20"
          >
            <div className="mb-[18px] flex items-center gap-[14px] text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-[750] tracking-[.25em] text-gray-700 [&>span]:h-[2px] [&>span]:w-[30px] [&>span]:bg-[#ff0055] max-md:mb-3 max-md:tracking-[.23em] max-md:[&>span]:w-6">
              OUR APPROACH<span />
            </div>

            <h2 className="text-[#020205] m-0 font-sans text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.16] tracking-[-1.3px] mb-4">
              From Customer Insight to a <br />
              <span className="text-[#FF0055]">Store That Sells</span>
            </h2>

            <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] mb-8 max-w-[520px]">
              Every store we build moves through the same three stages, not as a slogan, but as how the work actually happens.
            </p>

            {/* Line by Line 3 Stages */}
            <div className="flex flex-col gap-6 mb-8 w-full">
              {steps.map(({ icon: Icon, title, desc }, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                  className="flex items-start gap-4"
                >
                  <div className="w-[42px] h-[42px] shrink-0 rounded-full bg-pink-50 flex items-center justify-center mt-0.5">
                    <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#D40047] to-[#FF0055] border border-[#FF3377] shadow-[0_3px_8px_rgba(255,0,85,0.3)] text-white">
                      <Icon className="w-[14px] h-[14px]" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-[#020205] text-[18px] sm:text-[18px] lg:text-[20px] font-bold mb-1 leading-tight">{title}</h4>
                    <p className="text-gray-700 text-[14px] sm:text-[15px] lg:text-[15px] leading-relaxed max-w-[520px]">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white font-bold text-[16px] flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-[0_4px_16px_rgba(255,0,85,0.25)]">
              Let’s Build Your Store
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right Column - Graphics Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-[350px] lg:h-[420px] xl:h-[420px] flex items-center justify-center mt-12 xl:mt-0"
          >

            {/* Background Decoration */}
            <div className="absolute top-[-10%] right-[-10%] w-[550px] lg:w-[500px] aspect-square bg-[#FFF0F5] rounded-full z-0 pointer-events-none" />
            <div className="absolute top-[38%] left-[-15%] lg:left-[-2%] w-[300px] lg:w-[350px] aspect-square bg-[#FFE5EE] rounded-full z-0 pointer-events-none" />
            <div className="absolute top-[-18%] left-[-5%] w-[180px] lg:w-[220px] aspect-square bg-[#FFEBF3] rounded-full z-0 pointer-events-none" />
            <div className="absolute bottom-[0%] left-[10%] w-[80%] h-[50px] bg-[#FFE5EE] rounded-full blur-[25px] pointer-events-none z-0 opacity-70" />

            {/* Dotted pattern circle */}
            <div className="absolute top-[5%] left-[20%] w-[200px] h-[200px] opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FF0055 1px, transparent 0)', backgroundSize: '18px 16px' }} />

            {/* Mockups Container */}
            <div className="relative w-full max-w-[580px] h-full flex items-center justify-center">

              <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float-gentle-1 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
                @keyframes float-gentle-2 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-12px); }
                }
                @keyframes float-gentle-3 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }
                .animate-float-1 { animation: float-gentle-1 6s ease-in-out infinite; }
                .animate-float-2 { animation: float-gentle-2 5.5s ease-in-out infinite; }
                .animate-float-3 { animation: float-gentle-3 7s ease-in-out infinite; }
              `}} />

              {/* Code editor side panel peek (Behind Laptop, Left) */}
              <div className="absolute left-[-5%] sm:left-[8%] top-[15%] sm:top-[20%] z-10 animate-float-2">
                <div
                  className="w-[160px] sm:w-[200px] h-[140px] sm:h-[170px] bg-[#1E1E1E] rounded-xl shadow-[15px_20px_40px_rgba(0,0,0,0.4)] border border-slate-700 overflow-hidden flex flex-col"
                  style={{ transform: "perspective(800px) rotateY(20deg) rotateX(5deg) rotateZ(-3deg)" }}
                >
                  <div className="h-5 sm:h-6 bg-[#2D2D2D] flex items-center px-2.5 sm:px-3 gap-1 sm:gap-1.5 shrink-0">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 p-3 sm:p-4 text-[7px] sm:text-[8.5px] font-mono leading-[1.7] overflow-hidden text-slate-300">
                    <div><span className="text-slate-500 mr-2">1</span> <span className="text-blue-400">&lt;!DOCTYPE html&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">2</span> <span className="text-pink-400">&lt;html <span className="text-blue-300">lang="en"</span>&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">3</span> <span className="text-pink-400">&lt;head&gt;</span></div>
                    <div className="ml-2 sm:ml-3"><span className="text-slate-500 mr-2 -ml-2 sm:-ml-3">4</span> <span className="text-pink-400">&lt;meta <span className="text-blue-300">charset="UTF-8"</span>&gt;</span></div>
                    <div className="ml-2 sm:ml-3"><span className="text-slate-500 mr-2 -ml-2 sm:-ml-3">5</span> <span className="text-pink-400">&lt;title&gt;</span><span className="text-white">Store</span><span className="text-pink-400">&lt;/title&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">6</span> <span className="text-pink-400">&lt;/head&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">7</span> <span className="text-pink-400">&lt;body&gt;</span></div>
                    <div className="ml-2 sm:ml-3"><span className="text-slate-500 mr-2 -ml-2 sm:-ml-3">8</span> <span className="text-pink-400">&lt;h1&gt;</span><span className="text-white">Online Store</span></div>
                    <div className="ml-4 sm:ml-6"><span className="text-slate-500 mr-2 -ml-4 sm:-ml-6">9</span> <span className="text-white">Built to Sell</span><span className="text-pink-400">&lt;/h1&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">10</span> <span className="text-pink-400">&lt;/body&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">11</span> <span className="text-pink-400">&lt;/html&gt;</span></div>
                  </div>
                </div>
              </div>

              {/* Laptop Bottom Shadow */}
              <div className="absolute bottom-[0%] lg:bottom-[3%] right-[2%] lg:right-[5%] w-[75%] h-[15px] sm:h-[25px] bg-slate-400/40 rounded-[100%] blur-[12px] z-10 pointer-events-none" />

              {/* Main Laptop Image */}
              <img
                src="/images/services/web-dev/laptop.webp"
                alt="Laptop E-commerce Development"
                className="relative z-20 w-[100%] sm:w-[105%] max-w-none object-contain translate-x-[5%] lg:translate-x-[8%] animate-float-1"
              />

              {/* Mobile Bottom Shadow */}
              <div className="absolute bottom-[-4%] sm:bottom-[-1%] left-[5%] sm:left-[12%] w-[80px] sm:w-[140px] h-[10px] sm:h-[15px] bg-slate-400/40 rounded-[100%] blur-[8px] z-20 pointer-events-none" />

              {/* Mobile Mockup Image */}
              <img
                src="/images/services/web-dev/mobile.webp"
                alt="Mobile E-commerce Store"
                className="absolute bottom-[-2%] sm:bottom-[2%] left-[2%] sm:left-[10%] w-[100px] sm:w-[180px] object-contain z-30 animate-float-2"
              />

              {/* Floating Pill */}
              <div className="absolute bottom-[10%] right-[0%] sm:right-[5%] z-40 bg-white/90 backdrop-blur-sm rounded-[12px] p-2 sm:p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-white/50 flex items-center gap-2 sm:gap-3 animate-float-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0055]" />
                </div>
                <div className="pr-1 sm:pr-2">
                  <p className="text-slate-800 font-extrabold text-[11px] sm:text-[13px] leading-tight mb-0.5">High Speed</p>
                  <p className="text-slate-700 text-[9px] sm:text-[11px] leading-tight font-medium">Checkout Flow</p>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
