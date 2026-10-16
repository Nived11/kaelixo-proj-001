"use client";

import React from 'react';
import { Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const techRows = [
  // Row 1: E-commerce Core Platforms & Technologies (9 items)
  [
    { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Payments', icon: 'https://cdn.simpleicons.org/stripe' },
    { name: 'WooCommerce', icon: 'https://cdn.simpleicons.org/woocommerce' },
  ],
  // Row 2: Modern Frameworks, Infrastructure & Design (6 items)
  [
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Cloud Infra', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white' },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
  ],
];

export default function EcommerceTechStack() {
  return (
    <section className="py-16 sm:py-20 lg:py-20 xl:py-24 relative overflow-hidden bg-[#020205] border-t border-white/5">

      {/* Background Shapes */}
      <img
        src="/images/home/why-kaelixo-shape.webp"
        alt="glow shape"
        className="absolute bottom-10 left-6 w-[500px] md:w-[600px] lg:w-[150px] opacity-40 pointer-events-none translate-y-[30%] -translate-x-[20%]"
      />
      <img
        src="/images/home/why-kaelixo-shape.webp"
        alt="glow shape"
        className="absolute top-10 right-6 w-[400px] md:w-[500px] lg:w-[150px] opacity-40 pointer-events-none rotate-180 -translate-y-[40%] translate-x-[20%]"
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header Row */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 xl:gap-4 mb-10 lg:mb-12">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start w-full xl:w-auto overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-slate-200 text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-[750] tracking-[0.25em] uppercase">
                TECHNOLOGY STACK
              </span>
              <div className="w-10 h-[2px] bg-[#FF0055]" />
            </div>

            <h2 className="text-white text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.05] tracking-tight mb-4 font-heading lg:whitespace-nowrap">
              Built with <span className="text-[#FF0055] drop-shadow-[0_0_15px_rgba(255,0,85,0.3)]">Modern Technologies</span>
            </h2>

            <p className="text-slate-200 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] max-w-[600px]">
              Once we’ve thought your store through, we build on whichever platform fits best, chosen to grow with your business, not lock it in.
            </p>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4 lg:gap-6 shrink-0"
          >
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0a0407] shadow-[inset_0_1px_3px_rgba(255,0,85,0.4)] border border-[#FF0055]/20 flex items-center justify-center relative shrink-0">
                <div className="absolute inset-0 bg-[#FF0055]/30 blur-[6px] rounded-full" />
                <Zap className="w-4 h-4 text-[#FF0055] relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] leading-tight">Modern</span>
                <span className="text-slate-300 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] mt-0.5 whitespace-nowrap">Latest Tools</span>
              </div>
            </div>

            <div className="w-[1px] h-10 bg-white/10 hidden sm:block shrink-0" />

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0a0407] shadow-[inset_0_1px_3px_rgba(255,0,85,0.4)] border border-[#FF0055]/20 flex items-center justify-center relative shrink-0">
                <div className="absolute inset-0 bg-[#FF0055]/30 blur-[6px] rounded-full" />
                <ShieldCheck className="w-4 h-4 text-[#FF0055] relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] leading-tight">Secure</span>
                <span className="text-slate-300 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] mt-0.5 whitespace-nowrap">Reliable Builds</span>
              </div>
            </div>

            <div className="w-[1px] h-10 bg-white/10 hidden sm:block shrink-0" />

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0a0407] shadow-[inset_0_1px_3px_rgba(255,0,85,0.4)] border border-[#FF0055]/20 flex items-center justify-center relative shrink-0">
                <div className="absolute inset-0 bg-[#FF0055]/30 blur-[6px] rounded-full" />
                <TrendingUp className="w-4 h-4 text-[#FF0055] relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] leading-tight">Scalable</span>
                <span className="text-slate-300 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] mt-0.5 whitespace-nowrap">Future Ready</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Downward Pyramid Tech Stack Cards */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-3 lg:gap-3.5 mt-8 w-full">
          {techRows.map((row, rowIndex) => (
            <div
              key={`tech-row-${rowIndex}`}
              className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 lg:gap-3 xl:gap-3.5 w-full"
            >
              {row.map((tech, colIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{
                    duration: 0.45,
                    delay: (rowIndex * 9 + colIndex) * 0.04,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center justify-center w-[76px] h-[84px] sm:w-[84px] sm:h-[92px] md:w-[92px] md:h-[98px] lg:w-[98px] lg:h-[104px] xl:w-[106px] xl:h-[110px] [@media(min-width:1920px)]:w-[112px] [@media(min-width:1920px)]:h-[116px] bg-[#05050A] rounded-[14px] lg:rounded-[16px] shadow-[0_0_15px_rgba(255,0,85,0.02)] relative group overflow-hidden cursor-default transition-all duration-300 hover:shadow-[0_0_22px_rgba(255,0,85,0.18)]"
                >
                  {/* Animated Border Mask */}
                  <div
                    className="absolute inset-0 rounded-[14px] lg:rounded-[16px] overflow-hidden pointer-events-none z-10"
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
                  <div className="relative z-20 w-full h-full border border-white/5 group-hover:border-transparent rounded-[14px] lg:rounded-[16px] transition-colors duration-300 flex flex-col items-center justify-center px-1.5 py-2">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FF0055]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[14px] lg:rounded-[16px]" />

                    <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-8.5 xl:h-8.5 mb-1.5 relative flex items-center justify-center z-10">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                      />
                    </div>
                    <span className="text-slate-300 text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] font-medium group-hover:text-white transition-colors text-center z-10 whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
