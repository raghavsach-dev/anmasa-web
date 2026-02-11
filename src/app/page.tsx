import "./globals.css";
import Navbar from "@/components/Navbar";
import Messagebar from "@/components/Messagebar";
import ProductRow from "@/components/products/ProductRow";
import Image from "next/image";
import { getProductsByCategory } from "./services/products-service";
import VarientButton from "@/components/products/VariantButton";
import { Category, Subcategory, Product } from "./types/products";

export default async function Home() {

  return (
    <div className="bg-anmasa-bg w-[100vw]">
      <>
        <Navbar />
        <ProductRow categoryCode = "ATTA" />
        <Image
          src="/promo.png"
          alt="promo"
          width={1400}
          height={1400}
          className="object-cover"
        />
      </>
    </div>
  );
}
