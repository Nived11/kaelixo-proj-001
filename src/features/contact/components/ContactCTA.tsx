"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaBehance,
  FaThreads,
  FaWhatsapp,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const SOCIAL_CARDS = [
  {
    name: "WhatsApp",
    description: "Chat with us directly",
    href: "https://wa.me/919037235832",
    icon: FaWhatsapp,
    iconWrapperClass: "bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)]",
    iconSize: 20,
  },
  {
    name: "LinkedIn",
    description: "Company news and openings",
    href: "https://www.linkedin.com/company/kaelixo/",
    icon: FaLinkedinIn,
    iconWrapperClass: "bg-[#0A66C2] text-white shadow-[0_0_15px_rgba(10,102,194,0.4)]",
    iconSize: 18,
  },
  {
    name: "Instagram",
    description: "Life inside the studio",
    href: "https://www.instagram.com/kaelixo_/",
    icon: FaInstagram,
    iconWrapperClass:
      "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_0_15px_rgba(220,39,67,0.4)]",
    iconSize: 20,
  },
  {
    name: "Behance",
    description: "Design and brand work",
    href: "https://www.behance.net/kaelixotech",
    icon: FaBehance,
    iconWrapperClass: "bg-[#0057FF] text-white shadow-[0_0_15px_rgba(0,87,255,0.4)]",
    iconSize: 20,
  },
  {
    name: "YouTube",
    description: "Walkthroughs and demos",
    href: "https://www.youtube.com/@kaeli_xo",
    icon: FaYoutube,
    iconWrapperClass: "bg-[#FF0000] text-white shadow-[0_0_15px_rgba(255,0,0,0.4)]",
    iconSize: 19,
  },
  {
    name: "X (Twitter)",
    description: "Quick updates and thoughts",
    href: "https://x.com/Kaelixotbg",
    icon: FaXTwitter,
    iconWrapperClass: "bg-black border border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.15)]",
    iconSize: 17,
  },
  {
    name: "Threads",
    description: "Everyday conversations",
    href: "https://www.threads.com/@kaelixo_?igshid=NTc4MTIwNjQ2YQ%3D%3D",
    icon: FaThreads,
    iconWrapperClass: "bg-black border border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.15)]",
    iconSize: 18,
  },
  {
    name: "Facebook",
    description: "Events and community stories",
    href: "https://www.facebook.com/kaelixotbt",
    icon: FaFacebookF,
    iconWrapperClass: "bg-[#1877F2] text-white shadow-[0_0_15px_rgba(24,119,242,0.4)]",
    iconSize: 18,
  },
];

export default function ContactCTA() {
  return (
    <section className="relative z-20 w-full overflow-hidden bg-[#030106] text-white py-16 sm:py-20 lg:py-24 border-t border-white/10 select-none">
      {/* Background Graphic Asset: contactctabg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/contact/contactctabg.png"
          alt="Contact CTA Background"
          fill
          priority
          className="object-cover object-center opacity-95"
        />
        {/* Soft vignette to guarantee text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* ============================================================ */}
        {/* HEADER AREA: STAY CONNECTED & HEADLINE                        */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-8 sm:mb-10"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-2.5">
            <span className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-bold text-gray-300 tracking-[0.22em] uppercase font-heading">
              STAY IN TOUCH
            </span>
            <span className="w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full inline-block" />
          </div>

          {/* Headline */}
          <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-extrabold tracking-tight font-heading leading-[1.12] text-white mb-3">
            Find Us Where <br />
            <span className="text-[#FF0055] drop-shadow-[0_0_35px_rgba(255,0,85,0.5)]">
              You Already Are.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] font-normal leading-relaxed max-w-xl font-sans">
            Want a quicker chat, or a look at how we work day to day? Message us on WhatsApp or follow along on our social channels.
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/* INTERACTIVE CHANNELS GRID (3 cols on 1024px laptop)          */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4.5">
          {SOCIAL_CARDS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-[#FF0055]/30 hover:border-[#FF0055] bg-black/50 hover:bg-black/70 backdrop-blur-md p-3.5 sm:p-4 flex items-center justify-between gap-3.5 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(255,0,85,0.08)] hover:shadow-[0_0_30px_rgba(255,0,85,0.28)] cursor-pointer"
              >
                {/* Left: Icon + Text */}
                <div className="flex items-center gap-3 min-w-0">
                  {/* Real Brand App Icon with rounded square */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${item.iconWrapperClass}`}
                  >
                    <Icon size={item.iconSize} />
                  </div>

                  {/* Title & Description */}
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-[15px] font-bold text-white group-hover:text-[#FF0055] transition-colors font-heading leading-snug truncate">
                      {item.name}
                    </h4>
                    <p className="text-[15px] sm:text-[15px] md:text-[14px] lg:text-[12px] xl:text-[14px] 2xl:text-[14px] [@media(min-width:1920px)]:text-[14px]  text-gray-300 font-normal font-sans leading-tight mt-0.5 truncate">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right: Circular Arrow Button */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 group-hover:border-[#FF0055] group-hover:bg-[#FF0055]/20 flex items-center justify-center text-white/60 group-hover:text-white transition-all duration-300 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
