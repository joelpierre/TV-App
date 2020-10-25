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
      <div className={styles.Footer__container}>
        <p className={styles.Footer__copy}>
          Created by Joel Pierre, {new Date().getFullYear()} |
          <a className={styles.Footer__link}
            href="https://github.com/joelpierre">https://github.com/joelpierre</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
