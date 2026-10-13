"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap, Maximize, MessageSquare, HeadphonesIcon, ArrowRight } from 'lucide-react';

export default function WebDevWhyChooseUs() {
  const reasons = [
    {
      id: "01",
      icon: <Users className="w-5 h-5 text-[#FF0055]" />,
      title: "Experienced Team",
      desc: "Designers, developers and\nstrategists who've shaped\nsolutions for startups and\nenterprises alike."
    },
    {
      id: "02",
      icon: <ShieldCheck className="w-5 h-5 text-[#FF0055]" />,
      title: "Secure & Reliable",
      desc: "Built on dependable practices\nthat keep your site safe,\nstable and always online."
    },
    {
      id: "03",
      icon: <Zap className="w-5 h-5 text-[#FF0055]" />,
      title: "High Performance",
      desc: "Tuned for speed, SEO and\na smooth experience\non every device."
    },
    {
      id: "04",
      icon: <Maximize className="w-5 h-5 text-[#FF0055]" />,
      title: "Scalable Solutions",
      desc: "Built to grow alongside\nyour business — from a five-person\nteam to a multi-city enterprise."
    },
    {
      id: "05",
      icon: <MessageSquare className="w-5 h-5 text-[#FF0055]" />,
      title: "Transparent Process",
      desc: "Clear communication and full\nvisibility at every stage,\nnothing handed off."
    },
    {
      id: "06",
      icon: <HeadphonesIcon className="w-5 h-5 text-[#FF0055]" />,
      title: "Ongoing Support",
      desc: "We stay on after launch to grow\nwhat we've built — updates,\nmaintenance and support, not a one-time delivery."
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
              More Than Just <br className="hidden sm:inline lg:hidden xl:inline" />
              <span className="text-[#FF0055]">Web Development</span>
            </h2>

            <p className="text-slate-200 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] mb-6 max-w-[420px] lg:max-w-2xl xl:max-w-[420px]">
              We don't just build websites. We think your business through first, then build exactly what it needs, and grow it with you — fast, secure, and built to last.
            </p>

            {/* Laptop & Rock Images Container (Desktop / Laptop xl+ - both images locked together inside this container) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative w-full h-[340px] md:h-[340px] lg:h-[340px] xl:h-[340px] 2xl:h-[340px] [@media(min-width:1920px)]:h-[340px] top-[0px] md:top-[0px] lg:top-[0px] xl:top-[0px] 2xl:top-[0px] [@media(min-width:1920px)]:top-[0px] left-[0px] md:left-[0px] lg:left-[0px] xl:left-[0px] 2xl:left-[0px] [@media(min-width:1920px)]:left-[0px] right-auto md:right-auto lg:right-auto xl:right-auto 2xl:right-auto [@media(min-width:1920px)]:right-auto mt-2 md:mt-2 lg:mt-2 xl:mt-2 2xl:mt-2 [@media(min-width:1920px)]:mt-2 hidden xl:block pointer-events-none"
            >

              {/* Background Arc */}
              <img
                src="/images/services/web-dev/hero-bg.webp"
                alt="Glowing Background Arc"
                className="absolute left-[-5%] md:left-[-5%] lg:left-[-5%] xl:left-[-5%] 2xl:left-[-5%] [@media(min-width:1920px)]:left-[-5%] right-auto md:right-auto lg:right-auto xl:right-auto 2xl:right-auto [@media(min-width:1920px)]:right-auto top-[25%] md:top-[25%] lg:top-[25%] xl:top-[25%] 2xl:top-[25%] [@media(min-width:1920px)]:top-[25%] w-[115%] md:w-[115%] lg:w-[115%] xl:w-[115%] 2xl:w-[115%] [@media(min-width:1920px)]:w-[115%] max-w-none object-contain z-0 opacity-90"
              />

              {/* Foreground Laptop on Rock */}
              <img
                src="/images/services/web-dev/hero-laptop.webp"
                alt="Why Choose Us Laptop"
                className="absolute left-[-20%] md:left-[-20%] lg:left-[-20%] xl:left-[-20%] 2xl:left-[-20%] [@media(min-width:1920px)]:left-[-20%] right-auto md:right-auto lg:right-auto xl:right-auto 2xl:right-auto [@media(min-width:1920px)]:right-auto top-[8%] md:top-[8%] lg:top-[8%] xl:top-[8%] 2xl:top-[8%] [@media(min-width:1920px)]:top-[8%] w-[135%] md:w-[135%] lg:w-[135%] xl:w-[135%] 2xl:w-[135%] [@media(min-width:1920px)]:w-[135%] max-w-none object-contain z-10"
              />
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

            {/* Laptop & Rock Images Container (Mobile, Tablet, and Laptop lg — stacked below cards & above stats) */}
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[540px] mx-auto mt-4 sm:mt-6 mb-2 block xl:hidden pointer-events-none z-10 isolate">
              <div className="relative w-full aspect-[16/11]">
                {/* Background Arc */}
                <img
                  src="/images/services/web-dev/hero-bg.webp"
                  alt="Glowing Background Arc"
                  className="absolute left-[7%] sm:left-[7%] md:left-[7%] lg:left-[7%] top-[14%] sm:top-[14%] md:top-[14%] lg:top-[14%] w-[86%] sm:w-[86%] md:w-[86%] lg:w-[86%] object-contain z-0 opacity-90"
                />

                {/* Foreground Laptop on Rock */}
                <img
                  src="/images/services/web-dev/hero-laptop.webp"
                  alt="Why Choose Us Laptop"
                  className="absolute left-0 sm:left-0 md:left-0 lg:left-0 top-[2%] sm:top-[2%] md:top-[2%] lg:top-[2%] w-full sm:w-full md:w-full lg:w-full object-contain z-10"
                />
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

              {/* Inner Content - solid black bg, 2 cols on mobile with vertical divider only (no table row borders), 4 cols on sm/tablet/desktop */}
              <div className="relative z-20 py-4 sm:py-3 lg:py-5 px-3 sm:px-3 h-full bg-[#05050A] border border-white/5 group-hover:border-transparent rounded-[10px] sm:rounded-[16px] transition-colors duration-300 grid grid-cols-2 sm:grid-cols-4 gap-y-4 sm:gap-y-0 text-center">
                <div className="absolute bottom-[-50%] right-[-10%] w-[150px] h-[150px] bg-[#FF0055]/10 blur-[40px] pointer-events-none" />

                {/* Stat 1 */}
                <div className="flex flex-col justify-center relative z-10 py-1 sm:py-0 border-r border-white/10 px-2">
                  <span className="text-[#FF0055] font-black text-[22px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[32px] 2xl:text-[32px] [@media(min-width:1920px)]:text-[32px] leading-none mb-1">100+</span>
                  <span className="text-slate-200 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] font-medium leading-snug">Websites Delivered</span>
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
