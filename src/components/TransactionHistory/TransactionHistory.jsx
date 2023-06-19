import { Transaction } from 'components/Transaction/Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(transaction => (
            <Transaction {...transaction} key={transaction.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};
