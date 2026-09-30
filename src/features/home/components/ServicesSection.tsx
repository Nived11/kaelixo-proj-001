"use client";

import React from "react";
import Link from "next/link";
import { Code2, Megaphone, Database, PenTool, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "High-performance websites that engage, convert and grow your business.",
      href: "/services/web-development",
      icon: <Code2 className="w-6 h-6 text-white stroke-[2.2]" />,
      auraBg: "bg-[#FF0055]/15",
      iconGradient: "from-[#FF0055] to-[#E6004C]",
      shadow: "shadow-[#FF0055]/25",
    },
    {
      title: "Digital Marketing",
      description:
        "The growth marketing agency arm of Kaelixo — data-driven strategies to increase visibility and accelerate growth.",
      href: "/services/digital-marketing",
      icon: <Megaphone className="w-6 h-6 text-white stroke-[2.2]" />,
      auraBg: "bg-[#7C3AED]/15",
      iconGradient: "from-[#7C3AED] to-[#6366F1]",
      shadow: "shadow-[#7C3AED]/25",
    },
    {
      title: "CRM Solutions",
      description:
        "Custom CRM systems to streamline sales, operations and customer relationships.",
      href: "/services/crm-solutions",
      icon: <Database className="w-6 h-6 text-white stroke-[2.2]" />,
      auraBg: "bg-[#0284C7]/15",
      iconGradient: "from-[#0284C7] to-[#0EA5E9]",
      shadow: "shadow-[#0284C7]/25",
    },
    {
      title: "Design & Branding",
      description:
        "Creative designs that make your brand unforgettable.",
      href: "/services/design-branding",
      icon: <PenTool className="w-6 h-6 text-white stroke-[2.2]" />,
      auraBg: "bg-[#10B981]/15",
      iconGradient: "from-[#10B981] to-[#059669]",
      shadow: "shadow-[#10B981]/25",
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-[#FAFAFC] text-slate-900 pt-12 pb-20 sm:py-28 overflow-hidden select-none"
    >
      {/* Subtle Ethereal Ambient Glows (matching reference) */}
      <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-[#FF0055]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-1/3 w-[500px] h-[350px] bg-violet-400/[0.04] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[450px] h-[450px] bg-[#FF0055]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
          {/* Left: Tag + Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="text-[12px] font-bold text-[#FF0055] tracking-[0.2em] uppercase">
                OUR SERVICES
              </span>
              <span className="w-8 h-[2px] bg-[#FF0055] inline-block rounded-full" />
            </div>
            <h2 className="text-[32px] sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.12]">
              Digital Solutions <br />
              for a Smarter Tomorrow
            </h2>
          </motion.div>

          {/* Right: Description paragraph + View All Services Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row sm:items-center lg:items-end justify-between gap-6 max-w-xl"
          >
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
             Every step is clear and shared, guided by a growth marketing agency.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-200/90 shadow-sm hover:shadow transition-all duration-200 self-start sm:self-auto"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-slate-700" />
            </Link>
          </motion.div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
            >
              <Link
                href={item.href}
                className="group relative bg-white rounded-[20px] sm:rounded-[26px] p-6 sm:p-8 border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer block h-full"
              >
                <div>
                  {/* Header: Icon + Title side-by-side on mobile, stacked on desktop */}
                  <div className="flex flex-row items-center sm:items-start gap-4 sm:flex-col sm:gap-0">
                    {/* Dual-layer Squircle Icon with Ambient Aura */}
                    <div
                      className={`inline-flex items-center justify-center p-2 sm:p-2.5 rounded-[16px] sm:rounded-[22px] ${item.auraBg} transition-transform duration-300 group-hover:scale-105 shrink-0`}
                    >
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] sm:rounded-[16px] bg-gradient-to-br ${item.iconGradient} flex items-center justify-center shadow-lg ${item.shadow}`}
                      >
                        <div className="scale-90 sm:scale-100 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[18px] sm:text-xl font-bold text-slate-900 tracking-tight sm:mt-7 sm:mb-3 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[13.5px] text-slate-600 leading-relaxed font-normal mt-4 sm:mt-0">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Learn More link */}
                <div className="mt-5 sm:mt-8 pt-3 sm:pt-4">
                  <div
                    className="inline-flex items-center gap-1.5 text-[13px] sm:text-sm font-semibold text-[#FF0055] group-hover:text-[#E6004C] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
