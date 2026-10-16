import EcommerceDevMain from "@/features/services/web-development/e-commerce-solutions/EcommerceDevMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Solutions | Kaelixo",
  description: "Online Stores Built to Sell. As a provider of ecommerce web development services, we start with how your customers shop, then build a store around it, so every visit has a clear path to checkout.",
};

export default function EcommerceSolutionsPage() {
  return (
    <main className="min-h-screen bg-[#020205] font-sans">
      <EcommerceDevMain />
    </main>
  );
}
