import { useContext } from "react";
import FeedbackNumber from "./FeedbackNumber";
import { FaEdit, FaTrash } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackItem({ input }) {
  const { loadFeedback, deleteFeedback } = useContext(FeedbackContext);

  return (
    <div className="card">
      <FeedbackNumber rating={input.rating} />
      <div className="feedback-text">{input.text}</div>
      <FaEdit
        size={15}
        className="fa fa-edit"
        onClick={() => loadFeedback(input.id)}
      />
      <FaTrash
        size={13}
        className="fa fa-trash-o"
        onClick={() => deleteFeedback(input.id)}
      />
    </div>
  );
}
