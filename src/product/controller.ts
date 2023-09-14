import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "./services";
import Product from "../types/product";

const productRoute = Router();

productRoute.get("/", (req, res) => {
  res.json(getAllProducts());
});

productRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  deleteProduct(id);
  res.json(getAllProducts());
});

productRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(getProductById(id));
});
productRoute.get("/:pagina/:items", (req,res)=>{
  const pagina = Number(req.params.pagina);
  const items = Number(req.params.items);
  const productoVacio: Product[]=[];
  const productos=getAllProducts();
  for(let i=0; i<productos.length; i++){
    if(i>(items*pagina - items) && i<=(items*pagina) ){
      let objeto = getProductById(i.toString());
      if(objeto){
        productoVacio.push(objeto);
      }
    }
  }
  res.json(productoVacio);
});


productRoute.post("/", (req, res) => {
  const product = req.body;
  createProduct(product);
  res.json(product);
});

productRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  res.json(updateProduct(id, product));
});

export default productRoute;
