import { StatisticsList, StatisticsElem } from './Statistics.styled';
import Notification from './Notification/Notification';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  const currentState = { good, neutral, bad };
  const keys = Object.keys(currentState);
  return (
    <StatisticsList>
      {total() ? (
        <>
          {keys.map(key => (
            <StatisticsElem key={key}>
              {key} : {currentState[key]}
            </StatisticsElem>
          ))}
          <StatisticsElem>total : {total()}</StatisticsElem>
          <StatisticsElem>
            positive feedback : {positivePercentage()}%
          </StatisticsElem>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </StatisticsList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
