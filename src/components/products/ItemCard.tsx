"use client";
import React, { useState } from "react";
import Product, { Variant } from "@/app/types/Products";
import Image from "next/image";
import { useRouter } from "next/navigation";
import QuantitySelector from "../product/QuantitySelector";
import VarientPopup from "../VarientPopup";

export default function ItemCard({ item }: { item: Product }) {
  const router = useRouter();
  const [showVarientPopup, setShowVarientPopup] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  return (
    <>
      <div className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-3">
        <div>
          <div className="relative mx-auto h-24 w-24">
            <Image
              src={item.img || "/p1.png"}
              alt={item.n}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-3 text-xs text-gray-500">
            <p
              onClick={() => router.push(`/product/${item.pc}`)}
              className="mt-1 cursor-pointer text-sm font-medium leading-tight text-gray-900 line-clamp-2"
            >
              {item.n}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-end justify-between">
          <div className="text-xs text-gray-500">
            <p className="line-through text-[11px] text-gray-400">
              Rs. {item.v[0].m}
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              Rs. {item.v[0].sp}
            </p>
          </div>
          <button
            className="cursor-pointer ml-2 rounded-md border border-anmasa-accent px-3 py-1 text-xs font-semibold text-anmasa-accent hover:bg-anmasa-accent hover:text-white"
            onClick={() => {
              setShowVarientPopup(true);
              setSelectedVariant(item.v[0]);
            }}
          >
            ADD
          </button>
          <div className="flex flex-row gap-2 items-center"></div>
        </div>
      </div>

      {showVarientPopup && (
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
