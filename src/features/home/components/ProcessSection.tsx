"use client";

import { Search, FileText, PenTool, Code2, Send } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="relative bg-[#ffffff] text-[#030C25] py-10 sm:py-24 overflow-hidden">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[30%] h-[400px] bg-rose-50/50 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[500px] bg-purple-50/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: "opacity, transform" }}
          className="max-w-2xl mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#FF0055] font-bold text-sm tracking-widest uppercase">OUR PROCESS</span>
            <div className="w-10 h-[2px] bg-[#FF0055]"></div>
          </div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[36px] xl:text-[54px] font-black leading-[1.1] tracking-tight text-[#030C25] mb-4 sm:mb-5">
            From Idea to Impact
          </h2>
          <p className="text-[#475569] text-[15px] sm:text-[17px] lg:text-[14px] xl:text-[17px] font-medium leading-relaxed max-w-2xl">
            A clear, collaborative process that keeps you involved at every step — the same process that makes us a growth marketing agency worth trusting with the full journey, not just one campaign.
          </p>
        </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 xl:gap-24 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" } }
                }}
                style={{ willChange: "opacity, transform" }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left relative group"
              >
                
                {/* Icon & Number Row */}
                <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-6 relative z-10 w-full">
                  {/* Glowing Icon Container (with light colored background ring) */}
                  <div className={`w-[88px] h-[88px] lg:w-[64px] lg:h-[64px] xl:w-[88px] xl:h-[88px] rounded-full flex items-center justify-center ${step.outerBgClass} ${step.glowClass} transition-transform duration-300 group-hover:scale-105 relative z-10`}>
                    <div className={`w-[60px] h-[60px] lg:w-[44px] lg:h-[44px] xl:w-[60px] xl:h-[60px] rounded-full flex items-center justify-center text-white ${step.bgClass}`}>
                      <step.icon className="w-[26px] h-[26px] lg:w-[20px] lg:h-[20px] xl:w-[26px] xl:h-[26px]" strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {/* Step Number (Alternating left/right on mobile) */}
                  <span 
                    className={`text-[20px] lg:text-[16px] xl:text-[20px] font-black tracking-tight absolute lg:static z-10 lg:-translate-y-2 xl:-translate-y-3 lg:ml-2 xl:ml-4 lg:right-auto lg:left-auto ${
                      index % 2 === 0 ? 'right-[calc(50%+45px)]' : 'left-[calc(50%+45px)]'
                    }`} 
                    style={{ color: step.color }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="max-w-[260px] lg:max-w-[180px] xl:max-w-[220px] relative z-10 px-4 py-2 lg:p-0">
                  <h3 className="text-[22px] lg:text-[16px] xl:text-[22px] font-black text-[#030C25] mb-2 lg:mb-1 xl:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] lg:text-[11px] xl:text-[14px] font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Horizontal Connecting Line (Desktop Only) */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden lg:block absolute lg:top-[32px] xl:top-[44px] lg:left-[64px] xl:left-[88px] lg:w-[calc(100%+24px-64px)] xl:w-[calc(100%+96px-88px)] z-0"
                  >
                    <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute -top-[20px] overflow-visible">
                      <defs>
                        <linearGradient id={`grad-h-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={step.color} />
                          <stop offset="100%" stopColor={steps[index + 1].color} />
                        </linearGradient>
                        <mask id={`mask-h-${index}`}>
                          <motion.path 
                            d="M 0,20 C 25,45 65,-25 100,20" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="10"
                            variants={{
                              hidden: { pathLength: 0 },
                              visible: { pathLength: 1, transition: { duration: 1, ease: "easeInOut", delay: 0.3 } }
                            }}
                          />
                        </mask>
                      </defs>
                      <path 
                        d="M 0,20 C 25,45 65,-25 100,20" 
                        fill="none" 
                        stroke={`url(#grad-h-${index})`}
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        strokeDasharray="0, 10" 
                        vectorEffect="non-scaling-stroke"
                        mask={`url(#mask-h-${index})`}
                      />
                    </svg>

                    {/* Perfect Solid HTML Dot at the end of the line */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 1.2 } }
                      }}
                      className="absolute rounded-full"
                      style={{ 
                        width: '10px', 
                        height: '10px', 
                        backgroundColor: steps[index+1].color,
                        right: '-5px',
                        top: '-5px',
                      }}
                    ></motion.div>
                  </div>
                )}

                {/* Vertical S-Curve Connecting Line (Mobile/Tablet Only) */}
                {index < steps.length - 1 && (
                  <div 
                    className="lg:hidden absolute z-0 pointer-events-none"
                    style={{
                      left: '50%', 
                      transform: 'translateX(-50%)',
                      top: '88px', // Start below the halo icon
                      height: 'calc(100% + 48px - 88px)', // spans across gap-12 (48px)
                      width: '280px' // Wide enough for the curve
                    }}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="overflow-visible">
                      <defs>
                        <linearGradient id={`grad-v-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={step.color} />
                          <stop offset="100%" stopColor={steps[index + 1].color} />
                        </linearGradient>
                        <mask id={`mask-v-${index}`}>
                          <motion.path 
                            d={index % 2 === 0 
                              ? "M 50,0 C 105,25 105,75 50,100" // Curves Right
                              : "M 50,0 C -5,25 -5,75 50,100" // Curves Left
                            }
                            fill="none" 
                            stroke="white" 
                            strokeWidth="10"
                            variants={{
                              hidden: { pathLength: 0 },
                              visible: { pathLength: 1, transition: { duration: 1, ease: "easeInOut", delay: 0.2 } }
                            }}
                          />
                        </mask>
                      </defs>
                      <path 
                        d={index % 2 === 0 
                          ? "M 50,0 C 105,25 105,75 50,100" // Curves Right
                          : "M 50,0 C -5,25 -5,75 50,100" // Curves Left
                        }
                        fill="none" 
                        stroke={`url(#grad-v-${index})`}
                        strokeWidth="4.5" 
                        strokeLinecap="round"
                        strokeDasharray="0, 14" 
                        vectorEffect="non-scaling-stroke"
                        mask={`url(#mask-v-${index})`}
                      />
                    </svg>
                    
                    {/* Dot at the end of vertical line */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 1.1 } }
                      }}
                      className="absolute rounded-full"
                      style={{ 
                        width: '10px', 
                        height: '10px', 
                        backgroundColor: steps[index+1].color,
                        bottom: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                    ></motion.div>
                  </div>
                )}
                
              </motion.div>
            ))}
          </div>

      </div>
    </div>
  );
}