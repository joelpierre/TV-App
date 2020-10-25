import classNames from 'classnames';
import React from 'react';

import styles from './ShowHero.module.scss';
import { ITvShow } from 'common/types/interfaces';
import ShowImage from '@atoms/ShowImage';
import Ratings from '@molecules/Ratings';
import Anchor from '@atoms/Anchor';
import { EPageHref } from 'common/types/enums';
import useToggle from '@hooks/useToggle';

interface IShowHeroProps {
  className?: string;
  show: ITvShow;
}

const ShowHero: React.FunctionComponent<IShowHeroProps> = ({
  className,
  show: { image, name, rating: { average }, summary }
}) => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <article className={classNames(styles.ShowHero, className, {
      [styles['ShowHero--is-fluid']]: isOpen
    })}>
      <div className={styles.ShowHero__container}>
        <Anchor className={styles.ShowHero__link} href={EPageHref.Home} as="/">
          {'<'} Back to Schedule
        </Anchor>
        <span className={styles.ShowHero__heading}>
          TV Bland
        </span>

        <div className={styles['ShowHero__content-wrapper']}>
          <div className={styles['ShowHero__image-wrapper']}>
            <ShowImage image={image} name={name} />
          </div>

          <div className={styles.ShowHero__content}>
            <Ratings averageRating={average} className={styles.ShowHero__ratings} withFigures={true} />
            <h1 className={styles['ShowHero__show-title']}>
              {name}
            </h1>
            <div
              className={classNames(styles.ShowHero__copy, {
                [styles['ShowHero__copy--is-clamped']]: !isOpen
              })}
              dangerouslySetInnerHTML={{ __html: summary }}
            />
            <button className={styles['ShowHero__read-more']} onClick={setIsOpen}>
              {isOpen ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ShowHero;
