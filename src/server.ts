import * as debug from 'debug';
const log = debug('server');

log('Starting server');

import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import { api } from './api';

const serverPort = 3500;

const server = express();
server.use(compression());
server.use(bodyParser.json());

server.use('/api', api);

server.listen(serverPort, () => {
  log(`Server started at port ${serverPort}`);
});
