import { AppProps } from 'next/app';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

import DefaultLayout from '@layouts/DefaultLayout';
import { ITvSchedule } from 'common/types/interfaces';
import '../styles/global.scss';
import ScheduleProvider from '../src/context/ScheduleContext';

interface IAppProps {
  tvSchedule: ITvSchedule[];
}

const App = ({ Component, pageProps, tvSchedule, router }: AppProps & IAppProps) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]);

  return (
    <ScheduleProvider>
      <AnimatePresence exitBeforeEnter={true}>
        <React.Fragment key={router.asPath}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </React.Fragment>
      </AnimatePresence>
    </ScheduleProvider>
  );
};

export default App;
