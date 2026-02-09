// import React from "react";
// import { Item, ItemVariant } from "@/app/types/Products";
// import Image from "next/image";
// import getItem from "@/app/services/getItem";
// import Link from "next/link";
// import { notFound } from "next/navigation";


// xexport default async function ItemDetailPage({ params }: { params: Promise<{ slug: string;  }) {


//   if (!slug) {
//     notFound();
//   }

//   const item = await getItem(slug);

//   if (!item) {
//     notFound();
//   }

//   const {
//     n: title,
//     sd: description,
//     oos: outOfStock,
//     v: variants,
//     media: images,
//   }: Item = item;

//   const imageUrl = images[0]?.URL ?? "/p1.png";

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-6xl">
//       <div className="flex gap-8">
//         <div className="flex-shrink-0">
//           <Image
//             src={imageUrl}
//             alt={title}
//             width={500}
//             height={500}
//             className="object-cover rounded-lg"
//           />
//         </div>

//         <div className="flex-1">
//           <h1 className="text-anmasa-heading text-lg mb-2">ANMASA</h1>
//           <h2 className="font-medium text-4xl mb-2 text-anmasa-accent break-words">
//             {title}
//           </h2>

//           {description && (
//             <p className="mb-4 text-sm text-gray-700 whitespace-pre-line">
//               {description}
//             </p>
//           )}
//           <div className="flex mt-5">
//             {selectedVariant ? (
//               <>
//                 {selectedVariant.m && (
//                   <p className="line-through text-lg">
//                     Rs. {selectedVariant.m}
//                   </p>
//                 )}
//                 {selectedVariant.sp && (
//                   <p className="text-base font-bold text-lg ml-2">
//                     Rs. {selectedVariant.sp}
//                   </p>
//                 )}
//               </>
//             ) : (
//               <p className="text-base font-bold text-lg">
//                 Rs. {variants?.[0]?.sp || 'N/A'}
//               </p>
//             )}
//           </div>
//           <div className="flex flex-wrap gap-2">
//               {variants && variants.map((variants: ItemVariant, index: number) => (
//                 <button
//                   key={variants.id || index}
//                   onClick={() => onVariantSelect?.(variants)}
//                   className={`px-3 py-2 border rounded-lg text-sm ${
//                     selectedVariant?.vn === variants.vn
//                       ? "bg-anmasa-accent text-anmasa-text border-anmasa-accent"
//                       : "border-gray-300 hover:border-anmasa-accent"
//                   }`}
//                 >
//                   {variants.vn}
//                 </button>
//               ))}
//             </div>

//           <div className="mb-6">
//             <p className="text-sm text-gray-700 font-medium mb-3">Size</p>
//             <div className="flex flex-wrap gap-2">
//               {variants &&
//                 variants.map((variants: ItemVariant) => (
//                   <button
//                     key={variants.id}
//                     className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-anmasa-accent transition-colors"
//                   >
//                     {variants.vn}
//                   </button>
//                 ))}
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <button className="flex-1 py-3 px-6 bg-anmasa-accent text-anmasa-text rounded-lg font-medium hover:opacity-90 transition-opacity">
//               Add to Cart
//             </button>
//             <Link
//               href="/"
//               className="px-6 py-3 border border-gray-300 rounded-lg text-center hover:border-anmasa-accent transition-colors"
//             >
//               Back to Products
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// }
"use client";
import VariantButton from "@/components/products/VariantButton";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/app/services/products";
import { useState } from "react";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  console.log("inside ProductDetailPage", params);
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    // notFound();
    return <div>Product not found</div>;
  }

  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const handleVariantSelect = (variant: any) => {
    setSelectedVariant(variant);
  }
  const variants = product.v;
  return (
    <div>
      {variants.map((variant: any) => (
        <VariantButton key={variant.id} label={variant.vn}  isSelected={selectedVariant?.vn === variant.vn} onSelect={handleVariantSelect} />
      ))}

      
    </div>
  );
}