import { useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import FormText from "./FormText";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [textLength, setTextLength] = useState(0);

  const { feedback, addFeedback, editFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedback.id) {
      setText(feedback.text);
      setSelectedNumber(feedback.rating);
    }
  }, [feedback]);

  useEffect(() => {
    if (!selectedNumber || text.trim().length <= 10) {
      if (selectedNumber) {
        setMessage("Text must be atleast 10 characters long!");
      } else if (!(text !== "" && text.trim().length <= 10)) {
        setMessage("Rating should be selected");
      } else {
        setMessage(
          "Rating should be selected and Text must be atleast 10 characters long!"
        );
      }
    } else {
      setMessage(null);
    }
    setTextLength(text.length);
  }, [text, selectedNumber]);

  const handleTextChange = (e) => setText(e.target.value);

  const handleClick = (i) => setSelectedNumber(i);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10 && selectedNumber) {
      const newFeedback = {
        id: feedback.id || uuidv4(),
        rating: selectedNumber,
        text: text,
      };

      feedback.id ? editFeedback(newFeedback) : addFeedback(newFeedback);

      setText("");
      setSelectedNumber(null);
    }
  };

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <RatingSelect
          handleClick={handleClick}
          selectedNumber={selectedNumber}
        />
        <FormText
          handleTextChange={handleTextChange}
          text={text}
          textLength={textLength}
        />
        <Button
          type="submit"
          isDisabled={!selectedNumber || text.trim().length <= 10}
        >
          Submit Feedback
        </Button>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
}
