import React from 'react';
import classNames from 'classnames';

import styles from './Home.module.scss';
import PageHero from '@organisms/PageHero';
import Schedule from '@organisms/Schedule';
import Pagination from '@organisms/Pagination';
import usePage from '@hooks/usePage';

interface IHomeProps {
  className?: string;
}

const Home: React.FunctionComponent<IHomeProps> = ({
  className
}) => {
  const { isFirstPage } = usePage();

  return (
    <div className={classNames(styles.Home, className)}>
      {isFirstPage && (
        <PageHero className={styles.Home__hero} />
      )}
      <Schedule
        className={classNames(styles.Home__schedule, {
          [styles['Home__schedule--with-padding-top']]: !isFirstPage
        })}
        isFirstPage={isFirstPage}
      />
      <Pagination />
    </div>
  );
};

export default Home;
