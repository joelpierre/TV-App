import { NextPage } from 'next';
import React from 'react';

import { ITvShow } from 'common/types/interfaces';
import PageHandler from '@shared/PageHandler';
import Show from '@templates/Show';
import { EPageType } from 'common/types/enums';
import { fetchShow } from '../../src/fetch';

interface IShowPage {
  tvShow: ITvShow;
}

const ShowPage: NextPage<IShowPage> = ({ tvShow }) => (
  <>
    <PageHandler
      Template={Show}
      templateProps={tvShow}
      title={tvShow.name}
      pageType={EPageType.Show}
    />
  </>
);

ShowPage.getInitialProps = async ({ query }): Promise<IShowPage> => {
  const slug = Array.isArray(query?.slug) ? query?.slug?.[0] : query?.slug;
  const tvShow = await fetchShow(slug);
  return { tvShow };
};

export default ShowPage;
