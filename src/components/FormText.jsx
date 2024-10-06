import React from "react";

export default function FormText({ handleTextChange, text, textLength }) {
  return (
    <>
      <textarea
        name="feedback"
        placeholder="Please give your feedback..."
        className="feedback-form inp"
        onChange={handleTextChange}
        value={text}
        maxLength={200}
      ></textarea>
      <div className={`textLength ${textLength == 200 ? "limit" : ""}`}>
        ({textLength}/200)
      </div>
    </>
  );
}
