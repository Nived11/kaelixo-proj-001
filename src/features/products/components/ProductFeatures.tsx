"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Users, TrendingUp, ShieldCheck } from "lucide-react";

interface ProductBenefit {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const productBenefits: ProductBenefit[] = [
  {
    id: "efficiency",
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />,
    title: "Operational Efficiency",
    description: "Automate workflows and reduce manual work.",
  },
  {
    id: "productivity",
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />,
    title: "Higher Productivity",
    description: "Help teams do more in less time.",
  },
  {
    id: "growth",
    icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />,
    title: "Business Growth",
    description: "Turn operations into measurable results.",
  },
  {
    id: "security",
    icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />,
    title: "Reliable & Secure",
    description: "Built with enterprise-grade security and scalability.",
  },
];

export default function ProductFeatures() {
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
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-6 xl:gap-8 items-center"
        >
          {productBenefits.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-3.5 sm:gap-4 p-2 sm:p-2.5 rounded-2xl hover:bg-slate-50/80 transition-colors duration-200"
            >
              {/* Soft Pink Rounded Square Icon Container */}
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#FFF0F4] border border-[#FFE0EB] text-[#FF0055] flex items-center justify-center shrink-0 shadow-xs">
                {item.icon}
              </div>

              {/* Title & Description */}
              <div className="min-w-0">
                <h3 className="font-bold text-[#0A1024] font-heading text-[16px] sm:text-[16px] lg:text-[18px] xl:text-[18px] leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-sanstext-[14px] sm:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed mt-0.5">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

