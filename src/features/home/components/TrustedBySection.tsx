"use client";

import React from "react";

export default function TrustedBySection() {
  return (
    <section className="relative bg-[#020205] py-16">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Section Heading */}
        <p className="text-xs font-semibold tracking-[0.25em] text-white/50 uppercase mb-12 font-heading">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>

        {/* Logos Grid / Strip */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-14 text-white/70">
          
          {/* Microsoft */}
          <div className="flex items-center gap-2.5 hover:text-white transition-colors duration-200">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 21 21">
              <path d="M1 1h9v9H1zM11 1h9v9h-9zM1 11h9v9H1zM11 11h9v9h-9z" />
            </svg>
            <span className="text-lg font-semibold tracking-tight">Microsoft</span>
          </div>

          {/* Google */}
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
            <span className="text-xl font-bold tracking-tight">Google</span>
          </div>

          {/* AWS */}
          <div className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
            <span className="text-xl font-bold lowercase tracking-tighter">aws</span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 4.5c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-1.8 11.5c-1.3 0-2.4-1.1-2.4-2.5s1.1-2.5 2.4-2.5c1 0 1.8.6 2.2 1.5-.4.9-1.2 1.5-2.2 1.5zm3.6 0c-1 0-1.8-.6-2.2-1.5.4-.9 1.2-1.5 2.2-1.5 1.3 0 2.4 1.1 2.4 2.5s-1.1 2.5-2.4 2.5z" />
            </svg>
            <span className="text-lg font-bold tracking-tight">Meta</span>
          </div>

          {/* IBM */}
          <div className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
            <span className="text-xl font-black tracking-widest uppercase">IBM</span>
          </div>

          {/* Adobe */}
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.231 4.296 10.155h3.69L13.966 5.376 7.966 22.624h6z" />
            </svg>
            <span className="text-lg font-bold tracking-tight">Adobe</span>
          </div>

          {/* Shopify */}
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M15.337 3.095c-.066-.467-.478-.813-.948-.813H9.61c-.47 0-.882.346-.948.813L7.02 14.88c-.083.585.344 1.12.948 1.12h8.064c.604 0 1.031-.535.948-1.12l-1.643-11.785z" />
            </svg>
            <span className="text-lg font-bold tracking-tight">shopify</span>
          </div>

          {/* Dropbox */}
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M6 3.5l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM0 15.5l6-4 6 4-6 4-6-4zm18-4l6 4-6 4-6-4 6-4zm-6 6.5l6-4 6 4-6 4-6-4z" />
            </svg>
            <span className="text-lg font-semibold tracking-tight">Dropbox</span>
          </div>

        </div>
      </div>
    </section>
  );
}
