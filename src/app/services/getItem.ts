import { Item } from "@/app/types/Products";

const BASEURL = process.env.BASEURL!;
const TOKEN = process.env.TOKEN!;

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
