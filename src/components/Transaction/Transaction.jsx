import PropTypes from 'prop-types';
import {
  StyledTransaction,
  TransactionAmount,
  TransactionCurrency,
  TransactionType,
} from './transaction.styled';

export const Transaction = ({ index, type, amount, currency }) => {
  return (
    <StyledTransaction index={index}>
      <TransactionType>{type}</TransactionType>
      <TransactionAmount>{amount}</TransactionAmount>
      <TransactionCurrency>{currency}</TransactionCurrency>
    </StyledTransaction>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
