import express from "express";
import * as dotenv from "dotenv";
import productRoute from "./product/controller";
import sellerRoute from "./seller/controllerSeller";
import allProduct from "./product/mock-data";
import allSellers from "./seller/mock-dataSeller";
dotenv.config({ path: __dirname + "./../.env" });

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());

app.use("/product", productRoute);

console.log("p", allProduct);
console.log("s", allSellers);



app.use("/seller", sellerRoute);

app.listen(PORT, () => {
  console.log(`Servidor running. PORT: ${PORT}`);
});
