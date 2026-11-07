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
    <section className="relative isolate z-20 overflow-hidden border-t border-pink-100/60 bg-[#fcfafb] py-16 text-[#080e24] sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_top,#fff,transparent_65%),radial-gradient(ellipse_at_bottom_right,#fdf0f6,transparent_65%)]">
        <div className="absolute -top-44 -left-24 size-80 rounded-full bg-[#ff0055]/[.035]" />
        <div className="absolute top-8 -left-28 size-52 rounded-full bg-[#ff0055]/[.025]" />
        <div className="absolute -right-40 -bottom-52 size-[28rem] rounded-full bg-[#ff0055]/[.035]" />
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Eyebrow & Header */}
        <div className="mb-8 text-center sm:mb-10">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#ff0055]/55 sm:w-10" />
            <span className="font-heading text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-bold uppercase tracking-[0.25em] text-[#ff0055]">
              KEY FEATURES DELIVERED
            </span>
            <span className="h-px w-8 bg-[#ff0055]/55 sm:w-10" />
          </div>
          <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.05] tracking-tight mb-4 font-heading">
            Key Features Delivered
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px]  leading-relaxed text-slate-600 ">
            {featuresDelivered.subtitle}
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featuresDelivered.items.map((feat, fIdx) => (
            <div
              key={fIdx}
              className="rounded-xl border border-[#ff0055]/[.085] bg-white/75 px-6 py-5 transition-colors hover:border-pink-300"
            >
              <div className="mb-3 grid size-16 place-items-center rounded-full bg-[#ff0055]/[.065] text-[#f82569]">
                {renderIcon(feat.icon, "size-8 stroke-[1.8]")}
              </div>
              <h3 className="mb-1.5 font-heading text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] leading-snug font-bold">
                {feat.title}
              </h3>
              <p className="font-sans text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-snug text-slate-600">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

