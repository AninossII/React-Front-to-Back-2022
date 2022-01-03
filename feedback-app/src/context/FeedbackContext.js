import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'This is feedback item 01', rating: 10 },
    { id: 2, text: 'This is feedback item 02', rating: 7 },
    { id: 3, text: 'This is feedback item 03', rating: 9 },
    { id: 4, text: 'This is feedback item 04', rating: 4 },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  // Add Feedback to the List
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Update Feedback on the List
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // Set item to be Updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // Dlete Feedback from the List
  const deleteFeedback = (id) => {
    if (window.confirm('Are you shure you want to Delete it?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        editFeedback,
        updateFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
