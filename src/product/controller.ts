import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "./services";

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

productRoute.post("/", (req, res) => {
  const product = req.body;
  createProduct(product);
  res.status(201).json({message:"create success"});
});

productRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  res.status(200).json({message:"edit success"}).json(updateProduct(id, product));
});

export default productRoute;
