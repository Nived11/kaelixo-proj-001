import React from 'react';
import { ArrowRight, ShoppingCart, GraduationCap, HeartPulse, Building2, Factory, Home, Utensils, Monitor } from 'lucide-react';

const topCardsLeft = [
  {
    title: "Retail &\nE-commerce",
    desc: "Conversion-focused online stores that turn browsers into buyers.",
    icon: ShoppingCart,
    theme: "text-[#FF0055] bg-[#FF0055]/10",
    arrowTheme: "bg-[#FF0055]/10 text-[#FF0055]",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Education",
    desc: "Interactive websites for schools, colleges, training institutes and e-learning platforms.",
    icon: GraduationCap,
    theme: "text-emerald-500 bg-emerald-500/10",
    arrowTheme: "bg-emerald-500/10 text-emerald-500",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
  }
];

const topCardsRight = [
  {
    title: "Healthcare",
    desc: "Secure, easy-to-navigate websites for hospitals, clinics and healthcare providers.",
    icon: HeartPulse,
    theme: "text-blue-500 bg-blue-500/10",
    arrowTheme: "bg-blue-500/10 text-blue-500",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Hospitality &\nTravel",
    desc: "Booking-ready websites for hotels, resorts, tour operators and travel brands.",
    icon: Building2,
    theme: "text-orange-500 bg-orange-500/10",
    arrowTheme: "bg-orange-500/10 text-orange-500",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  }
];

const bottomCards = [
  {
    title: "Manufacturing &\nIndustrial",
    desc: "Functional sites that showcase capabilities, products and global reach.",
    icon: Factory,
    theme: "text-purple-600 bg-purple-600/10",
    arrowTheme: "bg-purple-600/10 text-purple-600",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Real Estate",
    desc: "Detailed, feature-rich property websites for agents, builders and real estate firms.",
    icon: Home,
    theme: "text-rose-500 bg-rose-500/10",
    arrowTheme: "bg-rose-500/10 text-rose-500",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
  },
 
  {
    title: "IT & Professional\nServices",
    desc: "Modern sites for IT companies, consultancies and corporate service providers.",
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

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-8">
          <div className="flex justify-center items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#FF0055]" />
            <span className="text-gray-700 font-bold text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] tracking-[0.25em] uppercase">
              INDUSTRY SOLUTIONS
            </span>
            <div className="w-8 h-[2px] bg-[#FF0055]" />
          </div>
          
          <h2 className="text-[#05050A] text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px]  font-extrabold leading-[1.05] tracking-tight mb-3 font-heading">
            Web Development Services <br />
            For <span className="text-[#FF0055]">Various Industries</span>
          </h2>
          
          <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[1.6] max-w-[700px] mx-auto">
            No two businesses run the same way, so no two websites should either. As a Web Development Company, we think each industry through before we build for it — shaping every site around how that business actually grows.
          </p>
        </div>

        {/* Top Section: 3-Column Layout on xl, 4 Cards on top of Globe on tablet/mobile with Globe in center */}
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 items-center w-full mb-4 lg:mb-5 xl:mb-6">
          
          {/* Top Left Cards (Row 1 on tablet, Column 1 on xl) */}
          <div className="order-1 xl:order-1 grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-col gap-4 lg:gap-5 w-full">
            {topCardsLeft.map((card, idx) => (
              <IndustryCard key={idx} {...card} />
            ))}
          </div>

          {/* Top Right Cards (Moved above Globe on tablet: Row 2 on tablet, Column 3 on xl) */}
          <div className="order-2 xl:order-3 grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-col gap-4 lg:gap-5 w-full">
            {topCardsRight.map((card, idx) => (
              <IndustryCard key={idx} {...card} />
            ))}
          </div>

          {/* Center Globe (In between cards on tablet: Row 3 on tablet, Column 2 on xl) */}
          <div className="order-3 xl:order-2 relative flex items-center justify-center w-full min-h-[220px] md:min-h-[260px] xl:min-h-0 py-2 xl:py-0 my-3 md:my-4 xl:my-0">
            <img 
              src="/images/home/why-kaelixo-globe.webp" 
              alt="Industries We Empower" 
              className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px] xl:max-w-[380px] object-contain mix-blend-multiply opacity-90 drop-shadow-2xl" 
              onError={(e) => {
                 e.currentTarget.src = "https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=800&auto=format&fit=crop";
                 e.currentTarget.className = "w-64 h-64 rounded-full object-cover shadow-2xl grayscale opacity-80";
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-white text-[12px] lg:text-[14px] font-bold tracking-[0.2em] uppercase text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                INDUSTRIES<br/>WE EMPOWER
              </span>
              <div className="w-8 h-[2px] bg-[#FF0055] mt-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
            </div>
          </div>

        </div>

        {/* Bottom Row Cards: 3 Columns on xl, 2 Columns on tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 w-full">
          {bottomCards.map((card, idx) => (
            <div 
              key={idx} 
              className={`w-full ${idx === 2 ? 'sm:col-span-2 sm:max-w-[calc(50%-8px)] lg:max-w-[calc(50%-10px)] xl:max-w-none sm:mx-auto xl:col-span-1' : ''}`}
            >
              <IndustryCard {...card} />
            </div>
          ))}
        </div>

        {/* Action Button & Footer Row */}
        <div className="w-full mt-10 lg:mt-12 flex flex-col items-center relative">
          
          {/* Faint connecting line behind button */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -z-10" />

          {/* Button */}
          <button className="group bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white px-8 py-3.5 rounded-full font-bold text-[15px] sm:text-[16px] transition-all duration-300 flex items-center gap-3 hover:-translate-y-1 shadow-[0_4px_16px_rgba(255,0,85,0.2)]">
            Let's Build Your Industry Solution
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

        </div>

      </div>
    </section>
  );
}

// Reusable Card Component
function IndustryCard({ title, desc, icon: Icon, theme, arrowTheme, image }: any) {
  return (
    <div className="bg-white rounded-[16px] lg:rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100/50 hover:border-[#FF0055]/30 overflow-hidden flex items-stretch group hover:shadow-[0_15px_40px_rgba(255,0,85,0.07)] transition-all duration-300 min-h-[155px] sm:min-h-[160px] md:min-h-[165px] lg:min-h-[175px] xl:min-h-[185px] w-full">
      
      {/* Left Image */}
      <div className="w-[35%] sm:w-[36%] lg:w-[35%] xl:w-[36%] shrink-0 relative overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt={title.replace('\n', ' ')} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 p-3.5 sm:p-4 lg:p-4 flex flex-col justify-start relative min-w-0 pb-8">
        <div className="flex items-center gap-2 mb-1.5 lg:mb-2">
          <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-[8px] flex items-center justify-center shrink-0 ${theme}`}>
            <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
          </div>
          <h4 className="text-[#05050A] font-bold text-[15px] sm:text-[15px] lg:text-[16px] xl:text-[17px] leading-tight whitespace-pre-line">
            {title}
          </h4>
        </div>
        <p className="text-gray-700 text-[13.5px] sm:text-[14px] lg:text-[14px] xl:text-[15px] leading-[1.4] pr-7">
          {desc}
        </p>

        {/* Arrow Button */}
        <div className={`absolute bottom-2.5 right-2.5 lg:bottom-3 lg:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${arrowTheme} group-hover:scale-110 transition-transform`}>
          <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
        </div>
      </div>
    </div>
  );
}
