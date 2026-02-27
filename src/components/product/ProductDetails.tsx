"use client";
import { useState } from "react";
import ImageCard from "./ImageCard";
import { Product, Variant } from "@/app/types/Products";
import PriceRow from "./PriceRow";
import VariantButtons from "./VariantButtons";
import QuantitySelector from "./QuantitySelector";
import AddToCart from "./AddToCart";
import Description from "./Description";
import Image from "next/image";
import useCart from "@/store/cart";
import { FaTrash } from "react-icons/fa";

export default function ProductDetails({ product }: { product: Product }) {
  const sortedVariants = [...product.v].sort(
    (a, b) => a.measure - b.measure,
  );
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    sortedVariants[0],
  );
  
  const cartItem = useCart((state: any) =>
    state.cart.find((p: any) => p.item_code === selectedVariant?.ic),
  );
  const updateItemQuantity = useCart((state: any) => state.updateItemQuantity);
  return (
    <>
      <div className="flex flex-row gap-2 p-20 pl-50">
        <ImageCard
          image1={product.media[0].URL}
          images={product.media.slice(1).map((media: any) => media.URL) ?? []}
        />
        <div className="flex flex-row gap-2 w-[1000px]">
          <div className="flex flex-col gap-2 w-[500px]">
            <p className="text-anmasa-heading text-lg">ANMASA</p>
            <h1 className="text-4xl text-anmasa-accent">{product.n}</h1>
            <div className="flex flex-col gap-2">
              {selectedVariant && <PriceRow  variant={selectedVariant} />}
              <p className="text-sm text-gray-500">Size</p>
              <VariantButtons
                variants={sortedVariants}
                selectedVariant={selectedVariant}
                onVariantChange={setSelectedVariant}
              />
              {cartItem ? (
                <>
                  {" "}
                  <QuantitySelector
                    label="Quantity (In Cart)"
                    outOfStock={product.oos ?? false}
                    quantity={cartItem.quantity ?? 0}
                    onQuantityChange={(q) =>
                      updateItemQuantity(selectedVariant.ic, q)
                    }
                  />
                  <div className="flex flex-row items-center">
                    <button
                      className=" text-white px-1 py-1 rounded-md -mt-15 ml-33 cursor-pointer w-10 h-10 mx-auto "
                      onClick={() => updateItemQuantity(selectedVariant.ic, 0)}
                    >
                      <FaTrash size={20} color="#ff0000" />
                    </button>
                  </div>
                </>
              ) : (
                <AddToCart variant={selectedVariant} product={product} />
              )}
              <Description content={product.content} />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/divider.png"
        alt="divider"
        width={1300}
        height={1300}
        className="object-cover justify-center items-center mx-auto flex"
      />
    </>
  );
}
