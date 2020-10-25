import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';

import { ITvShow } from 'common/types/interfaces';
import PageHandler from '@shared/PageHandler';
import Show from '@templates/Show';
import { EPageType } from 'common/types/enums';
import { fetchSchedule, fetchShow } from '../../src/fetch';

interface IShowPage {
  tvShow: ITvShow;
}

type TShowPage = IShowPage & InferGetStaticPropsType<typeof getStaticProps>;

const ShowPage: NextPage<TShowPage> = ({ tvShow }) => (
  <PageHandler
    Template={Show}
    templateProps={tvShow}
    title={tvShow?.name}
    pageType={EPageType.Show}
  />
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = Array.isArray(params?.slug) ? params?.slug?.[0] : params?.slug;
  const tvShow = await fetchShow(slug);
  return {
    props: {
      tvShow
    },
    revalidate: 1
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tvSchedule = await fetchSchedule();
  const paths = tvSchedule.map(series => ({
    params: { slug: `${series?.show?.id}` }
  }));

  return {
    paths,
    fallback: true
  };
};

export default ShowPage;
