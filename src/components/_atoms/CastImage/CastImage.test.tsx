import React from 'react';
import { render, RenderResult } from 'test-utils';

import CastImage, { ICastImageProps } from './CastImage';
import { MockImage } from './__mocks__/MockImage';

const defaultProps: ICastImageProps = {
  name: 'Joel test',
  image: MockImage
};

const setup = (props: Partial<ICastImageProps> = {}): RenderResult => {
  const setupProps = { ...defaultProps, ...props };
  return render(<CastImage {...setupProps} />);
};

describe('<CastImage/>', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render without crashing', () => {
    expect(wrapper.container).not.toBeEmptyDOMElement();
  });

  it('should contain image', () => {
    const img = wrapper.container.getElementsByTagName('img');
    expect(img).toHaveLength(1);
  });

  it('should match snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  describe('Given no image is passed', () => {
    beforeEach(() => {
      wrapper = setup({ image: undefined });
    });

    it('Should render without crashing', () => {
      expect(wrapper.container).not.toBeEmptyDOMElement();
    });

    it('should not contain image', () => {
      const img = wrapper.container.getElementsByTagName('img');
      expect(img).toHaveLength(0);
    });
  });
});
