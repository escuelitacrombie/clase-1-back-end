import Product from "../types/product";
import allProduct from "./mock-data";

const succes:string= "item creado correctamente";


export const getAllProducts = () => {
  return allProduct;
};

export const getProductById = (id: string) => {
  return allProduct.find((product) => product.id === id);
};

export const createProduct = (product: Product) => {
  allProduct.push(product);
  return succes;
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

export const paginateProducts= (pagina:number, cantidadItems:number)=>{
  const productosTotales=getAllProducts();
  const result = productosTotales.slice((cantidadItems*pagina-cantidadItems),cantidadItems*pagina );
  return result;
}