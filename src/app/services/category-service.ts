import { Category } from "@/app/types/category";
import { getWithoutAuth } from "./api";

//GET PRODUCTS BY CATEGORY
export async function getCategoryByCode(
  categoryCode: string = "ATTA",
): Promise<Category | null> {

  const apiURL = `/api/v1/app/categories/${categoryCode}/full`;
  return await getWithoutAuth<Category>(apiURL);
}
