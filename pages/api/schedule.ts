import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { runServerMiddleware } from '../../server/utils';
import { SERVER_CORS, setHeaders } from '../../server/constants';
import { DEFAULT_COUNTRY, TV_MAZE_API_ROOT } from '../../src/utils/constants';
import { getDateFromPage } from '../../src/utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runServerMiddleware(req, res, SERVER_CORS);
  setHeaders(res);
  const country = req?.query?.country || DEFAULT_COUNTRY;
  const pageFromQuery = Array.isArray(req?.query?.page) ? req?.query?.page[0] : req?.query?.page;
  const { isoDate: date } = getDateFromPage(pageFromQuery);

  try {
    const { data } = await axios.get(`${TV_MAZE_API_ROOT}/schedule?country=${country}&date=${date}`);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({});
  }
};
