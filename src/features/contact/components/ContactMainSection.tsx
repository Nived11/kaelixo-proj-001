"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  LayoutGrid,
  MessageSquare,
  ShieldCheck,
  Users,
  ArrowRight,
  MapPin,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Lock,
} from "lucide-react";
import { useSubmitEnquiry } from "@/hooks/useSubmitEnquiry";
import SuccessMessage from "@/components/ui/SuccessMessage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

const SERVICES_LIST = [
  { id: "Web Development", label: "Web Development" },
  { id: "App Development", label: "App Development" },
  { id: "UI/UX Design", label: "UI/UX Design" },
  { id: "Digital Marketing", label: "Digital Marketing" },
  { id: "Custom Software & CRM", label: "Custom Software & CRM" },
  { id: "Other", label: "Other" },
];

const FAQ_FEATURES = [
  {
    title: "Quick Response",
    desc: "We typically reply within 24 hours.",
    icon: MessageSquare,
  },
  {
    title: "Free Consultation",
    desc: "No commitment, clear initial guidance.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Proposals",
    desc: "Honest pricing and realistic timelines.",
    icon: Users,
  },
];

const FAQS_LIST = [
  {
    question: "How quickly will your team respond to my inquiry?",
    answer:
      "Our team reviews all incoming inquiries promptly. You will typically hear back from a dedicated project lead within 24 hours (or the next business day) to discuss your requirements or schedule a brief discovery call.",
  },
  {
    question: "How do you provide a project quotation or estimate?",
    answer:
      "Once we understand your goals, target audience, and scope of work, we prepare a transparent proposal detailing deliverables, architecture, milestones, and realistic timelines tailored to your budget.",
  },
  {
    question: "Do you collaborate with international clients?",
    answer:
      "Yes, absolutely. We work with startups and growing brands across the Middle East, Europe, North America, and India with reliable async workflows, clear updates, and structured milestone reviews.",
  },
  {
    question: "Can we sign an NDA before sharing project details?",
    answer:
      "Yes. We take client confidentiality and intellectual property seriously. We are always glad to review and execute a mutual Non-Disclosure Agreement before discussing any proprietary ideas.",
  },
];

export default function ContactMainSection() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState<string | null>(null);

  // Custom Dropdown State for Service
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Enquiry Submission Hook (Same as Consultation Modal)
  const {
    submitEnquiry,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    fieldErrors,
    globalError,
  } = useSubmitEnquiry();

  // Close service dropdown on click outside
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

  // FAQ Accordion State (first item open by default)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError(null);

    // Phone number validation using libphonenumber-js
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
      alert("Please select a service you are interested in.");
      return;
    }

    const success = await submitEnquiry(formData);
    if (success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <>
      <section
        id="contact-form"
        className="relative z-20 -mt-8 overflow-hidden rounded-t-[32px] sm:rounded-t-[40px] border-t border-[#e9eef7] bg-white pt-10 sm:pt-14 pb-16 sm:pb-24 shadow-[0_-12px_32px_rgba(0,0,0,0.12)] text-[#07080c] max-md:rounded-t-[28px]"
        style={{
          transform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* ============================================================ */}
          {/* TOP ROW: FORM (LEFT) & OFFICE / CREATIVE CARDS (RIGHT)        */}
          {/* ============================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start mb-20 sm:mb-24">
            {/* ============================================================ */}
            {/* LEFT COLUMN: SEND A MESSAGE FORM CARD                        */}
            {/* ============================================================ */}
            <div className="lg:col-span-6 xl:col-span-6 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-[13px] sm:text-[14px] font-bold text-[#FF0055] tracking-[0.2em] uppercase font-heading">
                  SEND A MESSAGE
                </span>
                <span className="w-8 sm:w-10 h-[2px] bg-[#FF0055] rounded-full inline-block" />
              </div>

              {/* Headline */}
              <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold text-[#0A1024] tracking-tight font-heading leading-tight mb-2">
                Tell Us About <span className="text-[#FF0055]">Your Project</span>
              </h2>

              {/* Subtitle */}
              <p className="text-gray-500 text-[14px] sm:text-[15px] font-normal leading-relaxed mb-6 sm:mb-7 font-sans">
                Fill in the details below and our team will connect with you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
                {/* Global Error Banner */}
                {globalError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs sm:text-sm font-medium">
                    {globalError}
                  </div>
                )}

                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-heading">
                      Your Name <span className="text-[#FF0055]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FF0055]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-slate-900 text-sm placeholder:text-slate-600 placeholder:font-medium focus:outline-none focus:border-[#FF0055] focus:ring-2 focus:ring-[#FF0055]/10 transition-all font-sans"
                      />
                    </div>
                    {fieldErrors.name && (
                      <p className="text-red-500 text-[11px] sm:text-xs mt-1 pl-1">
                        {fieldErrors.name[0]}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-heading">
                      Your Email <span className="text-[#FF0055]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FF0055]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@kaelixo.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-slate-900 text-sm placeholder:text-slate-600 placeholder:font-medium focus:outline-none focus:border-[#FF0055] focus:ring-2 focus:ring-[#FF0055]/10 transition-all font-sans"
                      />
                    </div>
                    {fieldErrors.email && (
                      <p className="text-red-500 text-[11px] sm:text-xs mt-1 pl-1">
                        {fieldErrors.email[0]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone Input and Service Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Input with Country Code */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-heading">
                      Phone Number <span className="text-[#FF0055]">*</span>
                    </label>
                    <div className="relative international-phone-wrapper z-40">
                      <style
                        dangerouslySetInnerHTML={{
                          __html: `
                            .international-phone-wrapper .react-tel-input .form-control {
                              width: 100%;
                              height: 46px;
                              border-radius: 12px;
                              border: 1px solid #e2e8f0;
                              background-color: rgba(248, 250, 252, 0.6);
                              font-size: 14px;
                              color: #0f172a !important;
                              padding-left: 50px;
                              transition: all 0.2s;
                            }
                            .international-phone-wrapper .react-tel-input .form-control:hover {
                              background-color: #ffffff;
                              border-color: #cbd5e1;
                            }
                            .international-phone-wrapper .react-tel-input .form-control:focus {
                              background-color: #ffffff;
                              border-color: #FF0055;
                              box-shadow: 0 0 0 2px rgba(255, 0, 85, 0.1);
                              outline: none;
                            }
                            .international-phone-wrapper .react-tel-input .flag-dropdown {
                              border: none;
                              background: transparent;
                              border-radius: 12px 0 0 12px;
                              padding-left: 6px;
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
                              border: 1px solid #e2e8f0;
                              box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                              margin-top: 8px;
                              width: 280px;
                              z-index: 50 !important;
                            }
                            .international-phone-wrapper .react-tel-input .country-list .search {
                              background-color: #f8fafc;
                              padding: 8px 10px;
                              border-bottom: 1px solid #e2e8f0;
                              border-radius: 12px 12px 0 0;
                            }
                            .international-phone-wrapper .react-tel-input .country-list .search-box {
                              width: 100%;
                              margin: 0;
                              padding: 6px 10px;
                              border: 1px solid #cbd5e1;
                              border-radius: 8px;
                              font-size: 13px;
                              background: white;
                              color: #0f172a !important;
                            }
                            .international-phone-wrapper .react-tel-input .country-list .search-box:focus {
                              border-color: #FF0055;
                              outline: none;
                            }
                            .international-phone-wrapper .react-tel-input .country-list .search-emoji {
                              display: none !important;
                            }
                            .international-phone-wrapper .react-tel-input .country-list .country {
                              padding: 8px 12px;
                            }
                            .international-phone-wrapper .react-tel-input .country-list .country:hover {
                              background-color: #fef1f5;
                            }
                            .international-phone-wrapper .react-tel-input .country-list .country.highlight {
                              background-color: #fef1f5;
                            }
                            .international-phone-wrapper .react-tel-input .country-list .country-name {
                              color: #334155 !important;
                              font-size: 13px;
                              margin-right: 6px;
                            }
                            .international-phone-wrapper .react-tel-input .country-list .dial-code {
                              color: #64748b !important;
                              font-size: 12px;
                            }
                            .international-phone-wrapper .react-tel-input .form-control::placeholder {
                              color: #475569 !important;
                              font-weight: 500 !important;
                              opacity: 1 !important;
                            }
                            .international-phone-wrapper .react-tel-input .form-control::-webkit-input-placeholder {
                              color: #475569 !important;
                              font-weight: 500 !important;
                              opacity: 1 !important;
                            }
                          `,
                        }}
                      />
                      <PhoneInput
                        country={"in"}
                        enableSearch={true}
                        value={formData.phone}
                        onChange={(phone) => {
                          setFormData({ ...formData, phone });
                          if (phoneError) setPhoneError(null);
                        }}
                        containerClass="w-full"
                        inputProps={{
                          required: true,
                          placeholder: "Phone Number *",
                        }}
                      />
                    </div>
                    {(phoneError || fieldErrors.phone) && (
                      <p className="text-red-500 text-[11px] sm:text-xs mt-1 pl-1">
                        {phoneError || fieldErrors.phone?.[0]}
                      </p>
                    )}
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-heading">
                      Service Interested In <span className="text-[#FF0055]">*</span>
                    </label>
                    <div className="relative z-30" ref={dropdownRef}>
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FF0055] z-10">
                        <LayoutGrid className="w-4 h-4" />
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full pl-10 pr-9 py-3 bg-slate-50/60 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-xl focus:outline-none focus:bg-white focus:border-[#FF0055] focus:ring-2 focus:ring-[#FF0055]/10 transition-all text-left appearance-none text-sm cursor-pointer ${
                          formData.service === "" ? "text-slate-600 font-medium" : "text-slate-900 font-semibold"
                        }`}
                      >
                        {formData.service
                          ? SERVICES_LIST.find((s) => s.id === formData.service)?.label
                          : "Select a Service *"}
                      </button>

                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 z-10">
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.1)] overflow-hidden z-50 py-1"
                          >
                            {SERVICES_LIST.map((service) => (
                              <button
                                key={service.id}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, service: service.id });
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full text-left px-4 py-2.5 hover:bg-[#FF0055]/5 hover:text-[#FF0055] text-slate-700 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                              >
                                {service.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {fieldErrors.service && (
                      <p className="text-red-500 text-[11px] sm:text-xs mt-1 pl-1">
                        {fieldErrors.service[0]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-heading">
                    Your Message <span className="text-[#FF0055]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#FF0055]">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      required
                      rows={4}
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, goals or any questions..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-slate-900 text-sm placeholder:text-slate-600 placeholder:font-medium focus:outline-none focus:border-[#FF0055] focus:ring-2 focus:ring-[#FF0055]/10 transition-all resize-none font-sans"
                    />
                    <div className="absolute bottom-2.5 right-3 text-[11px] text-slate-400 font-medium">
                      {formData.message.length}/500
                    </div>
                  </div>
                  {fieldErrors.message && (
                    <p className="text-red-500 text-[11px] sm:text-xs mt-1 pl-1">
                      {fieldErrors.message[0]}
                    </p>
                  )}
                </div>

                {/* Submit Button & Security Note */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white text-[15px] font-semibold tracking-wide shadow-[0_0_20px_rgba(255,0,85,0.35)] hover:shadow-[0_0_30px_rgba(255,0,85,0.55)] active:scale-95 transition-all duration-300 cursor-pointer font-heading disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-sans">
                    <Lock className="w-3.5 h-3.5 text-[#FF0055]" />
                    <span>Your information is safe with us.</span>
                  </div>
                </div>
              </form>
            </div>

            {/* ============================================================ */}
            {/* RIGHT COLUMN: IDEAS CARD, OFFICE MAP & CONTACT DETAILS       */}
            {/* ============================================================ */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-6">
              {/* 1. TOP CARD: Ideas Into Impact (Dark Card with Workspace Photo) */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0a040b] border border-white/10 p-7 sm:p-8 text-white min-h-[210px] flex flex-col justify-end shadow-[0_15px_35px_rgba(0,0,0,0.18)] group">
                {/* Workspace Background Image */}
                <Image
                  src="/images/about/team-workspace.webp"
                  alt="Kaelixo Workspace"
                  fill
                  className="object-cover object-center opacity-45 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050106] via-[#050106]/70 to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-md">
                  <span className="text-[11px] sm:text-[12px] font-bold text-white/80 tracking-[0.22em] uppercase font-heading mb-1 inline-block">
                    LET&apos;S CREATE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight mb-2">
                    Ideas Into <span className="text-[#FF0055]">Impact.</span>
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-normal leading-relaxed font-sans">
                    Whether you&apos;re a startup, an established business or just exploring ideas, we&apos;re here to turn your vision into reality.
                  </p>
                </div>
              </div>

              {/* 2. MIDDLE CARD: Our Office with Real Map Embed */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Left Info */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold text-[#FF0055] tracking-widest uppercase font-heading">
                      FIND US HERE
                    </span>
                    <span className="w-5 h-[1.5px] bg-[#FF0055] rounded-full inline-block" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-3">
                    Our Office
                  </h4>
                  <div className="flex items-start gap-3 text-slate-600 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#FF0055] mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="leading-snug">
                      <strong className="font-bold text-slate-900 block text-sm mb-0.5">
                        Kaelixo Pvt. Ltd.
                      </strong>
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                        1st Floor, Maveli Arcade, Metro Pillar No. 800,<br />
                        S A Road, Kadavanthra, Kochi – 682020
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps?q=9.967592,76.303050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#FF0055]/30 hover:border-[#FF0055] bg-pink-50/50 hover:bg-[#FF0055] text-[#FF0055] hover:text-white text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer font-heading"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Right Real Google Map Embed */}
                <div className="w-full md:w-[240px] lg:w-[260px] h-[165px] rounded-xl overflow-hidden border border-slate-200 shadow-xs shrink-0 bg-slate-100">
                  <iframe
                    title="Kaelixo Office Location"
                    src="https://maps.google.com/maps?q=9.967592,76.303050&hl=en&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* 3. BOTTOM ROW: Email Us & Call Us Quick Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Card */}
                <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-4.5 flex items-start gap-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#FF0055]/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-pink-100/70 border border-pink-200/80 text-[#FF0055] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-[12px] font-bold text-[#FF0055] tracking-widest uppercase font-heading">
                        Email Us
                      </span>
                      <span className="w-3.5 h-[1.5px] bg-[#FF0055] rounded-full inline-block" />
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-slate-700 font-semibold shrink-0">General:</span>
                        <a
                          href="mailto:info@kaelixo.com"
                          className="font-bold text-[#0A1024] hover:text-[#FF0055] transition-colors font-sans truncate"
                        >
                          info@kaelixo.com
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-slate-700 font-semibold shrink-0">Response:</span>
                        <span className="text-slate-700 font-medium truncate">Within 24 business hours</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call Us Card */}
                <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-4.5 flex items-start gap-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#FF0055]/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-pink-100/70 border border-pink-200/80 text-[#FF0055] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-[12px] font-bold text-[#FF0055] tracking-widest uppercase font-heading">
                        Call Us
                      </span>
                      <span className="w-3.5 h-[1.5px] bg-[#FF0055] rounded-full inline-block" />
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-slate-700 font-semibold shrink-0">General:</span>
                        <a
                          href="tel:+919037235832"
                          className="font-bold text-[#0A1024] hover:text-[#FF0055] transition-colors font-sans truncate"
                        >
                          +91 90372 35832
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-slate-700 font-semibold shrink-0">Sales:</span>
                        <a
                          href="tel:+918086370404"
                          className="font-bold text-[#0A1024] hover:text-[#FF0055] transition-colors font-sans truncate"
                        >
                          +91 80863 70404
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* BOTTOM SECTION: GOT QUESTIONS? WE'VE GOT ANSWERS (FAQS)      */}
          {/* ============================================================ */}
          <div className="pt-12 sm:pt-16 border-t border-gray-100">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start">
              {/* LEFT COLUMN: Title & Features List Tailored for Contact Page */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="xl:col-span-5 flex flex-col items-start w-full"
              >
                {/* Eyebrow */}
                <div className="mb-3 sm:mb-4">
                  <span className="text-gray-700 font-[750] text-[13px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[17px] tracking-[0.2em] uppercase font-heading">
                    FREQUENTLY ASKED{" "}
                    <span className="inline-flex items-center gap-3 whitespace-nowrap">
                      QUESTIONS
                      <span className="inline-block w-8 h-[2px] bg-[#FF0055] shrink-0" />
                    </span>
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[42px] font-[750] leading-[1.16] tracking-tight mb-4 sm:mb-5 font-heading">
                  <span className="block sm:inline">Got Questions? </span>
                  <span className="block text-[#FF0055]">We&apos;ve Got Answers.</span>
                </h2>

                {/* Description - Tailored for Contacting Kaelixo */}
                <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] max-w-xl mb-7 sm:mb-8 xl:mb-10 font-sans">
                  Everything you need to know about getting in touch, project estimates, and starting your collaboration with Kaelixo.
                </p>

                {/* Features List */}
                <div className="flex flex-col gap-5 sm:gap-6 w-full">
                  {FAQ_FEATURES.map((feature, idx) => (
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
                        <h4 className="text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold text-[#030C25] leading-tight font-heading">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed text-gray-600 font-medium pl-12 sm:pl-[52px] font-sans">
                        {feature.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT COLUMN: Contact-Focused FAQ Accordion (4 essential questions) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="xl:col-span-7 flex flex-col gap-3 w-full"
              >
                {FAQS_LIST.map((faq, index) => {
                  const isOpen = openIndex === index;
                  const formattedNumber = (index + 1).toString().padStart(2, "0");

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      onClick={() => toggleFAQ(index)}
                      className={`border rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "border-[#FF0055]/30 bg-gradient-to-r from-rose-50/60 to-pink-50/40 shadow-sm"
                          : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]"
                      }`}
                    >
                      <div className="p-4 sm:p-4.5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {/* Number Badge */}
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 transition-all ${
                              isOpen
                                ? "bg-gradient-to-r from-[#80002A] to-[#FF0055] text-white shadow-md shadow-pink-300"
                                : "bg-rose-50 text-[#FF0055] border border-pink-200/80 font-extrabold"
                            }`}
                          >
                            {formattedNumber}
                          </div>

                          {/* Question Text */}
                          <h3
                            className={`text-[15px] sm:text-[16px] lg:text-[17px] font-bold transition-colors font-heading ${
                              isOpen ? "text-[#030C25]" : "text-[#030C25]"
                            }`}
                          >
                            {faq.question}
                          </h3>
                        </div>

                        {/* Chevron Icon */}
                        <div
                          className={`shrink-0 transition-transform duration-300 ${
                            isOpen ? "text-[#FF0055]" : "text-gray-400"
                          }`}
                        >
                          {isOpen ? (
                            <ChevronUp size={18} strokeWidth={2.5} />
                          ) : (
                            <ChevronDown size={18} strokeWidth={2.5} />
                          )}
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
                            <div className="pb-5 sm:pb-6 pt-0 pl-[56px] sm:pl-[60px] pr-4 sm:pr-6">
                              <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed text-[#475569] font-medium font-sans">
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
      </section>

      {/* Success Modal Popup matching Consultation Modal */}
      <SuccessMessage
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
        type="enquiry"
      />
    </>
  );
}
