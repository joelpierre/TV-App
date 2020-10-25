export const isClient = (): boolean => typeof window !== 'undefined';

export const getUrlRoot = process?.env?.NODE_ENV === 'production'
  ? 'https://tv-maze-app.vercel.app/'
  : 'http://localhost:3000/';

interface IDateFromPage {
  isoDate: string | undefined;
  date: string
}

export const getDateFromPage = (pageFromQuery: string): IDateFromPage => {
  const page = parseInt(pageFromQuery, 10) || 0;
  const today = new Date();
  const date = (page === 0
    ? today
    : new Date(today.setDate(today.getDate() + page)));
  return {
    isoDate: date ? date.toISOString().split('T')[0] : undefined,
    date: date?.toDateString()
  };
};
