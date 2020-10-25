import { NextApiRequest, NextApiResponse } from 'next';

export const runServerMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: any): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};
