import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  paginateProducts,
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
  res.status(200).json({message:"delete success"}).json(getAllProducts());
});

productRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(getProductById(id));
});
productRoute.get("/:pagina/:items", (req,res)=>{
  const pagina = Number(req.params.pagina);
  const items = Number(req.params.items);
  res.json(paginateProducts(pagina,items));
});


productRoute.post("/", (req, res) => {
  const product = req.body;
  if(!product.title || !product.author || !product.id || !product.content ){
    res.status(400).json({message:"faltan datos"});
  }else{
    createProduct(product);
    res.status(201).json({message:"create success"});
  }
  
});

productRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  res.status(200).json({message:"edit success"}).json(updateProduct(id, product));
});

export default productRoute;
