import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>Upload Statistics{title}</h2>}
        <ul className={css.statList}>
          {stats.map(data => (
            <li className={css.item} key={data.id}>
              <span className={css.label}>{data.label}</span>
              <span className={css.percentage}>{data.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })
  ),
};
