import express from 'express';
import cors from 'cors'
import routes from './routes'

const app = express();

app.use(cors())
app.use(routes);

app.listen(3333);

//sucrase lib, typeorm lib - olhar funcionalidade 20:00 da aula de typescript

//ts-node-dev lib minuto 25 