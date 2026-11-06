import Image from "next/image";
import React from "react";
import { ChartNoAxesColumnIncreasing, Clock, TrendingUp, Users } from "lucide-react";

interface StatItem {
  stat: string;
  label: string;
  desc: string;
}

interface ResultsData {
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
    <section className="relative isolate z-20 overflow-hidden border-t border-white/5 bg-[#060713] py-16 text-white sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_95%_28%,#ff00551f,transparent_34%),radial-gradient(ellipse_at_bottom_left,#ff005529,transparent_32%),radial-gradient(ellipse_at_bottom_right,#ff00551f,transparent_24%)]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute -top-4 right-4 sm:right-6 lg:right-8 xl:right-12 -z-10 aspect-[1524/1032] w-[76%] max-w-[640px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_48%,transparent)] sm:w-[56%] lg:w-[47%]">
          <Image
            src="/images/portfolio/businessimpact-travelhope.png"
            alt=""
            fill
            sizes="(min-width: 1400px) 640px, (min-width: 1024px) 47vw, (min-width: 640px) 56vw, 76vw"
            className="object-contain object-right-top [mask-image:linear-gradient(to_right,transparent,black_30%,black_86%,transparent)]"
          />
        </div>
        <header className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-3 flex items-center gap-3 font-heading text-[10px] font-semibold uppercase tracking-[.26em] text-white/70 sm:text-xs">
            <span className="h-[3px] w-7 bg-[#ff2679]" />
            Results &amp; Business Impact
          </p>
          <h2 className="font-heading text-[clamp(2.25rem,5.2vw,4.6rem)] leading-[.98] font-black tracking-tight">
            {results.headline.prefix}
            <span className="block text-[#ff0055]">
              {results.headline.highlight}
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-snug text-white/75 sm:text-lg">{results.subtitle}</p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {results.stats.map((item, index) => {
            const Icon = resultIcons[index % resultIcons.length];

            return (
              <li key={item.label} className="rounded-2xl border border-[#fa438b]/35 bg-[#090c18] p-5 shadow-[inset_0_-5px_18px_rgba(255,24,111,.13),0_10px_24px_rgba(0,0,0,.2)] xl:px-6">
                <span className="mb-2 grid size-14 place-items-center rounded-full border border-[#ff5a9b]/70 bg-[#140819] text-[#ff0055] shadow-[0_0_12px_#ff247866,inset_0_0_8px_#ff247866] sm:size-16">
                  <Icon aria-hidden="true" className="size-7" strokeWidth={2} />
                </span>
                <span className="block w-fit text-[#ff0055] font-heading text-4xl leading-none font-black tracking-tight sm:text-5xl xl:text-6xl">{item.stat}</span>
                <h3 className="mt-1 font-heading text-base leading-tight font-bold sm:text-lg">{item.label}</h3>
                <p className="mt-2 text-sm leading-snug text-white/75">{item.desc}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/25 pt-5 font-heading text-[10px] font-medium uppercase tracking-[.24em] text-white/65 sm:text-xs">
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
