import React from 'react';
import classNames from 'classnames';

import styles from './Show.module.scss';
import { ITvShow } from 'common/types/interfaces';
import ShowHero from '@organisms/ShowHero';
import ShowInfo from '@organisms/ShowInfo';

interface IShowProps extends ITvShow {
  className?: string;
}

const Show: React.FunctionComponent<IShowProps> = ({
  className,
  ...show
}) => {
  return (
    <div className={classNames(styles.Show, className)}>
      <ShowHero show={show} />
      <ShowInfo show={show} />
    </div>
  );
};

export default Show;
