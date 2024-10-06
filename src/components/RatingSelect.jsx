import { useEffect, useState } from "react";
import FeedbackNumber from "./FeedbackNumber";

export default function RatingSelect({ handleClick, selectedNumber }) {
  const ratingNumbers = () => {
    let rating = [];
    for (let i = 1; i <= 10; i++) {
      rating.push(
        <FeedbackNumber
          key={i}
          rating={i}
          handleClick={handleClick}
          selectedNumber={selectedNumber}
        />
      );
    }
    return rating;
  };

  return (
    <div className="feedbackNumber-List" name="rating">
      {ratingNumbers()}
    </div>
  );
}
