import allSellers from "../seller/mock-dataSeller";
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
  if (index === -1) {
    return null
  } else {
    allProduct.splice(index, 1)
  }
  return id
};

export const getProductByPageAndItems = (page: number, items: number) => {

  const products = allProduct.slice(page * items, page * items + items)


  return {
    items: products
  }
}

export const updateProductAddingSeller = (idProduct: string, idSeller: string) => {
  const seller = allSellers.find((s) => s.id === idSeller);
  allProduct.forEach(element => {
    idProduct === element.id ? element.seller = seller?.name : undefined // sin el signo de pregunta me tira error
  });

  return allProduct.find((p) => p.id === idProduct);
}
