import React from 'react';

import styles from './Loading.module.scss';

const Loading: React.FunctionComponent = () => {
  return (
    <div className={styles.Loading}>
      <div className={styles.Loading__container}>
        <h2 className={styles.Loading__heading}>
          ...Loading
        </h2>
      </div>
    </div>
  );
};

export default Loading;
