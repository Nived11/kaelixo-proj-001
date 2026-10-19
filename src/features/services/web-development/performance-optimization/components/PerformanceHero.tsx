"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function PerformanceHero() {
  return (
    <section 
      className="sticky top-[96px] z-0 w-full flex items-center justify-center overflow-hidden
        h-[340px] sm:h-[300px] md:h-[320px] lg:h-[350px] xl:h-[450px] 2xl:h-[480px] [@media(min-width:1920px)]:h-[500px]"
      style={{
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform',
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#020205] z-0" />

      {/* Side Graphics from Public Folder */}
      <motion.img
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src="/images/services/web-dev/service-left.webp"
        alt="Performance Graphic Left"
        className="absolute pointer-events-none z-0 mix-blend-screen object-cover object-left
          w-[80%] sm:w-[50%] md:w-[65%] lg:w-[70%] xl:w-[50%] 2xl:w-[50%] [@media(min-width:1920px)]:w-[50%]
          h-[90%] sm:h-[100%] md:h-[100%] lg:h-[90%] xl:h-[100%] 2xl:h-[100%] [@media(min-width:1920px)]:h-[100%]
          top-[6%] sm:top-[0%] md:top-[0%] lg:top-[5%] xl:top-[2%] 2xl:top-[0%] [@media(min-width:1920px)]:top-[0%]
          -left-[30%] sm:left-[0%] md:-left-[14%] lg:-left-[10%] xl:-left-[6%] 2xl:-left-[6%] [@media(min-width:1920px)]:-left-[6%]
          opacity-10 sm:opacity-20 md:opacity-60 lg:opacity-80 xl:opacity-80 2xl:opacity-100 [@media(min-width:1920px)]:opacity-100"
      />
      <motion.img
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src="/images/services/web-dev/service-right.webp"
        alt="Performance Graphic Right"
        className="absolute pointer-events-none z-0 mix-blend-screen object-cover object-right
          w-[80%] sm:w-[50%] md:w-[65%] lg:w-[70%] xl:w-[50%] 2xl:w-[50%] [@media(min-width:1920px)]:w-[50%]
          h-[90%] sm:h-[100%] md:h-[100%] lg:h-[90%] xl:h-[100%] 2xl:h-[100%] [@media(min-width:1920px)]:h-[100%]
          top-[6%] sm:top-[0%] md:top-[0%] lg:top-[5%] xl:top-[2%] 2xl:top-[0%] [@media(min-width:1920px)]:top-[0%]
          -right-[30%] sm:right-[0%] md:-right-[14%] lg:-right-[10%] xl:-right-[6%] 2xl:-right-[6%] [@media(min-width:1920px)]:-right-[6%]
          opacity-10 sm:opacity-20 md:opacity-60 lg:opacity-80 xl:opacity-80 2xl:opacity-100 [@media(min-width:1920px)]:opacity-100"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 w-full max-w-[1400px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-[38px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-extrabold tracking-tight mb-6 leading-none"
        >
          Faster Sites. <br className="hidden sm:inline" />
          <span className="text-[#FF0055]">Better Results.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-white text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[24px] max-w-2xl mx-auto font-medium leading-relaxed"
        >
          As a web performance optimization company, we find what's slowing your site down, fix it, then keep it fast as your business grows.
        </motion.p>
      </div>
    </section>
  );
}
