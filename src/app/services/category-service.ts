import { Category } from "@/app/types/category";
import { getWithoutAuth } from "./api";
import { Categories } from "../types/categories";

//GET ALL CATEGORIES
export async function getAllCategories(): Promise<Categories[] | null> {
  const apiURL = `/api/v1/app/categories`;
  return await getWithoutAuth<Categories[]>(apiURL);
}

