import axios from 'axios';
import { AppProps } from 'next/app';
import React from 'react';

import DefaultLayout from '@layouts/DefaultLayout';
import { ITvSchedule } from 'common/types/interfaces';
import { getHost, getProtocol } from 'common/utils/index';

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
  const { data: tvSchedule } = await axios
    .get(`${getProtocol()}${getHost(ctx?.req)}/api/schedule`)
    .catch(e => {
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
