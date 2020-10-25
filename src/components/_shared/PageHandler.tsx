import React from 'react';

import Meta from '@shared/Meta';
import { EPageType } from 'common/types/enums';
import { useRouter } from 'next/router';
import Loading from '@templates/Loading';

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
  const router = useRouter();

  if (router?.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Meta title={title} />
      <Template {...templateProps} />
    </>
  );
};

export default PageHandler;
