import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState({ text: "", rating: NaN });
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );

    const data = await response.json();

    setFeedbacks(data);
    setIsLoading(false);
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedbacks([data, ...feedbacks]);
  };

  const editFeedback = async (updatedFeedback) => {
    const response = await fetch(
      `http://localhost:5000/feedback/${updatedFeedback.id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedFeedback),
      }
    );

    const data = await response.json();

    console.log(data);

    setFeedbacks(
      feedbacks.map((fb) =>
        fb.id === updatedFeedback.id ? { ...fb, ...data } : fb
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

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you wanted to delete this?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE",
      });

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
        isLoading,
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
