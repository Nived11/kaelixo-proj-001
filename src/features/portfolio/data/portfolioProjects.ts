export interface CaseStudyStat {
  stat: string;
  label: string;
  desc: string;
}

export interface ChallengeItem {
  title: string;
  desc: string;
  icon?: string;
}

export interface StrategyWorkflow {
  challengePoints: string[];
  strategyPoints: string[];
  solutionPoints: string[];
  processSteps: { label: string; icon: string }[];
}

export interface ShowcaseScreen {
  name: string;
  desc: string;
  image?: string;
}

export interface TechItem {
  name: string;
  desc: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
  icon?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  deliverables?: string[];
  highlights?: string[];

  // Rich Case Study Details
  heroTagline?: string;
  heroHeadline?: {
    prefix: string;
    highlight: string;
  };
  heroSubtitle?: string;
  projectType?: string;
  clientLogoText?: string;
  clientLogoTagline?: string;
  clientLogoImage?: string;
  heroLogoScale?: number;
  clientLogoImageDark?: string;
  heroBgImage?: string;
  heroMobileBgImage?: string;
  heroMockupImage?: string;

  snapshot?: {
    platform: string;
    duration: string;
    location: string;
    services: string;
    industry?: string;
    previewImage?: string;
    quickStats: CaseStudyStat[];
  };

  challenges?: {
    subtitle: string;
    items: ChallengeItem[];
    floatingBadges: string[];
    summaryBanner: string;
  };

  strategy?: StrategyWorkflow;

  showcase?: {
    subtitle: string;
    pills: string[];
    screens: ShowcaseScreen[];
  };

  techStack?: {
    image?: string;
    subtitle: string;
    technologies: TechItem[];
    guarantees: { title: string; desc: string }[];
  };

  featuresDelivered?: {
    subtitle: string;
    items: FeatureItem[];
  };

  results?: {
    imageOffsetY?: number;
    image?: string;
    headline: { prefix: string; highlight: string };
    subtitle: string;
    stats: CaseStudyStat[];
    footerTagline?: string;
  };
}

export const TRAVEL_HOPE_HERO_ASSETS = {
  heroBgImage: "/images/portfolio/travelhopebg.png",
  heroMobileBgImage: "/images/portfolio/travelhopemobilebg.png",
  heroMockupImage: "/images/portfolio/travelhopeimg.png",
};

export const PORTFOLIO_PROJECTS: ProjectItem[] = [


  // =========================================================================
  // 11. SAFARI FURNITURE
  // =========================================================================
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
    heroTagline: "CASE STUDY",
    clientLogoText: "Safari Furniture",
    clientLogoImage: "/images/portfolio/safari-furniture-logo.svg",
    heroLogoScale: 0.82,
    clientLogoImageDark: "/images/portfolio/safari-furniture-logo.svg",
    clientLogoTagline: "HOME & OFFICE EXCELLENCE",
    projectType: "Furniture E-Commerce & Showroom Platform",
    heroHeadline: {
      prefix: "Safari Furniture — Elevating Living & Workspaces",
      highlight: "Across the UAE with Digital Convenience",
    },
    heroSubtitle: "A comprehensive furniture e-commerce platform showcasing ergonomic home office setups, luxury living collections, in-house manufacturing, and all-UAE delivery.",
    heroBgImage: "/images/portfolio/safari-furniture-bg.png",
    heroMobileBgImage: "/images/portfolio/safari-furniture-bg.png",
    heroMockupImage: "/images/portfolio/safari-furniture-laptop.png",
    snapshot: {
      platform: "Shopify Plus & Next.js Headless",
      duration: "3.5 Months",
      location: "Sharjah & Ras Al Khaimah, UAE",
      services: "E-Commerce Storefront, Dimension Customizer, Showroom Locator, UAE Payment Gateway, SEO",
      previewImage: "/images/portfolio/safari-furniture.png",
      quickStats: [
        { stat: "3.6x", label: "Online Sales Growth", desc: "Massive uptick in direct-to-home furniture purchases" },
        { stat: "5,000+", label: "SKUs Cataloged", desc: "Office desks, ergonomic chairs, sofas, dining, and beds" },
        { stat: "7 Emirates", label: "Fast UAE Delivery", desc: "Free delivery and expert assembly across the Emirates" },
        { stat: "92%", label: "Customer Satisfaction", desc: "Praised for in-house customization and durable finishes" },
      ],
    },
    challenges: {
      subtitle: "Shoppers were hesitant to buy furniture online without verifying dimensions, visualizing wood finishes, or understanding delivery and assembly timelines.",
      items: [
        { title: "Dimension Anxiety", desc: "Customers worried whether large modular desks or sofas would fit into their rooms.", icon: "Maximize" },
        { title: "Complex Assembly Fears", desc: "Shoppers hesitated due to fear of complicated flat-pack assembly instructions.", icon: "Tool" },
        { title: "Showroom to Web Disconnect", desc: "Shoppers visiting Safari Mall showrooms couldn't easily view full color swatches online.", icon: "Store" },
        { title: "B2B Office Bulk Orders", desc: "Corporate clients needed instant quotes for 50+ workstations with CAD layout assistance.", icon: "Building" },
      ],
      floatingBadges: ["Room fit anxiety", "Assembly confusion", "Showroom catalog mismatch", "Bulk office quote delays"],
      summaryBanner: "Safari Furniture needed a trustworthy, visual e-commerce store with dimension guides and assembly assurance.",
    },
    strategy: {
      challengePoints: ["Room dimension uncertainties", "Assembly hesitation", "Showroom disconnect", "B2B corporate quoting lag"],
      strategyPoints: ["Built interactive Room Visualizer & dimension specs on every product", "Highlighted Free Delivery & White-Glove Professional Assembly across the UAE", "Integrated showroom virtual tour with QR code scanning in physical stores", "Created automated B2B bulk quote generator with space planning support"],
      solutionPoints: ["Accurate dimension-guided shopping", "Frictionless free assembly guarantee", "Omnichannel showroom-to-online experience", "Streamlined B2B corporate workstation orders"],
      processSteps: [
        { label: "Catalog UX", icon: "Grid" },
        { label: "Dimension Guide", icon: "Maximize" },
        { label: "Free Assembly", icon: "Tool" },
        { label: "Payment Gateway", icon: "CreditCard" },
        { label: "B2B Office", icon: "Building" },
        { label: "Retail SEO", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "Contemporary Scandinavian and modern luxury aesthetic highlighting warm wood grains, plush upholstery, and ergonomic functionality.",
      pills: ["3D Dimension Spec Sheets", "Free Assembly Scheduler", "Fabric & Color Swatches", "Corporate Office Workstations", "Click & Collect Showroom Pickup"],
      screens: [
        { name: "Furniture Home", desc: "Curated collections for Living, Dining, Bedroom & Office" },
        { name: "Product Page", desc: "Detailed dimensions, materials, and warranty information" },
        { name: "Office Solutions", desc: "Bulk workstation desks and ergonomic task chairs" },
        { name: "Checkout & Assembly", desc: "Schedule convenient delivery date and assembly slot" },
        { name: "Mobile Store", desc: "Instant furniture shopping from any smartphone" },
      ],
    },
    techStack: {
      image: "/images/portfolio/safari-furniture-tech.png",
      subtitle: "Engineered with resilient e-commerce tech capable of handling massive seasonal furniture sales promotions.",
      technologies: [
        { name: "Next.js & React", desc: "Sub-second product filtering by room, material, and price range." },
        { name: "Tailwind CSS", desc: "Clean modern design showcasing photography with high fidelity." },
        { name: "Shopify Headless", desc: "Rock-solid checkout supporting Tabby, Tamara, and credit cards." },
        { name: "Algolia Search", desc: "Instant predictive search across 5,000+ furniture items." },
        { name: "Cloudinary CDN", desc: "High-resolution zoom into upholstery fabric textures." },
        { name: "Google Analytics 4", desc: "Tracking customer purchase funnels across all 7 Emirates." },
        { name: "Dimension Customizer", desc: "Configure furniture dimensions." },
        { name: "Showroom Locator", desc: "Find nearby UAE showrooms." },
        { name: "Click & Collect", desc: "Select showroom pickup at checkout." },
      ],
      guarantees: [
        { title: "Free Assembly", desc: "Professional installation included." },
        { title: "UAE-Wide Delivery", desc: "Careful transport to all 7 Emirates." },
        { title: "Warranty Assured", desc: "Comprehensive structural warranty." },
        { title: "Buy Now Pay Later", desc: "Interest-free installment options with Tabby." },
      ],
    },
    featuresDelivered: {
      subtitle: "E-commerce capabilities delivered to give shoppers confidence when furnishing their homes and offices.",
      items: [
        { title: "Detailed Dimension Diagrams", desc: "Clear width, depth, and height schematics to guarantee room fit.", icon: "Maximize" },
        { title: "Free White-Glove Assembly", desc: "Professional technicians deliver, unbox, and assemble furniture in customer homes.", icon: "Tool" },
        { title: "Custom Manufacturing Desk", desc: "Request custom dimensions or upholstery for bespoke luxury sofas and headboards.", icon: "Scissors" },
        { title: "Corporate B2B Quote Engine", desc: "Discounts and floorplan assistance for bulk office workstations.", icon: "Building" },
        { title: "Buy Now Pay Later", desc: "Seamless 4-month interest-free installment checkout via Tabby and Tamara.", icon: "CreditCard" },
        { title: "Showroom Click & Collect", desc: "Order online and pick up at Safari Mall Sharjah or Ras Al Khaimah.", icon: "Store" },
        { title: "Live WhatsApp Consultant", desc: "Direct chat with furniture design specialists for decor advice.", icon: "MessageCircle" },
        { title: "UAE Furniture SEO", desc: "Top search ranking for 'office furniture UAE' and 'home furniture Sharjah'.", icon: "Search" },
      ],
    },
    results: {
      image: "/images/portfolio/safari-furniture-Resultsbg.png",
      imageOffsetY: -88,
      headline: { prefix: "Measurable Impact.", highlight: "Modern Living." },
      subtitle: "How digital commerce expanded Safari Furniture from a showroom staple into an all-UAE household name.",
      stats: [
        { stat: "3.6x", label: "Online Revenue Growth", desc: "Digital storefront contributed substantial new revenue stream." },
        { stat: "+75%", label: "Home Office Orders", desc: "Remote and hybrid workers furnished home offices seamlessly." },
        { stat: "85%", label: "Repeat Commercial Clients", desc: "Corporate offices reordered workstations and conference tables." },
        { stat: "4.8/5", label: "Delivery & Assembly Rating", desc: "Thousands of verified reviews praising punctuality and care." },
      ],
      footerTagline: "COMFORT | DURABILITY | MODERN DESIGN",
    },
  },



  // =========================================================================
  // 5. SAFARI MALL
  // =========================================================================
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
    heroTagline: "CASE STUDY",
    clientLogoText: "Safari Mall",
    clientLogoTagline: "A MALL FOR ALL",
    projectType: "Retail Hypermarket & Regional Mall Digital Experience",
    heroHeadline: {
      prefix: "Safari Mall — Powering GCC's Favorite",
      highlight: "Retail & Hypermarket Digital Portal",
    },
    heroSubtitle: "A high-performance digital hub unifying millions of shoppers across Qatar and the UAE with interactive weekly promotion flyers, store directories and mall deals.",
    snapshot: {
      platform: "Next.js & Cloud Edge",
      duration: "4 Months",
      location: "Sharjah, UAE & Doha, Qatar",
      services: "Mall Web Portal, Digital Leaflet Viewer, Branch Locator, Mobile Web App, SEO",
      previewImage: "/images/portfolio/safari-mall.png",
      quickStats: [
        { stat: "2.4M+", label: "Monthly Flyer Views", desc: "Digital leaflet engagement across Qatar & UAE" },
        { stat: "65%", label: "Mobile Users", desc: "Instant access to store deals without downloading heavy apps" },
        { stat: "9 Outlets", label: "Branches Unified", desc: "Hypermarkets and shopping malls seamlessly connected" },
        { stat: "0.8s", label: "Flyer Flip Speed", desc: "Instant high-res multi-page promotional catalog loading" },
      ],
    },
    challenges: {
      subtitle: "Safari Group printed millions of paper flyers weekly, but tech-savvy shoppers in the UAE and Qatar demanded immediate digital access to store discounts and mall directories.",
      items: [
        { title: "Heavy Print Flyer Dependency", desc: "High costs and slow distribution of weekly paper discount catalogs.", icon: "FileText" },
        { title: "Multi-Branch Disconnect", desc: "Shoppers were confused by differing offers between Sharjah, RAK, and Doha outlets.", icon: "MapPin" },
        { title: "Slow Mobile PDFs", desc: "Large PDF flyers were heavy, crashed mobile browsers, and lacked searchability.", icon: "AlertTriangle" },
        { title: "Leasing Inquiries Lag", desc: "Prospective retail tenants struggled to submit digital leasing applications.", icon: "Building" },
      ],
      floatingBadges: ["Costly print flyers", "Branch pricing confusion", "Slow clunky PDFs", "Unorganized leasing leads"],
      summaryBanner: "Safari needed an ultra-fast digital flyer engine and unified mall directory to engage millions of shoppers across the GCC.",
    },
    strategy: {
      challengePoints: ["Heavy print flyer costs", "Confusing branch-specific offers", "Slow PDF downloads on mobile", "Unorganized commercial leasing"],
      strategyPoints: ["Built interactive digital flyer viewer with zoom and page flipping", "Created smart geo-branch switcher for UAE and Qatar locations", "Optimized image tile compression for instant mobile loading", "Integrated digital tenant application and leasing inquiry portal"],
      solutionPoints: ["High-speed interactive promotion flyers", "Seamless branch-specific deal filtering", "Instant mobile web accessibility", "Streamlined commercial leasing pipeline"],
      processSteps: [
        { label: "Branch Architecture", icon: "Building" },
        { label: "Digital Leaflet", icon: "FileText" },
        { label: "Deals Engine", icon: "Tag" },
        { label: "Store Locator", icon: "MapPin" },
        { label: "Mobile Speed", icon: "Zap" },
        { label: "Leasing Desk", icon: "Briefcase" },
      ],
    },
    showcase: {
      subtitle: "Modern, vibrant retail interface that brings the energy of the hypermarket floor directly to smartphones and laptops.",
      pills: ["Digital Page-Flip Flyer", "Branch Switcher (UAE/Qatar)", "Mall Store Directory", "Daily Price Drops", "Tenant Leasing Portal"],
      screens: [
        { name: "Promotions Hub", desc: "Browse active grocery and electronics flyers" },
        { name: "Interactive Viewer", desc: "Zoom into product prices and validity dates" },
        { name: "Store Directory", desc: "Search food court, fashion, and gold outlets" },
        { name: "Branch Locator", desc: "Operating hours, maps, and customer helplines" },
        { name: "Mobile App View", desc: "One-tap access to weekly grocery savings" },
      ],
    },
    techStack: {
      subtitle: "Built to handle massive surges of hundreds of thousands of concurrent visitors when weekend promotion flyers drop.",
      technologies: [
        { name: "Next.js 14", desc: "Incremental static regeneration for lightning-fast flyer updates." },
        { name: "Tailwind CSS", desc: "Ultra-clean retail UI with responsive touch gestures." },
        { name: "Cloudflare Edge CDN", desc: "Cached assets across Middle East data centers for sub-second speeds." },
        { name: "Image Tiling Engine", desc: "High-resolution flyer zoom without massive bandwidth consumption." },
        { name: "Bilingual i18n", desc: "Instant toggle between English and Arabic layouts." },
        { name: "Google Analytics 4", desc: "Deep tracking of top-performing flyer categories and deals." },
        { name: "Store Directory", desc: "Find stores and branches from the mall portal." },
        { name: "Mobile Web App", desc: "Browse digital flyers and weekly deals on a phone." },
        { name: "SEO", desc: "Improve discovery of branch and promotion pages." },
      ],
      guarantees: [
        { title: "Peak Surge Ready", desc: "Handles millions of weekend shoppers." },
        { title: "Bilingual Ready", desc: "Full English & Arabic typography." },
        { title: "Zero Lag", desc: "Instant page-turn flyer transitions." },
        { title: "All-Device Sync", desc: "Flawless on iOS, Android, and desktop." },
      ],
    },
    featuresDelivered: {
      subtitle: "High-impact retail capabilities designed to drive footfall and digital engagement.",
      items: [
        { title: "Interactive Flyer Flip", desc: "Smooth flipbook-style viewer for weekly grocery and electronics flyers.", icon: "BookOpen" },
        { title: "Branch Offer Filter", desc: "Filter offers specifically for Sharjah, Ras Al Khaimah, or Doha branches.", icon: "MapPin" },
        { title: "Mega Deals Showcase", desc: "Real-time promotion countdowns for Big Save Bonanzas.", icon: "Zap" },
        { title: "Mall Floor Directory", desc: "Interactive directory for anchor stores, dining, and gold shops.", icon: "Compass" },
        { title: "WhatsApp Deals Alerts", desc: "Subscribe to receive new promotional leaflets directly on WhatsApp.", icon: "MessageCircle" },
        { title: "Commercial Leasing Hub", desc: "Online application submission for retail brands and kiosks.", icon: "Building" },
        { title: "Raffle Draw Tracker", desc: "Verify coupon codes and view winners for luxury car giveaways.", icon: "Award" },
        { title: "Arabic & English Toggle", desc: "Fluid RTL and LTR localization across the entire portal.", icon: "Globe" },
      ],
    },
    results: {
      headline: { prefix: "Measurable Impact.", highlight: "Massive Footfall." },
      subtitle: "How digital flyers and omnichannel presence transformed retail reach for Safari Group.",
      stats: [
        { stat: "2.4M+", label: "Monthly Digital Leaflet Reads", desc: "Substantial reduction in paper print flyer dependency." },
        { stat: "+40%", label: "Mall Weekend Footfall", desc: "Digital promotions drove thousands of families into physical stores." },
        { stat: "0.8s", label: "Average Leaflet Load", desc: "Seamless browsing experience even on budget smartphones." },
        { stat: "150K+", label: "WhatsApp Subscribers", desc: "Direct digital marketing channel delivering weekly offers." },
      ],
      footerTagline: "A MALL FOR ALL | CONVENIENCE & QUALITY",
    },
  },



  // =========================================================================
  // 4. DREAM HOLIDAYS KERALA
  // =========================================================================
  {
    id: "dream-holidays-kerala",
    title: "Dream Holidays Kerala",
    description: "A travel package website with destination showcases, houseboat bookings and custom holiday planners.",
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
    heroTagline: "CASE STUDY",
    clientLogoText: "Dream Holidays",
    clientLogoTagline: "EXPLORE GOD'S OWN COUNTRY",
    projectType: "Destination Tourism Portal & Itinerary Planner",
    heroHeadline: {
      prefix: "Dream Holidays — Crafting Unforgettable",
      highlight: "Kerala Travel & Houseboat Escapes",
    },
    heroSubtitle: "An inspirational travel portal turning vacation dreams into personalized holiday packages, luxury houseboat stays, and hill-station tours.",
    snapshot: {
      platform: "WordPress & Custom React Components",
      duration: "2 Months",
      location: "Cochin, Kerala",
      services: "UI/UX Design, Package Engine, WhatsApp Booking, Itinerary Builder, SEO",
      previewImage: "/images/portfolio/dreamholidays.png",
      quickStats: [
        { stat: "4.8x", label: "Package Enquiries", desc: "Huge surge in seasonal holiday enquiries" },
        { stat: "55%", label: "Faster Booking Flow", desc: "Direct WhatsApp connection simplified trip confirmations" },
        { stat: "80,000+", label: "Monthly Travelers", desc: "Exploring destinations across Munnar, Alleppey & Wayanad" },
        { stat: "120+", label: "Curated Itineraries", desc: "Honeymoon, family, luxury and solo tour plans" },
      ],
    },
    challenges: {
      subtitle: "Travelers were confused by generic package websites that didn't provide day-by-day itineraries, transparent inclusions, or fast customized quotes.",
      items: [
        { title: "Generic Tour Packages", desc: "Lack of transparent day-by-day schedules led to endless back-and-forth emails.", icon: "Map" },
        { title: "Slow Quote Requests", desc: "Visitors waited 24-48 hours for customized quotes, often booking competitors instead.", icon: "Clock" },
        { title: "Weak Visual Presentation", desc: "Stunning Kerala landscapes were cramped into low-resolution, dated photo galleries.", icon: "Image" },
        { title: "Missing Mobile Experience", desc: "Tourists searching while traveling couldn't easily browse or call on smartphones.", icon: "Smartphone" },
      ],
      floatingBadges: ["Unclear tour inclusions", "Delayed quote delivery", "Low-res imagery", "Poor mobile usability"],
      summaryBanner: "Dream Holidays required an immersive visual travel showcase that allowed tourists to build customized trip itineraries and receive quotes instantly.",
    },
    strategy: {
      challengePoints: ["Vague itinerary details", "Slow quote turnaround", "Dated imagery", "Difficult mobile trip planning"],
      strategyPoints: ["Created interactive day-wise itinerary cards with route maps", "Built 60-second instant quote calculator connected to WhatsApp", "Implemented full-bleed retina photography of Kerala destinations", "Developed mobile-first UI with tap-to-call and quick WhatsApp booking"],
      solutionPoints: ["Transparent day-by-day itineraries", "Instant automated quote generation", "Stunning visual destination guides", "Flawless mobile traveler experience"],
      processSteps: [
        { label: "Destination Guides", icon: "MapPin" },
        { label: "Package Filters", icon: "Layers" },
        { label: "Itinerary Builder", icon: "Calendar" },
        { label: "Quote Engine", icon: "DollarSign" },
        { label: "WhatsApp Desk", icon: "MessageCircle" },
        { label: "SEO Authority", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "Breathtaking visual design capturing the tranquil backwaters, lush tea plantations, and golden coastlines of Kerala.",
      pills: ["Day-Wise Itinerary Cards", "Instant Package Calculator", "Houseboat Cabin Viewer", "Inclusions & Exclusions Checklist", "WhatsApp Direct Desk"],
      screens: [
        { name: "Destinations Hub", desc: "Explore Munnar, Thekkady, Alleppey & Kovalam" },
        { name: "Itinerary Timeline", desc: "Detailed hour-by-hour vacation schedules" },
        { name: "Quote Calculator", desc: "Pick hotel tier, vehicle type & group size" },
        { name: "Houseboat Fleet", desc: "Deluxe, premium and luxury boat categories" },
        { name: "Mobile View", desc: "Effortless vacation planning on the go" },
      ],
    },
    techStack: {
      subtitle: "Engineered with optimized content management and lightning-fast image loading to handle heavy visual media.",
      technologies: [
        { name: "React & Next.js", desc: "Fluid frontend transitions with interactive package filters." },
        { name: "Tailwind CSS", desc: "Bespoke travel styling and responsive layouts." },
        { name: "Headless CMS", desc: "Effortless creation of seasonal holiday offers." },
        { name: "WhatsApp Cloud API", desc: "Sends custom itinerary PDFs directly to customer phones." },
        { name: "Cloudinary CDN", desc: "Adaptive image compression for high-res photography." },
        { name: "Google Analytics 4", desc: "Tracking campaign conversions from domestic and GCC travelers." },
        { name: "WordPress", desc: "Manage travel content and seasonal offers." },
        { name: "Itinerary Builder", desc: "Organise trips into day-by-day plans." },
        { name: "SEO", desc: "Improve discovery of holiday packages." },
      ],
      guarantees: [
        { title: "Fast Media Delivery", desc: "Sub-second image rendering." },
        { title: "24/7 Availability", desc: "High-uptime cloud infrastructure." },
        { title: "Global CDN", desc: "Quick load times for GCC & European visitors." },
        { title: "Zero Data Loss", desc: "Secure enquiry backup on multiple servers." },
      ],
    },
    featuresDelivered: {
      subtitle: "Comprehensive travel technology features built to maximize tourist bookings and simplify management.",
      items: [
        { title: "Smart Package Filter", desc: "Sort by budget, duration, theme (honeymoon, family, adventure).", icon: "Sliders" },
        { title: "Transparent Inclusions", desc: "Clear breakdown of cab, meals, sightseeing, and hotel taxes.", icon: "CheckSquare" },
        { title: "Custom Trip Builder", desc: "Tailor custom multi-city holiday packages in 3 easy steps.", icon: "Compass" },
        { title: "Interactive Houseboat Deck", desc: "360-degree views of luxury backwater houseboat bedrooms.", icon: "Ship" },
        { title: "Live WhatsApp Desk", desc: "Instant response from experienced holiday planners.", icon: "MessageCircle" },
        { title: "Multi-Currency Switcher", desc: "View package estimates in INR, AED, USD, and EUR.", icon: "DollarSign" },
        { title: "Customer Video Reviews", desc: "Real traveler reviews recorded across Kerala destinations.", icon: "Video" },
        { title: "SEO Destination Hubs", desc: "High organic rank for 'Kerala tour packages from Mumbai/Delhi/Dubai'.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Real Results.", highlight: "Tourism Leadership." },
      subtitle: "The metrics driving Dream Holidays to the forefront of Kerala holiday management.",
      stats: [
        { stat: "4.8x", label: "Holiday Enquiries", desc: "Significant uptick in confirmed traveler bookings." },
        { stat: "55%", label: "Faster Booking Cycle", desc: "WhatsApp automated quotes closed deals within 24 hours." },
        { stat: "+80%", label: "Organic Search Growth", desc: "Ranked on Google Page 1 for high-intent Kerala travel terms." },
        { stat: "96%", label: "Positive Traveler Reviews", desc: "Thousands of satisfied tourists recommending Dream Holidays." },
      ],
      footerTagline: "DREAM | EXPLORE | DISCOVER",
    },
  },



  // =========================================================================
  // 8. DATS INTERIORS
  // =========================================================================
  {
    id: "dats-interiors",
    title: "DATs Interiors",
    description: "Luxury interior fit-out contracting and architectural design portfolio for commercial and residential spaces.",
    category: "Architecture & Interior Fitout",
    image: "/images/portfolio/datsinterior.png",
    tags: ["Interior Fitout", "Luxury Residential", "Commercial Fitout", "Dubai Architecture"],
    client: "DATs Interior Fitout LLC",
    year: "2024",
    deliverables: ["Commercial & Villa Fitouts", "Turnkey Interior Contracting", "3D Visualization Portfolio", "Bespoke Joinery Showcase"],
    highlights: [
      "High-end project galleries showcasing luxury villas, offices, and retail fit-outs",
      "Interactive 3D space visualizer and turnkey scope of work breakdown",
      "Consultation and quotation intake funnel for UAE developers and homeowners",
      "Mobile-optimized portfolio highlighting custom joinery and premium finishes",
    ],
    heroTagline: "CASE STUDY",
    clientLogoText: "DATs Interior",
    clientLogoTagline: "DUBAI FIT-OUT EXCELLENCE",
    projectType: "Luxury Interior Architecture & Turnkey Fit-Out Portfolio",
    heroHeadline: {
      prefix: "DATs Interiors — Crafting Bespoke Luxury",
      highlight: "For UAE's Premier Commercial & Residential Spaces",
    },
    heroSubtitle: "A sophisticated architectural portfolio showcasing world-class turnkey interior fit-outs, bespoke joinery, and luxury villa transformations across Dubai.",
    snapshot: {
      platform: "Next.js & High-End Portfolio CMS",
      duration: "3 Months",
      location: "Dubai, United Arab Emirates",
      services: "Luxury Web Design, 3D Project Showcase, RFP Intake Funnel, Mobile UI, SEO",
      previewImage: "/images/portfolio/datsinterior.png",
      quickStats: [
        { stat: "3.8x", label: "Commercial RFPs", desc: "Surge in high-value fit-out contract inquiries" },
        { stat: "150+", label: "Completed Projects", desc: "Luxury villas, corporate offices, and retail boutiques" },
        { stat: "100%", label: "Turnkey Capability", desc: "From municipal approvals to custom millwork fabrication" },
        { stat: "AED 50M+", label: "Project Value Handled", desc: "Trusted by top UAE developers, brands, and private villa owners" },
      ],
    },
    challenges: {
      subtitle: "DATs had delivered remarkable luxury spaces across Dubai, but their online presence didn't convey the prestige, municipal approval capability, or fine craftsmanship of their physical work.",
      items: [
        { title: "Understated Digital Brand", desc: "Their previous website felt generic and failed to attract high-budget villa and commercial clients.", icon: "Layout" },
        { title: "Complex Scope Communication", desc: "Clients didn't understand the difference between basic design and full DED/Civil Defence approved turnkey fit-outs.", icon: "Shield" },
        { title: "Weak Mobile Portfolio", desc: "Architectural drawings and high-res villa photos took too long to load on smartphones.", icon: "Image" },
        { title: "Lack of RFP Intake", desc: "No structured portal for developers to upload blueprints, BOQs, and floorplans.", icon: "FileText" },
      ],
      floatingBadges: ["Generic web appearance", "Unclear turnkey scope", "Slow image loading", "Unorganized commercial RFPs"],
      summaryBanner: "DATs required a refined, editorial-grade digital portfolio that reflected luxury Dubai standards and converted high-value fit-out contracts.",
    },
    strategy: {
      challengePoints: ["Generic digital branding", "Unclear municipal approval credentials", "Slow visual rendering", "Missing blueprint upload mechanism"],
      strategyPoints: ["Created dark-mode luxury aesthetic with subtle gold and bronze accents", "Structured clear turnkey service pages highlighting joinery and authority approvals", "Implemented adaptive retina image CDN for instant architectural walk-throughs", "Built confidential RFP submission funnel with CAD/PDF attachment capability"],
      solutionPoints: ["Prestigious architectural brand identity", "Transparent turnkey capability breakdown", "Sub-second high-res gallery loading", "Streamlined developer RFP intake portal"],
      processSteps: [
        { label: "Luxury Design", icon: "Layout" },
        { label: "Project Gallery", icon: "Image" },
        { label: "Authority Specs", icon: "ShieldCheck" },
        { label: "RFP Portal", icon: "FileText" },
        { label: "Speed Optimization", icon: "Zap" },
        { label: "UAE Luxury SEO", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "An editorial architectural aesthetic blending minimalism, refined typography, and full-screen luxury craftsmanship.",
      pills: ["Full-Bleed Project Galleries", "Commercial vs Villa Categorization", "Authority Approval Credentials", "Bespoke Joinery Showcase", "Instant Consultation Booking"],
      screens: [
        { name: "Portfolio Showcase", desc: "High-resolution full-screen villa and office fit-outs" },
        { name: "Service Details", desc: "MEP, joinery, glass partitions, and Civil Defence approvals" },
        { name: "Case Study View", desc: "Before, 3D render, and finished handover comparison" },
        { name: "RFP Submission", desc: "Upload blueprints and request quotation" },
        { name: "Mobile Showcase", desc: "Smooth touch-friendly architectural browsing" },
      ],
    },
    techStack: {
      subtitle: "Built with bleeding-edge web technology ensuring fluid animations and instant high-res photo delivery across the GCC.",
      technologies: [
        { name: "Next.js", desc: "High-performance framework delivering smooth page transitions." },
        { name: "Tailwind CSS", desc: "Custom luxury color palette with dark slate and gold accents." },
        { name: "Framer Motion", desc: "Subtle architectural scroll reveals and image fade-ins." },
        { name: "AWS S3 & CloudFront", desc: "Secure multi-gigabyte blueprint and project media storage." },
        { name: "WhatsApp Business API", desc: "Direct VIP link connecting clients with Senior Project Directors." },
        { name: "Google Analytics 4", desc: "Tracking luxury real estate and commercial contractor leads." },
        { name: "Portfolio CMS", desc: "Manage commercial and residential project content." },
        { name: "RFP Intake", desc: "Collect project details from prospective clients." },
        { name: "SEO", desc: "Improve discovery of fitout and portfolio pages." },
      ],
      guarantees: [
        { title: "Turnkey Assurance", desc: "Full Dubai municipal authority approvals." },
        { title: "In-House Joinery", desc: "Custom manufacturing and millwork." },
        { title: "On-Time Handover", desc: "Strict adherence to project timelines." },
        { title: "Defect Liability", desc: "Comprehensive post-handover warranty." },
      ],
    },
    featuresDelivered: {
      subtitle: "Sophisticated digital tools engineered to engage discerning property owners and corporate decision makers.",
      items: [
        { title: "Architectural Visual Galleries", desc: "Filter by Luxury Villa, Corporate Office, Retail, and Hospitality spaces.", icon: "Image" },
        { title: "3D Render vs Reality Comparison", desc: "Interactive slider showing initial concept render vs final completed space.", icon: "Sliders" },
        { title: "Authority Approval Guide", desc: "Breakdown of Dubai Municipality, Civil Defence, and Tecom compliance expertise.", icon: "ShieldCheck" },
        { title: "Commercial RFP Portal", desc: "Developers can securely upload architectural drawings and BOQs for tenders.", icon: "Upload" },
        { title: "Joinery Factory Virtual Tour", desc: "Highlighting DATs' in-house custom woodworking and metal fabrication facility.", icon: "Tool" },
        { title: "VIP Consultation Scheduler", desc: "Book an on-site consultation or office visit in Business Bay.", icon: "Calendar" },
        { title: "Direct WhatsApp Line", desc: "Instant access to senior interior estimators.", icon: "MessageCircle" },
        { title: "Luxury SEO Leadership", desc: "Top search ranking for 'luxury interior fit out company Dubai'.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Measurable Impact.", highlight: "Prestige & Contracts." },
      subtitle: "How high-end digital presentation elevated DATs Interiors into Dubai's top tier of fit-out contractors.",
      stats: [
        { stat: "3.8x", label: "Commercial Inquiries", desc: "Attracted multi-million dirham corporate and retail tenders." },
        { stat: "+60%", label: "Average Contract Value", desc: "Shifted inbound inquiries toward ultra-luxury villa renovations." },
        { stat: "1.1s", label: "Gallery Load Time", desc: "High-resolution architectural photography rendered without lag." },
        { stat: "#1 Rank", label: "Dubai Fit-Out Rankings", desc: "Strong organic presence among developers and architects." },
      ],
      footerTagline: "PRECISION | CRAFTSMANSHIP | LUXURY",
    },
  },



  // =========================================================================
  // 10. FINEXX TRAVELS
  // =========================================================================
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
    heroTagline: "CASE STUDY",
    clientLogoText: "Finexx Travels",
    clientLogoTagline: "PREMIER EVENT & FLEET MOBILITY",
    projectType: "Luxury Transportation & Corporate Fleet Management Web",
    heroHeadline: {
      prefix: "Finexx Travels — Elite Chauffeur Logistics",
      highlight: "For Celebrities, VIPs & Corporate Summits",
    },
    heroSubtitle: "A world-class luxury fleet portal showcasing exotic supercars, vintage classics, corporate coaches, and discreet celebrity protection transit across Kerala and Bangalore.",
    snapshot: {
      platform: "Next.js & Fleet Logistics CMS",
      duration: "2.5 Months",
      location: "Kochi, Kerala & Bangalore, India",
      services: "Fleet Web Platform, VIP Booking Engine, Corporate Logistics Desk, SEO",
      previewImage: "/images/portfolio/finexx.png",
      quickStats: [
        { stat: "3.2x", label: "Corporate Contracts", desc: "Growth in long-term corporate transit partnerships" },
        { stat: "150+", label: "Luxury Vehicles", desc: "Supercars, Mercedes, Range Rovers, Urbania & Vintage fleet" },
        { stat: "500+", label: "Celebrity Transfers", desc: "Flawless shadow logistics for film stars, VIPs & dignitaries" },
        { stat: "99.8%", label: "On-Time Dispatch", desc: "Precision transit coordination across South India" },
      ],
    },
    challenges: {
      subtitle: "High-net-worth clients, wedding planners, and corporate event managers needed immediate proof of fleet condition, chauffeur professionalism, and custom package pricing.",
      items: [
        { title: "Fleet Credibility Verification", desc: "Clients wanted to see real photos of exotic and vintage cars, not generic stock images.", icon: "Car" },
        { title: "Complex Wedding Logistics", desc: "Managing 50+ vehicles for high-profile weddings required centralized itinerary coordination.", icon: "Users" },
        { title: "Corporate Billing Portals", desc: "MNCs in Bangalore and Kochi required formal GST invoicing and chauffeur background verification.", icon: "FileText" },
        { title: "Urgent VIP Transfers", desc: "Last-minute airport protocol and shadow security transfers required 24/7 booking response.", icon: "Clock" },
      ],
      floatingBadges: ["Unverified fleet photos", "Chaotic wedding logistics", "Manual corporate billing", "Last-minute VIP requests"],
      summaryBanner: "Finexx needed a sleek, ultra-responsive digital fleet hub that commanded prestige and closed VIP bookings in minutes.",
    },
    strategy: {
      challengePoints: ["Unverified fleet authenticity", "Wedding guest logistics chaos", "Manual corporate tenders", "Urgent VIP requests"],
      strategyPoints: ["Photographed authentic fleet including Rolls Royce, Urus, and vintage cars", "Engineered wedding and event group booking calculators", "Developed corporate client portal with instant GST-ready quotes", "Created direct 24/7 VIP hotline with instant chauffeur dispatch"],
      solutionPoints: ["Prestige fleet visual showcase", "Seamless wedding mobility planning", "Corporate billing automation", "Instant VIP concierge booking"],
      processSteps: [
        { label: "Fleet Showcase", icon: "Car" },
        { label: "VIP Protocol", icon: "ShieldCheck" },
        { label: "Event Calculator", icon: "Calendar" },
        { label: "Tariff Engine", icon: "DollarSign" },
        { label: "WhatsApp Desk", icon: "MessageSquare" },
        { label: "Luxury SEO", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "Dark, cinematic automotive aesthetic evoking speed, prestige, and executive refinement.",
      pills: ["Exotic Supercar Gallery", "Vintage Wedding Cars", "Executive Van & Bus Fleet", "Celebrity Protocol Desk", "Instant Tariff Estimator"],
      screens: [
        { name: "Fleet Overview", desc: "Filter by Supercars, Luxury Sedans, Vans & Vintage" },
        { name: "Vehicle Detail", desc: "Specs, seating capacity, interior photos, and hourly rates" },
        { name: "Wedding Mobility", desc: "Custom fleet packages for bride, groom, and wedding guests" },
        { name: "Corporate Portal", desc: "Dedicated employee shuttle and event RFP form" },
        { name: "Mobile View", desc: "Instant booking and direct WhatsApp chauffeur dispatch" },
      ],
    },
    techStack: {
      subtitle: "Built with high-speed modern technologies delivering rich automotive photography without loading lag.",
      technologies: [
        { name: "Next.js", desc: "Blazing fast page loads with instant image transitions." },
        { name: "Tailwind CSS", desc: "Sleek automotive dark-mode theme with crimson accents." },
        { name: "Cloudinary CDN", desc: "High-definition vehicle photography optimized for mobile screens." },
        { name: "WhatsApp Business API", desc: "Immediate connection with 24/7 Fleet Dispatchers." },
        { name: "Google Analytics 4", desc: "Tracking luxury wedding and corporate event mobility demand." },
        { name: "Vercel Edge", desc: "Guaranteed 99.99% uptime across all regional inquiries." },
        { name: "Fleet Logistics CMS", desc: "Manage fleet listings and travel content." },
        { name: "VIP Booking Engine", desc: "Capture private transfer and vehicle hire requests." },
        { name: "SEO", desc: "Improve discovery of fleet and transfer services." },
      ],
      guarantees: [
        { title: "Pristine Vehicles", desc: "Showroom-condition sanitized fleet." },
        { title: "Trained Chauffeurs", desc: "Background-verified professional drivers." },
        { title: "Discreet & Secure", desc: "Confidentiality guaranteed for VIP guests." },
        { title: "24/7 Dispatch", desc: "Always on standby across Kerala & Bangalore." },
      ],
    },
    featuresDelivered: {
      subtitle: "High-end mobility digital features designed to simplify group transport and VIP reservations.",
      items: [
        { title: "Exotic & Vintage Fleet Viewer", desc: "Detailed showcases for Lamborghini, Mercedes Maybach, and classic vintage models.", icon: "Car" },
        { title: "Wedding Logistics Planner", desc: "Bundle luxury bridal cars with luxury passenger travelers (Force Urbania).", icon: "Heart" },
        { title: "Instant Tariff Estimator", desc: "Calculate transparent estimates based on kilometers, duration, and vehicle tier.", icon: "DollarSign" },
        { title: "VIP & Celebrity Security Desk", desc: "Discreet close-protection transfers with armed shadow support coordination.", icon: "ShieldCheck" },
        { title: "Corporate Transport RFP", desc: "Dedicated corporate request forms with GST invoice generation.", icon: "Briefcase" },
        { title: "Airport Protocol Booking", desc: "Direct flight number tracking and tarmac pickup coordination.", icon: "Navigation" },
        { title: "Instant WhatsApp Concierge", desc: "Connect instantly with senior fleet logistics managers.", icon: "MessageCircle" },
        { title: "Automotive SEO Rank", desc: "Ranked #1 for 'luxury car rental Kerala' and 'wedding cars Bangalore'.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Real Results.", highlight: "Flawless Execution." },
      subtitle: "How Finexx cemented its position as South India's undisputed leader in luxury and event transportation.",
      stats: [
        { stat: "3.2x", label: "Corporate Bookings", desc: "Partnered with premier IT companies and multinational summits." },
        { stat: "99.8%", label: "On-Time Dispatch Rate", desc: "Unmatched punctuality record for airport and VIP events." },
        { stat: "+80%", label: "Wedding Inquiries", desc: "Destination wedding planners chose Finexx as preferred fleet partner." },
        { stat: "5.0/5", label: "VIP Client Satisfaction", desc: "Trusted by film industry celebrities and executive delegations." },
      ],
      footerTagline: "PRESTIGE | PUNCTUALITY | EXCELLENCE",
    },
  },



  // =========================================================================
  // 6. HAIR O CRAFT
  // =========================================================================
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
    heroTagline: "CASE STUDY",
    clientLogoText: "Hair O Craft",
    clientLogoTagline: "RESTORE YOUR CONFIDENCE",
    projectType: "Medical Clinic Platform & Patient Consultation Funnel",
    heroHeadline: {
      prefix: "Hair O Craft — Modern Healthcare Web",
      highlight: "For Leading Hair Restoration Clinics",
    },
    heroSubtitle: "A trusted medical aesthetic portal connecting patients with certified specialists, interactive balding grade tools, and seamless appointment scheduling across South India.",
    snapshot: {
      platform: "Next.js & Custom Healthcare CMS",
      duration: "3.5 Months",
      location: "Kochi, Kerala & Bangalore, India",
      services: "Healthcare Web Design, Consultation Booking Engine, Balding Assessment Tool, SEO",
      previewImage: "/images/portfolio/hairocraft.png",
      quickStats: [
        { stat: "5.2x", label: "Consultation Bookings", desc: "High surge in qualified patient consultation requests" },
        { stat: "80%", label: "Form Completion Rate", desc: "Guided balding grade selector improved user confidence" },
        { stat: "14+", label: "Clinic Branches", desc: "Seamless appointment routing across Kerala, TN & Karnataka" },
        { stat: "4.8/5", label: "Patient Trust Rating", desc: "Showcasing thousands of verified before-and-after results" },
      ],
    },
    challenges: {
      subtitle: "Hair restoration is a sensitive medical decision; patients struggled with anxiety, lack of clear procedure details, and cumbersome appointment booking across multiple city branches.",
      items: [
        { title: "Patient Hesitation & Fear", desc: "Users lacked understanding of painless FUE procedures and recovery timelines.", icon: "HelpCircle" },
        { title: "Manual Triage Overload", desc: "Clinic receptionists spent hours evaluating patient photos over random messaging apps.", icon: "PhoneCall" },
        { title: "Multi-Branch Routing", desc: "Patients in Calicut, Trivandrum, or Bangalore often booked the wrong branch schedules.", icon: "MapPin" },
        { title: "Sensitive Data Security", desc: "Patient contact numbers and private scalp photos needed encrypted, HIPAA-conscious handling.", icon: "Lock" },
      ],
      floatingBadges: ["Patient procedure anxiety", "Manual photo triage", "Branch booking errors", "Data confidentiality concerns"],
      summaryBanner: "Hair O Craft needed an authoritative, empathetic medical portal that educated patients, assessed balding stages, and routed appointments securely.",
    },
    strategy: {
      challengePoints: ["Hesitation around transplant procedures", "Time-consuming manual triage", "Branch scheduling confusion", "Patient data privacy"],
      strategyPoints: ["Built interactive visual Balding Grade Assessment tool", "Engineered intelligent branch routing with doctor schedule calendars", "Showcased doctor credentials, sterile surgical suites, and verified results", "Enforced encrypted lead intake with automated WhatsApp confirmation"],
      solutionPoints: ["Empathetic, educational patient experience", "Pre-qualified clinical consultation leads", "Frictionless multi-city booking", "HIPAA-aligned data protection"],
      processSteps: [
        { label: "Clinical UX", icon: "Heart" },
        { label: "Balding Tool", icon: "Activity" },
        { label: "Doctor Showcase", icon: "UserCheck" },
        { label: "Branch Routing", icon: "MapPin" },
        { label: "WhatsApp Desk", icon: "MessageSquare" },
        { label: "Medical SEO", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "A clean, clinical aesthetic built on reassuring calm tones, medical authority, and patient-first transparency.",
      pills: ["Balding Grade Selector", "Multi-City Branch Picker", "Verified Results Gallery", "Direct Doctor Q&A", "Confidential Photo Consultation"],
      screens: [
        { name: "Clinical Home", desc: "Welcoming introduction to hair & skin treatments" },
        { name: "Balding Assessment", desc: "Interactive grade I-VII visual stage selector" },
        { name: "Results Gallery", desc: "Filter by FUE transplant, PRP, or beard restoration" },
        { name: "Doctor Profiles", desc: "Credentials, certifications, and experience" },
        { name: "Mobile Booking", desc: "Schedule clinic consultation in 60 seconds" },
      ],
    },
    techStack: {
      subtitle: "Constructed with ultra-reliable web standards ensuring total patient privacy, speed, and smooth multi-branch synchronization.",
      technologies: [
        { name: "Next.js", desc: "Fast server rendering delivering high Google search authority for healthcare queries." },
        { name: "Tailwind CSS", desc: "Soothing clinical styling with modern typography and spacing." },
        { name: "PostgreSQL & Prisma", desc: "Encrypted patient database with strict access control." },
        { name: "Clinic CRM Sync", desc: "Direct integration into doctor consultation calendars." },
        { name: "International Phone Auth", desc: "Country-code selector with SMS OTP verification." },
        { name: "Cloudflare SSL", desc: "End-to-end encryption safeguarding sensitive medical inquiries." },
        { name: "Healthcare CMS", desc: "Manage treatment and clinic information." },
        { name: "Balding Assessment", desc: "Guide visitors through the interactive assessment." },
        { name: "Consultation Booking", desc: "Capture appointment requests across branches." },
      ],
      guarantees: [
        { title: "Strict Privacy", desc: "Encrypted patient data storage." },
        { title: "Verified Doctors", desc: "Authentic medical credentials." },
        { title: "Instant Confirmation", desc: "Immediate SMS & WhatsApp booking alerts." },
        { title: "Zero Downtime", desc: "24/7 accessible healthcare portal." },
      ],
    },
    featuresDelivered: {
      subtitle: "Specialized clinical digital features built to streamline patient triage and boost clinical trust.",
      items: [
        { title: "Interactive Balding Assessment", desc: "Select Norwood balding grade to receive customized preliminary treatment advice.", icon: "Activity" },
        { title: "Multi-Location Clinic Hub", desc: "Book appointments seamlessly across Kochi, Calicut, Bangalore, and Chennai.", icon: "MapPin" },
        { title: "Procedure Explainers", desc: "In-depth guides for FUE, Micro-FUE, PRP therapy, and scalp micro-pigmentation.", icon: "BookOpen" },
        { title: "Confidential Photo Upload", desc: "Securely upload scalp photos for preliminary surgeon evaluation.", icon: "Camera" },
        { title: "Verified Transformation Slider", desc: "Interactive before-and-after image comparison showing month-by-month regrowth.", icon: "Sliders" },
        { title: "International NRI Desk", desc: "Dedicated consultation scheduling for Gulf and overseas patients.", icon: "Globe" },
        { title: "Automated Reminders", desc: "SMS and WhatsApp notifications reminding patients of their scheduled consultation.", icon: "Bell" },
        { title: "Medical SEO Leadership", desc: "Top Google ranking for 'hair transplant in Kerala' and related specialist queries.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Real Results.", highlight: "Renewed Confidence." },
      subtitle: "How a modernized digital patient journey transformed clinical inquiries across Hair O Craft branches.",
      stats: [
        { stat: "5.2x", label: "Consultation Growth", desc: "Higher volume of serious, pre-informed prospective patients." },
        { stat: "80%", label: "Tool Completion Rate", desc: "Thousands completed the interactive balding grade assessment monthly." },
        { stat: "-65%", label: "Consultation No-Shows", desc: "Automated WhatsApp reminders ensured patients arrived on time." },
        { stat: "4.8/5", label: "Google Review Rating", desc: "Consistently rated as South India's premier hair restoration network." },
      ],
      footerTagline: "SCIENCE | CARE | NATURAL REGROWTH",
    },
  },



  // =========================================================================
  // 13. INSAFE STEEL CONSTRUCTION
  // =========================================================================
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
    heroTagline: "CASE STUDY",
    clientLogoText: "Insafe Steel",
    clientLogoTagline: "ENGINEERING STRUCTURAL EXCELLENCE",
    projectType: "Heavy Structural Steel Fabrication & Industrial Contracting Portal",
    heroHeadline: {
      prefix: "Insafe Steel — Building Heavy Industry",
      highlight: "Warehouses & Structural Steel Across the UAE",
    },
    heroSubtitle: "An authoritative industrial engineering web platform presenting structural steel framing, warehouse construction, mezzanine floors, and Dubai Municipality certified contracting.",
    snapshot: {
      platform: "Next.js & Engineering Tender CMS",
      duration: "3 Months",
      location: "Deira, Dubai, United Arab Emirates",
      services: "Industrial Web Platform, Blueprint Upload Portal, Technical Specs, Tender Funnel, SEO",
      previewImage: "/images/portfolio/insafe.png",
      quickStats: [
        { stat: "500+", label: "Steel Projects", desc: "Warehouses, mezzanine floors, lift towers, and villas" },
        { stat: "3.4x", label: "Industrial Tenders", desc: "Direct inquiries from general contractors and logistics firms" },
        { stat: "17+ Years", label: "Dubai Track Record", desc: "Established in 2007 with full municipality certification" },
        { stat: "100%", label: "Safety & Compliance", desc: "Strict adherence to UAE engineering and Civil Defence codes" },
      ],
    },
    challenges: {
      subtitle: "Insafe had 17 years of heavy fabrication experience, but commercial developers and logistics companies couldn't easily verify technical capacities or submit tender drawings online.",
      items: [
        { title: "Invisible Industrial Scale", desc: "Their previous website didn't show the tonnage capacity or machinery of their fabrication plant.", icon: "Tool" },
        { title: "Complex Tender Inquiries", desc: "Contractors needed to upload massive multi-page architectural CAD/PDF drawings for estimation.", icon: "FileText" },
        { title: "Regulatory Trust Barriers", desc: "Clients required immediate verification of Dubai Municipality and Civil Defence approval compliance.", icon: "ShieldCheck" },
        { title: "Unstructured Service Verticals", desc: "Mezzanines, warehouse sheds, lift structures, and villa beam strengthening were jumbled together.", icon: "Layers" },
      ],
      floatingBadges: ["Unseen fabrication capacity", "No blueprint upload portal", "Unverified municipal approval", "Unorganized service catalog"],
      summaryBanner: "Insafe needed a robust industrial engineering portal to showcase heavy steel capacity and streamline tender estimations.",
    },
    strategy: {
      challengePoints: ["Unseen fabrication power", "Tender blueprint upload barriers", "Municipal compliance verification", "Jumbled service offerings"],
      strategyPoints: ["Showcased fabrication plant machinery, crane capacity, and tonnage capabilities", "Built high-capacity technical blueprint and BOQ upload pipeline", "Spotlighted Dubai Municipality, Civil Defence, and ISO certification badges", "Organized dedicated landing pages for Warehouses, Mezzanines, and Villa Extensions"],
      solutionPoints: ["Authoritative industrial engineering presence", "Seamless large CAD/PDF drawing submission", "Instant compliance verification", "Structured commercial project inquiry paths"],
      processSteps: [
        { label: "Plant Capacity", icon: "Tool" },
        { label: "Drawing Upload", icon: "Upload" },
        { label: "Engineering Specs", icon: "FileText" },
        { label: "Compliance Badges", icon: "ShieldCheck" },
        { label: "WhatsApp Estimator", icon: "MessageSquare" },
        { label: "B2B Steel SEO", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "Industrial, robust engineering aesthetic utilizing dark steel tones, safety hazard accents, and sharp technical precision.",
      pills: ["Industrial Warehouse Sheds", "Heavy Mezzanine Platforms", "Elevator & Lift Steel Towers", "Concrete Structural Strengthening", "Blueprint Upload RFP Desk"],
      screens: [
        { name: "Engineering Home", desc: "High-impact introduction to structural steel capabilities" },
        { name: "Industrial Warehouses", desc: "Clear-span steel sheds for logistics and manufacturing" },
        { name: "Mezzanine Floors", desc: "Heavy-duty storage platforms with safety load calculations" },
        { name: "Villa Extensions", desc: "Structural steel beam modifications for luxury residences" },
        { name: "Tender Portal", desc: "Submit drawings and request engineering quotations" },
      ],
    },
    techStack: {
      subtitle: "Constructed with heavy-duty cloud infrastructure ensuring high availability and secure handling of confidential architectural plans.",
      technologies: [
        { name: "Next.js", desc: "Server-rendered speed optimized for Middle Eastern engineering search." },
        { name: "Tailwind CSS", desc: "Industrial color system with dark charcoal and industrial amber." },
        { name: "AWS S3 Secure Storage", desc: "Encrypted storage for massive CAD, DWG, and PDF blueprint uploads." },
        { name: "Tender Pipeline CRM", desc: "Automatic routing of inquiries to Senior Structural Estimators." },
        { name: "WhatsApp Business API", desc: "Immediate communication channel for site engineers and project managers." },
        { name: "Cloudflare Security", desc: "Bank-grade SSL protecting commercial contractor tender documents." },
        { name: "Engineering Tender CMS", desc: "Manage portfolios and technical specifications." },
        { name: "Blueprint Upload Portal", desc: "Let contractors submit drawings with enquiries." },
        { name: "SEO", desc: "Improve discovery of structural engineering services." },
      ],
      guarantees: [
        { title: "Dubai Certified", desc: "Approved by Dubai Municipality & Civil Defence." },
        { title: "ISO Standards", desc: "Certified quality management and welding standards." },
        { title: "On-Time Erection", desc: "Strict adherence to fast-track construction schedules." },
        { title: "Structural Warranty", desc: "Decades of certified structural integrity guarantee." },
      ],
    },
    featuresDelivered: {
      subtitle: "B2B engineering capabilities designed to convert general contractors and warehouse developers.",
      items: [
        { title: "Technical Drawing Uploader", desc: "General contractors can drag and drop 100MB+ architectural CAD and PDF files.", icon: "Upload" },
        { title: "Warehouse Span Calculator", desc: "Estimate steel tonnage and timeline based on square footage and column heights.", icon: "Maximize" },
        { title: "Mezzanine Floor Specifier", desc: "Explore multi-tier storage mezzanines with customized loading capacities.", icon: "Layers" },
        { title: "Authority Approval Checklist", desc: "Clear breakdown of engineering submission processes with Dubai authorities.", icon: "ShieldCheck" },
        { title: "Fabrication Plant Tour", desc: "Showcasing CNC plasma cutting, automated beam welding, and blast-cleaning shops.", icon: "Tool" },
        { title: "Villa Strengthening Portfolio", desc: "Steel beam and column reinforcement for luxury villa wall removals.", icon: "Home" },
        { title: "Direct Estimator WhatsApp", desc: "Connect directly with Chief Structural Engineers for site visits.", icon: "MessageCircle" },
        { title: "B2B Industrial SEO", desc: "Top search ranking for 'steel construction company Dubai' and 'mezzanine floor UAE'.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Measurable Impact.", highlight: "Steel Strength." },
      subtitle: "How digital authority connected Insafe with leading logistics developers and construction tenders across the UAE.",
      stats: [
        { stat: "3.4x", label: "Tender Submissions", desc: "General contractors regularly submit drawings through the new portal." },
        { stat: "AED 30M+", label: "Pipeline Value", desc: "High-value industrial warehouse and factory contracts quoted online." },
        { stat: "60%", label: "Faster Quote Turnaround", desc: "Organized drawing uploads cut estimation preparation time in half." },
        { stat: "#1 Rank", label: "UAE Steel Fabrication", desc: "Top organic search ranking for structural steel engineering." },
      ],
      footerTagline: "STRENGTH | INTEGRITY | PRECISION",
    },
  },



  // =========================================================================
  // 14. UNIGRANT ACADEMY
  // =========================================================================
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
    heroTagline: "CASE STUDY",
    clientLogoText: "Unigrant",
    clientLogoTagline: "SKILLS FOR GLOBAL CAREERS",
    projectType: "Technical Vocational Training & Gulf Placement Portal",
    heroHeadline: {
      prefix: "Unigrant Academy — Empowering Youth With",
      highlight: "Oil & Gas, AWS Welding & Global Careers",
    },
    heroSubtitle: "A high-conversion technical training academy platform connecting young aspirants with accredited Oil & Gas, welding certifications, practical workshops, and direct placements in the Gulf.",
    snapshot: {
      platform: "Next.js & Academic Enrollment CMS",
      duration: "3 Months",
      location: "Kochi & Calicut, Kerala",
      services: "Technical Academy Portal, Syllabus Explorer, Admission Intake Funnel, Placement Tracker, SEO",
      previewImage: "/images/portfolio/unigrant.png",
      quickStats: [
        { stat: "4.8x", label: "Student Enquiries", desc: "Massive influx of students enrolling from across Kerala" },
        { stat: "92%", label: "Gulf Placement Rate", desc: "Graduates hired in UAE, Saudi Arabia, Qatar & Kuwait energy sectors" },
        { stat: "16+ Years", label: "Training Legacy", desc: "Established in 2008 with accredited workshop facilities" },
        { stat: "10,000+", label: "Alumni Worldwide", desc: "Working as certified welding inspectors, E&I technicians and supervisors" },
      ],
    },
    challenges: {
      subtitle: "Students and parents wanted proof of hands-on practical workshop facilities, international AWS certifications, and verified Gulf placement networks before enrolling.",
      items: [
        { title: "Hands-on Proof Needed", desc: "Students wanted to see real workshops and industrial simulation setups, not classroom slides.", icon: "Tool" },
        { title: "Gulf Placement Verification", desc: "Parents demanded proof of overseas hiring companies, visa support, and starting packages.", icon: "Award" },
        { title: "Course Eligibility Confusion", desc: "Candidates (SSLC, Plus Two, ITI, Diploma, B.Tech) were unsure which technical course fit their background.", icon: "HelpCircle" },
        { title: "Multi-Branch Coordination", desc: "Enquiries were lost between the main Kochi campus and regional branches like Calicut.", icon: "MapPin" },
      ],
      floatingBadges: ["Workshop proof required", "Unverified Gulf jobs", "Eligibility confusion", "Campus lead leakage"],
      summaryBanner: "Unigrant required an inspiring vocational training platform demonstrating real workshop skills, certification value, and verified Gulf job outcomes.",
    },
    strategy: {
      challengePoints: ["Need for hands-on workshop proof", "Demand for placement verification", "Course eligibility confusion", "Multi-campus inquiry loss"],
      strategyPoints: ["Created rich video walkthroughs of live welding booths and Oil & Gas instrumentation labs", "Built interactive Alumni Placement Wall with company names and Gulf countries", "Designed 3-question 'Find Your Course' eligibility matcher for students", "Engineered centralized campus lead distributor with instant counselor WhatsApp alerts"],
      solutionPoints: ["Authentic industrial workshop showcase", "Verified Gulf placement track record", "Personalized course recommendation tool", "Zero-leakage admissions pipeline"],
      processSteps: [
        { label: "Workshop Media", icon: "Video" },
        { label: "Course Matcher", icon: "Compass" },
        { label: "Placement Wall", icon: "Award" },
        { label: "Batch Schedule", icon: "Calendar" },
        { label: "WhatsApp Desk", icon: "MessageSquare" },
        { label: "Vocational SEO", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "Dynamic, career-empowering aesthetic blending industrial energy, practical learning, and global employment horizons.",
      pills: ["AWS Certified Welding Lab", "Oil & Gas Instrumentation", "Gulf Placement Tracker", "Find Your Course Matcher", "Campus Hostel & Mess Info"],
      screens: [
        { name: "Academy Home", desc: "Empowering youth with certified technical careers" },
        { name: "Oil & Gas Hub", desc: "Rig operations, piping, and industrial safety diplomas" },
        { name: "Welding Programs", desc: "TIG, MIG, ARC, and American Welding Society certifications" },
        { name: "Placement Hall of Fame", desc: "Alumni placed in Saudi Aramco, ADNOC, and QatarEnergy" },
        { name: "Mobile Admission View", desc: "Fast student enrollment and brochure downloads" },
      ],
    },
    techStack: {
      subtitle: "Built with fast modern web tech ensuring rapid loading for students in rural and semi-urban Kerala.",
      technologies: [
        { name: "Next.js", desc: "Rapid server rendering delivering high discoverability across Kerala." },
        { name: "Tailwind CSS", desc: "Clean modern vocational layout with bold typography." },
        { name: "YouTube & Vimeo API", desc: "High-definition workshop tour videos without slowing down pages." },
        { name: "Counselor CRM Sync", desc: "Instant assignment of student leads to branch counselors." },
        { name: "WhatsApp Business API", desc: "Automatic delivery of course syllabus and fee structures." },
        { name: "Cloudflare CDN", desc: "Fast reliable loading even on slow 3G/4G mobile networks." },
        { name: "Academic Enrollment CMS", desc: "Manage course and admissions content." },
        { name: "Syllabus Explorer", desc: "Help prospective students compare courses." },
        { name: "Placement Tracker", desc: "Showcase graduate placements and career pathways." },
      ],
      guarantees: [
        { title: "AWS Accredited", desc: "International welding certifications recognized worldwide." },
        { title: "Hands-on Practical", desc: "80% practical workshop exposure." },
        { title: "100% Placement Support", desc: "Dedicated Gulf placement cell." },
        { title: "Hostel Facilities", desc: "Comfortable accommodation for outstation students." },
      ],
    },
    featuresDelivered: {
      subtitle: "Educational digital tools created to empower students and boost admission conversions.",
      items: [
        { title: "Career Eligibility Matcher", desc: "Answer 3 quick questions to discover the ideal technical course for your education level.", icon: "HelpCircle" },
        { title: "AWS Welding Lab Showcase", desc: "Virtual tour of advanced welding simulators and live multi-process booths.", icon: "Tool" },
        { title: "Gulf Placement Hall of Fame", desc: "Searchable alumni directory filtered by GCC country, package, and hiring company.", icon: "Award" },
        { title: "Instant Syllabus PDF", desc: "One-click download of comprehensive curriculum and exam module breakdowns.", icon: "Download" },
        { title: "Campus & Hostel Guide", desc: "Detailed information on Kochi and Calicut campus amenities, mess, and lab hours.", icon: "Home" },
        { title: "Batch Timetable & Intake Dates", desc: "Live countdown to upcoming weekday and weekend batch commencement dates.", icon: "Calendar" },
        { title: "Direct Counselor WhatsApp", desc: "Immediate chat with academic advisors for fee installment details.", icon: "MessageCircle" },
        { title: "Technical Education SEO", desc: "Ranked #1 for 'oil and gas courses Kerala' and 'welding institute Calicut'.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Measurable Impact.", highlight: "Global Careers." },
      subtitle: "How digital storytelling empowered thousands of students to secure lucrative technical careers in the Gulf.",
      stats: [
        { stat: "4.8x", label: "Student Inquiries", desc: "Tremendous increase in students applying for technical diplomas." },
        { stat: "92%", label: "Gulf Placement Success", desc: "Graduates successfully placed in international energy and fabrication firms." },
        { stat: "20,000+", label: "Brochures Downloaded", desc: "Deep engagement with syllabus guides and certification info." },
        { stat: "#1 Rank", label: "Vocational Rankings", desc: "Top search ranking for Oil & Gas training across Kerala." },
      ],
      footerTagline: "SKILL | CERTIFY | SUCCEED",
    },
  },



  // =========================================================================
  // 16. IVAANSH INTERNATIONAL
  // =========================================================================
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
    heroTagline: "CASE STUDY",
    clientLogoText: "Ivaansh International",
    clientLogoTagline: "LUXURY HOUSEBOATS ON BACKWATERS",
    projectType: "Luxury Houseboat Fleet & Backwater Experience Portal",
    heroHeadline: {
      prefix: "Ivaansh — Redefining Backwater Opulence",
      highlight: "With Premier Luxury Houseboat Cruises",
    },
    heroSubtitle: "An exquisite backwater hospitality platform presenting Kerala's largest luxury houseboat fleet — from private romantic suites to grand 11-bedroom floating celebration venues in Alleppey.",
    snapshot: {
      platform: "Next.js & Hospitality Experience Hub",
      duration: "2 Months",
      location: "Alappuzha (Alleppey), Kerala",
      services: "Luxury Web Platform, Fleet Interactive Tour, Cruise Booking Engine, Event Packages, SEO",
      previewImage: "/images/portfolio/ivaansh.png",
      quickStats: [
        { stat: "11-Bedroom", label: "Flagship Luxury Vessel", desc: "Kerala's largest luxury floating venue for events and weddings" },
        { stat: "4.6x", label: "Direct Booking Leads", desc: "High surge in direct inquiries eliminating middleman commissions" },
        { stat: "100%", label: "Five-Star Hospitality", desc: "Private on-board chefs, open sundecks, and luxury AC suites" },
        { stat: "50,000+", label: "Monthly Cruisers", desc: "Exploring tranquil Alleppey & Kumarakom backwater canals" },
      ],
    },
    challenges: {
      subtitle: "Houseboat booking is notorious for misleading photos, sub-standard amenities, and third-party broker commissions; discerning travelers needed verified proof of luxury and genuine fleet photos.",
      items: [
        { title: "Broker Misrepresentation", desc: "Travelers feared booking online due to brokers showing luxury photos but assigning dated boats.", icon: "AlertTriangle" },
        { title: "Large Event Capacity Unseen", desc: "Corporate planners and wedding organizers didn't realize an 11-bedroom floating venue existed.", icon: "Users" },
        { title: "Itinerary & Food Ambiguity", desc: "Guests wanted clear transparency regarding cruise routes, traditional Kerala menus, and timings.", icon: "Coffee" },
        { title: "High Commission Loss", desc: "Ivaansh lost 30-40% revenue to OTA platforms and local travel agents.", icon: "DollarSign" },
      ],
      floatingBadges: ["Broker photo deception", "Unseen 11-bed event vessel", "Menu & route ambiguity", "Heavy OTA commission loss"],
      summaryBanner: "Ivaansh needed a majestic, direct-booking luxury portal verifying authentic fleet grandeur, on-board cuisine, and bespoke event packages.",
    },
    strategy: {
      challengePoints: ["Misleading broker photos", "Unseen large event vessel capacity", "Ambiguity on cruise inclusions", "Loss to OTA commissions"],
      strategyPoints: ["Captured stunning drone and interior video of every authentic houseboat in the fleet", "Spotlighted the flagship 11-bedroom event vessel with floorplans and party capacities", "Detailed authentic culinary menus (Karimeen Pollichathu, duck roast) and cruise timelines", "Built one-tap direct WhatsApp reservation line offering best-rate guarantees"],
      solutionPoints: ["Authentic, verified luxury fleet photography", "Positioned as Kerala's premier floating event venue", "Transparent cruise itineraries and gourmet dining", "Direct booking engine with zero middleman commissions"],
      processSteps: [
        { label: "Fleet Media", icon: "Camera" },
        { label: "Cruise Routes", icon: "MapPin" },
        { label: "Dining Showcase", icon: "Coffee" },
        { label: "Event Packages", icon: "Sparkles" },
        { label: "WhatsApp Desk", icon: "MessageSquare" },
        { label: "Hospitality SEO", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "Sumptuous, tropical luxury aesthetic capturing the emerald waters, golden sunsets, and handcrafted teakwood craftsmanship of Kerala houseboats.",
      pills: ["1-to-11 Bedroom Fleet Showcase", "Live Sunset Cruise Routes", "Private Chef Dining Menus", "Floating Wedding & Party Packages", "Direct Best-Rate WhatsApp Desk"],
      screens: [
        { name: "Hospitality Home", desc: "Breathtaking introduction to Kerala backwater opulence" },
        { name: "Fleet Explorer", desc: "Filter by 1-bedroom honeymoon to 11-bedroom mega cruiser" },
        { name: "Culinary Journey", desc: "Traditional Kerala sadhya and fresh backwater fish menus" },
        { name: "Events & Weddings", desc: "Host corporate retreats, birthdays, and wedding sangeets on water" },
        { name: "Mobile Booking", desc: "Fast reservation and date availability check" },
      ],
    },
    techStack: {
      subtitle: "Engineered with modern, fluid web technologies delivering stunning high-resolution video and photography at lightning speeds.",
      technologies: [
        { name: "Next.js", desc: "Fast server rendering for high global visibility across luxury travelers." },
        { name: "Tailwind CSS", desc: "Elegant tropical luxury palette with emerald, warm wood, and gold accents." },
        { name: "Cloudinary Video Streaming", desc: "Smooth adaptive video playback of scenic backwater drone flights." },
        { name: "WhatsApp Business API", desc: "Direct instant confirmation from on-site houseboat harbor managers." },
        { name: "Interactive Cruise Maps", desc: "Visual map highlighting Alleppey, Kumarakom, and Vembanad Lake routes." },
        { name: "Google Analytics 4", desc: "Tracking luxury traveler inquiries from GCC, North India, and Europe." },
        { name: "Cruise Booking Engine", desc: "Capture cabin and cruise reservations." },
        { name: "Event Packages", desc: "Showcase weddings and events aboard the fleet." },
        { name: "SEO", desc: "Improve discovery of houseboat cruises." },
      ],
      guarantees: [
        { title: "Direct Best Rate", desc: "Book direct with zero broker commission." },
        { title: "Exact Boat Guaranteed", desc: "You sail in the exact vessel shown in photos." },
        { title: "Private Chef & Crew", desc: "Dedicated on-board captain, chef, and service staff." },
        { title: "Safety Certified", desc: "Full Kerala Tourism safety and life-saving equipment." },
      ],
    },
    featuresDelivered: {
      subtitle: "Hospitality digital capabilities designed to inspire wanderlust and capture direct bookings.",
      items: [
        { title: "Fleet Bedroom Filter", desc: "Select 1, 2, 3, 4, 5, 7, or 11-bedroom luxury houseboats with instant capacity guides.", icon: "Ship" },
        { title: "Day & Overnight Cruise Schedules", desc: "Transparent timelines for 12:00 PM check-in, lunch cruise, sunset stop, and morning checkout.", icon: "Clock" },
        { title: "Gourmet Kerala Menu Explorer", desc: "Showcase fresh pearl spot (Karimeen), tiger prawns, and vegetarian Kerala thali.", icon: "Coffee" },
        { title: "Floating Wedding & Event Desk", desc: "Custom packages for corporate dinners, family reunions, and celebrations up to 150 guests.", icon: "Heart" },
        { title: "High-Res 360 Photo Galleries", desc: "Inspect air-conditioned bedrooms, glass-walled dining lounges, and open upper decks.", icon: "Image" },
        { title: "Backwater Route Navigator", desc: "Explore scenic waterways from Punnamada to Kumarakom bird sanctuary.", icon: "MapPin" },
        { title: "Direct Harbor WhatsApp", desc: "Instant date availability check and customized quote within 10 minutes.", icon: "MessageCircle" },
        { title: "Luxury Tourism SEO", desc: "Top search ranking for 'luxury houseboat Alleppey' and '11 bedroom houseboat Kerala'.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Real Results.", highlight: "Backwater Grandeur." },
      subtitle: "How transparent digital presentation turned Ivaansh into Alleppey's most sought-after luxury houseboat brand.",
      stats: [
        { stat: "4.6x", label: "Direct Inquiries", desc: "Eliminated broker commissions and increased direct profit margins." },
        { stat: "95%", label: "Peak Season Occupancy", desc: "Houseboats fully booked months in advance for holidays and weddings." },
        { stat: "40+", label: "Floating Corporate Events", desc: "Hosted multinational company retreats and celebrations on the water." },
        { stat: "4.9/5", label: "Traveler Satisfaction", desc: "Hundreds of glowing reviews praising food, cleanliness, and warm hospitality." },
      ],
      footerTagline: "LUXURY | SERENITY | AUTHENTICITY",
    },
  },


  // =========================================================================
  // 1. TRAVEL HOPE (Exact data from design mockup)
  // =========================================================================
  {
    id: "travel-hope",
    title: "Travel Hope",
    description: "A complete travel platform with booking, packages and enquiry management.",
    category: "Web & Booking Platform",
    image: "/images/portfolio/Travelhope.png",
    tags: ["Next.js", "Booking Engine", "UI/UX", "Payment Gateway"],
    client: "Travel Hope",
    year: "2024",
    deliverables: ["Website Design", "Development", "CRM Integration", "SEO", "Digital Marketing"],
    highlights: [
      "Custom tour package browsing with interactive itinerary timeline",
      "Seamless WhatsApp and direct enquiry capture system",
      "Fast, mobile-first responsive architecture",
      "Comprehensive admin dashboard for package & booking management",
    ],
    heroTagline: "CASE STUDY",
    clientLogoText: "Travel Hope",
    clientLogoTagline: "JOURNEYS WITH PURPOSE",
    clientLogoImage: "/images/portfolio/travelhopelogo.webp",
    clientLogoImageDark: "/images/portfolio/travelhopelogo-dark.webp",
    projectType: "  Booking & Enquiry Platform",
    heroHeadline: {
      prefix: "Travel Hope —",
      highlight: "Building a Smarter Digital Travel Experience",
    },
    heroSubtitle: "A modern, conversion-focused platform that improved clarity, engagement and travel enquiries.",
    ...TRAVEL_HOPE_HERO_ASSETS,
    snapshot: {
      platform: "Django (Custom CMS)",
      duration: "3 Months",
      location: "Kerala, India",
      industry: "Travel & Tourism",
      services: "Website Design, Development,\nCRM Integration, SEO, Digital Marketing",
      previewImage: "/images/portfolio/travelhopesnapshot.png",
      quickStats: [
        { stat: "3x", label: "More Enquiries", desc: "Significant increase in qualified leads" },
        { stat: "60%", label: "Higher Organic Traffic", desc: "Stronger visibility across search engines" },
        { stat: "45%", label: "Better Conversion Rate", desc: "More enquiries turned into bookings" },
        // { stat: "2x", label: "Brand Engagement", desc: "Higher interaction across digital channels" },
      ],
    },
    challenges: {
      subtitle: "Travel Hope had a strong offline presence, but their digital experience wasn't delivering the results they expected. Several challenges were holding them back.",
      items: [
        {
          title: "Limited Online Presence",
          desc: "The existing website was outdated and didn't reflect the quality of their tour packages.",
          icon: "TrendingUp",
        },
        {
          title: "Operational Inefficiencies",
          desc: "Enquiries were coming through multiple channels (phone, email, WhatsApp) with no central system, making follow-ups difficult.",
          icon: "Settings",
        },
        {
          title: "Low Conversion",
          desc: "Visitors were browsing packages, but not converting into enquiries due to a confusing user journey and unclear CTAs.",
          icon: "Users",
        },
        {
          title: "Lack of Scalable Platform",
          desc: "The website lacked flexibility to manage destinations, packages and content easily, limiting their growth potential.",
          icon: "Laptop",
        },
      ],
      floatingBadges: [
        "Outdated website design",
        "Multiple enquiries across channels",
        "Low conversion rate",
        "Difficult content management",
      ],
      summaryBanner: "Travel Hope needed a modern, high-performing digital platform that could showcase their destinations beautifully and turn interest into bookings.",
    },
    strategy: {
      challengePoints: [
        "Outdated website experience",
        "Enquiries scattered across channels",
        "Low conversion from interested visitors",
        "Difficult package and destination management",
      ],
      strategyPoints: [
        "Redesigned website structure around user intent",
        "Simplified package browsing and enquiry journey",
        "Planned CRM-ready lead capture workflow",
        "Built SEO-friendly content architecture",
        "Improved responsive UX for all devices",
      ],
      solutionPoints: [
        "High-converting travel website",
        "Centralized enquiry flow",
        "Scalable destination and package management",
        "Better organic visibility",
        "Ongoing digital marketing support",
      ],
      processSteps: [
        { label: "Website Redesign", icon: "Laptop" },
        { label: "Package Structure", icon: "Layers" },
        { label: "Enquiry Flow", icon: "MessageSquare" },
        { label: "CRM Integration", icon: "Users" },
        { label: "SEO Structure", icon: "BarChart3" },
        { label: "Marketing Support", icon: "Megaphone" },
      ],
    },
    showcase: {
      subtitle: "A modern, immersive and user-friendly travel platform designed to inspire travellers and make trip planning effortless.",
      pills: [
        "Mobile-first UI",
        "Fast Enquiry Flow",
        "Clear Navigation",
        "Conversion-Focused CTAs",
        "Responsive Layouts",
      ],
      screens: [
        { name: "Home Page", desc: "A stunning first impression" },
        { name: "Destinations Page", desc: "Beautifully showcased destinations" },
        { name: "Tour Packages Page", desc: "Easy to browse, easy to book" },
        { name: "Enquiry Flow", desc: "Simple form, more enquiries" },
        { name: "Mobile View", desc: "Flawless on every device" },
      ],
    },
    techStack: {
      subtitle: "We used a focused stack and growth services to build a fast, scalable, conversion-friendly digital travel platform for Travel Hope.",
      technologies: [
        { name: "Django", desc: "Robust backend for dynamic content and enquiry management." },
        { name: "Python", desc: "Server-side logic, automation and custom features." },
        { name: "MySQL", desc: "Reliable and secure database management." },
        { name: "CRM Integration", desc: "Centralized lead management and enquiry tracking." },
        { name: "APIs & Integrations", desc: "Third-party integrations (such as payment gateway, WhatsApp, email services, etc.)." },
        { name: "Responsive Design", desc: "Seamless experience across desktop, tablet and mobile." },
        { name: "SEO Structure", desc: "Optimized site structure, metadata and performance for better visibility." },
        { name: "Analytics", desc: "Tracking user behaviour and conversions for continuous improvement." },
        { name: "Hosting", desc: "High-uptime and performance with a reliable hosting infrastructure." },
      ],
      guarantees: [
        { title: "Secure & Scalable", desc: "Built for long-term growth." },
        { title: "Reliable Hosting", desc: "High uptime and performance." },
        { title: "Optimised Performance", desc: "Fast loading for better user experience." },
        { title: "Ongoing Support", desc: "Continuous monitoring and updates." },
      ],
    },
    featuresDelivered: {
      subtitle: "We built a complete digital solution for Travel Hope with the following key features to simplify travel management and drive more enquiries.",
      items: [
        { title: "Tour Package Management", desc: "Easy creation and organization of travel packages.", icon: "Briefcase" },
        { title: "Destination Pages", desc: "Dedicated pages for destinations with rich content.", icon: "MapPin" },
        { title: "Enquiry System", desc: "Streamlined enquiry forms for lead generation.", icon: "FileText" },
        { title: "WhatsApp Integration", desc: "Direct instant communication with travellers.", icon: "MessageCircle" },
        { title: "CRM Lead Capture", desc: "All enquiries captured and organized centrally.", icon: "Users" },
        { title: "Mobile Optimization", desc: "Smooth experience across all mobile devices.", icon: "Smartphone" },
        { title: "SEO Structure", desc: "Search-friendly architecture and metadata setup.", icon: "Search" },
        { title: "Analytics Tracking", desc: "Performance and enquiry insights for smarter decisions.", icon: "BarChart2" },
      ],
    },
    results: {
      headline: { prefix: "Real Results.", highlight: "Measurable Growth." },
      subtitle: "Our strategic approach delivered a stronger digital presence, higher engagement and measurable business growth for Travel Hope.",
      stats: [
        { stat: "3x", label: "More Enquiries", desc: "A smoother user journey and streamlined enquiry flow helped generate 3x more qualified travel enquiries." },
        { stat: "+60%", label: "Organic Traffic", desc: "SEO-friendly structure and optimized content increased search visibility and brought 60% more organic traffic." },
        { stat: "70%", label: "Faster Response Time", desc: "Centralized enquiry management enabled the team to respond 70% faster to customer queries." },
        { stat: "+40%", label: "Higher Conversion Rate", desc: "A cleaner navigation structure and stronger CTAs helped convert more visitors into confirmed travel enquiries." },
      ],
      footerTagline: "PEOPLE | POSSIBILITIES",
    },
  },



  // =========================================================================
  // 2. AYURGREEN SPICES
  // =========================================================================
  {
    id: "ayurgreen-spices",
    title: "Ayurgreen Spices",
    description: "An e-commerce website with WhatsApp ordering and organic spice product showcase.",
    category: "E-Commerce & Retail",
    image: "/images/portfolio/ayurgreen.png",
    tags: ["Next.js", "WhatsApp Store", "Organic Retailing", "Payment Gateway"],
    client: "Ayurgreen Organics",
    year: "2024",
    deliverables: ["Online Storefront", "WhatsApp Order Cart", "Product Photography UI", "SEO Setup"],
    highlights: [
      "Dynamic spice catalog with real-time price & weight variants",
      "Direct WhatsApp checkout for effortless mobile conversions",
      "Rich product storytelling highlighting organic purity & origin",
      "Optimized for high-speed mobile loading across India & overseas",
    ],
    heroTagline: "CASE STUDY",
    clientLogoText: "Ayurgreen",
    clientLogoTagline: "100% PURE & ORGANIC SPICES",
    projectType: "Direct-to-Consumer E-Commerce & WhatsApp Ordering",
    heroHeadline: {
      prefix: "Ayurgreen — Scaling Natural Spices",
      highlight: "Directly to Consumers Worldwide",
    },
    heroSubtitle: "A modern organic e-commerce storefront delivering rapid WhatsApp checkout, verified spice origin stories and international shipping.",
    snapshot: {
      platform: "Next.js & Shopify Headless",
      duration: "2.5 Months",
      location: "Wayanad, Kerala",
      services: "E-Commerce Development, WhatsApp API, UI/UX, Performance SEO, Brand Creatives",
      previewImage: "/images/portfolio/ayurgreen.png",
      quickStats: [
        { stat: "4.2x", label: "Monthly Orders", desc: "Exponential increase in domestic and NRI orders" },
        { stat: "85%", label: "Mobile Checkouts", desc: "One-tap WhatsApp ordering converted mobile visitors" },
        { stat: "1.2s", label: "Page Load Speed", desc: "Ultra-optimized performance across 4G and 5G networks" },
        { stat: "98%", label: "Repeat Customers", desc: "Customer trust powered by farm-fresh storytelling" },
      ],
    },
    challenges: {
      subtitle: "Ayurgreen had supreme organic spice quality, but selling traditional farm products online without a frictionless ordering mechanism held back sales.",
      items: [
        { title: "Friction in Checkout", desc: "Complex multi-step payment gateways were causing cart abandonment on mobile.", icon: "ShoppingBag" },
        { title: "Weight Variant Complexity", desc: "Spices required dynamic pricing based on 100g, 250g, 500g and 1kg packaging options.", icon: "Layers" },
        { title: "Building Digital Trust", desc: "Customers needed proof of organic certifications, harvest origins, and pesticide-free testing.", icon: "ShieldCheck" },
        { title: "Inventory & Dispatch Sync", desc: "No automated notifications between online enquiries and warehouse packing teams.", icon: "Truck" },
      ],
      floatingBadges: ["High mobile drop-offs", "Complex weight pricing", "Trust building barriers", "Manual stock management"],
      summaryBanner: "Ayurgreen needed a lightning-fast mobile-first shop that made ordering fresh organic spices as simple as sending a WhatsApp message.",
    },
    strategy: {
      challengePoints: ["High cart abandonment on mobile", "Complex weight-based price variants", "Need for organic authenticity proof", "Manual packaging coordination"],
      strategyPoints: ["Engineered one-tap WhatsApp order cart", "Built dynamic variant selector with instant pricing", "Added origin certification badges and harvest video stories", "Connected order pipeline with automated inventory alerts"],
      solutionPoints: ["Frictionless WhatsApp checkout system", "Dynamic responsive spice catalog", "Certified organic transparency badges", "Seamless warehouse order dispatching"],
      processSteps: [
        { label: "Catalog Architecture", icon: "Layers" },
        { label: "WhatsApp Cart", icon: "MessageSquare" },
        { label: "Variant Pricing", icon: "Tag" },
        { label: "Speed Optimization", icon: "Zap" },
        { label: "Trust Badges", icon: "ShieldCheck" },
        { label: "Social Ads", icon: "Megaphone" },
      ],
    },
    showcase: {
      subtitle: "A clean, earth-toned visual aesthetic that highlights fresh farm harvests, organic certifications and aroma notes.",
      pills: ["One-Tap WhatsApp Cart", "Weight Variant Switcher", "Aroma & Tasting Notes", "Instant Delivery Estimator", "NRI Shipping Ready"],
      screens: [
        { name: "Spice Showcase", desc: "Vibrant high-res harvest photography" },
        { name: "Product Detail", desc: "Dynamic pricing by weight" },
        { name: "WhatsApp Cart", desc: "Auto-formatted pre-filled order text" },
        { name: "Certifications", desc: "Organic lab test verification" },
        { name: "Mobile Store", desc: "Lightning fast shopping experience" },
      ],
    },
    techStack: {
      subtitle: "Constructed with modern headless e-commerce tech for zero-latency browsing and instant WhatsApp sync.",
      technologies: [
        { name: "Next.js", desc: "High-performance React framework for server-rendered storefronts." },
        { name: "Tailwind CSS", desc: "Modern utility-first styling for fluid responsiveness." },
        { name: "WhatsApp Cloud API", desc: "Direct automated customer messaging and checkout flows." },
        { name: "PostgreSQL", desc: "Reliable product catalog and inventory database." },
        { name: "Stripe & Razorpay", desc: "Dual payment gateways for domestic and global NRI transactions." },
        { name: "Cloudflare CDN", desc: "Global edge caching delivering sub-second load times." },
        { name: "Shopify Headless", desc: "Power the storefront through a separate commerce backend." },
        { name: "Product Photography UI", desc: "Present spice products with clear visual detail." },
        { name: "Performance SEO", desc: "Support fast storefront pages and search visibility." },
      ],
      guarantees: [
        { title: "100% Uptime", desc: "Reliable edge architecture." },
        { title: "Bank-Grade Security", desc: "Encrypted payment transactions." },
        { title: "Mobile Optimized", desc: "Flawless mobile shopping experience." },
        { title: "Instant Sync", desc: "Real-time stock and price updates." },
      ],
    },
    featuresDelivered: {
      subtitle: "Core digital features built to turn casual visitors into loyal spice buyers.",
      items: [
        { title: "WhatsApp Direct Buy", desc: "Send pre-filled cart details with address directly to sales team.", icon: "MessageCircle" },
        { title: "Weight Variant Pricing", desc: "Instant price recalculation across 100g to bulk quantities.", icon: "Tag" },
        { title: "Origin Storytelling", desc: "Interactive map showcasing Wayanad spice plantation origins.", icon: "MapPin" },
        { title: "International Currency", desc: "Multi-currency switcher for Gulf and European buyers.", icon: "DollarSign" },
        { title: "Smart Recipe Integration", desc: "Traditional Kerala recipes linked to spice products.", icon: "BookOpen" },
        { title: "Automated Stock Alerts", desc: "Low stock notifications for rare organic pepper and cardamom.", icon: "Bell" },
        { title: "Google Merchant Sync", desc: "Live feed integration for Google Shopping ad campaigns.", icon: "Globe" },
        { title: "Speed Optimization", desc: "95+ Google PageSpeed score across desktop and mobile.", icon: "Zap" },
      ],
    },
    results: {
      headline: { prefix: "Real Results.", highlight: "Sustainable Growth." },
      subtitle: "How digital transformation powered Ayurgreen to emerge as a premier direct-to-consumer organic spice brand.",
      stats: [
        { stat: "4.2x", label: "Monthly Order Volume", desc: "WhatsApp checkout unlocked huge demand from mobile shoppers." },
        { stat: "+85%", label: "Mobile Conversion Rate", desc: "Customers completed orders within 45 seconds on smartphones." },
        { stat: "60%", label: "NRI & Export Inquiries", desc: "International currency and shipping guides drove global sales." },
        { stat: "4.9/5", label: "Customer Satisfaction", desc: "Over 2,000 verified reviews praising speed and quality." },
      ],
      footerTagline: "PURITY | TRADITION | WELLNESS",
    },
  },



  // =========================================================================
  // 3. D SOFT INSTITUTE
  // =========================================================================
  {
    id: "dsoft-institute",
    title: "D Soft Institute",
    description: "Course website with lead generation, student portal and automated admission management.",
    category: "Education & Academy",
    image: "/images/portfolio/D-Soft-Institute.png",
    tags: ["EdTech", "Lead Capture", "Course Catalog", "Admissions CRM"],
    client: "D Soft Technologies",
    year: "2024",
    deliverables: ["Course Catalog", "Lead Generation Funnel", "Student Portal", "Placement Showcase"],
    highlights: [
      "Structured syllabus view with downloadable brochures",
      "High-converting landing pages for active student intakes",
      "Automated lead delivery directly to the admissions desk",
      "Interactive student testimonials and placement showcase",
    ],
    heroTagline: "CASE STUDY",
    clientLogoText: "D Soft",
    clientLogoTagline: "ADVANCED TECH ACADEMY",
    projectType: "EdTech Learning Platform & Admission Funnel",
    heroHeadline: {
      prefix: "D Soft — Empowering Careers Through",
      highlight: "Modern EdTech & Admission Funnels",
    },
    heroSubtitle: "A high-conversion educational platform connecting aspiring tech professionals with industry-ready certifications, demo classes and direct counselor admissions.",
    snapshot: {
      platform: "Next.js & Custom LMS",
      duration: "3 Months",
      location: "Calicut, Kerala",
      services: "Web Design, Admissions CRM, Course Architecture, Lead Generation, SEO",
      previewImage: "/images/portfolio/D-Soft-Institute.png",
      quickStats: [
        { stat: "3.5x", label: "Student Inquiries", desc: "Qualified admissions leads generated monthly" },
        { stat: "75%", label: "Brochure Downloads", desc: "High engagement on comprehensive syllabus PDFs" },
        { stat: "90%", label: "Placement Rate", desc: "Showcasing student success stories and company hires" },
        { stat: "15+", label: "Certified Programs", desc: "Full Stack, AI, Cloud, and Software Testing courses" },
      ],
    },
    challenges: {
      subtitle: "D Soft had strong classroom faculty, but students found it difficult to compare courses, view upcoming batch dates, or connect with counselors online.",
      items: [
        { title: "Fragmented Course Info", desc: "Syllabus details were scattered across offline flyers without structured online curricula.", icon: "BookOpen" },
        { title: "Manual Admission Follow-ups", desc: "Counselors were overwhelmed by untracked calls, resulting in lost student inquiries.", icon: "Users" },
        { title: "Lack of Placement Proof", desc: "Potential students wanted tangible verification of job placements and recruiter networks.", icon: "Award" },
        { title: "Unoptimized Mobile Traffic", desc: "Over 80% of student traffic arrived via mobile ads without fast landing pages.", icon: "Smartphone" },
      ],
      floatingBadges: ["Unstructured syllabus", "Manual counselor follow-up", "Unverified placement stats", "Slow mobile landing pages"],
      summaryBanner: "D Soft required an interactive academy hub that showcased technical certifications and streamlined the entire journey from enquiry to enrolment.",
    },
    strategy: {
      challengePoints: ["Scattered syllabus documentation", "Lost counselor leads", "Missing placement testimonials", "Slow mobile conversions"],
      strategyPoints: ["Built interactive syllabus timeline with brochure downloads", "Connected automated counselor CRM with WhatsApp alerts", "Designed real-time alumni placement ticker and recruiter wall", "Created ultra-light mobile landing pages for active batch intakes"],
      solutionPoints: ["Structured course comparison system", "Instant lead notification pipeline", "Verified placement evidence showcase", "High-converting intake landing pages"],
      processSteps: [
        { label: "Curriculum UX", icon: "BookOpen" },
        { label: "Batch Schedule", icon: "Calendar" },
        { label: "Counselor CRM", icon: "Users" },
        { label: "Placement Ticker", icon: "Award" },
        { label: "Lead Funnel", icon: "TrendingUp" },
        { label: "SEO Authority", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "Clean, motivating educational interface designed to help students discover their dream tech career path.",
      pills: ["Course Comparison Tool", "Instant Syllabus Download", "Live Batch Calendar", "Alumni Placements Ticker", "Direct Counselor Chat"],
      screens: [
        { name: "Course Directory", desc: "Filter courses by technology and duration" },
        { name: "Curriculum Viewer", desc: "Interactive week-by-week syllabus breakdown" },
        { name: "Admissions Form", desc: "Streamlined 2-step enrollment application" },
        { name: "Recruiter Wall", desc: "Companies actively hiring D Soft alumni" },
        { name: "Mobile View", desc: "Optimized for fast student sign-ups" },
      ],
    },
    techStack: {
      subtitle: "Engineered with resilient modern technologies to handle heavy seasonal traffic during college graduation intakes.",
      technologies: [
        { name: "Next.js & React", desc: "Fast server-side rendering for optimal SEO and rapid student navigation." },
        { name: "Tailwind CSS", desc: "Accessible, clean typography and responsive educational design." },
        { name: "Supabase & PostgreSQL", desc: "Secure database storing student applications and course logs." },
        { name: "Admissions CRM API", desc: "Real-time sync feeding leads directly into counselor call queues." },
        { name: "WhatsApp Business API", desc: "Instant automated delivery of brochures and batch dates." },
        { name: "Vercel Edge Network", desc: "High-speed hosting with 99.99% guaranteed uptime." },
        { name: "Custom LMS", desc: "Support course and student workflows." },
        { name: "Course Catalog", desc: "Help students browse and compare courses." },
        { name: "Placement Showcase", desc: "Present graduate placements and career outcomes." },
      ],
      guarantees: [
        { title: "High Scalability", desc: "Handles concurrent admissions rushes." },
        { title: "Data Privacy", desc: "Strict protection of student information." },
        { title: "Mobile Optimized", desc: "Fast intake forms for mobile students." },
        { title: "Continuous Updates", desc: "Easily update course batches and fees." },
      ],
    },
    featuresDelivered: {
      subtitle: "Essential technical features delivered to empower counselors and inspire student admissions.",
      items: [
        { title: "Modular Course Catalog", desc: "Browse full-stack, data science, and cloud certifications.", icon: "BookOpen" },
        { title: "Instant Syllabus PDF", desc: "Download complete curriculum guides with one mobile number verify.", icon: "Download" },
        { title: "Automated Lead Alerts", desc: "Counselors receive instant push notifications for new enquiries.", icon: "Bell" },
        { title: "Placement Showcase", desc: "Filter alumni by hiring company, package, and job title.", icon: "Award" },
        { title: "Free Demo Booking", desc: "Reserve weekend masterclasses and demo lab sessions.", icon: "Calendar" },
        { title: "Fee Calculator", desc: "Transparent fee installment and scholarship estimator.", icon: "DollarSign" },
        { title: "Student Testimonials", desc: "Video stories of graduates placed in top MNCs.", icon: "Video" },
        { title: "SEO Optimization", desc: "Ranked #1 for regional technical courses in Malabar.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Measurable Impact.", highlight: "Career Transformations." },
      subtitle: "The metrics behind D Soft's digital expansion across Kerala's technical education landscape.",
      stats: [
        { stat: "3.5x", label: "Monthly Admissions Enquiries", desc: "Digital intake forms replaced manual walk-in dependencies." },
        { stat: "+75%", label: "Counselor Conversion Rate", desc: "Warm, pre-informed leads converted into enrollments faster." },
        { stat: "15,000+", label: "Brochures Downloaded", desc: "Massive engagement with digital course curricula." },
        { stat: "#1 Rank", label: "Google SERP Visibility", desc: "Ranked at top for premier software training in Calicut." },
      ],
      footerTagline: "LEARN | BUILD | EXCEL",
    },
  },



  // =========================================================================
  // 7. ASIAN AVENUE
  // =========================================================================
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
    heroTagline: "CASE STUDY",
    clientLogoText: "Asian Avenue",
    clientLogoTagline: "TASTES OF THE WORLD IN EUROPE",
    projectType: "International Supermarket Brand & Multi-Store Digital Experience",
    heroHeadline: {
      prefix: "Asian Avenue — Bringing Authentic Global Flavors",
      highlight: "To Supermarket Shoppers Across Germany",
    },
    heroSubtitle: "A contemporary culinary and retail portal celebrating Asian, African, and Indian groceries with store locators, partner online ordering, and franchise expansion in Europe.",
    snapshot: {
      platform: "Next.js & Multilingual CMS",
      duration: "2.5 Months",
      location: "Neuss, Ludwigshafen & Mainz, Germany",
      services: "Storefront Web Design, Multi-City Store Locator, Product Catalog, Franchise Funnel, SEO",
      previewImage: "/images/portfolio/asianavenue.png",
      quickStats: [
        { stat: "3 Outlets", label: "Physical Stores", desc: "Thriving stores in Neuss, Ludwigshafen and Mainz" },
        { stat: "3,500+", label: "Imported Products", desc: "Spices, staples, snacks and fresh tropical produce" },
        { stat: "2.8x", label: "Store Footfall", desc: "Digital locator drove diaspora communities into stores" },
        { stat: "45+", label: "Franchise Inquiries", desc: "Entrepreneurs applying for European expansion locations" },
      ],
    },
    challenges: {
      subtitle: "Asian Avenue had authentic imported products, but expatriates in Germany struggled to find store locations, verify product availability, or apply for business franchise licenses.",
      items: [
        { title: "Scattered Store Information", desc: "Shoppers had difficulty verifying opening hours and locations across 3 German cities.", icon: "MapPin" },
        { title: "Niche Catalog Visibility", desc: "Specialty ingredients (dals, noodles, plantains, spices) weren't discoverable online.", icon: "ShoppingBag" },
        { title: "Missing Franchise Inflow", desc: "No structured digital portal to capture European entrepreneurs interested in franchising.", icon: "Briefcase" },
        { title: "Language Diversity", desc: "Needed seamless communication serving German, English, and Asian multilingual communities.", icon: "Globe" },
      ],
      floatingBadges: ["Unverified store hours", "Hidden specialty catalog", "Unorganized franchise leads", "Multilingual barrier"],
      summaryBanner: "Asian Avenue needed a modern, appetizing web portal showcasing authentic international groceries, store directions, and franchise opportunities.",
    },
    strategy: {
      challengePoints: ["Store location ambiguity", "Lack of online product visibility", "Manual franchise outreach", "Multilingual community needs"],
      strategyPoints: ["Built interactive Google Maps store locator with live opening hours", "Designed vibrant category-wise product showcase with regional filters", "Engineered dedicated B2B franchise application pipeline", "Implemented bilingual German and English UX"],
      solutionPoints: ["Accurate multi-city branch finder", "Appetizing international grocery showcase", "Automated franchise lead collection", "Bilingual European compliance"],
      processSteps: [
        { label: "Store Locator", icon: "MapPin" },
        { label: "Catalog UX", icon: "ShoppingBag" },
        { label: "Bilingual Setup", icon: "Globe" },
        { label: "Partner Links", icon: "ExternalLink" },
        { label: "Franchise Funnel", icon: "Briefcase" },
        { label: "Local SEO", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "A warm, cosmopolitan aesthetic celebrating culinary heritage and modern grocery retail convenience.",
      pills: ["Store Locator with Directions", "Curated Category Showcase", "Online Partner Ordering", "B2B Franchise Portal", "Multilingual German & English"],
      screens: [
        { name: "Flavors Hub", desc: "Explore Asian, African & Indian culinary aisles" },
        { name: "Store Finder", desc: "Addresses, hours, and parking tips for all 3 branches" },
        { name: "Grocery Catalog", desc: "Browse rice, spices, frozen foods, and exotic snacks" },
        { name: "Franchise Opportunity", desc: "Investor deck and retail partnership application" },
        { name: "Mobile View", desc: "Quick directions and grocery browsing on the go" },
      ],
    },
    techStack: {
      subtitle: "Engineered with GDPR-compliant European web standards ensuring lightning performance across all EU devices.",
      technologies: [
        { name: "Next.js", desc: "Ultra-fast server-rendered storefront optimized for German local search." },
        { name: "Tailwind CSS", desc: "Clean modern design with rich culinary color palettes." },
        { name: "Google Maps API", desc: "Interactive directions and real-time branch geolocation." },
        { name: "Multilingual i18n", desc: "Seamless German and English language switching." },
        { name: "GDPR Privacy Suite", desc: "Full European privacy and cookie compliance." },
        { name: "Vercel Edge", desc: "High-uptime European hosting infrastructure." },
        { name: "Multilingual CMS", desc: "Manage storefront content in German and English." },
        { name: "Product Catalog", desc: "Organise groceries into browsable categories." },
        { name: "Franchise Enquiries", desc: "Collect enquiries from prospective partners." },
      ],
      guarantees: [
        { title: "GDPR Compliant", desc: "Strict European data privacy standards." },
        { title: "Real-Time Hours", desc: "Accurate store opening times & holiday notices." },
        { title: "Mobile Optimized", desc: "Quick GPS store routing for shoppers." },
        { title: "Franchise Ready", desc: "Secure B2B lead capture for investors." },
      ],
    },
    featuresDelivered: {
      subtitle: "Key technical capabilities delivered to connect diaspora communities with their favorite foods.",
      items: [
        { title: "Multi-Store GPS Locator", desc: "Get instant driving and transit directions to Neuss, Ludwigshafen, or Mainz.", icon: "Navigation" },
        { title: "Regional Culinary Filters", desc: "Filter items by Indian, East Asian, Southeast Asian, or African origins.", icon: "Filter" },
        { title: "Online Delivery Partners", desc: "Direct links to partner e-commerce platforms for doorstep home delivery.", icon: "Truck" },
        { title: "Franchise Application Form", desc: "Comprehensive questionnaire capturing investor budget and target city.", icon: "Briefcase" },
        { title: "Seasonal Festival Specials", desc: "Featured banners for Diwali, Lunar New Year, Eid, and Onam shopping.", icon: "Sparkles" },
        { title: "Live WhatsApp Support", desc: "Direct chat with store managers for specific ingredient availability checks.", icon: "MessageCircle" },
        { title: "Bilingual German/English", desc: "Effortlessly toggle languages with one tap.", icon: "Globe" },
        { title: "Local SEO Dominance", desc: "Ranked #1 for 'Asian supermarket Neuss' and 'Indian grocery Ludwigshafen'.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Measurable Impact.", highlight: "Community Growth." },
      subtitle: "How digital presence connected Asian Avenue with thousands of multicultural shoppers across Germany.",
      stats: [
        { stat: "2.8x", label: "Store Footfall Increase", desc: "Local search and Google Maps integration guided new customers into branches." },
        { stat: "45+", label: "Franchise Applications", desc: "Strong investor interest to open Asian Avenue stores across other German cities." },
        { stat: "18,000+", label: "Monthly Unique Visitors", desc: "High engagement from Asian, Indian, and African diaspora communities." },
        { stat: "#1 Rank", label: "Local Google Pack", desc: "Top 3 map ranking for international groceries in North Rhine-Westphalia." },
      ],
      footerTagline: "AUTHENTICITY | FLAVOR | COMMUNITY",
    },
  },



  // =========================================================================
  // 9. NEUROBASE AYURVEDA
  // =========================================================================
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
    heroTagline: "CASE STUDY",
    clientLogoText: "Neurobase Ayurveda",
    clientLogoTagline: "BRAIN & SPINE EXCELLENCE",
    projectType: "Speciality Ayurvedic Hospital Web Platform",
    heroHeadline: {
      prefix: "Neurobase — Redefining Holistic Care",
      highlight: "For Neurological & Spine Rehabilitation",
    },
    heroSubtitle: "A compassionate, authoritative hospital portal providing specialized Ayurvedic neurological treatments, stroke rehabilitation guidance, and online doctor consultations.",
    snapshot: {
      platform: "Next.js & Custom Healthcare Portal",
      duration: "3 Months",
      location: "Kochi, Kerala",
      services: "Hospital Web Platform, Appointment System, Therapy Guides, Case Intake, Medical SEO",
      previewImage: "/images/portfolio/neurobase.png",
      quickStats: [
        { stat: "4.5x", label: "Patient Inquiries", desc: "Increase in national and international patient admissions" },
        { stat: "70%", label: "Online Registrations", desc: "Patients pre-submitting medical case histories before arrival" },
        { stat: "10,000+", label: "Monthly Therapy Reads", desc: "Families researching Panchakarma and stroke rehabilitation" },
        { stat: "95%", label: "Patient Recovery Trust", desc: "Documented clinical testimonials of neurological mobility gains" },
      ],
    },
    challenges: {
      subtitle: "Patients facing stroke, spinal disc compression, and neurological conditions needed deep clinical clarity, doctor credentials, and simple admission pathways.",
      items: [
        { title: "Complex Medical Communication", desc: "Explaining traditional Ayurvedic neuro-protocols in terms modern families understand.", icon: "Activity" },
        { title: "Manual Patient Triage", desc: "Doctors received unorganized medical scans via random WhatsApp chats.", icon: "FileText" },
        { title: "NRI & Medical Tourism Barrier", desc: "Overseas patients needed transparent package details, room types, and visa assistance.", icon: "Globe" },
        { title: "Emotional Family Anxiety", desc: "Families needed comforting video testimonials and proof of compassionate inpatient care.", icon: "Heart" },
      ],
      floatingBadges: ["Complex therapy explanations", "Unorganized medical reports", "Medical tourism confusion", "Family emotional hesitation"],
      summaryBanner: "Neurobase needed a clinical, compassionate digital hospital platform to educate families and guide patients into specialized neurological care.",
    },
    strategy: {
      challengePoints: ["Complex clinical terminology", "Unstructured medical file intake", "Medical tourist hesitation", "Patient family anxiety"],
      strategyPoints: ["Created clear condition-specific guides for Stroke, Parkinson's, and Spine care", "Engineered secure digital case history and MRI report upload portal", "Designed medical tourism assistance desk with airport pickup and room info", "Showcased verified doctor qualifications and inspiring patient mobility recovery stories"],
      solutionPoints: ["Empathetic, clear clinical information", "Organized pre-admission patient triage", "Seamless international patient onboarding", "Reassuring recovery evidence"],
      processSteps: [
        { label: "Clinical Architecture", icon: "Activity" },
        { label: "Report Upload", icon: "FileText" },
        { label: "Doctor Profiles", icon: "UserCheck" },
        { label: "Inpatient Tour", icon: "Home" },
        { label: "Medical Tourism", icon: "Globe" },
        { label: "Healthcare SEO", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "A serene, calming healthcare design built on natural Ayurvedic greens, warm earth tones, and clean medical typography.",
      pills: ["Neuro Condition Guides", "Secure Medical Report Upload", "Panchakarma Explainer", "Online Doctor Scheduling", "Virtual Hospital Room Tour"],
      screens: [
        { name: "Hospital Home", desc: "Compassionate introduction to specialized Ayurvedic neuro-care" },
        { name: "Neurology Center", desc: "Stroke, Parkinson's, and neuropathy treatment protocols" },
        { name: "Spine Excellence", desc: "Non-surgical disc bulge and sciatica management" },
        { name: "Doctor Consultation", desc: "Book video consultation or hospital room stay" },
        { name: "Mobile Patient Portal", desc: "Easy access for patients and caregivers" },
      ],
    },
    techStack: {
      subtitle: "Built to stringent healthcare security and privacy standards ensuring patient medical records remain strictly confidential.",
      technologies: [
        { name: "Next.js", desc: "Fast server-side rendering for optimal search discoverability." },
        { name: "Tailwind CSS", desc: "Clean, accessible clinical styling with large readable typography." },
        { name: "Secure S3 Storage", desc: "Encrypted patient MRI scan and medical report uploads." },
        { name: "Hospital CRM Sync", desc: "Direct integration into doctor consultation schedules." },
        { name: "WhatsApp Clinical Desk", desc: "Immediate communication channel for patient caregivers." },
        { name: "Cloudflare Edge", desc: "Fast worldwide loading for GCC and European medical tourists." },
        { name: "Treatment CMS", desc: "Manage departments and therapy guides." },
        { name: "Appointment System", desc: "Capture doctor appointment requests." },
        { name: "Medical SEO", desc: "Improve discovery of hospital and treatment pages." },
      ],
      guarantees: [
        { title: "HIPAA Compliant", desc: "Confidential handling of medical history." },
        { title: "Certified Vaidyas", desc: "Qualified senior Ayurvedic neurologists." },
        { title: "Holistic Care", desc: "Combined yoga, diet, and therapy." },
        { title: "24/7 Nursing", desc: "Full hospital inpatient infrastructure." },
      ],
    },
    featuresDelivered: {
      subtitle: "Clinical digital features built to streamline patient triage and provide peace of mind to families.",
      items: [
        { title: "Speciality Condition Modules", desc: "Dedicated guides for Stroke Recovery, Sciatica, Parkinson's, and Disc Herniation.", icon: "Activity" },
        { title: "Secure Report Uploader", desc: "Patients can securely attach MRI scans, discharge summaries, and blood tests.", icon: "Upload" },
        { title: "Panchakarma Treatment Guide", desc: "Detailed explanations of Dhara, Njavara Kizhi, Vasthi, and Nasyam therapies.", icon: "BookOpen" },
        { title: "Tele-Consultation Booking", desc: "Schedule preliminary video consultations with Chief Medical Officers.", icon: "Video" },
        { title: "Inpatient Room Selector", desc: "Virtual tour of private AC suites, treatment rooms, and vegetarian diet facilities.", icon: "Home" },
        { title: "International Patient Desk", desc: "Airport pickup, language translation, and medical visa documentation support.", icon: "Globe" },
        { title: "Caregiver FAQ Hub", desc: "Answers to common concerns regarding recovery timelines and medication tapering.", icon: "HelpCircle" },
        { title: "Medical SEO Ranking", desc: "Ranked #1 for 'Ayurvedic stroke rehabilitation Kerala' and 'spine hospital Kochi'.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Real Results.", highlight: "Restored Mobility." },
      subtitle: "How digital transparency empowered hundreds of families to find specialized Ayurvedic healing.",
      stats: [
        { stat: "4.5x", label: "Patient Inquiries", desc: "Significant rise in hospital admissions from across India and GCC." },
        { stat: "70%", label: "Faster Medical Triage", desc: "Doctors reviewed digital reports prior to patient arrival." },
        { stat: "+85%", label: "Overseas Patient Inflow", desc: "Families from UAE, Oman, and UK booking inpatient packages." },
        { stat: "4.9/5", label: "Patient Care Rating", desc: "Heartfelt testimonials of restored mobility and independence." },
      ],
      footerTagline: "HEALING | RESTORATION | COMPASSION",
    },
  },



  // =========================================================================
  // 12. INFIG CONTENT HUB
  // =========================================================================
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
    heroTagline: "CASE STUDY",
    clientLogoText: "Infig Content Hub",
    clientLogoTagline: "WORDS THAT WORK & WIN",
    projectType: "Digital Content Agency & Writing Services Portal",
    heroHeadline: {
      prefix: "Infig Content Hub — Crafting High-Impact Copy",
      highlight: "That Inspires Audiences & Drives Conversions",
    },
    heroSubtitle: "A sleek, conversion-focused digital agency platform showcasing business copywriting, SEO blogs, technical whitepapers, and international university SOP admissions writing.",
    snapshot: {
      platform: "Next.js & Content Management Hub",
      duration: "2 Months",
      location: "Kochi, Kerala, India",
      services: "Agency Web Platform, Pricing Calculator, Portfolio Sample Library, Lead Funnels, SEO",
      previewImage: "/images/portfolio/infig.png",
      quickStats: [
        { stat: "4.1x", label: "Inbound Leads", desc: "Consistent organic client acquisition across India & GCC" },
        { stat: "1M+", label: "Words Delivered Monthly", desc: "Articles, SOPs, company profiles and marketing copy" },
        { stat: "98%", label: "University SOP Success", desc: "Students admitted to top UK, Canada & US universities" },
        { stat: "24h", label: "Fast Turnaround", desc: "Express delivery for time-sensitive corporate content" },
      ],
    },
    challenges: {
      subtitle: "Potential clients needed proof of writing quality, transparent pricing, and specialized niche knowledge before trusting an agency with their brand voice or visa SOPs.",
      items: [
        { title: "Intangible Service Dilemma", desc: "Clients couldn't assess writing quality without instant access to real samples.", icon: "FileText" },
        { title: "Opaque Pricing", desc: "Visitors bounced when agencies hid writing rates behind lengthy email inquiries.", icon: "DollarSign" },
        { title: "Multiple Writing Verticals", desc: "Struggled to balance corporate B2B copywriting with student study-abroad SOP services.", icon: "Layers" },
        { title: "Tight Deadline Urgency", desc: "Clients with 24-hour submission deadlines needed an instant project briefing process.", icon: "Clock" },
      ],
      floatingBadges: ["Unclear writing quality", "Hidden pricing friction", "Confused service niches", "Last-minute deadline stress"],
      summaryBanner: "Infig required a transparent, sample-rich agency website with instant price estimators to convert prospects effortlessly.",
    },
    strategy: {
      challengePoints: ["Hidden writing quality", "Pricing ambiguity", "Unsegmented B2B and Academic clients", "Deadline anxiety"],
      strategyPoints: ["Built comprehensive downloadable Writing Sample Library by industry", "Implemented transparent Word-Count & Project Type Cost Calculator", "Segmented clear paths for Business Brands vs Study-Abroad Students", "Created Express 24-Hour Delivery request form with direct WhatsApp coordination"],
      solutionPoints: ["Tangible proof of writing excellence", "Instant transparent cost estimations", "Tailored user journeys for B2B & Students", "Rapid deadline intake and project onboarding"],
      processSteps: [
        { label: "Sample Library", icon: "BookOpen" },
        { label: "Cost Calculator", icon: "Calculator" },
        { label: "Service Paths", icon: "Layers" },
        { label: "Brief Intake", icon: "FileText" },
        { label: "WhatsApp Desk", icon: "MessageSquare" },
        { label: "Content SEO", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "Clean, editorial design emphasizing typography, clarity, intellectual authority, and creative precision.",
      pills: ["Industry Sample Library", "Instant Word Count Calculator", "SOP & LOR Admission Hub", "B2B Brand Copywriting", "Express Delivery Desk"],
      screens: [
        { name: "Agency Home", desc: "Compelling introduction to storytelling and copy services" },
        { name: "Service Directory", desc: "SEO blogs, website copy, company profiles, and SOPs" },
        { name: "Writing Samples", desc: "Downloadable PDF excerpts across technology, finance, and healthcare" },
        { name: "Quote Calculator", desc: "Select word count, turnaround time, and delivery tier" },
        { name: "Mobile View", desc: "Quick project briefing from any mobile device" },
      ],
    },
    techStack: {
      subtitle: "Constructed with lightweight modern web standards ensuring pristine typography and instant file sample downloads.",
      technologies: [
        { name: "Next.js", desc: "High-speed rendering for optimal article discoverability." },
        { name: "Tailwind CSS", desc: "Refined editorial typography with perfect line height and contrast." },
        { name: "Cloudflare Storage", desc: "Instant download of PDF sample portfolios and guides." },
        { name: "Interactive React Calculator", desc: "Real-time client estimate generator based on word count." },
        { name: "WhatsApp Business API", desc: "Direct project brief submission to Senior Managing Editors." },
        { name: "Google Analytics 4", desc: "Tracking organic keyword rankings and content conversions." },
        { name: "Content Management Hub", desc: "Manage service pages and editorial content." },
        { name: "Sample Library", desc: "Organise writing samples by industry and service." },
        { name: "Client Onboarding", desc: "Collect details for new writing engagements." },
      ],
      guarantees: [
        { title: "100% Original", desc: "Turnitin and Copyscape plagiarism-free." },
        { title: "On-Time Guarantee", desc: "Strict adherence to agreed deadlines." },
        { title: "Free Revisions", desc: "Iterative refinement until client is delighted." },
        { title: "Confidentiality", desc: "Strict NDA protection for all client documents." },
      ],
    },
    featuresDelivered: {
      subtitle: "Content agency digital tools engineered to capture inquiries and establish editorial authority.",
      items: [
        { title: "Sample Library by Vertical", desc: "Read real client samples across Tech, Real Estate, E-Commerce, and Healthcare.", icon: "BookOpen" },
        { title: "Dynamic Word-Count Estimator", desc: "Instant price estimate based on words, urgency, and research depth.", icon: "Calculator" },
        { title: "Dedicated Study-Abroad SOP Hub", desc: "Specialized questionnaires for Statement of Purpose (SOP) and LOR writing.", icon: "GraduationCap" },
        { title: "Company Profile Creator", desc: "Structured onboarding questionnaires for corporate capability decks.", icon: "Building" },
        { title: "Plagiarism Guarantee Shield", desc: "Automated verification badges assuring 100% human-crafted originality.", icon: "ShieldCheck" },
        { title: "24-Hour Express Order", desc: "High-priority queue for emergency university or press release deadlines.", icon: "Clock" },
        { title: "WhatsApp Project Desk", desc: "Direct chat with content strategists and senior copywriters.", icon: "MessageCircle" },
        { title: "Content Marketing SEO", desc: "Ranked #1 for 'SOP writers in Kerala' and 'content writing agency Kochi'.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Measurable Impact.", highlight: "Words That Convert." },
      subtitle: "How clear digital positioning scaled Infig into a trusted content partner for businesses and students worldwide.",
      stats: [
        { stat: "4.1x", label: "Inbound Client Growth", desc: "Organic search leads eliminated reliance on paid advertisements." },
        { stat: "98%", label: "SOP Visa Approval Rate", desc: "Helped thousands of students win admission into global universities." },
        { stat: "1M+", label: "Words Monthly", desc: "High-capacity editorial engine serving brands in India, UAE, and UK." },
        { stat: "4.9/5", label: "Client Satisfaction", desc: "Hundreds of reviews praising speed, tone, and professionalism." },
      ],
      footerTagline: "CLARITY | PERSUASION | IMPACT",
    },
  },



  // =========================================================================
  // 15. PHOENIX FLOW GLOBAL
  // =========================================================================
  {
    id: "phoenix-flow",
    title: "Phoenix Flow Global",
    description: "Dubai mainland and free zone company formation, PRO services, investor visas and corporate advisory.",
    category: "Corporate Services & Business Setup",
    image: "/images/portfolio/phoenix.png",
    tags: ["UAE Business Setup", "Company Formation", "PRO Services", "Investor Visas"],
    client: "Phoenix Flow Global LLC",
    year: "2024",
    deliverables: ["Corporate Advisory Web", "Jurisdiction & License Guide", "Cost Estimator Calculator", "Consultation Booking Desk"],
    highlights: [
      "Interactive business setup cost estimator across UAE mainland and top free zones",
      "Step-by-step corporate licensing guides for commercial, professional, and industrial setups",
      "Investor, golden visa, and family residency permit application inquiry funnels",
      "Direct WhatsApp and calendar booking connecting founders to senior setup consultants",
    ],
    heroTagline: "CASE STUDY",
    clientLogoText: "Phoenix Flow",
    clientLogoTagline: "SEAMLESS UAE BUSINESS FORMATION",
    projectType: "Corporate Services & UAE Business Formation Portal",
    heroHeadline: {
      prefix: "Phoenix Flow — Simplifying UAE Company Formation",
      highlight: "For Global Entrepreneurs & Investors",
    },
    heroSubtitle: "A premier corporate advisory portal demystifying UAE mainland and free zone incorporation, corporate bank accounts, golden visas, and government PRO services.",
    snapshot: {
      platform: "Next.js & Corporate Advisory Funnel",
      duration: "2.5 Months",
      location: "Dubai, United Arab Emirates",
      services: "Corporate Web Platform, License Cost Calculator, Visa Advisory Funnels, Multilingual SEO",
      previewImage: "/images/portfolio/phoenix.png",
      quickStats: [
        { stat: "4.2x", label: "International Leads", desc: "Founders from Europe, India, and US seeking UAE company setup" },
        { stat: "1,200+", label: "Companies Formed", desc: "Mainland LLCs, free zone entities, and offshore setups" },
        { stat: "48h", label: "Fast License Issuance", desc: "Express company trade license processing with government authorities" },
        { stat: "100%", label: "Bank Account Support", desc: "Guaranteed assistance with premier UAE business bank accounts" },
      ],
    },
    challenges: {
      subtitle: "Foreign investors and entrepreneurs found UAE business setup confusing due to overlapping free zone jurisdictions, hidden licensing fees, and complex visa rules.",
      items: [
        { title: "Jurisdiction Confusion", desc: "Founders didn't know whether Mainland, Meydan, IFZA, DMCC, or DED fit their business model.", icon: "MapPin" },
        { title: "Hidden Fee Skepticism", desc: "Entrepreneurs were wary of shady consultants quoting low upfront rates with massive hidden fees.", icon: "DollarSign" },
        { title: "Bank Account Rejections", desc: "Foreign founders faced strict compliance hurdles opening UAE corporate bank accounts.", icon: "CreditCard" },
        { title: "Complex Visa Procedures", desc: "Investors needed clear paths for Golden Visas, partner visas, and employee quotas.", icon: "FileText" },
      ],
      floatingBadges: ["Free zone vs Mainland confusion", "Hidden consultant fees", "Bank account rejections", "Visa policy complexity"],
      summaryBanner: "Phoenix Flow required a transparent, authoritative digital advisory platform with an instant cost calculator to win investor trust.",
    },
    strategy: {
      challengePoints: ["Confusing jurisdiction choices", "Lack of pricing transparency", "Bank account approval hurdles", "Intimidating visa procedures"],
      strategyPoints: ["Built interactive Jurisdiction Comparison Guide (Mainland vs Free Zones)", "Engineered transparent UAE Business Setup Cost Calculator with zero hidden costs", "Created dedicated Corporate Banking and Golden Visa assistance pages", "Integrated direct WhatsApp and video consultation scheduling with Senior Advisors"],
      solutionPoints: ["Clarity on ideal business jurisdiction", "Transparent, itemized setup cost breakdowns", "Dedicated banking and visa pathways", "Instant access to certified corporate consultants"],
      processSteps: [
        { label: "Cost Calculator", icon: "Calculator" },
        { label: "Jurisdiction Guide", icon: "Compass" },
        { label: "License Flow", icon: "FileText" },
        { label: "Visa Portal", icon: "UserCheck" },
        { label: "WhatsApp Desk", icon: "MessageSquare" },
        { label: "Corporate SEO", icon: "Search" },
      ],
    },
    showcase: {
      subtitle: "A polished corporate aesthetic utilizing deep navy blue, crisp platinum accents, and prestigious Dubai business authority.",
      pills: ["Mainland vs Free Zone Comparison", "Instant Setup Cost Calculator", "Golden Visa Assessment", "Corporate Bank Account Desk", "PRO Services Concierge"],
      screens: [
        { name: "Advisory Home", desc: "Authoritative introduction to starting a business in Dubai" },
        { name: "Cost Calculator", desc: "Select activities, visa quotas, and calculate licensing costs" },
        { name: "Jurisdiction Explorer", desc: "Compare DMCC, IFZA, Shams, RAKEZ, and DED Mainland" },
        { name: "Golden Visa Hub", desc: "10-year investor and talent residency requirements" },
        { name: "Mobile View", desc: "Instant corporate consultation booking on the go" },
      ],
    },
    techStack: {
      subtitle: "Constructed with enterprise-grade web technology ensuring swift performance for international investors worldwide.",
      technologies: [
        { name: "Next.js", desc: "Blazing fast server rendering for global international discoverability." },
        { name: "Tailwind CSS", desc: "Modern executive design with sharp typography and contrast." },
        { name: "Interactive React Calculator", desc: "Real-time licensing estimation across multiple UAE authorities." },
        { name: "Corporate CRM Sync", desc: "Immediate routing of investor inquiries to licensed advisors." },
        { name: "Calendly Integration", desc: "Seamless scheduling of 1-on-1 Zoom advisory sessions." },
        { name: "Cloudflare Edge", desc: "Ultra-fast global access for founders in Europe, Asia, and the Americas." },
        { name: "Jurisdiction & License Guide", desc: "Help founders explore licensing options." },
        { name: "Visa Advisory Funnels", desc: "Capture enquiries for investor visa services." },
        { name: "Multilingual SEO", desc: "Support discovery of advisory services across languages." },
      ],
      guarantees: [
        { title: "100% Foreign Ownership", desc: "Full ownership options across Mainland & Free Zones." },
        { title: "Zero Hidden Costs", desc: "Completely transparent government fee breakdown." },
        { title: "Bank Account Support", desc: "Dedicated corporate banking relationship managers." },
        { title: "End-to-End PRO", desc: "Complete handling of visas, medicals, and Emirates IDs." },
      ],
    },
    featuresDelivered: {
      subtitle: "Advisory digital tools designed to inform investors and streamline UAE company formation.",
      items: [
        { title: "Interactive Business Cost Calculator", desc: "Calculate license costs based on business activity, visa count, and office space.", icon: "Calculator" },
        { title: "Mainland vs Free Zone Matrix", desc: "Compare local market access, tax benefits, and office requirements side-by-side.", icon: "Sliders" },
        { title: "10-Year Golden Visa Checker", desc: "Evaluate eligibility for property investors, entrepreneurs, and high-salaried executives.", icon: "Award" },
        { title: "Corporate Bank Account Guide", desc: "Checklist of documents and compliance requirements for Emirates NBD, Wio, and Mashreq.", icon: "CreditCard" },
        { title: "PRO & Government Liaison Desk", desc: "Fast-track Emirates ID, medical typing, and labor quota processing.", icon: "FileText" },
        { title: "Video Consultation Scheduler", desc: "Book direct video calls with senior company formation specialists.", icon: "Calendar" },
        { title: "Direct WhatsApp Line", desc: "Immediate answers to corporate licensing and tax questions.", icon: "MessageCircle" },
        { title: "Corporate Setup SEO", desc: "Ranked #1 for 'Dubai business setup cost calculator' and 'IFZA free zone license'.", icon: "Search" },
      ],
    },
    results: {
      headline: { prefix: "Measurable Impact.", highlight: "Global Enterprise." },
      subtitle: "How digital clarity established Phoenix Flow as a premier corporate advisor for global founders launching in Dubai.",
      stats: [
        { stat: "4.2x", label: "International Inbound Inquiries", desc: "Entrepreneurs worldwide used the calculator to plan company formation." },
        { stat: "48 Hours", label: "Fastest License Issued", desc: "Streamlined digital document collection cut setup turnaround drastically." },
        { stat: "95%", label: "Bank Account Success Rate", desc: "High success rate opening Tier-1 UAE corporate bank accounts." },
        { stat: "5.0/5", label: "Client Advisory Rating", desc: "Praised by international founders for total transparency and speed." },
      ],
      footerTagline: "INCORPORATE | GROW | THRIVE IN DUBAI",
    },
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
