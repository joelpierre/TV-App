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

let useRouterSpy;
let usePageSpy;

describe('<Pagination/>', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    useRouterSpy = jest.spyOn(router, 'useRouter').mockReturnValueOnce({
      query: {
        page: '0'
      }
    } as unknown as router.NextRouter);
    usePageSpy = jest.spyOn(hook, 'default').mockReturnValueOnce({
      isToday: true,
      page: '0'
    });
    wrapper = setup();
  });

  it('Should render without crashing', () => {
    expect(wrapper.container).not.toBeEmptyDOMElement();
  });

  it('should render next and prev buttons', () => {
    expect(wrapper.getByTestId('next-link')).toBeTruthy();
    expect(wrapper.getByTestId('prev-link')).toBeTruthy();
  });
});
