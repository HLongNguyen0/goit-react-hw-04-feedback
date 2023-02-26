import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const keys = Object.keys(options);
  return keys.map(key => (
    <Button
      key={key}
      type="button"
      name={key}
      onClick={() => onLeaveFeedback(key)}
    >
      {key}
    </Button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
