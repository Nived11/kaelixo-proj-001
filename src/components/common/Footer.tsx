"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF, FaXTwitter, FaBehance, FaThreads } from "react-icons/fa6";

export default function Footer() {
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
            <p className="text-[12px] text-gray-400 font-medium tracking-wide">
              Technology for a Smarter Tomorrow.
            </p>
          </div>

          {/* 2. Links Columns */}
          <div className="w-full lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            
            {/* Kaelixo */}
            <div>
              <h4 className="text-white font-semibold text-[14px] mb-4">Kaelixo</h4>
              <ul className="space-y-3 text-[13px] font-medium">
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Services</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Industries</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Works</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-[14px] mb-4">Services</h4>
              <ul className="space-y-3 text-[13px] font-medium">
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Branding</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Experience Design</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Technology</Link></li>
                <li><Link href="#" className="hover:text-[#FF0055] transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold text-[14px] mb-4">Resources</h4>
              <ul className="space-y-3 text-[13px] font-medium">
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
            <div className="flex flex-col">
              <h4 className="text-white font-semibold text-[14px] mb-4">Connect</h4>
              <div className="space-y-4 text-[13px] font-medium leading-relaxed">
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
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-0 relative">
          
          {/* Copyright */}
          <div className="text-[12px] font-medium text-gray-500 md:w-1/3 text-center md:text-left">
            <p>© {new Date().getFullYear()} Kaelixo. All rights reserved.</p>
          </div>

          {/* Social Links (Center) */}
          <div className="flex items-center justify-center gap-2 md:w-1/3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all">
              <FaInstagram size={15} />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all">
              <FaFacebookF size={14} />
            </a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all">
              <FaYoutube size={15} />
            </a>
            <a href="#" aria-label="X" className="w-9 h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all">
              <FaXTwitter size={14} />
            </a>
            <a href="#" aria-label="Behance" className="w-9 h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all">
              <FaBehance size={15} />
            </a>
            <a href="#" aria-label="Threads" className="w-9 h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all">
              <FaThreads size={15} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:bg-[#FF0055] hover:text-white hover:-translate-y-1 transition-all">
              <FaLinkedinIn size={14} />
            </a>
          </div>

          {/* Legal Links (Right Side) */}
          <div className="flex items-center justify-center md:justify-end gap-3 md:gap-4 text-[12px] font-medium text-gray-500 md:w-1/3">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}