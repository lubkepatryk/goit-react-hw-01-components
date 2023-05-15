import transactions from './transactions.json';
import PropTypes from 'prop-types';

export const TransactionHistory = () => {
  return (
    <>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transactions, key) => {
            return (
              <tr key={transactions.id}>
                <td>{transactions.type}</td>
                <td>{transactions.amount}</td>
                <td>{transactions.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};