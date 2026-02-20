"use client"
import { Variant } from "@/app/types/Products";

interface VariantButtonProps {
  variants: Variant[];
  selectedVariant: Variant;
  onVariantChange?: (variant: Variant) => void;
}

export default function VariantButtons({ variants, selectedVariant, onVariantChange }: VariantButtonProps) {
  return (
    <div className="flex flex-row gap-2">
      {variants.map((variant: Variant) => (
        <button
          key={variant.id}
          className={`px-3 py-2 border rounded-2xl text-sm ${
            selectedVariant?.id === variant.id
              ? "bg-anmasa-accent text-anmasa-text border-anmasa-accent"
              : "bg-white text-gray-500 border-gray-500"
          }`}
          onClick={() => onVariantChange?.(variant)}
          type="button"
        >
          {variant.vn}
        </button>
      ))}
    </div>
  );
}