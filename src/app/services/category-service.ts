import { Category } from "@/app/types/category";
import { getWithoutAuth } from "./api";
import { Categories, Subcategory } from "../types/categories";

//GET ALL CATEGORIES
export async function getAllCategories(): Promise<Categories[] | null> {
  const apiURL = `/api/v1/app/categories`;
  return await getWithoutAuth<Categories[]>(apiURL);
}

//GET ALL SUBCATEGORIES BY CATEGORY CODE
export async function getAllSubcategoriesByCategoryCode(categoryCode: string): Promise<Subcategory[] | null> {
  const apiURL = `/api/v1/app/categories/${categoryCode}/subcategories`;
  return await getWithoutAuth<Subcategory[]>(apiURL);
}