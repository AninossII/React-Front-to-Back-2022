import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
  if (!feedback || feedback.lenth === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div>
      <div className="feedback-list">
        {feedback.map((Item) => (
          <FeedbackItem key={Item.id} item={Item} />
        ))}
      </div>
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeedbackList;