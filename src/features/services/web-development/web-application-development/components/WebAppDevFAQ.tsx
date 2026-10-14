"use client";

import { useState } from "react";
import { MessageSquare, ShieldCheck, Users, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WebAppDevFAQ() {
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
      question: "What's the difference between a website and a web app?",
      answer: "A website presents information; a web app lets users interact with and manage real data — like Way We Go manages bookings or EduLoom manages enrolments.",
    },
    {
      question: "How long does web app development take?",
      answer: "It depends on complexity, but most projects move through discovery, design, build and testing over several weeks. We always share a clear timeline upfront.",
    },
    {
      question: "Can a web app grow with my business later?",
      answer: "Yes — every web app we build is designed on scalable architecture, the same way Way We Go and EduLoom have grown well past their first versions.",
    },
    {
      question: "Do you provide support after the web app is live?",
      answer: "Yes. As a web app development company, we stay on after launch, tracking usage and refining it as your business grows.",
    },
  ];

  return (
    <div className="relative bg-[#ffffff] text-[#030C25] py-16 sm:py-20 lg:py-20 xl:py-24 overflow-hidden border-t border-gray-100">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-0 left-[-5%] w-[30%] h-[400px] bg-rose-50 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[500px] bg-pink-50/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* TOP / LEFT COLUMN: Title & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="xl:col-span-5 flex flex-col items-start w-full"
          >
            <div className="mb-4">
              <span className="text-gray-700 font-[750] text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] tracking-[0.2em] uppercase">
                FREQUENTLY ASKED{' '}
                <span className="inline-flex items-center gap-3 whitespace-nowrap">
                  QUESTIONS
                  <span className="inline-block w-8 h-[2px] bg-[#FF0055] shrink-0" />
                </span>
              </span>
            </div>
            
            <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.16] tracking-[-1.3px] mb-5 font-heading">
              <span className="block sm:inline">Got Questions? </span>
              <span className="block text-[#FF0055]">We've Got Answers.</span>
            </h2>
            
            <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] max-w-xl mb-8 xl:mb-10">
              Common questions about our web application development process, workflows and scalable architecture.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-6 mb-8 xl:mb-10 w-full">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="flex flex-col items-start gap-1.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center text-white shrink-0 shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-2 ring-pink-100">
                      <feature.icon size={18} strokeWidth={2.5} />
                    </div>
                    <h4 className="text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold text-[#030C25] leading-tight">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-relaxed text-gray-700 font-medium pl-12 sm:pl-[52px]">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BOTTOM / RIGHT COLUMN: Accordion FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="xl:col-span-7 flex flex-col gap-3 w-full"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const formattedNumber = (index + 1).toString().padStart(2, "0");

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
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
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 transition-all ${
                        isOpen 
                          ? 'bg-gradient-to-r from-[#80002A] to-[#FF0055] text-white shadow-md shadow-pink-300' 
                          : 'bg-rose-50 text-[#FF0055] border border-pink-200/80 font-extrabold'
                      }`}>
                        {formattedNumber}
                      </div>
                      
                      {/* Question Text */}
                      <h3 className="text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold text-[#030C25]">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Chevron Icon */}
                    <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'text-[#FF0055]' : 'text-gray-400'}`}>
                      {isOpen ? <ChevronUp size={18} strokeWidth={2.5} /> : <ChevronDown size={18} strokeWidth={2.5} />}
                    </div>
                  </div>

                  {/* Expandable Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="faq-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 sm:pb-6 pt-0 pl-[60px] pr-4 sm:pr-6">
                          <p className="text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-relaxed text-[#475569] font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
