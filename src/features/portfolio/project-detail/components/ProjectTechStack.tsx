import React from "react";
import { Zap, CheckCircle2 } from "lucide-react";

interface TechItem {
  name: string;
  desc: string;
}

interface GuaranteeItem {
  title: string;
  desc: string;
}

interface TechStackData {
  subtitle: string;
  technologies: TechItem[];
  guarantees: GuaranteeItem[];
}

interface ProjectTechStackProps {
  techStack: TechStackData;
}

export default function ProjectTechStack({ techStack }: ProjectTechStackProps) {
  return (
    <section className="relative z-20 bg-white text-[#0A1024] py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Eyebrow & Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#FF0055]" />
            <span className="text-xs sm:text-[13px] font-bold text-[#FF0055] tracking-widest uppercase font-heading">
              TECHNOLOGY & SERVICES USED
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#0A1024]">
            Built with the Right <span className="text-[#FF0055]">Technology</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 font-sans">
            {techStack.subtitle}
          </p>
        </div>

        {/* 3x3 Grid of Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {techStack.technologies.map((tech, tIdx) => (
            <div
              key={tIdx}
              className="p-5 sm:p-6 rounded-[22px] bg-[#FAFBFD] border border-slate-200/80 shadow-xs hover:border-pink-300 hover:shadow-sm transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#FF0055] shrink-0 mt-0.5">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-black text-base text-[#0A1024] mb-1">
                  {tech.name}
                </h4>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-sans">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 4 Guarantee Badges */}
        <div className="p-5 sm:p-6 rounded-[24px] bg-slate-50 border border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left">
            {techStack.guarantees.map((item, gIdx) => (
              <div key={gIdx} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center text-[#FF0055] shrink-0">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="font-heading font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                    {item.title}
                  </h5>
                  <p className="text-[11px] text-slate-500 font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

