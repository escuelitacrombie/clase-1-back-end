import express from "express";
import * as dotenv from "dotenv";
import productsRoutes from "./products/controller";
import sellersRoutes from "./sellers/controller";

dotenv.config({ path: __dirname + "./../.env" });

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());

app.get("/",(req,res) => {
    res.send("")
})

app.use("/products", productsRoutes)

app.use("/sellers", sellersRoutes)

app.listen(PORT, () => {
    console.log(`Servidor running. PORT: ${PORT}`);
});

