import PropTypes from 'prop-types';
import css from './TransactionItem.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={css['transaction-item']}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;