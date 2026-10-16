import CMSDevMain from "@/features/services/web-development/cms-development/CMSDevMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS Development | Kaelixo",
  description: "Websites Your Team Can Run Itself. As a CMS website development company, we study how your team actually works with content, then build a system around it, so updating your site never waits on a developer.",
};

export default function CMSDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#020205] font-sans">
      <CMSDevMain />
    </main>
  );
}
