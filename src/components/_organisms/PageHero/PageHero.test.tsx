import React from 'react';
import { render, RenderResult } from 'test-utils';

import PageHero from './PageHero';

const setup = (props = {}): RenderResult => {
  const setupProps = { ...props };
  return render(<PageHero {...setupProps} />);
};

describe('<PageHero/>', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render without crashing', () => {
    expect(wrapper.container).not.toBeEmptyDOMElement();
  });

  it('should render a H1 tag', () => {
    expect(wrapper.container.getElementsByTagName('h1')).toHaveLength(1);
  });

  it('should match snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
