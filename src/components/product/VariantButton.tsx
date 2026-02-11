"use client"
import { useState } from "react";
import PriceRow from "./PriceRow";

interface Variant {
  id: string;
  vn: string;
  sp: number;
  m: number;
}

interface VariantButtonProps {
  variants: Variant[];
  onVariantChange?: (variant: Variant) => void;
}

export default function VariantButton({ variants, onVariantChange }: VariantButtonProps) {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    variants.length > 0 ? variants[0] : null
  );

  const handleVariantClick = (variant: Variant) => {
    setSelectedVariant(variant);
    onVariantChange?.(variant);
  };

  return (
    <div className="flex flex-col gap-2">
      <PriceRow oldprice={selectedVariant?.m ?? 0} newprice={selectedVariant?.sp ?? 0} />
      <p className="text-sm text-gray-500">Size</p>
    <div className="flex flex-row gap-2">
      {variants.map((variant, index) => (
        <button 
          key={variant.id || index} 
          onClick={() => handleVariantClick(variant)} 
          className={`px-3 py-2 border rounded-2xl text-sm ${
            selectedVariant?.vn === variant.vn 
              ? "bg-anmasa-accent text-anmasa-text border-anmasa-accent" 
              : "bg-white text-gray-500 border-gray-500"
          }`}
        >
          {variant.vn}
        </button>
        
        
      ))}
    </div>
    </div>
  );
}