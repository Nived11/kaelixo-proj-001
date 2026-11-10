import React from "react";
import { TRAVEL_HOPE_HERO_ASSETS, type ProjectItem } from "@/features/portfolio/data/portfolioProjects";
import HeroAtAGlanceInteractive from "./components/HeroAtAGlanceInteractive";
import ProjectChallenge from "./components/ProjectChallenge";
import ProjectStrategy from "./components/ProjectStrategy";
import ProjectShowcase from "./components/ProjectShowcase";
import ProjectTechStack from "./components/ProjectTechStack";
import ProjectFeatures from "./components/ProjectFeatures";
import ProjectResults from "./components/ProjectResults";
import CTASection from "@/features/services/web-development/components/CTASection";
import EnquirySection from "@/features/services/web-development/components/EnquirySection";

interface ProjectDetailMainProps {
  project: ProjectItem;
}

export default function ProjectDetailMain({ project }: ProjectDetailMainProps) {
  const heroProject = {
    ...project,
    heroBgImage: project.heroBgImage || TRAVEL_HOPE_HERO_ASSETS.heroBgImage,
    heroMobileBgImage:
      project.heroMobileBgImage || project.heroBgImage || TRAVEL_HOPE_HERO_ASSETS.heroMobileBgImage,
    heroMockupImage: project.heroMockupImage || TRAVEL_HOPE_HERO_ASSETS.heroMockupImage,
  };

  // Computed fallbacks and defaults
  const heroHeadline = project.heroHeadline || {
    prefix: `${project.title} — Building a Smarter`,
    highlight: "Digital Experience",
  };

  const heroSubtitle =
    project.heroSubtitle ||
    project.description ||
    "A modern, conversion-focused platform that improved clarity, engagement and business results.";

  const projectType =
    project.projectType || `${project.category} — Digital Platform`;

  const clientLogoText =
    project.clientLogoText || project.client || project.title;

  const clientLogoTagline =
    project.clientLogoTagline || "EXCELLENCE IN SERVICE";

  const snapshot = project.snapshot || {
    platform: "Next.js & Custom CMS",
    duration: "3 Months",
    location: "Kerala, India",
    services:
      project.deliverables?.join(", ") ||
      "Web Design, Development, UI/UX, SEO",
    previewImage: project.image,
    quickStats: [
      {
        stat: "3x",
        label: "More Enquiries",
        desc: "Significant increase in qualified leads",
      },
      {
        stat: "60%",
        label: "Higher Organic Traffic",
        desc: "Stronger visibility across search engines",
      },
      {
        stat: "45%",
        label: "Better Conversion Rate",
        desc: "More enquiries turned into customers",
      },
      {
        stat: "2x",
        label: "Brand Engagement",
        desc: "Higher interaction across digital channels",
      },
    ],
  };

  const challenges = project.challenges || {
    subtitle: `${project.title} had a strong offline presence, but their digital experience wasn't delivering the results they expected. Several challenges were holding them back.`,
    items: [
      {
        title: "Limited Online Presence",
        desc: "The existing web presence was outdated and didn't reflect the high quality of their offerings.",
        icon: "TrendingUp",
      },
      {
        title: "Operational Inefficiencies",
        desc: "Customer inquiries were scattered across channels with no central management system.",
        icon: "Settings",
      },
      {
        title: "Low Conversion",
        desc: "Visitors browsed services but hesitated to enquire due to unclear pathways and missing CTAs.",
        icon: "Users",
      },
      {
        title: "Lack of Scalable Platform",
        desc: "The previous setup lacked flexibility to update catalogs, packages, and content easily.",
        icon: "Laptop",
      },
    ],
    floatingBadges: [
      "Outdated website design",
      "Multiple enquiries across channels",
      "Low conversion rate",
      "Difficult content management",
    ],
    summaryBanner: `${project.title} needed a modern, high-performing digital platform that could showcase their brand beautifully and turn interest into confirmed business.`,
  };

  const strategy = project.strategy || {
    challengePoints: [
      "Outdated website experience",
      "Enquiries scattered across channels",
      "Low conversion from interested visitors",
      "Difficult content and package management",
    ],
    strategyPoints: [
      "Redesigned website structure around user intent",
      "Simplified browsing and enquiry journey",
      "Planned CRM-ready lead capture workflow",
      "Built SEO-friendly content architecture",
      "Improved responsive UX for all devices",
    ],
    solutionPoints: [
      "High-converting modern website",
      "Centralized customer enquiry flow",
      "Scalable catalog and content management",
      "Better organic Google visibility",
      "Ongoing digital growth support",
    ],
    processSteps: [
      { label: "Website Redesign", icon: "Laptop" },
      { label: "Content Structure", icon: "Layers" },
      { label: "Enquiry Flow", icon: "MessageSquare" },
      { label: "CRM Integration", icon: "Users" },
      { label: "SEO Structure", icon: "BarChart3" },
      { label: "Marketing Support", icon: "Megaphone" },
    ],
  };

  const showcase = project.showcase || {
    subtitle: `A modern, immersive and user-friendly digital platform designed to inspire users and make action effortless.`,
    pills: [
      "Mobile-first UI",
      "Fast Enquiry Flow",
      "Clear Navigation",
      "Conversion-Focused CTAs",
      "Responsive Layouts",
    ],
    screens: [
      { name: "Home Page", desc: "A stunning first impression" },
      { name: "Catalog Page", desc: "Beautifully showcased offerings" },
      { name: "Service Details", desc: "Easy to browse, transparent specs" },
      { name: "Enquiry Flow", desc: "Simple form, more conversions" },
      { name: "Mobile View", desc: "Flawless on every device" },
    ],
  };

  const techStack = project.techStack || {
    subtitle: `We used a focused stack and growth services to build a fast, scalable, conversion-friendly digital platform for ${project.title}.`,
    technologies: [
      {
        name: "Next.js 14",
        desc: "Fast server-side rendering for optimal speed and search indexing.",
      },
      {
        name: "Tailwind CSS",
        desc: "Fluid, modern responsive styling crafted for high performance.",
      },
      {
        name: "PostgreSQL",
        desc: "Reliable and secure relational database architecture.",
      },
      {
        name: "CRM Integration",
        desc: "Centralized lead management and inquiry tracking.",
      },
      {
        name: "APIs & Integrations",
        desc: "Third-party APIs for WhatsApp, payment, and notifications.",
      },
      {
        name: "Responsive Design",
        desc: "Seamless experience across desktop, tablet, and mobile.",
      },
      {
        name: "SEO Structure",
        desc: "Optimized site structure, metadata, and performance for visibility.",
      },
      {
        name: "Analytics",
        desc: "Tracking user behaviour and conversions for continuous improvement.",
      },
      {
        name: "Cloud Hosting",
        desc: "High-uptime, secure global edge hosting infrastructure.",
      },
    ],
    guarantees: [
      { title: "Secure & Scalable", desc: "Built for long-term growth." },
      { title: "Reliable Hosting", desc: "High uptime and performance." },
      {
        title: "Optimised Performance",
        desc: "Fast loading for better user experience.",
      },
      {
        title: "Ongoing Support",
        desc: "Continuous monitoring and updates.",
      },
    ],
  };

  const featuresDelivered = project.featuresDelivered || {
    subtitle: `We built a complete digital solution for ${project.title} with the following key features to simplify operations and drive growth.`,
    items: [
      {
        title: "Catalog Management",
        desc: "Easy creation and organization of products and services.",
        icon: "Briefcase",
      },
      {
        title: "Dedicated Pages",
        desc: "Rich dedicated pages highlighting key brand offerings.",
        icon: "MapPin",
      },
      {
        title: "Enquiry System",
        desc: "Streamlined enquiry forms for rapid lead capture.",
        icon: "FileText",
      },
      {
        title: "WhatsApp Integration",
        desc: "Direct instant communication with prospective customers.",
        icon: "MessageCircle",
      },
      {
        title: "CRM Lead Capture",
        desc: "All enquiries captured and organized centrally.",
        icon: "Users",
      },
      {
        title: "Mobile Optimization",
        desc: "Smooth experience across all mobile devices.",
        icon: "Smartphone",
      },
      {
        title: "SEO Architecture",
        desc: "Search-friendly structure and metadata setup.",
        icon: "Search",
      },
      {
        title: "Analytics Tracking",
        desc: "Performance insights for data-driven decisions.",
        icon: "BarChart2",
      },
    ],
  };

  const results = project.results || {
    headline: { prefix: "Real Results.", highlight: "Measurable Growth." },
    subtitle: `Our strategic approach delivered a stronger digital presence, higher engagement and measurable business growth for ${project.title}.`,
    stats: [
      {
        stat: "3x",
        label: "More Enquiries",
        desc: "A smoother user journey and streamlined flow helped generate 3x more qualified leads.",
      },
      {
        stat: "+60%",
        label: "Organic Traffic",
        desc: "SEO-friendly structure and optimized content increased search visibility.",
      },
      {
        stat: "70%",
        label: "Faster Response Time",
        desc: "Centralized lead management enabled the team to respond much faster to customers.",
      },
      {
        stat: "+40%",
        label: "Higher Conversion Rate",
        desc: "A cleaner navigation structure and stronger CTAs helped convert more visitors.",
      },
    ],
    footerTagline: "PEOPLE | POSSIBILITIES",
  };

  return (
    <div className="min-h-screen bg-[#03040B] text-white selection:bg-[#FF0055] selection:text-white">
      {/* 1 & 2. HERO & AT A GLANCE (Scroll-Synced Mockup Flight Experience) */}
      <HeroAtAGlanceInteractive
        project={heroProject}
        heroHeadline={heroHeadline}
        heroSubtitle={heroSubtitle}
        projectType={projectType}
        clientLogoText={clientLogoText}
        clientLogoTagline={clientLogoTagline}
        snapshot={snapshot}
      />

      {/* 3. THE CHALLENGE */}
      <ProjectChallenge challenges={challenges} />

      {/* 4. STRATEGY / SOLUTION */}
      <ProjectStrategy projectTitle={project.title} strategy={strategy} />

      {/* 5. DESIGN & EXPERIENCE SHOWCASE */}
      <ProjectShowcase
        projectTitle={project.title}
        projectImage={project.image}
        heroMockupImage={project.heroMockupImage}
        websiteImage={project.websiteImage}
        showcase={showcase}
      />

      {/* 6. TECHNOLOGY & SERVICES USED */}
      <ProjectTechStack techStack={techStack} />

      {/* 7. KEY FEATURES DELIVERED */}
      <ProjectFeatures featuresDelivered={featuresDelivered} />

      {/* 8. RESULTS & BUSINESS IMPACT */}
      <ProjectResults projectTitle={project.title} results={results} />

      <div className="relative z-20">
        <EnquirySection />
        <CTASection />
      </div>
    </div>
  );
}

