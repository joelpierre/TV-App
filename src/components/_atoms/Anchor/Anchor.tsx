import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './Anchor.module.scss';
import { EPageHref } from 'common/types/enums';

interface ILinkProps {
  className?: string;
  href: EPageHref;
  as: string;
}

const Anchor: React.FunctionComponent<ILinkProps> = ({
  className,
  href,
  as,
  children
}) => {
  return (
    <Link href={href} as={as} passHref={true}>
      <a className={classNames(styles.Anchor, className)}>
        {children}
      </a>
    </Link>
  );
};

export default Anchor;
