"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, LayoutGrid, MessageSquare, ChevronDown, Lock, ArrowRight, X } from 'lucide-react';

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-consultation-modal', handleOpen);
    return () => window.removeEventListener('open-consultation-modal', handleOpen);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Dummy API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      alert("Thank you for your interest! 🚀\n\nPlease note: Our website is currently in its testing phase and this form is not yet active. To book a consultation, please contact us directly via phone or email.");
    }, 1500);
  };

  const inputClasses = "w-full pl-12 pr-4 py-3.5 bg-gray-50/50 hover:bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-xl text-gray-900 placeholder-slate-600 focus:outline-none focus:bg-white focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all text-[13px] sm:text-[15px]";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#020205] sm:bg-black/60 sm:backdrop-blur-sm"
          />

          {/* Modal Content Wrapper (with 2px padding for animated border on desktop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="relative w-full h-full sm:h-auto max-w-[600px] rounded-none sm:rounded-[24px] overflow-hidden flex flex-col sm:max-h-[90vh] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] p-0 sm:p-[2px]"
          >
            {/* Animated Rotating Gradient Background */}
            <div className="hidden sm:block absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_140deg,#FF0055_180deg,transparent_180deg_320deg,#FF0055_360deg)] z-0" />

            {/* Inner Content Container */}
            <div className="relative z-10 w-full h-full bg-white rounded-none sm:rounded-[22px] overflow-hidden flex flex-col">
              
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-20 shadow-sm"
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </button>

              <div className="overflow-y-auto p-5 sm:p-8 custom-scrollbar">
                <div className="mb-6 sm:mb-8 pt-4 sm:pt-0 pr-8 sm:pr-0">
                  <span className="text-[#FF0055] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mb-2 block">
                    Send Us An Enquiry
                  </span>
                  <h2 className="text-[24px] sm:text-[40px] font-extrabold text-[#020205] tracking-tight mb-2 leading-tight">
                    We're Here to <span className="text-[#FF0055]">Help</span>
                  </h2>
                  <p className="text-gray-700 text-[12px] sm:text-[15px]">
                    Fill in the details below and our team will connect with you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 pb-4 sm:pb-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Name */}
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

                    {/* Email */}
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
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#FF0055]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input 
                      type="tel" 
                      required
                      placeholder="Your Phone *"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className={inputClasses}
                    />
                  </div>

                  {/* Service */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#FF0055]">
                      <LayoutGrid className="w-5 h-5" />
                    </div>
                    <select 
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className={`w-full pl-12 pr-10 py-3.5 bg-gray-50/50 hover:bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-xl focus:outline-none focus:bg-white focus:border-[#FF0055] focus:ring-1 focus:ring-[#FF0055] transition-all appearance-none cursor-pointer text-[13px] sm:text-[15px] ${formData.service === '' ? 'text-slate-600' : 'text-gray-900'}`}
                    >
                      <option value="" disabled hidden>Service Interested In *</option>
                      <option value="web">Web Development</option>
                      <option value="app">App Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Message */}
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

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-[#FF0055] hover:bg-[#E6004C] text-white py-[14px] rounded-xl font-bold text-[14px] sm:text-[16px] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(255,0,85,0.25)] hover:shadow-[0_6px_20px_rgba(255,0,85,0.35)]"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
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
  );
}
