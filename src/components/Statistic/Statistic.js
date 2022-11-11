import PropTypes from 'prop-types';
import { Title, StatList, StatItem, Amount } from './Statistic.styled';
import { Notification } from 'components/Notification/Notification';

export function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <Title>Statistic</Title>
      {total ? (
        <StatList>
          <StatItem>
            Good: <Amount>{good}</Amount>
          </StatItem>
          <StatItem>
            Neutral: <Amount>{neutral}</Amount>
          </StatItem>
          <StatItem>
            Bad: <Amount>{bad}</Amount>
          </StatItem>
          <StatItem>
            Total: <Amount>{total}</Amount>
          </StatItem>
          <StatItem>
            Positive feedback: <Amount>{positivePercentage}%</Amount>
          </StatItem>
        </StatList>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};