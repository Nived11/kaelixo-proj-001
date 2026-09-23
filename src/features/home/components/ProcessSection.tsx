"use client";

import { Search, FileText, PenTool, Code2, Send } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand your goals and opportunities.",
      icon: Search,
      color: "#FF0055", // Red-Pink
      bgClass: "bg-[#FF0055]",
      glowClass: "shadow-[0_0_30px_rgba(255,0,85,0.3)]",
    },
    {
      num: "02",
      title: "Plan",
      desc: "Create the right strategy and solution architecture.",
      icon: FileText,
      color: "#8b3dff", // Purple
      bgClass: "bg-[#8b3dff]",
      glowClass: "shadow-[0_0_30px_rgba(139,61,255,0.3)]",
    },
    {
      num: "03",
      title: "Design",
      desc: "Craft intuitive and modern experiences.",
      icon: PenTool,
      color: "#2563eb", // Blue
      bgClass: "bg-[#2563eb]",
      glowClass: "shadow-[0_0_30px_rgba(37,99,235,0.3)]",
    },
    {
      num: "04",
      title: "Develop",
      desc: "Build, test and iterate with care.",
      icon: Code2,
      color: "#FF0055", // Red-Pink
      bgClass: "bg-[#FF0055]",
      glowClass: "shadow-[0_0_30px_rgba(255,0,85,0.3)]",
    },
    {
      num: "05",
      title: "Launch",
      desc: "Deploy and grow with ongoing support.",
      icon: Send,
      color: "#8b3dff", // Purple
      bgClass: "bg-[#8b3dff]",
      glowClass: "shadow-[0_0_30px_rgba(139,61,255,0.3)]",
    },
  ];

  return (
    <div className="relative bg-[#ffffff] text-[#030C25] py-24 overflow-hidden border-t border-gray-100">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[30%] h-[400px] bg-rose-50/50 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[500px] bg-purple-50/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#FF0055] font-black text-sm tracking-widest uppercase">OUR PROCESS</span>
            <div className="w-10 h-[2px] bg-[#FF0055]"></div>
          </div>
          <h2 className="text-[42px] md:text-[54px] font-black leading-[1.1] tracking-tight text-[#030C25] mb-5">
            From Idea to Impact.
          </h2>
          <p className="text-[#475569] text-[17px] font-medium leading-relaxed max-w-md">
            A clear, collaborative process that keeps you involved at every step.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-10">
          
          {/* Dotted Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] -z-10">
            {/* SVG Wavy Dotted Line */}
            <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none" className="overflow-visible">
              <path 
                d="M 0,20 Q 125,-20 250,20 T 500,20 T 750,20 T 1000,20" 
                fill="none" 
                stroke="#cbd5e1" 
                strokeWidth="2" 
                strokeDasharray="6, 6" 
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left relative group">
                
                {/* Icon & Number Row */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Glowing Icon */}
                  <div className={`w-[88px] h-[88px] rounded-full bg-white flex items-center justify-center ${step.glowClass} transition-transform duration-300 group-hover:scale-105`}>
                    <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-white ${step.bgClass}`}>
                      <step.icon size={26} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <span className="text-[20px] font-black tracking-tight" style={{ color: step.color }}>
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="max-w-[220px]">
                  <h3 className="text-[22px] font-black text-[#030C25] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#64748b] text-[14px] font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Vertical Dotted Line (Mobile/Tablet Only - visible when items stack) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden w-[2px] h-[40px] border-l-2 border-dashed border-gray-200 mt-8"></div>
                )}
                
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}