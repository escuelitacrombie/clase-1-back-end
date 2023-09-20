import { Router } from "express";
import { createUser } from "../services/user_services";

const UserController = Router();

// Obtener las publicaciones
UserController.get("/test", (req, res) => {
  console.log("Mostrando TEST");
});

// Crear una publicación
UserController.post("/", async (req, res) => {
  const user = req.body;

  // Validaciones
  const createdUser = await createUser(user);

  return res
    .status(createdUser ? 201 : 500)
    .json(
        createdUser
        ? { message: "Creado exitosamente" }
        : { message: "Ocurrió un problema intente mas tarde" }
    );
});

export default UserController;