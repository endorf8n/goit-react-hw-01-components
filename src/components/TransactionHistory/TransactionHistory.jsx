import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import { TitleHead, TransactionContainer } from './transactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <TransactionContainer>
        <thead>
          <tr>
            <TitleHead>Type</TitleHead>
            <TitleHead>Amount</TitleHead>
            <TitleHead>Currency</TitleHead>
          </tr>
        </thead>

        <tbody>
          {items.map((transaction, index) => (
            <Transaction index={index} {...transaction} key={transaction.id} />
          ))}
        </tbody>
      </TransactionContainer>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
