import React from 'react';
import { ArrowRight, Code2, Smartphone, Cloud, BarChart3, Users, ShoppingCart, Settings } from 'lucide-react';
import Link from 'next/link';

const relatedServices = [
  {
    category: "SOFTWARE DEVELOPMENT",
    title: "Custom Software\nDevelopment",
    desc: "Software built around how your business actually operates — not adapted to fit a generic tool.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    link: "/services/custom-software"
  },
  {
    category: "CRM DEVELOPMENT",
    title: "CRM Systems",
    desc: "Purpose-built platforms like WayWeGo and EduLoom, designed around your industry's real workflow.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    link: "/services/crm-development"
  },
  {
    category: "MOBILE SOLUTIONS",
    title: "Mobile App\nDevelopment",
    desc: "High-performing Android and iOS apps designed around your users, built to grow with them.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    link: "/services/mobile-apps"
  },
  {
    category: "E-COMMERCE DEVELOPMENT",
    title: "E-commerce Website\nDevelopment",
    desc: "Online stores engineered for fast checkout, easy discovery and real conversions.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    link: "/services/e-commerce"
  },
  {
    category: "CLOUD & IT INFRASTRUCTURE",
    title: "Cloud Solutions\n& IT Infrastructure",
    desc: "Reliable, secure infrastructure that keeps everything we build running without interruption.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    link: "/services/cloud-solutions"
  },
  {
    category: "WEBSITE MAINTENANCE",
    title: "Website Maintenance\n& Support",
    desc: "Ongoing code updates, monitoring and fixes that keep a live site fast, secure — and growing.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    link: "/services/website-maintenance"
  },
  {
    category: "DATA & ANALYTICS",
    title: "Business Analytics\n& Reporting",
    desc: "Real usage data turned into insight, so every decision after launch is backed by evidence.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "/services/data-analytics"
  }
];

export default function WebDevRelatedServices() {
  return (
    <section className="py-10 lg:py-16 bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-10 lg:mb-14">
          <div className="flex justify-center items-center gap-4 mb-3">
            <div className="w-10 h-[1px] bg-[#FF0055]" />
            <span className="text-[#FF0055] font-bold text-[12px] sm:text-[13px] lg:text-[18px] xl:text-[18px] tracking-[0.25em] uppercase">
              RELATED SERVICES
            </span>
            <div className="w-10 h-[1px] bg-slate-300 hidden sm:block" />
          </div>
          
          <h2 className="text-[#05050A] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] font-extrabold leading-[1.05] tracking-tight mb-3 font-heading">
            Explore <span className="text-[#FF0055]">Related Services</span>
          </h2>
          
          <p className="text-slate-500 text-[16px] leading-[1.6] max-w-[600px] mx-auto">
            More ways we help you think, build and grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {relatedServices.map((service, idx) => (
            <Link 
              key={idx} 
              href={service.link}
              className="bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,0,85,0.08)] transition-all duration-500"
            >
              {/* Image Header */}
              <div className="w-full h-[140px] lg:h-[150px] relative overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title.replace('\n', ' ')} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              {/* Content Body */}
              <div className="p-4 lg:p-5 pt-0 flex flex-col flex-grow relative bg-white">
                
                {/* Floating Icon Box */}
                <div className="w-9 h-9 bg-white rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#FF0055] -mt-[18px] mb-3 relative z-20 border border-slate-50 group-hover:text-white group-hover:bg-[#FF0055] group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-3.5 h-3.5" />
                </div>

                <span className="text-[#FF0055] text-[9px] font-bold tracking-[0.15em] uppercase mb-1 block">
                  {service.category}
                </span>
                
                <h3 className="text-[#05050A] text-[15px] lg:text-[16px] font-bold leading-[1.2] mb-2 whitespace-pre-line group-hover:text-[#FF0055] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-[11px] lg:text-[12px] leading-[1.5] mb-4 flex-grow">
                  {service.desc}
                </p>
                
                {/* Footer Action */}
                <div className="flex items-center justify-start gap-2 mt-auto">
                  <span className="text-[#05050A] font-bold text-[11px] lg:text-[12px]">
                    Learn More
                  </span>
                  <div className="w-5 h-5 rounded-full bg-[#FF0055]/10 text-[#FF0055] flex items-center justify-center group-hover:bg-[#FF0055] group-hover:text-white transition-colors">
                    <ArrowRight className="w-2.5 h-2.5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-10 flex justify-center">
          <Link 
            href="/services"
            className="group bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white px-7 py-3 rounded-full font-bold text-[13px] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
