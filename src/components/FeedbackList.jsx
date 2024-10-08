import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

export default function FeedbackList() {
  const { isLoading, feedbacks, editFeedback, deleteFeedback } =
    useContext(FeedbackContext);

  if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
    return <div className="card">No Feedback Yet!</div>;
  }

  const feedbackList = () => {
    return (
      <AnimatePresence>
        {feedbacks.map((input) => (
          <motion.div
            key={input.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={input.id}
              input={input}
              handleEdit={editFeedback}
              handleDelete={deleteFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    );
  };

  return isLoading ? <Spinner /> : feedbackList();
}
