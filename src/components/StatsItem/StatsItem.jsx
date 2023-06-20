import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './statsItem.styled';

export const StatsItem = ({ label, percentage }) => {
  const bgColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <Item bgColor={bgColor}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
