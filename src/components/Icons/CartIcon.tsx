"use client";
import { FiShoppingBag } from "react-icons/fi";
import useCart from "@/store/cart";
import { useState } from "react";
import CartSlideBar from "../CartSlideBar";
export default function CartIcon() {
  const cart = useCart((state: any) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const handleClickCart = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <>
      <div
        className="flex flex-row items-center gap-2 border border-anmasa-accent rounded-2xl px-2 py-1 ml-3 cursor-pointer"
        onClick={handleClickCart}
      >
        <FiShoppingBag size={25} />
        <div className="flex flex-col">
          <p className="text-sm text-anmasa-accent">
            {cart.reduce((acc: number, curr: any) => acc + curr.quantity, 0)}{" "}
            Items
          </p>
          <p className="text-sm text-anmasa-accent">
            ₹{cart.reduce((acc: number, curr: any) => acc + curr.line_total, 0)}
          </p>
        </div>
      </div>
      {isOpen && (
        <CartSlideBar
          showCartSlideBar={isOpen}
          setShowCartSlideBar={setIsOpen}
        />
      )}
    </>
  );
}
