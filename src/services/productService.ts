import { URL } from "./api.ts";

export const getProducts = async () => {
  const res = await fetch(`${URL}/products?limit=50&skip=0`, {
    method: "GET",
  });
  console.log(`${URL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  console.log("There is sth hererererrerer");

  const data = await res.json();
  console.log("Data fetched from API:", data);
  return data;
};

export const getProductsCategory = async () => {
  const res = await fetch(`${URL}/products/categories`, {
    method: "GET",
  });
  console.log(`${URL}/products/categories`);
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  console.log("There is categories");

  const data = await res.json();
  console.log("Categories are:", data);
  return data;
};
