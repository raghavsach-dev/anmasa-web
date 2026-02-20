"use client";
import { Variant } from "@/app/types/Products";

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
  return (
    <div className="flex flex-row gap-2">
      {variants.map((variant: Variant) => (
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
          <span className="absolute top-0 right-0 text-xs text-white bg-anmasa-accent text-anmasa-text rounded-lg px-2 py-1">
            1
          </span>
        </button>
      ))}
    </div>
  );
}
