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
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />,
    value: 120,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    id: "clients",
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />,
    value: 250,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    id: "experience",
    icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />,
    value: 10,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    id: "satisfaction",
    icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function AboutStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full bg-white border-y border-slate-200/80 py-8 sm:py-10 lg:py-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:divide-x md:divide-slate-200/90"
        >
          {statsData.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex items-center gap-3 sm:gap-4 md:gap-3.5 lg:gap-4 xl:gap-5 ${
                idx === 0
                  ? "md:pr-4 lg:pr-8"
                  : idx === statsData.length - 1
                  ? "md:pl-4 lg:pl-8"
                  : "md:px-4 lg:px-8"
              } justify-start`}
            >
              {/* Circular Icon with signature Kaelixo Pink Gradient & soft halo */}
              <div className="relative group shrink-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-[#FF0055] via-[#ff1464] to-[#ff2b70] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(255,0,85,0.32)] ring-4 ring-[#FF0055]/10 group-hover:scale-105 group-hover:shadow-[0_6px_22px_rgba(255,0,85,0.45)] transition-all duration-300">
                  {stat.icon}
                </div>
              </div>

              {/* Number and Label */}
              <div className="flex flex-col">
                <div className="text-[22px] sm:text-[26px] md:text-[24px] lg:text-[30px] xl:text-[34px] font-extrabold text-[#0A1024] tracking-tight font-heading leading-tight">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    trigger={isInView}
                  />
                </div>
                <div className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[15px] font-medium text-slate-500 font-sans whitespace-nowrap mt-0.5">
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
