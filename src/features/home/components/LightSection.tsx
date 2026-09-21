"use client";

import React from "react";
import Link from "next/link";
import { 
  Globe, 
  Cpu, 
  Layers, 
  BarChart4, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Code2 
} from "lucide-react";

export default function LightSection() {
  const services = [
    {
      icon: <Globe className="w-6 h-6 text-[#FF0055]" />,
      title: "Intelligent Websites & Web Apps",
      description:
        "High-performance Next.js and React platforms engineered for lightning speed, dynamic user experiences, and search engine dominance.",
      tag: "Web Engineering",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#FF0055]" />,
      title: "AI-Driven Tools & Automation",
      description:
        "Deploy custom AI agents, intelligent document parsing, automated workflows, and predictive machine learning models tailored to your business.",
      tag: "AI & ML",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#FF0055]" />,
      title: "Custom CRM & ERP Solutions",
      description:
        "Centralize sales pipelines, customer telemetry, billing cycles, and internal company operations into one unified dashboard.",
      tag: "Enterprise Systems",
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#FF0055]" />,
      title: "Custom Software Development",
      description:
        "Scalable backend APIs, distributed microservices, multi-tenant databases, and bulletproof cloud architecture designed for high concurrency.",
      tag: "Full-Stack Software",
    },
    {
      icon: <BarChart4 className="w-6 h-6 text-[#FF0055]" />,
      title: "Digital Growth Strategies",
      description:
        "Data-backed conversion rate optimization, technical analytics, global expansion funnels, and enterprise customer acquisition engines.",
      tag: "Growth & Telemetry",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#FF0055]" />,
      title: "Security & Cloud Infrastructure",
      description:
        "Zero-trust security implementations, SOC2-ready compliance auditing, automated backups, and 99.99% high-availability deployments.",
      tag: "Cloud & DevSecOps",
    },
  ];

  return (
    <section id="services" className="relative bg-white text-slate-900 py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF0055]/10 text-[#FF0055] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> What We Build & Deliver
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            End-to-End Technology for Companies Aiming for the Next Level
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you need an intelligent digital product, enterprise automation, or full-scale cloud transformation, Kaelixo delivers world-class execution.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#FF0055]/40 hover:bg-white hover:shadow-xl hover:shadow-[#FF0055]/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#FF0055]/30 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="inline-block text-[11px] font-bold text-[#FF0055] uppercase tracking-wider">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF0055] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-[#FF0055] transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Light Section Consultation Banner */}
        <div className="mt-20 rounded-3xl bg-slate-950 text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          {/* Subtle Pink ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF0055]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF0055]">
                Let&apos;s Build Together
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Have an ambitious project in mind?
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                Book a strategic consultation with our engineering and architecture team to map out your product roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Link
                href="#consultation"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF0055] hover:bg-[#E6004C] text-white font-semibold text-sm shadow-lg shadow-[#FF0055]/30 hover:shadow-[#FF0055]/50 transition-all text-center"
              >
                Book Free Consultation →
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
