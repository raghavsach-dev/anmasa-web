export default function Quantity({ outOfStock }: { outOfStock: boolean }) {
  return (
    <div className="flex flex-row gap-2">
      <button className="px-3 py-2 border rounded-2xl text-sm">
        -
      </button>
      <input type="number" className="px-3 py-2 border rounded-2xl text-sm"/>
      <button className="px-3 py-2 border rounded-2xl text-sm">
        +
      </button>
    </div>
  )
}