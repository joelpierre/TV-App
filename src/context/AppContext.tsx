import noop from 'lodash/noop';
import React, { Dispatch, SetStateAction } from 'react';

import useToggle from '@hooks/useToggle';
import { APP_TITLE } from 'common/utils/constants';

interface IAppContext {
  appTitle: string;
  isMenuOpen: boolean;
  setMenuOpen: () => void;
  tvSchedule: any;
  setTvSchedule: Dispatch<SetStateAction<any>>;
}

interface IAppProvider {
  tvSchedule?: any;
}

const defaultValues: IAppContext = {
  appTitle: APP_TITLE,
  isMenuOpen: false,
  setMenuOpen: noop,
  tvSchedule: {},
  setTvSchedule: noop
};

export const AppContext = React.createContext<IAppContext>(defaultValues);

const AppProvider: React.FunctionComponent<IAppProvider> = ({
  children,
  tvSchedule: schedule = {}
}) => {
  const [isMenuOpen, setMenuOpenState] = useToggle();
  const [tvSchedule, setTvSchedule] = React.useState(schedule);

  const setSchedule = (nextSchedule) => {
    setTvSchedule((prevState) => ({
      ...prevState,
      ...nextSchedule
    }));
  };

  const setMenuOpen = () => {
    if (isClient()) {
      window.document.body.classList.toggle('body--overflow-hidden');
    }
    setMenuOpenState();
  };

  return (
    <AppContext.Provider
      value={{
        ...defaultValues,
        isMenuOpen,
        setMenuOpen,
        tvSchedule,
        setTvSchedule: setSchedule
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
