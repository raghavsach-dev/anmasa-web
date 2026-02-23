// import { Categories, Subcategory } from "@/app/types/categories";
// import ProductCard from "./ProductCard";
// import { Product } from "@/app/types/Products";

// export default async function ProductRow({
//   categoryCode,
// }: {
//   categoryCode: string;
// }) {
//   const category: Categories | null = await getCategoryByCode(categoryCode);
//   if (!category) {
//     return null;
//   }
//   const subcategories: Subcategory[] | null = category.subcategories;
//   const products: Product[] | null = subcategories?.flatMap(
//     (subcategory) => subcategory.products,
//   );
//   return (
//     <div className="flex overflow-x-auto no-scrollbar ml-30 mt-4 pb-4 gap-6 whitespace-nowrap">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }
