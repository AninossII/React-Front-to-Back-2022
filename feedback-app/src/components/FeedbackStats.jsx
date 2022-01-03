import { useContext } from 'react';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate ratingAvrige
  let ratingCalc =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  ratingCalc = ratingCalc.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(ratingCalc) ? 0 : ratingCalc}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  ratingCalc: PropTypes.string,
};

export default FeedbackStats;
