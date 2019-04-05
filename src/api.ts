import * as express from 'express';

export const api = express();

api.get('/status', (_, res) => res.json({ status: 'OK' }));
