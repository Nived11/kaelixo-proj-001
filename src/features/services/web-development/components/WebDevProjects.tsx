import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const projects = [
  {
    category: "TRAVEL & TOURISM",
    title: "Travel Hope",
    desc: "A complete travel management website with destination packages, enquiry system and responsive design.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    stats: [
      { value: "3x", label: "Increase in Enquiries" },
      { value: "60%", label: "More Organic Traffic" },
      { value: "100+", label: "Tour Packages" }
    ]
  },
  {
    category: "FOOD & WELLNESS",
    title: "Ayurgreen Spices",
    desc: "A modern brand website showcasing premium spices and herbals with a clean design and WhatsApp ordering flow.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { value: "2.5x", label: "Increase in Sales Leads" },
      { value: "70%", label: "Engagement Growth" },
      { value: "100%", label: "Mobile Optimized" }
    ]
  },
  {
    category: "EDUCATION & TRAINING",
    title: "D Soft Technologies",
    desc: "An institute website with course details, admission enquiry, event management and a fully responsive experience.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { value: "4x", label: "More Admissions" },
      { value: "80%", label: "Increase in Enquiries" },
      { value: "100%", label: "Responsive Design" }
    ]
  }
];

export default function WebDevProjects() {
  return (
    <section className="py-6 lg:py-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-[#FF0055]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Reduced max-width from 1400px to 1250px to make the cards physically smaller on large screens */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-6">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-[#FF0055]" />
              <span className="text-slate-500 font-bold text-[10px] tracking-[0.2em] uppercase">
                CASE STUDIES
              </span>
            </div>
            
            <h2 className="text-[#05050A] text-[30px] md:text-[36px] lg:text-[42px] font-extrabold leading-[1.05] tracking-tight mb-2">
              Real Projects.<br />
              <span className="text-[#FF0055]">Real Results.</span>
            </h2>
            
            <p className="text-slate-600 text-[13px] lg:text-[14px] leading-relaxed max-w-[500px]">
              Explore some of the websites we've built and see how strategic design and technology helped businesses grow.
            </p>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-3 shrink-0 mt-2 lg:mt-0">
            <button className="bg-[#FF0055] hover:bg-[#e6004c] text-white px-6 py-2.5 rounded-full font-bold text-[13px] transition-all flex items-center gap-2 shadow-[0_8px_20px_rgba(255,0,85,0.25)] hover:shadow-[0_10px_25px_rgba(255,0,85,0.35)] hover:-translate-y-1">
              View All Projects
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            
            <div className="flex items-center gap-2 mt-1">
              <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#05050A] hover:bg-slate-50 hover:border-slate-300 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#FF0055] flex items-center justify-center text-white shadow-[0_5px_15px_rgba(255,0,85,0.3)] hover:bg-[#e6004c] transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-slate-500 font-semibold text-[11px] tracking-widest ml-1.5">
                01 / 04
              </span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[16px] border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(255,0,85,0.1)] overflow-hidden group hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
            >
              {/* Image Section - changed to 2/1 aspect ratio to drastically reduce card height */}
              <div className="w-full aspect-[2/1] relative overflow-hidden bg-slate-100 shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-slate-400 text-[9px] font-bold tracking-[0.15em] uppercase mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-[#05050A] text-[18px] lg:text-[20px] font-bold leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <button className="w-7 h-7 rounded-full border border-[#FF0055]/30 text-[#FF0055] flex items-center justify-center shrink-0 group-hover:bg-[#FF0055] group-hover:text-white transition-colors duration-300">
                    <ArrowRight className="w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </button>
                </div>

                <p className="text-slate-500 text-[12px] leading-[1.4] mb-3 flex-grow">
                  {project.desc}
                </p>

                <div className="w-full h-[1px] bg-slate-100 mb-3 shrink-0" />

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2 shrink-0">
                  {project.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="flex flex-col">
                      <span className="text-[#FF0055] text-[16px] lg:text-[18px] font-black leading-none mb-1">
                        {stat.value}
                      </span>
                      <span className="text-slate-500 text-[8px] font-medium leading-tight pr-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
