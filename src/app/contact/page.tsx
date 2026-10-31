import type { Metadata } from "next";
import ContactMain from "@/features/contact/ContactMain";

export const metadata: Metadata = {
  title: "Contact Us | Kaelixo - Let's Build Something Great Together",
  description:
    "Have a project in mind or just want to say hello? Get in touch with Kaelixo for intelligent websites, custom software, CRM solutions and growth marketing.",
  openGraph: {
    title: "Contact Us | Kaelixo",
    description:
      "Let's Build Something Great Together. Have a project in mind or just want to say hello? We'd love to hear from you.",
    images: ["/images/about/aboutherobg.png"],
  },
};

export default function ContactPage() {
  return <ContactMain />;
}

