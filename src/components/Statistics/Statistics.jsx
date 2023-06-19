import { StatsItem } from 'components/StatsItem/StatsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(item => (
          <StatsItem {...item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};
