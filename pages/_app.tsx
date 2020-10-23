import axios from 'axios';
import { AppProps } from 'next/app';
import React from 'react';

import DefaultLayout from '@layouts/DefaultLayout';
import { ITvSchedule } from 'common/types/interfaces';
import { DEFAULT_COUNTRY, TV_MAZE_API_ROOT } from 'common/utils/constants';

import AppProvider from '../src/context/AppContext';
import '../styles/global.scss';

interface IAppProps {
  tvSchedule: ITvSchedule[];
}

const App = ({ Component, pageProps, tvSchedule }: AppProps & IAppProps) => {
  return (
    <AppProvider tvSchedule={tvSchedule}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </AppProvider>
  );
};

App.getInitialProps = async ({ ctx, Component }): Promise<Partial<AppProps> & Partial<IAppProps>> => {
  const country = ctx?.query?.country || DEFAULT_COUNTRY;
  const { data: tvSchedule } = await axios.get(`${TV_MAZE_API_ROOT}/schedule?country=${country}`).catch(e => {
    console.error(e);
    return { data: {} };
  });
  return {
    pageProps: Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {},
    tvSchedule
  };
};

export default App;
