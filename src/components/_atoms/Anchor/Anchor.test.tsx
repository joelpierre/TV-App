import React from 'react';
import { render, RenderResult } from 'test-utils';

import Anchor, { IAnchorProps } from './Anchor';
import { EPageHref } from 'common/types/enums';

const children = 'Test children';
const defaultProps: IAnchorProps = {
  as: '/',
  href: EPageHref.Home
};

const setup = (props?: {}): RenderResult => {
  const setupProps = { ...defaultProps, ...props, children };
  return render(<Anchor {...setupProps} />);
};

describe('<Anchor/>', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render without crashing', () => {
    expect(wrapper.container).not.toBeEmptyDOMElement();
  });
  it('renders children', () => {
    expect(wrapper.container.innerHTML).toContain(children);
  });

  it('should match snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
