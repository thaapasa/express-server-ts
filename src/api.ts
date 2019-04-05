import * as express from 'express';
import { getRandomNumber } from './random';

export const api = express();

api.get('/status', (_, res) => res.json({ status: 'OK' }));
api.get('/random', (_, res) => res.json({ randomNumber: getRandomNumber() }));
