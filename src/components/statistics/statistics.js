import data from './data.json';
import PropTypes from 'prop-types';
import './Statistics.css';

export const Statistics = () => {
  return (
    <>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list" stats={data}>
          {data.map((data, key) => {
            return (
              <li className="item" key={data.id}>
                <span className="label">{data.label}</span>
                <span className="percentage">{data.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
