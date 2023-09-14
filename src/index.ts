import express from "express";
import * as dotenv from "dotenv";
import productRoute from "./product/controller";
import userRoute from "./user/controller";
dotenv.config({ path: __dirname + "./../.env" });

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use("/product", productRoute);
app.use("/user", userRoute);

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Servidor running. PORT: ${PORT}`);
});
