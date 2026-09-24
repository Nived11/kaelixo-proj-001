"use client";

import { Search, FileText, PenTool, Code2, Send } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: <>Understand your goals<br />and opportunities.</>,
      icon: Search,
      color: "#FF0055", // Red-Pink
      bgClass: "bg-[#FF0055]",
      outerBgClass: "bg-[#FF0055]/15",
      glowClass: "shadow-[0_0_30px_rgba(255,0,85,0.2)]",
    },
    {
      num: "02",
      title: "Plan",
      desc: <>Create the right strategy<br />and solution architecture.</>,
      icon: FileText,
      color: "#8b3dff", // Purple
      bgClass: "bg-[#8b3dff]",
      outerBgClass: "bg-[#8b3dff]/15",
      glowClass: "shadow-[0_0_30px_rgba(139,61,255,0.2)]",
    },
    {
      num: "03",
      title: "Design",
      desc: <>Craft intuitive and<br />modern experiences.</>,
      icon: PenTool,
      color: "#2563eb", // Blue
      bgClass: "bg-[#2563eb]",
      outerBgClass: "bg-[#2563eb]/15",
      glowClass: "shadow-[0_0_30px_rgba(37,99,235,0.2)]",
    },
    {
      num: "04",
      title: "Develop",
      desc: <>Build, test and<br />iterate with care.</>,
      icon: Code2,
      color: "#FF0055", // Red-Pink
      bgClass: "bg-[#FF0055]",
      outerBgClass: "bg-[#FF0055]/15",
      glowClass: "shadow-[0_0_30px_rgba(255,0,85,0.2)]",
    },
    {
      num: "05",
      title: "Launch",
      desc: <>Deploy and grow<br />with ongoing support.</>,
      icon: Send,
      color: "#8b3dff", // Purple
      bgClass: "bg-[#8b3dff]",
      outerBgClass: "bg-[#8b3dff]/15",
      glowClass: "shadow-[0_0_30px_rgba(139,61,255,0.2)]",
    },
  ];

  return (
    <div className="relative bg-[#ffffff] text-[#030C25] py-24 overflow-hidden">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[30%] h-[400px] bg-rose-50/50 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[500px] bg-purple-50/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
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

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-24">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left relative group">
                
                {/* Icon & Number Row */}
                <div className="flex items-center gap-4 mb-6 relative">
                  {/* Glowing Icon Container (with light colored background ring) */}
                  <div className={`w-[88px] h-[88px] rounded-full flex items-center justify-center ${step.outerBgClass} ${step.glowClass} transition-transform duration-300 group-hover:scale-105 relative z-10`}>
                    <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-white ${step.bgClass}`}>
                      <step.icon size={26} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <span className="text-[20px] font-black tracking-tight relative z-10 -translate-y-3" style={{ color: step.color }}>
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

                {/* Connecting Line (Only for first 4 steps, Desktop Only) */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden lg:block absolute top-[44px] z-0"
                    style={{
                      left: '88px', // Starts perfectly at the right edge of the halo
                      width: 'calc(100% + 96px - 88px)', // Reaches exactly the left edge of the next icon
                    }}
                  >
                    <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute -top-[20px] overflow-visible">
                      <defs>
                        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={step.color} />
                          <stop offset="100%" stopColor={steps[index + 1].color} />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 0,20 C 25,45 65,-25 100,20" 
                        fill="none" 
                        stroke={`url(#grad-${index})`}
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        strokeDasharray="0, 10" 
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>

                    {/* Perfect Solid HTML Dot at the end of the line (prevents SVG stretching) */}
                    <div 
                      className="absolute rounded-full"
                      style={{ 
                        width: '10px', 
                        height: '10px', 
                        backgroundColor: steps[index+1].color,
                        right: '-5px',
                        top: '-5px',
                      }}
                    ></div>
                  </div>
                )}

                {/* Vertical Dotted Line (Mobile/Tablet Only) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden w-[2px] h-[40px] border-l-2 border-dashed border-gray-200 mt-8"></div>
                )}
                
              </div>
            ))}
          </div>

      </div>
    </div>
  );
}