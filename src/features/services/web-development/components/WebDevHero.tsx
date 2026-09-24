import React from 'react';

export default function WebDevHero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#020205] z-0" />
      
      {/* Side Graphics from Public Folder */}
      <img 
        src="/service-left.png" 
        alt="" 
        className="absolute left-0 top-0 w-1/2 h-full object-cover object-left pointer-events-none z-0 mix-blend-screen" 
      />
      <img 
        src="/service-right.png" 
        alt="" 
        className="absolute right-0 top-0 w-1/2 h-full object-cover object-right pointer-events-none z-0 mix-blend-screen" 
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 w-full max-w-[1400px] mx-auto">
        <h1 className="text-white text-5xl md:text-6xl lg:text-[80px] font-extrabold tracking-tight mb-6 leading-none">
          Web <span className="text-[#FF0055]">Development</span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl lg:text-[22px] max-w-2xl mx-auto font-medium">
          Fast, scalable web experiences for modern businesses.
        </p>
      </div>
    </section>
  );
}
