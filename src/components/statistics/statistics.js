import PropTypes from 'prop-types';
import './statistics.css';

export const Statistics = ({ stats }) => {
  return (
    <>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {stats.map(data => (
            <li className="item" key={data.id}>
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape)({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
