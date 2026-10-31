import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, MessageSquare, ExternalLink, Calendar, User, Tag } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/features/portfolio/data/portfolioProjects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Kaelixo",
    };
  }

  return {
    title: `${project.title} | Portfolio | Kaelixo`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Kaelixo Portfolio`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#020205] text-[#030C25]">
      {/* ============================================================ */}
      {/* HEADER / HERO BANNER (Dark Backdrop matching site layout)    */}
      {/* ============================================================ */}
      <div className="relative pt-[110px] sm:pt-[130px] pb-12 sm:pb-16 bg-[#020205] text-white overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF0055]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs sm:text-[13px] text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-[#FF0055] font-semibold truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </div>

          {/* Back Button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-white/80 hover:text-white mb-6 group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </Link>

          {/* Eyebrow / Category */}
          <div className="mb-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF0055]/20 text-[#FF0055] border border-[#FF0055]/30">
              {project.category}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.1] mb-4">
            {project.title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/75 text-base sm:text-lg md:text-xl font-normal max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MAIN CONTENT SECTION (Elevated White Layer)                  */}
      {/* ============================================================ */}
      <div className="relative z-20 -mt-6 bg-white rounded-t-[32px] sm:rounded-t-[40px] border-t border-[#e9eef7] pt-10 sm:pt-14 pb-20 shadow-[0_-12px_32px_rgba(0,0,0,0.12)]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          {/* Featured Visual Mockup */}
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xl mb-12">
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Metadata Grid (Client, Year, Deliverables) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100 mb-12">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                Client
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900">
                {project.client || "Confidential Client"}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                Year
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900">
                {project.year || "2024"}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                Industry
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900">
                {project.category}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
                Core Service
              </span>
              <span className="text-sm sm:text-base font-bold text-[#FF0055]">
                {project.tags[0] || "Custom Build"}
              </span>
            </div>
          </div>

          {/* Details & Highlights Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start mb-16">
            {/* Left: Overview & Scope */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 mb-3">
                  Project Overview
                </h2>
                <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed">
                  {project.description} Engineered with a focus on modern user experience, speed, and tangible business impact.
                </p>
              </div>

              {project.deliverables && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Project Deliverables
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Key Highlights */}
            <div className="lg:col-span-5 bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200/80 space-y-4">
              <h3 className="text-lg font-black font-heading text-slate-900">
                Key Highlights
              </h3>
              <div className="space-y-3">
                {(project.highlights || []).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF0055] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[14px] text-slate-700 leading-snug font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs uppercase font-bold text-slate-400 block mb-2">
                  Technologies & Frameworks
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-pink-50 text-[#FF0055] border border-pink-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#020205] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="text-center md:text-left">
              <span className="text-[#FF0055] font-bold text-xs uppercase tracking-widest block mb-2">
                READY TO BUILD?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading leading-tight mb-2">
                Have a similar project in mind?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-lg">
                Let&apos;s talk about your requirements and build a high-performance solution tailored to your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/919037235832"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba59] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#80002A] to-[#FF0055] border border-[#FF3377] text-white font-bold text-sm shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Project</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

