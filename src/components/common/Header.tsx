"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#020205]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Custom SVG Kaelixo Pink Geometric Icon */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-105"
              >
                {/* Left angular polygon bracket */}
                <path 
                  d="M18 4L6 16L18 28H24L12 16L24 4H18Z" 
                  fill="#FF0055" 
                />
                {/* Internal accent facet */}
                <path 
                  d="M12 16L20 8H26L18 16L26 24H20L12 16Z" 
                  fill="#FF1A6C" 
                  opacity="0.8" 
                />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white font-heading">
              Kaelixo
            </span>
          </Link>

          {/* Desktop Navigation Links (Exact from Reference Image 1) */}
          <nav className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm tracking-normal transition-colors duration-200 ${
                  link.active
                    ? "text-[#FF0055] font-medium"
                    : "text-white/80 hover:text-white font-normal"
                }`}
              >
                {link.name}
                {link.active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FF0055] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Area (Search Button + Book a Demo Pill Button) */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Book a Demo Pill Button */}
            <Link
              href="#book-demo"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF0055] hover:bg-[#E6004C] text-white text-sm font-semibold tracking-normal shadow-lg shadow-[#FF0055]/30 hover:shadow-[#FF0055]/50 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Input Bar (Dropdown on click) */}
        {searchOpen && (
          <div className="mt-4 pt-3 pb-1 border-t border-white/10 flex items-center justify-end">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search Kaelixo products, services, solutions..."
                className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#FF0055]"
                autoFocus
              />
              <Search className="w-4 h-4 text-white/50 absolute right-4 top-3" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#040408]/98 backdrop-blur-2xl border-b border-white/10 px-6 pt-5 pb-8 mt-3 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base ${
                  link.active ? "text-[#FF0055] font-semibold" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="#book-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-[#FF0055] text-white font-semibold text-center text-sm shadow-lg shadow-[#FF0055]/30 flex items-center justify-center gap-2"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
