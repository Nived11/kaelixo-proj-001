import Image from "next/image";
import React from "react";
import { ChartNoAxesColumnIncreasing, Clock, TrendingUp, Users } from "lucide-react";

interface StatItem {
  stat: string;
  label: string;
  desc: string;
}

interface ResultsData {
  imageOffsetY?: number;
  image?: string;
  headline: {
    prefix: string;
    highlight: string;
  };
  subtitle: string;
  stats: StatItem[];
  footerTagline?: string;
}

interface ProjectResultsProps {
  projectTitle: string;
  results: ResultsData;
}

const resultIcons = [Users, ChartNoAxesColumnIncreasing, Clock, TrendingUp];

export default function ProjectResults({ projectTitle, results }: ProjectResultsProps) {
  return (
    <section className="relative isolate z-20 overflow-hidden border-t border-white/5 bg-black py-16 text-white sm:py-24">

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div aria-hidden="true" style={{ top: results.imageOffsetY ?? -64 }} className="pointer-events-none absolute right-4 sm:right-6 lg:right-8 xl:right-12 -z-10 aspect-[1524/1032] w-[70%] max-w-[580px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_48%,transparent)] sm:w-[52%] lg:w-[43%]">
          <Image
            src={results.image || "/images/portfolio/businessimpact-travelhope.png"}
            alt=""
            fill
            sizes="(min-width: 1400px) 580px, (min-width: 1024px) 43vw, (min-width: 640px) 52vw, 70vw"
            className="object-contain object-right-top [mask-image:linear-gradient(to_right,transparent,black_30%,black_86%,transparent)]"
          />
        </div>
        <header className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-3 flex items-center gap-3 font-heading text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-semibold uppercase tracking-[.26em] text-white/70 ">
            <span className="h-[3px] w-7 bg-[#ff2679]" />
            Results &amp; Business Impact
          </p>
          <h2 className="font-heading text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] text-[clamp(2.25rem,5.2vw,4.6rem)] leading-[.98] font-black tracking-tight">
            {results.headline.prefix}
            <span className="block text-[#ff0055]">
              {results.headline.highlight}
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-snug text-white/75 ">{results.subtitle}</p>
        </header>

        <ul className="mx-auto grid w-full max-w-[1260px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {results.stats.map((item, index) => {
            const Icon = resultIcons[index % resultIcons.length];

            return (
              <li key={item.label} className="relative isolate overflow-hidden rounded-2xl bg-white/10 p-px">
                <div aria-hidden="true" className="pointer-events-none absolute inset-[-140%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_5deg,#FF0055_25deg,transparent_45deg,transparent_180deg,transparent_185deg,#FF0055_205deg,transparent_225deg,transparent_360deg)] animate-dual-beam motion-reduce:hidden" />
                <div className="relative h-full rounded-[15px] bg-black p-5 xl:px-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#ff5a9b]/70 bg-black text-[#ff0055] shadow-[0_0_12px_#ff247866,inset_0_0_8px_#ff247866] sm:size-13">
                    <Icon aria-hidden="true" className="size-6" strokeWidth={2} />
                  </span>
                  <span className="block w-fit text-[#ff0055] font-heading text-4xl leading-none font-black tracking-tight text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px]">{item.stat}</span>
                </div>
                <h3 className="mt-1 font-heading  leading-tight font-bold text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px]">{item.label}</h3>
                <p className="mt-2 text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-snug text-white/75">{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/25 pt-5 font-heading text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] font-medium uppercase tracking-[.24em] text-white/65 ">
          <span className="flex items-center gap-3">
            <span className="h-[3px] w-7 bg-[#ff2679]" />
            {projectTitle}
          </span>
          <span>{results.footerTagline || "PEOPLE | POSSIBILITIES"}</span>
        </div>
      </div>
    </section>
  );
}
