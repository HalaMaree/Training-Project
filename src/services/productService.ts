import { URL } from "./api.ts";

export const getProducts = async () => {
  const res = await fetch(`${URL}/products?limit=194&skip=0`, {
    method: "GET",
  });
  console.log(`${URL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  console.log("There is sth hererererrerer");

  const data = await res.json();
  // console.log("Data fetched from API:", data);
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
  // console.log("Categories are:", data);
  return data;
};

export const getProductsByCategory = async (category: string) => {
  const res = await fetch(`${URL}/products/category/${category}`, {
    method: "GET",
  });
  console.log(`${URL}/products/category/${category}`);
  if (!res.ok) {
    throw new Error("Failed to fetch products by category");
  }
  console.log("There is products in this category");

  const data = await res.json();
  return data;
};

export const getProductsBySearchTerm = async (term: string) => {
  const res = await fetch(`${URL}/products/search?q=${term}`, {
    method: "GET",
  });
  console.log(`${URL}/products/search?q=${term}`);
  if (!res.ok) {
    throw new Error("Failed to fetch products by search term");
  }
  console.log("There is products matching the search term");

  const data = await res.json();
  return data;
};
