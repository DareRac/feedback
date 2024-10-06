export default function FeedbackNumber({
  rating,
  handleClick,
  selectedNumber,
}) {
  return (
    <div
      className={`feedbackNumber ${
        selectedNumber === rating ? "selectedNum" : ""
      }`}
      onClick={() => {
        return handleClick(rating);
      }}
    >
      {rating}
    </div>
  );
}
