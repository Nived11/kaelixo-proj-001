"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket, Users, Globe, Trophy } from 'lucide-react';

export default function ReadyToBuildSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 lg:py-20 font-sans">

      {/* Background Image Area */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* Left diagonal fade to cover the text area and blend the image smoothly */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, #ffffff 0%, #ffffff 45%, rgba(255,255,255,0.7) 55%, transparent 70%)'
          }}
        />
        {/* Bottom mist fade to cover the rocks and blend into the stats bar */}
        <div
          className="absolute inset-x-0 bottom-0 h-[40%] z-10"
          style={{
            background: 'linear-gradient(to top, #ffffff 15%, rgba(255,255,255,0.9) 40%, transparent 100%)'
          }}
        />

        {/* The user's mountain/sunrise image with granular responsive controls */}
        <div
          className="absolute bg-contain bg-right-bottom bg-no-repeat z-0
            bottom-[15%] right-[-10%] w-[120%] h-[70%] 
            sm:bottom-[15%] sm:right-[-5%] sm:w-[90%] sm:h-[70%]
            lg:bottom-[18%] lg:right-[-8%] lg:w-[70%] lg:h-[80%]
            xl:bottom-[18%] xl:right-[-6%] xl:w-[65%] xl:h-[80%]
            2xl:bottom-[20%] 2xl:right-[-5%] 2xl:w-[60%] 2xl:h-[75%]
            [@media(min-width:1920px)]:bottom-[20%] [@media(min-width:1920px)]:right-[-5%] [@media(min-width:1920px)]:w-[55%] [@media(min-width:1920px)]:h-[75%]
          "
          style={{ backgroundImage: "url('/homeperson.png')" }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between h-full">

        {/* Top Content (Text & Buttons) */}
        <div className="w-full lg:w-1/2 pt-8 pb-16 lg:pb-24">
          <p className="text-[#FF0055] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Ready to Build
          </p>
          <h2 className="text-[40px] md:text-5xl lg:text-[56px] font-extrabold text-[#0A1024] leading-[1.1] mb-6 tracking-tight font-heading">
            What's Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0055] to-[#B000B0]">
              for Your Business?
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-10 max-w-md leading-relaxed font-medium">
            Let's turn your ideas into real-world impact. Partner with Kaelixo and bring your vision to life.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF0055] hover:bg-[#E6004C] text-white text-sm font-semibold transition-all shadow-lg shadow-[#FF0055]/30 hover:shadow-[#FF0055]/50 hover:-translate-y-0.5"
            >
              Let's Talk <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-slate-300 hover:border-[#FF0055] text-[#0A1024] text-sm font-semibold bg-white/50 backdrop-blur-sm transition-all hover:bg-white"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="w-full mt-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 divide-x-0 md:divide-x divide-slate-300/80">

            {/* Stat 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6 justify-center md:justify-start px-2 md:px-6">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Rocket className="w-6 h-6 lg:w-7 lg:h-7 stroke-[1.5]" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-2xl lg:text-[28px] font-extrabold text-[#0A1024] leading-none mb-1">250+</h4>
                <p className="text-xs lg:text-sm text-slate-500 font-medium">Projects Delivered</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6 justify-center px-2 md:px-6">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Users className="w-6 h-6 lg:w-7 lg:h-7 stroke-[1.5]" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-2xl lg:text-[28px] font-extrabold text-[#0A1024] leading-none mb-1">120+</h4>
                <p className="text-xs lg:text-sm text-slate-500 font-medium">Happy Clients</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6 justify-center px-2 md:px-6">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Globe className="w-6 h-6 lg:w-7 lg:h-7 stroke-[1.5]" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-2xl lg:text-[28px] font-extrabold text-[#0A1024] leading-none mb-1">10+</h4>
                <p className="text-xs lg:text-sm text-slate-500 font-medium">Countries Served</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:gap-6 justify-center md:justify-end px-2 md:px-6">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Trophy className="w-6 h-6 lg:w-7 lg:h-7 stroke-[1.5]" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-2xl lg:text-[28px] font-extrabold text-[#0A1024] leading-none mb-1">98%</h4>
                <p className="text-xs lg:text-sm text-slate-500 font-medium">Client Satisfaction</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
