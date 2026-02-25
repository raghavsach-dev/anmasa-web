import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist, createJSONStorage } from "zustand/middleware";
import Product, { Variant } from "@/app/types/Products";

export type CartProduct = {
  product_id: string;
  variant_id: string;
  quantity: number;
  item_code: string;
  selling_price: number;
  mrp: number;
  line_total: number;
  image: string;
  name: string;
  variant_name: string;
};

const useCart = create(
  devtools(
    persist(
      (set, get) => ({
        get: get() as unknown as CartProduct[],

        cart: [],
        addToCart: (product: CartProduct) =>
          set((state: any) => ({
            cart: [...state.cart, { ...product, image: product.image }],
          })),
        incrementQuantity: (product_id: string) =>
          set((state: any) => ({
            cart: state.cart.map((product: CartProduct) =>
              product.product_id === product_id
                ? {
                    ...product,
                    quantity: product.quantity + 1,
                    image: product.image,
                  }
                : product,
            ),
          })),
        decrementQuantity: (product_id: string) =>
          set((state: any) => ({
            cart: state.cart.map((product: CartProduct) =>
              product.product_id === product_id
                ? {
                    ...product,
                    quantity: product.quantity - 1,
                    image: product.image,
                  }
                : product,
            ),
          })),
        removeFromCart: (product_id: string) =>
          set((state: any) => ({
            cart: state.cart.filter(
              (product: CartProduct) => product.product_id !== product_id,
            ),
          })),
        updateCart: (product_id: string, quantity: number) =>
          set((state: any) => ({
            cart: state.cart.map((product: CartProduct) =>
              product.product_id === product_id
                ? { ...product, quantity: quantity, image: product.image }
                : product,
            ),
          })),
        clearCart: () => set({ cart: [] }),
        updateItemQuantity: (item_code: string, quantity: number) =>
          set((state: any) => {
            if (quantity === 0) {
              return {
                cart: state.cart.filter(
                  (p: CartProduct) => p.item_code !== item_code,
                ),
              };
            }
            return {
              cart: state.cart.map((p: CartProduct) =>
                p.item_code === item_code
                  ? {
                      ...p,
                      quantity,
                      line_total: (p.selling_price ?? 0) * quantity,
                      image: p.image,
                    }
                  : p,
              ),
            };
          }),
        addOrIncrementVariantInCart: (product: Product, variant: Variant) =>
          set((state: any) => {
            const existing = state.cart.find(
              (p: CartProduct) => p.item_code === variant.ic,
            );

            if (existing) {
              const quantity = (existing.quantity ?? 0) + 1;

              return {
                cart: state.cart.map((p: CartProduct) =>
                  p.item_code === variant.ic
                    ? {
                        ...p,
                        quantity,
                        line_total: (p.selling_price ?? 0) * quantity,
                        image: p.image,
                      }
                    : p,
                ),
              };
            }

            const newItem: CartProduct = {
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
            };

            return {
              cart: [...state.cart, newItem],
            };
          }),
      }),
      {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useCart;
