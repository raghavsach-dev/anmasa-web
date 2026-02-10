import Product from "@/app/types/Products";
import Category from "@/app/types/Products";
const BASEURL = process.env.BASEURL || " ";

//GET PRODUCTS BY CODE
async function getProductByCode(productCode: string): Promise<Product | null> {
  console.log(
    "inside products service function getProductBySlug: ",
    productCode,
  );
  if (!productCode) {
    console.log(
      "product code is empty inside product service getProductByCode",
    );
    return null;
  }

  let product: Product | null = null;
  const apiURL = `${BASEURL}/api/v1/app/products/${productCode}`;
  try {
    const response = await fetch(apiURL, {
      headers: {
        "x-api-key": "mbapp_123456789",

        "Content-Type": "application/json",
      },
    });

    console.log("result from api is ", response);
    if (!response.ok) {
      console.log("uinable to fetch product", response);
      return product;
    }

    product = await response.json();
  } catch (error) {
    console.error(`Error fetching products for category ${product}:`, error);
  }
  return product;
}

export { getProductByCode };

//GET PRODUCTS BY CATEGORY
async function getProductsByCategory(
  categoryCode: string,
): Promise<Category | null> {
  console.log(
    "Inside Category Service inside getProductsByCategory: ",
    categoryCode,
  );
  if (!categoryCode) {
    console.log(
      "Category is empty inside category service getProductByCategory",
    );
    return null;
  }
  let category = Category | null;
}
