import classNames from 'classnames';
import React from 'react';

import styles from './PageHero.module.scss';

interface IPageHeroProps {
  className?: string;
}

const PageHero: React.FunctionComponent<IPageHeroProps> = ({
  className
}) => {
  return (
    <article className={classNames(styles.PageHero, className)}>
      <div className={styles.PageHero__container}>
        <div className={styles.PageHero__content}>
          <h1 className={styles.PageHero__heading}>
            TV Bland
          </h1>
          <p className={styles.PageHero__copy}>
            TV Show and web series database.<br />Create personalised schedules.
            Episode guide, cast, crew and character information.
          </p>
        </div>
      </div>
    </article>
  );
};

export default PageHero;
