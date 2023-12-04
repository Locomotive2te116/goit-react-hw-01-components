import s from './statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => {
  return (
    <div className={s.wrapper}>
      <section className={s.card}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li className={s.board} key={id}>
                <p className={s.label}>{label}</p>
                <p className={s.percentage}>{percentage}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
