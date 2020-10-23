import classNames from 'classnames';
import React from 'react';

import styles from './Footer.module.scss';

interface IFooterProps {
  className?: string;
}

const Footer: React.FunctionComponent<IFooterProps> = ({
  className
}) => {
  return (
    <footer className={classNames(styles.Footer, className)}>
      This is the footer
    </footer>
  );
};

export default Footer;
