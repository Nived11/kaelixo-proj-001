import PerformanceOptimizationMain from "@/features/services/web-development/performance-optimization/PerformanceOptimizationMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Optimization | Kaelixo",
  description: "Faster Sites. Better Results. As a web performance optimization company, we find what's slowing your site down, fix it, then keep it fast as your business grows.",
};

export default function PerformanceOptimizationPage() {
  return (
    <main className="min-h-screen bg-[#020205] font-sans">
      <PerformanceOptimizationMain />
    </main>
  );
}
