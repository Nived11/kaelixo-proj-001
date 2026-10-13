"use client";

import React from 'react';
import { ArrowRight, Code2, Smartphone, Cloud, BarChart3, Users, ShoppingCart, Settings } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
    <section className="py-16 sm:py-20 lg:py-20 xl:py-24 bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-[800px] mx-auto mb-10 lg:mb-14"
        >
          <div className="flex justify-center items-center gap-4 mb-3">
            <div className="w-8 h-[2px] bg-[#FF0055]" />
            <span className="text-[#FF0055] text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-[750] tracking-[0.25em] uppercase">
              RELATED SERVICES
            </span>
            <div className="w-8 h-[2px] bg-[#FF0055]" />
          </div>
          
          <h2 className="text-[#05050A] text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.05] tracking-tight mb-3 font-heading">
            Explore <span className="text-[#FF0055]">Related Services</span>
          </h2>
          
          <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] max-w-[600px] mx-auto">
            More ways we help you think, build and grow.
          </p>
        </motion.div>

        {/* Services Grid (3 cards per row on desktop like WebDevProjects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {relatedServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="flex"
            >
              <Link 
                href={service.link}
                className="w-full bg-white rounded-[20px] sm:rounded-[24px] border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(255,0,85,0.1)] flex flex-col overflow-hidden group transition-all duration-500 cursor-pointer"
              >
                {/* Image Section */}
                <div className="w-full aspect-[2/1] relative overflow-hidden bg-slate-100 shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title.replace('\n', ' ')} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>

                {/* Content Section with Rounded Top overlapping the image like WebDevProjects */}
                <div className="relative -mt-4 sm:-mt-5 z-10 bg-white rounded-t-[20px] sm:rounded-t-[24px] p-4 sm:p-5 flex flex-col flex-grow">
                  {/* Gradient Icon Badge at top of the white card */}
                  <div className="w-9 h-9 rounded-[10px] bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center text-white shadow-[0_3px_12px_rgba(255,0,85,0.25)] ring-[3px] ring-white -mt-[28px] sm:-mt-[30px] mb-2.5 relative z-20 group-hover:scale-105 transition-transform duration-300">
                    <service.icon className="w-4 h-4 text-white" strokeWidth={2.2} />
                  </div>

                  <span className="text-[#FF0055] text-[11px] sm:text-[11px] lg:text-[12px] xl:text-[12px] 2xl:text-[12px] [@media(min-width:1920px)]:text-[15px] font-bold tracking-[0.12em] uppercase mb-1.5 block">
                    {service.category}
                  </span>
                  
                  <h3 className="text-[#05050A] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[24px] font-bold leading-tight mb-2.5 group-hover:text-[#FF0055] transition-colors">
                    {service.title.replace('\n', ' ')}
                  </h3>

                  <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] leading-relaxed mb-4 flex-grow">
                    {service.desc}
                  </p>

                  {/* Footer Action - Learn More & Right Icon at bottom */}
                  <div className="flex items-center justify-start gap-2.5 mt-auto pt-3 border-t border-slate-100">
                    <span className="text-[#05050A] font-bold text-[14px] sm:text-[15px] group-hover:text-[#FF0055] transition-colors">
                      Learn More
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#FF0055]/10 text-[#FF0055] flex items-center justify-center group-hover:bg-[#FF0055] group-hover:text-white transition-colors duration-300">
                      <ArrowRight size={16} className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex justify-center"
        >
          <Link 
            href="/services"
            className="group bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white px-7 py-3 rounded-full font-bold text-[16px] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 shadow-[0_4px_16px_rgba(255,0,85,0.25)]"
          >
            View All Services
            <ArrowRight size={16} className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
