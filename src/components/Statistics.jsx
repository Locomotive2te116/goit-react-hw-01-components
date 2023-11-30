export const Statistics = ({ title, stats }) => {
    return (
      <>
        <section class="statistics">
          <h2 class="title">{title}</h2>
  
          <ul class="stat-list">
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