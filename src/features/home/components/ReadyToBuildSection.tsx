"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket, Users, Globe, Trophy } from 'lucide-react';

export default function ReadyToBuildSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 lg:py-20 font-sans">

      {/* Background Image Area */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* The user's mountain/sunrise image with granular responsive controls for precise size and placement */}
        <div
          className="absolute bg-contain bg-[80%_100%] md:bg-right-bottom bg-no-repeat z-0
            bottom-[20%] right-[-15%] w-[130%] h-[70%] 
            sm:bottom-[15%] sm:right-[-5%] sm:w-[90%] sm:h-[70%]
            lg:bottom-[18%] lg:right-[-8%] lg:w-[70%] lg:h-[80%]
            xl:bottom-[18%] xl:right-[-6%] xl:w-[65%] xl:h-[80%]
            2xl:bottom-[20%] 2xl:right-[-5%] 2xl:w-[60%] 2xl:h-[75%]
            [@media(min-width:1920px)]:bottom-[20%] [@media(min-width:1920px)]:right-[-5%] [@media(min-width:1920px)]:w-[55%] [@media(min-width:1920px)]:h-[75%]
          "
          style={{ 
            backgroundImage: "url('/homeperson2.png')",
            /* Mask to softly fade the top 70% of the container to catch the top crop, and fade left/bottom borders */
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 30%, transparent 100%), linear-gradient(to right, transparent 0%, black 25%, black 100%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 30%, transparent 100%), linear-gradient(to right, transparent 0%, black 25%, black 100%, transparent 100%)',
            maskComposite: 'intersect'
          }}
        />

        {/* Stronger Left fade for text area, ensuring seamless blend and high readability */}
        <div
          className="absolute inset-y-0 left-0 w-[90%] md:w-[70%] lg:w-[60%] z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #ffffff 0%, #ffffff 40%, rgba(255,255,255,0.85) 65%, transparent 100%)'
          }}
        />

        {/* Deep Top mist fade with stronger white to bring white shade further down the image */}
        <div
          className="absolute inset-x-0 top-0 h-[50%] z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 20%, rgba(255,255,255,0.9) 55%, transparent 100%)'
          }}
        />

        {/* Subtle Bottom mist fade, just enough to blend into the stats bar */}
        <div
          className="absolute inset-x-0 bottom-0 h-[30%] md:h-[25%] z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #ffffff 0%, #ffffff 15%, rgba(255,255,255,0.85) 50%, transparent 100%)'
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between h-full">

        {/* Top Content (Text & Buttons) */}
        <div className="w-full lg:w-1/2 pt-8 pb-16 lg:pb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#FF0055] font-bold text-sm tracking-widest uppercase">
              READY TO BUILD
            </span>
            <div className="w-10 h-[2px] bg-[#FF0055]"></div>
          </div>
          <h2 className="text-[46px] sm:text-[52px] lg:text-[64px] font-extrabold text-[#0A1024] leading-[1.1] mb-6 tracking-tight font-heading">
            What's Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0055] to-[#B000B0]">
              for Your Business?
            </span>
          </h2>
          <p className="text-slate-600 text-xs md:text-base mb-10 max-w-md leading-relaxed font-medium">
            Let's turn your ideas into real-world impact. Partner with Kaelixo and bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-4">
            <Link
              href="#contact"
              className="inline-flex min-w-[160px] sm:min-w-0 sm:w-auto items-center justify-center gap-1.5 sm:gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#FF0055] hover:bg-[#E6004C] text-white text-[13px] sm:text-sm font-semibold transition-all shadow-lg shadow-[#FF0055]/30 hover:shadow-[#FF0055]/50 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Let's Talk <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex min-w-[160px] sm:min-w-0 sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-slate-300 hover:border-[#FF0055] text-[#0A1024] text-[13px] sm:text-sm font-semibold bg-white/50 backdrop-blur-sm transition-all hover:bg-white whitespace-nowrap"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="w-full mt-4 sm:mt-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-10 md:divide-x divide-slate-300/80">

            {/* Stat 1 */}
            <div className="flex flex-row items-center sm:items-start gap-3 sm:gap-4 lg:gap-6 justify-start px-2 sm:px-2 md:px-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-[1.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-[18px] sm:text-2xl lg:text-[28px] font-extrabold text-[#0A1024] leading-none mb-1">250+</h4>
                <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 font-medium leading-tight sm:leading-normal">Projects<br className="hidden sm:block lg:hidden" /> Delivered</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-row items-center sm:items-start gap-3 sm:gap-4 lg:gap-6 justify-start px-2 sm:px-2 md:px-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-[1.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-[18px] sm:text-2xl lg:text-[28px] font-extrabold text-[#0A1024] leading-none mb-1">120+</h4>
                <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 font-medium leading-tight sm:leading-normal">Happy<br className="hidden sm:block lg:hidden" /> Clients</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-row items-center sm:items-start gap-3 sm:gap-4 lg:gap-6 justify-start px-2 sm:px-2 md:px-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-[1.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-[18px] sm:text-2xl lg:text-[28px] font-extrabold text-[#0A1024] leading-none mb-1">10+</h4>
                <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 font-medium leading-tight sm:leading-normal">Countries<br className="hidden sm:block lg:hidden" /> Served</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-row items-center sm:items-start gap-3 sm:gap-4 lg:gap-6 justify-start md:justify-end px-2 sm:px-2 md:px-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-[1.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-[18px] sm:text-2xl lg:text-[28px] font-extrabold text-[#0A1024] leading-none mb-1">98%</h4>
                <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 font-medium leading-tight sm:leading-normal">Client<br className="hidden sm:block lg:hidden" /> Satisfaction</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
