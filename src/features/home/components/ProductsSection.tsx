"use client";

import React from "react";
import { ArrowRight, BookOpen, Box, LayoutDashboard, Bell, Search, Users, FileText, TrendingUp, BarChart2 } from "lucide-react";

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Subtle rotation to keep it smooth and readable
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className={className} style={{ perspective: '1200px' }}>
      <div
        ref={cardRef}
        className="w-full h-full relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default function ProductsSection() {
  return (
    <section className="relative bg-[#040914] py-12 lg:py-16 overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-blue-600/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-pink-600/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

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

            <h2 className="text-[36px] sm:text-5xl lg:text-[46px] xl:text-[54px] font-extrabold text-white leading-[1.05] tracking-tight">
              <span className="whitespace-nowrap">Built by Kaelixo</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500">
                For Modern
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#A855F7]">
                Businesses.
              </span>
            </h2>

            <p className="text-slate-400 text-[15px] md:text-base max-w-[380px] leading-relaxed mt-6">
              Powerful digital products designed to simplify operations, improve productivity and accelerate growth.
            </p>

            <button className="mt-10 p-[1.5px] rounded-full bg-gradient-to-r from-[#FF0055] to-[#A855F7] shadow-[0_0_30px_rgba(255,0,85,0.3)] hover:shadow-[0_0_40px_rgba(255,0,85,0.5)] transition-all hover:scale-105 active:scale-95 group">
              <div className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF0055]/50 to-[#A855F7]/50 backdrop-blur-xl flex items-center gap-2">
                <span className="text-white font-bold text-[15px]">Explore All Products</span>
                <ArrowRight className="text-white w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
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
             


             <div className="flex flex-col gap-6 w-full">
                
                {/* TOP ROW: Way We Go (Spans full width) */}
                <div className="relative rounded-[20px] shadow-[0_0_30px_rgba(255,0,85,0.05)] group">
                   
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
                      <div className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] opacity-50 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#FF0055_30%,#8b3dff_50%,transparent_80%)]" />
                   </div>
                   
                   {/* Static Glass Background - Pink Tint */}
                   <div className="absolute inset-0 bg-gradient-to-br from-[#FF0055]/[0.06] to-transparent backdrop-blur-[32px] z-0 rounded-[20px] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />
                   
                   <div className="relative z-20 p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center justify-between h-full">
                      
                      {/* Left: Info */}
                      <div className="w-full md:w-[45%] flex flex-col items-start">
                         <div className="px-2.5 py-1 rounded-full bg-[#FF0055] text-white text-[9px] font-bold tracking-wider mb-6 shadow-[0_0_15px_rgba(255,0,85,0.5)]">
                            FEATURED PRODUCT
                         </div>
                         
                         <div className="flex items-center gap-3 mb-4">
                            <div className="w-[48px] h-[48px] rounded-[14px] bg-gradient-to-br from-[#FF0055] to-[#A855F7] flex items-center justify-center shadow-lg shadow-pink-500/30 shrink-0">
                               {/* Custom Icon (Glasses-like) */}
                               <div className="flex items-center gap-1 scale-75">
                                  <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center"><div className="w-1.5 h-0.5 bg-white rounded-full"/></div>
                                  <div className="w-2 h-[2px] bg-white rounded-full" />
                                  <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center"><div className="w-1.5 h-0.5 bg-white rounded-full"/></div>
                               </div>
                            </div>
                            <div>
                               <h3 className="text-white text-xl font-bold">Way We Go</h3>
                               <p className="text-slate-400 text-[11px] mt-0.5">Business Management CRM</p>
                            </div>
                         </div>

                         <p className="text-slate-300 text-[13px] leading-relaxed mb-6">
                            Manage leads, sales, projects and teams — all in one place. A smarter way to run and grow your business.
                         </p>

                         <button className="text-[#FF0055] font-semibold text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all">
                            Learn More <ArrowRight className="w-4 h-4" />
                         </button>
                      </div>

                      {/* Right: Mock UI Dashboard */}
                      <TiltCard className="w-full md:w-[50%] p-2 sm:p-4 mt-6 md:mt-0 z-20 flex justify-center items-center relative">
                         {/* Style block for seamless graph animation and floating badge */}
                         <style>{`
                           @keyframes drawLine {
                             0% { stroke-dashoffset: 200; opacity: 0; }
                             10% { opacity: 1; }
                             70% { stroke-dashoffset: 0; opacity: 1; }
                             90% { stroke-dashoffset: 0; opacity: 0; }
                             100% { stroke-dashoffset: 200; opacity: 0; }
                           }
                           .animate-draw-graph {
                             stroke-dasharray: 200;
                             animation: drawLine 4s ease-in-out infinite;
                           }
                           @keyframes fadeFill {
                             0% { opacity: 0; }
                             30% { opacity: 0; }
                             70% { opacity: 0.6; }
                             90% { opacity: 0; }
                             100% { opacity: 0; }
                           }
                           .animate-fade-fill {
                             animation: fadeFill 4s ease-in-out infinite;
                           }
                           @keyframes floatBadgeRight {

                             0%, 100% { transform: translateX(0px); }
                             50% { transform: translateX(8px); }
                           }
                           .animate-float-right {
                             animation: floatBadgeRight 4s ease-in-out infinite;
                           }
                         `}</style>

                         {/* Dashboard Container */}
                         <div className="w-full aspect-[1.3/1] rounded-[20px] bg-[#0A101E]/95 border border-white/5 shadow-2xl overflow-hidden flex flex-col relative z-10">
                            {/* Topbar */}
                            <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 sm:px-5 shrink-0">
                               <div className="flex items-center gap-2.5">
                                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shrink-0">
                                     <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-current"><path d="M12 2L2 22h20L12 2zm0 3.8l6.3 12.7H5.7L12 5.8z"/></svg>
                                  </div>
                                  <span className="text-white text-xs font-bold tracking-wide">Way We Go</span>
                               </div>
                               <div className="flex items-center gap-4">
                                  <div className="w-32 h-7 rounded-lg bg-white/5 border border-white/5 flex items-center px-2.5 gap-2 hidden sm:flex">
                                     <Search className="w-3.5 h-3.5 text-slate-400" />
                                     <span className="text-[10px] text-slate-500 font-medium">Search...</span>
                                  </div>
                                  <Bell className="w-4 h-4 text-slate-400" />
                                  <div className="w-6 h-6 rounded-full overflow-hidden border border-white/10 shrink-0">
                                     <img src="https://i.pravatar.cc/100?img=33" alt="avatar" className="w-full h-full object-cover" />
                                  </div>
                               </div>
                            </div>
                            
                            {/* Main Content */}
                            <div className="flex flex-1 h-full overflow-hidden">
                               {/* Sidebar */}
                               <div className="w-[90px] h-full border-r border-white/5 flex flex-col gap-2 pt-4 px-2 shrink-0">
                                  <div className="w-full py-2 px-2.5 rounded-lg bg-[#FF0055]/15 text-[#FF0055] border border-[#FF0055]/20 flex items-center justify-center">
                                     <span className="text-[9px] font-semibold">Dashboard</span>
                                  </div>
                                  <div className="w-full py-2 px-2.5 rounded-lg text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-2 cursor-default">
                                     <Users className="w-3.5 h-3.5" />
                                     <span className="text-[9px] font-medium">Leads</span>
                                  </div>
                                  <div className="w-full py-2 px-2.5 rounded-lg text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-2 cursor-default">
                                     <FileText className="w-3.5 h-3.5" />
                                     <span className="text-[9px] font-medium">Projects</span>
                                  </div>
                                  <div className="w-full py-2 px-2.5 rounded-lg text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-2 cursor-default">
                                     <Users className="w-3.5 h-3.5" />
                                     <span className="text-[9px] font-medium">Teams</span>
                                  </div>
                                  <div className="w-full py-2 px-2.5 rounded-lg text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-2 cursor-default">
                                     <BarChart2 className="w-3.5 h-3.5" />
                                     <span className="text-[9px] font-medium">Reports</span>
                                  </div>
                               </div>
                               
                               {/* Dashboard Body */}
                               <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden">
                                  <div>
                                     <h4 className="text-white text-sm font-bold tracking-tight">Good morning!</h4>
                                     <p className="text-slate-400 text-[9px] mt-0.5">Here's what's happening today.</p>
                                  </div>

                                  {/* Stats Grid */}
                                  <div className="grid grid-cols-3 gap-3">
                                     <div className="bg-[#111726] rounded-xl p-3 border border-white/5 relative overflow-hidden">
                                        <h5 className="text-white font-bold text-[15px] mb-1">128</h5>
                                        <div className="flex justify-between items-end">
                                           <p className="text-slate-400 text-[8px] font-medium">Leads</p>
                                           <p className="text-emerald-400 text-[8px] font-bold flex items-center gap-0.5"><TrendingUp className="w-2.5 h-2.5"/> 12%</p>
                                        </div>
                                     </div>
                                     <div className="bg-[#111726] rounded-xl p-3 border border-white/5 relative overflow-hidden">
                                        <h5 className="text-white font-bold text-[15px] mb-1">$24.5K</h5>
                                        <div className="flex justify-between items-end">
                                           <p className="text-slate-400 text-[8px] font-medium">Revenue</p>
                                           <p className="text-emerald-400 text-[8px] font-bold flex items-center gap-0.5"><TrendingUp className="w-2.5 h-2.5"/> 18%</p>
                                        </div>
                                     </div>
                                     <div className="bg-[#111726] rounded-xl p-3 border border-white/5 relative overflow-hidden">
                                        <h5 className="text-white font-bold text-[15px] mb-1">12</h5>
                                        <div className="flex justify-between items-end">
                                           <p className="text-slate-400 text-[8px] font-medium">Projects</p>
                                           <p className="text-emerald-400 text-[8px] font-bold flex items-center gap-0.5"><TrendingUp className="w-2.5 h-2.5"/> 8%</p>
                                        </div>
                                     </div>
                                  </div>

                                  {/* Graph Area */}
                                  <div className="flex-1 w-full bg-[#0D121E] rounded-xl border border-white/5 relative overflow-hidden flex flex-col p-3">
                                     <div className="flex-1 w-full relative">
                                        {/* Grid lines */}
                                        <div className="absolute inset-0 flex flex-col justify-between">
                                           <div className="w-full h-px bg-white/[0.02]"></div>
                                           <div className="w-full h-px bg-white/[0.02]"></div>
                                           <div className="w-full h-px bg-white/[0.02]"></div>
                                           <div className="w-full h-px bg-white/[0.02]"></div>
                                        </div>
                                        
                                        {/* Animated SVG Graph */}
                                        <div className="absolute inset-0 overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                                          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full absolute bottom-0 drop-shadow-[0_0_12px_rgba(255,0,255,0.8)]">
                                             <path d="M 0,45 Q 10,25 20,35 T 40,20 T 60,30 T 80,10 T 100,5" fill="none" stroke="url(#line-glow)" strokeWidth="1.5" className="animate-draw-graph" />
                                             <path d="M 0,45 Q 10,25 20,35 T 40,20 T 60,30 T 80,10 T 100,5 L 100,50 L 0,50 Z" fill="url(#fill-glow)" stroke="none" className="animate-fade-fill" />
                                             <defs>
                                                <linearGradient id="line-glow" x1="0" y1="0" x2="1" y2="0">
                                                   <stop offset="0%" stopColor="#ff00ff" />
                                                   <stop offset="50%" stopColor="#ff0055" />
                                                   <stop offset="100%" stopColor="#ff00ff" />
                                                </linearGradient>
                                                <linearGradient id="fill-glow" x1="0" y1="0" x2="0" y2="1">
                                                   <stop offset="0%" stopColor="rgba(255,0,255,0.4)" />
                                                   <stop offset="100%" stopColor="rgba(255,0,255,0)" />
                                                </linearGradient>
                                             </defs>
                                          </svg>
                                        </div>
                                     </div>
                                     <div className="flex justify-between mt-2 px-1 text-[7px] text-slate-500 font-medium z-10">
                                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>

                         {/* Floating Growth Badge - Overlapping Bottom Right */}
                         <div className="absolute right-[-12px] sm:right-[-20px] bottom-[-8px] sm:bottom-[-12px] bg-[#0C1220] border border-white/10 rounded-xl p-3 shadow-2xl flex flex-col z-30 animate-float-right">
                            <span className="text-slate-300 text-[9px] font-medium">Growth</span>
                            <span className="text-[#FF0055] font-extrabold text-[18px] leading-tight mt-1 drop-shadow-[0_0_8px_rgba(255,0,85,0.8)]">+42%</span>
                            
                            {/* Bar Chart Icon */}
                            <div className="flex items-end gap-1.5 mt-2.5 h-4 self-end">
                               <div className="w-1.5 h-1.5 bg-[#FF0055] rounded-t-[1px] opacity-60" />
                               <div className="w-1.5 h-2 bg-[#FF0055] rounded-t-[1px] opacity-75" />
                               <div className="w-1.5 h-3 bg-[#FF0055] rounded-t-[1px] opacity-90" />
                               <div className="w-1.5 h-4 bg-[#FF0055] rounded-t-[1px] shadow-[0_0_8px_#FF0055]" />
                            </div>
                         </div>
                      </TiltCard>
                   </div>
                </div>

                {/* BOTTOM ROW: 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
                   
                   {/* EduLoom */}
                   <div className="md:col-span-6 relative rounded-[20px] shadow-[0_0_30px_rgba(59,130,246,0.05)] group">
                      
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
                         <div className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] opacity-50 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#3b82f6_30%,#60a5fa_50%,transparent_80%)]" />
                      </div>
                      
                      {/* Static Glass Background - Blue Tint */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] to-transparent backdrop-blur-[32px] z-0 rounded-[20px] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />
                      
                      <div className="relative z-20 p-6 flex flex-col h-full">
                         <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
                               <BookOpen className="w-4 h-4 text-white" />
                            </div>
                            <div>
                               <h3 className="text-white text-[17px] font-bold leading-tight">EduLoom</h3>
                               <p className="text-slate-400 text-[10px] mt-0.5">Learning Platform</p>
                            </div>
                         </div>
                         <p className="text-slate-300 text-[13px] leading-relaxed mb-6 flex-1">
                            A modern learning platform for the next generation. Empower educators and learners with technology.
                         </p>
                         <button className="text-blue-400 font-semibold text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                            Learn More <ArrowRight className="w-4 h-4" />
                         </button>
                      </div>
                   </div>

                   {/* Custom Solutions */}
                   <div className="md:col-span-6 relative rounded-[20px] shadow-[0_0_30px_rgba(168,85,247,0.05)] group">
                      
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
                         <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite_reverse] opacity-50 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#a855f7_30%,#ec4899_50%,transparent_80%)]" />
                      </div>
                      
                      {/* Static Glass Background - Purple Tint */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.08] to-transparent backdrop-blur-[32px] z-0 rounded-[20px] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />
                      
                      <div className="relative z-20 p-6 flex flex-col h-full">
                         <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30 shrink-0">
                               <Box className="w-4 h-4 text-white" />
                            </div>
                            <div>
                               <h3 className="text-white text-[17px] font-bold leading-tight">Custom Solutions</h3>
                               <p className="text-slate-400 text-[10px] mt-0.5">For Your Business</p>
                            </div>
                         </div>
                         <p className="text-slate-300 text-[13px] leading-relaxed mb-6 flex-1">
                            Tailored digital solutions to solve your unique challenges. From idea to impact, we build with you.
                         </p>
                         <button className="text-[#A855F7] font-semibold text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                            Let's Discuss <ArrowRight className="w-4 h-4" />
                         </button>
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
