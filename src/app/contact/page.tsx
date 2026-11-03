import type { Metadata } from "next";
import ContactMain from "@/features/contact/ContactMain";

export const metadata: Metadata = {
  title: "Contact Kaelixo | Websites, Software and CRM Solutions in Kochi",
  description:
    "Planning a website, app, CRM, or software build? Kaelixo in Kochi helps you think it through, build it right, and grow with confidence. Share your idea today.",
  openGraph: {
    title: "Contact Kaelixo | Websites, Software and CRM Solutions in Kochi",
    description:
      "Planning a website, app, CRM, or software build? Kaelixo in Kochi helps you think it through, build it right, and grow with confidence. Share your idea today.",
    images: ["/images/about/aboutherobg.png"],
  },
};

export default function ContactPage() {
  return <ContactMain />;
}

