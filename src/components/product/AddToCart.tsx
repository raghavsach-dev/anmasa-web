"use client";
export default function AddToCart({ productCode }: { productCode: string }) {
  const addToCart = (pc: string) => {
    console.log("Adding to cart", pc);
  };
  return (
    <button
      className="bg-anmasa-accent text-white px-4 py-2 rounded-md mt-4 cursor-pointer"
      onClick={() => addToCart(productCode)}
    >
      Add to Cart
    </button>
  );
}