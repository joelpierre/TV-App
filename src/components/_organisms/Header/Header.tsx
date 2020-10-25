import classNames from 'classnames';
import React from 'react';

import styles from './Header.module.scss';
import Anchor from '@atoms/Anchor';
import { EPageHref } from 'common/types/enums';

interface IFooterProps {
  className?: string;
}

const Header: React.FunctionComponent<IFooterProps> = ({
  className
}) => {
  return (
    <header className={classNames(styles.Header, className)}>
      <div className={styles.Header__container}>
        <Anchor href={EPageHref.Home} as="/">
          <img
            data-testid="logo"
            className={styles.Header__logo}
            src="/images/tvm-header-logo.png"
            alt="Logo for TV Maze"
            width="200"
            loading="lazy"
          />
        </Anchor>
      </div>
    </header>
  );
};

export default Header;
