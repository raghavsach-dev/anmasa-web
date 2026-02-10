import "./globals.css";
import Navbar from "@/components/Navbar";
import Messagebar from "@/components/Messagebar";
import ProductRow from "@/components/products/ProductRow";
import Image from "next/image";
// import { getProductsByCategory } from "./services/products-service";
import Product from "./types/Products";
import VarientButton from "@/components/products/VariantButton";

const product = [
  {
    id: 1,
    image: "/flour.png",
    title: "A2 Vedic Cow Ghee",
  },
  {
    id: 2,
    image: "/flour.png",
    title: "Cold Pressed Mustard Oil",
  },
  {
    id: 3,
    image: "/flour.png",
    title: "Organic Honey",
  },
  {
    id: 4,
    image: "/flour.png",
    title: "Stone Ground Atta",
  },
  {
    id: 5,
    image: "/flour.png",
    title: "Stone Ground Atta",
  },
  {
    id: 6,
    image: "/flour.png",
    title: "Stone Ground Atta",
  },
];

export default async function Home() {
  // const productsArray: Product[] = await getProducts("ATTA");

  return (
    <div className="bg-anmasa-bg w-[100vw]">
      <>
        <Navbar />
        {/* <ProductRow products = {productsArray} /> */}
        <Image
          src="/promo.png"
          alt="promo"
          width={1400}
          height={1400}
          className="object-cover"
        />
      </>
      {/* <VarientButton /> */}
    </div>
  );
}
