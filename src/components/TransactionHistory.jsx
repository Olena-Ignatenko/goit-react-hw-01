import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={css['transaction-history']}>
      <table className={css['transaction-history-table']}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <TransactionItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;