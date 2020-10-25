import React from 'react';
import classNames from 'classnames';

import styles from './Pagination.module.scss';
import usePage from '@hooks/usePage';
import { getDateFromPage } from 'common/utils/index';
import { EPageHref } from 'common/types/enums';

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

  return (
    <article className={classNames(styles.Pagination, className)}>
      <div className={styles.Pagination__container}>
        <div className={styles.Pagination__today}>
          <h3 className={styles.Pagination__heading}>
            Whats on: {date}
          </h3>
        </div>

        <div className={styles.Pagination__nav}>
          <a
            href={`${EPageHref.Home}?page=${prevPage}`}
            className={classNames(
              styles.Pagination__cta,
              styles['Pagination__cta--prev']
            )}
            data-testid="prev-link"
          >
            {'<'} View Previous Day
          </a>

          <a
            href={`${EPageHref.Home}?page=${nextPage}`}
            className={classNames(
              styles.Pagination__cta,
              styles['Pagination__cta--next']
            )}
            data-testid="next-link"
          >
            View Next Day {'>'}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Pagination;
