import React from 'react';
import classNames from 'classnames';
import { ITvShowImage } from 'common/types/interfaces';

import styles from './ShowImage.module.scss';

interface IShowImageProps {
  className?: string;
  image: ITvShowImage;
  name: string;
}

const ShowImage: React.FunctionComponent<IShowImageProps> = ({
  className,
  image,
  name
}) => {

  return (
    <div className={classNames(styles.ShowImage, className, {
      [styles['ShowImage--no-image']]: !image
    })}>
      {(image?.medium) && (
        <img
          src={image.medium}
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
