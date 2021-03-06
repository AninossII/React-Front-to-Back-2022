import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
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
              <FeedbackItem key={Item.id} item={Item} />
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

export default FeedbackList;
