import db from "../config/db";
import bcrypt from "bcrypt"

export const registerUser = async (user: any) => {
    try {

        const hash = await bcrypt.hash(user.contraseña, 10)
        const results = await db.promise().query(
            `INSERT INTO usuarios (email, contraseña, descripcion, foto, nombre ) 
        VALUES ('${user.email}', '${hash}', '${user.descripcion}', '${user.foto}', '${user.nombre}')`
        );

        return results;
    } catch (error) {
        console.log(error);
    }
};