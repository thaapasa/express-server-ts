import * as express from 'express';
import { getRandomNumber, getSecureRandomNumber } from './service/random';

export const api = express();

api.get('/status', (_, res) => res.json({ status: 'OK' }));
api.get('/random', (_, res) => res.json({ randomNumber: getRandomNumber() }));
api.get('/random/secure', (_, res, next) =>
  getSecureRandomNumber()
    .then(secureRandomNumber => res.json({ secureRandomNumber }))
    .catch(next)
);
