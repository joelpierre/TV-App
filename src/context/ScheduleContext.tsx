import noop from 'lodash/noop';
import React, { Dispatch, SetStateAction } from 'react';
import { APP_TITLE } from 'common/utils/constants';
import { ITvSchedule } from 'common/types/interfaces';
import { fetchSchedule } from '../fetch';
import usePage from '@hooks/usePage';
import useIsMounted from '@hooks/useIsMounted';

export interface IScheduleContext {
  appTitle: string;
  tvSchedule: ITvSchedule[];
  setTvSchedule: Dispatch<SetStateAction<any>>;
}

const defaultValues: IScheduleContext = {
  appTitle: APP_TITLE,
  tvSchedule: [] as ITvSchedule[],
  setTvSchedule: noop
};

export const ScheduleContext = React.createContext<IScheduleContext>(defaultValues);

const ScheduleProvider: React.FunctionComponent<Partial<Pick<IScheduleContext, 'tvSchedule'>>> = ({
  children,
  tvSchedule: schedule = []
}) => {
  const isMounted = useIsMounted();
  const { page } = usePage();
  const [tvSchedule, setTvSchedule] = React.useState<ITvSchedule[]>(schedule);

  const asyncGetTvSchedule = async (currentPage: string) => {
    if (isMounted.current) {
      setTvSchedule(await fetchSchedule(currentPage));
    }
  };

  React.useEffect(() => {
    asyncGetTvSchedule(page);
  }, [page]);

  const setSchedule = (nextSchedule) => {
    if (isMounted.current) {
      setTvSchedule(nextSchedule);
    }
  };

  return (
    <ScheduleContext.Provider
      value={{
        ...defaultValues,
        tvSchedule,
        setTvSchedule: setSchedule
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleProvider;
