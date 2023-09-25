import express from "express";
import * as dotenv from "dotenv";
import PostController from "./controllers/PostController";
import UserController from "./controllers/UserController";

dotenv.config({ path: __dirname + "./../.env" });

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());


app.use("/posts", PostController)

app.use("/users", UserController)

app.listen(PORT, () => {
    console.log(`Servidor running. PORT: ${PORT}`);
});

