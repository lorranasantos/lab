import './database';
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import AppError from './config/AppErrors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());



app.listen(3000, () => console.log('Server is running'));

module.exports = app;
