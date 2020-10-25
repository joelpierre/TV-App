import classNames from 'classnames';
import React from 'react';

import styles from './ShowCard.module.scss';
import { ITvSchedule } from 'common/types/interfaces';
import Anchor from '@atoms/Anchor';
import { EPageHref, EPageType } from 'common/types/enums';
import Ratings from '@molecules/Ratings';
import ShowImage from '@atoms/ShowImage';

interface IShowCardProps extends ITvSchedule {
  className?: string;
}

const ShowCard: React.FunctionComponent<IShowCardProps> = ({
  className,
  show,
  airdate,
  airtime
}) => {
  const {
    id,
    image,
    name,
    rating: { average },
    network
  } = show || {};
  const formattedDate = new Date(airdate).toLocaleDateString('en-US');

  return (
    <Anchor
      className={classNames(styles.ShowCard, className)}
      href={EPageHref.Show}
      as={`/${EPageType.Show}/${id}`}
    >
      <article className={styles.ShowCard__content}>
        <p className={styles.ShowCard__meta}>
          Time: {airtime} <span className={styles['ShowCard__meta-time']}>(24hr)</span>
        </p>

        <p className={styles.ShowCard__meta}>
          Network: {network?.name}
        </p>

        <h3 className={styles.ShowCard__heading}>
          {name}
        </h3>

        <Ratings
          className={styles.ShowCard__ratings}
          averageRating={average}
        />

        <ShowImage className={styles.ShowCard__image} image={image} name={name} />
      </article>
    </Anchor>
  );
};

export default ShowCard;
