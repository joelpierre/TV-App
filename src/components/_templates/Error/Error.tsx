import React from 'react';
import classNames from 'classnames';

import styles from './Error.module.scss';
import Anchor from '@atoms/Anchor';
import { EPageHref } from 'common/types/enums';

interface IErrorProps {
  className?: string;
  status?: number;
}

const Error: React.FunctionComponent<IErrorProps> = ({
  className,
  status = 404
}) => {
  return (
    <div className={classNames(styles.Error, className, styles[`Error--${status}`])}>
      <div className={styles.Error__container}>
        <h1 className={styles.Error__heading}>
          404 Page Not Found
        </h1>
        <p className={styles.Error__copy}>
          Sorry looks like that page doesn't exist, try going back to the schedule page for today's listings.
        </p>

        <p className={styles.Error__copy}>
          <Anchor className={styles.Error__link} href={EPageHref.Home} as={EPageHref.Home}>
            Return Home
          </Anchor>
        </p>
      </div>
    </div>
  );
};

export default Error;
