import React from 'react';
import { useRouter } from 'next/router';

export interface IUsePage {
  page: string;
  isFirstPage: boolean;
}

const usePage = (): IUsePage => {
  const router = useRouter();

  React.useEffect(() => {
    setState({
      page: router?.query?.page as string,
      isFirstPage
    });
  }, [router?.query]);

  const page = router?.query?.page as string || '0';
  const isFirstPage = !page || page === '0';
  const [state, setState] = React.useState<IUsePage>({
    page,
    isFirstPage
  });

  return state;
};

export default usePage;
