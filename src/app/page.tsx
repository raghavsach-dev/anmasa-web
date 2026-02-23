import CategoryRow from "@/components/category/CategoryRow";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="bg-anmasa-bg w-[100vw]">
      <>
        <Navbar />
        <Image
          src="/promo.png"
          alt="promo"
          width={1400}
          height={1400}
          className="object-cover"
        />
        <CategoryRow />
      </>
    </div>
  );
}
