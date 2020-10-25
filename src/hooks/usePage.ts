import React from 'react';
import { useRouter } from 'next/router';

export interface IUsePage {
  page: string;
  isToday: boolean;
}

const usePage = (): IUsePage => {
  const router = useRouter();

  React.useEffect(() => {
    setState({
      page: router?.query?.page as string,
      isToday
    });
  }, [router?.query]);

  const page = router?.query?.page as string || '0';
  const isToday = !page || page === '0';
  const [state, setState] = React.useState<IUsePage>({
    page,
    isToday
  });

  return state;
};

export default usePage;
