"use client";
import { Variant } from "@/app/types/Products";

export default function VariantPrice({ variant }: { variant: Variant | null }) {
  if (!variant) return null;

  return (
    <>
      <div className="flex mt-5">
        {variant.m && <p className="line-through text-lg">Rs. {variant.m}</p>}
        {variant.sp && (
          <p className="text-base font-bold text-lg ml-2">Rs. {variant.sp}</p>
        )}
      </div>

      <p className="mt-3 text-xs text-gray-500">Taxes included.</p>
    </>
  );
}
