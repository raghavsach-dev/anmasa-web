import { Product, Variant } from "@/app/types/Products";
import useCart from "@/store/cart";
import QuantitySelector from "./product/QuantitySelector";

export default function AddToCartButton({
  variant,
  product,
}: {
  variant: Variant;
  product: Product;
}) {
  const addToCart = useCart((state: any) => state.addToCart);
  const updateItemQuantity = useCart((state: any) => state.updateItemQuantity);
  const cart = useCart((state: any) => state.cart);
  const addOrIncrementVariantInCart = useCart(
    (state: any) => state.addOrIncrementVariantInCart,
  );

  const cartItem = cart.find((p: any) => p.item_code === variant.ic);

  return (
    <>
      {cartItem ? (
        <QuantitySelector
          label=""
          outOfStock={variant.oos ?? false}
          quantity={cartItem.quantity ?? 0}
          onQuantityChange={(q) => updateItemQuantity(variant.ic, q)}
        />
      ) : (
        <button
          className="cursor-pointer ml-auto rounded-md border border-anmasa-accent px-4 py-2 text-sm font-semibold text-anmasa-accent hover:bg-anmasa-accent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => addOrIncrementVariantInCart(product, variant)}
        >
          Add
        </button>
      )}
    </>
  );
}
