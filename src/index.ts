import express from "express";
import * as dotenv from "dotenv";
import db from "./config/db";
import PostController from "./controllers/PostController";
import UserController from "./controllers/UserController";

dotenv.config({ path: __dirname + "./../.env" });

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());


app.use("/posts", PostController)

app.use("/users", UserController)

// app.get("/users", (req, res) => {
//     db.query(" SELECT id_usuario,email,descripcion FROM usuarios", (err: any, results: any, fields: any) => {
//         if (err) {
//             console.error("Error al realizar la consulta:", err);
//             return;
//         } res.json({ users: results });
//     });
// })

app.get("/publicaciones/:id/comentarios", (req, res) => {
    const id = req.params.id;

    db.query(`SELECT * FROM comentarios WHERE id_publicacion = ${id}`, (err: any, results: any) => {
        if (err) {
            console.error("Error al realizar la consulta: ", err);
            return res.status(500).json({ error: "Error en la consulta" });
        }
        res.json({ comentarios: results });
    });
});

// app.get("/users/:id", (req, res) => {
//     const id = req.params.id
//     db.query(`SELECT id_usuario,email,descripcion FROM usuarios WHERE id_usuario = ${id}`, 
//     (err: any, results: any, fields: any) => {
//         if (err) {
//             console.error("Error al realizar la consulta:", err);
//             return;
//         } res.json({ users: results });
//     });
// })

app.listen(PORT, () => {
    console.log(`Servidor running. PORT: ${PORT}`);
});

