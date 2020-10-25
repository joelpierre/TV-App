import React from 'react';
import { render, RenderResult } from 'test-utils';

import Schedule from './Schedule';
import { MockShowCard } from '@molecules/ShowCard/__mocks__/MockShowCard';
import { APP_TITLE } from 'common/utils/constants';
import noop from 'lodash/noop';

const MockSchedule = [
  MockShowCard,
  MockShowCard,
  MockShowCard,
  MockShowCard
];

const setup = (props = {}): RenderResult => {
  const setupProps = { ...props };
  return render(<Schedule {...setupProps} />);
};

describe('<Schedule/>', () => {
  let wrapper: RenderResult;

  describe('Given TV Schedule is not and empty array', () => {
    beforeEach(() => {
      jest.spyOn(React, 'useContext').mockReset();
      jest.spyOn(React, 'useContext').mockReturnValue({
        tvSchedule: MockSchedule,
        appTitle: APP_TITLE,
        setTvSchedule: noop
      });
      wrapper = setup();
    });

    it('Should render without crashing', () => {
      expect(wrapper.container).not.toBeEmptyDOMElement();
    });

    it('should render the tvSchedule list', () => {
      expect(wrapper.getByTestId('schedule-list')).not.toBeEmptyDOMElement();
    });

    it('should match snapshot', () => {
      expect(wrapper.asFragment()).toMatchSnapshot();
    });
  });

  describe('Given TV Schedule is empty array', () => {
    beforeEach(() => {
      jest.spyOn(React, 'useContext').mockReset();
      jest.spyOn(React, 'useContext').mockReturnValue({
        tvSchedule: [],
        appTitle: APP_TITLE,
        setTvSchedule: noop
      });
      wrapper = setup();
    });

    it('should render core component', () => {
      expect(wrapper.container).not.toBeEmptyDOMElement();
    });

    it('should not render list', () => {
      expect(wrapper.queryByTestId('schedule-list')).toBeFalsy();
    });
  });
});
