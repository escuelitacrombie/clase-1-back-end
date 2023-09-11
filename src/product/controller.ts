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
  res.json(getAllProducts());
});

productRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(getProductById(id));
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
