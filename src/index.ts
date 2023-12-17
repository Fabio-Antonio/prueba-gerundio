import express from 'express';
import * as environment from 'dotenv';
import cors from 'cors';
import { userRouter } from './presentation/http/routes/user.routes';

environment.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/v1', userRouter);

const server = app.listen(process.env.PORT, () =>
  console.info('server is runing on port', process.env.PORT)
);

module.exports = { app, server };
