"use client";
import React, { useState } from 'react'
import Product from '@/app/types/products';
import Image from "next/image";
import Link from 'next/link';
import ProductPopup from './ProductPopup';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product }: { product: Product }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const router = useRouter();
  const handleVariantSelect = (variant: any) => {
    setSelectedVariant(variant);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedVariant(null);
  };

  return (
    <>
      <div className="shrink-0 border border-neutral-200 bg-transparent rounded w-[250px] h-[440px]">
        <div className="relative">
          <Image
            src={product.img || '/p1.png'}
            alt={product.n}
            width={280}
            height={280}
            className="object-cover mt-0"
          />
        </div>

        <div className="mt-4 ml-2 text-sm text-gray-500">
          <p onClick={() => router.push(`/product/${product.pc}`)} className="m-0 cursor-pointer hover:underline">{product.n}</p>
          <p className="mt-1 line-through text-xs">
            Rs. {product.v[0].m}
          </p>
          <p className="mt-1 text-base font-bold">
            From Rs. {product.v[0].sp}
          </p>
          <button
            className="border rounded-lg border-gray-950 mt-9 ml-1 px-16 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setShowPopup(true)}
          >
            Choose Options
          </button>
        </div>
      </div>

      {showPopup && (
        <ProductPopup
          product={product}
          selectedVariant={selectedVariant}
          onVariantSelect={handleVariantSelect}
          onClose={handleClosePopup}
        />
      )}
    </>
  )
}