"use client";

import React from "react";
import {
  ArrowRight,
  BookOpen,
  Box,
  LayoutDashboard,
  Bell,
  Search,
  Users,
  FileText,
  TrendingUp,
  BarChart2,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";

const TiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(true);

  React.useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isDesktop) return;
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

  const handleMouseEnter = () => {
    if (isDesktop) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className={className}
      style={{ perspective: isDesktop ? "1200px" : "none" }}
    >
      <div
        ref={cardRef}
        className="w-full h-full relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          isDesktop
            ? {
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: isHovering
                  ? "transform 0.1s ease-out"
                  : "transform 0.5s ease-out",
                willChange: "transform",
              }
            : {}
        }
      >
        {children}
      </div>
    </div>
  );
};

export default function ProductsSection() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative bg-[#040914] py-12 lg:py-16 overflow-hidden font-sans">
      {/* Background Image - Mobile */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none md:hidden opacity-80"
        style={{ backgroundImage: "url('/images/home/products-bg-mobile.webp')" }}
      />

      {/* Background Image - Desktop */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none hidden md:block"
        style={{ backgroundImage: "url('/images/home/products-bg-desktop.webp')" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ========================================= */}
          {/* LEFT CONTENT                              */}
          {/* ========================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-start lg:pr-4 relative z-20"
          >
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
              </span>{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#A855F7]">
                Businesses.
              </span>
            </h2>

            <p className="text-slate-400 text-[15px] md:text-base max-w-[380px] leading-relaxed mt-6">
              Powerful digital products designed to simplify operations, improve
              productivity and accelerate growth.
            </p>

            <button className="mt-10 p-[1.5px] rounded-full bg-gradient-to-r from-[#FF0055] to-[#A855F7] shadow-[0_0_30px_rgba(255,0,85,0.3)] hover:shadow-[0_0_40px_rgba(255,0,85,0.5)] transition-all hover:scale-105 active:scale-95 group">
              <div className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF0055]/50 to-[#A855F7]/50 backdrop-blur-xl flex items-center gap-2">
                <span className="text-white font-bold text-[15px]">
                  Explore All Products
                </span>
                <ArrowRight className="text-white w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <div className="mt-16 flex items-center gap-4 text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-slate-300 uppercase">
              <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: 0.3 }}>Simple</motion.span>
              <span className="text-slate-700">/</span>
              <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: 0.5 }}>Powerful</motion.span>
              <span className="text-slate-700">/</span>
              <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: 0.7 }}>Scalable</motion.span>
            </div>
          </motion.div>

          {/* ========================================= */}
          {/* RIGHT CONTENT (Product Cards)             */}
          {/* ========================================= */}
          <div className="lg:col-span-8 relative mt-12 lg:mt-0 z-10 perspective-[1000px]">
            <div className="flex flex-col gap-6 w-full">
              {/* TOP ROW: Way We Go (Spans full width) */}
              <motion.div 
                initial={isMobile ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className="relative rounded-[14px] sm:rounded-[20px] shadow-[0_0_30px_rgba(255,0,85,0.05)] group"
              >
                {/* Animated Border Mask */}
                <div
                  className="hidden md:block absolute inset-0 rounded-[14px] sm:rounded-[20px] overflow-hidden pointer-events-none z-10"
                  style={{
                    padding: "1px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                >
                  <div className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] opacity-80 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#FF0055_30%,#8b3dff_50%,transparent_80%)]" />
                </div>

                {/* Sweeping Glass Shine Effect */}
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden z-30">
                  <div className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glass-shine" />
                </div>

                {/* Static Glass Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0055]/[0.06] to-transparent backdrop-blur-[32px] transform-gpu z-0 rounded-[14px] sm:rounded-[20px] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />

                <div className="relative z-20 p-6 sm:p-8 flex flex-col md:flex-row gap-4 sm:gap-8 items-center justify-between h-full">
                  {/* Left: Info */}
                  <div className="w-full md:w-[40%] xl:w-[35%] flex flex-col items-start">
                    <div className="px-2.5 py-1 rounded-full bg-[#FF0055] text-white text-[9px] font-bold tracking-wider mb-6 shadow-[0_0_15px_rgba(255,0,85,0.5)]">
                      FEATURED PRODUCT
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-[48px] h-[48px] rounded-[14px] bg-gradient-to-br from-[#FF0055] to-[#A855F7] flex items-center justify-center shadow-lg shadow-pink-500/30 shrink-0">
                        {/* Custom Icon (Glasses-like) */}
                        <div className="flex items-center gap-1 scale-75">
                          <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-1.5 h-0.5 bg-white rounded-full" />
                          </div>
                          <div className="w-2 h-[2px] bg-white rounded-full" />
                          <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-1.5 h-0.5 bg-white rounded-full" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white text-xl font-bold">
                          Way We Go
                        </h3>
                        <p className="text-slate-400 text-[11px] mt-0.5">
                          Business Management CRM
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-300 text-[13px] leading-relaxed mb-6">
                      Manage leads, sales, projects and teams — 
                      all in one place. A smarter way to run and grow your business.
                    </p>

                    <button className="text-[#FF0055] font-semibold text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>{" "}
                  {/* Right: Mock UI Dashboard */}
                  <TiltCard className="w-full md:w-[60%] xl:w-[65%] p-1 sm:p-6 md:p-4 mt-2 md:mt-0 z-20 flex justify-center items-center relative">
                    {/* Style block for floating badge and bar animations */}
                    <style>{`
                           @keyframes floatBadgeRight {
                             0%, 100% { transform: translateX(0px) translateZ(0); }
                             50% { transform: translateX(8px) translateZ(0); }
                           }
                           .animate-float-right {
                             animation: floatBadgeRight 4s ease-in-out infinite;
                             will-change: transform;
                           }
                           @keyframes growBarSlow {
                             0%, 10% { transform: scaleY(0.2) translateZ(0); opacity: 0.3; }
                             30%, 70% { transform: scaleY(1) translateZ(0); opacity: 1; }
                             90%, 100% { transform: scaleY(0.2) translateZ(0); opacity: 0.3; }
                           }
                           .bar-anim-1 { transform-origin: bottom; animation: growBarSlow 3.5s ease-in-out infinite 0.0s; will-change: transform, opacity; }
                           .bar-anim-2 { transform-origin: bottom; animation: growBarSlow 3.5s ease-in-out infinite 0.2s; will-change: transform, opacity; }
                           .bar-anim-3 { transform-origin: bottom; animation: growBarSlow 3.5s ease-in-out infinite 0.4s; will-change: transform, opacity; }
                           .bar-anim-4 { transform-origin: bottom; animation: growBarSlow 3.5s ease-in-out infinite 0.6s; will-change: transform, opacity; }
                           @keyframes glassShine {
                             0% { transform: translateX(-200%) skewX(-30deg) translateZ(0); opacity: 0; }
                             5% { opacity: 1; }
                             20% { transform: translateX(300%) skewX(-30deg) translateZ(0); opacity: 0; }
                             100% { transform: translateX(300%) skewX(-30deg) translateZ(0); opacity: 0; }
                           }
                           .animate-glass-shine {
                             animation: glassShine 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
                             will-change: transform, opacity;
                           }
                         `}</style>

                    {/* Dashboard Image */}
                    <motion.img
                      initial={{ rotateY: -180, scale: 0.5, opacity: 0 }}
                      whileInView={{ rotateY: 0, scale: 1, opacity: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 2, type: "spring", bounce: 0.3, delay: 0.2 }}
                      src="/images/home/products-dashboard.webp"
                      alt="Way We Go Dashboard"
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain rounded-[10px] sm:rounded-[16px] shadow-2xl relative z-10"
                    />

                    {/* Floating Growth Badge - Overlapping Bottom Right */}
                    <div className="absolute right-[-12px] sm:right-[-24px] bottom-[-8px] sm:bottom-[-20px] bg-[#0E1129]/95 backdrop-blur-xl rounded-lg sm:rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(168,85,247,0.2)] flex flex-col z-30 animate-float-right transform-gpu min-w-[100px] sm:min-w-[125px] group/growth">
                      {/* Animated Border Mask for Growth Badge */}
                      <div
                        className="absolute inset-0 rounded-lg sm:rounded-xl overflow-hidden pointer-events-none z-10"
                        style={{
                          padding: "1.5px",
                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      >
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] opacity-40 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#E81CFF_30%,#FF4D8D_50%,transparent_80%)]" />
                      </div>

                      <div className="relative z-20 px-3 py-1.5 sm:px-4 sm:py-2 flex flex-col">
                        <span className="text-blue-100/90 text-[10px] sm:text-[12px] font-medium tracking-wide">
                          Growth
                        </span>
                        <span className="text-[#FF4D8D] font-extrabold text-[18px] sm:text-[22px] leading-tight drop-shadow-[0_0_10px_rgba(255,77,141,0.6)]">
                          +42%
                        </span>

                        {/* Bar Chart Icon */}
                        <div className="flex items-end gap-1.5 sm:gap-2 mt-1 sm:mt-2 h-4 sm:h-5 self-end">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#E81CFF] rounded-[2px] shadow-[0_0_8px_rgba(232,28,255,0.6)] bar-anim-1" />
                          <div className="w-1.5 sm:w-2 h-2.5 sm:h-3 bg-[#E81CFF] rounded-[2px] shadow-[0_0_8px_rgba(232,28,255,0.7)] bar-anim-2" />
                          <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-[#E81CFF] rounded-[2px] shadow-[0_0_8px_rgba(232,28,255,0.8)] bar-anim-3" />
                          <div className="w-1.5 sm:w-2 h-4 sm:h-5 bg-[#E81CFF] rounded-[2px] shadow-[0_0_10px_rgba(232,28,255,0.9)] bar-anim-4" />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </motion.div>

              {/* BOTTOM ROW: 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
                {/* EduLoom */}
                <motion.div 
                  initial={isMobile ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3, delay: 0.1 }}
                  className="md:col-span-6 relative rounded-[20px] shadow-[0_0_30px_rgba(59,130,246,0.05)] group"
                >
                  {/* Animated Border Mask */}
                  <div
                    className="hidden md:block absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none z-10"
                    style={{
                      padding: "1px",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  >
                    <div className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] opacity-80 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#3b82f6_30%,#60a5fa_50%,transparent_80%)]" />
                  </div>

                  {/* Sweeping Glass Shine Effect */}
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden z-30" style={{ animationDelay: "1s" }}>
                    <div className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glass-shine" />
                  </div>

                  {/* Static Glass Background - Blue Tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] to-transparent backdrop-blur-[32px] z-0 rounded-[20px] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />

                  <div className="relative z-20 p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white text-[17px] font-bold leading-tight">
                          EduLoom
                        </h3>
                        <p className="text-slate-400 text-[10px] mt-0.5">
                          Learning Platform
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-[13px] leading-relaxed mb-6 flex-1">
                      A modern learning platform for the next generation.
                      Empower educators and learners with technology.
                    </p>
                    <button className="text-blue-400 font-semibold text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>

                {/* Custom Solutions */}
                <motion.div 
                  initial={isMobile ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3, delay: 0.2 }}
                  className="md:col-span-6 relative rounded-[20px] shadow-[0_0_30px_rgba(168,85,247,0.05)] group"
                >
                  {/* Animated Border Mask */}
                  <div
                    className="hidden md:block absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none z-10"
                    style={{
                      padding: "1px",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  >
                    <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite_reverse] opacity-80 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#a855f7_30%,#ec4899_50%,transparent_80%)]" />
                  </div>

                  {/* Sweeping Glass Shine Effect */}
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden z-30" style={{ animationDelay: "2s" }}>
                    <div className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glass-shine" />
                  </div>

                  {/* Static Glass Background - Purple Tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.08] to-transparent backdrop-blur-[32px] z-0 rounded-[20px] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]" />

                  <div className="relative z-20 p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30 shrink-0">
                        <Box className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white text-[17px] font-bold leading-tight">
                          Custom Solutions
                        </h3>
                        <p className="text-slate-400 text-[10px] mt-0.5">
                          For Your Business
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-[13px] leading-relaxed mb-6 flex-1">
                      Tailored digital solutions to solve your unique
                      challenges. From idea to impact, we build with you.
                    </p>
                    <button className="text-[#A855F7] font-semibold text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                      Let's Discuss <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
