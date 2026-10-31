"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Users, Trophy, BarChart3 } from "lucide-react";

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

const statsData: StatItem[] = [
  {
    id: "projects",
    icon: <FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 stroke-[2.2]" />,
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    id: "clients",
    icon: <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 stroke-[2.2]" />,
    value: 100,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    id: "experience",
    icon: <Trophy className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 stroke-[2.2]" />,
    value: 5,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    id: "satisfaction",
    icon: <BarChart3 className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 stroke-[2.2]" />,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function PortfolioStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-8 overflow-hidden rounded-t-[32px] sm:rounded-t-[40px] border-t border-[#e9eef7] bg-white py-8 sm:py-10 lg:py-12 shadow-[0_-12px_32px_rgba(0,0,0,0.12)] text-[#07080c] max-md:rounded-t-[28px]"
      style={{
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-7 sm:gap-y-8 gap-x-3 sm:gap-x-6 md:gap-x-8 lg:gap-x-0 lg:divide-x lg:divide-slate-200/90"
        >
          {statsData.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2.5 xl:gap-3.5 2xl:gap-4 justify-start ${
                idx === 0
                  ? "lg:pl-0 lg:pr-2.5 xl:pr-6 2xl:pr-8"
                  : idx === statsData.length - 1
                  ? "lg:pl-2.5 xl:pl-6 2xl:pl-8 lg:pr-0"
                  : "lg:px-2.5 xl:px-6 2xl:px-8"
              }`}
            >
              {/* Circular Icon with vibrant Kaelixo Pink Gradient & soft halo */}
              <div className="relative group shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full bg-gradient-to-br from-[#C70044] via-[#FF0055] to-[#FF3D82] border border-[#FF6699]/30 text-white flex items-center justify-center shadow-[0_3px_12px_rgba(255,0,85,0.25)] ring-2 sm:ring-[3px] ring-[#FF0055]/10 group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(255,0,85,0.4)] transition-all duration-300">
                  {stat.icon}
                </div>
              </div>

              {/* Number and Label */}
              <div className="flex flex-col min-w-0">
                <div className="text-[22px] sm:text-[26px] md:text-[24px] lg:text-[30px] xl:text-[34px] font-extrabold text-[#0A1024] tracking-tight font-heading leading-tight">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    trigger={isInView}
                  />
                </div>
                <div className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[15px] font-medium text-gray-600 font-sans whitespace-nowrap mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

