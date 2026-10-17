"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, TrendingUp, ArrowRight } from 'lucide-react';

export default function WebsiteMaintenanceApproach() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Think.",
      desc: "We begin with a full review of your site, covering its speed, security, content and visitor behaviour, before any work is planned."
    },
    {
      icon: Code2,
      title: "Build.",
      desc: "We repair what's holding it back and carry out the updates and upgrades the review points to, with no guesswork."
    },
    {
      icon: TrendingUp,
      title: "Grow.",
      desc: "We keep studying the data and keep refining, so your site improves every month instead of just ageing."
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
              From Knowing Your Site to <br />
              <span className="text-[#FF0055]">Helping It Thrive</span>
            </h2>

            <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] mb-8 max-w-[520px]">
              Every care plan we run follows the same three stages. It isn't a slogan, it's how the work really happens.
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
              Let's Look After Your Website
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right Column - Graphics Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] xl:h-[500px] flex items-center justify-center mt-12 xl:mt-0"
          >

            {/* Background Decoration (Multiple Overlapping Pink Shapes) */}
            <div className="absolute top-[-10%] right-[-10%] w-[550px] lg:w-[500px] aspect-square bg-[#FFF0F5] rounded-full z-0 pointer-events-none" />
            <div className="absolute top-[38%] left-[-15%] lg:left-[-2%] w-[300px] lg:w-[350px] aspect-square bg-[#FFE5EE] rounded-full z-0 pointer-events-none" />
            <div className="absolute top-[-18%] left-[-5%] w-[180px] lg:w-[220px] aspect-square bg-[#FFEBF3] rounded-full z-0 pointer-events-none" />
            <div className="absolute bottom-[0%] left-[10%] w-[80%] h-[50px] bg-[#FFE5EE] rounded-full blur-[25px] pointer-events-none z-0 opacity-70" />

            {/* Dotted pattern circle */}
            <div className="absolute top-[5%] left-[20%] w-[200px] h-[200px] opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FF0055 1px, transparent 0)', backgroundSize: '18px 16px' }} />

            {/* Image Container with smooth floating translate animation */}
            <div className="relative w-full max-w-[640px] h-full flex items-center justify-center z-10">
              <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float-maintenance-approach {
                  0%, 100% {
                    transform: translateY(0px) rotate(0deg);
                  }
                  50% {
                    transform: translateY(-12px) rotate(0.4deg);
                  }
                }
                .animate-float-maintenance {
                  animation: float-maintenance-approach 6s ease-in-out infinite;
                  will-change: transform;
                }
              `}} />

              {/* Bottom Soft Ambient Shadow */}
              <div className="absolute bottom-[4%] left-[10%] w-[80%] h-[25px] sm:h-[35px] bg-slate-900/10 rounded-[100%] blur-[16px] pointer-events-none z-0" />

              {/* Approach Single Graphic */}
              <img
                src="/images/services/web-dev/website-maintenance-and-support-our-approach.png"
                alt="Website Maintenance & Support Approach & Care Plan"
                className="relative z-10 w-full h-auto max-h-[95%] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.08)] animate-float-maintenance"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
