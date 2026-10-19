"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Users,
  ShieldCheck,
  User,
  Mail,
  LayoutGrid,
  MessageSquare,
  ChevronDown,
  Lock,
  ArrowRight
} from "lucide-react";
import { useSubmitEnquiry } from "@/hooks/useSubmitEnquiry";
import SuccessMessage from "@/components/ui/SuccessMessage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [phoneError, setPhoneError] = useState<string | null>(null);

  // Custom Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const servicesList = [
    { id: "Web Development", label: "Web Development" },
    { id: "App Development", label: "App Development" },
    { id: "UI/UX Design", label: "UI/UX Design" },
    { id: "Digital Marketing", label: "Digital Marketing" },
    { id: "Other", label: "Other" },
  ];

  const {
    submitEnquiry,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    fieldErrors,
    globalError
  } = useSubmitEnquiry();

  // Close custom dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError(null);

    // Strict phone number validation
    if (formData.phone) {
      const phoneWithPlus = formData.phone.startsWith("+") ? formData.phone : `+${formData.phone}`;
      if (!isValidPhoneNumber(phoneWithPlus)) {
        setPhoneError("Please enter a valid phone number for the selected country.");
        return;
      }
    } else {
      setPhoneError("Phone number is required.");
      return;
    }

    if (!formData.service) {
      alert("Please select a service");
      return;
    }

    const success = await submitEnquiry(formData);
    if (success) {
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }
  };

  const inputClasses = "w-full pl-12 pr-4 py-3.5 bg-gray-50/50 hover:bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-xl text-gray-900 placeholder-slate-600 focus:outline-none focus:bg-white focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all text-[13px] sm:text-[15px]";

  return (
    <>
      <div id="contact" className="relative bg-[#fafbfe] text-[#030C25] py-16 sm:py-20 lg:py-20 xl:py-24 overflow-hidden border-t border-gray-100 scroll-mt-24">

        {/* Background Desk Image - Clean photo, shifted left to showcase the laptop desk setup */}
        <div className="absolute top-0 left-0 w-full lg:w-[68%] xl:w-[72%] h-full opacity-65 sm:opacity-75 lg:opacity-100 pointer-events-none z-0 overflow-hidden">
          {/* Blend to white ONLY at the right edge of the image */}
          <div className="absolute top-0 right-0 w-[32%] lg:w-[35%] h-full bg-gradient-to-r from-transparent via-[#fafbfe]/50 to-[#fafbfe] z-10 hidden lg:block" />

          {/* Mobile overlay for text readability */}
          <div className="absolute inset-0 bg-[#fafbfe]/75 lg:hidden z-10" />

          <img
            src="/images/services/web-dev/webdev-contactbg.webp"
            alt="Workspace Desk"
            className="w-full h-full object-cover object-[62%_center] lg:object-[58%_center]"
            style={{ objectPosition: '62% center' }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center mb-0">

            {/* LEFT COLUMN: Content & Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col items-start pt-2"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#FF0055] font-[750] text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] tracking-[0.25em] uppercase">ENQUIRY</span>
                <div className="w-6 h-[2px] bg-[#FF0055]"></div>
              </div>

              <h2 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] leading-[1.1] tracking-tight mb-4">
                Let's Turn Your <br />
                <span className="text-[#FF0055]">Ideas Into Reality</span>
              </h2>

              <p className="text-gray-700 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-[1.6] max-w-md mb-8">
                Have a project in mind or need expert advice? Share your details and our team will get back to you with the right solution.
              </p>

              {/* Features List */}
              <div className="flex flex-col gap-5 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-2 ring-pink-100">
                    <Rocket size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold text-[#030C25] mb-0.5">Quick Response</h4>
                    <p className="text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-relaxed text-gray-700 font-medium">We'll get back to you shortly.</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-2 ring-pink-100">
                    <Users size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold text-[#030C25] mb-0.5">Expert Consultation</h4>
                    <p className="text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-relaxed text-gray-700 font-medium">Right guidance for your needs.</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF0055] to-[#FF6699] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-[0_2px_8px_rgba(255,0,85,0.25)] ring-2 ring-pink-100">
                    <ShieldCheck size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold text-[#030C25] mb-0.5">Tailored Solutions</h4>
                    <p className="text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-relaxed text-gray-700 font-medium">Built around your business goals.</p>
                  </div>
                </motion.div>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="lg:col-span-6 lg:col-start-7 relative"
            >

              <div className="bg-white rounded-[24px] p-5 sm:p-7 lg:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-gray-100 relative z-20">

                <div className="mb-6">
                  <span className="text-[#FF0055] font-bold text-[10px] sm:text-[11px] tracking-widest uppercase mb-1.5 block">
                    SEND US AN ENQUIRY
                  </span>
                  <h3 className="text-[24px] sm:text-[32px] font-extrabold text-[#030C25] leading-tight mb-1.5">
                    We're Here to <span className="text-[#FF0055]">Help</span>
                  </h3>
                  <p className="text-gray-600 text-[13px] sm:text-[15px]">
                    Fill in the details below and our team will connect with you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {globalError && (
                    <div className="p-3 mb-2 bg-red-50 border border-red-200 text-red-600 rounded-lg text-[13px] font-medium">
                      {globalError}
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Name */}
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#FF0055]">
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClasses}
                        />
                      </div>
                      {fieldErrors.name && (
                        <p className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1">{fieldErrors.name[0]}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#FF0055]">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          type="email"
                          required
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClasses}
                        />
                      </div>
                      {fieldErrors.email && (
                        <p className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1">{fieldErrors.email[0]}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="relative international-phone-wrapper z-50">
                      <style dangerouslySetInnerHTML={{
                        __html: `
                        .international-phone-wrapper .react-tel-input .form-control {
                          width: 100%;
                          height: 48px;
                          border-radius: 12px;
                          border: 1px solid #d1d5db;
                          background-color: rgba(249, 250, 251, 0.5);
                          font-size: 14px;
                          color: #111827 !important;
                          padding-left: 56px;
                          transition: all 0.2s;
                        }
                        .international-phone-wrapper .react-tel-input .form-control:hover {
                          background-color: rgba(249, 250, 251, 1);
                          border-color: #9ca3af;
                        }
                        .international-phone-wrapper .react-tel-input .form-control:focus {
                          background-color: white;
                          border-color: #FF0055;
                          box-shadow: 0 0 0 1px #FF0055;
                        }
                        .international-phone-wrapper .react-tel-input .flag-dropdown {
                          border: none;
                          background: transparent;
                          border-radius: 12px 0 0 12px;
                          padding-left: 8px;
                        }
                        .international-phone-wrapper .react-tel-input .flag-dropdown:hover {
                          background: transparent;
                        }
                        .international-phone-wrapper .react-tel-input .selected-flag {
                          border-radius: 12px 0 0 12px;
                          background: transparent !important;
                        }
                        .international-phone-wrapper .react-tel-input .selected-flag:hover, 
                        .international-phone-wrapper .react-tel-input .selected-flag:focus {
                          background: transparent !important;
                        }
                        .international-phone-wrapper .react-tel-input .country-list {
                          border-radius: 12px;
                          border: 1px solid #e5e7eb;
                          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                          margin-top: 8px;
                          width: 280px;
                          z-index: 50 !important;
                        }
                        .international-phone-wrapper .react-tel-input .country-list .search {
                          background-color: #f9fafb;
                          padding: 10px 12px;
                          border-bottom: 1px solid #e5e7eb;
                          border-radius: 12px 12px 0 0;
                        }
                        .international-phone-wrapper .react-tel-input .country-list .search-box {
                          width: 100%;
                          margin: 0;
                          padding: 8px 12px;
                          border: 1px solid #d1d5db;
                          border-radius: 8px;
                          font-size: 13px;
                          background: white;
                          color: #111827 !important;
                        }
                        .international-phone-wrapper .react-tel-input .country-list .search-box:focus {
                          border-color: #FF0055;
                          outline: none;
                        }
                        .international-phone-wrapper .react-tel-input .country-list .search-emoji {
                          display: none !important;
                        }
                        .international-phone-wrapper .react-tel-input .country-list .country {
                          padding: 10px 12px;
                        }
                        .international-phone-wrapper .react-tel-input .country-list .country:hover {
                          background-color: #fef1f5;
                        }
                        .international-phone-wrapper .react-tel-input .country-list .country.highlight {
                          background-color: #fef1f5;
                        }
                        .international-phone-wrapper .react-tel-input .country-list .country-name {
                          color: #374151 !important;
                          font-size: 14px;
                          margin-right: 6px;
                        }
                        .international-phone-wrapper .react-tel-input .country-list .dial-code {
                          color: #6b7280 !important;
                          font-size: 13px;
                        }
                      `}} />
                      <PhoneInput
                        country={"in"}
                        enableSearch={true}
                        value={formData.phone}
                        onChange={(phone) => setFormData({ ...formData, phone })}
                        containerClass="w-full"
                        inputProps={{
                          required: true,
                        }}
                      />
                    </div>
                    {(phoneError || fieldErrors.phone) && (
                      <p className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1">
                        {phoneError || fieldErrors.phone?.[0]}
                      </p>
                    )}
                  </div>

                  {/* Service Custom Dropdown */}
                  <div>
                    <div className="relative" ref={dropdownRef}>
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#FF0055] z-10">
                        <LayoutGrid className="w-5 h-5" />
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full pl-12 pr-10 py-3.5 bg-gray-50/50 hover:bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-xl focus:outline-none focus:bg-white focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all text-left appearance-none text-[13px] sm:text-[15px] ${formData.service === "" ? "text-slate-600" : "text-gray-900"}`}
                      >
                        {formData.service ? servicesList.find(s => s.id === formData.service)?.label : "Service Interested In *"}
                      </button>

                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500 z-10">
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                      </div>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden z-50"
                          >
                            {servicesList.map((service) => (
                              <button
                                key={service.id}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, service: service.id });
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full text-left px-5 py-3.5 hover:bg-[#FF0055]/5 hover:text-[#FF0055] text-gray-700 text-[13px] sm:text-[15px] transition-colors border-b border-gray-100 last:border-none"
                              >
                                {service.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {fieldErrors.service && (
                      <p className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1">{fieldErrors.service[0]}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <div className="relative">
                      <div className="absolute top-4 left-0 pl-4 flex items-center pointer-events-none text-[#FF0055]">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        required
                        rows={4}
                        maxLength={500}
                        placeholder="Tell us about your project or requirements *"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-12 p-4 bg-gray-50/50 hover:bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-xl text-gray-900 placeholder-slate-600 focus:outline-none focus:bg-white focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all resize-none text-[13px] sm:text-[15px]"
                      />
                      <div className="absolute bottom-3 right-4 text-[11px] text-gray-500 font-medium">
                        {formData.message.length}/500
                      </div>
                    </div>
                    {fieldErrors.message && (
                      <p className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1">{fieldErrors.message[0]}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white py-[14px] rounded-xl font-bold text-[14px] sm:text-[16px] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(255,0,85,0.25)] hover:shadow-[0_6px_20px_rgba(255,0,85,0.35)]"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                  </button>

                  {/* Security Note */}
                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-gray-500">
                    <Lock className="w-[14px] h-[14px]" />
                    <span>Your information is safe with us.</span>
                  </div>
                </form>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      <SuccessMessage
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
        type="enquiry"
      />
    </>
  );
}
