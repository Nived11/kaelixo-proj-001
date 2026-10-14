import WebAppDevMain from "@/features/services/web-development/web-application-development/WebAppDevMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Application Development | Kaelixo",
  description: "Web Apps Built to Run Your Business. As a web app development company, we don't just build interfaces — we build systems that run your day-to-day operations, the way Way We Go and EduLoom run ours.",
};

export default function WebApplicationDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#020205] font-sans">
      <WebAppDevMain />
    </main>
  );
}
