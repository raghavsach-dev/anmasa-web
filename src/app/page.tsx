// import CategoryRow from "@/components/category/CategoryRow";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ProductRow from "@/components/products/ProductRow";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="bg-anmasa-bg w-[100vw]">
      <>
        <Navbar />
        <ProductRow categoryCode="ATTA" />
        <Image
          src="/promo.png"
          alt="promo"
          width={1400}
          height={1400}
          className="object-cover"
        />
        {/* <CategoryRow categoryCode="ATTA" /> */}
      </>
    </div>
  );
}
