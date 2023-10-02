import { Router } from "express";
import { getUserById, getUsers, loginUser, registerUser } from "../services/UserService";
import { User } from "@prisma/client";
import { checkAuth } from "../middleware/CheckAuth";
import { checkRole } from "../middleware/CheckRole";
import checkHeaders from "../middleware/CheckHeaders";

const UserController = Router();

//Traer una lista de todos los usuarios
UserController.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Hubo un error al obtener la lista de usuarios' });
  }
})

// Obtener los datos de mi perfil
UserController.get("/me/:id", checkAuth, checkRole, checkHeaders, async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(Number(userId));

  return res.status(200).json(user);
});


//Logear un usuario
UserController.post("/login", async (req, res) => {
  const user = await loginUser(req.body);

  if (!user) {
    return res.status(401).json({ message: "Usuario o contraseña incorrecta" });
  }

  return res.status(200).json(user);
});

// Crear un usuario
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


export default UserController;