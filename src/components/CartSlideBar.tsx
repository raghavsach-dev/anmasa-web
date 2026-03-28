import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import useCart, { CartProduct } from "@/store/cart";
import Billdetails from "@/components/Billdetails";
import TotalSavings from "@/components/TotalSavings";
import PlaceOrder from "./ProceedToBuy";
import CartCardItem from "./CartCardItem";

export default function CartSlideBar({
  showCartSlideBar,
  setShowCartSlideBar,
  ...rest
}: {
  showCartSlideBar: boolean;
  setShowCartSlideBar: (showCartSlideBar: boolean) => void;
} & React.HTMLAttributes<HTMLDivElement>) {
  const cart = useCart((state: any) => state.cart);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
        onClick={() => setShowCartSlideBar(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 w-1/4 h-full bg-white z-50 border border-anmasa-accent rounded-l-lg mb-10 flex flex-col ${
          showCartSlideBar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 border-l border-anmasa-accent`}
        {...rest}
      >
        <div className="flex flex-row justify-between items-center mt-2 px-4">
          <div className="flex flex-row items-center gap-2">
            <button onClick={() => setShowCartSlideBar(false)}>
              <FaArrowLeft size={17} />
            </button>
            <h1 className="text-2xl font-bold">My Cart</h1>
          </div>
          <TotalSavings />
        </div>

        <div className="flex-1 flex flex-col py-2 overflow-y-auto">
          {cart.map((item: CartProduct) => (
            <CartCardItem key={item.item_code} item={item} />
          ))}
        </div>

        <div className="px-4">
          <Billdetails />
        </div>
      </div>
    </>
  );
}
