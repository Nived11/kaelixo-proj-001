import type { Metadata } from "next";
import AboutTeamView from "@/features/about/components/AboutTeamView";

export const metadata: Metadata = {
  title: "Our Team | Kaelixo - The Minds Behind Digital Impact",
  description:
    "Meet our team of designers, developers, writers, marketers, and strategists crafting high-impact digital experiences at Kaelixo.",
  openGraph: {
    title: "Our Team | Kaelixo",
    description:
      "Passionate people building solutions for a better tomorrow. Meet the team behind Kaelixo.",
    images: ["/images/about/team/aboutteambg.png"],
  },
};

export default function TeamPage() {
  return <AboutTeamView />;
}
