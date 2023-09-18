import express from "express";
import * as dotenv from "dotenv"; //lib ts para que poder traer la var de entorno
import postRoutes from "./post/controller";
import vendedorRoutes from "./vendedor/controllerVendedor";
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