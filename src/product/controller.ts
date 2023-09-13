import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductByPageAndItems,
  updateProduct,
  updateProductAddingSeller,
} from "./services";

const productRoute = Router();

productRoute.get("/", (req, res) => {
  res.json(getAllProducts());
});

productRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  if(deleteProduct(id) != null) { 
     res.status(200).json({ products: getAllProducts(), message: "Deleted Success!" });
  }else{
    res.status(404).json({message: "error that product doesn't exist"})
  }

});

productRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(getProductById(id));
});

productRoute.post("/", (req, res) => {
  const product = req.body;
  createProduct(product);
  res.status(200).json(product);
});

productRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  res.status(200).json({product: updateProduct(id, product), message: "Updated Success!"});
});

productRoute.get('/:page/:items', (req, res) => {
  const page = parseInt(req.params.page);
  const items = parseInt(req.params.items);

    const products = getProductByPageAndItems(page, items);
    res.json(products);
});

//probablemente es mejor agregarlo desde el body.
productRoute.put("/:idProduct/:idSeller", (req, res) => {
  const idProduct = req.params.idProduct;
  const iDSeller = req.params.idSeller;
  res.json(updateProductAddingSeller(idProduct, iDSeller));
});


export default productRoute;
