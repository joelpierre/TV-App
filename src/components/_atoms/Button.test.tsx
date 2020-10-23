import React from 'react';
import { render, RenderResult } from 'test-utils';

import Button from './Button';

const children = 'This is a test';

const defaultProps = {
  children
};

const setup = (props = {}): RenderResult => {
  const setupProps = { ...defaultProps, ...props };
  return render(<Button {...setupProps} />);
};

describe('<Button/>', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render without crashing', () => {
    expect(wrapper.container).not.toBeEmptyDOMElement();
  });

  it('should container children', () => {
    expect(wrapper.container).toHaveTextContent(children);
  });

  it('should match snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
