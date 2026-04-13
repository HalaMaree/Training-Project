import { API } from "./api";

export const getProducts = async () => {
  const res = await API.get("/products");
  return res.data;
};

export const getCategories = async () => {
  const res = await API.get("/categories");
  return res.data;
};
