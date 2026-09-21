"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { FaGithub, FaXTwitter, FaLinkedin, FaDiscord } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#020205] border-t border-white/10 overflow-hidden text-slate-400">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF0055]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Newsletter / Consultation Banner */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12 border-b border-white/5">
        <div className="rounded-3xl bg-[#08080E] p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF0055]/10 text-[#FF0055] border border-[#FF0055]/20">
                <Globe2 className="w-3.5 h-3.5" /> Next-Gen Technology
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Stay updated with Kaelixo technology insights
              </h3>
              <p className="text-sm text-slate-400">
                Subscribe to receive engineering whitepapers, product architecture guides, and digital transformation blueprints.
              </p>
            </div>

            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch gap-3 min-w-[340px]"
            >
              <input
                type="email"
                placeholder="developer@enterprise.com"
                className="px-4 py-3 rounded-full bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#FF0055] transition-colors flex-1"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#FF0055] hover:bg-[#E6004C] text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#FF0055]/30 cursor-pointer"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Links Section */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg 
                  viewBox="0 0 32 32" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <path 
                    d="M18 4L6 16L18 28H24L12 16L24 4H18Z" 
                    fill="#FF0055" 
                  />
                  <path 
                    d="M12 16L20 8H26L18 16L26 24H20L12 16Z" 
                    fill="#FF1A6C" 
                    opacity="0.8" 
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                Kaelixo
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              We design intelligent websites, build powerful software, create custom CRM solutions, develop AI-driven tools and deliver digital growth strategies for ambitious businesses worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF0055] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF0055] transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF0055] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-[#FF0055] transition-colors"
                aria-label="Discord"
              >
                <FaDiscord className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#services" className="hover:text-[#FF0055] transition-colors">Intelligent Websites</Link></li>
              <li><Link href="#services" className="hover:text-[#FF0055] transition-colors">Custom Software</Link></li>
              <li><Link href="#services" className="hover:text-[#FF0055] transition-colors">Enterprise CRM / ERP</Link></li>
              <li><Link href="#services" className="hover:text-[#FF0055] transition-colors">AI & Automation Tools</Link></li>
              <li><Link href="#services" className="hover:text-[#FF0055] transition-colors">Digital Growth</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#products" className="hover:text-[#FF0055] transition-colors">Kaelixo Core Engine</Link></li>
              <li><Link href="#products" className="hover:text-[#FF0055] transition-colors">AuthGuard Shield</Link></li>
              <li><Link href="#products" className="hover:text-[#FF0055] transition-colors">Nexus Analytics</Link></li>
              <li><Link href="#products" className="hover:text-[#FF0055] transition-colors">Flow Subscriptions</Link></li>
              <li><Link href="#products" className="hover:text-[#FF0055] transition-colors">Enterprise Admin</Link></li>
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#about" className="hover:text-[#FF0055] transition-colors">About Us</Link></li>
              <li><Link href="#portfolio" className="hover:text-[#FF0055] transition-colors">Portfolio & Work</Link></li>
              <li><Link href="#careers" className="hover:text-[#FF0055] transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-[#FF0055] transition-colors">Contact</Link></li>
              <li><Link href="#privacy" className="hover:text-[#FF0055] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Kaelixo Technologies Inc. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="#privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="#terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="#security" className="hover:text-white transition-colors">Security</Link>
        </div>
      </div>
    </footer>
  );
}
