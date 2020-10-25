import React from 'react';
import classNames from 'classnames';

import styles from './Show.module.scss';
import { ITvShow } from 'common/types/interfaces';
import ShowHero from '@organisms/ShowHero';
import ShowInfo from '@organisms/ShowInfo';
import Error from '@templates/Error';

interface IShowProps extends ITvShow {
  className?: string;
}

const Show: React.FunctionComponent<IShowProps> = ({
  className,
  ...show
}) => {
  if (!show) {
    return <Error />;
  }

  return (
    <div className={classNames(styles.Show, className)}>
      <ShowHero show={show} />
      <ShowInfo show={show} />
    </div>
  );
};

export default Show;
