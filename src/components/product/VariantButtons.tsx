"use client";
import { Variant } from "@/app/types/Products";
import useCart from "@/store/cart";

interface VariantButtonProps {
  variants: Variant[];
  selectedVariant: Variant;
  onVariantChange?: (variant: Variant) => void;
}

export default function VariantButtons({
  variants,
  selectedVariant,
  onVariantChange,
}: VariantButtonProps) {
  const cart = useCart((state: any) => state.cart);

  return (
    <div className="flex flex-row gap-2">
      {variants.map((variant: Variant) => {
        const cartItem = cart.find(
          (item: any) => item.item_code === variant.ic,
        );
        const quantity = cartItem?.quantity ?? 0;

        return (
          <button
            key={variant.id}
            className={`relative px-3 py-2 border rounded-2xl text-sm ${
              selectedVariant?.id === variant.id
                ? "bg-anmasa-accent text-anmasa-text border-anmasa-accent"
                : "bg-white text-gray-500 border-gray-500"
            }`}
            onClick={() => onVariantChange?.(variant)}
            type="button"
          >
            {variant.vn}
            {quantity > 0 && (
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs text-white bg-anmasa-accent text-anmasa-text rounded-full w-5 h-5 flex items-center justify-center z-10">
                {quantity}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
