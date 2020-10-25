import { NextPage } from 'next';
import React from 'react';
import Error from '@templates/Error';
import { EPageType } from 'common/types/enums';
import PageHandler from '@shared/PageHandler';

const Custom404: NextPage = () => {
  return (
    <PageHandler
      title="Page Not Found"
      Template={Error}
      pageType={EPageType.Error404}
    />
  );
};

export default Custom404;
