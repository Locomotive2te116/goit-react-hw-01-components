export const TransactionHistory = ({ items }) => {
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
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <th>{type}</th>
                <th>{amount}</th>
                <th>{currency}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
