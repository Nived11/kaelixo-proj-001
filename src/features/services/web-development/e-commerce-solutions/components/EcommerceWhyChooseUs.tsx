"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Maximize, MessageSquare, HeadphonesIcon, Sparkles } from 'lucide-react';

export default function EcommerceWhyChooseUs() {
  const reasons = [
    {
      id: "01",
      icon: <Sparkles className="w-5 h-5 text-[#FF0055]" />,
      title: "Shopper-First Thinking",
      desc: "We study how your shoppers browse and buy before we design anything."
    },
    {
      id: "02",
      icon: <ShieldCheck className="w-5 h-5 text-[#FF0055]" />,
      title: "Safe, Stable Stores",
      desc: "Built on dependable practices that keep payments, data and uptime protected."
    },
    {
      id: "03",
      icon: <Zap className="w-5 h-5 text-[#FF0055]" />,
      title: "Speed That Sells",
      desc: "Tuned for fast load times, because slow pages cost sales."
    },
    {
      id: "04",
      icon: <Maximize className="w-5 h-5 text-[#FF0055]" />,
      title: "Room to Grow",
      desc: "Built to handle more products, more traffic and more orders as you grow."
    },
    {
      id: "05",
      icon: <MessageSquare className="w-5 h-5 text-[#FF0055]" />,
      title: "Clear, Open Process",
      desc: "Clear communication and full visibility at every stage, with nothing handed off."
    },
    {
      id: "06",
      icon: <HeadphonesIcon className="w-5 h-5 text-[#FF0055]" />,
      title: "Support After Launch",
      desc: "We stay on after launch, as a provider of ecommerce web development services should."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-20 xl:py-24 relative overflow-hidden bg-[#020205]">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#FF0055]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-8 xl:gap-8">

          {/* Left Column (Header & Desktop Laptop) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="xl:col-span-5 flex flex-col items-start pr-0 xl:pr-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-slate-200 font-[750] text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] tracking-[0.25em] uppercase">
                WHY CHOOSE US
              </span>
              <div className="w-10 h-[2px] bg-[#FF0055]" />
            </div>

            <h2 className="text-white text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.05] tracking-tight mb-4 font-heading">
              Why Choose Kaelixo for <br className="hidden sm:inline lg:hidden xl:inline" />
              <span className="text-[#FF0055] inline-block">E-commerce Solutions</span>
            </h2>

            <p className="text-slate-200 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] mb-6 max-w-[420px] lg:max-w-2xl xl:max-w-[420px]">
              Kaelixo builds online stores around your customers, from the first idea to the first sale and every sale after.
            </p>

            {/* Graphic Container (Desktop / Laptop xl+) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative w-full xl:w-[112%] xl:-ml-[2%] h-[420px] xl:h-[460px] 2xl:h-[490px] mt-2 hidden xl:flex items-center justify-center pointer-events-none"
            >
              {/* Ambient Glow */}
              <div className="absolute top-[20%] left-[10%] w-[80%] h-[60%] bg-[#FF0055]/15 rounded-full blur-[50px] pointer-events-none z-0" />

              {/* Foreground Image - Static & Increased Size with Bottom Rock Gradient Blend */}
              <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/services/web-dev/e-commerce-solutions-whychooseus.webp"
                  alt="Why Choose Kaelixo for E-commerce Solutions"
                  className="w-full h-auto max-h-full object-contain drop-shadow-[0_20px_40px_rgba(255,0,85,0.2)]"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 70%, rgba(0,0,0,0.6) 84%, transparent 98%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, rgba(0,0,0,0.6) 84%, transparent 98%)',
                  }}
                />
                {/* Bottom Rock Gradient Overlay to softly blend into the dark background */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020205] via-[#020205]/80 to-transparent pointer-events-none z-20" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Grid & Stats */}
          <div className="xl:col-span-7 flex flex-col gap-3 lg:pl-0 xl:pl-12 pt-0">

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2.5 lg:gap-3">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: (idx % 2) * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-[20px] relative group overflow-hidden bg-[#05050A] shadow-[0_0_15px_rgba(255,0,85,0.02)]"
                >
                  {/* Animated Border Mask */}
                  <div
                    className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none z-10"
                    style={{
                      padding: '1px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#FF0055_40%,#ff3377_60%,transparent_100%)]" />
                  </div>

                  {/* Inner Content */}
                  <div className="relative z-20 px-4 py-4 lg:px-4.5 lg:py-4.5 xl:px-5 xl:py-5 h-full border border-white/5 group-hover:border-transparent rounded-[20px] transition-colors duration-300">
                    <div className="absolute top-4 right-4 text-slate-500/70 text-[16px] font-medium">
                      {reason.id}
                    </div>

                    <div className="w-10 h-10 mb-3 flex items-center justify-center relative rounded-full bg-[#0a0407] shadow-[inset_0_1px_3px_rgba(255,0,85,0.4)] border border-[#FF0055]/20 group-hover:border-[#FF0055]/50 transition-colors">
                      <div className="absolute inset-0 bg-[#FF0055]/30 blur-[8px] rounded-full" />
                      <div className="text-[#FF0055] relative z-10 group-hover:scale-110 transition-transform scale-[0.75]">
                        {reason.icon}
                      </div>
                    </div>

                    <h3 className="text-white text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold leading-tight mb-0.5">
                      {reason.title}
                    </h3>

                    <p className="text-slate-300 text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-relaxed relative z-10 ">
                      {reason.desc}
                    </p>

                    <div className="w-6 h-[2px] bg-[#FF0055] rounded-full mt-2.5 group-hover:w-10 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Graphic Container (Mobile, Tablet, and Laptop lg — stacked below cards & above stats) */}
            <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] mx-auto mt-6 mb-4 block xl:hidden pointer-events-none z-10 isolate">
              <div className="relative w-full flex items-center justify-center">
                {/* Ambient Glow */}
                <div className="absolute top-[20%] left-[10%] w-[80%] h-[60%] bg-[#FF0055]/15 rounded-full blur-[40px] pointer-events-none z-0" />

                <div className="relative z-10 w-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/services/web-dev/e-commerce-solutions-whychooseus.webp"
                    alt="Why Choose Kaelixo for E-commerce Solutions"
                    className="w-full h-auto max-h-[360px] object-contain drop-shadow-[0_20px_40px_rgba(255,0,85,0.2)]"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 70%, rgba(0,0,0,0.6) 84%, transparent 98%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 70%, rgba(0,0,0,0.6) 84%, transparent 98%)',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020205] via-[#020205]/80 to-transparent pointer-events-none z-20" />
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mt-3 rounded-[10px] sm:rounded-[16px] relative z-20 group overflow-hidden bg-black shadow-[0_0_15px_rgba(255,0,85,0.02)]"
            >
              {/* Animated Border Mask */}
              <div
                className="absolute inset-0 rounded-[10px] sm:rounded-[16px] overflow-hidden pointer-events-none z-10"
                style={{
                  padding: '1px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#FF0055_40%,#ff3377_60%,transparent_100%)]" />
              </div>

              {/* Inner Content */}
              <div className="relative z-20 py-4 sm:py-3 lg:py-5 px-3 sm:px-3 h-full bg-[#05050A] border border-white/5 group-hover:border-transparent rounded-[10px] sm:rounded-[16px] transition-colors duration-300 grid grid-cols-2 sm:grid-cols-4 gap-y-4 sm:gap-y-0 text-center">
                <div className="absolute bottom-[-50%] right-[-10%] w-[150px] h-[150px] bg-[#FF0055]/10 blur-[40px] pointer-events-none" />

                {/* Stat 1 */}
                <div className="flex flex-col justify-center relative z-10 py-1 sm:py-0 border-r border-white/10 px-2">
                  <span className="text-[#FF0055] font-black text-[22px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[32px] 2xl:text-[32px] [@media(min-width:1920px)]:text-[32px] leading-none mb-1">100+</span>
                  <span className="text-slate-200 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] font-medium leading-snug">Stores & Websites Delivered</span>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col justify-center relative z-10 py-1 sm:py-0 sm:border-r sm:border-white/10 px-2">
                  <span className="text-[#FF0055] font-black text-[22px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[32px] 2xl:text-[32px] [@media(min-width:1920px)]:text-[32px] leading-none mb-1">98%</span>
                  <span className="text-slate-200 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] font-medium leading-snug">Client Satisfaction</span>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col justify-center relative z-10 py-1 sm:py-0 border-r border-white/10 px-2">
                  <span className="text-[#FF0055] font-black text-[22px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[32px] 2xl:text-[32px] [@media(min-width:1920px)]:text-[32px] leading-none mb-1">5+</span>
                  <span className="text-slate-200 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] font-medium leading-snug">Years Experience</span>
                </div>

                {/* Stat 4 */}
                <div className="flex flex-col justify-center relative z-10 py-1 sm:py-0 px-2">
                  <span className="text-[#FF0055] font-black text-[22px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[32px] 2xl:text-[32px] [@media(min-width:1920px)]:text-[32px] leading-none mb-1">24/7</span>
                  <span className="text-slate-200 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] font-medium leading-snug">Support</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
