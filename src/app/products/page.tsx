import type { Metadata } from "next";
import ProductsMain from "@/features/products/ProductsMain";

export const metadata: Metadata = {
  title: "Products | Built by Kaelixo For Modern Businesses",
  description:
    "Powerful digital products designed to simplify operations, improve productivity and accelerate growth.",
  openGraph: {
    title: "Products | Built by Kaelixo For Modern Businesses",
    description:
      "Powerful digital products designed to simplify operations, improve productivity and accelerate growth.",
    images: ["/images/about/aboutherobg.png"],
  },
};

export default function ProductsPage() {
  return <ProductsMain />;
}

