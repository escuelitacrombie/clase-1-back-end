import { Router } from "express";
import {
  createSeller,
  deleteSeller,
  getAllSeller,
  getSellerById,
  updateSeller,
} from "./servicesSeller";

const sellerRoute = Router();

sellerRoute.get("/", (req, res) => {
  res.json(getAllSeller());
});

sellerRoute.post("/", (req, res) => {
  const seller = req.body;
  createSeller(seller);
  res.status(200).json(seller);
});

sellerRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const seller = req.body;
  res.json(updateSeller(id, seller));
})

sellerRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(getSellerById(id));
});

sellerRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  deleteSeller(id);
  res.json(getAllSeller());
})


export default sellerRoute;
