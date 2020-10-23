import classNames from 'classnames';
import React from 'react';

import styles from './Header.module.scss';

interface IHeaderProps {
  className?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  className
}) => {
  return (
    <header className={classNames(styles.Header, className)}>
      This is the header
    </header>
  );
};

export default Header;
