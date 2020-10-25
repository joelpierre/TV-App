import { ITvSchedule } from '../../../../types/interfaces';
import { MockShow } from '../../../_templates/Show/__mocks__/mockShow';
import { MockImage } from '../../../_atoms/CastImage/__mocks__/MockImage';

export const MockShowCard: ITvSchedule = {
  url: '',
  type: '',
  summary: '',
  season: 2,
  runtime: 50,
  number: 2,
  name: 'Test Show Card',
  image: MockImage.original,
  id: 123,
  airtime: '09:00',
  airstamp: 'airStamp',
  airdate: '01-01-2020',
  show: MockShow
};
