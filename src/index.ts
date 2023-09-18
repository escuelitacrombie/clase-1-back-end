import express from "express";
import { Router } from "express";
import * as dotenv from "dotenv"; //lib ts para que poder traer la var de entorno
import postRoutes from "./post/controller";
import vendedorRoutes from "./vendedor/controllerVendedor";
import db from "./config/db";
dotenv.config({ path: __dirname + "./../.env" });

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use("/post", postRoutes);
app.use("/vendedor", vendedorRoutes);

//----------------------------------------INSTRUCCIONES------------------------------------------------------
//===========================================================================================================
//El endpoint para traer todos los productos segun el id del vendedor es http://localhost:3000/post/vendedor/1
//Enpoints
//Delete  localhost:3000/post/1
//Create localhost:3000/post
//GetAll  localhost:3000/post
//Put(actualizar)  localhost:3000/post/1
//Delete localhost:3000/vendedor/3
//Para asigar post a vendedor desde postman debo usar {"id":4,"id_vendedor":3} 


app.listen(PORT, () => {
  console.log(`Servidor running. PORT: ${PORT}`);
});

//=====================CONECTANDO API CON BDD =====================
app.get("/usuario", (req, res) => {
  db.query("SELECT * FROM usuario", (err: any, results: any, fields: any) => {
    if (err) {
      console.error("Error al realizar la consulta:", err);
      return;
    }
    res.json({ users: results });
  });
});
app.post("/publicaciones", (req, res ) => {
  db.query(`INSERT INTO publicacion (contenido,id_usuario) values ("${req.body.contenido}",${req.body.id_usuario})`, (err:any,results:any,fields:any)=>{
    if(err){
      console.error("Error al crear la publicacion: ",err);
      return;
    }
    else{
      res.json({publicacion:results})
    }
  });
})
 
 app.get("/publicacion", (req, res ) => {
  db.query("SELECT * FROM publicacion", (err: any, results: any, fields: any) => {
    if (err) {
      console.error("Error al realizar la consulta:", err);
      return;
    }
    res.json({ publicacion: results });
  });
 })
 
 app.get("/usuario/:id", (req, res ) => {
  const id=req.params.id;
  db.query(`SELECT * FROM usuario WHERE id="${id}"`,(err:any,results:any,fields:any)=>{
    if(err){
      console.error("Error al traer el usuario",err);
      return;
    }
    res.json({publicacion:results})
  })
 })