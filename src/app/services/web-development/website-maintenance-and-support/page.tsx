import WebsiteMaintenanceMain from "@/features/services/web-development/website-maintenance-and-support/WebsiteMaintenanceMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Maintenance & Support | Kaelixo",
  description: "Going Live Is Only the Start. Our website maintenance services keep your site quick, safe and current, then turn what the data reveals into steady improvement.",
};

export default function WebsiteMaintenancePage() {
  return (
    <main className="min-h-screen bg-[#020205] font-sans">
      <WebsiteMaintenanceMain />
    </main>
  );
}
