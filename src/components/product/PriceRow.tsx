import { Variant } from "@/app/types/Products";

export default function PriceRow({variant}: { variant: Variant }) {
  return (
    <div className="flex flex-col gap-2 text-sm">
    <div className="flex flex-row gap-2">
      {variant.m && <p className="text-lg text-anmasa-accent font-bold line-through">Rs. {variant.m}.00</p>}
      {variant.sp && <p className="text-lg text-anmasa-accent font-bold">Rs. {variant.sp}.00</p>}
      <p className="text-base font-bold bg-anmasa-sale text-gray-500 rounded-lg px-2 py-1">SALE</p>
    </div>
    <p className="text-xs">Taxes Included</p>
    </div>
  )
}