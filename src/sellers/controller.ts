import { Router } from "express";
import { createSeller, deleteSeller, getAllSellers, getSellerById, updateSeller } from "./service";
import { getProductBySeller } from "../products/service";

const sellersRoutes = Router();

// Trae todos los vendedores
sellersRoutes.get("/", (req, res) => {
    res.json(getAllSellers());
});

// Trae un vendedor especifico por id
sellersRoutes.get("/:id", (req, res) => {
    const id = req.params.id
    res.json(getSellerById(id))
})

// Crea un nuevo vendedor
sellersRoutes.post("/", (req, res) => {
    const seller = req.body
    createSeller(seller)
    res.status(201).json(seller)
})

// Actualiza un vendedor del listado
sellersRoutes.put("/:id", (req, res) => {
    const id = req.params.id
    const seller = req.body
    console.log(res.statusMessage = "Vendedor modificado con exito!");
    res.json(updateSeller(id, seller))
})

// Elimina un vendedor del listado
sellersRoutes.delete("/:id", (req, res) => {
    const id = req.params.id
    deleteSeller(id)
    console.log(res.statusMessage = "Vendedor eliminado con exito!");
    res.json(getAllSellers)
})

// Ver productos de un vendedor

sellersRoutes.get("/:id/products", (req,res) => {
    const id = req.params.id
    res.json(getProductBySeller(id));
})


export default sellersRoutes;