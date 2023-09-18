import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "./service";
import Product from "../types/productType";


const productsRoutes = Router();

// Trae todos los productos
productsRoutes.get("/", (req, res) => {
    res.json(getAllProducts());
});

// Trae un producto especifico por id
productsRoutes.get("/:id", (req, res) => {
    const id = req.params.id
    res.json(getProductById(id))
})

// Crea un nuevo producto
productsRoutes.post("/", (req, res) => {
    const product:Product = req.body
    if (!product) {
        res.status(400).json(product)
        res.statusMessage="Error, faltan valores para el producto."
    }
    createProduct(product)
    res.status(201).json(product)
})

// Actualiza un producto del listado
productsRoutes.put("/:id", (req, res) => {
    const id = req.params.id
    const product = req.body
    console.log(res.statusMessage = "Producto modificado con exito!");
    res.json(updateProduct(id, product))
})

// Elimina un producto del listado
productsRoutes.delete("/:id", (req, res) => {
    const id = req.params.id
    deleteProduct(id)
    console.log(res.statusMessage = "Producto eliminado con exito!");
    res.json(getAllProducts)
})


export default productsRoutes;