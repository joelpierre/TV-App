import React from 'react';
import classNames from 'classnames';
import styles from './Schedule.module.scss';
import ShowCard from '@molecules/ShowCard';
import { ScheduleContext } from '../../../context/ScheduleContext';
import { getDateFromPage } from 'common/utils/index';
import usePage from '@hooks/usePage';

interface IScheduleProps {
  className?: string;
  isFirstPage?: boolean;
}

const Schedule: React.FunctionComponent<IScheduleProps> = ({
  className,
  isFirstPage = true
}) => {
  const { tvSchedule } = React.useContext(ScheduleContext);
  const { page } = usePage();
  const { date } = getDateFromPage(page);

  return (
    <article className={classNames(styles.Schedule, className)}>
      <div className={styles.Schedule__container}>
        <h2
          className={classNames(styles.Schedule__heading, {
            [styles['Schedule__heading--text-dark']]: !isFirstPage
          })}
        >
          <span className={styles['Schedule__heading-text']}>
            Shows Airing: {date}
          </span>

          <span className={styles['Schedule__heading-results']}>
            {tvSchedule.length}&nbsp;results
          </span>
        </h2>

        {tvSchedule.length > 0 && (
          <ul data-testid="schedule-list" className={styles.Schedule__list}>
            {tvSchedule.map((scheduleItem, index) => (
              <li
                key={`${scheduleItem.id} ${index}`}
                className={styles.Schedule__item}
              >
                <ShowCard
                  className={styles.Schedule__card}
                  {...scheduleItem}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default Schedule;
