import React from 'react';
import { render, RenderResult } from 'test-utils';

import Ratings, { IRatingsProps } from './Ratings';

const defaultProps: IRatingsProps = {
  averageRating: 5
};

const setup = (props: Partial<IRatingsProps> = {}): RenderResult => {
  const setupProps = { ...defaultProps, ...props };
  return render(<Ratings {...setupProps} />);
};

describe('<Ratings/>', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render without crashing', () => {
    expect(wrapper.container).not.toBeEmptyDOMElement();
  });

  it('should not have the figures visible', () => {
    expect(wrapper.queryByTestId('figures')).toBeFalsy();
  });

  it('should match snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  describe('Given "withFigures" is true', () => {
    it('Should return ratings with the figures', () => {
      wrapper = setup({ withFigures: true });
      expect(wrapper.getByTestId('figures')).toBeTruthy();
    });
  });
});
