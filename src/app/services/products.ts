import Product from '@/app/types/Products';
import { Item } from "@/app/types/Products";
const BASEURL = process.env.BASEURL || " ";
const TOKEN = process.env.TOKEN || " ";
async function  getProducts(category: string): Promise<Product[]> {
    console.log("inside products service function getProducts: ",category);
    
// promise awaits async 
// read about string and string template

    const res = await fetch(`${BASEURL}/api/v1/app/categories/${category}/full`, {
        headers: {
          "x-api-key": "mbapp_123456789",
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
    });

    if(!res.ok) {
       throw new Error("error in in fetching products")
    }

    const data = await res.json();


    const products = [];
    if (data.subcategories && Array.isArray(data.subcategories)) {
      for (const subcategory of data.subcategories) {
        if (subcategory.products && Array.isArray(subcategory.products)) {
          products.push(...subcategory.products);
        }
      }
    }
    return products;
}
async function getProductBySlug(slug: string): Promise<Product | null> {
    console.log("inside products service function getProductBySlug: ", slug);

    // For now, we'll fetch all products and find the one matching the slug
    // In a real app, you'd want a dedicated API endpoint for this
    const categories = ['ATTA', 'WHEAT', 'RICE', 'OTHER']; // Start with known working categories
    let product: Product | null = null;

    for (const category of categories) {
        try {
            const products = await getProducts(category);
            product = products.find(p => p.pc === slug) || null;
            if (product) break;
        } catch (error) {
            console.error(`Error fetching products for category ${category}:`, error);
        }
    }

    return product;
}

export { getProducts, getProductBySlug };


async function getItem(itemId: string): Promise<Item | null> {
  // If we somehow get here without an id (e.g. bad route),
  // just bail out and let the page show a 404.
  if (!itemId) {
    console.warn("getItem called without itemId");
    return null;
  }

  const res = await fetch(`${BASEURL}/api/v1/app/products/${itemId}`, {
    headers: {
      "x-api-key": "mbapp_123456789",
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    // Gracefully handle not-found or API errors so the page
    // can decide whether to show a 404 instead of crashing.
    console.warn("Error fetching product", res.status, res.statusText);
    return null;
  }

  const product: Item = await res.json();
  return product;
}

export default getItem;
