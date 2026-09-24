import React from 'react';
import { ArrowRight, Code2, Box, ShoppingCart, FileText, Settings, LineChart, ShieldCheck } from 'lucide-react';

export default function WebDevOverview() {
  const services = [
    {
      id: 1,
      icon: <Code2 className="w-5 h-5 text-[#FF0055]" />,
      title: "Custom Website Development",
      desc: "Tailored, high-performance websites built around your brand, goals and user needs.",
      mock: "wireframe" // We'll render a specific mock block based on this
    },
    {
      id: 2,
      icon: <Box className="w-5 h-5 text-[#FF0055]" />,
      title: "Web Application Development",
      desc: "Scalable and secure web applications that streamline operations and create new opportunities.",
      mock: "dashboard"
    },
    {
      id: 3,
      icon: <ShoppingCart className="w-5 h-5 text-[#FF0055]" />,
      title: "E-commerce Solutions",
      desc: "Powerful online stores designed to drive sales, deliver seamless shopping experiences and scale with your business.",
      mock: "ecommerce"
    },
    {
      id: 4,
      icon: <FileText className="w-5 h-5 text-[#FF0055]" />,
      title: "CMS Development",
      desc: "Easy-to-manage content management systems that give you full control over your website content.",
      mock: "cms"
    },
    {
      id: 5,
      icon: <Settings className="w-5 h-5 text-[#FF0055]" />,
      title: "Website Maintenance & Support",
      desc: "Reliable ongoing support, updates and security to keep your website running smoothly and performing at its best.",
      mock: "maintenance"
    },
    {
      id: 6,
      icon: <LineChart className="w-5 h-5 text-[#FF0055]" />,
      title: "Performance Optimization",
      desc: "Speed, security and SEO optimization to ensure your website delivers the best possible user experience and higher conversions.",
      mock: "performance"
    }
  ];

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-[#FAFBFF] border-t border-slate-200/50 rounded-t-[3rem] -mt-8 z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Column */}
          <div className="xl:col-span-4 flex flex-col items-start pr-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-slate-500 font-bold text-[11px] tracking-widest uppercase">
                OVERVIEW
              </span>
              <div className="w-10 h-[2px] bg-[#FF0055]" />
            </div>

            <h2 className="text-[#020205] text-[40px] lg:text-[46px] font-extrabold leading-[1.05] tracking-tight mb-6">
              What We Deliver Through <br />
              <span className="text-[#FF0055]">Web Development</span>
            </h2>

            <p className="text-slate-500 text-[15px] leading-relaxed mb-10">
              At Kaelixo, we build fast, scalable and conversion-focused websites and web applications tailored to your business goals. From modern marketing sites to complex web platforms, we create digital experiences that help you grow, engage your audience and achieve measurable results.
            </p>

            <button className="px-8 py-3.5 rounded-full bg-[#FF0055] text-white font-bold text-[15px] flex items-center gap-2 shadow-[0_10px_20px_rgba(255,0,85,0.2)] hover:shadow-[0_10px_30px_rgba(255,0,85,0.4)] transition-all hover:-translate-y-1 active:translate-y-0 group">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Stats */}
            <div className="flex items-start gap-12 mt-16 pt-8 w-full">
              <div>
                <h4 className="text-[#FF0055] text-[36px] font-extrabold mb-1 tracking-tight">100+</h4>
                <p className="text-slate-500 text-[13px] font-medium leading-tight">Web Projects<br/>Delivered</p>
              </div>
              <div>
                <h4 className="text-[#FF0055] text-[36px] font-extrabold mb-1 tracking-tight">98%</h4>
                <p className="text-slate-500 text-[13px] font-medium leading-tight">Client<br/>Satisfaction</p>
              </div>
              <div>
                <h4 className="text-[#FF0055] text-[36px] font-extrabold mb-1 tracking-tight">3x</h4>
                <p className="text-slate-500 text-[13px] font-medium leading-tight">Average Increase<br/>In Conversions</p>
              </div>
            </div>

            <p className="text-[10px] font-bold text-slate-300 tracking-[0.2em] uppercase mt-12 w-full text-center xl:text-left flex items-center gap-4">
              We build websites that work harder for you
              <span className="flex-1 h-[1px] bg-slate-200 hidden xl:block" />
            </p>
          </div>

          {/* Right Column - Cards */}
          <div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-[32px] p-7 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-[#020205] text-[18px] font-extrabold leading-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed mb-5 flex-1">
                  {service.desc}
                </p>
                <a href="#" className="text-[#FF0055] font-bold text-[13px] flex items-center gap-1.5 hover:gap-2 transition-all mb-6 mt-auto">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {/* Bottom Mock Graphic based on type */}
                <div className="w-full flex items-end justify-center">
                  
                  {service.mock === 'wireframe' && (
                    <div className="w-[95%] bg-white rounded-t-xl border border-slate-100 border-b-0 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-[100px]">
                      <div className="h-5 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#FF0055]/40" />
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                      </div>
                      <div className="flex-1 p-4 flex flex-col items-center justify-center gap-3 bg-white">
                        <div className="w-full max-w-[120px] h-12 bg-pink-50 rounded flex items-center justify-center text-pink-200">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                        </div>
                        <div className="w-16 h-3 bg-[#FF0055] rounded-full self-start ml-2" />
                      </div>
                    </div>
                  )}

                  {service.mock === 'dashboard' && (
                    <div className="w-full h-[100px] relative mt-4">
                      {/* Background Light Window */}
                      <div className="absolute bottom-0 right-2 w-[85%] h-[90%] bg-white rounded-t-xl border border-slate-100 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)] border-b-0 flex flex-col overflow-hidden">
                         <div className="h-5 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-1.5">
                           <div className="w-2 h-2 rounded-full bg-pink-200" />
                         </div>
                         <div className="flex-1 p-3 flex flex-col gap-2">
                            <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
                            <div className="w-full flex-1 bg-pink-50/50 rounded flex items-end px-1">
                              <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-[80%] text-pink-300"><path d="M0,30 Q20,10 40,25 T80,10 T100,5" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                            </div>
                         </div>
                      </div>
                      {/* Foreground Dark Sidebar */}
                      <div className="absolute bottom-0 left-0 w-[35%] h-full bg-[#0F1523] rounded-tr-xl rounded-tl-md shadow-lg flex flex-col p-3 gap-3">
                         <div className="w-4 h-4 rounded-full bg-[#FF0055]" />
                         <div className="w-full h-1.5 bg-slate-800 rounded-full" />
                         <div className="w-2/3 h-1.5 bg-slate-800 rounded-full" />
                         <div className="w-5/6 h-1.5 bg-slate-800 rounded-full" />
                      </div>
                    </div>
                  )}

                  {service.mock === 'ecommerce' && (
                    <div className="w-[95%] bg-white rounded-t-xl border border-slate-100 border-b-0 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-[100px]">
                      <div className="h-5 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#FF0055]/40" />
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                      </div>
                      <div className="flex-1 p-3 flex items-center gap-3 bg-white">
                        <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center shrink-0">
                          <ShoppingCart className="w-6 h-6 text-pink-400" />
                        </div>
                        <div className="flex flex-col gap-2 justify-center flex-1 w-full">
                          <div className="w-full h-2 bg-slate-100 rounded-full" />
                          <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                          <div className="w-20 h-5 bg-[#FF0055] rounded-md flex items-center justify-center mt-1">
                            <span className="text-[7px] text-white font-bold uppercase tracking-wider">Add to Cart</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {service.mock === 'cms' && (
                    <div className="w-full h-[80px] bg-slate-50/80 rounded-2xl border border-slate-100 flex items-center justify-center gap-3 mb-2 px-2">
                       <div className="w-10 h-10 rounded-full bg-blue-50 shadow-sm border border-slate-100 flex items-center justify-center text-blue-700 font-serif font-bold text-lg">W</div>
                       <div className="w-10 h-10 rounded-full bg-green-50 shadow-sm border border-slate-100 flex items-center justify-center text-green-700 font-bold text-lg">S</div>
                       <div className="w-10 h-10 rounded-full bg-orange-50 shadow-sm border border-slate-100 flex items-center justify-center text-orange-700 font-bold text-lg">J</div>
                       <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 font-bold tracking-widest text-sm">...</div>
                    </div>
                  )}

                  {service.mock === 'maintenance' && (
                    <div className="w-full h-[90px] mt-2 flex items-center justify-center p-3 bg-slate-50/80 rounded-2xl border border-slate-100 mb-2">
                      <div className="w-full bg-white rounded-xl p-3.5 shadow-sm border border-slate-100 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FF0055] flex items-center justify-center text-white shrink-0 shadow-md shadow-pink-200">
                          <ShieldCheck size={20} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                          <div className="flex items-center gap-2">
                            <span className="text-[12px] font-extrabold text-[#020205]">Website Healthy</span>
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          </div>
                          <span className="text-[9px] text-slate-400 font-semibold mb-1">All systems operational</span>
                          <div className="w-full h-1 bg-slate-100 rounded-full">
                            <div className="w-2/3 h-full bg-slate-300 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {service.mock === 'performance' && (
                    <div className="w-full h-[90px] mt-2 flex items-center justify-center p-3 bg-slate-50/80 rounded-2xl border border-slate-100 mb-2">
                      <div className="w-full bg-white rounded-xl p-3 shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full border-4 border-slate-100 flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 36 36" className="absolute inset-0 w-full h-full text-[#FF0055] -rotate-90">
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="98, 100" />
                          </svg>
                          <span className="text-[14px] font-black text-slate-800">98</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[11px] font-extrabold text-[#020205]">Performance Score</span>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <ArrowRight className="w-2.5 h-2.5 text-[#020205] -rotate-45" />
                            <span className="text-[#020205] text-[10px] font-bold">+62%</span>
                          </div>
                          <span className="text-[8px] text-slate-400 font-medium mt-0.5">vs. previous period</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
