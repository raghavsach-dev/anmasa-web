"use client"
import { useState } from "react";

export default function Quantity({ outOfStock }: { outOfStock: boolean }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <>
    <p className="text-sm text-gray-500">Quantity</p>
    <div className="flex flex-row gap-2 items-center border border-anmasa-accent rounded-lg p-2 w-fit px-4">
        
      <button disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)}>
        -
      </button>
      <input type="number" value={quantity} onChange={handleQuantityChange} className="w-10 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
      <button onClick={() => setQuantity(quantity + 1)}>
        +
      </button>
    </div>
    </>
  )
}