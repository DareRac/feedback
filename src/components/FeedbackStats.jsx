import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);
  let len = feedbacks.length;
  let average = len
    ? feedbacks.reduce((acc, cur) => {
        return acc + cur.rating;
      }, 0) / len
    : 0;
  average = average.toFixed(1);
  return (
    <div className="feedbackStats">
      <div>{len} Feedbacks</div>
      <div>Average Rating: {average}</div>
    </div>
  );
}
