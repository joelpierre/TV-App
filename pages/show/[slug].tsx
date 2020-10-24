import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import React from 'react';

import { ITvShow } from 'common/types/interfaces';
import { getHost, getProtocol } from 'common/utils/index';

interface IShowPage {
  tvShow: ITvShow;
}

const ShowPage: NextPage<IShowPage> = ({ tvShow }) => (
  <>
    Show Page for {tvShow?.name}
  </>
);

ShowPage.getInitialProps = async ({ query, req }): Promise<IShowPage> => {
  const slug = Array.isArray(query?.slug) ? query?.slug?.[0] : query?.slug;
  try {
    const { data: tvShow }: AxiosResponse<ITvShow> = await axios
      .get(`${getProtocol()}${getHost(req)}/api/show/${slug}`);
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
