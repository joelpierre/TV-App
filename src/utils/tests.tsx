// @ts-ignore
import React from 'react';

import { render, RenderOptions } from '@testing-library/react';

const AppProviders: React.FunctionComponent = ({
  children
}) => {
  return (
    <>
      {children}
    </>
  );
};

const customRender = (ui: React.ReactElement, options: Omit<RenderOptions, 'queries'> = {}) =>
  render(ui, { wrapper: AppProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
