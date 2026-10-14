"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const allProjects = [
  {
    category: "FASHION & JEWELLERY",
    title: "Isabelline",
    desc: "A fashion and jewellery brand's custom website, built around its visual identity from the ground up.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { value: "3.5x", label: "Brand Engagement" },
      { value: "100%", label: "Custom Code" },
      { value: "2x", label: "Sales Growth" }
    ]
  },
  {
    category: "JEWELLERY & LUXURY",
    title: "Thanhaara",
    desc: "A jewellery client's custom site, designed to match a brand story a template couldn't carry.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { value: "4x", label: "Storytelling Reach" },
      { value: "98%", label: "Satisfaction Rate" },
      { value: "0", label: "Templates Used" }
    ]
  },
  {
    category: "HEALTHCARE & CLINICS",
    title: "Women's Hospital Website",
    desc: "A custom-built site praised by the client for its responsiveness and smoothness.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    stats: [
      { value: "4.5x", label: "Patient Bookings" },
      { value: "100%", label: "Responsive Design" },
      { value: "24/7", label: "Portal Access" }
    ]
  }
];

export default function CustomWebDevProjects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTablet, setIsTablet] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 1024);
    };
    checkTablet();
    window.addEventListener('resize', checkTablet);
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  const itemsPerPage = isTablet ? 4 : 3;
  const totalPages = Math.ceil(allProjects.length / itemsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (sectionRef.current) {
      const yOffset = -90;
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      handlePageChange(currentPage + 1);
    }
  };

  const currentProjects = allProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-20 xl:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-[#FF0055]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[700px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-gray-700 font-[750] text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] tracking-[0.2em] uppercase">
                CASE STUDIES
              </span>
              <div className="w-8 h-[2px] bg-[#FF0055]" />
            </div>
            
            <h2 className="text-[#05050A] text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.16] tracking-[-1.3px] mb-2">
              Real Projects.<br />
              <span className="text-[#FF0055]">Real Results.</span>
            </h2>
            
            <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] max-w-[500px]">
              Explore some of the websites we've built and see how strategic design and technology helped businesses grow.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-start lg:items-end gap-3 shrink-0 mt-2 lg:mt-0"
          >
            <a href="#contact" className="group bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white px-6 py-2.5 rounded-full font-bold text-[16px] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
              View All Projects
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            {/* Desktop / Laptop Pagination Controls (Hidden on Mobile/Tablet) */}
            <div className="hidden lg:flex items-center gap-2 mt-1">
              <button 
                onClick={handlePrev}
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 hover:border-[#FF3377] hover:bg-gradient-to-r hover:from-[#80002A] hover:to-[#FF0055] flex items-center justify-center text-[#05050A] hover:text-white transition-all duration-300 cursor-pointer"
                aria-label="Previous projects"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>
              <button 
                onClick={handleNext}
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 hover:border-[#FF3377] hover:bg-gradient-to-r hover:from-[#80002A] hover:to-[#FF0055] flex items-center justify-center text-[#05050A] hover:text-white transition-all duration-300 cursor-pointer"
                aria-label="Next projects"
              >
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <span className="text-gray-700 font-semibold text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] tracking-widest ml-1.5 select-none">
                {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {currentProjects.map((project, idx) => (
            <motion.div 
              key={`${project.title}-${idx}`} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-[20px] sm:rounded-[24px] border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(255,0,85,0.1)] overflow-hidden group transition-all duration-500 flex flex-col"
            >
              {/* Image Section */}
              <div className="w-full aspect-[2/1] relative overflow-hidden bg-slate-100 shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Content Section with Rounded Top overlapping the image */}
              <div className="relative -mt-4 sm:-mt-5 z-10 bg-white rounded-t-[20px] sm:rounded-t-[24px] p-4 sm:p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="inline-block bg-slate-100 text-gray-700 px-3 py-1 rounded-full text-[11px] sm:text-[11px] lg:text-[12px] xl:text-[12px] 2xl:text-[12px] [@media(min-width:1920px)]:text-[15px] font-bold tracking-[0.05em] uppercase mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-[#05050A] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[24px] font-bold leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#FF0055]/30 text-[#FF0055] flex items-center justify-center shrink-0 group-hover:bg-[#FF0055] group-hover:text-white transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] leading-relaxed mb-3 flex-grow">
                  {project.desc}
                </p>

                <div className="w-full h-[1px] bg-slate-100 mb-3 shrink-0" />

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2 shrink-0">
                  {project.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="flex flex-col">
                      <span className="text-[#FF0055] text-[20px] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[28px] 2xl:text-[28px] font-black leading-none mb-1">
                        {stat.value}
                      </span>
                      <span className="text-gray-700 text-[12px] sm:text-[14px] lg:text-[12px] xl:text-[14px] font-medium leading-tight pr-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile & Tablet Pagination Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex lg:hidden justify-center items-center gap-3 mt-7 sm:mt-8"
        >
          <button 
            onClick={handlePrev}
            className="group w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#FF3377] hover:bg-gradient-to-r hover:from-[#80002A] hover:to-[#FF0055] flex items-center justify-center text-[#05050A] hover:text-white transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            aria-label="Previous projects"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>
          <button 
            onClick={handleNext}
            className="group w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#FF3377] hover:bg-gradient-to-r hover:from-[#80002A] hover:to-[#FF0055] flex items-center justify-center text-[#05050A] hover:text-white transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            aria-label="Next projects"
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
          <span className="text-gray-700 font-semibold text-[15px] sm:text-[16px] tracking-widest ml-2 select-none">
            {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
          </span>
        </motion.div>

      </div>
    </section>
  );
}
