"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

interface SuccessMessageProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'enquiry' | 'consultation' | 'demo';
}

export default function SuccessMessage({ isOpen, onClose, type = 'enquiry' }: SuccessMessageProps) {
  const successTexts = {
    enquiry: "Thank you for reaching out to us. Your enquiry has been received and our team will get back to you shortly.",
    consultation: "Your consultation request has been received. Our team will contact you shortly to schedule a convenient time.",
    demo: "Your demo request has been received. Our team will contact you shortly to set up your personalized demo."
  };

  const message = successTexts[type] || successTexts.enquiry;
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020205]/60 backdrop-blur-sm"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white w-full max-w-sm rounded-2xl p-6 sm:p-8 text-center shadow-2xl flex flex-col items-center mx-4"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2, damping: 15 }}
              className="w-20 h-20 bg-[#FF0055]/10 text-[#FF0055] rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle2 className="w-10 h-10" />
            </motion.div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-8 text-[14px] sm:text-[15px] leading-relaxed">
              {message}
            </p>

            <button 
              onClick={onClose}
              className="w-full py-3.5 bg-[#FF0055] hover:bg-[#E6004C] text-white rounded-xl font-bold transition-all active:scale-[0.98] shadow-[0_4px_14px_0_rgba(255,0,85,0.25)] hover:shadow-[0_6px_20px_rgba(255,0,85,0.35)]"
            >
              Done
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
