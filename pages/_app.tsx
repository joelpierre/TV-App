import React from 'react';
import axios from 'axios';
import AppProvider from '../src/context/AppContext';

import '../styles/global.scss';
import DefaultLayout from '@layouts/DefaultLayout';
import { AppProps } from 'next/app';
import { ITvSchedule } from 'common/types/interfaces';
import { DEFAULT_COUNTRY, TV_MAZE_API_ROOT } from 'common/utils/constants';

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
