import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState({ text: "", rating: NaN });
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const editFeedback = (updatedFeedback) => {
    setFeedbacks(
      feedbacks.map((fb) =>
        fb.id === updatedFeedback.id ? { ...fb, ...updatedFeedback } : fb
      )
    );
    setFeedback({ text: "", rating: NaN });
  };

  const loadFeedback = (id) => {
    setFeedback(
      feedbacks.find((item) => {
        return item.id === id;
      })
    );
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you wanted to delete this?")) {
      setFeedbacks(
        feedbacks.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbacks,
        addFeedback,
        loadFeedback,
        editFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
