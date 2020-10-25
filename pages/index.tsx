import { NextPage } from 'next';
import React from 'react';
import Home from '@templates/Home';
import PageHandler from '@shared/PageHandler';
import { EPageType } from 'common/types/enums';

const HomePage: NextPage = () => (
  <PageHandler
    title="Schedule"
    Template={Home}
    pageType={EPageType.Home}
  />
);

export default HomePage;
