import HomeMain from "@/features/home/HomeMain";
import { preload } from "react-dom";

export default function HomePage() {
  preload('/images/home/globe-original.webp', { as: 'image', fetchPriority: 'high' });
  return <HomeMain />;
}
