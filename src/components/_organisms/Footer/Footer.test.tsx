import React from 'react';
import { render, RenderResult } from 'test-utils';

import Footer from './Footer';

const setup = (props = {}): RenderResult => {
  const setupProps = { ...props };
  return render(<Footer {...setupProps} />);
};

describe('<Footer/>', () => {
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
