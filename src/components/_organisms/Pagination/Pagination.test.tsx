import React from 'react';
import { render, RenderResult } from 'test-utils';

import * as hook from '@hooks/usePage';
import * as router from 'next/router';

import Pagination from './Pagination';

jest.spyOn(hook, 'default').mockReturnValueOnce({
  isFirstPage: true,
  page: '1'
});

jest.spyOn(router, 'useRouter').mockReturnValueOnce({
  query: {
    page: '1'
  }
} as unknown as router.NextRouter);

const defaultProps = {
  className: 'Test__className'
};

const setup = (props = {}): RenderResult => {
  const setupProps = { ...defaultProps, ...props };
  return render(<Pagination {...setupProps} />);
};

describe('<Pagination/>', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render without crashing', () => {
    expect(wrapper.container).not.toBeEmptyDOMElement();
  });
});
