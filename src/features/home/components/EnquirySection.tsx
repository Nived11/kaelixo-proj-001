"use client";

import { Rocket, Users, ShieldCheck, User, Mail, Phone, Grid, Lock, ArrowRight, ChevronDown } from "lucide-react";

export default function EnquirySection() {
  return (
    <div className="relative bg-[#fafbfe] text-[#030C25] pt-12 lg:pt-16 pb-8 overflow-hidden border-t border-gray-100">
      
      {/* Background Decor & Image Element */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full opacity-10 lg:opacity-100 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafbfe] via-[#fafbfe]/80 to-transparent z-10 hidden lg:block"></div>
        <img 
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80" 
          alt="Workspace" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center mb-10">
          
          {/* LEFT COLUMN: Content & Features */}
          <div className="lg:col-span-5 flex flex-col items-start pt-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-[2px] bg-[#FF0055]"></div>
              <span className="text-[#FF0055] font-bold text-[9px] tracking-widest uppercase">ENQUIRY</span>
            </div>
            
            <h2 className="text-[36px] md:text-[40px] font-black leading-[1.1] tracking-tight mb-4">
              Let's Turn Your <br />
              <span className="text-[#FF0055]">Ideas Into Reality</span>
            </h2>
            
            <p className="text-[#475569] text-[15px] font-medium leading-relaxed max-w-md mb-8">
              Have a project in mind or need expert advice? Share your details and our team will get back to you with the right solution.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center text-[#FF0055] shrink-0 mt-0.5">
                  <Rocket size={16} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#030C25] mb-0.5">Quick Response</h4>
                  <p className="text-[12px] text-gray-500 font-medium">We'll get back to you shortly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center text-[#FF0055] shrink-0 mt-0.5">
                  <Users size={16} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#030C25] mb-0.5">Expert Consultation</h4>
                  <p className="text-[12px] text-gray-500 font-medium">Right guidance for your needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center text-[#FF0055] shrink-0 mt-0.5">
                  <ShieldCheck size={16} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#030C25] mb-0.5">Tailored Solutions</h4>
                  <p className="text-[12px] text-gray-500 font-medium">Built around your business goals.</p>
                </div>
              </div>
            </div>


          </div>

          {/* RIGHT COLUMN: Form Card */}
          <div className="lg:col-span-6 lg:col-start-7 relative">

            <div className="bg-white rounded-[24px] p-5 lg:p-7 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-gray-100 relative z-20">
              
              <div className="mb-6">
                <span className="text-[#FF0055] font-bold text-[9px] tracking-widest uppercase mb-1.5 block">SEND US AN ENQUIRY</span>
                <h3 className="text-[24px] font-black text-[#030C25] leading-tight mb-1.5">
                  We're Here to <span className="text-[#FF0055]">Help</span>
                </h3>
                <p className="text-[12px] text-gray-500 font-medium">
                  Fill in the details below and our team will connect with you soon.
                </p>
              </div>

              <form className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Your Name *" 
                      className="w-full pl-9 pr-3 py-3 text-[12px] font-medium border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all bg-gray-50/50"
                    />
                  </div>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="email" 
                      placeholder="Your Email *" 
                      className="w-full pl-9 pr-3 py-3 text-[12px] font-medium border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="tel" 
                    placeholder="Your Phone *" 
                    className="w-full pl-9 pr-3 py-3 text-[12px] font-medium border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all bg-gray-50/50"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="relative">
                  <Grid size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select 
                    defaultValue="" 
                    className="w-full pl-9 pr-9 py-3 text-[12px] font-medium text-gray-500 border border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all bg-gray-50/50 cursor-pointer"
                  >
                    <option value="" disabled>Service Interested In *</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="crm">CRM Solutions</option>
                    <option value="marketing">Digital Marketing</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea 
                    rows={3}
                    placeholder="Tell us about your project or requirements *"
                    className="w-full px-4 py-3 text-[12px] font-medium border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all bg-gray-50/50 resize-none pb-6"
                  />
                  <span className="absolute bottom-2.5 right-3.5 text-[9px] text-gray-400 font-medium">0/500</span>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-2 pt-1">
                  <div className="flex items-center h-4">
                    <input 
                      type="checkbox" 
                      className="w-3.5 h-3.5 border border-gray-300 rounded text-[#FF0055] focus:ring-[#FF0055] cursor-pointer"
                    />
                  </div>
                  <label className="text-[11px] text-gray-500 font-medium leading-tight pt-0.5">
                    I agree to be contacted by the team.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="button"
                  className="w-full bg-[#FF0055] hover:bg-[#e6004c] text-white font-bold text-[13px] py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_8px_16px_-6px_rgba(255,0,85,0.4)] cursor-pointer mt-3"
                >
                  Send Enquiry <ArrowRight size={16} />
                </button>

                {/* Footer Security Text */}
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-medium pt-1">
                  <Lock size={10} /> Your information is safe with us.
                </div>
              </form>
            </div>

          </div>
        </div>



      </div>
    </div>
  );
}