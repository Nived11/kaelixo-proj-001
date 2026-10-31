"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF, FaXTwitter, FaBehance, FaThreads, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on dedicated full-screen /about/team page
  if (pathname === "/about/team") {
    return null;
  }

  return (
    <footer className="bg-[#050914] text-slate-400 font-sans border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-8">
        
        {/* Top Section: Links & Connect */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 pb-12">
          
          {/* 1. Brand Logo & Tagline */}
          <div className="w-full lg:w-[20%] flex flex-col items-start gap-3.5">
            <Link href="/" className="block">
              <Image 
                src="/images/brand/kaelixo-logo.webp" 
                alt="Kaelixo Logo" 
                width={150}
                height={41}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-[15px] sm:text-[15px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-gray-400 font-medium tracking-wide">
              Think clearly. Build intelligently. Grow confidently. A technology and growth marketing agency that turns bold ideas into real, measurable impact, together, always.
            </p>
          </div>

          {/* 2. Links Columns */}
          <div className="w-full lg:w-[78%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-4 lg:gap-2">
            
            {/* Kaelixo */}
            <div className="sm:col-span-1 md:col-span-2">
              <h4 className="text-white font-semibold text-[18px] mb-4">Kaelixo</h4>
              <ul className="space-y-3 text-[15px] sm:text-[15px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-medium">
                <li><Link href="/about" className="hover:text-[#FF0055] transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Services</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Industries</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Works</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF0055] transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Services */}
            <div className="sm:col-span-1 md:col-span-3">
              <h4 className="text-white font-semibold text-[18px] mb-4">Services</h4>
              <ul className="space-y-3 text-[15px] sm:text-[15px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-medium">
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Branding</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Experience Design</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Technology</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="sm:col-span-1 md:col-span-3">
              <h4 className="text-white font-semibold text-[18px] mb-4">Resources</h4>
              <ul className="space-y-3 text-[15px] sm:text-[15px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-medium">
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Insights</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Blogs</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Events</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Testimonials</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Our Clients</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Submit Feedback</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Download Brochure</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Sitemap</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="sm:col-span-1 md:col-span-4 flex flex-col">
              <h4 className="text-white font-semibold text-[18px] mb-4">Connect</h4>
              <div className="space-y-4 text-[15px] sm:text-[15px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-medium leading-relaxed">
                <div>
                  <strong className="text-white font-semibold block">Kaelixo Pvt. Ltd.</strong>
                  1st Floor, Maveli Arcade, Metro Pillar<br />
                  No. 800, S A Road, Kadavanthra,<br />
                  Kochi – 682020
                </div>
                <div>
                  <p>General Enquiry : <a href="tel:+919037235832" className="hover:text-[#FF0055] transition-colors">+91 90372 35832</a></p>
                  <p>Sales Enquiry : <a href="tel:+918086370404" className="hover:text-[#FF0055] transition-colors">+91 80863 70404</a></p>
                  <p>Email : <a href="mailto:info@kaelixo.com" className="hover:text-[#FF0055] transition-colors">info@kaelixo.com</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/10 mb-6"></div>

        {/* Bottom Section: Socials & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 relative">
          
          {/* Copyright */}
          <div className="order-3 md:order-1 text-[15px] sm:text-[15px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-medium text-gray-500 md:w-1/3 text-center md:text-left">
            <p>© {new Date().getFullYear()} Kaelixo. All rights reserved.</p>
          </div>

          {/* Social Links (Center) */}
          <div className="order-1 md:order-2 flex flex-nowrap sm:flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:w-auto">
             <a href="https://wa.me/919037235832" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all shrink-0">
              <FaWhatsapp size={14} />
            </a>
            <a href="https://www.instagram.com/kaelixo_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all shrink-0">
              <FaInstagram size={14} />
            </a>
            <a href="https://www.facebook.com/kaelixotbt" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all shrink-0">
              <FaFacebookF size={13} />
            </a>
            <a href="https://www.youtube.com/@kaeli_xo" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all shrink-0">
              <FaYoutube size={14} />
            </a>
            <a href="https://x.com/Kaelixotbg" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all shrink-0">
              <FaXTwitter size={13} />
            </a>
            <a href="https://www.behance.net/kaelixotech" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all shrink-0">
              <FaBehance size={14} />
            </a>
            <a href="https://www.threads.com/@kaelixo_?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all shrink-0">
              <FaThreads size={14} />
            </a>
            <a href="https://www.linkedin.com/company/kaelixo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all shrink-0">
              <FaLinkedinIn size={13} />
            </a>
           
          </div>

          {/* Legal Links (Right Side) */}
          <div className="order-2 md:order-3 flex items-center justify-center md:justify-end gap-3 md:gap-4 text-[15px] sm:text-[15px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-medium text-gray-500 md:w-1/3">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}