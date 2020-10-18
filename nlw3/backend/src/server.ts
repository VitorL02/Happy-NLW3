import express from 'express';
import './database/connection';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';
import routes from './routes';
import errorHandler from './errors/handler';
//Rota = conjunto
//Recurso = usuario
//GET - Buscar uma informação
//Post = Criando informação

// PUT = Editando uma informação
//Delete = deleta uma informação

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);