// import { Category } from "@/app/types/category";
// import CategoryCard from "./CategoryCard";
// import { getCategoryByCode } from "@/app/services/category-service";

// export default async function ProductRow({
//   categoryCode,
// }: {
//   categoryCode: string;
// }) {

//   const category: Category | null = await getCategoryByCode(categoryCode);
//   if (!category) {
//     return null;
//   }
  
//   return (
//     <div className="flex flex-wrap ml-2 mt-4 mb-4 whitespace-nowrap">
//       {category..map((category) => (
//         <CategoryCard key={category.code} category={category} />
//       ))}
//     </div>
//   );
// }
