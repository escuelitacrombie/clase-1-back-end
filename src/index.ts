import express, { Router } from 'express';
import * as dotenv from 'dotenv';
import productRoute from './product/controller';
import userRoute from './user/controller';
import db from './config/db';

dotenv.config({ path: __dirname + './../.env' });

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.use('/product', productRoute);
app.use('/user', userRoute);

app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`Servidor running. PORT: ${PORT}`);
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM usuario', (err: any, results: any, fields: any) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return;
    }
    res.json({ users: results });
  });
});
app.post('/publicacion', (req, res) => {
  const publicacion = req.body;
  db.query(`INSERT INTO publicacion (contenido, id_usuario, imagen ) VALUES ('${publicacion.contenido}', ${publicacion.id_usuario}, "${publicacion.imagen}")`, (err: any, results: any, fields: any) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return;
    }
    res.json({ users: results });
  });
});

app.post('/publicacion/comentario', (req, res) => {
  const publicacion = req.body;
  db.query(`INSERT INTO comentario_publicacion (contenido,imagen, id_usuario, id_publicacion ) VALUES ('${publicacion.contenido}', '${publicacion.imagen}', ${publicacion.id_usuario},${publicacion.id_publicacion})` , (err: any, results: any, fields: any) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return;
    }
    res.json({ publicacion: results });
  });
});

app.get("/publicaciones", (req, res ) => {
  db.query('SELECT * FROM publicacion', (err: any, results: any, fields: any) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return;
    }
    res.json({ publicaciones: results });
  });
 })

 app.get("/users/:id", (req, res ) => {
  const ID=req.params.id;
  db.query(`SELECT nombre,imagen,descripcion,email,puntos FROM usuario WHERE id='${ID}'`, (err: any, results: any, fields: any) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return;
    }
    res.json({ users: results });
  });
 })