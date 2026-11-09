import React from "react";
import {
  TrendingUp,
  Settings,
  Users,
  Laptop,
  Layers,
  BarChart3,
  Megaphone,
  Smartphone,
  Search,
  Briefcase,
  MapPin,
  FileText,
  MessageCircle,
  ShieldCheck,
  Download,
  Award,
  Video,
  Sliders,
  Globe,
  Clock,
  Layout,
  HelpCircle,
  PhoneCall,
  Lock,
  Heart,
  Activity,
  UserCheck,
  Home,
  Navigation,
  Filter,
  Camera,
  Car,
  Maximize,
  CreditCard,
  Grid,
  Calculator,
  GraduationCap,
  Ship,
  Coffee,
  BookOpen,
  Bell,
  Upload,
  Zap,
  Sparkles,
  Utensils,
  Armchair,
  ShoppingBag,
  ShoppingCart,
  Store,
  Palmtree,
  Plane,
  HeartPulse,
  Stethoscope,
  Factory,
  Building2,
  PenTool,
  Compass,
  Brain,
  Leaf,
} from "lucide-react";

export function renderIcon(name?: string, className = "w-5 h-5") {
  switch (name) {
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "Settings":
      return <Settings className={className} />;
    case "Users":
      return <Users className={className} />;
    case "Laptop":
      return <Laptop className={className} />;
    case "Layers":
      return <Layers className={className} />;
    case "BarChart3":
    case "BarChart2":
      return <BarChart3 className={className} />;
    case "Megaphone":
      return <Megaphone className={className} />;
    case "Smartphone":
      return <Smartphone className={className} />;
    case "Search":
      return <Search className={className} />;
    case "Briefcase":
      return <Briefcase className={className} />;
    case "MapPin":
    case "Map":
      return <MapPin className={className} />;
    case "FileText":
      return <FileText className={className} />;
    case "MessageCircle":
    case "MessageSquare":
      return <MessageCircle className={className} />;
    case "ShieldCheck":
    case "Shield":
      return <ShieldCheck className={className} />;
    case "Download":
      return <Download className={className} />;
    case "Award":
      return <Award className={className} />;
    case "Video":
      return <Video className={className} />;
    case "Sliders":
      return <Sliders className={className} />;
    case "Globe":
      return <Globe className={className} />;
    case "Clock":
      return <Clock className={className} />;
    case "Layout":
      return <Layout className={className} />;
    case "HelpCircle":
      return <HelpCircle className={className} />;
    case "PhoneCall":
      return <PhoneCall className={className} />;
    case "Lock":
      return <Lock className={className} />;
    case "Heart":
      return <Heart className={className} />;
    case "Activity":
      return <Activity className={className} />;
    case "UserCheck":
      return <UserCheck className={className} />;
    case "Home":
      return <Home className={className} />;
    case "Navigation":
      return <Navigation className={className} />;
    case "Filter":
      return <Filter className={className} />;
    case "Camera":
      return <Camera className={className} />;
    case "Car":
      return <Car className={className} />;
    case "Maximize":
      return <Maximize className={className} />;
    case "CreditCard":
      return <CreditCard className={className} />;
    case "Grid":
      return <Grid className={className} />;
    case "Calculator":
      return <Calculator className={className} />;
    case "GraduationCap":
      return <GraduationCap className={className} />;
    case "Ship":
      return <Ship className={className} />;
    case "Coffee":
      return <Coffee className={className} />;
    case "BookOpen":
      return <BookOpen className={className} />;
    case "Bell":
      return <Bell className={className} />;
    case "Upload":
      return <Upload className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Utensils":
      return <Utensils className={className} />;
    case "Armchair":
      return <Armchair className={className} />;
    case "ShoppingBag":
      return <ShoppingBag className={className} />;
    case "ShoppingCart":
      return <ShoppingCart className={className} />;
    case "Store":
      return <Store className={className} />;
    case "Palmtree":
      return <Palmtree className={className} />;
    case "Plane":
      return <Plane className={className} />;
    case "HeartPulse":
      return <HeartPulse className={className} />;
    case "Stethoscope":
      return <Stethoscope className={className} />;
    case "Factory":
      return <Factory className={className} />;
    case "Building2":
      return <Building2 className={className} />;
    case "PenTool":
      return <PenTool className={className} />;
    case "Compass":
      return <Compass className={className} />;
    case "Brain":
      return <Brain className={className} />;
    case "Leaf":
      return <Leaf className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

/**
 * Returns an industry/category specific Lucide icon.
 * Falls back to Briefcase if no specific category match is found.
 */
export function getIndustryIcon(
  categoryOrIndustry?: string,
  overrideIcon?: string,
  className = "w-5 h-5"
): React.ReactElement {
  if (overrideIcon) {
    return renderIcon(overrideIcon, className);
  }

  const text = (categoryOrIndustry || "").toLowerCase();

  // 1. Food, Dining, Restaurant & Hospitality
  if (/(food|hospitality|restaurant|dining|cafe|bakery|catering|culinary)/i.test(text)) {
    return <Utensils className={className} />;
  }

  // 2. Healthcare, Medical, Clinic, Ayurveda, Neurology
  if (/(health|clinic|medical|ayurved|neurolog|doctor|hospital|wellness|pharma)/i.test(text)) {
    return <HeartPulse className={className} />;
  }

  // 3. Furniture & Living Spaces
  if (/(furniture|decor|sofa|chair)/i.test(text)) {
    return <Armchair className={className} />;
  }

  // 4. Architecture, Interior Fitout, Design Studio
  if (/(architecture|fitout|interior)/i.test(text)) {
    return <Compass className={className} />;
  }

  // 5. Industrial, Steel Works, Engineering, Manufacturing, Factory
  if (/(industrial|steel|engineering|manufacturing|factory)/i.test(text)) {
    return <Factory className={className} />;
  }

  // 6. Supermarket & Groceries
  if (/(supermarket|grocery|groceries|mart)/i.test(text)) {
    return <ShoppingCart className={className} />;
  }

  // 7. Houseboat, Cruise, Marine
  if (/(houseboat|marine|yacht|cruise|ship|boat)/i.test(text)) {
    return <Ship className={className} />;
  }

  // 8. Luxury Travel, Event Mobility, Fleet, Vehicle
  if (/(mobility|transport|car|automotive|fleet|cab|taxi)/i.test(text)) {
    return <Car className={className} />;
  }

  // 9. Travel & Tourism, Vacation, Holidays
  if (/(travel|tour|tourism|holiday|resort|vacation)/i.test(text)) {
    return <Palmtree className={className} />;
  }

  // 10. Education, Academy, Institute, Technical Skills
  if (/(education|academy|institute|skill|school|training|learning|college)/i.test(text)) {
    return <GraduationCap className={className} />;
  }

  // 11. Content Agency, Copywriting, Publishing
  if (/(content|copywriting|publishing|agency|journalism|editorial)/i.test(text)) {
    return <PenTool className={className} />;
  }

  // 12. Corporate Services, Business Setup, Enterprise
  if (/(corporate|business setup|consulting|enterprise|holding|firm)/i.test(text)) {
    return <Building2 className={className} />;
  }

  // 13. Retail, Shopping Mall, E-Commerce, Spices
  if (/(retail|shopping|mall|e-commerce|ecommerce|store|goods|spices)/i.test(text)) {
    return <ShoppingBag className={className} />;
  }

  // 14. Web, Tech & Booking Platform
  if (/(booking|platform|web|software|tech|digital)/i.test(text)) {
    return <Globe className={className} />;
  }

  // Fallback
  return <Briefcase className={className} />;
}
