export default function PriceRow({oldprice, newprice }: { oldprice: number, newprice: number }) {
  return (
    <div className="flex flex-col gap-2 text-sm">
    <div className="flex flex-row gap-2">
      {oldprice && <p className="text-lg text-anmasa-accent font-bold line-through">Rs. {oldprice}.00</p>}
      {newprice && <p className="text-lg text-anmasa-accent font-bold">Rs. {newprice}.00</p>}
      <p className="text-base font-bold bg-anmasa-sale text-gray-500 rounded-lg px-2 py-1">SALE</p>
    </div>
    <p className="text-xs">Taxes Included</p>
    </div>
  )
}