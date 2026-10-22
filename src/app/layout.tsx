import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import DeferredConsultationModal from "@/components/common/DeferredConsultationModal";
import PageLoader from "@/components/ui/PageLoader";
import ScrollToTop from '@/features/home/components/ScrollToTop';
import SmoothScroll from "@/components/common/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaelixo | Growth Marketing Agency | Think. Build. Grow.",
  description:
    "Kaelixo is a growth marketing agency building intelligent websites, custom software, CRM solutions and AI-driven tools that drive real digital growth.",
  keywords: [
    "Growth Marketing Agency",
    "Kaelixo",
    "Intelligent Websites",
    "Custom Software Development",
    "CRM Solutions",
    "AI Tools",
    "Digital Growth",
    "Digital Marketing Agency Kochi",
    "Web Development Company Kochi",
    "Software Development Company Kerala",
    "Custom CRM Development"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-[#020205] text-slate-100 antialiased font-sans custom-scrollbar selection:bg-[#FF0055] selection:text-white">
        <PageLoader>
          <Script
          src="https://kaira.kaelixo.com/static/js/kaira_widget.js"
          data-api-base="https://kaira.kaelixo.com"
          data-widget-key="QrRUFOkdr7VfR-t4n6HKWGx3qqKs1ic7l9dHDZ18N54"
          strategy="lazyOnload"
        />
          <SmoothScroll>
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
            <ScrollToTop />
            <DeferredConsultationModal />
          </SmoothScroll>
        </PageLoader>
        
      </body>
    </html>
  );
}
