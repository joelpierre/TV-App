import React from 'react';
import { render, RenderResult } from 'test-utils';

import Header from './Header';

const setup = (props = {}): RenderResult => {
  const setupProps = { ...props };
  return render(<Header {...setupProps} />);
};

describe('<Header/>', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render without crashing', () => {
    expect(wrapper.container).not.toBeEmptyDOMElement();
  });

  it('should render logo', () => {
    expect(wrapper.container.getElementsByTagName('img')).toHaveLength(1);
    expect(wrapper.queryByTestId('logo')).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
