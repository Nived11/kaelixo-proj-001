"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ArrowRight, Menu, X, Layers, UserCircle, Code, BarChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  
  // Use a ref for timeout to prevent memory leaks or clearing wrong timeouts
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsServicesHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 150); // 150ms buffer to move mouse from header to mega menu
  };
  
  // State to track the currently active link
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
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
          ? "bg-[#020205]/80 backdrop-blur-xl py-4 shadow-lg" // Removed the border classes completely
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Full Image */}
          <Link href="/" className="block group" onClick={() => setActiveLink("Home")}>
            <img 
              src="/Kaelixo-fulllogo.png" 
              alt="Kaelixo Logo" 
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              const isServices = link.name === "Services";
              
              return (
                <div 
                  key={link.name}
                  className="relative flex items-center"
                  onMouseEnter={isServices ? handleMouseEnter : undefined}
                  onMouseLeave={isServices ? handleMouseLeave : undefined}
                >
                  <Link
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`relative text-sm tracking-normal transition-colors duration-200 group py-2 ${
                      isActive
                        ? "text-[#FF0055] font-medium"
                        : "text-white/80 hover:text-white font-normal"
                    }`}
                  >
                    {link.name}
                    
                    {/* Sliding Active Line using Framer Motion */}
                    {isActive ? (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#FF0055] rounded-full z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    ) : (
                      /* Left to Right Hover Line */
                      <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#FF0055] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                    )}
                  </Link>
                </div>
              );
            })}
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
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF0055] hover:bg-[#E6004C] text-white text-sm font-semibold tracking-normal shadow-[0_0_15px_rgba(255,0,85,0.4)] hover:shadow-[0_0_25px_rgba(255,0,85,0.6)] transition-all duration-200 active:scale-95 cursor-pointer"
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
          <div className="mt-4 pt-3 pb-1 flex items-center justify-end">
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
        <div className="lg:hidden bg-[#020205]/95 backdrop-blur-2xl px-6 pt-5 pb-8 mt-3 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 text-base ${
                    isActive ? "text-[#FF0055] font-semibold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-3">
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

      {/* Services Mega Menu */}
      <AnimatePresence>
        {isServicesHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#070A11] border-t border-white/5 shadow-2xl overflow-hidden hidden lg:block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-12 relative flex gap-12 xl:gap-16">
              
              {/* Bottom Left Glow */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FF0055]/15 rounded-full blur-[80px] pointer-events-none" />
              {/* Top Right Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF0055]/5 rounded-full blur-[80px] pointer-events-none" />

              {/* Left Column (Overview) */}
              <div className="w-[30%] border-r border-white/10 pr-8 xl:pr-12 relative z-10 shrink-0">
                <span className="text-[#FF0055] font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">
                  Our Services
                </span>
                <h3 className="text-white text-3xl font-normal leading-tight mb-4">
                  Building Strong <br />
                  <span className="text-[#FF0055] font-medium">Digital Capabilities</span> <br />
                  for Business Growth
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Strategy, design, technology and marketing — all working together to move your business forward.
                </p>
                <Link href="#overview" className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[#FF0055] transition-colors border-b border-[#FF0055] pb-1 group">
                  Go to overview
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Columns (Links) */}
              <div className="w-[70%] grid grid-cols-4 gap-6 xl:gap-8 relative z-10">
                
                {/* Branding */}
                <div>
                  <Link href="#branding" className="flex items-center gap-2 text-white font-semibold text-[15px] mb-6 group hover:text-[#FF0055] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FF0055]">
                      <Layers className="w-4 h-4" />
                    </div>
                    Branding
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                  <ul className="space-y-3.5">
                    {["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines", "Marketing Collateral"].map((item) => (
                      <li key={item}>
                        <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 text-[13px] hover:text-white transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Experience Design */}
                <div>
                  <Link href="#experience" className="flex items-center gap-2 text-white font-semibold text-[15px] mb-6 group hover:text-[#FF0055] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FF0055]">
                      <UserCircle className="w-4 h-4" />
                    </div>
                    Experience Design
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                  <ul className="space-y-3.5">
                    {["UI/UX Design", "Website Design", "Landing Pages", "Mobile Experience", "Commerce Experience"].map((item) => (
                      <li key={item}>
                        <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 text-[13px] hover:text-white transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology */}
                <div>
                  <Link href="#technology" className="flex items-center gap-2 text-white font-semibold text-[15px] mb-6 group hover:text-[#FF0055] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FF0055]">
                      <Code className="w-4 h-4" />
                    </div>
                    Technology
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                  <ul className="space-y-3.5">
                    {["Web Development", "Mobile App Development", "Custom Software", "Cloud Services", "Cyber Security", "AI & Automation", "Data & Analytics"].map((item) => (
                      <li key={item}>
                        <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 text-[13px] hover:text-white transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Digital Marketing */}
                <div>
                  <Link href="#marketing" className="flex items-center gap-2 text-white font-semibold text-[15px] mb-6 group hover:text-[#FF0055] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FF0055]">
                      <BarChart className="w-4 h-4" />
                    </div>
                    Digital Marketing
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                  <ul className="space-y-3.5">
                    {["SEO", "Social Media Marketing", "Performance Marketing", "Content Marketing", "Marketing Automation", "Analytics"].map((item) => (
                      <li key={item}>
                        <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 text-[13px] hover:text-white transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}