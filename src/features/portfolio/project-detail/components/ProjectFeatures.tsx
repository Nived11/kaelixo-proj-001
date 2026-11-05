import React from "react";
import { renderIcon } from "./renderIcon";

interface FeatureItem {
  title: string;
  desc: string;
  icon?: string;
}

interface FeaturesDeliveredData {
  subtitle: string;
  items: FeatureItem[];
}

interface ProjectFeaturesProps {
  featuresDelivered: FeaturesDeliveredData;
}

export default function ProjectFeatures({
  featuresDelivered,
}: ProjectFeaturesProps) {
  return (
    <section className="relative z-20 bg-[#FAFBFD] text-[#0A1024] py-16 sm:py-24 border-t border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Eyebrow & Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#FF0055]" />
            <span className="text-xs sm:text-[13px] font-bold text-[#FF0055] tracking-widest uppercase font-heading">
              KEY FEATURES DELIVERED
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[#0A1024]">
            Key Features <span className="text-[#FF0055]">Delivered</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 font-sans">
            {featuresDelivered.subtitle}
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featuresDelivered.items.map((feat, fIdx) => (
            <div
              key={fIdx}
              className="p-6 rounded-[22px] bg-white border border-slate-200/80 shadow-xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#FF0055] mb-4">
                {renderIcon(feat.icon, "w-5 h-5")}
              </div>
              <h4 className="font-heading font-black text-base sm:text-lg text-[#0A1024] mb-2 leading-snug">
                {feat.title}
              </h4>
              <p className="text-slate-500 text-xs sm:text-[13.5px] leading-relaxed font-sans">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

