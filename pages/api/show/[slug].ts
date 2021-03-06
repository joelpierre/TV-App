import { NextApiRequest, NextApiResponse } from 'next';
import { runServerMiddleware } from '../../../server/utils';
import { SERVER_CORS, setHeaders } from '../../../server/constants';
import axios from 'axios';
import { TV_MAZE_API_ROOT } from 'common/utils/constants';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runServerMiddleware(req, res, SERVER_CORS);
  setHeaders(res);
  const slug = req?.query?.slug;

  try {
    if (!slug) {
      throw new Error;
    }
    const { data } = await axios.get(`${TV_MAZE_API_ROOT}/shows/${slug}?embed=cast`);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
};
