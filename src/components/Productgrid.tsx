"use client";
import Image from "next/image";

type Producttwo = {
  id: number;
  image: string;
  title: string;
};

  type ProductgridProps = {
    product: Producttwo[];
  };

export default function Productgrid({ product }: ProductgridProps) {
  return (
    <><div className="flex text-3xl ml-30 mt-5 text-anmasa-heading">
    <p className="m-0">~ Our Range of Goodness ~</p>
  </div> <div className="mx-auto max-w-7xl mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
    {product.map((item) => (
      <div
        key={item.id}
        className="rounded-2xl border border-gray-200 overflow-hidden bg-white flex flex-col h-110 w-90"
      >
        <div className="flex-1 relative">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="px-6 py-4 text-anmasa-heading text-lg font-semibold">
          {item.title} <span className="float-right">→</span>
        </div>
      </div>
    ))}
  </div>
</>
  );
}