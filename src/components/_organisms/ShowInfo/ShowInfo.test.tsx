import React from 'react';
import { render, RenderResult } from 'test-utils';

import ShowInfo, { IShowInfoProps } from './ShowInfo';
import { MockShow } from '../../_templates/Show/__mocks__/mockShow';

const defaultProps: IShowInfoProps = {
  show: MockShow
};

const setup = (props: Partial<IShowInfoProps> = {}): RenderResult => {
  const setupProps = { ...defaultProps, ...props };
  return render(<ShowInfo {...setupProps} />);
};

describe('<ShowInfo/>', () => {
  let wrapper: RenderResult;

  describe('Default State', () => {
    beforeEach(() => {
      wrapper = setup();
    });

    it('Should render without crashing', () => {
      expect(wrapper.container).not.toBeEmptyDOMElement();
    });

    it('should match snapshot', () => {
      expect(wrapper.asFragment()).toMatchSnapshot();
    });

    it('should render two h2 tags', () => {
      expect(wrapper.container.getElementsByTagName('h2')).toHaveLength(2);
    });

    it('should render two table tags', () => {
      expect(wrapper.getByTestId('show-info')).toBeTruthy();
      expect(wrapper.getByTestId('show-cast')).toBeTruthy();
    });
  });

  describe('Given no cast info', () => {
    beforeEach(() => {
      wrapper = setup({ show: { ...MockShow, _embedded: undefined } });
    });

    it('should render one h2 tag', () => {
      expect(wrapper.container.getElementsByTagName('h2')).toHaveLength(1);
    });

    it('should not render cast table', () => {
      expect(wrapper.getByTestId('show-info')).toBeTruthy();
      expect(wrapper.queryByTestId('show-cast')).toBeFalsy();
    });
  });
});
