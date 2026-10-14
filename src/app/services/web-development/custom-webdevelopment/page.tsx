import CustomWebDevMain from "@/features/services/web-development/custom-webdevelopment/CustomWebDevMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Website Development | Kaelixo",
  description: "Custom Websites, Built Around Your Business. As a custom web development company, we skip templates and build scalable websites shaped around how your business grows.",
};

export default function CustomWebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#020205] font-sans">
      <CustomWebDevMain />
    </main>
  );
}
