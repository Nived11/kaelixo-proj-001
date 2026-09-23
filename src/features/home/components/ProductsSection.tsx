"use client";

import React from "react";
import { ArrowRight, BookOpen, Box, LayoutDashboard, Bell, Search, Users, FileText } from "lucide-react";

export default function ProductsSection() {
  return (
    <section className="relative bg-[#020205] py-24 lg:py-32 overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-[60%] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[60%] bg-pink-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay (optional subtle texture) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================= */}
          {/* LEFT CONTENT                              */}
          {/* ========================================= */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pr-4 relative z-20">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-[#FF0055]" />
              <span className="text-[#FF0055] font-bold text-xs tracking-[0.25em] uppercase">
                Our Products
              </span>
            </div>

            <h2 className="text-[40px] sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.05] tracking-tight">
              Built by Kaelixo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF0055]">
                For Modern
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0055] to-[#A855F7]">
                Businesses.
              </span>
            </h2>

            <p className="text-slate-400 text-[15px] md:text-base max-w-[380px] leading-relaxed mt-6">
              Powerful digital products designed to simplify operations, improve productivity and accelerate growth.
            </p>

            <button className="mt-10 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF0055] to-[#A855F7] text-white font-bold text-[15px] flex items-center gap-2 shadow-[0_0_30px_rgba(255,0,85,0.4)] hover:shadow-[0_0_40px_rgba(255,0,85,0.6)] transition-all hover:scale-105 active:scale-95 group">
              Explore All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-16 flex items-center gap-4 text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
              <span>Simple</span>
              <span className="text-slate-700">/</span>
              <span>Powerful</span>
              <span className="text-slate-700">/</span>
              <span>Scalable</span>
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT CONTENT (Product Cards)             */}
          {/* ========================================= */}
          <div className="lg:col-span-8 relative mt-12 lg:mt-0 z-10">
             
             {/* Hand-drawn note (Hidden on small screens) */}
             <div className="hidden xl:block absolute -top-[10%] right-[0%] z-40 transform rotate-6">
                <p className="text-[#A855F7] font-['Dancing_Script',cursive] text-2xl leading-tight">
                  All<br/>Your Business<br/>In One Place
                </p>
                {/* Arrow SVG */}
                <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="absolute -bottom-10 left-4 text-[#A855F7] transform -rotate-12">
                   <path d="M5 5 C 20 20, 25 40, 15 55 M 15 55 L 5 45 M 15 55 L 25 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>

             <div className="flex flex-col gap-6 w-full">
                
                {/* TOP ROW: Way We Go (Spans full width) */}
                <div className="relative rounded-[2rem] p-[1px] overflow-hidden bg-gradient-to-br from-[#FF0055]/50 via-purple-500/20 to-blue-500/30 shadow-2xl shadow-purple-500/10 group">
                   <div className="absolute inset-0 bg-[#070B14]/90 backdrop-blur-xl z-0" />
                   
                   <div className="relative z-10 p-8 sm:p-10 flex flex-col md:flex-row gap-10 items-center justify-between h-full">
                      
                      {/* Left: Info */}
                      <div className="w-full md:w-[45%] flex flex-col items-start">
                         <div className="px-3 py-1 rounded-full bg-[#FF0055] text-white text-[10px] font-bold tracking-wider mb-8 shadow-[0_0_15px_rgba(255,0,85,0.5)]">
                            FEATURED PRODUCT
                         </div>
                         
                         <div className="flex items-center gap-4 mb-5">
                            <div className="w-[60px] h-[60px] rounded-[18px] bg-gradient-to-br from-[#FF0055] to-[#A855F7] flex items-center justify-center shadow-lg shadow-pink-500/30 shrink-0">
                               {/* Custom Icon (Glasses-like) */}
                               <div className="flex items-center gap-1">
                                  <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center"><div className="w-1.5 h-0.5 bg-white rounded-full"/></div>
                                  <div className="w-2 h-[2px] bg-white rounded-full" />
                                  <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center"><div className="w-1.5 h-0.5 bg-white rounded-full"/></div>
                               </div>
                            </div>
                            <div>
                               <h3 className="text-white text-2xl font-bold">Way We Go</h3>
                               <p className="text-slate-400 text-xs mt-1">Business Management CRM</p>
                            </div>
                         </div>

                         <p className="text-slate-300 text-[14px] leading-relaxed mb-8">
                            Manage leads, sales, projects and teams — all in one place. A smarter way to run and grow your business.
                         </p>

                         <button className="text-[#FF0055] font-semibold text-[14px] flex items-center gap-2 group-hover:gap-3 transition-all">
                            Learn More <ArrowRight className="w-4 h-4" />
                         </button>
                      </div>

                      {/* Right: Mock UI Dashboard */}
                      <div className="w-full md:w-[55%] relative">
                         {/* Dashboard Container */}
                         <div className="w-full aspect-[16/11] rounded-2xl bg-[#0F1523] border border-white/5 shadow-2xl overflow-hidden flex flex-col">
                            {/* Topbar */}
                            <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 shrink-0">
                               <div className="flex items-center gap-2">
                                  <div className="w-4 h-4 rounded-[4px] bg-[#FF0055] flex items-center justify-center">
                                     <div className="w-1.5 h-1.5 border-[1px] border-white rotate-45" />
                                  </div>
                                  <span className="text-white text-[10px] font-semibold">Way We Go</span>
                               </div>
                               <div className="flex items-center gap-3">
                                  <div className="w-20 h-5 rounded-md bg-white/5 flex items-center px-2 gap-1 text-slate-500">
                                     <Search className="w-2.5 h-2.5" />
                                     <span className="text-[7px]">Search...</span>
                                  </div>
                                  <Bell className="w-3 h-3 text-slate-400" />
                                  <div className="w-5 h-5 rounded-full bg-slate-600 border border-white/10" />
                               </div>
                            </div>
                            
                            {/* Main Content */}
                            <div className="flex flex-1 h-full overflow-hidden">
                               {/* Sidebar */}
                               <div className="w-14 h-full border-r border-white/5 flex flex-col gap-2 pt-3 items-center shrink-0">
                                  <div className="w-8 h-8 rounded-lg bg-[#FF0055]/10 text-[#FF0055] flex flex-col items-center justify-center">
                                     <LayoutDashboard className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="w-8 h-8 rounded-lg text-slate-500 flex flex-col items-center justify-center">
                                     <Users className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="w-8 h-8 rounded-lg text-slate-500 flex flex-col items-center justify-center">
                                     <FileText className="w-3.5 h-3.5" />
                                  </div>
                               </div>
                               
                               {/* Dashboard Body */}
                               <div className="flex-1 p-4 flex flex-col gap-3">
                                  <div>
                                     <h4 className="text-white text-[12px] font-semibold">Good morning!</h4>
                                     <p className="text-slate-500 text-[8px] mt-0.5">Here's what's happening today.</p>
                                  </div>

                                  <div className="grid grid-cols-3 gap-2">
                                     <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                                        <p className="text-slate-400 text-[8px] mb-1">Leads</p>
                                        <div className="flex items-end justify-between">
                                          <p className="text-white font-bold text-xs">128</p>
                                          <p className="text-emerald-400 text-[7px]">+12%</p>
                                        </div>
                                     </div>
                                     <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                                        <p className="text-slate-400 text-[8px] mb-1">Revenue</p>
                                        <div className="flex items-end justify-between">
                                          <p className="text-white font-bold text-xs">$24.5K</p>
                                          <p className="text-emerald-400 text-[7px]">+18%</p>
                                        </div>
                                     </div>
                                     <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                                        <p className="text-slate-400 text-[8px] mb-1">Projects</p>
                                        <div className="flex items-end justify-between">
                                          <p className="text-white font-bold text-xs">12</p>
                                          <p className="text-emerald-400 text-[7px]">+8%</p>
                                        </div>
                                     </div>
                                  </div>

                                  {/* Graph Mock */}
                                  <div className="flex-1 w-full mt-1 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden flex items-end">
                                     {/* Fake SVG line graph */}
                                     <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full absolute bottom-0 drop-shadow-[0_4px_8px_rgba(255,0,85,0.4)]">
                                        <path d="M0,35 Q10,35 20,25 T40,15 T60,20 T80,5 T100,0" fill="none" stroke="#FF0055" strokeWidth="1.5" />
                                        <path d="M0,35 Q10,35 20,25 T40,15 T60,20 T80,5 T100,0 L100,40 L0,40 Z" fill="url(#graph-gradient)" stroke="none" />
                                        <defs>
                                           <linearGradient id="graph-gradient" x1="0" y1="0" x2="0" y2="1">
                                              <stop offset="0%" stopColor="rgba(255,0,85,0.2)" />
                                              <stop offset="100%" stopColor="rgba(255,0,85,0)" />
                                           </linearGradient>
                                        </defs>
                                     </svg>
                                  </div>
                               </div>
                            </div>
                         </div>

                         {/* Floating Growth Badge */}
                         <div className="absolute -right-4 -bottom-4 bg-[#141A29] border border-white/10 rounded-xl p-3 shadow-2xl flex flex-col items-center z-20">
                            <span className="text-slate-400 text-[8px]">Growth</span>
                            <span className="text-[#FF0055] font-bold text-[13px] leading-tight mt-0.5">+42%</span>
                            <div className="flex items-end gap-1 mt-1.5 h-3">
                               <div className="w-1 h-1 bg-[#FF0055] rounded-t-sm" />
                               <div className="w-1 h-1.5 bg-[#FF0055] rounded-t-sm" />
                               <div className="w-1 h-2 bg-[#FF0055] rounded-t-sm" />
                               <div className="w-1 h-3 bg-[#FF0055] rounded-t-sm" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* BOTTOM ROW: 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
                   
                   {/* EduLoom */}
                   <div className="md:col-span-5 relative rounded-[2rem] p-[1px] overflow-hidden bg-gradient-to-br from-blue-500/40 via-white/5 to-white/5 shadow-2xl shadow-blue-500/5 group">
                      <div className="absolute inset-0 bg-[#070B14]/90 backdrop-blur-xl z-0" />
                      <div className="relative z-10 p-8 flex flex-col h-full">
                         <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                               <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div>
                               <h3 className="text-white text-xl font-bold">EduLoom</h3>
                               <p className="text-slate-400 text-[11px] mt-0.5">Learning Platform</p>
                            </div>
                         </div>
                         <p className="text-slate-300 text-[14px] leading-relaxed mb-8 flex-1">
                            A modern learning platform for the next generation. Empower educators and learners with technology.
                         </p>
                         <button className="text-blue-400 font-semibold text-[14px] flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                            Learn More <ArrowRight className="w-4 h-4" />
                         </button>
                      </div>
                   </div>

                   {/* Custom Solutions */}
                   <div className="md:col-span-5 relative rounded-[2rem] p-[1px] overflow-hidden bg-gradient-to-br from-purple-500/40 via-white/5 to-white/5 shadow-2xl shadow-purple-500/5 group">
                      <div className="absolute inset-0 bg-[#070B14]/90 backdrop-blur-xl z-0" />
                      <div className="relative z-10 p-8 flex flex-col h-full">
                         <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
                               <Box className="w-5 h-5 text-white" />
                            </div>
                            <div>
                               <h3 className="text-white text-xl font-bold">Custom Solutions</h3>
                               <p className="text-slate-400 text-[11px] mt-0.5">For Your Business</p>
                            </div>
                         </div>
                         <p className="text-slate-300 text-[14px] leading-relaxed mb-8 flex-1">
                            Tailored digital solutions to solve your unique challenges. From idea to impact, we build with you.
                         </p>
                         <button className="text-[#A855F7] font-semibold text-[14px] flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                            Let's Discuss <ArrowRight className="w-4 h-4" />
                         </button>
                      </div>
                   </div>

                   {/* Small Callout */}
                   <div className="md:col-span-2 relative rounded-[2rem] p-[1px] overflow-hidden bg-gradient-to-b from-white/10 to-transparent">
                      <div className="absolute inset-0 bg-[#070B14]/60 backdrop-blur-sm z-0" />
                      <div className="relative z-10 p-6 flex flex-col h-full justify-center">
                         <div className="w-[2px] h-5 bg-[#FF0055] mb-4" />
                         <p className="text-slate-300 text-[13px] font-medium leading-relaxed">
                            Ideas<br/>today.<br/>Impact<br/>tomorrow.
                         </p>
                      </div>
                   </div>

                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
