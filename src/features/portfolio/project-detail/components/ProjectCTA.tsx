import React from "react";
import Link from "next/link";
import { MessageSquare, Sparkles } from "lucide-react";

export default function ProjectCTA() {
  return (
    <section className="relative z-20 bg-[#020308] text-white py-16 sm:py-20 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#101426] via-[#0A0D1E] to-[#03040B] border border-white/10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-[350px] h-[350px] bg-[#FF0055]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="text-center md:text-left relative z-10">
            <span className="text-[#FF0055] font-bold text-xs uppercase tracking-widest block mb-2 font-heading">
              READY TO SCALE YOUR BRAND?
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading leading-tight mb-3">
              Have a similar project in mind?
            </h3>
            <p className="text-white/60 text-sm sm:text-base max-w-lg font-sans">
              Let&apos;s build a modern, high-performance digital platform tailored to your business goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full md:w-auto relative z-10">
            <a
              href="https://wa.me/919037235832"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba59] transition-all shadow-md active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] text-white font-bold text-sm shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Your Project</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

