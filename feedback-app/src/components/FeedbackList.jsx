import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div>
      <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map((Item) => (
            <motion.div
              key={Item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={Item.id}
                item={Item}
                handleDelete={handleDelete}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div className='feedback-list'>
  //       {feedback.map((Item) => (
  //         <FeedbackItem key={Item.id} item={Item} handleDelete={handleDelete} />
  //       ))}
  //     </div>
  //   </div>
  // );
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
