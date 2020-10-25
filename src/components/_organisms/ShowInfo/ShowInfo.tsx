import React from 'react';
import classNames from 'classnames';

import styles from './ShowInfo.module.scss';
import { ITvShow, ITvShowCast, ITvShowImage } from 'common/types/interfaces';
import CastImage from '@atoms/CastImage';

export interface IShowInfoProps {
  className?: string;
  show: ITvShow;
}

interface IShowInfo {
  heading: string;
  content: string;
}

interface IShowCast {
  image?: ITvShowImage;
  characterName: string;
  realName: string;
}

const getCastInfo = (cast: ITvShowCast[]): IShowCast[] => {
  if (!cast) {
    return [];
  }
  return cast.map(people => {
    return {
      image: people.person.image,
      characterName: people.character.name,
      realName: people.person.name
    };
  });
};

const ShowInfo: React.FunctionComponent<IShowInfoProps> = ({
  className,
  show: { name, network, status, genres, _embedded }
}) => {
  const showInfo: IShowInfo[] = [
    { heading: 'Streamed On', content: network?.name },
    { heading: 'Schedule', content: name },
    { heading: 'Status', content: status },
    { heading: 'Genres', content: genres?.join(', ') }
  ];

  const castInfo = getCastInfo(_embedded?.cast);

  return (
    <div className={classNames(styles.ShowInfo, className)}>
      <div className={styles.ShowInfo__container}>
        <div className={styles.ShowInfo__details}>
          <h2 className={styles.ShowInfo__heading}>
            Show Info
          </h2>

          <table data-testid="show-info" className={styles.ShowInfo__table}>
            <tbody className={styles['ShowInfo__table-body']}>
              {showInfo.map((info, index) => {
                if (!info.content) {
                  return null;
                }
                return (
                  <tr key={`${info} ${index}`} className={styles['ShowInfo__table-row']}>
                    <th className={styles['ShowInfo__table-heading']}>{info.heading}</th>
                    <td className={styles['ShowInfo__table-cell']}>{info.content}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {castInfo.length > 0 && (
          <div className={styles.ShowInfo__cast}>
            <h2 className={`${styles.ShowInfo__heading} ${styles['ShowInfo__heading--cast']}`}>
              Starring
            </h2>

            <table data-testid="show-cast" className={styles.ShowInfo__table}>
              <tbody className={`${styles['ShowInfo__table-body']} ${styles['ShowInfo__table-body--cast']}`}>
                {castInfo.map((actor, index) => (
                  <tr key={`${actor.realName} ${index}`} className={styles['ShowInfo__table-row']}>
                    <td className={`${styles['ShowInfo__table-cell']} ${styles['ShowInfo__table-cell--image']}`}>
                      <CastImage image={actor.image} name={actor.realName} />
                    </td>
                    <th className={styles['ShowInfo__table-heading']}>
                      {actor.characterName}
                      <span className={styles['ShowInfo__real-name']}>
                        {actor.realName}
                      </span>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowInfo;
