import type { Metadata } from "next";
import AboutMain from "@/features/about/AboutMain";

export const metadata: Metadata = {
  title: "About Us | Kaelixo - People Behind Digital Impact",
  description:
    "We are a team of creative thinkers, developers and problem-solvers on a mission to build digital experiences that create real value for businesses.",
  openGraph: {
    title: "About Us | Kaelixo",
    description:
      "People Behind Digital Impact. We build digital experiences that create real value for businesses.",
    images: ["/images/about/hero-office-bg.webp"],
  },
};

export default function AboutPage() {
  return <AboutMain />;
}
