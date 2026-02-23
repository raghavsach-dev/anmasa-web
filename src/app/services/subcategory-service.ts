import { getWithoutAuth } from "./api";
import { Product } from "../types/Products";

// GET PRODUCTS BY SUBCATEGORY CODE
export async function getProductsBySubcategoryCode(
  subcategoryCode: string,
): Promise<Product[] | null> {
  const apiURL = `/api/v1/app/products?subcategoryCode=${subcategoryCode}`;
  return await getWithoutAuth<Product[]>(apiURL);
}