export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => {
            return (
              <li key={id}>
                <p>{label}</p>
                <p>{percentage}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
