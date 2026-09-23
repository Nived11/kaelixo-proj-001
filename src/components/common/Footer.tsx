"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050914] text-slate-400 font-sans border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-6">
        
        {/* Top Section: Links, Socials & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-6 pb-12 border-b border-white/10">
          
          {/* 1. Brand Logo & Tagline */}
          <div className="w-full lg:w-[22%] flex flex-col items-start gap-3.5">
            <Link href="/" className="block">
              <img 
                src="/Kaelixo-fulllogo.png" 
                alt="Kaelixo Logo" 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-[11px] text-gray-400 font-medium tracking-wide">
              Technology for a Smarter Tomorrow.
            </p>
          </div>

          {/* 2. Links Columns (Products, Company, Resources) */}
          <div className="w-full lg:w-[35%] grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Products */}
            <div>
              <h4 className="text-white font-semibold text-[13px] mb-4">Products</h4>
              <ul className="space-y-3 text-[12px] font-medium">
                <li><Link href="#" className="hover:text-white transition-colors">Way We Go</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">EduLoom</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-[13px] mb-4">Company</h4>
              <ul className="space-y-3 text-[12px] font-medium">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold text-[13px] mb-4">Resources</h4>
              <ul className="space-y-3 text-[12px] font-medium">
                <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>

          {/* 3. Social Icons with Custom Vertical Separator */}
          <div className="w-full lg:w-[15%] lg:self-center flex items-center relative lg:pl-8 mt-4 lg:mt-0">
            {/* Short vertical bar visible only on large screens */}
            <div className="hidden lg:block absolute left-0 w-[1px] h-[40px] bg-white/10"></div>
            
            <div className="flex items-center gap-2.5">
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <FaLinkedinIn size={12} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <FaTwitter size={12} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <FaYoutube size={12} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <FaInstagram size={12} />
              </a>
            </div>
          </div>

          {/* 4. Newsletter */}
          <div className="w-full lg:w-[28%] flex flex-col gap-2">
            <h4 className="text-white font-semibold text-[13px]">Stay in the loop</h4>
            <p className="text-[11.5px] text-gray-400 font-medium mb-1">
              Get the latest updates, insights and stories.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 mt-2">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2.5 text-[12px] text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF0055] transition-colors"
                />
              </div>
              <button 
                type="submit" 
                className="w-10 h-10 rounded-lg bg-[#FF0055] hover:bg-[#e6004c] flex items-center justify-center text-white shrink-0 transition-colors cursor-pointer"
              >
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Kaelixo. All rights reserved.</p>
          
          <div className="flex items-center flex-wrap justify-center gap-3">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <span className="text-gray-700">|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <span className="text-gray-700">|</span>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
           
          </div>
        </div>

      </div>
    </footer>
  );
}