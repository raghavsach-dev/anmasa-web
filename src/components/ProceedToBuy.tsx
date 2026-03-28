import useCart from "@/store/cart";
import { FaArrowRight } from "react-icons/fa";

export default function PlaceOrder({ total }: { total: number }) {
  const cart = useCart((state: any) => state.cart);
  return (
    <div className="mt-1 px-3 pb-3 mb-3">
      {cart.length > 0 ? (
        <button className="bg-anmasa-accent text-white rounded-md mt-2 cursor-pointer p-3 w-full flex flex-row items-center justify-between gap-3">
          <div className="flex flex-col items-start leading-tight">
            <p className="text-lg font-semibold">
              ₹
              {total}
            </p>
            <p className="text-xs uppercase tracking-wide opacity-80">Total</p>
          </div>
          <span className="flex items-center gap-2 text-lg font-semibold">
            Proceed To Buy
            <FaArrowRight size={18} />
          </span>
        </button>
      ) : (
        <p className="text-lg text-gray-500 mx-auto text-center my-10">
          Oops! Your cart is empty
        </p>
      )}
    </div>
  );
}
