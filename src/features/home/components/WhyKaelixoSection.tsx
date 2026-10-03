"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, Heart, Lightbulb, Users, BarChart3, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyKaelixoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const features = [
    {
      title: "Client-Centric Approach",
      desc: "Your goals, our priority.",
      icon: Heart,
      iconColor: "text-[#FF0055]",
      iconBg: "bg-[#3a0a1f]", // Dark vivid pink background
    },
    {
      title: "Innovative Solutions",
      desc: "Always one step ahead.",
      icon: Lightbulb,
      iconColor: "text-[#c084fc]", // Brighter purple
      iconBg: "bg-[#21163b]", // Dark vivid purple background
    },
    {
      title: "Experienced Team",
      desc: "Passionate experts.",
      icon: Users,
      iconColor: "text-[#38bdf8]", // Brighter blue
      iconBg: "bg-[#0b2440]", // Dark vivid blue background
    },
    {
      title: "Long-Term Partnership",
      desc: "We grow together.",
      icon: BarChart3,
      iconColor: "text-[#FF0055]",
      iconBg: "bg-[#3a0a1f]", // Dark vivid pink background
    },
  ];

  return (
    <section className="relative bg-[#020205] text-white py-16 lg:py-24 xl:py-40 overflow-hidden border-t border-white/5">

      {/* Background Graphics */}

      {/* Left Background Image */}
      <img
        src="/images/home/why-kaelixo-left.webp"
        alt=""
        className="absolute pointer-events-none z-0 mix-blend-screen opacity-30 sm:opacity-60 object-cover object-left [mask-image:linear-gradient(to_right,white_20%,transparent_100%)]
          /* Mobile */
          -left-15 -top-30 w-[75%] h-[50%] 
          /* Tablet (sm/md) */
          sm:left-0 sm:top-0 sm:w-[60%] sm:h-full
          md:-left-[8%] md:-top-[15%] md:w-[50%] md:h-full md:opacity-40
          /* Desktop (lg/xl) */
          lg:-left-[12%] lg:-top-[10%] lg:w-[60%] lg:h-[120%]
          /* 1920px+ Display */
          [@media(min-width:1920px)]:-left-[5%] [@media(min-width:1920px)]:-top-[5%] [@media(min-width:1920px)]:w-[45%] [@media(min-width:1920px)]:h-[120%]
        "
      />

      <img
        src="/images/home/why-kaelixo-left.webp"
        alt=""
        className="absolute pointer-events-none z-0 mix-blend-screen opacity-30 sm:opacity-60 object-cover object-left [mask-image:linear-gradient(to_right,white_20%,transparent_100%)] -scale-x-100
          /* Mobile */
          -right-5 bottom-130 w-[75%] h-[50%]
          /* Tablet (sm/md) */
          sm:right-0 sm:bottom-0 sm:w-[60%] sm:h-full
          md:right-[20%] md:-bottom-[25%] md:w-[50%] md:h-full md:opacity-40
          /* Desktop (lg/xl) */
          lg:-right-[12%] lg:-bottom-[10%] lg:w-[60%] lg:h-[120%] 
          /* 1920px+ Display */
          [@media(min-width:1920px)]:-right-[5%] [@media(min-width:1920px)]:-bottom-[20%] [@media(min-width:1920px)]:w-[45%] [@media(min-width:1920px)]:h-[120%]
        "
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-6 xl:px-9 relative z-10 flex flex-col">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 xl:gap-8 items-center">

          {/* LEFT COLUMN: Content & CTAs (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ willChange: "opacity, transform" }}
            className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-slate-200 font-bold text-[12px] sm:text-[13px] lg:text-[18px] xl:text-[18px] tracking-[0.2em] uppercase">WHY KAELIXO</span>
              <div className="w-10 h-[2px] bg-[#FF0055]"></div>
            </div>

            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px]  font-extrabold leading-[1.1] tracking-tight mb-4 xl:mb-5">
              More Than a <br /> Tech Company — <br />
              <span className="text-[#FF0055]">A Growth Marketing Agency</span>
            </h2>

            <p className="text-white text-[16px] leading-relaxed mb-6 xl:mb-8 font-normal max-w-[340px] lg:max-w-[280px] xl:max-w-[340px]">
              We combine technology, creativity, strategy and AI thinking to build digital experiences that create real business impact. It's what makes us a growth marketing agency businesses stay with, not just hire once.
            </p>

            <button className="group px-7 py-3 lg:px-4 lg:py-2 xl:px-7 xl:py-3 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white font-medium tracking-wide text-[13px] sm:text-[14px] lg:text-[18px] shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] hover:brightness-110 transition-all duration-300 flex items-center gap-2 cursor-pointer mb-6 lg:mb-0 active:scale-95">
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* BOTTOM ROW: Footer Stats / Philosophy */}
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-4 lg:gap-3 xl:gap-8 w-full mt-auto relative top-4 xl:top-10">
              <div className="relative pl-4 lg:pl-2.5 xl:pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-[#FF0055]">
                <h4 className="text-[14px] sm:text-[15px] lg:text-[18px] xl:text-[18px] font-bold text-white mb-1 lg:mb-0.5 xl:mb-1 leading-tight whitespace-nowrap">Strategy-Led</h4>
                <p className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[16px] text-slate-300 font-medium md:whitespace-nowrap lg:whitespace-nowrap xl:whitespace-nowrap leading-tight">Not just execution</p>
              </div>
              <div className="relative pl-4 lg:pl-2.5 xl:pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-[#FF0055]">
                <h4 className="text-[14px] sm:text-[15px] lg:text-[18px] xl:text-[18px] font-bold text-white mb-1 lg:mb-0.5 xl:mb-1 leading-tight whitespace-nowrap">People-First</h4>
                <p className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[16px] text-slate-300 font-medium md:whitespace-nowrap lg:whitespace-nowrap xl:whitespace-nowrap leading-tight">Relationships matter</p>
              </div>
              <div className="relative pl-4 lg:pl-2.5 xl:pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-[#FF0055]">
                <h4 className="text-[14px] sm:text-[15px] lg:text-[18px] xl:text-[18px] font-bold text-white mb-1 lg:mb-0.5 xl:mb-1 leading-tight whitespace-nowrap">Impact-Driven</h4>
                <p className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[16px] text-slate-300 font-medium md:whitespace-nowrap lg:whitespace-nowrap xl:whitespace-nowrap leading-tight">Your growth is our success</p>
              </div>
            </div>
          </motion.div>

          {/* CENTER COLUMN: Image & Video Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            style={{ willChange: "opacity, transform" }}
            className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0 lg:-ml-2"
          >
            <div className="relative w-full max-w-[600px] lg:max-w-[420px] xl:max-w-[500px]">

              {/* Image Container with overflow hidden */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,0,85,0.1)] group">
                {/* Actual Video instead of Image */}
                <video
                  ref={videoRef}
                  src="/videos/home/workspace.mp4"
                  poster="/images/home/workspacethumbnail.webp"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                  loop
                  muted
                  playsInline
                />
                {/* Dark Gradient Overlay (hide when playing for better view) */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-60'}`}></div>
              </div>

              {/* Overlapping Play Button Card (Outside overflow-hidden) */}
              <div
                onClick={togglePlay}
                className="absolute -bottom-6 right-0 sm:-right-4 lg:-right-8 xl:-right-4 bg-[#0a0f1c]/95 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-3 lg:p-3 xl:p-3 flex items-center gap-2.5 sm:gap-3 lg:gap-3 xl:gap-3 shadow-2xl z-20 w-[190px] sm:w-[200px] lg:w-[220px] xl:w-[250px] cursor-pointer hover:border-white/20 transition-colors group/play"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover/play:bg-white/10 transition-colors">
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 text-white" fill="currentColor" />
                  ) : (
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 text-white ml-0.5" fill="currentColor" />
                  )}
                </div>
                <div className="min-w-0">
                  <h4 className="text-[14px] sm:text-[15px] lg:text-[18px] xl:text-[18px] font-bold  text-white mb-0.5 leading-tight whitespace-nowrap">
                    {isPlaying ? "Pause Video" : "See Our Workspace"}
                  </h4>
                  <p className="text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[16px] text-slate-300 font-medium leading-tight whitespace-nowrap">
                    {isPlaying ? "Currently playing" : "A peek into our world"}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Feature List (3 Cols) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col justify-center gap-5 sm:gap-6 lg:gap-4 xl:gap-6 lg:pl-0 xl:pl-4 lg:ml-4 xl:-ml-6 mt-12 lg:mt-0">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
                className="flex items-center gap-4 sm:gap-5 md:gap-3 lg:gap-3 xl:gap-5 group cursor-pointer"
              >
                <div className={`w-[60px] h-[60px] md:w-[48px] md:h-[48px] lg:w-[42px] lg:h-[42px] xl:w-[60px] xl:h-[60px] rounded-2xl md:rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0 ${feature.iconBg} transition-transform duration-300 group-hover:scale-105`}>
                  <feature.icon className={`w-6 h-6 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-6 xl:h-6 ${feature.iconColor}`} strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] font-bold text-white mb-0.5 group-hover:text-white transition-colors lg:whitespace-nowrap xl:whitespace-normal">{feature.title}</h4>
                  <p className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] text-slate-300 font-medium leading-tight">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}