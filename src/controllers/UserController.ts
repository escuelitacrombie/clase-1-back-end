import { Router } from "express";
import { getUserById, loginUser, registerUser } from "../services/UserService";
import { User } from "@prisma/client";

const UserController = Router();

// Obtener las publicaciones
UserController.get("/me/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(Number(userId));

  return res.status(200).json(user);
});

UserController.post("/login", async (req, res) => {
  const user = await loginUser(req.body);

  if (!user) {
    return res.status(401).json({ message: "Usuario o contraseña incorrecta" });
  }

  return res.status(200).json(user);
});

// Crear una publicación
UserController.post("/register", async (req, res) => {
  const user = req.body as User;

  // Validaciones
  if (!user.name || user.email.length < 10) {
    res
      .status(400)
      .json({ message: "Los datos no son correctos por favor verificarlos" });
  }

  const userToken = await registerUser(user);

  return res
    .status(userToken ? 201 : 500)
    .json(
      userToken
        ? { token: userToken }
        : { message: "Ocurrió un problema intente mas tarde" }
    );
});

UserController.get("/posts", async (req, res) => { });

export default UserController;