import React from 'react';
import { ArrowRight, ShoppingCart, GraduationCap, HeartPulse, Building2, Factory, Home, Utensils, Monitor } from 'lucide-react';

const topCardsLeft = [
  {
    title: "Retail &\nE-commerce",
    desc: "High-converting online stores and retail websites to boost your sales.",
    icon: ShoppingCart,
    theme: "text-[#FF0055] bg-[#FF0055]/10",
    arrowTheme: "bg-[#FF0055]/10 text-[#FF0055]",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Education",
    desc: "Engaging websites for schools, colleges, training institutes and e-learning platforms.",
    icon: GraduationCap,
    theme: "text-emerald-500 bg-emerald-500/10",
    arrowTheme: "bg-emerald-500/10 text-emerald-500",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
  }
];

const topCardsRight = [
  {
    title: "Healthcare",
    desc: "Secure, patient-friendly websites for hospitals, clinics and healthcare providers.",
    icon: HeartPulse,
    theme: "text-blue-500 bg-blue-500/10",
    arrowTheme: "bg-blue-500/10 text-blue-500",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Hospitality &\nTravel",
    desc: "Beautiful, booking-ready websites for hotels, resorts, tour operators and travel brands.",
    icon: Building2,
    theme: "text-orange-500 bg-orange-500/10",
    arrowTheme: "bg-orange-500/10 text-orange-500",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  }
];

const bottomCards = [
  {
    title: "Manufacturing &\nIndustrial",
    desc: "Powerful websites to showcase your products, capabilities and global reach.",
    icon: Factory,
    theme: "text-purple-600 bg-purple-600/10",
    arrowTheme: "bg-purple-600/10 text-purple-600",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Real Estate",
    desc: "Feature-rich property websites for builders, agents and real estate firms.",
    icon: Home,
    theme: "text-rose-500 bg-rose-500/10",
    arrowTheme: "bg-rose-500/10 text-rose-500",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
  },
  {
    title: "Food &\nRestaurant",
    desc: "Attractive websites with online menus, table booking and delivery integration.",
    icon: Utensils,
    theme: "text-amber-500 bg-amber-500/10",
    arrowTheme: "bg-amber-500/10 text-amber-500",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "IT & Professional\nServices",
    desc: "Modern websites for IT companies, consultancies and corporate service providers.",
    icon: Monitor,
    theme: "text-sky-500 bg-sky-500/10",
    arrowTheme: "bg-sky-500/10 text-sky-500",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  }
];

export default function WebDevIndustries() {
  return (
    <section className="py-10 lg:py-12 bg-[#f4f6f9] relative overflow-hidden">
      
      {/* Decorative top corner shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-slate-200/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/50 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-8">
          <div className="flex justify-center items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#FF0055]" />
            <span className="text-slate-500 font-bold text-[10px] tracking-[0.2em] uppercase">
              INDUSTRY SOLUTIONS
            </span>
            <div className="w-8 h-[2px] bg-[#FF0055]" />
          </div>
          
          <h2 className="text-[#05050A] text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.1] tracking-tight mb-3">
            Web Development Services <br />
            For <span className="text-[#FF0055]">Various Industries</span>
          </h2>
          
          <p className="text-slate-600 text-[13px] lg:text-[14px] leading-relaxed max-w-[600px] mx-auto">
            Tailored web solutions for every business — because every industry has a different story. 
            We build websites that fit your goals, customers and growth.
          </p>
        </div>

        {/* Main 4-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-5 w-full">
          
          {/* Top Left Cards (Spans 1 Col) */}
          <div className="col-span-1 flex flex-col gap-4 lg:gap-5">
            {topCardsLeft.map((card, idx) => (
              <IndustryCard key={idx} {...card} />
            ))}
          </div>

          {/* Center Globe (Spans 2 Cols) */}
          <div className="col-span-1 lg:col-span-2 relative flex items-center justify-center min-h-[250px] lg:min-h-[auto]">
            <img 
              src="/globe.png" 
              alt="Industries We Empower" 
              className="w-full max-w-[280px] lg:max-w-[400px] object-contain mix-blend-multiply opacity-90 drop-shadow-2xl" 
              onError={(e) => {
                 e.currentTarget.src = "https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=800&auto=format&fit=crop";
                 e.currentTarget.className = "w-64 h-64 rounded-full object-cover shadow-2xl grayscale opacity-80";
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-white text-[11px] lg:text-[13px] font-bold tracking-[0.2em] uppercase text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                INDUSTRIES<br/>WE EMPOWER
              </span>
              <div className="w-8 h-[2px] bg-[#FF0055] mt-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
            </div>
          </div>

          {/* Top Right Cards (Spans 1 Col) */}
          <div className="col-span-1 flex flex-col gap-4 lg:gap-5">
            {topCardsRight.map((card, idx) => (
              <IndustryCard key={idx} {...card} />
            ))}
          </div>

          {/* Bottom Row Cards (1 Col each) */}
          {bottomCards.map((card, idx) => (
            <div key={idx} className="col-span-1">
              <IndustryCard {...card} />
            </div>
          ))}

        </div>

        {/* Action Button & Footer Row */}
        <div className="w-full mt-10 lg:mt-12 flex flex-col items-center relative">
          
          {/* Faint connecting line behind button */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -z-10" />

          {/* Side Texts */}
          <div className="hidden lg:flex w-full absolute top-1/2 -translate-y-1/2 justify-between items-center text-[8px] lg:text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase pointer-events-none">
            <span className="bg-[#f4f6f9] pr-4">STRATEGY — DESIGN — DEVELOPMENT — GROWTH</span>
            <span className="bg-[#f4f6f9] pl-4">WEBSITES THAT WORK FOR EVERY INDUSTRY</span>
          </div>

          {/* Button */}
          <button className="bg-[#FF0055] hover:bg-[#e6004c] text-white px-6 py-3 rounded-full font-bold text-[12px] lg:text-[13px] transition-all flex items-center gap-2.5 shadow-[0_6px_15px_rgba(255,0,85,0.25)] hover:shadow-[0_8px_20px_rgba(255,0,85,0.35)] hover:-translate-y-1">
            Let's Build Your Industry Solution
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </section>
  );
}

// Reusable Card Component
function IndustryCard({ title, desc, icon: Icon, theme, arrowTheme, image }: any) {
  return (
    <div className="bg-white rounded-[16px] lg:rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100/50 overflow-hidden flex items-stretch group hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 h-[120px] lg:h-[135px] w-full">
      
      {/* Left Image (Proportional width) */}
      <div className="w-[35%] shrink-0 relative overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt={title.replace('\n', ' ')} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 p-3 lg:p-4 flex flex-col justify-center relative">
        <div className="flex items-center gap-2 mb-1.5 lg:mb-2">
          <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-[8px] flex items-center justify-center shrink-0 ${theme}`}>
            <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
          </div>
          <h4 className="text-[#05050A] font-bold text-[12px] lg:text-[13px] leading-tight whitespace-pre-line">
            {title}
          </h4>
        </div>
        <p className="text-slate-500 text-[9px] lg:text-[10px] leading-[1.4] line-clamp-3 pr-4">
          {desc}
        </p>

        {/* Arrow Button */}
        <div className={`absolute bottom-2.5 right-2.5 lg:bottom-3 lg:right-3 w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center ${arrowTheme} group-hover:scale-110 transition-transform`}>
          <ArrowRight className="w-2.5 h-2.5 lg:w-3 lg:h-3 -rotate-45 group-hover:rotate-0 transition-transform" />
        </div>
      </div>
    </div>
  );
}
