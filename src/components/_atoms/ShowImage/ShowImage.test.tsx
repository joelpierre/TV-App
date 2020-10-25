import React from 'react';
import { render, RenderResult } from 'test-utils';

import ShowImage, { IShowImageProps } from './ShowImage';
import { MockImage } from '@atoms/CastImage/__mocks__/MockImage';

const defaultProps: IShowImageProps = {
  name: 'Joel test',
  image: MockImage
};

const setup = (props: Partial<IShowImageProps> = {}): RenderResult => {
  const setupProps = { ...defaultProps, ...props };
  return render(<ShowImage {...setupProps} />);
};

describe('<ShowImage/>', () => {
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
