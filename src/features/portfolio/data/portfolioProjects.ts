export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  highlights?: string[];
  client?: string;
  year?: string;
  deliverables?: string[];
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
   {
    id: "safari-furniture",
    title: "Safari Furniture",
    description: "Comprehensive home and office furniture e-commerce platform with custom in-house manufacturing in the UAE.",
    category: "Furniture E-Commerce & Retail",
    image: "/images/portfolio/safari-furniture.png",
    tags: ["Home & Office Furniture", "E-Commerce Store", "Custom Manufacturing", "UAE Delivery"],
    client: "Safari Furniture (Safari Group UAE)",
    year: "2024",
    deliverables: ["Furniture Storefront", "Modular Office & Home Catalog", "Custom Build Inquiries", "Click & Collect Cart"],
    highlights: [
      "Extensive product catalog spanning ergonomic home office, living, bedroom, and dining sets",
      "In-house custom furniture manufacturing request workflow with dimension specs",
      "All-UAE delivery and free assembly scheduling with flexible payment options",
      "Showroom virtual tour and branch locator across Sharjah and Ras Al Khaimah",
    ],
  },
   {
    id: "safari-mall",
    title: "Safari Mall",
    description: "Digital portal for regional shopping malls and hypermarkets with digital flyers, store directories and deals.",
    category: "Retail & Shopping Mall",
    image: "/images/portfolio/safari-mall.png",
    tags: ["Hypermarket Portal", "Digital Flyers", "Store Directory", "Deals & Offers"],
    client: "Safari Group (UAE & Qatar)",
    year: "2024",
    deliverables: ["Mall & Hypermarket Portal", "Digital Promotion Flyers", "Branch & Store Locator", "Mobile-Optimized Web App"],
    highlights: [
      "Interactive digital promotion flyers with zoomable multi-page catalog viewer",
      "Multi-location branch directories covering Qatar, Sharjah and Ras Al Khaimah",
      "Real-time seasonal deals, Big Save bonanzas and daily price drops showcase",
      "Fast-loading, bilingual-ready architecture optimized for high GCC mobile traffic",
    ],
  },
  {
    id: "dream-holidays-kerala",
    title: "Dream Holidays Kerala",
    description: "A travel package website with destination showcases and enquiries.",
    category: "Travel & Tourism",
    image: "/images/portfolio/dreamholidays.png",
    tags: ["Travel Portal", "Package Filters", "Enquiry Engine", "Mobile First"],
    client: "Dream Holidays Ltd",
    year: "2023",
    deliverables: ["Travel Website", "Interactive Package Filter", "Enquiry Form", "Multi-Currency Ready"],
    highlights: [
      "Vibrant visual showcases for houseboats, hill stations, and beaches",
      "Custom package calculator with instant WhatsApp connection",
      "Bilingual ready UI with clear pricing and inclusions",
      "Optimized for high organic conversion rates on mobile devices",
    ],
  },
  {
    id: "dats-interiors",
    title: "DATs Interiors",
    description: "Luxury interior fit-out contracting and architectural design portfolio for commercial and residential spaces.",
    category: "Architecture & Interior Fitout",
    image: "/images/portfolio/datsinterior.png",
    tags: ["Interior Fitout", "Luxury Residential", "Commercial Fitout", "Dubai Architecture"],
    client: "DATs Interior Fitout LLC (Dubai)",
    year: "2024",
    deliverables: ["Commercial & Villa Fitouts", "Turnkey Interior Contracting", "3D Visualization Portfolio", "Bespoke Joinery Showcase"],
    highlights: [
      "High-end project galleries showcasing luxury villas, offices, and retail fit-outs",
      "Interactive 3D space visualizer and turnkey scope of work breakdown",
      "Consultation and quotation intake funnel for UAE developers and homeowners",
      "Mobile-optimized portfolio highlighting custom joinery and premium finishes",
    ],
  },
  {
    id: "finexx-travels",
    title: "Finexx Travels",
    description: "Premium corporate travel management, VIP celebrity logistics, and exotic & vintage fleet transportation.",
    category: "Luxury Travel & Event Mobility",
    image: "/images/portfolio/finexx.png",
    tags: ["VIP Mobility", "Luxury Fleet", "Corporate Logistics", "Event Transportation"],
    client: "Finexx Hospitality Pvt Ltd",
    year: "2024",
    deliverables: ["Fleet Showcase Web", "VIP Transfer Booking", "Corporate Travel Desk", "B2B Event Mobility Portal"],
    highlights: [
      "Interactive fleet showcase featuring exotic supercars, vintage classics, and luxury coaches",
      "VIP and celebrity shadow logistics coordination and booking interface",
      "Corporate employee transit and destination wedding guest logistics management",
      "Instant tariff inquiry and 24/7 dedicated chauffeur reservation engine",
    ],
  },
   {
    id: "hair-o-craft",
    title: "Hair O Craft",
    description: "Healthcare web platform for hair restoration clinics with online consultations and multi-branch booking.",
    category: "Healthcare & Clinic Web",
    image: "/images/portfolio/hairocraft.png",
    tags: ["Healthcare Web", "Online Consultation", "Multi-Branch Booking", "Balding Assessment"],
    client: "Hair O Craft Clinics",
    year: "2024",
    deliverables: ["Clinic Web Platform", "Interactive Balding Grade Tool", "Multi-City Appointment Flow", "Treatment Showcase CMS"],
    highlights: [
      "Interactive balding grade assessment tool for pre-consultation lead qualification",
      "Multi-branch appointment scheduling across Kerala, Bangalore, and Chennai clinics",
      "Procedure showcases for FUE hair transplants, PRP therapy and aesthetic skin care",
      "Integrated WhatsApp chat and multi-country code consultation enquiry engine",
    ],
  },
  {
    id: "insafe-steel",
    title: "Insafe Steel Construction",
    description: "Structural steel fabrication, industrial warehouses, mezzanine floors and heavy engineering contracting in Dubai.",
    category: "Industrial Engineering & Steel Works",
    image: "/images/portfolio/insafe.png",
    tags: ["Structural Steel", "Industrial Warehousing", "Mezzanine Floors", "Dubai Contracting"],
    client: "In Safe Steel Constructions Contracting LLC",
    year: "2024",
    deliverables: ["Industrial Contracting Web", "Project Engineering Portfolio", "Technical Capability Specs", "Quote Request Pipeline"],
    highlights: [
      "Industrial portfolio spotlighting warehouse frameworks, mezzanine platforms, and lift towers",
      "Technical specifications catalog detailing structural strengthening and villa extensions",
      "B2B contractor inquiry pipeline with architectural drawing upload support",
      "Compliance-ready showcase highlighting Dubai Municipality safety & engineering standards",
    ],
  },
  {
    id: "unigrant-academy",
    title: "Unigrant Academy",
    description: "Career-focused technical skill development institute offering Oil & Gas, AWS welding certs and global placements.",
    category: "Technical Education & Skills",
    image: "/images/portfolio/unigrant.png",
    tags: ["Technical Training", "Oil & Gas Courses", "AWS Welding Certs", "Placement Portal"],
    client: "Unigrant Academy",
    year: "2024",
    deliverables: ["Academic Web Portal", "Course & Syllabus Explorer", "Admission Lead Engine", "Gulf Placement Showcase"],
    highlights: [
      "Comprehensive syllabus viewer for Oil & Gas, AWS Welding, and Electrical Instrumentation tracks",
      "Direct online admission application and brochure download lead-generation system",
      "Interactive alumni placement tracker highlighting GCC and multinational job success",
      "Branch-specific batch timetables and live practical workshop walkthroughs",
    ],
  },
  {
    id: "ivaansh-international",
    title: "Ivaansh International",
    description: "Premier luxury houseboat cruises, multi-bedroom vessels and bespoke backwater events in Alappuzha, Kerala.",
    category: "Luxury Houseboat Tourism",
    image: "/images/portfolio/ivaansh.png",
    tags: ["Luxury Houseboat", "Backwater Tourism", "Cruise Booking", "Corporate Events"],
    client: "Ivaansh International",
    year: "2024",
    deliverables: ["Houseboat Fleet Showcase", "Cabin & Cruise Booking", "Event & Wedding Packages", "Virtual Itinerary Tours"],
    highlights: [
      "Interactive fleet viewer spanning intimate 1-bedroom cruisers up to 11-bedroom event vessels",
      "Real-time backwater cruise package inquiries with customized dining and route options",
      "Dedicated corporate conference and wedding celebration floating venue showcases",
      "High-resolution visual galleries capturing scenic Alleppey & Kumarakom backwater routes",
    ],
  },
  {
    id: "travel-hope",
    title: "Travel Hope",
    description: "A complete travel platform with booking, packages and enquiry management.",
    category: "Web & Booking Platform",
    image: "/images/portfolio/Travelhope.png",
    tags: ["Next.js", "Booking Engine", "UI/UX", "Payment Gateway"],
    client: "Travel Hope Tourism",
    year: "2024",
    deliverables: ["Responsive Web Platform", "Tour Booking Flow", "Custom CMS", "WhatsApp Integration"],
    highlights: [
      "Custom tour package browsing with interactive itinerary timeline",
      "Seamless WhatsApp and direct enquiry capture system",
      "Fast, mobile-first responsive architecture",
      "Comprehensive admin dashboard for package & booking management",
    ],
  },
  {
    id: "ayurgreen-spices",
    title: "Ayurgreen Spices",
    description: "An e-commerce website with WhatsApp ordering and product showcase.",
    category: "E-Commerce & Retail",
    image: "/images/portfolio/ayurgreen.png",
    tags: ["E-Commerce", "WhatsApp API", "Product Catalog", "Responsive"],
    client: "Ayurgreen Organics",
    year: "2024",
    deliverables: ["Online Storefront", "WhatsApp Order Cart", "Product Photography UI", "SEO Setup"],
    highlights: [
      "Dynamic spice catalog with real-time price & weight variants",
      "Direct WhatsApp checkout for effortless mobile conversions",
      "Rich product storytelling highlighting organic purity & origin",
      "Optimized for high-speed mobile loading across India & overseas",
    ],
  },
  {
    id: "dsoft-institute",
    title: "D Soft Institute",
    description: "Course website with lead generation and admission management.",
    category: "Education & Academy",
    image: "/images/portfolio/D-Soft-Institute.png",
    tags: ["EdTech", "Lead Capture", "Course Catalog", "Admissions"],
    client: "D Soft Technologies",
    year: "2024",
    deliverables: ["Course Catalog", "Lead Generation Funnel", "Student Portal", "Placement Showcase"],
    highlights: [
      "Structured syllabus view with downloadable brochures",
      "High-converting landing pages for active student intakes",
      "Automated lead delivery directly to the admissions desk",
      "Interactive student testimonials and placement showcase",
    ],
  },
  
 
 
  {
    id: "asian-avenue",
    title: "Asian Avenue",
    description: "Modern web showcase and catalog for European international supermarkets with multi-store locator.",
    category: "Supermarket & E-Commerce",
    image: "/images/portfolio/asianavenue.png",
    tags: ["International Groceries", "Store Locator", "Product Showcase", "Franchise Portal"],
    client: "Asian Avenue (Germany)",
    year: "2024",
    deliverables: ["Brand Showcase Web", "Multi-Store Locator (Germany)", "Category Product Catalog", "Franchise Enquiry Portal"],
    highlights: [
      "Curated international grocery catalog featuring Asian, African and Indian specialties",
      "Interactive store locator for physical branches across Neuss, Ludwigshafen and Mainz",
      "Seamless links to online marketplace partners and direct WhatsApp ordering",
      "B2B franchise inquiry funnel and European expansion partnership portal",
    ],
  },
  
  {
    id: "neurobase-ayurveda",
    title: "Neurobase Ayurveda",
    description: "Speciality Ayurvedic hospital web platform dedicated to brain, spine excellence and stroke rehabilitation.",
    category: "Ayurvedic Healthcare & Neurology",
    image: "/images/portfolio/neurobase.png",
    tags: ["Ayurveda Hospital", "Spine & Neuro Care", "Stroke Rehabilitation", "Doctor Consultation"],
    client: "Neurobase Ayurveda Speciality Centre",
    year: "2024",
    deliverables: ["Hospital Web Platform", "Department & Treatment CMS", "Doctor Appointment Flow", "Panchakarma Therapy Guide"],
    highlights: [
      "Specialized condition modules for stroke rehabilitation, Parkinson's, and spinal care",
      "Online consultation booking and patient preliminary case history intake",
      "Traditional Panchakarma therapy showcase with interactive procedure guides",
      "Multi-lingual patient support and direct WhatsApp hospital desk integration",
    ],
  },
  
 
  {
    id: "infig-content-hub",
    title: "Infig Content Hub",
    description: "Full-spectrum digital content agency delivering business copywriting, SEO articles and academic documents.",
    category: "Content Agency & Copywriting",
    image: "/images/portfolio/infig.png",
    tags: ["Content Writing", "SEO Copywriting", "Academic & SOP", "Company Profiles"],
    client: "Infig Content Hub",
    year: "2024",
    deliverables: ["Agency Showcase Platform", "Service Catalog & Samples", "Order & Quotation Engine", "Client Project Onboarding"],
    highlights: [
      "Multi-category service showcase covering SEO articles, company profiles, and SOP writing",
      "Interactive sample library with downloadable case studies and whitepapers",
      "Instant word-count quote calculator and project brief submission form",
      "SEO-optimized layout driving organic inbound client acquisitions across India & abroad",
    ],
  },
  
  
  {
    id: "phoenix-flow",
    title: "Phoenix Flow Global",
    description: "Dubai mainland and free zone company formation, PRO services, investor visas and corporate advisory.",
    category: "Corporate Services & Business Setup",
    image: "/images/portfolio/phoenix.png",
    tags: ["UAE Business Setup", "Company Formation", "PRO Services", "Investor Visas"],
    client: "Phoenix Flow Global LLC (Dubai)",
    year: "2024",
    deliverables: ["Corporate Advisory Web", "Jurisdiction & License Guide", "Cost Estimator Calculator", "Consultation Booking Desk"],
    highlights: [
      "Interactive business setup cost estimator across UAE mainland and top free zones",
      "Step-by-step corporate licensing guides for commercial, professional, and industrial setups",
      "Investor, golden visa, and family residency permit application inquiry funnels",
      "Direct WhatsApp and calendar booking connecting founders to senior setup consultants",
    ],
  },
  
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PORTFOLIO_PROJECTS.find(
    (p) => p.id.toLowerCase() === slug.toLowerCase()
  );
}

export function getAllProjectSlugs(): string[] {
  return PORTFOLIO_PROJECTS.map((p) => p.id);
}
