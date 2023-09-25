import { Router } from "express";
import { registerUser } from "../services/UserService";

const UserController = Router();

// Obtener las publicaciones
UserController.get("/test", (req, res) => {
    console.log("Mostrando TEST");
});

// Crear una publicación
UserController.post("/", async (req, res) => {
    const user = req.body;

    // Validaciones
    if (!user.contenido || user.contenido.length < 10) {
        res
            .status(400)
            .json({ message: "Los datos no son correctos por favor verificarlos" });
    }

    const registeredUser = await registerUser(user);

    return res
        .status(registeredUser ? 201 : 500)
        .json(
            registeredUser
                ? { message: "Creado exitosamente" }
                : { message: "Ocurrió un problema intente mas tarde" }
        );
});

export default UserController;