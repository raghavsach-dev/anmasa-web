import React from 'react'
import Product from '@/app/types/Products';
import Image from "next/image";
import Link from "next/link";

interface ProductPopupProps {
  product: Product;
  selectedVariant?: any;
  onVariantSelect?: (variant: any) => void;
  onClose: () => void;
}

export default function ProductPopup({
  product,
  selectedVariant,
  onVariantSelect,
  onClose
}: ProductPopupProps) {
  const { img: image, n: title, v: variants } = product;

  return (
    <div className="flex items-center justify-center fixed inset-0 bg-black/40 z-[9999] h-auto">
      <div className="bg-white p-6 rounded-lg relative w-[1020px] flex gap-4 h-[620px] border border-gray-500">
        <button
          onClick={onClose}
          className="flex absolute top-2 right-2 text-gray-500 cursor-pointer border border-neutral-400 rounded-full p-2 w-10 h-10 justify-center items-center bg-gray-200 font-thin text-xl"
        >
          ✕
        </button>

        <div className="relative shrink-0 flex justify-center w-[480px]">  
          <Image
            src={image  || '/p1.png'}
            alt={title}
            width={480}
            height={480}
            className="object-cover rounded"
          />
        </div>

        <div className="mt-4 text-sm text-gray-600 flex-1 min-w-0 w-full">
          <p className="text-anmasa-heading text-lg">ANMASA</p>
          <p className=" text-4xl font-medium text-anmasa-accent 
              leading-tight max-w-full break-words whitespace-normal">{title}</p>

          <div className="flex mt-5">
            {selectedVariant ? (
              <>
                {selectedVariant.m && (
                  <p className="line-through text-lg">
                    Rs. {selectedVariant.m}
                  </p>
                )}
                {selectedVariant.sp && (
                  <p className="text-base font-bold text-lg ml-2">
                    Rs. {selectedVariant.sp}
                  </p>
                )}
              </>
            ) : (
              <p className="text-base font-bold text-lg">
                Rs. {variants?.[0]?.sp || 'N/A'}
              </p>
            )}
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Taxes included.
          </p>
          <div className="mt-4">
            <p className="text-sm text-gray-700 font-medium mb-2">
              Size
            </p>
            <div className="flex flex-wrap gap-2">
              {variants && variants.map((variant, index) => (
                <button
                  key={variant.id || index}
                  onClick={() => onVariantSelect?.(variant)}
                  className={`px-3 py-2 border rounded-lg text-sm ${
                    selectedVariant?.vn === variant.vn
                      ? "bg-anmasa-accent text-anmasa-text border-anmasa-accent"
                      : "border-gray-300 hover:border-anmasa-accent"
                  }`}
                >
                  {variant.vn}
                </button>
              ))}
            </div>
          </div>
          <div className="justify-between">
            <button className="w-1/2 mt-55 py-2 border-2 bg-anmasa-accent text-anmasa-text rounded-lg text-center w-116">
              Add to Cart
            </button>
            <br />
            <Link
              href={`/product/${product.pc}`}
              className="mt-4 inline-block cursor-pointer hover:underline"
            >
              View full details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}