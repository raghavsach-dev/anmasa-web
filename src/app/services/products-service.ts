import Product from "@/app/types/Products";
import { getWithoutAuth } from "./api";

//GET PRODUCTS BY CODE
export async function getProductByCode(productCode: string): Promise<Product | null> {
  const apiURL = `/api/v1/app/products/${productCode}`;
  return await getWithoutAuth<Product>(apiURL);
}
