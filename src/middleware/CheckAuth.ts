import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";

export const checkAuth = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log("Pasando por el middleware 2");

    const token = req.headers.authorization?.split(" ")[1] ?? "";

    const user: any = decode(token);
    
    if (user.id != req.params.id) {
        return res
            .status(403)
            .send({ message: "No estas autorizado para ver este perfil" });
    }

    next();
};