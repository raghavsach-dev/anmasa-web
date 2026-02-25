import QuantitySelector from "./product/QuantitySelector";

export default function VarientPopup({ outOfStock, quantity, onQuantityChange }: { outOfStock: boolean, quantity: number, onQuantityChange: (q: number) => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <button className="absolute top-2 right-2 text-gray-500 cursor-pointer border-1 border-neutral-400 rounded-4xl p-2 w-10 h-10 justify-center items-center bg-gray-200 font-thin text-3xl">✕</button>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg">
          <QuantitySelector
            outOfStock={outOfStock}
            quantity={quantity}
            onQuantityChange={onQuantityChange}
          />
        </div>
      </div>
    </div>
  );
}