import React from 'react';
import { fireEvent, render, RenderResult, screen } from 'test-utils';
import ShowHero, { IShowHeroProps } from './ShowHero';
import { MockShow } from '../../_templates/Show/__mocks__/mockShow';

const setup = (props: Partial<IShowHeroProps> = {}): RenderResult => {
  const setupProps = { show: MockShow, ...props };
  return render(<ShowHero {...setupProps} />);
};

describe('<ShowHero/>', () => {
  let wrapper: RenderResult;

  // Default State
  describe('Given isOpen is false', () => {
    beforeEach(() => {
      wrapper = setup();
    });

    it('Should render without crashing', () => {
      expect(wrapper.container).not.toBeEmptyDOMElement();
    });

    it('should render a H1 tag', () => {
      expect(wrapper.container.getElementsByTagName('h1')).toHaveLength(1);
    });

    it('should initially render with a read-more button', () => {
      expect(wrapper.getByTestId('read-more')).toBeTruthy();
      expect(wrapper.queryByTestId('read-less')).toBeFalsy();
    });

    it('should match snapshot', () => {
      expect(wrapper.asFragment()).toMatchSnapshot();
    });

    it('should toggle read-more', () => {
      const readMoreBtn = wrapper.getByTestId('read-more');

      fireEvent.click(readMoreBtn);

      expect(screen.getByText('Read less')).toBeTruthy();
      expect(wrapper.queryByTestId('read-more')).toBeFalsy();
    });
  });

  describe('Given isOpen is true', () => {
    beforeEach(() => {
      wrapper = setup();
      const readMoreBtn = wrapper.getByTestId('read-more');
      fireEvent.click(readMoreBtn);
    });

    it('Should render without crashing', () => {
      expect(wrapper.container).not.toBeEmptyDOMElement();
    });

    it('should render with a read-less button', () => {
      expect(wrapper.getByTestId('read-less')).toBeTruthy();
      expect(wrapper.queryByTestId('read-more')).toBeFalsy();
    });

    it('should toggle read-less', () => {
      const readLessBtn = wrapper.getByTestId('read-less');
      fireEvent.click(readLessBtn);
      expect(screen.getByText('Read more')).toBeTruthy();
      expect(wrapper.queryByTestId('read-less')).toBeFalsy();
    });
  });
});
