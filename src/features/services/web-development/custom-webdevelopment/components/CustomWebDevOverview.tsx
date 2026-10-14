"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layout, Maximize, Palette, LineChart, ShieldCheck, ImageIcon } from 'lucide-react';
import { FaWordpress, FaShopify, FaJoomla } from 'react-icons/fa';

const customServices = [
  { 
    icon: Layout, 
    title: ['Business-First', 'Design'], 
    lines: ['Every layout, flow and feature decided', "by how your business operates,", "not a theme's defaults."], 
    mock: 'wireframe', 
    colors: { outer: 'bg-[#f4f0ff]', inner: 'bg-[#7C3AED]', shadow: 'shadow-[0_4px_10px_rgba(124,58,237,0.25)]' } 
  },
  { 
    icon: Code2, 
    title: ['Fully Custom', 'Code'], 
    lines: ['Built from the ground up — no', 'bloated page builders, no features', "you'll never use."], 
    mock: 'dashboard', 
    colors: { outer: 'bg-[#eef5ff]', inner: 'bg-[#0066FF]', shadow: 'shadow-[0_4px_10px_rgba(0,102,255,0.25)]' } 
  },
  { 
    icon: Maximize, 
    title: ['Scalable', 'Architecture'], 
    lines: ['Built to handle more traffic, more', 'pages and more features as', 'your business grows.'], 
    mock: 'ecommerce', 
    colors: { outer: 'bg-[#fff5f0]', inner: 'bg-[#FF6B00]', shadow: 'shadow-[0_4px_10px_rgba(255,107,0,0.25)]' } 
  },
  { 
    icon: Palette, 
    title: ['Brand-Matched', 'Experience'], 
    lines: ['A site that looks, feels and reads', 'like your brand, not a generic', 'template with your logo on it.'], 
    mock: 'cms', 
    colors: { outer: 'bg-[#eefcfa]', inner: 'bg-[#00A896]', shadow: 'shadow-[0_4px_10px_rgba(0,168,150,0.25)]' } 
  },
  { 
    icon: LineChart, 
    title: ['SEO-Ready', 'Foundation'], 
    lines: ['Built clean from day one, so', "search visibility isn't something", 'bolted on later.'], 
    mock: 'performance', 
    colors: { outer: 'bg-[#fff0f8]', inner: 'bg-[#ff0055]', shadow: 'shadow-[0_4px_10px_rgba(255,0,85,0.18)]' } 
  },
  { 
    icon: ShieldCheck, 
    title: ['Ongoing', 'Support'], 
    lines: ["We stay on after launch to grow", "what we've built, not disappear", "once it's live."], 
    mock: 'maintenance', 
    colors: { outer: 'bg-[#f0f2ff]', inner: 'bg-[#4F46E5]', shadow: 'shadow-[0_4px_10px_rgba(79,70,229,0.25)]' } 
  },
];

function WindowBar() { return <div className="flex h-5 items-center gap-[5px] bg-gradient-to-r from-white to-[#f3f6f9] px-[10px] [&>i]:block [&>i]:size-2 [&>i]:rounded-full [&>i]:bg-[#dbe2ec] [&>i:first-child]:bg-[#ff4991]"><i /><i /><i /></div> }

function ServiceMock({ kind }: { kind: string }) {
  if (kind === 'cms') return <div className="flex h-[62px] items-center justify-evenly rounded-[14px] border border-[#e6eefb] bg-[#f8fbff] p-[6px] [&>span]:flex [&>span]:size-9 [&>span]:items-center [&>span]:justify-center [&>span]:rounded-[10px] [&>span]:border [&>span]:border-[#e7edf6] [&>span]:bg-white [&>span]:shadow-[0_2px_4px_#657c9d1c] [&>span:nth-child(4)]:text-[#0e1628] [&>span:nth-child(4)]:text-[24px] [&>span:nth-child(4)]:font-bold [&>span:nth-child(4)]:pb-3"><span><FaWordpress className="text-[#21759B]" size={22} /></span><span><FaShopify className="text-[#95BF47]" size={20} /></span><span><FaJoomla className="text-[#5091CD]" size={20} /></span><span>...</span></div>;
  if (kind === 'maintenance') return <div className="rounded-[10px] border border-[#e6eefb] bg-white px-[11px] pt-[13px] pb-[11px] [&_strong]:block [&_strong]:text-[11px] [&_strong]:font-[750] [&_strong]:leading-[1.3] [&_small]:mt-1 [&_small]:block [&_small]:text-[8px] [&_small]:leading-[1.3] [&_small]:text-[#7c91af]"><div className="relative flex items-center gap-2 [&>i]:absolute [&>i]:top-[2px] [&>i]:right-0 [&>i]:size-[7px] [&>i]:rounded-full [&>i]:bg-[#24d67d]"><span className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-[#ff0055] text-white shadow-[0_3px_6px_#ff005524]"><ShieldCheck size={22} /></span><div><strong>Website<br />Healthy</strong><small>All systems<br />operational</small></div><i /></div><div className="mt-[10px] h-[6px] rounded-lg bg-[#eaf0f7] [&>span]:block [&>span]:h-full [&>span]:w-[70%] [&>span]:rounded-lg [&>span]:bg-[#c7d3e1]"><span /></div></div>;
  if (kind === 'performance') return <div className="flex items-center gap-[10px] rounded-[10px] border border-[#e6eefb] bg-white px-[10px] py-[13px] [&_strong]:block [&_strong]:text-[11px] [&_strong]:font-[750] [&_strong]:leading-[1.3] [&_b]:mt-[7px] [&_b]:flex [&_b]:items-center [&_b]:gap-[3px] [&_b]:text-[10px] [&_b_svg]:-rotate-45 [&_b_svg]:text-[#12c986] [&_small]:mt-[5px] [&_small]:block [&_small]:text-[7px] [&_small]:whitespace-nowrap [&_small]:text-[#7c91af]"><div className="relative isolate flex size-12 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#ff0055_0deg_335deg,#ffd5e7_335deg_360deg)] text-[19px] font-extrabold before:absolute before:inset-[5px] before:z-[-1] before:rounded-full before:bg-white before:content-['']">98</div><div><strong>Performance<br />Score</strong><b><ArrowRight size={12} /> +162%</b><small>vs. previous period</small></div></div>;
  return <div className={`h-[118px] overflow-hidden rounded-[10px] border border-[#e6eefb] bg-white shadow-[0_7px_18px_#768cab06] ${kind === 'dashboard' ? 'relative mb-[3px] !h-[110px] !overflow-visible [&>div:first-child]:rounded-t-[10px]' : ''}`}><WindowBar />
    {kind === 'wireframe' && <div className="px-4 py-2 [&>div]:flex [&>div]:h-11 [&>div]:items-center [&>div]:justify-center [&>div]:rounded-[5px] [&>div]:bg-[#fff0fa] [&>div]:text-[#ffabd6] [&>span]:mt-2 [&>span]:mb-[6px] [&>span]:block [&>span]:h-[7px] [&>span]:w-[70%] [&>span]:rounded-lg [&>span]:bg-[#edf2f8] [&>b]:block [&>b]:h-3 [&>b]:w-[52px] [&>b]:rounded-[9px] [&>b]:bg-[#ff0055] [&>b]:shadow-[0_3px_6px_#ff005522]"><div><ImageIcon size={24} /></div><span /><b /></div>}
    {kind === 'dashboard' && <><div className="pt-2 pr-[10px] pb-[6px] pl-[62px] [&>span]:mb-[6px] [&>span]:block [&>span]:h-[6px] [&>span]:rounded-[5px] [&>span]:bg-[#edf2f8] [&>span:nth-child(2)]:w-[78%] [&>svg]:h-[50px] [&>svg]:w-full [&>svg]:rounded-[3px] [&>svg]:bg-[#fff7fc]"><span /><span /><svg viewBox="0 0 120 55" fill="none"><path d="M2 35 C24 31 32 57 54 44 S77 26 94 7" stroke="#ff65b6" strokeWidth="2.5" /><path d="M106 7h6m-3-3v6" stroke="#ff65b6" strokeWidth="2" /></svg></div><div className="absolute top-[17px] bottom-[-1px] left-0 w-[55px] rounded-lg bg-[#0e1523] p-[10px] shadow-[0_4px_8px_#0e152322] [&>i]:mb-[11px] [&>i]:block [&>i]:size-3 [&>i]:rounded-full [&>i]:bg-[#ff0055] [&>span]:mb-2 [&>span]:block [&>span]:h-[6px] [&>span]:rounded-[5px] [&>span]:bg-[#202d40] [&>span:nth-child(3)]:w-3/4 [&>span:nth-child(4)]:w-[85%]"><i /><span /><span /><span /><span /></div></>}
    {kind === 'ecommerce' && <div className="flex items-center gap-2 px-[9px] py-3"><div className="flex w-[52px] shrink-0 flex-col gap-2 [&>svg]:box-content [&>svg]:rounded-lg [&>svg]:bg-[#fff0fa] [&>svg]:p-3 [&>svg]:text-[#ff3999] [&>span]:h-[7px] [&>span]:w-[90%] [&>span]:rounded-[5px] [&>span]:bg-[#edf2f8]"><Maximize size={25} /><span /></div><div className="min-w-0 flex-1 [&>span]:mb-2 [&>span]:block [&>span]:h-[7px] [&>span]:rounded-[5px] [&>span]:bg-[#edf2f8] [&>span:nth-child(2)]:w-[70%] [&>b]:mt-[10px] [&>b]:flex [&>b]:h-[25px] [&>b]:items-center [&>b]:justify-center [&>b]:rounded-md [&>b]:bg-[#ff0055] [&>b]:text-[7px] [&>b]:whitespace-nowrap [&>b]:text-white"><span /><span /><b>SCALE UP</b></div></div>}
  </div>;
}

export default function CustomWebDevOverview() {
  return (
    <section 
      className="relative z-20 -mt-8 overflow-hidden rounded-t-[40px] border-t border-[#e9eef7] bg-[#f8faff] py-16 sm:py-20 lg:py-20 xl:py-24 text-[#07080c] max-md:rounded-t-[28px]" 
      aria-labelledby="custom-webdev-overview"
      style={{
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-[1.12fr_1.05fr_auto] items-center gap-14 max-[1399px]:gap-[30px] max-[1279px]:grid-cols-[1fr_auto] max-[1279px]:gap-y-6 max-[1279px]:gap-x-7 max-md:flex max-md:flex-col max-md:items-start max-md:gap-[18px]"
        >
          <div className="max-[1279px]:col-start-1 max-[1279px]:row-start-1">
            <div className="mb-[18px] flex items-center gap-[14px] text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-[750] tracking-[.25em] text-gray-700 [&>span]:h-[2px] [&>span]:w-[30px] [&>span]:bg-[#ff0055] max-md:mb-3 max-md:tracking-[.23em] max-md:[&>span]:w-6">
              OVERVIEW<span />
            </div>
            <h2 id="custom-webdev-overview" className="m-0 font-sans text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.16] tracking-[-1.3px]">
              What Custom Website Development<br /><span className="text-[#ff0055]">Means at Kaelixo</span>
            </h2>
          </div>
          <p className="m-0 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.65] text-gray-700 max-[1279px]:col-start-1 max-[1279px]:row-start-2 max-[1279px]:max-w-[700px]">
            Most agencies adapt your business to fit a pre-built theme. As a custom web development company, we do the opposite — we think your business through first, then build a website shaped entirely around it.
          </p>
          <a href="#contact" className="group flex items-center justify-center gap-[14px] whitespace-nowrap rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] px-7 py-[16px] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] font-[650] text-white transition-all duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none max-[1279px]:col-start-2 max-[1279px]:row-start-1 max-[1279px]:row-span-2 max-[1279px]:self-end max-[1279px]:mb-1 max-[1279px]:w-max max-md:gap-3 max-md:px-6 max-md:py-[13px] max-md:self-start max-md:mb-0">
            Start Your Project<ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-[54px] mb-[46px] flex items-center justify-between gap-[30px] px-[6%] [&>div]:flex [&>div]:items-center [&>div]:gap-7 [&_strong]:font-[750] [&_strong]:leading-[1.15] [&_strong]:tracking-[-1.3px] [&_strong]:text-[#ff0055] [&_span]:leading-[1.4] [&_span]:text-gray-700 max-[1399px]:px-[3%] max-[1399px]:[&>div]:gap-[18px] max-[1279px]:gap-5 max-[1279px]:px-0 max-[1279px]:[&>div]:gap-3 max-md:my-6 max-md:flex max-md:flex-col max-md:items-start max-md:gap-3.5 max-md:[&>div]:flex-row max-md:[&>div]:items-center max-md:[&>div]:gap-4 max-md:[&_strong]:min-w-[56px] max-md:[&_strong]:shrink-0" 
          aria-label="Our results"
        >
          <div><strong className="text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[32px] 2xl:text-[32px] [@media(min-width:1920px)]:text-[32px]">100+</strong><span className="text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px]">Custom Websites Delivered</span></div>
          <div><strong className="text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[32px] 2xl:text-[32px] [@media(min-width:1920px)]:text-[32px]">98%</strong><span className="text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px]">Client Satisfaction</span></div>
          <div><strong className="text-[20px] sm:text-[20px] md:text-[23px] lg:text-[23px] xl:text-[32px] 2xl:text-[32px] [@media(min-width:1920px)]:text-[32px]">3x</strong><span className="text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px]">Average Increase in Conversions</span></div>
        </motion.div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-5 max-[1279px]:grid-cols-2 max-md:grid-cols-1 max-md:gap-3">
          {customServices.map(({ icon: Icon, title, lines, mock, colors }, idx) => (
            <motion.article 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (idx % 3) * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative md:max-[1279px]:flex md:max-[1279px]:flex-col h-[264px] md:max-[1279px]:h-auto min-[1500px]:h-[274px] max-md:min-h-[220px] max-md:h-auto max-md:pb-[120px] max-md:block min-w-0 rounded-[20px] border border-[#e6edf9] bg-white/95 p-[22px] shadow-[0_8px_24px_#92a6c005] min-[1500px]:p-6 max-md:rounded-2xl max-md:p-[14px]" 
              key={mock}
            >
              <div className="mb-[15px] flex min-h-[64px] items-center gap-5 max-md:mb-2 max-md:min-h-[46px] max-md:gap-[10px]">
                <div className={`flex size-[64px] shrink-0 items-center justify-center rounded-[18px] ${colors.outer} max-md:size-[46px] max-md:rounded-[14px]`}>
                  <div className={`flex size-[42px] items-center justify-center rounded-[12px] ${colors.inner} text-white ${colors.shadow} max-md:size-[30px] max-md:rounded-[9px] max-md:[&>svg]:size-[16px]`}>
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                </div>
                <h3 className="m-0 font-sans text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px] [@media(min-width:1920px)]:text-[24px] font-bold leading-[1.24] tracking-[-.55px]">
                  {title.map((line, index) => <React.Fragment key={line}>{index > 0 && <br />}{line}</React.Fragment>)}
                </h3>
              </div>
              <p className="relative z-[1] m-0 w-[calc(100%-154px)] md:max-[1279px]:w-full text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.5] text-gray-700 [&>span]:block [&>span]:whitespace-nowrap max-[1279px]:[&>span]:inline max-[1279px]:[&>span]:whitespace-normal max-md:w-full">
                {lines.map((line, index) => <React.Fragment key={line}>{index > 0 && ' '}<span>{line}</span></React.Fragment>)}
              </p>
              <div className={`absolute md:max-[1279px]:relative md:max-[1279px]:self-center md:max-[1279px]:mt-8 md:max-[1279px]:mb-6 origin-bottom-right md:max-[1279px]:origin-center text-[#08090d] w-[154px] sm:w-[154px] md:w-[160px] lg:w-[165px] xl:w-[172px] 2xl:w-[180px] [@media(min-width:1920px)]:w-[190px] scale-[.80] sm:scale-[.85] md:scale-[.85] lg:scale-[1] xl:scale-[.80] 2xl:scale-[.85] [@media(min-width:1920px)]:scale-[.90] right-5 sm:right-6 md:max-[1279px]:right-auto xl:right-6 2xl:right-8 [@media(min-width:1920px)]:right-10 bottom-[22px] sm:bottom-[24px] md:max-[1279px]:bottom-auto xl:bottom-2 2xl:bottom-3 [@media(min-width:1920px)]:bottom-4 ${mock === 'cms' ? '!bottom-[45px] sm:!bottom-[50px] md:max-[1279px]:!bottom-auto xl:!bottom-[20px] 2xl:!bottom-[20px] [@media(min-width:1920px)]:!bottom-[20px] !w-[186px] sm:!w-[190px] md:!w-[220px] lg:!w-[280px] xl:!w-[220px] 2xl:!w-[220px] [@media(min-width:1920px)]:!w-[220px]' : ''}`} aria-hidden="true">
                <ServiceMock kind={mock} />
              </div>
              <a href="#contact" className="absolute md:max-[1279px]:relative bottom-6 left-[22px] md:max-[1279px]:bottom-auto md:max-[1279px]:left-auto md:max-[1279px]:mt-auto md:max-[1279px]:self-start z-[1] flex items-center gap-[10px] text-[16px] font-semibold text-[#ff0055] transition-[gap] hover:gap-[14px] min-[1500px]:left-6 max-md:bottom-[22px] max-md:left-[18px]">
                Learn More<ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
