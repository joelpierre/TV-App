import React from 'react';
import { render, RenderResult } from 'test-utils';

import * as hook from '@hooks/usePage';
import * as router from 'next/router';

import Pagination from './Pagination';

const defaultProps = {
  className: 'Test__className'
};

const setup = (props = {}): RenderResult => {
  const setupProps = { ...defaultProps, ...props };
  return render(<Pagination {...setupProps} />);
};

let nextRouterSpy;
let useRouterSpy;
let usePageSpy;

describe('<Pagination/>', () => {
  let wrapper: RenderResult;

  describe('Given on page 0', () => {
    beforeEach(() => {
      useRouterSpy = jest.spyOn(router, 'useRouter').mockReturnValueOnce({
        query: {
          page: '0'
        }
      } as unknown as router.NextRouter);
      usePageSpy = jest.spyOn(hook, 'default').mockReturnValueOnce({
        isFirstPage: true,
        page: '0'
      });
      wrapper = setup();
    });

    it('Should render without crashing', () => {
      expect(wrapper.container).not.toBeEmptyDOMElement();
    });

    it('should render next and prev buttons', () => {
      expect(wrapper.getByText('View Next Day >')).toBeTruthy();
      expect(wrapper.queryByText('< View Previous Day')).toBeFalsy();
    });

    it('should', () => {
      nextRouterSpy = jest.spyOn(router.default, 'push');

    });
  });
});
