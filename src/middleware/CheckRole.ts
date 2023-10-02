import { Request, Response, NextFunction } from "express";
import { decode, TokenExpiredError } from "jsonwebtoken";

export const checkRole = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log("Pasando por el middleware");

    const token = req.headers.authorization?.split(" ")[1] || "";

    if (!token) {
        return res.status(401).send({ message: "No se proporcionó un token de autorización." });
    }

    try {
        const user: any = decode(token);

        if (user.role !== "Admin") {
            return res.status(403).send({ message: "Acceso no autorizado." });
        }

        next();
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            return res.status(401).send({ message: "El token ha expirado." });
        }

        return res.status(500).send({ message: "Error al verificar el token." });
    }
};
