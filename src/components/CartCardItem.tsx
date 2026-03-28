"use client";

import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import useCart, { CartProduct } from "@/store/cart";
import QuantitySelector from "./product/QuantitySelector";

export default function CartCardItem({ item }: { item: CartProduct }) {
  const updateItemQuantity = useCart((state: any) => state.updateItemQuantity);
  return (
    <div className="px-2 py-1">
      <div className="flex items-start gap-3 rounded-2xl bg-white p-3">
        <div className="shrink-0 rounded-2xl border border-gray-200 bg-white p-2">
          <Image
            src={item.image}
            alt={item.item_code}
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium leading-snug text-gray-900 line-clamp-2">
            {item.name}{" "}
            <span className="font-normal text-gray-500">
              ({item.variant_name})
            </span>
          </p>

          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              {item.mrp ? (
                <span className="text-sm font-semibold text-gray-400 line-through">
                  ₹{item.mrp}
                </span>
              ) : null}
              <span className="text-lg font-bold text-gray-900">
                ₹{item.selling_price}
              </span>
            </div>

            <div className="scale-80 origin-right">
              <QuantitySelector
                label=""
                outOfStock={false}
                quantity={item.quantity}
                onQuantityChange={(q: number) =>
                  updateItemQuantity(item.item_code, q)
                }
              />
            </div>
            {/* <button
              className="rounded-md p-2 cursor-pointer hover:bg-gray-100 shrink-0"
              onClick={() => updateItemQuantity(item.item_code, 0)}
              aria-label="Remove item"
              type="button"
            >
              <FaTrash size={16} className="text-red-500" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
