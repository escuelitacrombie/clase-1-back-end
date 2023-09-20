import db from "../config/db";
import bcrypt, { hash } from "bcrypt";

export const createUser = async (user: any) => {
  try {
    const hash=await bcrypt.hash(user.contraseña, 10)
        const results = await db.promise().query(
          `INSERT INTO usuario (nombre, imagen,descripcion,email,contraseña ) VALUES ('${user.nombre}', '${user.imagen}', '${user.descripcion}', '${user.email}', '${hash}')`
        );
    return results;
  } catch (error) {
    console.log(error);
  }
};



export const deleteUser = async ( id:number)=>{
  try {
    const results = await db
      .promise()
      .query(
        `DELETE * FROM publicacion WHERE id= ${id}`
      );
    return results;
  } catch (error) {
    console.log(error);
  }
}