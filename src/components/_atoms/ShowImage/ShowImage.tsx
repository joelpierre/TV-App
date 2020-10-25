import React from 'react';
import classNames from 'classnames';
import { ITvShowImage } from 'common/types/interfaces';

import styles from './ShowImage.module.scss';

export interface IShowImageProps {
  className?: string;
  image: ITvShowImage;
  name: string;
}

const ShowImage: React.FunctionComponent<IShowImageProps> = ({
  className,
  image,
  name
}) => {
  const imageSrc = image?.medium || image?.original;

  return (
    <div className={classNames(styles.ShowImage, className, {
      [styles['ShowImage--no-image']]: !image
    })}>
      {imageSrc && (
        <img
          src={imageSrc}
          className={styles.ShowImage__image}
          alt={`${name} poster`}
          width={200}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ShowImage;
