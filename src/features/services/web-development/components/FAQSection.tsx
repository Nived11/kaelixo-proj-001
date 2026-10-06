"use client";

import { useState } from "react";
import { MessageSquare, ShieldCheck, Users, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: "Quick Support",
      desc: "Get the help you need, anytime.",
      icon: MessageSquare,
    },
    {
      title: "Transparent Process",
      desc: "Clear communication at every step.",
      icon: ShieldCheck,
    },
    {
      title: "Long-Term Partnership",
      desc: "We grow with your business.",
      icon: Users,
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Timeline depends on scope and complexity. A standard business website typically takes 2–4 weeks, while larger custom builds take longer. As a web development company, we always think the timeline through and share it upfront before work begins.",
    },
    {
      question: "What services does your web development company offer?",
      answer: "Our web development services cover strategy, UI/UX design, custom website and web application development, e-commerce, CMS setup, testing, launch and ongoing growth support — end to end, under one team that thinks it through, builds it, and stays to grow it.",
    },
    {
      question: "Do you provide domain and hosting for a new website?",
      answer: "Yes. We can set up domain and hosting for you, or work within infrastructure you already have in place.",
    },
    {
      question: "Will my website be mobile-friendly and SEO-ready?",
      answer: "Every website we build is fully responsive and optimized for search from the ground up — mobile performance and SEO aren't an afterthought.",
    },
    {
      question: "Can I update the website content myself after launch?",
      answer: "Yes. We build on CMS platforms designed for non-technical teams, so you can update pages, images and content without needing a developer.",
    },
    {
      question: "Do you offer ongoing website support and maintenance?",
      answer: "Yes. Support continues after launch — updates, monitoring and maintenance are part of how we help what we've built keep growing.",
    },
  ];

  return (
    <div className="relative bg-[#ffffff] text-[#030C25] py-16 overflow-hidden border-t border-gray-100">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-0 left-[-5%] w-[30%] h-[400px] bg-rose-50 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[500px] bg-pink-50/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Title & Features */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#FF0055]"></div>
              <span className="text-gray-500 font-bold text-[12px] sm:text-[13px] lg:text-[18px] xl:text-[18px] tracking-[0.25em] uppercase">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] font-extrabold leading-[1.05] tracking-tight mb-5 font-heading">
              Got Questions? <br />
              <span className="text-[#FF0055]">We've Got Answers.</span>
            </h2>
            
            <p className="text-[#475569] text-[16px] leading-[1.6] max-w-md mb-10">
              Common questions about our web development company's services, process and support.
            </p>

            {/* Features Row */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-2.5 max-w-[130px]">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[#FF0055]">
                    <feature.icon size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#030C25] mb-1 leading-tight">{feature.title}</h4>
                    <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Footer Line */}
            <div className="flex items-center gap-2.5 text-[9px] font-bold tracking-widest text-gray-400 uppercase">
              THINK <span className="text-[#FF0055]">—</span> BUILD <span className="text-[#FF0055]">—</span> GROW
            </div>
          </div>

          {/* RIGHT COLUMN: Accordion FAQ */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const formattedNumber = (index + 1).toString().padStart(2, "0");

              return (
                <div 
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className={`border rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-[#FF0055]/20 bg-gradient-to-r from-rose-50/50 to-pink-50/30 shadow-sm' 
                      : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]'
                  }`}
                >
                  <div className="p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {/* Number Badge */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 transition-colors ${
                        isOpen ? 'bg-[#FF0055] text-white shadow-md shadow-pink-200' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {formattedNumber}
                      </div>
                      
                      {/* Question Text */}
                      <h3 className={`text-[14px] font-bold transition-colors ${isOpen ? 'text-[#030C25]' : 'text-[#030C25]'}`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Chevron Icon */}
                    <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'text-[#FF0055]' : 'text-gray-400'}`}>
                      {isOpen ? <ChevronUp size={18} strokeWidth={2.5} /> : <ChevronDown size={18} strokeWidth={2.5} />}
                    </div>
                  </div>

                  {/* Expandable Answer */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[200px] opacity-100 pb-5 pt-0' : 'max-h-0 opacity-0 py-0'
                    }`}
                  >
                    <p className="text-[13px] text-[#475569] font-medium leading-relaxed pl-[60px] pr-5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}