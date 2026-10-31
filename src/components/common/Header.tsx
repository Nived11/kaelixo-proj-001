"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ArrowRight, Menu, X, Layers, UserCircle, Code, BarChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const pathname = usePathname();
  
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

  // Sync active link with current pathname
  useEffect(() => {
    if (pathname === "/") {
      setActiveLink("Home");
    } else if (pathname.startsWith("/services")) {
      setActiveLink("Services");
    } else if (pathname.startsWith("/about")) {
      setActiveLink("About");
    } else if (pathname.startsWith("/products")) {
      setActiveLink("Products");
    } else if (pathname.startsWith("/portfolio")) {
      setActiveLink("Portfolio");
    } else if (pathname.startsWith("/careers")) {
      setActiveLink("Careers");
    } else if (pathname.startsWith("/contact")) {
      setActiveLink("Contact");
    }
  }, [pathname]);

  useEffect(() => {
    const checkScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(scrollY > 20);
    };

    // Immediately evaluate scroll position on mount/refresh
    checkScroll();

    // Catch asynchronous scroll restorations by browser or smooth-scroller
    const rafId = requestAnimationFrame(checkScroll);
    const timer50 = setTimeout(checkScroll, 50);
    const timer150 = setTimeout(checkScroll, 150);
    const timer300 = setTimeout(checkScroll, 300);

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer50);
      clearTimeout(timer150);
      clearTimeout(timer300);
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const handleNavClick = (linkHref: string, linkName: string) => {
    setActiveLink(linkName);

    // If navigating to an in-page section hash (e.g. /#services, /#products)
    if (linkHref.includes('#')) {
      const hash = linkHref.substring(linkHref.indexOf('#'));
      const isCurrentPage = pathname === '/' || linkHref.startsWith(pathname);
      if (isCurrentPage) {
        const target = document.querySelector(hash);
        if (target) {
          const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string | HTMLElement, opts?: { offset?: number }) => void } }).__lenis;
          if (lenis) {
            lenis.scrollTo(hash, { offset: -90 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
      return;
    }

    // If clicking current page without hash, smooth scroll to top
    const isCurrentPage = linkHref === pathname || (linkHref === '/' && pathname === '/');
    if (isCurrentPage) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, opts?: { immediate?: boolean }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: false });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/#products" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Careers", href: "/#careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-[#020205]/95 backdrop-blur-md py-3 sm:py-4 shadow-none border-b border-transparent"
          : "bg-transparent py-5 sm:py-6 border-b border-transparent shadow-none"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-6 xl:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Full Image */}
          <Link href="/" className="block group" onClick={() => handleNavClick("/", "Home")}>
            <Image 
              src="/images/brand/kaelixo-logo.webp" 
              alt="Kaelixo Logo" 
              width={150}
              height={41}
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center lg:space-x-5 xl:space-x-9">
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
                    onClick={() => handleNavClick(link.href, link.name)}
                    className={`relative text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] tracking-normal transition-colors duration-200 group py-2 ${
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

          {/* Right Action Area */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Icon (Hidden for now) */}
            {/*
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            */}

            {/* Book a Demo Pill Button (Desktop only) */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-consultation-modal', { detail: { type: 'demo' } }))}
              className="group hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white text-sm font-medium tracking-wide shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden"
            >
              <div className="flex flex-col h-[20px] overflow-hidden">
                <div className="flex items-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full h-[20px]">
                  <span className="leading-[20px] text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px]">Book a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full h-[20px]">
                  <span className="leading-[20px]">Book a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </button>

            {/* Mobile Hamburger Toggle (Tablet/Mobile only) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 lg:hidden flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Input Bar (Hidden for now) */}
        {/* searchOpen && (
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
        ) */}
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
                    setMobileMenuOpen(false);
                    handleNavClick(link.href, link.name);
                  }}
                  className={`py-2 text-base ${
                    isActive ? "text-[#FF0055] text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-semibold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-consultation-modal', { detail: { type: 'demo' } }));
              }}
              className="w-full py-3 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] rounded-full bg-[#FF0055] text-white font-semibold text-center text-sm shadow-lg shadow-[#FF0055]/30 flex items-center justify-center gap-2"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </button>
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
                <span className="text-[#FF0055] font-semibold text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] tracking-[0.08em] uppercase mb-4 block">
                  Our Services
                </span>
                <h3 className="text-white text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[24px] font-bold leading-tight mb-4">
                  Building Strong <br />
                  <span className="text-[#FF0055]">Digital Capabilities</span> <br />
                  for Business Growth
                </h3>
                <p className="text-slate-400 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] leading-relaxed mb-8">
                  Strategy, design, technology and marketing — all working together to move your business forward.
                </p>
                <Link href="/#overview" onClick={() => setIsServicesHovered(false)} className="inline-flex items-center gap-2 text-white font-semibold text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] hover:text-[#FF0055] transition-colors border-b border-[#FF0055] pb-1 group">
                  Go to overview
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Columns (Links) */}
              <div className="w-[70%] grid grid-cols-4 gap-6 xl:gap-8 relative z-10">
                
                {/* Branding */}
                <div>
                  <Link href="/#branding" onClick={() => setIsServicesHovered(false)} className="flex items-center gap-2 text-white font-semibold text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] mb-6 group hover:text-[#FF0055] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FF0055]">
                      <Layers className="w-4 h-4" />
                    </div>
                    Branding
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                  <ul className="space-y-3.5">
                    {["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines", "Marketing Collateral"].map((item) => (
                      <li key={item}>
                        <Link href={`/#${item.toLowerCase().replace(/ /g, "-").replace("&-", "")}`} onClick={() => setIsServicesHovered(false)} className="text-slate-400 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] hover:text-white transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Experience Design */}
                <div>
                  <Link href="/#experience" onClick={() => setIsServicesHovered(false)} className="flex items-center gap-2 text-white font-semibold text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] mb-6 group hover:text-[#FF0055] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FF0055]">
                      <UserCircle className="w-4 h-4" />
                    </div>
                    Experience Design
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                  <ul className="space-y-3.5">
                    {["UI/UX Design", "Website Design", "Landing Pages", "Mobile Experience", "Commerce Experience"].map((item) => (
                      <li key={item}>
                        <Link href={`/#${item.toLowerCase().replace(/ /g, "-").replace("&-", "")}`} onClick={() => setIsServicesHovered(false)} className="text-slate-400 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] hover:text-white transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology */}
                <div>
                  <Link href="/#technology" onClick={() => setIsServicesHovered(false)} className="flex items-center gap-2 text-white font-semibold text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] mb-6 group hover:text-[#FF0055] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FF0055]">
                      <Code className="w-4 h-4" />
                    </div>
                    Technology
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                  <ul className="space-y-3.5">
                    {["Web Development", "Mobile App Development", "Custom Software", "Cloud Services", "Cyber Security", "AI & Automation", "Data & Analytics"].map((item) => (
                      <li key={item}>
                        <Link 
                          href={item === "Web Development" ? "/services/web-development" : `/#${item.toLowerCase().replace(/ /g, "-").replace("&-", "")}`} 
                          onClick={() => setIsServicesHovered(false)}
                          className="text-slate-400 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] hover:text-white transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Digital Marketing */}
                <div>
                  <Link href="/#marketing" onClick={() => setIsServicesHovered(false)} className="flex items-center gap-2 text-white font-semibold text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] mb-6 group hover:text-[#FF0055] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#FF0055]">
                      <BarChart className="w-4 h-4" />
                    </div>
                    Digital Marketing
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                  <ul className="space-y-3.5">
                    {["SEO", "Social Media Marketing", "Performance Marketing", "Content Marketing", "Marketing Automation", "Analytics"].map((item) => (
                      <li key={item}>
                        <Link href={`/#${item.toLowerCase().replace(/ /g, "-").replace("&-", "")}`} onClick={() => setIsServicesHovered(false)} className="text-slate-400 text-[15px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] hover:text-white transition-colors">
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