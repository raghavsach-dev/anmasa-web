"use client";
import Image from "next/image";

type Product = {
  id: number;
  image: string;
  title: string;
  oldPrice: string;
  price: string;
  offerPrice: string;
  coupon: string;
  badge: string;
};

type ProductsRowProps = {
  products: Product[];
};

export default function ProductsRow({ products }: ProductsRowProps) {
  return (
    <>
    <div className="flex text-3xl ml-30 mt-5 text-anmasa-heading">
    <p className="m-0">~ Best Value, Lowest Price ~</p>
  </div>
      <div className="flex overflow-x-auto no-scrollbar ml-30 mt-4 pb-4 gap-6 whitespace-nowrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="shrink-0 border border-neutral-200 bg-transparent rounded w-[250px] h-[440px]"
          >
            <div className="relative">
              <Image
                src={product.image}
                alt={product.title}
                width={280}
                height={280}
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 border border-yellow-300 bg-yellow-200 text-xs px-2 py-1 rounded">
                <p className="m-0">{product.badge}</p>
              </div>
            </div>

            <div className="mt-4 ml-2 text-sm text-gray-500">
              <p className="m-0">{product.title}</p>
              <p className="mt-1 line-through text-xs">
                Rs. {product.oldPrice}
              </p>
              <p className="mt-1 text-base font-bold">
                From Rs. {product.price}
              </p>
              <p className="mt-1">
                Get it for{" "}
                <span className="bg-amber-200 rounded text-gray-950 font-semibold p-1">
                  ₹{product.offerPrice}
                </span>
                &nbsp;with{" "}
                <span className="text-xs text-gray-900 font-semibold">
                  {product.coupon}
                </span>
              </p>
              <button className="border-2 rounded-lg border-gray-950 mt-9 ml-1 px-16 py-2 text-gray-950">
                Choose Options
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <button className="px-8 py-3 border rounded-lg bg-anmasa-accent text-anmasa-text ">
          View all
        </button>
      </div>
    </>
  );
}
