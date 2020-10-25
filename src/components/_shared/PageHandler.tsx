import React from 'react';

import Meta from '@shared/Meta';
import { EPageType } from 'common/types/enums';

interface IPageHandlerProps {
  Template: React.ComponentType<any>;
  title: string;
  pageType: EPageType;
  templateProps?: any;
  description?: string;
}

const PageHandler: React.FunctionComponent<IPageHandlerProps> = ({
  title,
  Template,
  templateProps
}) => {
  return (
    <>
      <Meta title={title} />
      <Template {...templateProps} />
    </>
  );
};

export default PageHandler;
