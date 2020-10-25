import noop from 'lodash/noop';
import React, { Dispatch, SetStateAction } from 'react';

import useToggle from '@hooks/useToggle';
import { APP_TITLE } from 'common/utils/constants';
import { isClient } from 'common/utils/index';
import { ITvSchedule } from 'common/types/interfaces';
import { fetchSchedule } from '../fetch/schedule';
import usePage from '@hooks/usePage';

interface IAppContext {
  appTitle: string;
  isMenuOpen: boolean;
  setMenuOpen: () => void;
  tvSchedule: ITvSchedule[];
  setTvSchedule: Dispatch<SetStateAction<any>>;
}

const defaultValues: IAppContext = {
  appTitle: APP_TITLE,
  isMenuOpen: false,
  setMenuOpen: noop,
  tvSchedule: [] as ITvSchedule[],
  setTvSchedule: noop
};

export const AppContext = React.createContext<IAppContext>(defaultValues);

const AppProvider: React.FunctionComponent<Pick<IAppContext, 'tvSchedule'>> = ({
  children,
  tvSchedule: schedule = defaultValues.tvSchedule
}) => {
  const { page } = usePage();
  const [isMenuOpen, setMenuOpenState] = useToggle();
  const [tvSchedule, setTvSchedule] = React.useState<ITvSchedule[]>(schedule);

  const asyncGetTvSchedule = async (currentPage: string) => {
    setTvSchedule(await fetchSchedule(currentPage));
  };

  React.useEffect(() => {
    asyncGetTvSchedule(page);
  }, [page]);

  const setSchedule = (nextSchedule) => {
    setTvSchedule(nextSchedule);
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
