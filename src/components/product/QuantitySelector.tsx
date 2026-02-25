"use client";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function QuantitySelector({
  label,
  outOfStock,
  quantity,
  onQuantityChange,
}: {
  label: string;
  outOfStock: boolean;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}) {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number.parseInt(e.target.value, 10);
    onQuantityChange(Number.isFinite(next) ? Math.max(0, next) : 0);
  };

  return (
    <>
      <p className="text-sm text-gray-500">{label}</p>
      <div className="flex flex-row gap-2 items-center border border-anmasa-accent rounded-lg p-2 w-fit px-4">
        <button
          className="cursor-pointer"
          disabled={quantity <= 0}
          onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
          type="button"
        >
          <FaMinus />
        </button>
        <input
          type="number"
          value={quantity}
          min={0}
          onChange={handleQuantityChange}
          disabled={outOfStock}
          className=" w-10 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          className="cursor-pointer"
          onClick={() => onQuantityChange(quantity + 1)}
          disabled={outOfStock}
          type="button"
        >
          <FaPlus />
        </button>
      </div>
    </>
  );
}
