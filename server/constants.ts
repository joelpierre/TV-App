import Cors from 'cors';
import { ServerResponse } from 'http';

export const SERVER_CORS = Cors({
  methods: ['GET', 'HEAD']
});

export const setHeaders = (res: ServerResponse) =>
  res?.setHeader('Content-Type', 'application/json');
