"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, LayoutGrid, MessageSquare, ChevronDown, Lock, ArrowRight, X } from 'lucide-react';
import { useSubmitEnquiry } from '@/hooks/useSubmitEnquiry';
import SuccessMessage from '@/components/ui/SuccessMessage';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';

export type ModalType = 'enquiry' | 'consultation' | 'demo';

export default function ConsultationModal({ request }: { request?: { type: ModalType; sequence: number } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('enquiry');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [phoneError, setPhoneError] = useState<string | null>(null);

  // Custom Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const servicesList = [
    { id: 'Web Development', label: 'Web Development' },
    { id: 'App Development', label: 'App Development' },
    { id: 'UI/UX Design', label: 'UI/UX Design' },
    { id: 'Digital Marketing', label: 'Digital Marketing' },
    { id: 'Other', label: 'Other' },
  ];

  const { 
    submitEnquiry, 
    isSubmitting, 
    isSuccess, 
    setIsSuccess,
    fieldErrors, 
    globalError 
  } = useSubmitEnquiry();

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

  useEffect(() => {
    if (request) { setModalType(request.type); setIsOpen(true); }
  }, [request]);

  // Prevent background scrolling when modal is open, pause Lenis smooth scroll, and handle history API
  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      // 1. Pause Lenis smooth scrolling if active
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      lenis?.stop();

      // 2. Lock both documentElement and body scrolling
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      // Push state only if we haven't already pushed it
      if (!window.history.state || window.history.state.modal !== 'consultation') {
        window.history.pushState({ modal: 'consultation' }, '');
      }
      window.addEventListener('popstate', handlePopState);

      return () => {
        lenis?.start();
        document.documentElement.style.overflow = originalHtmlOverflow || '';
        document.body.style.overflow = originalBodyOverflow || '';
        window.removeEventListener('popstate', handlePopState);
      };
    } else {
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      lenis?.start();
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('popstate', handlePopState);
      // Clean up the history state if it was closed via UI button instead of back button
      if (window.history.state && window.history.state.modal === 'consultation') {
        window.history.back();
      }
    }

    return () => {
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      lenis?.start();
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError(null);
    
    // Strict phone number validation
    if (formData.phone) {
      const phoneWithPlus = formData.phone.startsWith('+') ? formData.phone : `+${formData.phone}`;
      if (!isValidPhoneNumber(phoneWithPlus)) {
        setPhoneError("Please enter a valid phone number for the selected country.");
        return;
      }
    } else {
      setPhoneError("Phone number is required.");
      return;
    }

    if (!formData.service) {
      // Small manual validation since custom dropdown isn't a native required input
      alert("Please select a service");
      return;
    }
    
    const success = await submitEnquiry(formData);
    if (success) {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsOpen(false);
    }
  };

  const inputClasses = "w-full pl-12 pr-4 py-3.5 bg-gray-50/50 hover:bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-xl text-gray-900 placeholder-slate-600 focus:outline-none focus:bg-white focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all text-[13px] sm:text-[15px]";

  const modalContent = {
    enquiry: {
      subtitle: "Send Us An Enquiry",
      titleStart: "We're Here to ",
      titleHighlight: "Help",
      buttonLabel: "Send Enquiry"
    },
    consultation: {
      subtitle: "Book A Free Consultation",
      titleStart: "We're Here to ",
      titleHighlight: "Help",
      buttonLabel: "Book Consultation"
    },
    demo: {
      subtitle: "Book A Demo",
      titleStart: "We're Here to ",
      titleHighlight: "Help",
      buttonLabel: "Book Demo"
    }
  };

  const content = modalContent[modalType];

  return (
    <>
      <AnimatePresence>
      {isOpen && (
        <div 
          data-lenis-prevent="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6 overscroll-contain"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#020205] sm:bg-black/60 sm:backdrop-blur-sm"
          />

          {/* Modal Content Wrapper */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="relative w-full h-full sm:h-auto max-w-[600px] bg-white rounded-none sm:rounded-[24px] overflow-hidden flex flex-col sm:max-h-[90vh] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
          >
            {/* Inner Content Container */}
            <div className="relative z-10 w-full h-full bg-white rounded-none sm:rounded-[24px] overflow-hidden flex flex-col min-h-0 sm:max-h-[90vh]">
              
              {/* Close Button */}
              <button aria-label="Close consultation form"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-20 shadow-sm cursor-pointer"
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </button>

              <div 
                data-lenis-prevent="true"
                className="overflow-y-auto flex-1 min-h-0 p-5 sm:p-8 custom-scrollbar overscroll-contain"
              >
                <div className="mb-6 sm:mb-8 pt-4 sm:pt-0 pr-8 sm:pr-0">
                  <span className="text-[#FF0055] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mb-2 block">
                    {content.subtitle}
                  </span>
                  <h2 className="text-[24px] sm:text-[40px] font-extrabold text-[#020205] tracking-tight mb-2 leading-tight">
                    {content.titleStart} <span className="text-[#FF0055]">{content.titleHighlight}</span>
                  </h2>
                  <p className="text-gray-700 text-[12px] sm:text-[15px]">
                    Fill in the details below and our team will connect with you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 pb-4 sm:pb-0">
                  {globalError && (
                    <div className="p-3 mb-2 bg-red-50 border border-red-200 text-red-600 rounded-lg text-[13px] font-medium">
                      {globalError}
                    </div>
                  )}
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
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className={inputClasses}
                        />
                      </div>
                      {fieldErrors.name && <p className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1">{fieldErrors.name[0]}</p>}
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
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className={inputClasses}
                        />
                      </div>
                      {fieldErrors.email && <p className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1">{fieldErrors.email[0]}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="relative international-phone-wrapper z-50">
                      <style dangerouslySetInnerHTML={{__html: `
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
                        country={'in'}
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

                  {/* Service */}
                  <div>
                    <div className="relative" ref={dropdownRef}>
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#FF0055] z-10">
                        <LayoutGrid className="w-5 h-5" />
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full pl-12 pr-10 py-3.5 bg-gray-50/50 hover:bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-xl focus:outline-none focus:bg-white focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all text-left appearance-none text-[13px] sm:text-[15px] ${formData.service === '' ? 'text-slate-600' : 'text-gray-900'}`}
                      >
                        {formData.service ? servicesList.find(s => s.id === formData.service)?.label : 'Service Interested In *'}
                      </button>
                      
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500 z-10">
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
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
                    {fieldErrors.service && <p className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1">{fieldErrors.service[0]}</p>}
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
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full pl-12 p-4 bg-gray-50/50 hover:bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-xl text-gray-900 placeholder-slate-600 focus:outline-none focus:bg-white focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all resize-none text-[13px] sm:text-[15px]"
                    />
                      <div className="absolute bottom-3 right-4 text-[11px] text-gray-500 font-medium">
                        {formData.message.length}/500
                      </div>
                    </div>
                    {fieldErrors.message && <p className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1">{fieldErrors.message[0]}</p>}
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="cursor-pointer w-full mt-4 flex items-center justify-center gap-2 bg-[#FF0055] hover:bg-[#E6004C] text-white py-[14px] rounded-xl font-bold text-[14px] sm:text-[16px] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(255,0,85,0.25)] hover:shadow-[0_6px_20px_rgba(255,0,85,0.35)]"
                  >
                    <span>{isSubmitting ? 'Sending...' : content.buttonLabel}</span>
                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                  </button>

                  {/* Footer Note */}
                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-gray-500">
                    <Lock className="w-[14px] h-[14px]" />
                    <span>Your information is safe with us.</span>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>

    <SuccessMessage 
      isOpen={isSuccess} 
      onClose={() => setIsSuccess(false)} 
      type={modalType}
    />
    </>
  );
}

