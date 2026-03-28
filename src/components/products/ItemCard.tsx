"use client";
import { useState } from "react";
import Product, { Variant } from "@/app/types/Products";
import Image from "next/image";
import { useRouter } from "next/navigation";
import VarientPopup from "../VarientPopup";
import useCart from "@/store/cart";
import QuantitySelector from "../product/QuantitySelector";

export default function ItemCard({ item }: { item: Product }) {
  const router = useRouter();
  const [showVarientPopup, setShowVarientPopup] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  const addToCart = useCart((state: any) => state.addToCart);
  const updateItemQuantity = useCart((state: any) => state.updateItemQuantity);
  const cart = useCart((state: any) => state.cart);
  const addOrIncrementVariantInCart = useCart(
    (state: any) => state.addOrIncrementVariantInCart,
  );

  const hasSingleVariant = item.v.length === 1;
  const singleVariant = hasSingleVariant ? item.v[0] : null;
  const singleCartItem =
    hasSingleVariant && singleVariant
      ? cart.find((p: any) => p.item_code === singleVariant.ic)
      : null;

  const productCartItems = !hasSingleVariant
    ? cart.filter((p: any) => p.product_id === (item.v[0]?.pid ?? ""))
    : [];

  const totalQuantityForProduct = productCartItems.reduce(
    (sum: number, cartItem: any) => sum + (cartItem.quantity ?? 0),
    0,
  );

  const hasAnyVariantInCart = !hasSingleVariant && totalQuantityForProduct > 0;

  const primaryCartItem = hasAnyVariantInCart ? productCartItems[0] : null;

  const primaryVariantForCart = primaryCartItem
    ? (item.v.find((v) => v.ic === primaryCartItem.item_code) ?? null)
    : null;

  return (
    <>
      <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white cursor-pointer overflow-y-auto">
        <div className="flex flex-row gap-2">
          <div
            className={`flex text-sm -mt-3 rounded-sm px-1 justify-center items-center w-fit h-5 mt-2 ml-2 ${item.nn ? "bg-green-800/50 text-white font-bold" : "text-red-600"}`}
          >
            {item.nn}
          </div>
        </div> 
        <div className="p-4">
          <div> 
            <div
              onClick={() => router.push(`/product/${item.pc}`)}
              className="relative mx-auto h-32 w-32 cursor-pointer"
            >
              <Image
                src={item.img || "/p1.png"}
                alt={item.n}
                fill
                className="object-contain"
              />
              {item.v[0].d ? (
                <div className="absolute bottom-0 right-0 -mb-1 -mr-8 flex items-center justify-center rounded-sm bg-red-100 from-red-500 to-orange-500 px-2 py-[2px] text-[10px] font-bold text-black">
                  -{Math.round(item.v[0].d)}%
                </div>
              ) : null}
            </div>

            <div className="mt-3 text-sm text-gray-500">
              <p
                onClick={() => router.push(`/product/${item.pc}`)}
                className="mt-1 cursor-pointer text-base font-medium leading-tight text-gray-900 line-clamp-3 hover:underline"
              >
                {item.n + " (" + item.v[0].vn + ")"}
              </p>
            </div>
          </div>

          <div className="mt-1 flex items-end">
            <div className="text-sm text-gray-500">
              <p className="line-through text-xs text-gray-400">
                Rs. {item.v[0].m}
              </p>
              <p className="mt-1 text-base font-semibold text-gray-900">
                Rs. {item.v[0].sp}
              </p>
            </div>

            {hasSingleVariant ? (
              singleCartItem ? (
                <div className="ml-auto scale-80 origin-right">
                  <QuantitySelector
                    label=""
                    outOfStock={singleVariant?.oos ?? false}
                    quantity={singleCartItem.quantity ?? 0}
                    onQuantityChange={(q) =>
                      updateItemQuantity(singleVariant!.ic, q)
                    }
                  />
                </div>
              ) : (
                <button
                  className="cursor-pointer ml-auto rounded-md border border-anmasa-accent px-4 py-2 text-sm font-semibold text-anmasa-accent hover:bg-anmasa-accent hover:text-white"
                  onClick={() =>
                    singleVariant &&
                    addOrIncrementVariantInCart(item, singleVariant)
                  }
                >
                  ADD
                </button>
              )
            ) : hasAnyVariantInCart && primaryVariantForCart ? (
              <div className="ml-auto scale-90 origin-right">
                <QuantitySelector
                  label=""
                  outOfStock={primaryVariantForCart.oos ?? false}
                  quantity={totalQuantityForProduct}
                  onQuantityChange={() => {
                    setSelectedVariant(primaryVariantForCart);
                    setShowVarientPopup(true);
                  }}
                />
              </div>
            ) : (
              <button
                className="cursor-pointer ml-auto rounded-md border border-anmasa-accent px-4 py-2 text-sm font-semibold text-anmasa-accent hover:bg-anmasa-accent hover:text-white"
                onClick={() => {
                  setSelectedVariant(item.v[0]);
                  setShowVarientPopup(true);
                }}
              >
                ADD
              </button>
            )}
          </div>
        </div>

        {showVarientPopup && !hasSingleVariant && (
          <VarientPopup
            product={item}
            variants={item.v}
            selectedVariant={selectedVariant}
            onClose={() => setShowVarientPopup(false)}
          />
        )}
      </div>
    </>
  );
}
