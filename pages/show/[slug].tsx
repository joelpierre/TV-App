import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import React from 'react';

import { ITvShow } from 'common/types/interfaces';
import { getUrlRoot } from 'common/utils/index';
import PageHandler from '@shared/PageHandler';
import Show from '@templates/Show';
import { EPageType } from 'common/types/enums';

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
  try {
    const { data: tvShow }: AxiosResponse<ITvShow> = await axios
      .get(`${getUrlRoot}api/show/${slug}`);
    return {
      tvShow
    };
  } catch (e) {
    // Use a logging service (sentry.io, logrocket, newrelic, etc etc)
    console.error(e);
    return {
      tvShow: {} as ITvShow
    };
  }
};

export default ShowPage;
