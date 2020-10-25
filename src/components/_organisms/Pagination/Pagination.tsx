import React from 'react';
import classNames from 'classnames';
import Router from 'next/router';

import styles from './Pagination.module.scss';
import usePage from '@hooks/usePage';
import { getDateFromPage } from 'common/utils/index';
import Button from '@atoms/Button';

interface IPaginationProps {
  className?: string;
}

const Pagination: React.FunctionComponent<IPaginationProps> = ({
  className
}) => {
  const { page } = usePage();
  const { date } = getDateFromPage(page);
  const currentPage = parseInt(page, 10) || 0;
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  const onPrevClick = (event: React.MouseEvent) => {
    event.preventDefault();
    Router.push({
      pathname: '/',
      query: {
        page: prevPage
      }
    });
  };

  const onNextClick = (event: React.MouseEvent) => {
    event.preventDefault();
    Router.push({
      pathname: '/',
      query: {
        page: nextPage
      }
    });
  };

  return (
    <article className={classNames(styles.Pagination, className)}>
      <div className={styles.Pagination__container}>
        <div className={styles.Pagination__today}>
          <h3 className={styles.Pagination__heading}>
            Whats on: {date}
          </h3>
        </div>

        <div className={styles.Pagination__nav}>
          {currentPage !== 0 && (
            <Button
              className={classNames(
                styles.Pagination__cta,
                styles['Pagination__cta--prev']
              )}
              data-testid="prev-button"
              onClick={onPrevClick}
            >
              {'<'} View Previous Day
            </Button>
          )}


          <Button
            className={classNames(
              styles.Pagination__cta,
              styles['Pagination__cta--next']
            )}
            data-testid="next-button"
            onClick={onNextClick}
          >
            View Next Day {'>'}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Pagination;
