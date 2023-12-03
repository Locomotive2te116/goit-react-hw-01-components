import s from './transaction.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <div className={s.transactionHistory}>
      <table className={s.tablebord}>
        <thead className={s.bord}>
          <tr className={s.head}>
            <th className={s.headName}>Type</th>
            <th className={s.headName}>Amount</th>
            <th className={s.headName}>Currency</th>
          </tr>
        </thead>
        <tbody className={s.bord}>
          {items.map(({ id, type, amount, currency, index }) => {
            console.log(index);
            return (
              <tr
                className={index % 2 === 0 ? s.tablefull : s.tablefull2}
                key={id}
              >
                <th className={s.headName}>{type}</th>
                <th className={s.headName}>{amount}</th>
                <th className={s.headName}>{currency}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
