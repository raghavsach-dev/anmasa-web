"use client";

import { Product, Variant } from "@/app/types/Products";
import useCart, { CartProduct } from "@/store/cart";

export default function AddToCart({
  variant,
  product,
}: {
  variant: Variant;
  product: Product;
}) {
  const addToCart = useCart((state: any) => state.addToCart);
  const updateItemQuantity = useCart((state: any) => state.updateItemQuantity);
  const existing = useCart((state: any) =>
    state.cart.find((p: any) => p.item_code === variant.ic),
  );

  const handleAddToCart = () => {
    if (existing) {
      updateItemQuantity(variant.ic, (existing.quantity ?? 0) + 1);
      return;
    }
    addToCart({
      product_id: variant.pid,
      variant_id: variant.id,
      quantity: 1,
      item_code: variant.ic,
      selling_price: variant.sp ?? 0,
      mrp: variant.m ?? 0,
      line_total: variant.sp ?? 0,
      image: product.media[0].URL ?? "",
      name: product.n ?? "",
      variant_name: variant.vn ?? "",
    } as CartProduct);
  };
  return (
    <button
      className="bg-anmasa-accent text-white px-4 py-2 rounded-md mt-4 cursor-pointer"
      onClick={handleAddToCart}
      disabled={variant.oos}
      type="button"
    >
      Add to Cart
    </button>
  );
}
