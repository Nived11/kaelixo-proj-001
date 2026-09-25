import React from 'react';
import { Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const technologies = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/95BF47' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
];

export default function WebDevTechStack() {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-[#020205]">
      
      {/* Background Shapes */}
      <img 
        src="/shape.png" 
        alt="glow shape" 
        className="absolute bottom-10 left-6 w-[500px] md:w-[600px] lg:w-[150px] opacity-40 pointer-events-none translate-y-[30%] -translate-x-[20%]"
      />
      <img 
        src="/shape.png" 
        alt="glow shape" 
        className="absolute top-10 right-6 w-[400px] md:w-[500px] lg:w-[150px] opacity-40 pointer-events-none rotate-180 -translate-y-[40%] translate-x-[20%]"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 xl:gap-4 mb-10 lg:mb-12">
          
          {/* Left Text */}
          <div className="flex flex-col items-start w-full xl:w-auto overflow-hidden">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[2px] bg-[#FF0055]" />
              <span className="text-slate-400 font-bold text-[11px] tracking-[0.25em] uppercase">
                TECHNOLOGY STACK
              </span>
            </div>
            
            <h2 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-4 lg:whitespace-nowrap">
              Built with <span className="text-[#FF0055] drop-shadow-[0_0_15px_rgba(255,0,85,0.3)]">Modern Technologies</span>
            </h2>
            
            <p className="text-slate-400 text-[12px] lg:text-[13px] xl:text-[14px] leading-[1.6] lg:whitespace-nowrap">
              We use industry-leading tools and frameworks to build fast, secure and scalable websites tailored to your business needs.
            </p>
          </div>

          {/* Right Features */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 lg:gap-6 shrink-0">
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0a0407] shadow-[inset_0_1px_3px_rgba(255,0,85,0.4)] border border-[#FF0055]/20 flex items-center justify-center relative shrink-0">
                <div className="absolute inset-0 bg-[#FF0055]/30 blur-[6px] rounded-full" />
                <Zap className="w-4 h-4 text-[#FF0055] relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[12px] lg:text-[14px] leading-tight">Modern</span>
                <span className="text-slate-400 text-[9px] lg:text-[11px] mt-0.5 whitespace-nowrap">Latest Tools</span>
              </div>
            </div>
            
            <div className="w-[1px] h-10 bg-white/10 hidden sm:block shrink-0" />
            
            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0a0407] shadow-[inset_0_1px_3px_rgba(255,0,85,0.4)] border border-[#FF0055]/20 flex items-center justify-center relative shrink-0">
                <div className="absolute inset-0 bg-[#FF0055]/30 blur-[6px] rounded-full" />
                <ShieldCheck className="w-4 h-4 text-[#FF0055] relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[12px] lg:text-[14px] leading-tight">Secure</span>
                <span className="text-slate-400 text-[9px] lg:text-[11px] mt-0.5 whitespace-nowrap">Reliable Builds</span>
              </div>
            </div>
            
            <div className="w-[1px] h-10 bg-white/10 hidden sm:block shrink-0" />
            
            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0a0407] shadow-[inset_0_1px_3px_rgba(255,0,85,0.4)] border border-[#FF0055]/20 flex items-center justify-center relative shrink-0">
                <div className="absolute inset-0 bg-[#FF0055]/30 blur-[6px] rounded-full" />
                <TrendingUp className="w-4 h-4 text-[#FF0055] relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[12px] lg:text-[14px] leading-tight">Scalable</span>
                <span className="text-slate-400 text-[9px] lg:text-[11px] mt-0.5 whitespace-nowrap">Future Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-2 lg:gap-1.5 xl:gap-2 mt-8 w-full">
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="flex flex-col items-center justify-center w-[60px] h-[70px] sm:w-[65px] sm:h-[75px] lg:w-[70px] lg:h-[80px] xl:w-[78px] xl:h-[88px] bg-[#05050A] rounded-[14px] lg:rounded-[16px] shadow-[0_0_15px_rgba(255,0,85,0.02)] relative group overflow-hidden cursor-default transition-all hover:-translate-y-1"
            >
              {/* Animated Border Mask */}
              <div 
                 className="absolute inset-0 rounded-[14px] lg:rounded-[16px] overflow-hidden pointer-events-none z-10"
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
              <div className="relative z-20 w-full h-full border border-white/5 group-hover:border-transparent rounded-[14px] lg:rounded-[16px] transition-colors duration-300 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF0055]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[14px] lg:rounded-[16px]" />
                
                <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8 mb-1 relative flex items-center justify-center z-10">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" 
                  />
                </div>
                <span className="text-slate-400 text-[8px] sm:text-[8.5px] lg:text-[9px] xl:text-[9.5px] font-medium group-hover:text-white transition-colors text-center z-10 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
