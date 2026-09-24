import React from 'react';
import { Lightbulb, Code2, Rocket, PenTool, Smartphone, LifeBuoy, ArrowRight, Globe } from 'lucide-react';

export default function WebDevApproach() {
  const steps = [
    {
      icon: <Lightbulb className="w-5 h-5 text-[#FF0055]" />,
      title: "Strategic Planning",
      desc: "Understand your goals and audience"
    },
    {
      icon: <PenTool className="w-5 h-5 text-[#FF0055]" />,
      title: "Creative Design",
      desc: "Modern, user-centric and brand-focused"
    },
    {
      icon: <Code2 className="w-5 h-5 text-[#FF0055]" />,
      title: "Clean Development",
      desc: "Secure, scalable and high-performance code"
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[#FF0055]" />,
      title: "Fully Responsive",
      desc: "Seamless experience across all devices"
    },
    {
      icon: <Rocket className="w-5 h-5 text-[#FF0055]" />,
      title: "Testing & Optimization",
      desc: "Quality, speed and SEO-ready"
    },
    {
      icon: <LifeBuoy className="w-5 h-5 text-[#FF0055]" />,
      title: "Ongoing Support",
      desc: "We're with you, even after launch"
    }
  ];

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="flex flex-col items-start pr-0 lg:pr-10 relative z-20">
            <div className="flex flex-col items-start mb-6 gap-2">
              <span className="text-slate-500 font-bold text-[11px] tracking-widest uppercase">
                OUR APPROACH
              </span>
              <div className="w-10 h-[2px] bg-[#FF0055]" />
            </div>

            <h2 className="text-[#020205] text-[42px] lg:text-[50px] font-black leading-[1.05] tracking-tight mb-5">
              From Ideas to <br />
              <span className="text-[#FF0055]">Impactful Websites</span>
            </h2>

            <p className="text-slate-500 text-[16px] leading-relaxed mb-10 max-w-[480px]">
              We combine strategy, design and technology to build websites that look great, perform exceptionally and help your business grow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10 w-full">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-pink-50 flex items-center justify-center shadow-sm">
                    {step.icon}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-[#020205] text-[15px] font-bold mb-1 leading-tight">{step.title}</h4>
                    <p className="text-slate-500 text-[13px] leading-relaxed pr-2">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-8 py-3.5 rounded-full bg-[#FF0055] text-white font-bold text-[15px] flex items-center gap-2 shadow-[0_10px_20px_rgba(255,0,85,0.2)] hover:shadow-[0_10px_30px_rgba(255,0,85,0.4)] transition-all hover:-translate-y-1 active:translate-y-0 group">
              Let's Build Your Website
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column - Graphics Mockup */}
          <div className="relative w-full h-[350px] lg:h-[420px] flex items-center justify-center mt-12 lg:mt-0">
            
            {/* Background Decoration (Multiple Overlapping Pink Shapes) */}
            <div className="absolute top-[-10%] right-[-10%] w-[550px] lg:w-[500px] aspect-square bg-[#FFF0F5] rounded-full z-0 pointer-events-none" />
            <div className="absolute top-[38%] left-[-15%] lg:left-[-2%] w-[300px] lg:w-[350px] aspect-square bg-[#FFE5EE] rounded-full z-0 pointer-events-none" />
            <div className="absolute top-[-18%] left-[-5%] w-[180px] lg:w-[220px] aspect-square bg-[#FFEBF3] rounded-full z-0 pointer-events-none" />
            <div className="absolute bottom-[0%] left-[10%] w-[80%] h-[50px] bg-[#FFE5EE] rounded-full blur-[25px] pointer-events-none z-0 opacity-70" />

            {/* Dotted pattern circle */}
            <div className="absolute top-[5%] left-[20%] w-[200px] h-[200px] opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FF0055 1px, transparent 0)', backgroundSize: '18px 16px' }} />

            {/* Mockups Container */}
            <div className="relative w-full max-w-[580px] h-full flex items-center justify-center">
              
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes float-gentle-1 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
                @keyframes float-gentle-2 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-12px); }
                }
                @keyframes float-gentle-3 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }
                .animate-float-1 { animation: float-gentle-1 6s ease-in-out infinite; }
                .animate-float-2 { animation: float-gentle-2 5.5s ease-in-out infinite; }
                .animate-float-3 { animation: float-gentle-3 7s ease-in-out infinite; }
              `}} />

              {/* Plant Image (Background Right, partially off-screen) */}
              <img 
                src="/images/webdevplant.png" 
                alt="Decorative Plant" 
                className="absolute right-[-15%] sm:right-[-25%] lg:right-[-38%] top-[10%] sm:top-[15%] w-[140px] sm:w-[180px] object-contain z-0 blur-[1px] opacity-90"
              />

              {/* Code editor side panel peek (Behind Laptop, Left) */}
              <div className="absolute left-[-5%] sm:left-[8%] top-[15%] sm:top-[20%] z-10 animate-float-2">
                <div 
                  className="w-[160px] sm:w-[200px] h-[140px] sm:h-[170px] bg-[#1E1E1E] rounded-xl shadow-[15px_20px_40px_rgba(0,0,0,0.4)] border border-slate-700 overflow-hidden flex flex-col"
                  style={{ transform: "perspective(800px) rotateY(20deg) rotateX(5deg) rotateZ(-3deg)" }}
                >
                  <div className="h-5 sm:h-6 bg-[#2D2D2D] flex items-center px-2.5 sm:px-3 gap-1 sm:gap-1.5 shrink-0">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 p-3 sm:p-4 text-[7px] sm:text-[8.5px] font-mono leading-[1.7] overflow-hidden text-slate-300">
                    <div><span className="text-slate-500 mr-2">1</span> <span className="text-blue-400">&lt;!DOCTYPE html&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">2</span> <span className="text-pink-400">&lt;html <span className="text-blue-300">lang="en"</span>&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">3</span> <span className="text-pink-400">&lt;head&gt;</span></div>
                    <div className="ml-2 sm:ml-3"><span className="text-slate-500 mr-2 -ml-2 sm:-ml-3">4</span> <span className="text-pink-400">&lt;meta <span className="text-blue-300">charset="UTF-8"</span>&gt;</span></div>
                    <div className="ml-2 sm:ml-3"><span className="text-slate-500 mr-2 -ml-2 sm:-ml-3">5</span> <span className="text-pink-400">&lt;title&gt;</span><span className="text-white">Kaelixo</span><span className="text-pink-400">&lt;/title&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">6</span> <span className="text-pink-400">&lt;/head&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">7</span> <span className="text-pink-400">&lt;body&gt;</span></div>
                    <div className="ml-2 sm:ml-3"><span className="text-slate-500 mr-2 -ml-2 sm:-ml-3">8</span> <span className="text-pink-400">&lt;h1&gt;</span><span className="text-white">Build</span></div>
                    <div className="ml-4 sm:ml-6"><span className="text-slate-500 mr-2 -ml-4 sm:-ml-6">9</span> <span className="text-white">Better Websites</span><span className="text-pink-400">&lt;/h1&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">10</span> <span className="text-pink-400">&lt;/body&gt;</span></div>
                    <div><span className="text-slate-500 mr-2">11</span> <span className="text-pink-400">&lt;/html&gt;</span></div>
                  </div>
                </div>
              </div>

              {/* Laptop Bottom Shadow */}
              <div className="absolute bottom-[0%] lg:bottom-[3%] right-[2%] lg:right-[5%] w-[75%] h-[15px] sm:h-[25px] bg-slate-400/40 rounded-[100%] blur-[12px] z-10 pointer-events-none" />

              {/* Main Laptop Image */}
              <img 
                src="/images/webdevlaptop.png" 
                alt="Laptop Web Development" 
                className="relative z-20 w-[100%] sm:w-[105%] max-w-none object-contain translate-x-[5%] lg:translate-x-[8%] animate-float-1"
              />

              {/* Mobile Bottom Shadow */}
              <div className="absolute bottom-[-4%] sm:bottom-[-1%] left-[5%] sm:left-[12%] w-[80px] sm:w-[140px] h-[10px] sm:h-[15px] bg-slate-400/40 rounded-[100%] blur-[8px] z-20 pointer-events-none" />

              {/* Mobile Mockup Image (Foreground left) */}
              <img 
                src="/images/webdevmobile.png" 
                alt="Mobile Web Development" 
                className="absolute bottom-[-2%] sm:bottom-[2%] left-[2%] sm:left-[10%] w-[100px] sm:w-[180px] object-contain z-30 animate-float-2"
              />

              {/* Floating Pill */}
              <div className="absolute bottom-[10%] right-[0%] sm:right-[5%] z-40 bg-white/90 backdrop-blur-sm rounded-[15px] p-2 sm:p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-white/50 flex items-center gap-2 sm:gap-3 animate-float-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0055]" />
                </div>
                <div className="pr-1 sm:pr-2">
                  <p className="text-slate-800 font-extrabold text-[11px] sm:text-[13px] leading-tight mb-0.5">Scalable</p>
                  <p className="text-slate-500 text-[9px] sm:text-[11px] leading-tight font-medium">for Tomorrow</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
