import PropTypes from 'prop-types';
import { StatsItem } from 'components/StatsItem/StatsItem';
import { Section, StatsList, Title } from './statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(item => (
          <StatsItem {...item} key={item.id} />
        ))}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
