import Product, { Variant } from "@/app/types/Products";
import Image from "next/image";
import useCart from "@/store/cart";
import QuantitySelector from "./product/QuantitySelector";

interface VarientPopupProps {
  product: Product;
  variants: Variant[];
  selectedVariant: Variant | null;
  onClose: () => void;
}

export default function VarientPopup({
  product,
  variants,
  onClose,
}: VarientPopupProps) {
  const addToCart = useCart((state: any) => state.addToCart);
  const updateItemQuantity = useCart((state: any) => state.updateItemQuantity);
  const cart = useCart((state: any) => state.cart);
  const addOrIncrementVariantInCart = useCart(
    (state: any) => state.addOrIncrementVariantInCart,
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative bg-[#f6f7fb] p-5 rounded-2xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-3 right-3 text-gray-500 cursor-pointer border border-neutral-300 rounded-full w-8 h-8 flex items-center justify-center bg-white text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900">{product.n}</h2>
        </div>

        <div className="space-y-3 bg">
          {variants.map((variant) => {
            const cartItem = cart.find((p: any) => p.item_code === variant.ic);

            return (
              <div
                key={variant.id}
                className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12">
                    <Image
                      src={product.img || "/p1.png"}
                      alt={product.n}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <span className="text-sm text-gray-700">
                    {variant.measure} {variant.uom}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-900">
                    ₹{variant.sp}
                  </span>
                  {cartItem ? (
                    <QuantitySelector
                      label=""
                      outOfStock={variant.oos ?? false}
                      quantity={cartItem.quantity ?? 0}
                      onQuantityChange={(q) =>
                        updateItemQuantity(variant.ic, q)
                      }
                    />
                  ) : (
                    <button
                      type="button"
                      className="border border-anmasa-accent text-anmasa-accent text-xs font-semibold px-4 py-1 rounded-full hover:bg-anmasa-accent hover:text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() =>
                        addOrIncrementVariantInCart(
                          product,
                          variant,
                          cart,
                          addToCart,
                          updateItemQuantity
                        )
                      }
                    >
                      ADD
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
}
