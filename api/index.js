import express from 'express';
import Routes from './routes';
import { methodError, serverError } from './middleware';
import './database';

const app = express();

app.use(express.json());

app
  .use(Routes)
  .use(methodError)
  .use(serverError);

app.listen(process.env.PORT || 5000);
