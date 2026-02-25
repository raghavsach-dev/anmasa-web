import Product, { Variant } from "@/app/types/Products";
import { CartProduct } from "@/store/cart";

export function addOrIncrementVariantInCart(
  product: Product,
  variant: Variant,
  cart: CartProduct[],
  addToCart: (item: CartProduct) => void,
  updateItemQuantity: (itemCode: string, quantity: number) => void
) {
  const existing = cart.find((p) => p.item_code === variant.ic);

  if (existing) {
    updateItemQuantity(variant.ic, (existing.quantity ?? 0) + 1);
  } else {
    addToCart({
      product_id: variant.pid,
      variant_id: variant.id,
      quantity: 1,
      item_code: variant.ic,
      selling_price: variant.sp ?? 0,
      mrp: variant.m ?? 0,
      line_total: variant.sp ?? 0,
      image: product.media?.[0]?.URL ?? product.img ?? "",
      name: product.n ?? "",
      variant_name: variant.vn ?? "",
    } as CartProduct);
  }
}

