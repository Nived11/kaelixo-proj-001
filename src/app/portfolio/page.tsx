import type { Metadata } from "next";
import PortfolioMain from "@/features/portfolio/PortfolioMain";

export const metadata: Metadata = {
  title: "Portfolio | Projects That Create Real Impact | Kaelixo",
  description:
    "From websites and web applications to digital marketing and brand development, explore our work helping businesses grow, engage and succeed.",
  openGraph: {
    title: "Portfolio | Projects That Create Real Impact | Kaelixo",
    description:
      "Explore Kaelixo's portfolio across web development, custom software, CRM systems, digital marketing, and brand identity.",
    images: ["/images/about/aboutherobg.png"],
  },
};

export default function PortfolioPage() {
  return <PortfolioMain />;
}

