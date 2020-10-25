import axios from 'axios';
import { getUrlRoot } from 'common/utils/index';
import { ITvSchedule } from 'common/types/interfaces';

export const fetchSchedule = async (page = '1'): Promise<ITvSchedule[]> => {
  const { data: tvSchedule } = await axios
    .get(`${getUrlRoot}api/schedule?page=${page}`)
    .catch(e => {
      console.error(e);
      return { data: {} };
    });

  return tvSchedule;
};
