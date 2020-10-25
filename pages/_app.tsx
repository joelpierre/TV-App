import { AppProps } from 'next/app';
import React from 'react';

import DefaultLayout from '@layouts/DefaultLayout';
import { ITvSchedule } from 'common/types/interfaces';

import AppProvider from '../src/context/AppContext';
import '../styles/global.scss';
import { AnimatePresence } from 'framer-motion';
import { fetchSchedule } from '../src/fetch/schedule';

interface IAppProps {
  tvSchedule: ITvSchedule[];
}

const App = ({ Component, pageProps, tvSchedule, router }: AppProps & IAppProps) => {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]);

  return (
    <AppProvider tvSchedule={tvSchedule}>
      <AnimatePresence exitBeforeEnter={true}>
        <React.Fragment key={router.asPath}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </React.Fragment>
      </AnimatePresence>
    </AppProvider>
  );
};

App.getInitialProps = async ({ ctx, Component }): Promise<Partial<AppProps> & Partial<IAppProps>> => {
  const page = ctx?.query?.page as string || '1';

  const tvSchedule = await fetchSchedule(page);

  return {
    pageProps: Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {},
    tvSchedule
  };
};

export default App;
