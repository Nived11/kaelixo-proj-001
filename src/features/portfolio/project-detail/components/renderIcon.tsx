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
    default:
      return <Sparkles className={className} />;
  }
}

