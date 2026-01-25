import "./globals.css";
import Navbar from "@/components/Navbar";
import Messagebar from "@/components/Messagebar";
import Mainpage from "@/components/Mainpage"
import ProductsRow from "@/components/ProductsRow";
const products = [
  { id: 1, image: "/p1.png", title: "A2 Vedic Cow Ghee", oldPrice: "250.00", price: "199.00", offerPrice: "149", coupon: "ANMASA26", badge: "Save 20%" },
  { id: 2, image: "/p1.png", title: "Cold Pressed Mustard Oil", oldPrice: "320.00", price: "269.00", offerPrice: "229", coupon: "ANMASA26", badge: "Best Seller" },
  { id: 3, image: "/p1.png", title: "Organic Honey", oldPrice: "180.00", price: "149.00", offerPrice: "129", coupon: "ANMASA26", badge: "Hot Deal" },
  { id: 4, image: "/p1.png", title: "Stone Ground Atta", oldPrice: "210.00", price: "179.00", offerPrice: "159", coupon: "ANMASA26", badge: "Popular" },
  { id: 5, image: "/p1.png", title: "Cold Pressed Coconut Oil", oldPrice: "340.00", price: "289.00", offerPrice: "249", coupon: "ANMASA26", badge: "Save 15%" },
  { id: 6, image: "/p1.png", title: "Organic Turmeric Powder", oldPrice: "160.00", price: "129.00", offerPrice: "109", coupon: "ANMASA26", badge: "Fresh Stock" },
  { id: 7, image: "/p1.png", title: "Desi Jaggery Powder", oldPrice: "140.00", price: "119.00", offerPrice: "99", coupon: "ANMASA26", badge: "No Chemicals" },
  { id: 8, image: "/p1.png", title: "Raw Forest Honey", oldPrice: "260.00", price: "219.00", offerPrice: "189", coupon: "ANMASA26", badge: "Pure" },
  { id: 9, image: "/p1.png", title: "Cold Pressed Groundnut Oil", oldPrice: "330.00", price: "279.00", offerPrice: "239", coupon: "ANMASA26", badge: "Healthy Choice" },
  { id: 10, image: "/p1.png", title: "Organic Black Pepper", oldPrice: "190.00", price: "159.00", offerPrice: "139", coupon: "ANMASA26", badge: "Spicy Deal" },
];


export default function Home() {
  return (
    <div className="bg-anmasa-green">
      <>
        <Navbar />
        <Mainpage />
        <ProductsRow products={products} />;
      </>
    </div>
  );
}
