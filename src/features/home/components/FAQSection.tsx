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
      question: "How long does it take to develop a website?",
      answer: "The timeline depends on the project's complexity and requirements. A standard business website usually takes 2-4 weeks, while larger or custom projects may take longer. We always provide a clear timeline before starting.",
    },
    {
      question: "What does your web development service include?",
      answer: "Our service includes UI/UX design, frontend & backend development, mobile responsiveness, basic SEO setup, and performance optimization.",
    },
    {
      question: "Do you provide domain and hosting?",
      answer: "Yes, we can assist you with purchasing the right domain and setting up reliable hosting suited for your specific application needs.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely. All our websites are built with a mobile-first approach to ensure they look and function perfectly across all devices and screen sizes.",
    },
    {
      question: "Can I update the website content myself?",
      answer: "Yes, we integrate easy-to-use Content Management Systems (CMS) so you can update text, images, and basic content without any coding knowledge.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer flexible support and maintenance packages to keep your website secure, up-to-date, and running smoothly long after launch.",
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
              <span className="text-gray-500 font-bold text-[10px] tracking-widest uppercase">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            
            <h2 className="text-4xl md:text-[44px] font-black leading-[1.1] tracking-tight mb-5">
              Got Questions? <br />
              <span className="text-[#FF0055]">We've Got Answers.</span>
            </h2>
            
            <p className="text-[#475569] text-[15px] font-medium leading-relaxed max-w-md mb-10">
              Find answers to common questions about our web development services, process, and support.
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
              IDEAS <span className="text-[#FF0055]">—</span> DESIGN <span className="text-[#FF0055]">—</span> DEVELOP <span className="text-[#FF0055]">—</span> GROW
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