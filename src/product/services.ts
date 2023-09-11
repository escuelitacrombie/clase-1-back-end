import Product from "../types/product";
import allProduct from "./mock-data";

export const getAllProducts = () => {
  return allProduct;
};

export const getProductById = (id: string) => {
  return allProduct.find((product) => product.id === id);
};

export const createProduct = (product: Product) => {
  allProduct.push(product);
  return product;
};

export const updateProduct = (id: string, product: Product) => {
  const index = allProduct.findIndex((product) => product.id === id);
  allProduct[index] = product;
  return product;
};

export const deleteProduct = (id: string) => {
  const index = allProduct.findIndex((product) => product.id === id);
  allProduct.splice(index, 1);
  return id;
};
