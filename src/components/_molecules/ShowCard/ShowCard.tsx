import classNames from 'classnames';
import React from 'react';

import styles from './ShowCard.module.scss';

interface IShowCardProps {
  className?: string;
}

const ShowCard: React.FunctionComponent<IShowCardProps> = ({
  className
}) => {
  return (
    <section className={classNames(styles.ShowCard, className)}>
      This is a show card
    </section>
  );
};

export default ShowCard;
