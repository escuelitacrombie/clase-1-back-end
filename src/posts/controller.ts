import { Router } from "express";
import { getAllPosts } from "./service";

const postRoutes = Router();

postRoutes.get("/", (req, res) => {
  res.json(getAllPosts());
});

export default postRoutes;
