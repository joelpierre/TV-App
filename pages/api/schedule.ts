import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { runServerMiddleware } from '../../server/utils';
import { SERVER_CORS, setHeaders } from '../../server/constants';
import { DEFAULT_COUNTRY, TV_MAZE_API_ROOT } from '../../src/utils/constants';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runServerMiddleware(req, res, SERVER_CORS);
  setHeaders(res);
  const country = req?.query?.country || DEFAULT_COUNTRY;

  try {
    const { data } = await axios.get(`${TV_MAZE_API_ROOT}/schedule?country=${country}`);
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  } catch (error) {
    res.statusCode = 404;
    res.end(JSON.stringify({}));
  }
};
