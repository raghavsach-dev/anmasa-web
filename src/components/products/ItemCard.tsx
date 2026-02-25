"use client";
import { useState } from "react";
import Product, { Variant } from "@/app/types/Products";
import Image from "next/image";
import { useRouter } from "next/navigation";
import VarientPopup from "../VarientPopup";
import useCart from "@/store/cart";
import QuantitySelector from "../product/QuantitySelector";
import { addOrIncrementVariantInCart } from "@/store/cartHelper";

export default function ItemCard({ item }: { item: Product }) {
  const router = useRouter();
  const [showVarientPopup, setShowVarientPopup] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  const addToCart = useCart((state: any) => state.addToCart);
  const updateItemQuantity = useCart((state: any) => state.updateItemQuantity);
  const cart = useCart((state: any) => state.cart);

  const hasSingleVariant = item.v.length === 1;
  const singleVariant = hasSingleVariant ? item.v[0] : null;
  const singleCartItem =
    hasSingleVariant && singleVariant
      ? cart.find((p: any) => p.item_code === singleVariant.ic)
      : null;

  const productCartItems = !hasSingleVariant
    ? cart.filter(
        (p: any) => p.product_id === (item.v[0]?.pid ?? "")
      )
    : [];

  const totalQuantityForProduct = productCartItems.reduce(
    (sum: number, cartItem: any) => sum + (cartItem.quantity ?? 0),
    0
  );

  const hasAnyVariantInCart = !hasSingleVariant && totalQuantityForProduct > 0;

  const primaryCartItem = hasAnyVariantInCart ? productCartItems[0] : null;

  const primaryVariantForCart =
    primaryCartItem
      ? item.v.find((v) => v.ic === primaryCartItem.item_code) ?? null
      : null;

  return (
    <>
      <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-4">
        <div>
          <div className="relative mx-auto h-32 w-32">
            <Image
              src={item.img || "/p1.png"}
              alt={item.n}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-3 text-sm text-gray-500">
            <p
              onClick={() => router.push(`/product/${item.pc}`)}
              className="mt-1 cursor-pointer text-base font-medium leading-tight text-gray-900 line-clamp-3"
            >
              {item.n}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-end">
          <div className="text-sm text-gray-500">
            <p className="line-through text-xs text-gray-400">
              Rs. {item.v[0].m}
            </p>
            <p className="mt-1 text-base font-semibold text-gray-900">
              Rs. {item.v[0].sp}
            </p>
          </div>

          {hasSingleVariant ? (
            // Single-variant products: full quantity control on card
            singleCartItem ? (
              <div className="ml-auto scale-90 origin-right">
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
                  addOrIncrementVariantInCart(
                    item,
                    singleVariant,
                    cart,
                    addToCart,
                    updateItemQuantity
                  )
                }
              >
                ADD
              </button>
            )
          ) : hasAnyVariantInCart && primaryVariantForCart ? (
            // Multi-variant products with one or more variants in cart:
            // show small selector with summed quantity; any change opens popup
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
            // Multi-variant products with zero items in cart:
            // show ADD to open popup
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
    </>
  );
}