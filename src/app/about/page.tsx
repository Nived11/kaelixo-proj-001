import type { Metadata } from "next";
import AboutMain from "@/features/about/AboutMain";

export const metadata: Metadata = {
  title: "About Kaelixo | Web, Software & Growth Marketing, Kochi",
  description:
    "Kaelixo is a Kochi-based growth marketing company combining web development, UI/UX, software, CRM, and growth marketing to build solutions that fit your business.",
  openGraph: {
    title: "About Kaelixo | Web, Software & Growth Marketing, Kochi",
    description:
      "Kaelixo is a Kochi-based growth marketing company combining web development, UI/UX, software, CRM, and growth marketing to build solutions that fit your business.",
    images: ["/images/about/hero-office-bg.webp"],
  },
};

export default function AboutPage() {
  return <AboutMain />;
}
