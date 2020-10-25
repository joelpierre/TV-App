import axios, { AxiosResponse } from 'axios';
import { getUrlRoot } from 'common/utils/index';
import { ITvSchedule, ITvShow } from 'common/types/interfaces';

export const fetchSchedule = async (page = '1'): Promise<ITvSchedule[]> => {
  const { data: tvSchedule } = await axios
    .get(`${getUrlRoot}api/schedule?page=${page}`)
    .catch(e => {
      console.error(e);
      return { data: {} };
    });

  return tvSchedule;
};

export const fetchShow = async (slug: string): Promise<ITvShow> => {
  const { data: tvShow } = await axios
    .get(`${getUrlRoot}api/show/${slug}`)
    .catch(e => {
      console.error(e);
      return { data: {} };
    });

  return tvShow;
};
