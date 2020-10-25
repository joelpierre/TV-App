import React from 'react';
import classNames from 'classnames';

import styles from './Star.module.scss';

interface IStarProps {
  className?: string;
  isActive?: boolean;
}

const Star: React.FunctionComponent<IStarProps> = ({
  className,
  isActive = false
}) => {
  return (
    <span
      className={classNames(styles.Star, className, {
        [styles['Star--is-active']]: isActive
      })}
    />
  );
};

export default Star;
