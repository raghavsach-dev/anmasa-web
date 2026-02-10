// common class to interact with the api

const BASEURL = process.env.BASEURL || " ";
const API_KEY = process.env.API_KEY || "mbapp_123456789";
export async function getWithoutAuth<T>(url: string): Promise<T | null> {
  console.log("Inside getWithoutAuth", url);
  try {
    const apiURL = `${BASEURL}${url}`;
    const response = await fetch(apiURL, {
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error(`Error fetching url ${url}:`, response);
      return null;
    }
    const data = (await response.json()) as Promise<T>;
    return data;
  } catch (error) {
    console.error(`Error fetching url ${url}:`, error);
    return null;
  }
}
