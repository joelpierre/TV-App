import React from 'react';
import { render, RenderResult } from 'test-utils';

import ShowCard, { IShowCardProps } from './ShowCard';
import { MockShowCard } from '@molecules/ShowCard/__mocks__/MockShowCard';

const defaultProps: IShowCardProps = {
  ...MockShowCard
};

const setup = (props: Partial<IShowCardProps> = {}): RenderResult => {
  const setupProps = { ...defaultProps, ...props };
  return render(<ShowCard {...setupProps} />);
};

describe('<ShowCard/>', () => {
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
