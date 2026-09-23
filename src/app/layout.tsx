import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
  title: "Kaelixo | Technology That Helps Businesses Think Bigger, Build Smarter and Grow Faster.",
  description:
    "We design intelligent websites, build powerful software, create custom CRM solutions, develop AI-driven tools and deliver digital growth strategies for ambitious businesses worldwide.",
  keywords: [
    "Kaelixo",
    "Intelligent Websites",
    "Custom Software",
    "CRM Solutions",
    "AI Tools",
    "Digital Growth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} dark scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#020205] text-slate-100 antialiased font-sans custom-scrollbar selection:bg-[#FF0055] selection:text-white">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
