import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "./../.env" });

const app = express();
const PORT = process.env.PORT ?? 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("¡Hola, mundo!");
});

app.listen(PORT, () => {
  console.log(`Servidor running. PORT: ${PORT}`);
});
