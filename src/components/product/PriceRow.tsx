export default function PriceRow({oldprice, newprice }: { oldprice: number, newprice: number }) {
  return (
    <div className="flex flex-row gap-2">
      {oldprice && <p className="text-base font-bold text-gray-500 line-through">Rs. {oldprice}</p>}
      {newprice && <p className="text-base font-bold text-gray-500">Rs. {newprice}</p>}
    </div>
  )
}