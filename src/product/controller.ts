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
import Product from "../types/product";
import allProduct from "./mock-data";

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


//ejercicios hechos en update de product

productRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  const err = "Invalid " + errorMessage(product, id)
  if(validateProduct(product, id)){
    res.status(200).json({product: updateProduct(id, product), message: "Updated Success!"});
  }else{
    res.status(404).json({message: `${err}`});
  }
});

const errorMessage = (p:Product, id: string) => {
  const arrErrors = [];
  if(allProduct.find((pro) => pro.id === id) === undefined){
    arrErrors.push("Id")
  }
  if(typeof p.title != "string" ){
    arrErrors.push("title")
  }

  return arrErrors.join(", ")
}

const validateProduct = (p:Product, id: string) =>{

  if(allProduct.find((pro) => pro.id === id) != undefined){
    if(typeof p.title === "string" || p.title === "" && typeof p.author === "string" || p.author === "" && typeof p.date=== "string" || p.date === "" && p.category === "string" || p.category === "" && typeof p.content === "string" || p.content === "" && typeof p.seller === "string" || p.seller === "" || typeof p.seller === null){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

productRoute.get('/:page/:items', (req, res) => {
  const page = parseInt(req.params.page);
  const items = parseInt(req.params.items);

    const products = getProductByPageAndItems(page, items);
    res.json(products);
});

//probablemente es mejor agregarlo desde el body.
productRoute.put("/product/:idProduct/seller/:idSeller", (req, res) => {
  const idProduct = req.params.idProduct;
  const iDSeller = req.params.idSeller;
  res.json(updateProductAddingSeller(idProduct, iDSeller));
});


export default productRoute;
