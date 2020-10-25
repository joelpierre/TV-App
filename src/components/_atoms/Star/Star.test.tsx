import React from 'react';
import { render, RenderResult } from 'test-utils';

import Star from './Star';

const setup = (props = {}): RenderResult => {
  const setupProps = { ...props };
  return render(<Star {...setupProps} />);
};

describe('<Star/>', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render without crashing', () => {
    expect(wrapper.container).not.toBeEmptyDOMElement();
  });

  it('should match snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
