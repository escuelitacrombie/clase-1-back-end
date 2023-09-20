import express, { Router } from 'express';
import * as dotenv from 'dotenv';

import PostController from './controllers/post_controller';
import UserController from './controllers/user_controller';

dotenv.config({ path: __dirname + './../.env' });

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());

app.use("/api/posts",PostController)
app.use("/api/user",UserController)
app.listen(PORT, () => {
  console.log(`Servidor running. PORT: ${PORT}`);
});
