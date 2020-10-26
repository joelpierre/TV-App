import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import Home from '@templates/Home';
import PageHandler from '@shared/PageHandler';
import { EPageType } from 'common/types/enums';
import ScheduleProvider from '../src/context/ScheduleContext';
import { ITvSchedule } from 'common/types/interfaces';
import { fetchSchedule } from '../src/fetch';

interface IHomePageProps {
  tvSchedule: ITvSchedule[];
}

const HomePage: NextPage<IHomePageProps> = ({ tvSchedule }) => {
  return (
    <ScheduleProvider tvSchedule={tvSchedule}>
      <PageHandler
        title="Schedule"
        Template={Home}
        pageType={EPageType.Home}
      />
    </ScheduleProvider>
  );
};

export const getServerSideProps: GetServerSideProps<IHomePageProps> = async ({ query }) => {
  const page = Array.isArray(query?.page) ? query?.page[0] : query?.page;
  const tvSchedule = await fetchSchedule(page);
  return {
    props: {
      tvSchedule
    }
  };
};

export default HomePage;
