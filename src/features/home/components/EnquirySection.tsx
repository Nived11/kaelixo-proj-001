"use client";

import { Rocket, Users, ShieldCheck, User, Mail, Phone, Grid, Lock, ArrowRight, ChevronDown } from "lucide-react";

export default function EnquirySection() {
  return (
    <div className="relative bg-[#fafbfe] text-[#030C25] pt-20 lg:pt-28 pb-10 overflow-hidden border-t border-gray-100">
      
      {/* Background Decor & Image Element */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-[90%] opacity-10 lg:opacity-100 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafbfe] via-[#fafbfe]/80 to-transparent z-10 hidden lg:block"></div>
        <img 
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80" 
          alt="Workspace" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20">
          
          {/* LEFT COLUMN: Content & Features */}
          <div className="lg:col-span-5 flex flex-col items-start pt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#FF0055]"></div>
              <span className="text-[#FF0055] font-bold text-[11px] tracking-widest uppercase">ENQUIRY</span>
            </div>
            
            <h2 className="text-[40px] md:text-[52px] font-black leading-[1.1] tracking-tight mb-5">
              Let's Turn Your <br />
              <span className="text-[#FF0055]">Ideas Into Reality</span>
            </h2>
            
            <p className="text-[#475569] text-[16px] font-medium leading-relaxed max-w-md mb-10">
              Have a project in mind or need expert advice? Share your details and our team will get back to you with the right solution.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[#FF0055] shrink-0 mt-1">
                  <Rocket size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#030C25] mb-0.5">Quick Response</h4>
                  <p className="text-[13px] text-gray-500 font-medium">We'll get back to you shortly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[#FF0055] shrink-0 mt-1">
                  <Users size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#030C25] mb-0.5">Expert Consultation</h4>
                  <p className="text-[13px] text-gray-500 font-medium">Right guidance for your needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[#FF0055] shrink-0 mt-1">
                  <ShieldCheck size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#030C25] mb-0.5">Tailored Solutions</h4>
                  <p className="text-[13px] text-gray-500 font-medium">Built around your business goals.</p>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-auto border-t border-gray-200 pt-6 w-full max-w-sm">
              YOUR GROWTH STARTS HERE.
            </div>
          </div>

          {/* RIGHT COLUMN: Form Card */}
          <div className="lg:col-span-6 lg:col-start-7 relative">
            
            {/* Decorative Cursive Text */}
            <div className="hidden lg:block absolute -top-12 right-4 transform rotate-[-5deg]">
              <span className="font-[cursive] text-3xl text-[#FF0055]">Let's Build Together</span>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative z-20">
              
              <div className="mb-8">
                <span className="text-[#FF0055] font-bold text-[10px] tracking-widest uppercase mb-2 block">SEND US AN ENQUIRY</span>
                <h3 className="text-[28px] font-black text-[#030C25] leading-tight mb-2">
                  We're Here to <span className="text-[#FF0055]">Help</span>
                </h3>
                <p className="text-[13px] text-gray-500 font-medium">
                  Fill in the details below and our team will connect with you soon.
                </p>
              </div>

              <form className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Your Name *" 
                      className="w-full pl-11 pr-4 py-3.5 text-[13px] font-medium border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all bg-gray-50/50"
                    />
                  </div>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="email" 
                      placeholder="Your Email *" 
                      className="w-full pl-11 pr-4 py-3.5 text-[13px] font-medium border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="tel" 
                    placeholder="Your Phone *" 
                    className="w-full pl-11 pr-4 py-3.5 text-[13px] font-medium border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all bg-gray-50/50"
                  />
                </div>

                {/* Service Dropdown - Fixed the defaultValue error */}
                <div className="relative">
                  <Grid size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select 
                    defaultValue="" 
                    className="w-full pl-11 pr-10 py-3.5 text-[13px] font-medium text-gray-500 border border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all bg-gray-50/50 cursor-pointer"
                  >
                    <option value="" disabled>Service Interested In *</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="crm">CRM Solutions</option>
                    <option value="marketing">Digital Marketing</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project or requirements *"
                    className="w-full px-4 py-3.5 text-[13px] font-medium border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all bg-gray-50/50 resize-none pb-8"
                  />
                  <span className="absolute bottom-3 right-4 text-[10px] text-gray-400 font-medium">0/500</span>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <div className="flex items-center h-5">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 border border-gray-300 rounded text-[#FF0055] focus:ring-[#FF0055] cursor-pointer"
                    />
                  </div>
                  <label className="text-[12px] text-gray-500 font-medium leading-tight">
                    I agree to be contacted by the team.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="button"
                  className="w-full bg-[#FF0055] hover:bg-[#e6004c] text-white font-bold text-[14px] py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_-6px_rgba(255,0,85,0.4)] cursor-pointer mt-4"
                >
                  Send Enquiry <ArrowRight size={18} />
                </button>

                {/* Footer Security Text */}
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 font-medium pt-2">
                  <Lock size={12} /> Your information is safe with us.
                </div>
              </form>
            </div>

          </div>
        </div>

        {/* BOTTOM BORDER TEXTS */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-8 text-[9px] font-bold tracking-[0.3em] text-gray-400 uppercase">
          <div>SOLUTIONS FOR A BRIGHTER TOMORROW</div>
          <div>THINK . BUILD . GROW</div>
        </div>

      </div>
    </div>
  );
}