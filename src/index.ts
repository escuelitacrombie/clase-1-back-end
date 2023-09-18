import express from "express";
import * as dotenv from "dotenv";
import productsRoutes from "./products/controller";
import sellersRoutes from "./sellers/controller";
import db from "./config/db";

dotenv.config({ path: __dirname + "./../.env" });

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());

app.get("/users", (req, res) => {
    db.query(" SELECT id_usuario,email,descripcion FROM usuarios", (err: any, results: any, fields: any) => {
        if (err) {
            console.error("Error al realizar la consulta:", err);
            return;
        } res.json({ users: results });
    });
})

app.post("/publicaciones", (req, res) => {
    const publicacion = req.body
    db.query(`INSERT INTO publicaciones (id_usuario,contenido) values (${publicacion.id_usuario},'${publicacion.contenido}')`, (err: any, results: any, fields: any) => {
        if (err) {
            console.error("Error al realizar la consulta:", err);
            return;
        } res.json({ users: results })
    })
})

app.get("/publicaciones", (req, res) => {
    db.query("SELECT * FROM publicaciones", (err: any, results: any, fields: any) => {
        if (err) {
            console.error("Error al realizar la consulta:", err);
            return;
        } res.json({ users: results });
    });
})

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


app.get("/users/:id", (req, res) => {
    const id = req.params.id
    db.query(`SELECT id_usuario,email,descripcion FROM usuarios WHERE id_usuario = ${id}`, (err: any, results: any, fields: any) => {
        if (err) {
            console.error("Error al realizar la consulta:", err);
            return;
        } res.json({ users: results });
    });
})


// app.get("/", (req, res) => {
//     res.send("")
// })

// app.use("/products", productsRoutes)

// app.use("/sellers", sellersRoutes)

app.listen(PORT, () => {
    console.log(`Servidor running. PORT: ${PORT}`);
});

