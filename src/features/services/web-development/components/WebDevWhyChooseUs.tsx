import React from 'react';
import { Users, ShieldCheck, Zap, Maximize, MessageSquare, HeadphonesIcon, ArrowRight } from 'lucide-react';

export default function WebDevWhyChooseUs() {
  const reasons = [
    {
      id: "01",
      icon: <Users className="w-5 h-5 text-[#FF0055]" />,
      title: "Experienced Team",
      desc: "Skilled developers, designers and strategists working together for your success."
    },
    {
      id: "02",
      icon: <ShieldCheck className="w-5 h-5 text-[#FF0055]" />,
      title: "Secure & Reliable",
      desc: "We follow best practices to keep your website safe, stable and always online."
    },
    {
      id: "03",
      icon: <Zap className="w-5 h-5 text-[#FF0055]" />,
      title: "High Performance",
      desc: "Optimized for speed, SEO and a seamless user experience."
    },
    {
      id: "04",
      icon: <Maximize className="w-5 h-5 text-[#FF0055]" />,
      title: "Scalable Solutions",
      desc: "Built to grow with your business — from startup to enterprise."
    },
    {
      id: "05",
      icon: <MessageSquare className="w-5 h-5 text-[#FF0055]" />,
      title: "Transparent Process",
      desc: "Clear communication, regular updates and complete visibility at every stage."
    },
    {
      id: "06",
      icon: <HeadphonesIcon className="w-5 h-5 text-[#FF0055]" />,
      title: "Ongoing Support",
      desc: "We're with you even after launch with updates, maintenance and technical support."
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#020205]">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#FF0055]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start pr-4 xl:pr-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#FF0055]" />
              <span className="text-slate-400 font-bold text-[10px] tracking-[0.2em] uppercase">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-white text-[40px] lg:text-[48px] font-extrabold leading-[1.05] tracking-tight mb-6">
              More Than Just <br />
              <span className="text-[#FF0055]">Web Development</span>
            </h2>

            <p className="text-slate-400 text-[15px] leading-relaxed mb-12">
              We build websites that are fast, secure, scalable and strategically designed to help your business grow in the digital world.
            </p>

            {/* Laptop Mockup (Hero Recursion) */}
            <div className="relative w-full max-w-[500px] mt-auto hidden lg:block">
              <div className="absolute inset-0 bg-[#FF0055]/20 blur-[60px] rounded-full" />
              
              {/* Laptop Screen */}
              <div className="w-full aspect-[16/10] bg-slate-900 rounded-t-xl p-2 shadow-2xl relative overflow-hidden border-[3px] border-slate-800 z-10">
                 {/* Inner Screen rendering a mini hero */}
                 <div className="w-full h-full bg-[#020205] rounded flex flex-col overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF0055]/30 to-transparent mix-blend-screen" />
                    {/* Header mock */}
                    <div className="w-full h-4 border-b border-white/10 flex items-center px-2 gap-2">
                       <div className="flex items-center gap-1"><div className="w-3 h-1 bg-[#FF0055] rounded-full"/><div className="w-2 h-1 bg-white rounded-full"/></div>
                       <div className="w-8 h-0.5 bg-white/20 rounded ml-auto" />
                    </div>
                    {/* Content mock */}
                    <div className="flex-1 p-4 flex flex-col justify-center">
                       <h3 className="text-white font-bold text-[10px] mb-1">Web <br/><span className="text-[#FF0055]">Development</span></h3>
                       <p className="text-slate-400 text-[5px]">That Drives Results</p>
                       <div className="w-4 h-4 rounded-full bg-[#FF0055] mt-4 flex items-center justify-center"><ArrowRight className="w-2 h-2 text-white" /></div>
                    </div>
                    {/* Pink swoosh graphics */}
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute bottom-0 right-0 w-3/4 h-3/4 text-[#FF0055]/40 pointer-events-none">
                      <path d="M100,100 C50,100 0,50 0,100 Z" fill="currentColor" />
                    </svg>
                 </div>
              </div>
              {/* Laptop Base */}
              <div className="w-[110%] -ml-[5%] h-3 bg-slate-700 rounded-b-xl relative z-20 flex justify-center shadow-2xl">
                <div className="w-[20%] h-1 bg-slate-800 rounded-b-md" />
              </div>
            </div>

          </div>

          {/* Right Column - Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {reasons.map((reason) => (
              <div 
                key={reason.id} 
                className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 lg:p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-6 right-6 text-slate-700 font-serif text-lg font-bold">
                  {reason.id}
                </div>
                
                <div className="w-12 h-12 rounded-full bg-[#FF0055]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                
                <h3 className="text-white text-[17px] font-bold leading-tight mb-3">
                  {reason.title}
                </h3>
                
                <p className="text-slate-400 text-[13px] leading-relaxed relative z-10">
                  {reason.desc}
                </p>

                {/* Hover line indicator */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#FF0055] w-0 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
