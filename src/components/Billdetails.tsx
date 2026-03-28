import useCart from "@/store/cart";
import {
  FaCheckCircle,
  FaListUl,
  FaMotorcycle,
  FaShoppingBag,
} from "react-icons/fa";
import PlaceOrder from "./ProceedToBuy";

export default function Billdetails() {
  const cart = useCart((state: any) => state.cart);
  const itemsTotal: number = cart.reduce(
    (sum: number, item: any) =>
      sum + (item.mrp ?? item.selling_price ?? 0) * (item.quantity ?? 0),
    0,
  );
  const discountedTotal: number = cart.reduce(
    (sum: number, item: any) =>
      sum + (item.selling_price ?? 0) * (item.quantity ?? 0),
    0,
  );

  const deliveryCharge: number = 0;
  const handlingCharge: number = 2;
  const savings = Math.max(0, itemsTotal - discountedTotal);
  const grandTotal: number = Math.max(
    0,
    Math.round(discountedTotal + deliveryCharge + handlingCharge),
  );

  return (
    <>
      <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white text-sm">
        <div className="p-3">
          <h2 className="text-lg font-bold text-gray-900">Bill Details</h2>

          <div className="mt-2 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-gray-500">
                  <FaListUl size={14} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    Items Total
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-1">
                {itemsTotal > discountedTotal ? (
                  <span className="text-sm font-semibold text-gray-400 line-through">
                    ₹{Math.round(itemsTotal)}
                  </span>
                ) : null}
                <span className="text-base font-bold text-gray-900">
                  ₹{Math.round(discountedTotal)}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-gray-500">
                  <FaMotorcycle size={14} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    Delivery Charge
                  </span>
                </div>
              </div>

              <span
                className={`flex items-center gap-1 text-sm font-semibold ${
                  deliveryCharge === 0 ? "text-anmasa-accent" : "text-gray-900"
                }`}
              >
                {deliveryCharge === 0 && <FaCheckCircle size={14} />}
                {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-gray-500">
                  <FaShoppingBag size={14} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    Handling Charge
                  </span>
                </div>
              </div>

              <span
                className={`flex items-center gap-1 text-sm font-semibold ${
                  handlingCharge === 0 ? "text-anmasa-accent" : "text-gray-900"
                }`}
              >
                {handlingCharge === 0 && <FaCheckCircle size={14} />}
                {handlingCharge === 0 ? "FREE" : `₹${handlingCharge}`}
              </span>
            </div>
          </div>
        </div>

        <div className="relative bg-green-800/90 px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white ">Grand Total</span>
            </div>
            <span className="text-lg font-extrabold text-white ">
              ₹{grandTotal}
            </span>
          </div>
        </div>
      </div>
      <div className="scale-107 px-1 mt-5 -pb-4">
        <PlaceOrder total={grandTotal} />
      </div>
    </>
  );
}
