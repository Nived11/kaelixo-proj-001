import React from "react";
import Image from "next/image";
import { Compass, Monitor, MousePointerClick, Smartphone, Zap } from "lucide-react";

interface ShowcaseData {
  subtitle: string;
  pills: string[];
  screens: {
    name: string;
    desc: string;
  }[];
}

interface ProjectShowcaseProps {
  projectTitle: string;
  projectImage: string;
  heroMockupImage?: string;
  showcase: ShowcaseData;
}

const featureIcons = [Smartphone, Zap, Compass, MousePointerClick, Monitor];

const featureDescriptions: Record<string, string> = {
  "Mobile-first UI": "Seamless experience across devices",
  "Fast Enquiry Flow": "Simplified forms for more enquiries",
  "Clear Navigation": "Easy to explore destinations and packages",
  "Conversion-Focused CTAs": "Buttons that guide visitors to book",
  "Responsive Layouts": "Optimised for every screen size",
};

export default function ProjectShowcase({
  projectTitle,
  projectImage,
  heroMockupImage,
  showcase,
}: ProjectShowcaseProps) {
  const image = heroMockupImage || projectImage;

  return (
    <section className="relative z-20 overflow-hidden border-y border-white/5 bg-black py-16 text-white sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-20 size-64 rounded-full bg-[#ff2470]/[.16] sm:size-80" />
        <div className="absolute -top-16 -right-12 size-36 rounded-full bg-[#ff2470]/[.14] sm:size-52" />
        <div className="absolute -bottom-32 -right-20 size-64 rounded-full bg-[#ff2470]/[.18] sm:size-80" />
      </div>
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-6">
          <div className="sm:px-3 lg:pb-6">
            <p className="flex items-center gap-3 font-[750] text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] tracking-[0.2em] text-slate-200 uppercase">
              <span className="h-0.5 w-9 shrink-0 bg-[#ff0055]" />
              Design &amp; Experience Showcase
            </p>
            <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.16] tracking-[-1.3px] mb-2">
              Design &amp; Experience
              <span className="block text-[#ff0055]">Showcase</span>
            </h2>
            <p className="mt-3 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] mb-8 max-w-[550px] text-slate-200 ">
              {showcase.subtitle}
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-y-5 min-[480px]:grid-cols-4">
              {showcase.pills.slice(0, 4).map((label, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                const description = featureDescriptions[label];

                return (
                  <li key={label} className="flex flex-col items-center px-2 text-center min-[480px]:border-l min-[480px]:border-white/10">
                    <span className="mb-2 grid size-11 place-items-center rounded-full bg-[#ff0055]/20 text-[#ff2470]">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] flex min-h-[2lh] items-center justify-center leading-tight font-semibold">{label}</span>
                    {description && <span className="mt-1.5 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] text-white/65">{description}</span>}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative mx-auto aspect-[2/1] w-full max-w-[650px] lg:mx-0 lg:mt-6 lg:justify-self-end">
            <Image
              src={image}
              alt={`${projectTitle} website preview`}
              fill
              sizes="(min-width: 1024px) 43vw, 100vw"
              className="object-contain drop-shadow-[0_12px_24px_rgba(255,0,85,0.26)]"
            />
          </div>
        </div>

        <div className="relative isolate mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.09] via-white/[.045] to-[#ff2470]/[.06] backdrop-blur-xl lg:mt-0">
          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 size-full text-[#ff0055] motion-reduce:hidden">
            <rect
              x="0.5"
              y="0.5"
              rx="15"
              style={{ width: "calc(100% - 1px)", height: "calc(100% - 1px)" }}
              pathLength="100"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="0.7"
              strokeDasharray="4.5 45.5"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="7s" repeatCount="indefinite" />
            </rect>
          </svg>
          <ul className="relative grid w-full grid-cols-2 gap-x-3 gap-y-5 p-3 sm:p-4 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(0,.48fr)]">
            {showcase.screens.map((screen, index) => {
              const mobile = index === showcase.screens.length - 1;

              return (
                <li key={screen.name} className="min-w-0 text-center">
                  <div className={`relative mx-auto overflow-hidden rounded-lg border border-white/15 bg-[#050d15] ${mobile ? "aspect-[.64] w-[48%] lg:w-full" : "aspect-[4/3] w-full"}`}>
                    <div className={heroMockupImage ? `absolute aspect-[2/1] ${mobile ? "right-[-17%] top-[-30%] w-[530%]" : "left-[-16%] top-[-5%] w-[160%]"}` : "absolute inset-0"}>
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes={mobile ? "320px" : "(min-width: 1024px) 24vw, 65vw"}
                        className={heroMockupImage ? "object-contain" : "object-cover"}
                      />
                    </div>
                  </div>
                  <h3 className="mt-2 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] font-semibold">{screen.name}</h3>
                  <p className="mt-0.5 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] [@media(min-width:1920px)]:text-[14px] text-white/60">{screen.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
