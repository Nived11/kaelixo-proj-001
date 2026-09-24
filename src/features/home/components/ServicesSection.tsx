"use client";

import React from "react";
import Link from "next/link";
import { Code2, Megaphone, Database, PenTool, ArrowRight } from "lucide-react";

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
        "Data-driven strategies to increase visibility and accelerate growth.",
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
      className="relative bg-[#FAFAFC] text-slate-900 py-20 sm:py-28 overflow-hidden select-none"
    >
      {/* Subtle Ethereal Ambient Glows (matching reference) */}
      <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-[#FF0055]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-1/3 w-[500px] h-[350px] bg-violet-400/[0.04] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[450px] h-[450px] bg-[#FF0055]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
          {/* Left: Tag + Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="text-[12px] font-bold text-[#FF0055] tracking-[0.2em] uppercase">
                OUR SERVICES
              </span>
              <span className="w-8 h-[2px] bg-[#FF0055] inline-block rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.12]">
              Digital Solutions <br />
              for a Smarter Tomorrow.
            </h2>
          </div>

          {/* Right: Description paragraph + View All Services Button */}
          <div className="flex flex-col sm:flex-row sm:items-center lg:items-end justify-between gap-6 max-w-xl">
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              From idea to impact — we help businesses leverage technology,
              design and data to create meaningful growth.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-200/90 shadow-sm hover:shadow transition-all duration-200 self-start sm:self-auto"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-slate-700" />
            </Link>
          </div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative bg-white rounded-[26px] p-8 border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer block"
            >
              <div>
                {/* Dual-layer Squircle Icon with Ambient Aura */}
                <div
                  className={`inline-flex items-center justify-center p-2.5 rounded-[22px] ${item.auraBg} transition-transform duration-300 group-hover:scale-105`}
                >
                  <div
                    className={`w-14 h-14 rounded-[16px] bg-gradient-to-br ${item.iconGradient} flex items-center justify-center shadow-lg ${item.shadow}`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-7 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13.5px] text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Learn More link */}
              <div className="mt-8 pt-4">
                <div
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF0055] group-hover:text-[#E6004C] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
