import React from 'react';
import classNames from 'classnames';

import styles from './Ratings.module.scss';
import Star from '@atoms/Star';

interface IRatingsProps {
  className?: string;
  averageRating: number | null;
  withFigures?: boolean;
}

const Ratings: React.FunctionComponent<IRatingsProps> = ({
  className,
  averageRating,
  withFigures = false
}) => {
  const starRange = Array.from({ length: 5 }, (_, starItem) => starItem);
  const ratingOutOfFive = averageRating ? averageRating / 2 : 0;
  const roundedRating = Math.floor(ratingOutOfFive);

  return (
    <div className={classNames(styles.Ratings, className)}>
      {starRange.map((index) => {
        const starPosition = index + 1;
        return <Star key={index} className={styles.Ratings__star} isActive={starPosition <= roundedRating} />;
      })}

      {withFigures && (
        <span className={styles.Ratings__figures}>
          {ratingOutOfFive === 0 ? '(no rating)' : `${ratingOutOfFive}/5`}
        </span>
      )}
    </div>
  );
};

export default Ratings;
