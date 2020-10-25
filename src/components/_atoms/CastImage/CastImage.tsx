import React from 'react';
import classNames from 'classnames';
import { ITvShowImage } from 'common/types/interfaces';

import styles from './CastImage.module.scss';

export interface ICastImageProps {
  className?: string;
  image: ITvShowImage;
  name: string;
}

const CastImage: React.FunctionComponent<ICastImageProps> = ({
  className,
  image,
  name
}) => {
  const imageSrc = image?.medium || image?.original;

  return (
    <div className={classNames(styles.CastImage, className, {
      [styles['CastImage--no-image']]: !image
    })}>
      {imageSrc && (
        <img
          src={imageSrc}
          className={styles.CastImage__image}
          alt={`${name} image`}
          width={58}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default CastImage;
