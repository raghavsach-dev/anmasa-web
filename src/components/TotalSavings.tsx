import useCart from "@/store/cart";

export default function TotalSavings() {
  const cart = useCart((state: any) => state.cart);
  const itemsTotal = cart.reduce(
    (sum: number, item: any) =>
      sum + (item.mrp ?? item.selling_price ?? 0) * (item.quantity ?? 0),
    0,
  );
  const discountedTotal = cart.reduce(
    (sum: number, item: any) =>
      sum + (item.selling_price ?? 0) * (item.quantity ?? 0),
    0,
  );
  const savings = Math.max(0, itemsTotal - discountedTotal);

  if (savings <= 0) return null;

  return (
    <span className="rounded-md bg-green-800/80 px-2 py-1 text-sm text-white font-bold">
      Saved ₹{Math.round(savings)}
    </span>
  );
}
