"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Users, Handshake } from "lucide-react";

interface StatItem {
  id: string;
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

function AnimatedCounter({
  to,
  suffix = "",
  trigger,
}: {
  to: number;
  suffix?: string;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    const duration = 1800; // ms

    let animFrame: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * to));

      if (progress < 1) {
        animFrame = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [trigger, to]);

  return (
    <>
      <span>{count}</span>
      {suffix}
    </>
  );
}

const impactStats: StatItem[] = [
  {
    id: "projects",
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-[2.2]" />,
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    id: "businesses",
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-[2.2]" />,
    value: 100,
    suffix: "+",
    label: "Businesses Served",
  },
  {
    id: "clients",
    icon: <Handshake className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-[2.2]" />,
    value: 90,
    suffix: "%",
    label: "Long-Term Clients",
  },
];

export default function AboutImpact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full bg-white py-20 sm:py-20 lg:py-24 overflow-hidden text-[#0A1024]"
    >
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[380px] h-[380px] bg-[#FF0055]/05 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* ============================================================ */}
          {/* LEFT COLUMN: HEADLINE & PARAGRAPH                            */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Eyebrow: OUR IMPACT + Pink Dash */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[14px] sm:text-[14px] lg:text-[18px] xl:text-[18px] font-bold tracking-[0.2em] text-[#0A1024] uppercase">
                OUR IMPACT
              </span>
              <span className="inline-block w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] font-black text-[#0A1024] leading-[1.12] tracking-tight font-heading">
              Partnerships That <br />
              <span className="text-[#FF0055]">Keep Growing</span>
            </h2>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-relaxed text-gray-700 font-sans font-normal max-w-[500px]">
              Startups, small businesses and established brands have trusted us with their digital growth, and most stay as they scale. At Kaelixo IT Company, the work is done when our clients can see the difference, not when the site goes live.
            </p>
          </motion.div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: STATS METRICS CARD                             */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 30, scale: 0.98 }
            }
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex justify-center lg:justify-end w-full"
          >
            <div className="w-full bg-transparent sm:bg-white rounded-[14px] sm:rounded-[18px] border-0 sm:border border-slate-100 shadow-none sm:shadow-[0_15px_45px_rgba(0,0,0,0.06)] p-0 sm:p-8 lg:p-10">
              <div className="grid grid-cols-3 divide-x divide-slate-200/80 sm:divide-slate-100">
                {impactStats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col items-center text-center px-2 sm:px-4 lg:px-6 group"
                  >
                    {/* Pink Gradient Icon Circle */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-tr from-[#FF0055] via-[#FF2670] to-[#FF6699] border border-[#FF85B3]/40 flex items-center justify-center text-white mb-3.5 sm:mb-5 shadow-[0_4px_16px_rgba(255,0,85,0.28)] group-hover:scale-110 group-hover:shadow-[0_6px_22px_rgba(255,0,85,0.45)] transition-all duration-300">
                      {stat.icon}
                    </div>

                    {/* Stat Number with Counter */}
                    <div className="text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[23px] 2xl:text-[32px] font-extrabold text-[#0A1024] tracking-tight font-heading leading-tight">
                      <AnimatedCounter
                        to={stat.value}
                        suffix={stat.suffix}
                        trigger={isInView}
                      />
                    </div>

                    {/* Stat Label */}
                    <div className="text-[14px] lg:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-medium text-gray-600 font-sans mt-1 sm:mt-2 text-center leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
