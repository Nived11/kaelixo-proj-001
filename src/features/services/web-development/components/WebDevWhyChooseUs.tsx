import React from 'react';
import { Users, ShieldCheck, Zap, Maximize, MessageSquare, HeadphonesIcon, ArrowRight } from 'lucide-react';

export default function WebDevWhyChooseUs() {
  const reasons = [
    {
      id: "01",
      icon: <Users className="w-5 h-5 text-[#FF0055]" />,
      title: "Experienced Team",
      desc: "Designers, developers and\nstrategists who've shaped\nsolutions for startups and\nenterprises alike."
    },
    {
      id: "02",
      icon: <ShieldCheck className="w-5 h-5 text-[#FF0055]" />,
      title: "Secure & Reliable",
      desc: "Built on dependable practices\nthat keep your site safe,\nstable and always online."
    },
    {
      id: "03",
      icon: <Zap className="w-5 h-5 text-[#FF0055]" />,
      title: "High Performance",
      desc: "Tuned for speed, SEO and\na smooth experience\non every device."
    },
    {
      id: "04",
      icon: <Maximize className="w-5 h-5 text-[#FF0055]" />,
      title: "Scalable Solutions",
      desc: "Built to grow alongside\nyour business — from a five-person\nteam to a multi-city enterprise."
    },
    {
      id: "05",
      icon: <MessageSquare className="w-5 h-5 text-[#FF0055]" />,
      title: "Transparent Process",
      desc: "Clear communication and full\nvisibility at every stage,\nnothing handed off."
    },
    {
      id: "06",
      icon: <HeadphonesIcon className="w-5 h-5 text-[#FF0055]" />,
      title: "Ongoing Support",
      desc: "We stay on after launch to grow\nwhat we've built — updates,\nmaintenance and support, not a one-time delivery."
    }
  ];

  return (
    <section className="py-6 lg:py-8 relative overflow-hidden bg-[#020205]">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#FF0055]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start pr-4 xl:pr-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#FF0055]" />
              <span className="text-slate-400 font-bold text-[12px] sm:text-[13px] lg:text-[18px] xl:text-[18px] tracking-[0.25em] uppercase">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] font-extrabold leading-[1.05] tracking-tight mb-4 font-heading">
              More Than Just <br />
              <span className="text-[#FF0055]">Web Development</span>
            </h2>

            <p className="text-slate-300 text-[16px] leading-[1.6] mb-6 max-w-[420px]">
              We don't just build websites. We think your business through first, then build exactly what it needs, and grow it with you — fast, secure, and built to last.
            </p>

            {/* Laptop & Rock Images Container */}
            <div className="relative w-full h-[340px] mt-2 hidden lg:block pointer-events-none">
               
               {/* Background Arc */}
               <img 
                 src="/images/services/web-dev/hero-bg.webp" 
                 alt="Glowing Background Arc"
                 className="absolute left-[-5%] top-[25%] w-[115%] max-w-none object-contain z-0 opacity-90"
               />
               
               {/* Foreground Laptop on Rock */}
               <img 
                 src="/images/services/web-dev/hero-laptop.webp" 
                 alt="Why Choose Us Laptop"
                 className="absolute left-[-20%] top-[8%] w-[135%] max-w-none object-contain z-10"
               />
            </div>
          </div>

          {/* Right Column - Grid & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-3 lg:pl-6 xl:pl-12 pt-0">
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 lg:gap-3">
              {reasons.map((reason) => (
                <div 
                  key={reason.id} 
                  className="rounded-[20px] relative group overflow-hidden bg-[#05050A] shadow-[0_0_15px_rgba(255,0,85,0.02)]"
                >
                  {/* Animated Border Mask */}
                  <div 
                     className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none z-10"
                     style={{
                        padding: '1px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                     }}
                  >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#FF0055_40%,#ff3377_60%,transparent_100%)]" />
                  </div>
                  
                  {/* Inner Content */}
                  <div className="relative z-20 px-4 py-4 lg:px-5 lg:py-5 h-full border border-white/5 group-hover:border-transparent rounded-[20px] transition-colors duration-300">
                    <div className="absolute top-4 right-4 text-slate-500/70 text-[11px] font-medium">
                      {reason.id}
                    </div>
                    
                    <div className="w-10 h-10 mb-3 flex items-center justify-center relative rounded-full bg-[#0a0407] shadow-[inset_0_1px_3px_rgba(255,0,85,0.4)] border border-[#FF0055]/20 group-hover:border-[#FF0055]/50 transition-colors">
                      <div className="absolute inset-0 bg-[#FF0055]/30 blur-[8px] rounded-full" />
                      <div className="text-[#FF0055] relative z-10 group-hover:scale-110 transition-transform scale-[0.75]">
                        {reason.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-white text-[13.5px] lg:text-[14px] font-bold leading-tight mb-0.5">
                      {reason.title}
                    </h3>
                    
                    <p className="text-slate-400 text-[11px] lg:text-[11.5px] leading-[1.4] relative z-10 whitespace-pre-line">
                      {reason.desc}
                    </p>
                    
                    <div className="w-6 h-[2px] bg-[#FF0055] rounded-full mt-2.5 group-hover:w-10 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="mt-3 rounded-[16px] relative group overflow-hidden bg-[#05050A] shadow-[0_0_15px_rgba(255,0,85,0.02)]">
              {/* Animated Border Mask */}
              <div 
                 className="absolute inset-0 rounded-[16px] overflow-hidden pointer-events-none z-10"
                 style={{
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                 }}
              >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#FF0055_40%,#ff3377_60%,transparent_100%)]" />
              </div>

              {/* Inner Content */}
              <div className="relative z-20 py-3 lg:py-4 px-3 h-full border border-white/5 group-hover:border-transparent rounded-[16px] transition-colors duration-300 grid grid-cols-4 divide-x divide-white/5 text-center">
                <div className="absolute bottom-[-50%] right-[-10%] w-[150px] h-[150px] bg-[#FF0055]/10 blur-[40px] pointer-events-none" />
                
                <div className="flex flex-col justify-center relative z-10">
                  <span className="text-[#FF0055] font-black text-[18px] lg:text-[22px] leading-none mb-1.5">100+</span>
                  <span className="text-slate-400 text-[8px] sm:text-[9px] font-medium tracking-wide">Websites Delivered</span>
                </div>
                <div className="flex flex-col justify-center relative z-10">
                  <span className="text-[#FF0055] font-black text-[18px] lg:text-[22px] leading-none mb-1.5">98%</span>
                  <span className="text-slate-400 text-[8px] sm:text-[9px] font-medium tracking-wide">Client Satisfaction</span>
                </div>
                <div className="flex flex-col justify-center relative z-10">
                  <span className="text-[#FF0055] font-black text-[18px] lg:text-[22px] leading-none mb-1.5">5+</span>
                  <span className="text-slate-400 text-[8px] sm:text-[9px] font-medium tracking-wide">Years Experience</span>
                </div>
                <div className="flex flex-col justify-center relative z-10">
                  <span className="text-[#FF0055] font-black text-[18px] lg:text-[22px] leading-none mb-1.5">24/7</span>
                  <span className="text-slate-400 text-[8px] sm:text-[9px] font-medium tracking-wide">Support</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
