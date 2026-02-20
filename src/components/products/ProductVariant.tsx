"use client";

import { useState } from "react";
import { Variant } from "@/app/types/Products";
import VariantPrice from "@/components/product/VariantPrice";
import VariantButtons from "@/components/product/VariantButtons";

interface ProductVariantProps {
  variants: Variant[];
}

export default function ProductVariant({ variants }: ProductVariantProps) {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(variants[0]);

  return (
    <div className="flex flex-col gap-4">
      <VariantPrice variant={selectedVariant} />

      <VariantButtons
        variants={variants}
        selectedVariant={selectedVariant}
        onVariantChange={setSelectedVariant}
      />
    </div>
  );
}
