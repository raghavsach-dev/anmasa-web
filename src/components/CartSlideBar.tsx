import React from "react";
import { FiX } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import useCart, { CartProduct } from "@/store/cart";
import Image from "next/image";
import QuantitySelector from "./product/QuantitySelector";

export default function CartSlideBar({
  showCartSlideBar,
  setShowCartSlideBar,
  ...rest
}: {
  showCartSlideBar: boolean;
  setShowCartSlideBar: (showCartSlideBar: boolean) => void;
} & React.HTMLAttributes<HTMLDivElement>) {
  const handleCloseCartSlideBar = () => {
    setShowCartSlideBar(false);
  };
  const cart = useCart((state: any) => state.cart);
  const clearCart = useCart((state: any) => state.clearCart);
  const updateItemQuantity = useCart((state: any) => state.updateItemQuantity);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
        onClick={() => setShowCartSlideBar(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 w-1/4 h-full bg-white z-50 border border-anmasa-accent rounded-l-2xl mb-10 ${showCartSlideBar ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 border-l border-anmasa-accent`}
        {...rest}
      >
        {" "}
        <div className="flex flex-row justify-between items-center mt-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold ml-4 flex flex-row items-center gap-2">
              <FaShoppingCart size={25} /> My Cart
            </h1>
          </div>
          <button
            className="text-anmasa-accent cursor-pointer mr-4"
            onClick={() => setShowCartSlideBar(false)}
          >
            <FiX size={25} />
          </button>
        </div>
        <div className="flex flex-col p-2 h-[calc(100vh-100px)] overflow-y-auto">
          {cart.map((item: CartProduct) => (
            <div key={item.item_code} className="flex flex-col p-2 ">
              <div className="flex flex-row gap-2 w-full items-center border border-anmasa-accent rounded-lg p-2 justify-center">
                <Image
                  src={item.image}
                  alt={item.item_code}
                  width={130}
                  height={130}
                  className="object-cover rounded-lg object-center"
                />
                <div className="flex flex-col gap-2 w-full">
                  <h1>
                    {item.name} ({item.variant_name})
                  </h1>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm">
                      {" "}
                      MRP: ₹
                      <span className="text-sm text-gray-500 line-through">
                        {item.mrp}
                      </span>
                      &nbsp; ₹{item.selling_price}
                    </p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2">
                      <QuantitySelector
                        label=""
                        outOfStock={false}
                        quantity={item.quantity}
                        onQuantityChange={(q: number) =>
                          updateItemQuantity(item.item_code, q)
                        }
                      />
                    </div>
                    <button
                      className=" text-white px-4 py-2 rounded-md mt-2 cursor-pointer w-10 h-10 mx-auto "
                      onClick={() => updateItemQuantity(item.item_code, 0)}
                    >
                      <FaTrash size={20} color="red" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between items-center mt-1">
          {cart.length > 0 ? (
            <button
              className="bg-anmasa-accent text-white px-4 py-2 rounded-md mt-2 cursor-pointer w-70 mx-auto "
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          ) : (
            <p className="text-lg text-gray-500 mx-auto text-center my-90">
              Oops! Your cart is empty
            </p>
          )}
        </div>
      </div>
    </>
  );
}
